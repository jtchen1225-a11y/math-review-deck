/* 2026 高三理組數學思維本 — 專題十六 三角函數與解三角形 (3 題) - 支援 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題十六 三角函數與解三角形",
  "year": "2026",
  "paper": "專題十六",
  "title": "專題十六 三角恆等變換、正弦型函數圖形與性質、解三角形與幾何最值",
  "color": "#f97316",
  "sections": [
    "二倍角降冪與輔助角公式化簡",
    "正弦型函數最小正週期與奇偶性判定",
    "誘導公式與三角形半角公式聯立",
    "正弦定理與餘弦定理綜合求邊長",
    "三角形面積公式與最優幾何估算"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題十六",
      "qNum": "解答題 第1題",
      "topic": "三角恆等變換、正弦型週期與解三角形綜合",
      "score": "12分",
      "q": "[四校聯考 2023 正卷] 已知函數 $f(x) = \\sqrt{3} \\sin(2\\omega x) - 2 \\cos^2(\\omega x)$（$\\omega > 0$）的最小正週期為 $3\\pi$。<br>(a) 求 $f(x)$ 的解析表達式；<br>(b) 在 $\\triangle ABC$ 中，若 $f(C) = 0$，且 $2\\sin^2 B = \\cos B + \\cos(A - C)$，求 $\\sin A$ 的值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "2\\cos^2(\\omega x) = 1 + \\cos(2\\omega x)",
          "a\\sin\\theta + b\\cos\\theta = \\sqrt{a^2+b^2}\\sin(\\theta + \\phi)",
          "T = \\frac{2\\pi}{2\\omega} = \\frac{\\pi}{\\omega}"
        ],
        "points": [
          "<b>輔助角降冪綜合化簡</b>：二倍角降冪後提取振幅 2，化為標準單一正弦型函數 $A\\sin(\\Omega x + \\phi) + B$。"
        ]
      },
      "solution": {
        "thinking": "利用二倍角降冪公式化簡 $f(x)$，由週期求出 $\\omega$；在三角形中由 $f(C)=0$ 確定角 $C$，再利用誘導公式求 $\\sin A$。",
        "steps": [
          "第一步 (a) 化簡：$f(x) = \\sqrt{3}\\sin(2\\omega x) - (1 + \\cos 2\\omega x) = \\sqrt{3}\\sin(2\\omega x) - \\cos(2\\omega x) - 1$。",
          "第二步：輔助角公式：$f(x) = 2\\left(\\frac{\\sqrt{3}}{2}\\sin(2\\omega x) - \\frac{1}{2}\\cos(2\\omega x)\\right) - 1 = 2\\sin\\left(2\\omega x - \\frac{\\pi}{6}\\right) - 1$。",
          "第三步：週期公式：$T = \\frac{2\\pi}{2\\omega} = \\frac{\\pi}{\\omega} = 3\\pi \\implies \\omega = \\frac{1}{3}$。故 $f(x) = 2\\sin\\left(\\frac{2}{3}x - \\frac{\\pi}{6}\\right) - 1$。",
          "第四步 (b)：令 $f(C) = 0 \\implies 2\\sin\\left(\\frac{2}{3}C - \\frac{\\pi}{6}\\right) - 1 = 0 \\implies \\sin\\left(\\frac{2}{3}C - \\frac{\\pi}{6}\\right) = \\frac{1}{2}$。<br>因 $C \\in (0, \\pi)$，$-\\frac{\\pi}{6} < \\frac{2}{3}C - \\frac{\\pi}{6} < \\frac{\\pi}{2}$，故 $\\frac{2}{3}C - \\frac{\\pi}{6} = \\frac{\\pi}{6} \\implies \\frac{2}{3}C = \\frac{\\pi}{3} \\implies C = \\frac{\\pi}{2}$。",
          "第五步：因 $C = \\frac{\\pi}{2}$，則 $\\triangle ABC$ 為直角三角形，$A + B = \\frac{\\pi}{2} \\implies B = \\frac{\\pi}{2} - A$。<br>$\\cos(A - C) = \\cos\\left(A - \\frac{\\pi}{2}\\right) = \\cos\\left(\\frac{\\pi}{2} - A\\right) = \\sin A$；<br>$\\cos B = \\cos\\left(\\frac{\\pi}{2} - A\\right) = \\sin A$；<br>$\\sin B = \\sin\\left(\\frac{\\pi}{2} - A\\right) = \\cos A$。",
          "第六步：代入已知條件 $2\\sin^2 B = \\cos B + \\cos(A - C)$：<br>$2\\cos^2 A = \\sin A + \\sin A = 2\\sin A \\implies \\cos^2 A = \\sin A$。",
          "第七步：代換 $\\cos^2 A = 1 - \\sin^2 A$ 得：$1 - \\sin^2 A = \\sin A \\implies \\sin^2 A + \\sin A - 1 = 0$。<br>解得 $\\sin A = \\frac{-1 \\pm \\sqrt{1 - 4(1)(-1)}}{2} = \\frac{-1 \\pm \\sqrt{5}}{2}$。因 $\\sin A > 0$，捨去負根，得 $\\sin A = \\frac{\\sqrt{5} - 1}{2}$（黃金分割比！）。"
        ],
        "ans": "(a) $f(x) = 2\\sin\\left(\\frac{2}{3}x - \\frac{\\pi}{6}\\right) - 1$；(b) $\\sin A = \\frac{\\sqrt{5} - 1}{2}$",
        "trick": "$C=90^\\circ$ 確定直角三角形，條件迅速坍縮為 $1-\\sin^2 A = \\sin A$，直接解出著名的黃金分割值 $\\frac{\\sqrt{5}-1}{2}$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>(a) $f(x) = 2\\sin≤ft(\\frac{2}{3}x - \\frac{\\pi}{6}\\right) - 1$；(b) $\\sin A = \\frac{\\sqrt{5} - 1}{2}</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十六",
      "qNum": "單選題 第12題",
      "topic": "倍角降冪化簡與三角函數奇偶性、週期性",
      "score": "4分",
      "q": "已知函數 $f(x) = (1 + \\cos 2x)\\sin^2 x$（$x \\in \\mathbb{R}$），則 $f(x)$ 是 $(\\quad)$。",
      "options": [
        "A. 最小正週期為 $\\pi$ 的奇函數",
        "B. 最小正週期為 $\\frac{\\pi}{2}$ 的奇函數",
        "C. 最小正週期為 $\\pi$ 的偶函數",
        "D. 最小正週期為 $\\frac{\\pi}{2}$ 的偶函數"
      ],
      "knowledge": {
        "formulas": [
          "1 + \\cos 2x = 2\\cos^2 x",
          "2\\sin x\\cos x = \\sin 2x",
          "\\sin^2 2x = \\frac{1 - \\cos 4x}{2}"
        ],
        "points": [
          "<b>三角積化單倍角</b>：利用倍角公式 $2\\sin x\\cos x = \\sin 2x$ 把二次乘積化為單一餘弦式，精確判定週期與奇偶性。"
        ]
      },
      "solution": {
        "thinking": "利用二倍角公式化簡 $f(x)$ 為單一三角函數，再分析其週期和奇偶性。",
        "steps": [
          "第一步：由二倍角公式，代換 $1 + \\cos 2x = 2\\cos^2 x$。",
          "第二步：$f(x) = (2\\cos^2 x)\\sin^2 x = 2(\\sin x\\cos x)^2 = 2\\left(\\frac{1}{2}\\sin 2x\\right)^2 = \\frac{1}{2}\\sin^2 2x$。",
          "第三步：再由降冪公式：$f(x) = \\frac{1}{2} \\cdot \\frac{1 - \\cos 4x}{2} = \\frac{1}{4} - \\frac{1}{4}\\cos 4x$。",
          "第四步：求週期：$T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。",
          "第五步：檢驗奇偶性：$f(-x) = \\frac{1}{4} - \\frac{1}{4}\\cos(-4x) = \\frac{1}{4} - \\frac{1}{4}\\cos 4x = f(x)$，故為偶函數。",
          "第六步：綜上，$f(x)$ 是最小正週期為 $\\frac{\\pi}{2}$ 的偶函數。"
        ],
        "ans": "D",
        "trick": "奇偶性秒判：$1+\\cos 2x$ 是偶函數，$\\sin^2 x$ 是偶函數，偶函數乘偶函數必為偶函數，排除 A、B；$4x$ 頻率對應週期 $\\pi/2$，選 D。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十六",
      "qNum": "解答題 第33題",
      "topic": "倍角與半角公式在解三角形中的應用",
      "score": "10分",
      "q": "在 $\\triangle ABC$ 中，內角 $A, B, C$ 的對邊分別為 $a, b, c$，已知 $\\sin(A + C) = 8\\sin^2\\frac{B}{2}$。<br>(a) 求 $\\cos B$ 的值；<br>(b) 若 $a + c = 6$，且 $\\triangle ABC$ 的面積為 2，求邊長 $b$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\sin(A + C) = \\sin(\\pi - B) = \\sin B",
          "\\sin^2\\frac{B}{2} = \\frac{1 - \\cos B}{2}",
          "S = \\frac{1}{2}ac\\sin B",
          "b^2 = a^2 + c^2 - 2ac\\cos B = (a+c)^2 - 2ac(1 + \\cos B)"
        ],
        "points": [
          "<b>誘導與半角降冪</b>：利用內角和 $A+B+C=\\pi$ 轉化 $\\sin(A+C)=\\sin B$，同角齊次化一元二次方程求解 $\\cos B$。"
        ]
      },
      "solution": {
        "thinking": "誘導公式得 $\\sin B = 4(1-\\cos B)$，平方轉化為一元二次方程求 $\\cos B$；第二問由面積求 $ac$，再用餘弦定理求 $b$。",
        "steps": [
          "第一步 (a)：因 $A + B + C = \\pi$，$\\sin(A + C) = \\sin B$；又 $8\\sin^2\\frac{B}{2} = 8 \\cdot \\frac{1 - \\cos B}{2} = 4(1 - \\cos B)$。<br>故有：$\\sin B = 4(1 - \\cos B)$。",
          "第二步：兩邊平方：$\\sin^2 B = 16(1 - \\cos B)^2 \\implies 1 - \\cos^2 B = 16(1 - \\cos B)^2$。<br>因 $B \\in (0, \\pi)$，$\\cos B \\neq 1$，兩邊同除以 $1 - \\cos B$：$1 + \\cos B = 16(1 - \\cos B) \\implies 1 + \\cos B = 16 - 16\\cos B$。",
          "第三步：移項解得 $17\\cos B = 15 \\implies \\cos B = \\frac{15}{17}$。",
          "第四步 (b)：因 $\\cos B = \\frac{15}{17}$，則 $\\sin B = \\sqrt{1 - \\left(\\frac{15}{17}\\right)^2} = \\frac{8}{17}$。",
          "第五步：由面積公式：$S = \\frac{1}{2}ac\\sin B = 2 \\implies \\frac{1}{2}ac \\left(\\frac{8}{17}\\right) = 2 \\implies \\frac{4}{17}ac = 2 \\implies ac = \\frac{17}{2} = 8.5$。",
          "第六步：利用餘弦定理求 $b$：$b^2 = a^2 + c^2 - 2ac\\cos B = (a + c)^2 - 2ac - 2ac\\cos B = (a + c)^2 - 2ac(1 + \\cos B)$。",
          "第七步：代入已知 $a + c = 6, ac = \\frac{17}{2}, \\cos B = \\frac{15}{17}$：<br>$b^2 = 6^2 - 2\\left(\\frac{17}{2}\\right)\\left(1 + \\frac{15}{17}\\right) = 36 - 17\\left(\\frac{32}{17}\\right) = 36 - 32 = 4$。<br>因此 $b = \\sqrt{4} = 2$。"
        ],
        "ans": "(a) $\\cos B = \\frac{15}{17}$；(b) $b = 2$",
        "trick": "餘弦代入極其整齊：$1+\\cos B = 32/17$，與 $ac = 17/2$ 相乘恰好為 32，$36 - 32 = 4 \\implies b = 2$，數據設計極其優美！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>(a)$</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>cos</m:t></m:r><m:r><m:t>B=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>15</m:t></m:r></m:num><m:den><m:r><m:t>17</m:t></m:r></m:den></m:f><m:r><m:t>$；(b)$b=2</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
