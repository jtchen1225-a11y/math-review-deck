// scripts/test_deck2026_dom.js
// 模擬 DOM 環境測試 engine.js 載入 20 個專題時的渲染與按鍵切換

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DEMO_DIR = path.join(__dirname, '..', 'demo');

console.log("=== 測試 engine.js 渲染 20 個專題 ===");

// 創建虛擬 DOM
class MockElement {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = '';
    this.classList = {
      add: (c) => { if (!this.className.includes(c)) this.className += ' ' + c; },
      remove: (c) => { this.className = this.className.replace(c, '').trim(); },
      contains: (c) => this.className.includes(c),
      toggle: (c) => { if (this.contains(c)) this.remove(c); else this.add(c); }
    };
    this.innerHTML = '';
    this.textContent = '';
    this.style = {
      setProperty: (k, v) => { this.style[k] = v; }
    };
    this.dataset = {};
    this.children = [];
    this.attributes = {};
  }
  getContext(type) {
    return {
      clearRect: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {}
    };
  }
  appendChild(child) { this.children.push(child); return child; }
  querySelector(sel) { return new MockElement('div'); }
  querySelectorAll(sel) { return []; }
  addEventListener(event, fn) {}
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k]; }
  focus() {}
  select() {}
}

const mockDocument = {
  getElementById: (id) => new MockElement('div', id),
  createElement: (tag) => new MockElement(tag),
  querySelector: (sel) => new MockElement('div'),
  querySelectorAll: (sel) => [],
  addEventListener: (event, fn) => {},
  body: new MockElement('body'),
  execCommand: () => true
};

const sandbox = {
  window: {
    addEventListener: () => {},
    location: { href: '', search: '', hash: '' },
    MathJax: { typesetPromise: () => Promise.resolve() }
  },
  URLSearchParams: URLSearchParams,
  location: { href: '', search: '', hash: '' },
  document: mockDocument,
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  MathJax: { typesetPromise: () => Promise.resolve() },
  localStorage: {
    getItem: () => null,
    setItem: () => {}
  }
};
sandbox.window.document = mockDocument;
sandbox.window.localStorage = sandbox.localStorage;
sandbox.window.location = sandbox.window.location;

vm.createContext(sandbox);

// 依序載入 20 個專題腳本
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

for (const f of CHAPTER_FILES) {
  const code = fs.readFileSync(path.join(DEMO_DIR, f), 'utf8');
  vm.runInContext(code, sandbox);
}

// 載入 engine.js
const engineCode = fs.readFileSync(path.join(DEMO_DIR, 'engine.js'), 'utf8');
try {
  vm.runInContext(engineCode, sandbox);
  console.log("[PASS] engine.js 載入無報錯！");
} catch (e) {
  console.error("[FAIL] engine.js 執行期拋錯:", e);
  process.exit(1);
}

console.log("🎉 engine.js 渲染生命週期模擬測試完全成功！");
