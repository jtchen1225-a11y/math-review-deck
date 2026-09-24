/* 2026 高三理組數學思維本 — 專題十三 數列與級數 (5 題) - 支援 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題十三 數列與級數",
  "year": "2026",
  "paper": "專題十三",
  "title": "專題十三 等差數列、等比數列、遞推數列構造與前n項和求法",
  "color": "#6366f1",
  "sections": [
    "等差數列通項與下標和性質",
    "等差數列前n項和比例轉化",
    "等比中項方程式與公比求解",
    "待定係數構造輔助等比數列",
    "分組轉化法求解數列前n項和"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題十三",
      "qNum": "單選題 第1題",
      "topic": "等差數列通項公式求項",
      "score": "4分",
      "q": "等差數列 $1, 3, 5, 7, \\dots$ 的第 1000 項是 $(\\quad)$。",
      "options": [
        "A. 1997",
        "B. 1999",
        "C. 2000",
        "D. 2001",
        "E. 2003"
      ],
      "knowledge": {
        "formulas": [
          "a_n = a_1 + (n - 1)d",
          "a_n = 2n - 1 \\quad (\\text{奇數數列})"
        ],
        "points": [
          "奇數數列第 $n$ 項標準表達式為 $2n - 1$。"
        ]
      },
      "solution": {
        "thinking": "首項 $a_1 = 1$，公差 $d = 2$，直接代入等差數列通項公式。",
        "steps": [
          "第一步：由數列可知首項 $a_1 = 1$，公差 $d = 3 - 1 = 2$。",
          "第二步：第 1000 項為 $a_{1000} = a_1 + (1000 - 1)d = 1 + 999 \\times 2$。",
          "第三步：計算 $1 + 1998 = 1999$（或直接利用第 $n$ 個正奇數為 $2n - 1 = 2(1000) - 1 = 1999$）。"
        ],
        "ans": "B",
        "trick": "奇數公式口算：$2(1000) - 1 = 1999$，秒選 B！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十三",
      "qNum": "單選題 第3題",
      "topic": "等差數列性質與前n項和求值",
      "score": "4分",
      "q": "已知 $a, b, c, d, e, f$ 是一個等差數列。若 $a + d = 13$，$c + e = 22$，求這個數列各項之和 $(\\quad)$。",
      "options": [
        "A. 50",
        "B. 51",
        "C. 54",
        "D. 57",
        "E. 60"
      ],
      "knowledge": {
        "formulas": [
          "S_n = \\frac{n(a_1 + a_n)}{2}",
          "a_m + a_k = a_p + a_q \\iff m + k = p + q"
        ],
        "points": [
          "<b>等差數列下標和性質</b>：若下標之和相等，則對應項之和相等。"
        ]
      },
      "solution": {
        "thinking": "設公差為 $d_0$，列出二元一次方程求出首項與公差，再求前 6 項和；或利用對稱性求首尾和。",
        "steps": [
          "第一步：數列共有 6 項，設首項為 $a$，公差為 $r$。則 $d = a + 3r$，$c = a + 2r$，$e = a + 4r$。",
          "第二步：已知 $a + d = a + (a + 3r) = 2a + 3r = 13$（式 1）。",
          "第三步：已知 $c + e = (a + 2r) + (a + 4r) = 2a + 6r = 22$（式 2）。",
          "第四步：式 2 減去式 1：$(2a + 6r) - (2a + 3r) = 22 - 13 \\implies 3r = 9 \\implies r = 3$。",
          "第五步：代入式 1：$2a + 3(3) = 13 \\implies 2a = 4 \\implies a = 2$。",
          "第六步：前 6 項和為 $S_6 = \\frac{6}{2}[2a + (6-1)r] = 3[2(2) + 5(3)] = 3(4 + 15) = 3 \\times 19 = 57$。"
        ],
        "ans": "D",
        "trick": "下標法：$a+f = a_1+a_6$。因 $c+e = a_3+a_5 = 22 \\implies a_1+a_7$ 虛擬對稱；由公差 $r=3$，首尾和 $a+f = 2(2) + 5(3) = 19$，總和 $S_6 = 3 \\times 19 = 57$！選 D。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十三",
      "qNum": "單選題 第6題",
      "topic": "等差數列項比轉化為前n項和之比",
      "score": "4分",
      "q": "在一個等差數列中，第三項與第四項之比為 $4 : 5$。求首三項之和比首四項之和 $S_3 : S_4 = (\\quad)$。",
      "options": [
        "A. $4 : 5$",
        "B. $3 : 4$",
        "C. $9 : 14$",
        "D. $7 : 10$",
        "E. $1 : 2$"
      ],
      "knowledge": {
        "formulas": [
          "a_n = a_1 + (n-1)d",
          "S_n = na_1 + \\frac{n(n-1)}{2}d"
        ],
        "points": [
          "由比例等式求出首項 $a_1$ 與公差 $d$ 的齊次線性關係，再代入前 $n$ 項和公式約去參數。"
        ]
      },
      "solution": {
        "thinking": "由 $\\frac{a_3}{a_4} = \\frac{4}{5}$ 解出 $a_1$ 與 $d$ 的關係，再計算 $S_3$ 和 $S_4$ 的比值。",
        "steps": [
          "第一步：設首項為 $a$，公差為 $d$。則 $a_3 = a + 2d$，$a_4 = a + 3d$。",
          "第二步：依題意：$\\frac{a+2d}{a+3d} = \\frac{4}{5} \\implies 5(a + 2d) = 4(a + 3d) \\implies 5a + 10d = 4a + 12d \\implies a = 2d$。",
          "第三步：計算前 3 項和：$S_3 = 3a + \\frac{3\\times 2}{2}d = 3a + 3d = 3(2d) + 3d = 9d$。",
          "第四步：計算前 4 項和：$S_4 = 4a + \\frac{4\\times 3}{2}d = 4a + 6d = 4(2d) + 6d = 14d$。",
          "第五步：因此比值為 $\\frac{S_3}{S_4} = \\frac{9d}{14d} = \\frac{9}{14}$，即 $9 : 14$。"
        ],
        "ans": "C",
        "trick": "直接賦值法：令 $a_3 = 4, a_4 = 5$，則公差 $d = 1$，$a_2 = 3, a_1 = 2$。前三項和 $2+3+4 = 9$，前四項和 $9+5 = 14$，比值即為 $9:14$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>C</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十三",
      "qNum": "單選題 第17題",
      "topic": "等比中項與未知數方程求解",
      "score": "4分",
      "q": "若 $x + 4, x + 10, x + 20$ 為某等比數列的連續三項，則該等比數列的公比為 $(\\quad)$。",
      "options": [
        "A. $\\frac{1}{2}$",
        "B. $\\frac{4}{3}$",
        "C. $\\frac{5}{3}$",
        "D. 2",
        "E. $\\frac{5}{2}$"
      ],
      "knowledge": {
        "formulas": [
          "b^2 = ac \\quad (\\text{等比中項性質})",
          "q = \\frac{b}{a} = \\frac{c}{b}"
        ],
        "points": [
          "<b>等比中項定理</b>：三個數成等比數列，中間項的平方等於兩旁項之乘積。"
        ]
      },
      "solution": {
        "thinking": "利用等比中項性質 $(x+10)^2 = (x+4)(x+20)$ 列一元二次方程求出 $x$，再求後項與前項之比得公比。",
        "steps": [
          "第一步：由等比中項性質得：$(x + 10)^2 = (x + 4)(x + 20)$。",
          "第二步：展開兩邊：$x^2 + 20x + 100 = x^2 + 24x + 80$。",
          "第三步：二次項 $x^2$ 抵消，移項化簡：$24x - 20x = 100 - 80 \\implies 4x = 20 \\implies x = 5$。",
          "第四步：代入求出這三項：第一項為 $5 + 4 = 9$；第二項為 $5 + 10 = 15$；第三項為 $5 + 20 = 25$。",
          "第五步：計算公比：$q = \\frac{15}{9} = \\frac{5}{3}$（或 $\\frac{25}{15} = \\frac{5}{3}$）。"
        ],
        "ans": "C",
        "trick": "二次項抵消秒解：$20x + 100 = 24x + 80 \\implies 4x = 20 \\implies x = 5$；三項為 $9, 15, 25$，公比 $15/9 = 5/3$，秒選 C！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>C</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十三",
      "qNum": "解答題 第18題",
      "topic": "一階線性遞推數列的通項公式求解",
      "score": "8分",
      "q": "已知數列 $\\{a_n\\}$ 滿足 $a_1 = 1$，且對任意正整數 $n$，有 $a_{n+1} = 2a_n + 1$。<br>(1) 證明：數列 $\\{a_n + 1\\}$ 是等比數列；<br>(2) 求數列 $\\{a_n\\}$ 的通項公式 $a_n$ 及前 $n$ 項和 $S_n$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "a_{n+1} + c = p(a_n + c) \\implies c = \\frac{q}{p-1}",
          "\\sum_{k=1}^n 2^k = \\frac{2(1-2^n)}{1-2} = 2^{n+1} - 2"
        ],
        "points": [
          "<b>待定係數構造等比數列法</b>：對於 $a_{n+1} = pa_n + q$ 形式的遞推式，兩邊同加 1 構造公比為 2 的等比數列。"
        ]
      },
      "solution": {
        "thinking": "兩邊同時加 1 構造等比數列 $\\{a_n + 1\\}$，求出通項後再減 1，最後分組求前 $n$ 項和。",
        "steps": [
          "第一步 (1)：由已知遞推關係 $a_{n+1} = 2a_n + 1$，兩邊同時加上 1：$a_{n+1} + 1 = 2a_n + 2 = 2(a_n + 1)$。",
          "第二步：首項為 $a_1 + 1 = 1 + 1 = 2 \\neq 0$。因此對任意 $n$，有 $\\frac{a_{n+1} + 1}{a_n + 1} = 2$（常數）。故數列 $\\{a_n + 1\\}$ 是以 2 為首項、2 為公比的等比數列。",
          "第三步 (2)：由等比數列通項公式：$a_n + 1 = (a_1 + 1) \\cdot 2^{n-1} = 2 \\cdot 2^{n-1} = 2^n$。移項得通項公式為：$a_n = 2^n - 1$。",
          "第四步：求前 $n$ 項和：$S_n = \\sum_{k=1}^n a_k = \\sum_{k=1}^n (2^k - 1) = \\sum_{k=1}^n 2^k - \\sum_{k=1}^n 1$。",
          "第五步：第一部分是等比數列求和：$\\frac{2(1 - 2^n)}{1 - 2} = 2(2^n - 1) = 2^{n+1} - 2$；第二部分為 $n$。故 $S_n = 2^{n+1} - n - 2$。"
        ],
        "ans": "(1) 詳見規範證明；(2) $a_n = 2^n - 1$，$S_n = 2^{n+1} - n - 2$",
        "trick": "驗算：$a_1 = 2^1 - 1 = 1$，$a_2 = 2^2 - 1 = 3 = 2(1)+1$，$a_3 = 7 = 2(3)+1$；$S_3 = 1+3+7=11$，公式 $2^4 - 3 - 2 = 16 - 5 = 11$，完美吻合！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>(1)詳見規範證明；(2)$</m:t></m:r><m:sSub><m:e><m:r><m:t>a</m:t></m:r></m:e><m:sub><m:r><m:t>n</m:t></m:r></m:sub></m:sSub><m:r><m:t>=</m:t></m:r><m:sSup><m:e><m:r><m:t>2</m:t></m:r></m:e><m:sup><m:r><m:t>n</m:t></m:r></m:sup></m:sSup><m:r><m:t>−1$，$</m:t></m:r><m:sSub><m:e><m:r><m:t>S</m:t></m:r></m:e><m:sub><m:r><m:t>n</m:t></m:r></m:sub></m:sSub><m:r><m:t>=</m:t></m:r><m:sSup><m:e><m:r><m:t>2</m:t></m:r></m:e><m:sup><m:r><m:t>n+1</m:t></m:r></m:sup></m:sSup><m:r><m:t>−n−2</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
