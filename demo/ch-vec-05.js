/* 2026 高三理組數學思維本 · 空間向量篇 — 專題五 基礎概念 — 集合與數學歸納法（總複習題） - 支援原生 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題五 集合與數學歸納法",
  "year": "2026",
  "paper": "空間向量",
  "title": "專題五 基礎概念 — 集合與數學歸納法（總複習題）",
  "color": "#f59e0b",
  "sections": [
    "集合運算與計數 1~6 題 (四校聯考2023、UMB 2013-2014、內地2014-2016)",
    "數學歸納法證明 7~8 題 (科大2014不等式、科大2015整除性)"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "四校聯考 2023 正卷",
      "topic": "二次不等式解集與集合交集運算",
      "score": "4分",
      "q": "[四校聯考 2023 正卷] 若集合 $M = \\{x \\mid x^2 - 2x - 8 \\ge 0\\}$，$N = \\{x \\mid 0 < x < 6\\}$，則 $M \\cap N = (\\quad)$。",
      "options": [
        "A. $[-2, 4]$",
        "B. $[-2, 0)$",
        "C. $(0, 4]$",
        "D. $(0, 6]$",
        "E. $[4, 6)$"
      ],
      "knowledge": {
        "formulas": [
          "x^2 - 2x - 8 \\ge 0 \\iff (x - 4)(x + 2) \\ge 0 \\iff x \\le -2 \\text{ 或 } x \\ge 4",
          "M \\cap N = (-\\infty, -2] \\cup [4, +\\infty) \\cap (0, 6) = [4, 6)"
        ]
      },
      "solution": {
        "thinking": "因式分解求解一元二次不等式得到集合 $M$，再與開區間 $N$ 取交集。",
        "steps": [
          "解集合 $M$ 的不等式：$$x^2 - 2x - 8 \\ge 0 \\implies (x - 4)(x + 2) \\ge 0 \\implies x \\le -2 \\text{ 或 } x \\ge 4$$故 $M = (-\\infty, -2] \\cup [4, +\\infty)$。",
          "集合 $N = (0, 6)$。",
          "取交集：$$M \\cap N = [4, 6)$$"
        ],
        "ans": "E",
        "quickTip": "$x \\ge 4$ 且 $0 < x < 6 \\implies [4, 6)$，秒選 E！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>E</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "UMB (2013) 第1題",
      "topic": "四次整係數不等式整數解集合",
      "score": "6分",
      "q": "(2013 澳門大學) 設 $A = \\{x \\mid (2x + 7)(x - 2)(x - 1)(x - 6) < 0, x \\in \\mathbb{Z}\\}$。求集合 $A$。",
      "knowledge": {
        "formulas": [
          "\\text{穿根法 (數軸標根法)：根從小到大為 } -\\frac{7}{2}, 1, 2, 6"
        ],
        "points": [
          "注意條件限制 $x \\in \\mathbb{Z}$，求出連續區間後必須列舉出其中的整數解！"
        ]
      },
      "solution": {
        "thinking": "利用數軸標根法求出四次不等式的解區間，再篩選出落在該區間內的所有整數。",
        "steps": [
          "方程 $(2x + 7)(x - 2)(x - 1)(x - 6) = 0$ 的四個根從小到大為：$$x_1 = -\\frac{7}{2} = -3.5, \\quad x_2 = 1, \\quad x_3 = 2, \\quad x_4 = 6$$",
          "首項係數 $2 > 0$，數軸標根從右上方穿起，小於 0 的區間為：$$x \\in \\left(-\\frac{7}{2}, 1\\right) \\cup (2, 6)$$",
          "因為 $x \\in \\mathbb{Z}$，在 $(-3.5, 1)$ 內的整數有：$-3, -2, -1, 0$；",
          "在 $(2, 6)$ 內的整數有：$3, 4, 5$。",
          "因此集合 $A = \\{-3, -2, -1, 0, 3, 4, 5\\}$。"
        ],
        "ans": "A = \\{-3, -2, -1, 0, 3, 4, 5\\}",
        "quickTip": "區間 $(-3.5, 1) \\implies -3, -2, -1, 0$；$(2, 6) \\implies 3, 4, 5$，共 7 個整數！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>A={−3,−2,−1,0,3,4,5}</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "UMB (2014) 第2題",
      "topic": "倍數計數與容斥原理應用",
      "score": "6分",
      "q": "(2014 澳門大學) 大於 400，但小於 600 的整數中，有多少個是 3 或 7 的倍數？",
      "knowledge": {
        "formulas": [
          "|A \\cup B| = |A| + |B| - |A \\cap B|",
          "\\text{在區間 } [a, b] \\text{ 內 } m \\text{ 的倍數個數為 } \\lfloor b/m \\rfloor - \\lceil a/m \\rceil + 1"
        ]
      },
      "solution": {
        "thinking": "整數範圍為 $401 \\le x \\le 599$。分別計算 3 的倍數、7 的倍數以及公倍數 21 的個數，利用容斥原理求解。",
        "steps": [
          "整數範圍是 $x \\in \\{401, 402, \\dots, 599\\}$。",
          "<b>(1) 3 的倍數個數：</b><br>$\\lfloor 599 / 3 \\rfloor - \\lfloor 400 / 3 \\rfloor = 199 - 133 = 66$ 個。",
          "<b>(2) 7 的倍數個數：</b><br>$\\lfloor 599 / 7 \\rfloor - \\lfloor 400 / 7 \\rfloor = 85 - 57 = 28$ 個。",
          "<b>(3) 既是 3 又是 7 的倍數（即 21 的倍數）：</b><br>$\\lfloor 599 / 21 \\rfloor - \\lfloor 400 / 21 \\rfloor = 28 - 19 = 9$ 個。",
          "由容斥原理，是 3 或 7 的倍數個數為：$$N = 66 + 28 - 9 = 85$$"
        ],
        "ans": "85",
        "quickTip": "容斥原理標準公式：$66 + 28 - 9 = 85$ 個！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>85</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "內地聯招 (2014) 第3題",
      "topic": "二次不等式與開區間交集為空集判定",
      "score": "4分",
      "q": "(2014 內地) 設集合 $P = \\{x \\mid (x + 3)(2 - x) \\ge 0\\}$，$Q = \\{x \\mid x > 2\\}$，則 $P \\cap Q = (\\quad)$。",
      "options": [
        "A. $Q$",
        "B. $\\emptyset$",
        "C. $\\{2\\}$",
        "D. $P$"
      ],
      "knowledge": {
        "formulas": [
          "(x + 3)(2 - x) \\ge 0 \\iff (x + 3)(x - 2) \\le 0 \\iff -3 \\le x \\le 2"
        ]
      },
      "solution": {
        "thinking": "將二次不等式化為標準式解出閉區間 $P$，與大於 2 的開區間 $Q$ 取交集。",
        "steps": [
          "解集合 $P$：$$(x + 3)(2 - x) \\ge 0 \\iff (x + 3)(x - 2) \\le 0 \\implies -3 \\le x \\le 2$$故 $P = [-3, 2]$。",
          "集合 $Q = (2, +\\infty)$。",
          "注意 $P$ 包含右端點 2，而 $Q$ 是嚴格大於 2 的開區間，兩者無任何公共元素：$$P \\cap Q = \\emptyset$$"
        ],
        "ans": "B",
        "quickTip": "$P$ 的上限為 2，$Q$ 嚴格大於 2，端點不重合，交集為空集 $\\emptyset$，秒選 B！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "內地聯招 (2015) 第4題",
      "topic": "有限集合滿足條件的子集個數組合計數",
      "score": "4分",
      "q": "(2015 內地) 設集合 $A \\subseteq \\{1, 2, 3, 4\\}$，若 $A$ 至少有 3 個元素，則這樣的 $A$ 共有 $(\\quad)$。",
      "options": [
        "A. 2 個",
        "B. 4 個",
        "C. 5 個",
        "D. 7 個"
      ],
      "knowledge": {
        "formulas": [
          "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
          "N = \\binom{4}{3} + \\binom{4}{4} = 4 + 1 = 5"
        ]
      },
      "solution": {
        "thinking": "至少有 3 個元素包括恰有 3 個元素和恰有 4 個元素兩種情況，分類相加求和。",
        "steps": [
          "全集含有 4 個元素。",
          "至少有 3 個元素的情形：<br>1. 恰有 3 個元素的子集個數：$\\binom{4}{3} = 4$ 個（分別排除 1, 2, 3, 4）；<br>2. 恰有 4 個元素的子集個數：$\\binom{4}{4} = 1$ 個（即全集本身）。",
          "符合條件的子集總數為：$$4 + 1 = 5$$"
        ],
        "ans": "C",
        "quickTip": "組合數直接加：$\\binom{4}{3} + \\binom{4}{4} = 4 + 1 = 5$，秒選 C！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>C</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "內地聯招 (2016) 第5題",
      "topic": "絕對值不等式與指數不等式交集",
      "score": "4分",
      "q": "(2016 內地) 設集合 $A = \\{x \\mid |x - 1| < 1\\}$，$B = \\{x \\mid 2^x < 2\\}$，則 $A \\cap B = (\\quad)$。",
      "options": [
        "A. $\\{x \\mid 0 < x < 1\\}$",
        "B. $\\{x \\mid 0 < x < 2\\}$",
        "C. $\\{x \\mid x < 2\\}$",
        "D. $\\emptyset$"
      ],
      "knowledge": {
        "formulas": [
          "|x - 1| < 1 \\iff -1 < x - 1 < 1 \\iff 0 < x < 2",
          "2^x < 2^1 \\iff x < 1"
        ]
      },
      "solution": {
        "thinking": "分別解絕對值不等式和單調指數不等式，再取交集。",
        "steps": [
          "解集合 $A$：$$|x - 1| < 1 \\implies -1 < x - 1 < 1 \\implies 0 < x < 2$$故 $A = (0, 2)$。",
          "解集合 $B$：$$2^x < 2 \\implies 2^x < 2^1 \\implies x < 1$$故 $B = (-\\infty, 1)$。",
          "取交集：$$A \\cap B = (0, 2) \\cap (-\\infty, 1) = (0, 1) = \\{x \\mid 0 < x < 1\\}$$"
        ],
        "ans": "A",
        "quickTip": "$0 < x < 2$ 且 $x < 1 \\implies 0 < x < 1$，秒選 A！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>A</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "澳門科大 (2014) 第6題",
      "topic": "指數增長與多項式增長大小比較及數學歸納法證明",
      "score": "10分",
      "q": "(2014 澳門科大) 試比較 $2^n$ 與 $(n + 1)^2$ 的大小 ($n \\in \\mathbb{N}^*, n \\ge 6$)，並用數學歸納法證明你的結論。",
      "knowledge": {
        "formulas": [
          "\\text{數學歸納法三步：奠基 } n=6 \\to \\text{歸納假設 } n=k \\to \\text{遞推證明 } n=k+1"
        ],
        "points": [
          "指數增長速度遠超二次函數增長速度，當 $n \\ge 6$ 時恆有 $2^n > (n+1)^2$。"
        ]
      },
      "solution": {
        "thinking": "先計算 $n=6$ 猜想結論 $2^n > (n+1)^2$，再嚴格按數學歸納法格式完成兩步證明。",
        "steps": [
          "<b>猜想結論：</b><br>當 $n = 6$ 時，$2^6 = 64$，$(6 + 1)^2 = 49$。因為 $64 > 49$，故猜想：當 $n \\ge 6$ ($n \\in \\mathbb{N}^*$) 時，恆有 $2^n > (n + 1)^2$。",
          "<b>數學歸納法證明：</b><br>1. <b>奠基步驟：</b>當 $n = 6$ 時，左邊 $= 2^6 = 64$，右邊 $= (6 + 1)^2 = 49$。因為 $64 > 49$，不等式成立。<br>2. <b>歸納假設：</b>假設當 $n = k$ ($k \\ge 6, k \\in \\mathbb{N}^*$) 時不等式成立，即：$$2^k > (k + 1)^2$$<br>3. <b>遞推證明：</b>當 $n = k + 1$ 時：$$2^{k+1} = 2 \\cdot 2^k > 2(k + 1)^2 = 2k^2 + 4k + 2$$要證 $2^{k+1} > (k + 2)^2 = k^2 + 4k + 4$，只需證：$$(2k^2 + 4k + 2) - (k^2 + 4k + 4) > 0$$差值為 $k^2 - 2$。因為 $k \\ge 6$，所以 $k^2 - 2 \\ge 36 - 2 = 34 > 0$。<br>因此 $2^{k+1} > (k + 2)^2$ 成立。<br>由數學歸納法，對所有 $n \\ge 6$ ($n \\in \\mathbb{N}^*$)，均有 $2^n > (n + 1)^2$。"
        ],
        "ans": "2^n > (n + 1)^2 \\quad (n \\ge 6)",
        "quickTip": "$n=6$ 時 $64 > 49$；遞推時 $2(k+1)^2 - (k+2)^2 = k^2 - 2 \\ge 34 > 0$，證明極其簡潔自然！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSup><m:e><m:r><m:t>2</m:t></m:r></m:e><m:sup><m:r><m:t>n</m:t></m:r></m:sup></m:sSup><m:r><m:t>&gt;(n+1</m:t></m:r><m:sSup><m:e><m:r><m:t>)</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>(n≥6)</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "空間向量",
      "qNum": "澳門科大 (2015) 第7題",
      "topic": "整除性命題的數學歸納法證明",
      "score": "10分",
      "q": "(2015 澳門科大) 用數學歸納法證明：$9^n - 8n - 1$ ($n \\in \\mathbb{N}^*$) 能夠被 64 整除。",
      "knowledge": {
        "formulas": [
          "9^{k+1} - 8(k+1) - 1 = 9 \\cdot 9^k - 8k - 9",
          "\\text{二項式定理拆解：} 9^n = (1 + 8)^n = 1 + 8n + \\binom{n}{2}8^2 + \\dots"
        ]
      },
      "solution": {
        "thinking": "利用數學歸納法，奠基驗證 $n=1$；在假設 $n=k$ 時拆分 $9^{k+1} = 9 \\cdot 9^k$，利用構造法提取 64 的倍數。",
        "steps": [
          "<b>證明：</b><br>1. <b>奠基步驟：</b>當 $n = 1$ 時：$$9^1 - 8(1) - 1 = 9 - 8 - 1 = 0$$因為 $0 = 0 \\times 64$，故命題在 $n = 1$ 時成立。<br>2. <b>歸納假設：</b>假設當 $n = k$ ($k \\ge 1, k \\in \\mathbb{N}^*$) 時命題成立，即存在整數 $m$ 使得：$$9^k - 8k - 1 = 64m \\implies 9^k = 64m + 8k + 1$$<br>3. <b>遞推證明：</b>當 $n = k + 1$ 時：$$9^{k+1} - 8(k + 1) - 1 = 9 \\cdot 9^k - 8k - 8 - 1 = 9(64m + 8k + 1) - 8k - 9$$$$= 9 \\cdot 64m + 72k + 9 - 8k - 9 = 64(9m) + 64k = 64(9m + k)$$因為 $m, k \\in \\mathbb{Z}$，所以 $9m + k \\in \\mathbb{Z}$，即 $9^{k+1} - 8(k + 1) - 1$ 能夠被 64 整除。<br>由數學歸納法可知，對任意 $n \\in \\mathbb{N}^*$，$9^n - 8n - 1$ 均能被 64 整除。"
        ],
        "ans": "見步驟完整證明",
        "quickTip": "代入 $9^k = 64m + 8k + 1$，展開後 $72k - 8k = 64k$，$9 - 9 = 0$，恰好提取 64！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>見步驟完整證明</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
