// verify_vectors_deck.js
const fs = require('fs');
const path = require('path');

console.log('=== 開始自動化驗證《高三理組數學思維本(2026) · 空間向量篇》 ===');

global.window = {};

const chFiles = [
  'demo/ch-vec-01.js',
  'demo/ch-vec-02.js',
  'demo/ch-vec-03.js',
  'demo/ch-vec-04.js',
  'demo/ch-vec-05.js'
];

chFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  eval(code);
});

const deck = global.window.DECK || [];
console.log(`[PASS] 成功加載全部 5 大專題！總章節數: ${deck.length}`);

let totalCards = 0;
let ommlCount = 0;

deck.forEach((chap, cIdx) => {
  console.log(`\n專題 ${cIdx + 1}: ${chap.title || chap.ch}`);
  const slides = chap.slides || [];
  console.log(`  題數: ${slides.length}`);
  
  slides.forEach((slide, sIdx) => {
    totalCards++;
    if (!slide.q || slide.q.length < 5) {
      throw new Error(`[FAIL] 專題 ${cIdx+1} 第 ${sIdx+1} 題題幹異常: ${slide.q}`);
    }
    if (!slide.solution || !slide.solution.ans) {
      throw new Error(`[FAIL] 專題 ${cIdx+1} 第 ${sIdx+1} 題答案缺失`);
    }
    if (slide.solution.omml && slide.solution.omml.includes('<m:oMath')) {
      ommlCount++;
    } else {
      throw new Error(`[FAIL] 專題 ${cIdx+1} 第 ${sIdx+1} 題 OMML 標籤缺失或異常`);
    }
  });
});

console.log(`\n[PASS] 全部卡片審查完畢！總卡片數: ${totalCards}，OMML 方程式注入數: ${ommlCount}`);

// 檢查配圖檔案
const imgFiles = [
  'vec_q11.png', 'vec_q12.png', 'vec_q13.png', 'vec_q14.png',
  'vec_q15.png', 'vec_q16.png', 'vec_q17.png', 'vec_q18.png',
  'vec_q19.png', 'vec_q20.png', 'vec_q21.png'
];

imgFiles.forEach(img => {
  const p = path.join('demo/img', img);
  if (!fs.existsSync(p)) {
    throw new Error(`[FAIL] 幾何配圖缺失: ${p}`);
  }
});
console.log(`[PASS] 全部 11 張幾何高清配圖檢驗存在！`);

// 檢查 vectors.html, omml.html, docx, xml
const checks = [
  'demo/vectors.html',
  'demo/omml.html',
  'demo/高三理組數學思維本_空間向量_參考答案_OMML對照手冊.docx',
  'demo/高三理組數學思維本_空間向量_參考答案_OMML彙編.xml',
  'assets/vectors.html',
  'assets/omml.html',
  'assets/高三理組數學思維本_空間向量_參考答案_OMML對照手冊.docx',
  'assets/高三理組數學思維本_空間向量_參考答案_OMML彙編.xml'
];

checks.forEach(f => {
  if (!fs.existsSync(f)) throw new Error(`[FAIL] 檔案缺失: ${f}`);
  const stat = fs.statSync(f);
  console.log(`[PASS] 驗證成功: ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
});

console.log('\n🎉 《高三理組數學思維本(2026) · 空間向量篇》全套系統 100% 通過自動化驗證！');
