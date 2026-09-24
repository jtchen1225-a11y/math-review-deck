/* 2026 高三理組數學思維本 — 專題十九 行列式及矩陣 (3 題) - 支援 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題十九 行列式及矩陣",
  "year": "2026",
  "paper": "專題十九",
  "title": "專題十九 二階與三階行列式、矩陣乘法運算、逆矩陣與矩陣方程",
  "color": "#64748b",
  "sections": [
    "二階自逆矩陣性質與方程求解",
    "矩陣左分配律化簡與乘積運算",
    "經典范德蒙三階行列式因式分解",
    "克萊姆法則與線性方程組解結構"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題十九",
      "qNum": "單選題 第15題",
      "topic": "自逆矩陣（對合矩陣）的性質與元素求和",
      "score": "4分",
      "q": "設二階方陣 $A = \\begin{pmatrix} 2 & 3 \\\\ p & q \\end{pmatrix}$，若 $A^{-1} = A$，則 $p + q = (\\quad)$。",
      "options": [
        "A. -3",
        "B. -4",
        "C. -5",
        "D. -6",
        "E. -7"
      ],
      "knowledge": {
        "formulas": [
          "A^{-1} = A \\iff A^2 = I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^2 = \\begin{pmatrix} a^2+bc & b(a+d) \\\\ c(a+d) & bc+d^2 \\end{pmatrix}"
        ],
        "points": [
          "<b>自逆矩陣充要條件</b>：矩陣的平方等於單位矩陣 $I$。利用右上角元素 $b(a+d) = 0$ 與左上角元素列方程組秒解。"
        ]
      },
      "solution": {
        "thinking": "由 $A^{-1} = A$ 兩邊同乘 $A$ 得 $A^2 = I$，計算方陣乘積對應元素相等求解 $p$ 與 $q$。",
        "steps": [
          "第一步：由 $A^{-1} = A$，兩邊右乘 $A$ 得 $A^2 = I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$。",
          "第二步：計算矩陣平方：<br>$A^2 = \\begin{pmatrix} 2 & 3 \\\\ p & q \\end{pmatrix} \\begin{pmatrix} 2 & 3 \\\\ p & q \\end{pmatrix} = \\begin{pmatrix} 4 + 3p & 6 + 3q \\\\ 2p + pq & 3p + q^2 \\end{pmatrix}$。",
          "第三步：對應右上角元素：$6 + 3q = 0 \\implies 3q = -6 \\implies q = -2$。",
          "第四步：對應左上角元素：$4 + 3p = 1 \\implies 3p = -3 \\implies p = -1$。",
          "第五步：驗證左下角與右下角：$2(-1) + (-1)(-2) = -2 + 2 = 0$；$3(-1) + (-2)^2 = -3 + 4 = 1$，完全吻合！",
          "第六步：計算所求之和：$p + q = -1 + (-2) = -3$。"
        ],
        "ans": "A",
        "trick": "右上角元素口算：$3(2 + q) = 0 \\implies q = -2$；左上角 $4 + 3p = 1 \\implies p = -1$。立即得 $p+q = -3$，選 A！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>A</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十九",
      "qNum": "單選題 第16題",
      "topic": "矩陣乘法分配律化簡與矩陣乘積計算",
      "score": "4分",
      "q": "設矩陣 $X = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，$Y = \\begin{pmatrix} 5 & 7 \\\\ 2 & -3 \\end{pmatrix}$，$Z = \\begin{pmatrix} -4 & 6 \\\\ -3 & -2 \\end{pmatrix}$，試求 $XY + XZ$ 為何？ $(\\quad)$",
      "options": [
        "A. $\\begin{pmatrix} -1 & 31 \\\\ -1 & 59 \\end{pmatrix}$",
        "B. $\\begin{pmatrix} -1 & 3 \\\\ -1 & 19 \\end{pmatrix}$",
        "C. $\\begin{pmatrix} 3 & 7 \\\\ 4 & 2 \\end{pmatrix}$",
        "D. $\\begin{pmatrix} 7 & 7 \\\\ 3 & 3 \\end{pmatrix}$",
        "E. $\\begin{pmatrix} 8 & 8 \\\\ 5 & 5 \\end{pmatrix}$"
      ],
      "knowledge": {
        "formulas": [
          "XY + XZ = X(Y + Z) \\quad (\\text{矩陣左分配律})"
        ],
        "points": [
          "<b>矩陣乘法分配律</b>：矩陣乘法滿足對加法的分配律。先算加法 $Y+Z$ 再算乘積，將兩次矩陣乘法化簡為一次，極大降低計算量。"
        ]
      },
      "solution": {
        "thinking": "利用矩陣左分配律提公因矩陣 $X$，先算 $Y+Z$，再與 $X$ 做矩陣乘法。",
        "steps": [
          "第一步：應用分配律化簡：$XY + XZ = X(Y + Z)$。",
          "第二步：先計算矩陣加法：<br>$Y + Z = \\begin{pmatrix} 5 & 7 \\\\ 2 & -3 \\end{pmatrix} + \\begin{pmatrix} -4 & 6 \\\\ -3 & -2 \\end{pmatrix} = \\begin{pmatrix} 5-4 & 7+6 \\\\ 2-3 & -3-2 \\end{pmatrix} = \\begin{pmatrix} 1 & 13 \\\\ -1 & -5 \\end{pmatrix}$。",
          "第三步：計算矩陣乘積 $X(Y + Z)$：<br>$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 1 & 13 \\\\ -1 & -5 \\end{pmatrix} = \\begin{pmatrix} 1(1) + 2(-1) & 1(13) + 2(-5) \\\\ 3(1) + 4(-1) & 3(13) + 4(-5) \\end{pmatrix}$。",
          "第四步：整理各元素數值：<br>第一行：$1 - 2 = -1$，$13 - 10 = 3$；<br>第二行：$3 - 4 = -1$，$39 - 20 = 19$。",
          "第五步：因此結果矩陣為 $\\begin{pmatrix} -1 & 3 \\\\ -1 & 19 \\end{pmatrix}$。"
        ],
        "ans": "B",
        "trick": "算左上角第一元素：$1(1) + 2(-1) = -1$，排除 C、D、E；算右上角 $1(13) + 2(-5) = 3$，排除 A，秒選 B！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十九",
      "qNum": "解答題 第4題",
      "topic": "三階行列式因式分解（范德蒙型）",
      "score": "8分",
      "q": "因式分解三階行列式：<br>$$\\Delta = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$$",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\begin{vmatrix} 1 & x_1 & x_1^2 \\\\ 1 & x_2 & x_2^2 \\\\ 1 & x_3 & x_3^2 \\end{vmatrix} = (x_2 - x_1)(x_3 - x_1)(x_3 - x_2)"
        ],
        "points": [
          "<b>范德蒙行列式基本型</b>：利用行列變換（第二行減第一行、第三行減第一行）製造零元素，提出公因式進行因式分解。"
        ]
      },
      "solution": {
        "thinking": "利用行列變換製造第一列的零元素，再按第一列展開提取公因式。",
        "steps": [
          "第一步：第 2 行減去第 1 行 ($R_2 - R_1$)，第 3 行減去第 1 行 ($R_3 - R_1$)：<br>$$\\Delta = \\begin{vmatrix} 1 & a & a^2 \\\\ 0 & b - a & b^2 - a^2 \\\\ 0 & c - a & c^2 - a^2 \\end{vmatrix}$$",
          "第二步：因 $b^2 - a^2 = (b - a)(b + a)$，$c^2 - a^2 = (c - a)(c + a)$，從第 2 行提出 $(b - a)$，從第 3 行提出 $(c - a)$：<br>$$\\Delta = (b - a)(c - a) \\begin{vmatrix} 1 & a & a^2 \\\\ 0 & 1 & b + a \\\\ 0 & 1 & c + a \\end{vmatrix}$$",
          "第三步：按第 1 列展開降階為二階行列式：<br>$$\\Delta = (b - a)(c - a) [1 \\cdot ((c + a) - (b + a))] = (b - a)(c - a)(c - b)$$",
          "第四步：整理為輪換對稱式：$(a - b)(b - c)(c - a)$（注意符號調整：$(b-a)(c-b) = (a-b)(b-c)$）。"
        ],
        "ans": "$(b - a)(c - a)(c - b)$（或 $(a - b)(b - c)(c - a)$）",
        "trick": "經典范德蒙行列式：大下標減小下標乘積 $(x_2-x_1)(x_3-x_1)(x_3-x_2) = (b-a)(c-a)(c-b)$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>(b−a)(c−a)(c−b)$（或$(a−b)(b−c)(c−a)$）</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
