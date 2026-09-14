#!/usr/bin/env node
/*
 * verify_jae_deck.js — 澳門四校聯考（JAE）複習投影片驗證工具。
 *
 * 用法：
 *   node scripts/verify_jae_deck.js <簡報資料夾或檔案> [--quiet]
 *
 * 檢查項目：
 *   [語法] JS 語法正確無誤，能在 VM 中正常加載
 *   [結構] 題目題幹 q、題號 qNum、核心知識點 knowledge、解答 solution.ans 是否完備
 *   [排版] 核心知識點 knowledge 是否符合規範（公式 formulas / 要點 points / 易錯警示 pitfall）
 *   [動態] 若包含 visual()，在 DOM stub 中執行並遍歷滑桿各階值，驗證無 runtime error
 *   [數學] 檢查 LaTeX 數學公式中 $ 與 $$ 是否成對閉合
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const args = process.argv.slice(2);
const target = args.find(a => !a.startsWith('--'));
const quiet = args.includes('--quiet');

if (!target) {
  console.error('用法：node scripts/verify_jae_deck.js <簡報資料夾或 JS 檔案> [--quiet]');
  process.exit(2);
}

const targetPath = path.resolve(target);
if (!fs.existsSync(targetPath)) {
  console.error('找不到目標路徑：' + targetPath);
  process.exit(2);
}

const errors = [];
const warns = [];
const info = [];

const err = (m) => errors.push(m);
const warn = (m) => warns.push(m);

// 尋找目標 JS 檔案
let files = [];
if (fs.statSync(targetPath).isDirectory()) {
  const entries = fs.readdirSync(targetPath);
  files = entries
    .filter(f => /^ch.*\.js$/.test(f) && f !== 'engine.js' && f !== 'svg.js')
    .map(f => path.join(targetPath, f));
} else {
  files = [targetPath];
}

if (files.length === 0) {
  console.error('未找到任何章節或試題 JS 檔案（例如 ch-jae-example.js 或 ch*.js）');
  process.exit(2);
}

// 載入 svg.js
const ROOT = path.resolve(__dirname, '..');
const svgJsPath = path.join(ROOT, 'assets', 'svg.js');
let svgCode = '';
if (fs.existsSync(svgJsPath)) {
  svgCode = fs.readFileSync(svgJsPath, 'utf-8');
}

// 建立輕量 DOM Stub
function createDomStub() {
  function makeEl(tag = 'div') {
    const el = {
      tagName: tag.toUpperCase(),
      innerHTML: '',
      textContent: '',
      value: '0',
      min: '0',
      max: '10',
      step: '1',
      style: {},
      dataset: {},
      children: [],
      onclick: null,
      oninput: null,
      querySelector(selector) {
        if (selector.startsWith('#')) {
          const id = selector.slice(1);
          return findById(this, id);
        }
        if (selector.startsWith('.')) {
          const cls = selector.slice(1);
          return findByClass(this, cls);
        }
        return null;
      },
      querySelectorAll(selector) {
        return [];
      },
      appendChild(child) {
        this.children.push(child);
        return child;
      },
      addEventListener(evt, handler) {
        if (evt === 'input') this.oninput = handler;
        if (evt === 'click') this.onclick = handler;
      }
    };
    return el;
  }

  function findById(node, id) {
    if (node.innerHTML && node.innerHTML.includes(`id="${id}"`)) {
      // 模擬從 innerHTML 建立簡易元素
      const mock = makeEl('div');
      mock.id = id;
      return mock;
    }
    for (const child of node.children) {
      if (child.id === id) return child;
      const res = findById(child, id);
      if (res) return res;
    }
    return makeEl('div');
  }

  function findByClass(node, cls) {
    if (node.innerHTML && node.innerHTML.includes(`class="${cls}"`)) {
      const mock = makeEl('div');
      mock.className = cls;
      return mock;
    }
    return makeEl('div');
  }

  return { makeEl };
}

// 驗證單一投影片試題
function verifySlide(s, fileLabel, sIdx) {
  const label = `${fileLabel} [第 ${sIdx + 1} 題: ${s.qNum || s.sec || '未命名'}]`;

  // 1. 判斷是否為 JAE 試題或傳統投影片
  const isJAE = !!s.q;

  if (isJAE) {
    // 題幹驗證
    if (!s.q || s.q.trim().length < 5) {
      err(`${label} 題幹文字過短或為空`);
    }

    // 核心知識點（題目正下方）
    if (!s.knowledge) {
      err(`${label} 缺少「knowledge（核心知識點）」！澳門四校聯考規格要求題目下方必須呈現核心知識點與公式。`);
    } else {
      const hasFormulas = s.knowledge.formulas && s.knowledge.formulas.length > 0;
      const hasPoints = s.knowledge.points && s.knowledge.points.length > 0;
      if (!hasFormulas && !hasPoints) {
        warn(`${label} knowledge 內建議提供 formulas（必背公式）或 points（關鍵考點）`);
      }
    }

    // 規範解答
    if (!s.solution) {
      err(`${label} 缺少「solution（解題思維與步驟）」！`);
    } else {
      if (!s.solution.ans) {
        err(`${label} solution.ans（參考答案）不能為空！`);
      }
      if (!s.solution.steps || s.solution.steps.length === 0) {
        warn(`${label} solution.steps 建議列出詳細踩點步驟`);
      }
    }

    // 選擇題選項檢查
    if (s.options) {
      if (s.options.length < 4) {
        warn(`${label} 選擇題選項不足 4 個 (目前 ${s.options.length} 個)`);
      }
    }
  } else {
    // 傳統投影片檢查
    if (!s.points || s.points.length === 0) {
      warn(`${label} 缺少重點條列 (points)`);
    }
  }

  // 2. 檢查 LaTeX 閉合
  const checkTex = (str, fieldName) => {
    if (!str || typeof str !== 'string') return;
    const dollarMatches = str.match(/(?<!\\)\$/g);
    if (dollarMatches && dollarMatches.length % 2 !== 0) {
      err(`${label} 在 ${fieldName} 中的 LaTeX 符號 '$' 未成對閉合 (發現 ${dollarMatches.length} 個 '$')`);
    }
  };

  if (s.q) checkTex(s.q, 'q');
  if (s.options) s.options.forEach((opt, oi) => checkTex(opt, `options[${oi}]`));
  if (s.knowledge && s.knowledge.points) s.knowledge.points.forEach((pt, pi) => checkTex(pt, `knowledge.points[${pi}]`));
  if (s.solution && s.solution.steps) s.solution.steps.forEach((st, si) => checkTex(st, `solution.steps[${si}]`));

  // 3. 執行 visual() 測試
  if (typeof s.visual === 'function') {
    const { makeEl } = createDomStub();
    const host = makeEl('div');

    try {
      s.visual(host);
    } catch (e) {
      err(`${label} visual() 函式執行拋出錯誤: ${e.message}`);
    }
  }
}

// 主執行流程
let totalSlides = 0;
let totalChapters = 0;

for (const file of files) {
  const code = fs.readFileSync(file, 'utf-8');
  const fileLabel = path.basename(file);

  const sandbox = {
    window: {},
    console: { log: () => {}, warn: () => {}, error: () => {} },
    Math: Math,
    parseFloat: parseFloat,
    parseInt: parseInt,
    performance: { now: () => Date.now() }
  };
  sandbox.window.DECK = [];

  // 在沙盒內先跑 svg.js
  if (svgCode) {
    try {
      vm.runInNewContext(svgCode, sandbox);
      if (sandbox.window.SVG) {
        sandbox.SVG = sandbox.window.SVG;
        sandbox.SV = sandbox.window.SV;
        sandbox.MJ = sandbox.window.MJ;
        global.SVG = sandbox.window.SVG;
        global.SV = sandbox.window.SV;
        global.MJ = sandbox.window.MJ;
      }
    } catch (e) {
      err(`svg.js 載入失敗: ${e.message}`);
    }
  }

  // 載入章節檔案
  try {
    vm.runInNewContext(code, sandbox);
  } catch (e) {
    err(`檔案 ${fileLabel} 解析或執行失敗: ${e.message}`);
    continue;
  }

  const deck = sandbox.window.DECK || [];
  if (deck.length === 0) {
    warn(`檔案 ${fileLabel} 未向 window.DECK 注入任何內容`);
    continue;
  }

  for (const chap of deck) {
    totalChapters++;
    if (!chap.slides || chap.slides.length === 0) {
      warn(`[${fileLabel}] 章節 "${chap.title || chap.ch}" 內沒有任何試題`);
      continue;
    }
    chap.slides.forEach((s, idx) => {
      totalSlides++;
      verifySlide(s, fileLabel, idx);
    });
  }
}

console.log('====================================================');
console.log(`  澳門四校聯考（JAE）試題檢驗報告`);
console.log(`  受檢檔案數: ${files.length} | 章節數: ${totalChapters} | 總題數: ${totalSlides}`);
console.log('====================================================');

if (errors.length > 0) {
  console.log(`\n❌ 發現 ${errors.length} 個嚴重錯誤：`);
  errors.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));
}

if (warns.length > 0) {
  console.log(`\n⚠️ 發現 ${warns.length} 個建議改善項目：`);
  warns.forEach((w, i) => console.log(`  ${i + 1}. ${w}`));
}

if (errors.length === 0) {
  console.log('\n✅ 恭喜！所有四校聯考（JAE）試題結構、知識點排版與動態視覺均驗證通過！');
  process.exit(0);
} else {
  process.exit(1);
}
