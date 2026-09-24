// scripts/verify_senior_2026.js
// 自動化驗證《高三理組數學思維本(2026)》全書簡報系統

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DEMO_DIR = path.join(__dirname, '..', 'demo');

console.log("=== 開始自動化驗證《高三理組數學思維本(2026)》 ===");

// 1. 檢查所有章節腳本存在性與語法
const CHAPTER_FILES = [
  "ch-calc-01.js",
  "ch-calc-02.js",
  "ch-calc-03.js",
  "ch-calc-04.js",
  "ch-calc-05.js",
  "ch-senior-06.js",
  "ch-senior-07.js",
  "ch-senior-08.js",
  "ch-senior-09.js",
  "ch-senior-10.js",
  "ch-senior-11.js",
  "ch-senior-12.js",
  "ch-senior-13.js",
  "ch-senior-14.js",
  "ch-senior-15.js",
  "ch-senior-16.js",
  "ch-senior-17.js",
  "ch-senior-18.js",
  "ch-senior-19.js",
  "ch-senior-20.js"
];

const sandbox = {
  window: {},
  console: console
};
sandbox.window = sandbox;
vm.createContext(sandbox);

let totalSlidesCount = 0;
let ommlCount = 0;

for (const fname of CHAPTER_FILES) {
  const filePath = path.join(DEMO_DIR, fname);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] 檔案不存在: ${fname}`);
    process.exit(1);
  }
  const code = fs.readFileSync(filePath, 'utf8');
  try {
    vm.runInContext(code, sandbox);
  } catch (e) {
    console.error(`[FAIL] 執行 ${fname} 語法報錯:`, e);
    process.exit(1);
  }
}

const DECK = sandbox.window.DECK;
console.log(`[PASS] 成功加載全部 20 大專題！總章節數: ${DECK.length}`);

DECK.forEach((chapter, chIdx) => {
  const slides = chapter.slides || [];
  totalSlidesCount += slides.length;
  slides.forEach((s, sIdx) => {
    if (!s.q) {
      console.error(`[FAIL] 題目為空: 專題 ${chIdx + 1} 第 ${sIdx + 1} 題`);
      process.exit(1);
    }
    const sol = s.solution || {};
    if (!sol.ans) {
      console.warn(`[WARN] 答案為空: 專題 ${chIdx + 1} 第 ${sIdx + 1} 題`);
    }
    if (sol.omml && sol.omml.includes('<m:oMath')) {
      ommlCount++;
    } else {
      console.warn(`[WARN] OMML 缺失或格式不符: 專題 ${chIdx + 1} ${s.qNum}`);
    }
  });
});

console.log(`[PASS] 全部卡片審查完畢！總卡片數: ${totalSlidesCount}，OMML 方程式注入數: ${ommlCount}`);
if (ommlCount !== totalSlidesCount) {
  console.error(`[FAIL] OMML 注入未達 100%! (${ommlCount}/${totalSlidesCount})`);
  process.exit(1);
}

// 2. 檢查 deck2026.html 與 omml.html
const deckHtmlPath = path.join(DEMO_DIR, 'deck2026.html');
const ommlHtmlPath = path.join(DEMO_DIR, 'omml.html');
const docxPath = path.join(DEMO_DIR, '高三理組數學思維本_2026_參考答案_OMML對照手冊.docx');
const xmlPath = path.join(DEMO_DIR, '高三理組數學思維本_2026_參考答案_OMML彙編.xml');

[deckHtmlPath, ommlHtmlPath, docxPath, xmlPath].forEach(fp => {
  if (!fs.existsSync(fp) || fs.statSync(fp).size === 0) {
    console.error(`[FAIL] 必要產出文件不存在或為空: ${path.basename(fp)}`);
    process.exit(1);
  }
  console.log(`[PASS] 驗證成功: ${path.basename(fp)} (${(fs.statSync(fp).size / 1024).toFixed(1)} KB)`);
});

console.log("\n🎉 《高三理組數學思維本(2026)》全套系統 100% 通過自動化驗證！");
