/* 2026 高三理組數學思維本 · 空間向量篇 — 專題一 空間向量的概念及運算 - 支援原生 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題一 空間向量的概念及運算",
  "year": "2026",
  "paper": "空間向量",
  "title": "專題一 空間向量的概念及運算",
  "color": "#0284c7",
  "sections": [
    "單選題 1~11 題 (坐標對稱、共面條件、平行垂直、基底判斷、夾角計算)",
    "解答題 12~13 題 (向量線性運算、數量積與叉積、平行六面體體積)"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第1題",
      "topic": "空間直角坐標系 — 關於坐標軸對稱點",
      "score": "4分",
      "q": "點 $P(2, 3, 1)$ 關於 $z$ 軸的對稱點 $P'$ 坐標為 $(\\quad)$。",
      "options": [
        "A. $P'(-2, 3, 1)$",
        "B. $P'(2, -3, 1)$",
        "C. $P'(-2, 3, -1)$",
        "D. $P'(-2, -3, 1)$"
      ],
      "knowledge": {
        "formulas": [
          "\\text{關於 } z \\text{ 軸對稱：} (x, y, z) \\to (-x, -y, z)",
          "\\text{關於 } xOy \\text{ 面對稱：} (x, y, z) \\to (x, y, -z)"
        ],
        "points": [
          "<b>對稱口訣</b>：「關誰誰不變，其餘全變號」！",
          "<b>關於坐標軸對稱</b>：該軸對應坐標保持不變，另外兩個軸坐標均取相反數。"
        ],
        "pitfall": "切勿混淆「關於坐標軸對稱」與「關於坐標平面對稱」。"
      },
      "solution": {
        "thinking": "利用空間直角坐標系的幾何對稱規律，關於哪個軸對稱，該軸坐標不變，其餘兩坐標變為相反數。",
        "steps": [
          "點 $P(x, y, z)$ 關於 $z$ 軸的對稱點：其 $z$ 坐標不變，投影在 $xOy$ 平面上的點 $(x, y)$ 關於原點對稱變為 $(-x, -y)$。",
          "故對稱點坐標公式為：$(x, y, z) \\to (-x, -y, z)$。",
          "已知點 $P(2, 3, 1)$：$x' = -2, \\quad y' = -3, \\quad z' = 1$。",
          "因此對稱點為 $P'(-2, -3, 1)$。"
        ],
        "ans": "D",
        "quickTip": "口訣：關於 z 軸對稱，只有 z 不變，x, y 取負！$(2, 3, 1) \\to (-2, -3, 1)$，秒選 D！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第2題",
      "topic": "四點共面條件與法向量點乘",
      "score": "4分",
      "q": "已知點 $A(4, 1, 3)$，$B(2, 3, 1)$，$C(5, 7, -5)$，又點 $P(x, -1, 3)$ 在平面 $ABC$ 內，則 $x$ 的值為 $(\\quad)$。",
      "options": [
        "A. 14",
        "B. 13",
        "C. 12",
        "D. 11"
      ],
      "knowledge": {
        "formulas": [
          "\\vec{AP} = \\lambda \\vec{AB} + \\mu \\vec{AC}",
          "\\det[\\vec{AP}, \\vec{AB}, \\vec{AC}] = 0"
        ],
        "points": [
          "<b>四點共面判定</b>：向量 $\\vec{AP}, \\vec{AB}, \\vec{AC}$ 共面，混合積行列式為 0。"
        ],
        "pitfall": "計算行列式或求平面法向量時注意負號與坐標差順序。"
      },
      "solution": {
        "thinking": "先求出平面 $ABC$ 的兩個基準向量 $\\vec{AB}$ 與 $\\vec{AC}$，由四點共面條件建立三階行列式或求法向量點乘為 0 解出 $x$。",
        "steps": [
          "計算向量：$\\vec{AB} = (2-4, 3-1, 1-3) = (-2, 2, -2)$，取簡化方向向量 $(-1, 1, -1)$。",
          "$\\vec{AC} = (5-4, 7-1, -5-3) = (1, 6, -8)$。",
          "求法向量 $\\vec{n}$：$\\vec{n} = (-1, 1, -1) \\times (1, 6, -8) = (-2, -9, -7) \\sim (2, 9, 7)$。",
          "$\\vec{AP} = (x-4, -1-1, 3-3) = (x-4, -2, 0)$。",
          "由 $\\vec{AP} \\cdot \\vec{n} = 0$：$$2(x-4) + 9(-2) + 7(0) = 0 \\implies 2x - 8 - 18 = 0 \\implies 2x = 26 \\implies x = 13$$"
        ],
        "ans": "B",
        "quickTip": "三階行列式展開：$(x-4)(-16+12) - (-2)(16+2) = -4(x-4) + 36 = 0 \\implies x-4=9 \\implies x=13$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第3題",
      "topic": "空間向量垂直、平行與模長計算",
      "score": "4分",
      "q": "設 $x, y \\in \\mathbb{R}$，$\\vec{a} = (x, 1, 1)$，$\\vec{b} = (1, y, 1)$，$\\vec{c} = (2, -4, 2)$，且 $\\vec{a} \\perp \\vec{c}$，$\\vec{b} // \\vec{c}$，則 $|2\\vec{a} + \\vec{b}| = (\\quad)$。",
      "options": [
        "A. $2\\sqrt{2}$",
        "B. $3\\sqrt{2}$",
        "C. 3",
        "D. $\\sqrt{10}$"
      ],
      "knowledge": {
        "formulas": [
          "\\vec{a} \\perp \\vec{c} \\iff \\vec{a} \\cdot \\vec{c} = 0",
          "\\vec{b} // \\vec{c} \\iff \\frac{b_1}{c_1} = \\frac{b_2}{c_2} = \\frac{b_3}{c_3} = \\lambda",
          "|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}"
        ],
        "points": [
          "由平行關係迅速求出未知數 $y$，由垂直數量積為 0 求出未知數 $x$。"
        ],
        "pitfall": "向量平行的坐標成比例時，注意符號與對應分量。"
      },
      "solution": {
        "thinking": "利用向量垂直的數量積為 0 求 $x$，利用向量平行的分量成比例求 $y$，再計算線性組合的模長。",
        "steps": [
          "由 $\\vec{b} // \\vec{c}$：$\\frac{1}{2} = \\frac{y}{-4} = \\frac{1}{2} \\implies y = -2$，故 $\\vec{b} = (1, -2, 1)$。",
          "由 $\\vec{a} \\perp \\vec{c}$：$\\vec{a} \\cdot \\vec{c} = 2x + 1(-4) + 1(2) = 2x - 2 = 0 \\implies x = 1$，故 $\\vec{a} = (1, 1, 1)$。",
          "計算 $2\\vec{a} + \\vec{b}$：$$2\\vec{a} + \\vec{b} = (2, 2, 2) + (1, -2, 1) = (3, 0, 3)$$",
          "求模長：$$|2\\vec{a} + \\vec{b}| = \\sqrt{3^2 + 0^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$$"
        ],
        "ans": "B",
        "quickTip": "$\\vec{b}//\\vec{c} \\implies y=-2$；$\\vec{a}\\perp\\vec{c} \\implies x=1$。$2(1,1,1)+(1,-2,1)=(3,0,3)$，模長 $3\\sqrt{2}$，秒選 B！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第4題",
      "topic": "空間向量共線條件",
      "score": "4分",
      "q": "若 $\\vec{a} = \\left(-1, 2, \\frac{1}{2}\\right)$ 與 $\\vec{b} = (2, m, -1)$ 共線，則 $m = (\\quad)$。",
      "options": [
        "A. 2",
        "B. -2",
        "C. 4",
        "D. -4"
      ],
      "knowledge": {
        "formulas": [
          "\\vec{b} = \\lambda \\vec{a} \\iff \\frac{b_1}{a_1} = \\frac{b_2}{a_2} = \\frac{b_3}{a_3} = \\lambda"
        ],
        "points": [
          "<b>向量共線</b>即對應坐標成比例。"
        ]
      },
      "solution": {
        "thinking": "兩非零向量共線，其對應分量成固定比例，由已知分量確定比例係數 $\\lambda$ 即可求解 $m$。",
        "steps": [
          "設比例常數為 $\\lambda$：$\\vec{b} = \\lambda \\vec{a}$。",
          "由第 1 分量：$\\lambda = \\frac{2}{-1} = -2$。",
          "檢驗第 3 分量：$-2 \\times \\frac{1}{2} = -1$，吻合。",
          "由第 2 分量：$m = \\lambda \\times 2 = -2 \\times 2 = -4$。"
        ],
        "ans": "D",
        "quickTip": "倍數 $\\lambda = 2 / (-1) = -2$，$m = 2 \\times (-2) = -4$，口算 3 秒選 D。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第5題",
      "topic": "四面體中向量的線性運算與中點分解",
      "score": "4分",
      "q": "四面體 $ABCD$ 中，$G$ 是 $CD$ 的中點，連接 $AG$，則 $\\frac{1}{2}(\\vec{BD} + \\vec{BC}) + \\vec{AB} = (\\quad)$。",
      "options": [
        "A. $\\vec{CG}$",
        "B. $\\vec{AG}$",
        "C. $\\vec{BC}$",
        "D. $\\frac{1}{2}\\vec{BC}$"
      ],
      "knowledge": {
        "formulas": [
          "\\vec{BG} = \\frac{1}{2}(\\vec{BC} + \\vec{BD}) \\quad (G \\text{ 為 } CD \\text{ 中點})",
          "\\vec{AB} + \\vec{BG} = \\vec{AG}"
        ],
        "points": [
          "利用三角形中線向量公式：起點相同時，到兩端點向量之和的一半即為指向中點的向量。"
        ]
      },
      "solution": {
        "thinking": "先化簡括號內的向量和的一半，識別出中線向量 $\\vec{BG}$，再利用三角形加法法則求和。",
        "steps": [
          "因為 $G$ 是線段 $CD$ 的中點，所以根據中線向量公式：$$\\frac{1}{2}(\\vec{BD} + \\vec{BC}) = \\vec{BG}$$",
          "將其代入原式：$$\\frac{1}{2}(\\vec{BD} + \\vec{BC}) + \\vec{AB} = \\vec{BG} + \\vec{AB} = \\vec{AB} + \\vec{BG} = \\vec{AG}$$"
        ],
        "ans": "B",
        "quickTip": "中點向量：$\\frac{1}{2}(\\vec{BD}+\\vec{BC}) = \\vec{BG}$，加上 $\\vec{AB}$ 得 $\\vec{AG}$，秒選 B！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第6題",
      "topic": "向量夾角為鈍角的條件與反向共線陷阱",
      "score": "4分",
      "q": "已知 $\\vec{a} = (2, -1, 3)$，$\\vec{b} = (-4, 2, t)$ 的夾角為鈍角，則實數 $t$ 的取值範圍為 $(\\quad)$。",
      "options": [
        "A. $(-\\infty, -6)$",
        "B. $(-\\infty, -6) \\cup \\left(-6, \\frac{10}{3}\\right)$",
        "C. $\\left(\\frac{10}{3}, +\\infty\\right)$",
        "D. $\\left(-\\infty, \\frac{10}{3}\\right)$"
      ],
      "knowledge": {
        "formulas": [
          "\\theta \\text{ 為鈍角} \\iff \\cos\\theta < 0 \\text{ 且 } \\cos\\theta \\neq -1",
          "\\vec{a} \\cdot \\vec{b} < 0 \\text{ 且 } \\vec{a}, \\vec{b} \\text{ 不反向共線}"
        ],
        "points": [
          "⚠️ <b>核心避坑點</b>：數量積小於 0 包含夾角為 $180^\\circ$ 的反向共線情況，鈍角定義必須排除 $180^\\circ$！"
        ],
        "pitfall": "考生最易誤選 D，漏掉排除反向共線 $t = -6$！"
      },
      "solution": {
        "thinking": "由夾角為鈍角列出數量積小於 0，並特別檢驗兩向量是否反向共線（夾角為平角）。",
        "steps": [
          "若兩向量夾角為鈍角，則 $\\vec{a} \\cdot \\vec{b} < 0$ 且 $\\vec{a}$ 與 $\\vec{b}$ 不能反向共線。",
          "計算數量積：$$\\vec{a} \\cdot \\vec{b} = 2(-4) + (-1)(2) + 3t = -8 - 2 + 3t = 3t - 10 < 0 \\implies t < \\frac{10}{3}$$",
          "檢驗反向共線：若 $\\vec{b} = \\lambda \\vec{a}$，由前兩坐標得 $\\lambda = -2$。",
          "此時 $t = 3(-2) = -6$。若 $t = -6$，夾角為 $180^\\circ$，不是鈍角，必須排除！",
          "綜上所述，實數 $t$ 的範圍為 $(-\\infty, -6) \\cup \\left(-6, \\frac{10}{3}\\right)$。"
        ],
        "ans": "B",
        "quickTip": "易錯經典題：$3t - 10 < 0 \\implies t < 10/3$，但反向共線時 $\\lambda = -2 \\implies t = -6$ 必須扣除！選 B。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第7題",
      "topic": "空間向量垂直條件與數量積",
      "score": "4分",
      "q": "已知向量 $\\vec{a} = (-2, x, 2)$，$\\vec{b} = (2, 1, 2)$，$\\vec{c} = (4, -2, 1)$，若 $\\vec{a} \\perp (\\vec{b} - \\vec{c})$，則 $x$ 的值為 $(\\quad)$。",
      "options": [
        "A. -2",
        "B. 2",
        "C. 3",
        "D. -3"
      ],
      "knowledge": {
        "formulas": [
          "\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = 0"
        ],
        "points": [
          "先求出差向量 $\\vec{b} - \\vec{c}$，再令數量積為 0 列方程。"
        ]
      },
      "solution": {
        "thinking": "計算差向量的坐標，利用垂直向量數量積為零求出未知數 $x$。",
        "steps": [
          "求差向量：$$\\vec{b} - \\vec{c} = (2 - 4, 1 - (-2), 2 - 1) = (-2, 3, 1)$$",
          "由 $\\vec{a} \\perp (\\vec{b} - \\vec{c})$ 得：$$\\vec{a} \\cdot (\\vec{b} - \\vec{c}) = (-2)(-2) + x(3) + 2(1) = 4 + 3x + 2 = 3x + 6 = 0$$",
          "解得：$$3x = -6 \\implies x = -2$$"
        ],
        "ans": "A",
        "quickTip": "$\\vec{b}-\\vec{c} = (-2, 3, 1)$，點乘 $\\vec{a}$ 得 $4 + 3x + 2 = 0 \\implies x = -2$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>A</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第8題",
      "topic": "向量數量積定義與夾角求解參數",
      "score": "4分",
      "q": "已知向量 $\\vec{a} = (\\sqrt{3}, 0, 1)$，$\\vec{b} = (k, 2, 0)$，若 $\\vec{a}$ 與 $\\vec{b}$ 夾角為 $\\frac{2}{3}\\pi$，則 $k$ 的值為 $(\\quad)$。",
      "options": [
        "A. $-\\sqrt{2}$",
        "B. $\\sqrt{2}$",
        "C. -1",
        "D. 1"
      ],
      "knowledge": {
        "formulas": [
          "\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}",
          "\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}"
        ],
        "points": [
          "注意夾角為鈍角時，數量積為負，因此 $k$ 必為負數。"
        ]
      },
      "solution": {
        "thinking": "由坐標求模長與數量積，根據夾角餘弦值建立關於 $k$ 的方程。",
        "steps": [
          "計算模長：$|\\vec{a}| = \\sqrt{(\\sqrt{3})^2 + 0^2 + 1^2} = \\sqrt{4} = 2$，$|\\vec{b}| = \\sqrt{k^2 + 2^2 + 0^2} = \\sqrt{k^2 + 4}$。",
          "計算數量積：$\\vec{a} \\cdot \\vec{b} = \\sqrt{3}k + 0 + 0 = \\sqrt{3}k$。",
          "由夾角公式：$$\\cos\\frac{2\\pi}{3} = \\frac{\\sqrt{3}k}{2\\sqrt{k^2 + 4}} = -\\frac{1}{2} \\implies \\frac{\\sqrt{3}k}{\\sqrt{k^2 + 4}} = -1$$",
          "因為右邊為負，故必有 $k < 0$。兩邊平方：$$3k^2 = k^2 + 4 \\implies 2k^2 = 4 \\implies k^2 = 2$$",
          "由於 $k < 0$，解得 $k = -\\sqrt{2}$。"
        ],
        "ans": "A",
        "quickTip": "鈍角 $\\implies \\vec{a}\\cdot\\vec{b} < 0 \\implies \\sqrt{3}k < 0 \\implies k < 0$；平方解得 $k^2 = 2 \\implies k = -\\sqrt{2}$，秒選 A！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>A</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第9題",
      "topic": "空間向量基底的判斷（線性無關性）",
      "score": "4分",
      "q": "若 $\\{\\vec{a}, \\vec{b}, \\vec{c}\\}$ 構成空間向量的一組基底，若 $\\vec{p} = 2\\vec{a} - \\vec{b}$，$\\vec{q} = 2\\vec{b} - \\vec{a}$，$\\vec{r} = \\vec{a} + \\vec{b}$，$\\vec{s} = \\vec{a} + \\vec{b} + \\vec{c}$，則下列可以作為空間一個基底的是 $(\\quad)$。",
      "options": [
        "A. $\\vec{a}, \\vec{p}, \\vec{q}$",
        "B. $\\vec{b}, \\vec{p}, \\vec{q}$",
        "C. $\\vec{r}, \\vec{p}, \\vec{q}$",
        "D. $\\vec{s}, \\vec{p}, \\vec{q}$"
      ],
      "knowledge": {
        "formulas": [
          "\\text{基底條件：三個向量不共面 (線性無關)}"
        ],
        "points": [
          "若三個向量可以用同一平面內的兩個向量線性表示，則這三個向量共面，不能構成基底。"
        ]
      },
      "solution": {
        "thinking": "觀察向量構造，分析 $\\vec{p}, \\vec{q}$ 能否與各組向量構成線性無關組。",
        "steps": [
          "因為 $\\vec{p} = 2\\vec{a} - \\vec{b}$，$\\vec{q} = 2\\vec{b} - \\vec{a}$，兩式相加得：$$\\vec{p} + \\vec{q} = \\vec{a} + \\vec{b} = \\vec{r}$$",
          "因此 $\\vec{r}$ 可由 $\\vec{p}, \\vec{q}$ 線性表示，$\\vec{r}, \\vec{p}, \\vec{q}$ 共面，排除 C。",
          "由 $\\vec{p} = 2\\vec{a} - \\vec{b}$ 與 $\\vec{q} = 2\\vec{b} - \\vec{a}$ 可解出 $\\vec{a} = \\frac{2}{3}\\vec{p} + \\frac{1}{3}\\vec{q}$，$\\vec{b} = \\frac{1}{3}\\vec{p} + \\frac{2}{3}\\vec{q}$，因此 $\\vec{a}, \\vec{p}, \\vec{q}$ 與 $\\vec{b}, \\vec{p}, \\vec{q}$ 皆共面，排除 A, B。",
          "而 $\\vec{s} = \\vec{a} + \\vec{b} + \\vec{c}$ 含有基底向量 $\\vec{c}$，無法由僅含 $\\vec{a}, \\vec{b}$ 的 $\\vec{p}, \\vec{q}$ 線性表示，故 $\\vec{s}, \\vec{p}, \\vec{q}$ 不共面，可構成基底。"
        ],
        "ans": "D",
        "quickTip": "$\\vec{p}, \\vec{q}$ 僅由 $\\vec{a}, \\vec{b}$ 生成，只有 $\\vec{s}$ 引入了獨立的 $\\vec{c}$ 分量，必定不共面，秒選 D！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第10題",
      "topic": "空間向量平行垂直與模長計算綜合",
      "score": "4分",
      "q": "設 $x, y \\in \\mathbb{R}$，向量 $\\vec{a} = (x, 1, 0)$，$\\vec{b} = (2, y, 2)$，$\\vec{c} = (1, -2, 1)$，且 $\\vec{a} \\perp \\vec{b}$，$\\vec{b} // \\vec{c}$，則 $|\\vec{a} + \\vec{b}| = (\\quad)$。",
      "options": [
        "A. $\\sqrt{14}$",
        "B. $\\sqrt{10}$",
        "C. $\\sqrt{29}$",
        "D. $2\\sqrt{7}$"
      ],
      "knowledge": {
        "formulas": [
          "\\vec{b} // \\vec{c} \\iff \\frac{2}{1} = \\frac{y}{-2} = \\frac{2}{1} = 2",
          "\\vec{a} \\perp \\vec{b} \\iff 2x + y + 0 = 0"
        ]
      },
      "solution": {
        "thinking": "利用平行比例求 $y$，利用垂直數量積求 $x$，相加後求模長。",
        "steps": [
          "由 $\\vec{b} // \\vec{c}$：$\\frac{2}{1} = \\frac{y}{-2} = \\frac{2}{1} \\implies y = -4$，故 $\\vec{b} = (2, -4, 2)$。",
          "由 $\\vec{a} \\perp \\vec{b}$：$\\vec{a} \\cdot \\vec{b} = 2x + 1(y) + 0(2) = 2x - 4 = 0 \\implies x = 2$，故 $\\vec{a} = (2, 1, 0)$。",
          "計算向量和：$$\\vec{a} + \\vec{b} = (2+2, 1+(-4), 0+2) = (4, -3, 2)$$",
          "求模長：$$|\\vec{a} + \\vec{b}| = \\sqrt{4^2 + (-3)^2 + 2^2} = \\sqrt{16 + 9 + 4} = \\sqrt{29}$$"
        ],
        "ans": "C",
        "quickTip": "$y = -4 \\implies 2x - 4 = 0 \\implies x = 2$。$\\vec{a}+\\vec{b} = (4, -3, 2)$，模長 $\\sqrt{16+9+4} = \\sqrt{29}$，秒選 C！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>C</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "單選題 第11題",
      "topic": "空間坐標對稱點、中點坐標與兩點間距離",
      "score": "4分",
      "q": "設點 $A(1, 2, 2)$，$B(3, 4, -8)$，$C(1, 2, 3)$，點 $C$ 關於 $xOy$ 面對稱的點為 $D$，則線段 $AB$ 的中點 $P$ 到點 $D$ 的距離為 $(\\quad)$。",
      "options": [
        "A. 2",
        "B. $\\sqrt{70}$",
        "C. $\\sqrt{2}$",
        "D. $\\sqrt{34}$"
      ],
      "knowledge": {
        "formulas": [
          "C(x, y, z) \\text{ 關於 } xOy \\text{ 面對稱點：} (x, y, -z)",
          "P = \\left(\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2}, \\frac{z_A+z_B}{2}\\right)",
          "|PD| = \\sqrt{(x_P-x_D)^2 + (y_P-y_D)^2 + (z_P-z_D)^2}"
        ]
      },
      "solution": {
        "thinking": "分別寫出點 $C$ 關於 $xOy$ 平面的對稱點 $D$ 和線段 $AB$ 的中點 $P$，再利用空間兩點距離公式計算。",
        "steps": [
          "求點 $C(1, 2, 3)$ 關於 $xOy$ 平面的對稱點 $D$：$x, y$ 坐標不變，$z$ 取相反數，故 $D(1, 2, -3)$。",
          "求線段 $AB$ 的中點 $P$：$$P\\left(\\frac{1+3}{2}, \\frac{2+4}{2}, \\frac{2+(-8)}{2}\\right) = P(2, 3, -3)$$",
          "計算兩點間距離 $|PD|$：$$|PD| = \\sqrt{(2-1)^2 + (3-2)^2 + (-3-(-3))^2} = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$$"
        ],
        "ans": "C",
        "quickTip": "$D(1, 2, -3), P(2, 3, -3)$，兩點 $z$ 坐標相同，平面距離 $\\sqrt{1^2+1^2} = \\sqrt{2}$，秒選 C！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>C</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "解答題 第12題",
      "topic": "空間向量的加減、數量積與向量積 (叉積)",
      "score": "10分",
      "q": "已知點 $A(1, 2, 0)$，$B(-1, 3, -2)$，$C(0, -1, 1)$，$D(-2, -1, 4)$，求：<br>(a) $\\vec{AB}$；<br>(b) $\\vec{AC} - 2\\vec{BD}$；<br>(c) $\\vec{AB} \\cdot \\vec{CD}$；<br>(d) $\\vec{AB} \\times \\vec{CD}$。",
      "knowledge": {
        "formulas": [
          "\\vec{AB} = B - A = (x_B-x_A, y_B-y_A, z_B-z_A)",
          "\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3",
          "\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}"
        ],
        "points": [
          "空間解析中叉積方向遵循右手定則，結果為一個與兩向量均垂直的向量。"
        ]
      },
      "solution": {
        "thinking": "依序求出各點組成的向量，代入向量線性組合、數量積（點乘）與向量積（叉積行列式）公式計算。",
        "steps": [
          "<b>(a)</b> $\\vec{AB} = (-1-1, 3-2, -2-0) = (-2, 1, -2)$。",
          "<b>(b)</b> $\\vec{AC} = (0-1, -1-2, 1-0) = (-1, -3, 1)$；<br>$\\vec{BD} = (-2-(-1), -1-3, 4-(-2)) = (-1, -4, 6)$；<br>$\\vec{AC} - 2\\vec{BD} = (-1, -3, 1) - (-2, -8, 12) = (1, 5, -11)$。",
          "<b>(c)</b> $\\vec{CD} = (-2-0, -1-(-1), 4-1) = (-2, 0, 3)$；<br>$\\vec{AB} \\cdot \\vec{CD} = (-2)(-2) + 1(0) + (-2)(3) = 4 + 0 - 6 = -2$。",
          "<b>(d)</b> 向量積 (叉積)：$$\\vec{AB} \\times \\vec{CD} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -2 & 1 & -2 \\\\ -2 & 0 & 3 \\end{vmatrix} = (3-0)\\mathbf{i} - (-6-4)\\mathbf{j} + (0-(-2))\\mathbf{k} = (3, 10, 2)$$"
        ],
        "ans": "(a) (-2, 1, -2)；(b) (1, 5, -11)；(c) -2；(d) (3, 10, 2)",
        "quickTip": "叉積驗算：$(3, 10, 2) \\cdot (-2, 1, -2) = -6 + 10 - 4 = 0$；$(3, 10, 2) \\cdot (-2, 0, 3) = -6 + 0 + 6 = 0$，垂直無誤！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)(−2,1,−2)；(b)(1,5,−11)；(c)−2；(d)(3,10,2)</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "解答題 第13題",
      "topic": "平行六面體的體積（混合積公式）",
      "score": "10分",
      "q": "已知平行六面體 $ABCD-A_1B_1C_1D_1$ 中，$A(1, 2, 0)$，$B(-1, 3, -2)$，$D(0, -1, 1)$，$A_1(1, 4, 1)$，求此六面體的體積。",
      "knowledge": {
        "formulas": [
          "V = |\\vec{AB} \\cdot (\\vec{AD} \\times \\vec{AA_1})| = \\left| \\det\\begin{pmatrix} \\vec{AB} \\\\ \\vec{AD} \\\\ \\vec{AA_1} \\end{pmatrix} \\right|"
        ],
        "points": [
          "以共頂點的三條棱向量 $\\vec{AB}, \\vec{AD}, \\vec{AA_1}$ 構成的三階行列式絕對值，即為平行六面體的體積。"
        ]
      },
      "solution": {
        "thinking": "從同一個頂點 $A$ 出發，求出三條棱向量 $\\vec{AB}, \\vec{AD}, \\vec{AA_1}$，利用三階行列式（標量三重積）計算體積。",
        "steps": [
          "求由頂點 $A$ 出發的三條邊向量：<br>$\\vec{AB} = (-1-1, 3-2, -2-0) = (-2, 1, -2)$；<br>$\\vec{AD} = (0-1, -1-2, 1-0) = (-1, -3, 1)$；<br>$\\vec{AA_1} = (1-1, 4-2, 1-0) = (0, 2, 1)$。",
          "計算向量混合積的三階行列式：$$\\begin{vmatrix} -2 & 1 & -2 \\\\ -1 & -3 & 1 \\\\ 0 & 2 & 1 \\end{vmatrix}$$",
          "按第 1 列或第 3 行展開：<br>$-2 \\begin{vmatrix} -3 & 1 \\\\ 2 & 1 \\end{vmatrix} - (-1) \\begin{vmatrix} 1 & -2 \\\\ 2 & 1 \\end{vmatrix} + 0 = -2(-3 - 2) + 1(1 - (-4)) = -2(-5) + 1(5) = 10 + 5 = 15$。",
          "平行六面體的體積為行列式的絕對值：$$V = |15| = 15$$"
        ],
        "ans": "15",
        "quickTip": "混合積公式秒殺體積：直接列出三階行列式展開得 15。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>15</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
