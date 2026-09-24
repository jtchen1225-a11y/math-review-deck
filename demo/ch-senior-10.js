/* 2026 高三理組數學思維本 — 專題十 多項式除法、餘式定理、分式與無理方程 (7 題) - 支援 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題十 多項式除法、餘式定理、分式與無理方程",
  "year": "2026",
  "paper": "專題十",
  "title": "專題十 多項式除法、餘式定理、分式方程與無理方程、部分分式分解",
  "color": "#f59e0b",
  "sections": [
    "餘式定理與一次除式求值",
    "二次除式與聯立餘式求解",
    "分式方程求解與增根檢驗",
    "無理（根式）方程與平方域限制",
    "有理分式之部分分式分解法"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題十",
      "qNum": "單選題 第1題",
      "topic": "餘式定理之基本求值",
      "score": "4分",
      "q": "[四校聯考 2023 正卷] 若多項式 $f(x)$ 除以 $x^2 - x - 6$，餘式為 $3x - 2$，則 $f(3) = (\\quad)$。",
      "options": [
        "A. -2",
        "B. 0",
        "C. 3",
        "D. 7",
        "E. 9"
      ],
      "knowledge": {
        "formulas": [
          "f(x) = q(x)d(x) + r(x)",
          "d(3) = 0 \\implies f(3) = r(3)"
        ],
        "points": [
          "<b>餘式定理核心思想</b>：除式在某點取值為零時，被除式的值恰好等於餘式在該點的取值。"
        ]
      },
      "solution": {
        "thinking": "將除法關係表示為除法恆等式，注意到 $x=3$ 是除式 $x^2 - x - 6$ 的零點，直接代入餘式計算。",
        "steps": [
          "第一步：依題意，設除式為 $d(x) = x^2 - x - 6 = (x - 3)(x + 2)$。",
          "第二步：多項式除法恆等式為：$f(x) = (x - 3)(x + 2)q(x) + (3x - 2)$，其中 $q(x)$ 為商式。",
          "第三步：將 $x = 3$ 代入等式兩邊：$f(3) = (3 - 3)(3 + 2)q(3) + [3(3) - 2] = 0 + (9 - 2) = 7$。"
        ],
        "ans": "D",
        "trick": "心算：因為 $3^2 - 3 - 6 = 0$，商式項直接歸零，答案就是餘式 $3(3) - 2 = 7$，秒選 D！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十",
      "qNum": "解答題 第39題(a)",
      "topic": "分式方程的求解與增根檢驗",
      "score": "6分",
      "q": "求分式方程的實數解 $x$：<br>$$\\frac{1}{x+1} + \\frac{2}{x} = \\frac{1}{x-3}$$",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\text{最簡公分母}：x(x+1)(x-3)",
          "\\text{增根檢驗}：x \\neq -1, 0, 3"
        ],
        "points": [
          "<b>分式方程求解四步動線</b>：去分母、化為整式方程、解一元二次方程、嚴格檢驗增根。"
        ]
      },
      "solution": {
        "thinking": "兩邊同乘最簡公分母 $x(x+1)(x-3)$ 化為整式方程，整理成一元二次方程求解並檢驗分母不為零。",
        "steps": [
          "第一步：方程定義域為 $x \\neq -1, 0, 3$。最簡公分母為 $x(x+1)(x-3)$。",
          "第二步：兩邊同乘以最簡公分母：$x(x - 3) + 2(x + 1)(x - 3) = x(x + 1)$。",
          "第三步：展開各項：$(x^2 - 3x) + 2(x^2 - 2x - 3) = x^2 + x$。",
          "第四步：整理左邊：$x^2 - 3x + 2x^2 - 4x - 6 = 3x^2 - 7x - 6$。<br>移項得：$3x^2 - 7x - 6 - (x^2 + x) = 0 \\implies 2x^2 - 8x - 6 = 0 \\implies x^2 - 4x - 3 = 0$。",
          "第五步：利用求根公式：$x = \\frac{4 \\pm \\sqrt{(-4)^2 - 4(1)(-3)}}{2} = \\frac{4 \\pm \\sqrt{16 + 12}}{2} = \\frac{4 \\pm \\sqrt{28}}{2} = 2 \\pm \\sqrt{7}$。",
          "第六步：檢驗增根：$2 \\pm \\sqrt{7} \\notin \\{-1, 0, 3\\}$，均為原方程之真解。"
        ],
        "ans": "$x = 2 + \\sqrt{7}$ 或 $x = 2 - \\sqrt{7}$",
        "trick": "公式法化簡注意提因數：$\\sqrt{28} = 2\\sqrt{7}$，同除以 2 得 $2 \\pm \\sqrt{7}$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>x=2+</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>7</m:t></m:r></m:e></m:rad><m:r><m:t>$或$x=2−</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>7</m:t></m:r></m:e></m:rad></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十",
      "qNum": "解答題 第39題(b)",
      "topic": "無理（根式）方程求解與檢驗",
      "score": "6分",
      "q": "求無理方程的實數解 $x$：<br>$$\\sqrt{7 - 4x} = 2 - x$$",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\sqrt{A} = B \\iff A = B^2 \\land B \\ge 0"
        ],
        "points": [
          "<b>無理方程平方產生的增根陷阱</b>：兩邊平方是充分條件而非充要條件，必須要求等號右邊 $2 - x \\ge 0$（即 $x \\le 2$）！"
        ]
      },
      "solution": {
        "thinking": "列出定義域與值域約束 $2 - x \\ge 0$，兩邊平方後解一元二次方程，捨去不滿足約束的增根。",
        "steps": [
          "第一步：由根號非負及算術平方根非負性質，方程有解必須滿足：$7 - 4x \\ge 0 \\iff x \\le \\frac{7}{4}$ 且 $2 - x \\ge 0 \\iff x \\le 2$。綜合約束為 $x \\le \\frac{7}{4}$。",
          "第二步：兩邊平方：$7 - 4x = (2 - x)^2 = 4 - 4x + x^2$。",
          "第三步：移項化簡：$x^2 - 4x + 4 - (7 - 4x) = 0 \\implies x^2 - 3 = 0 \\implies x^2 = 3$。",
          "第四步：解得候選根 $x = \\sqrt{3}$ 或 $x = -\\sqrt{3}$。",
          "第五步：檢驗：$\\sqrt{3} \\approx 1.732 < \\frac{7}{4} = 1.75$（合題意，此時右邊 $2 - \\sqrt{3} > 0$）；$-\\sqrt{3} < 0 < 1.75$（合題意，此時右邊 $2 - (-\\sqrt{3}) > 0$）。代入原方程均成立。因此兩根均為真解。"
        ],
        "ans": "$x = \\sqrt{3}$ 或 $x = -\\sqrt{3}$",
        "trick": "巧解：$x$ 的一次項 $-4x$ 在兩邊恰好抵消！直接得 $x^2 = 3 \\implies x = \\pm\\sqrt{3}$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>x=</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>$或$x=−</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十",
      "qNum": "單選題 第44題",
      "topic": "餘數含參數的二次多項式除法",
      "score": "4分",
      "q": "當 $x^2 - 3x + k$ 除以 $x - k$ 時，餘數為 $k$。求常數 $k$ 的值 $(\\quad)$。",
      "options": [
        "A. 0",
        "B. 2",
        "C. 0 或 2",
        "D. 0 或 3",
        "E. 以上皆不是"
      ],
      "knowledge": {
        "formulas": [
          "f(k) = \\text{餘數}"
        ],
        "points": [
          "<b>餘式定理代入法</b>：多項式除以 $x - c$ 的餘數等於 $f(c)$。"
        ]
      },
      "solution": {
        "thinking": "設 $f(x) = x^2 - 3x + k$，由餘式定理知除以 $x - k$ 的餘數為 $f(k)$，令其等於 $k$ 解方程。",
        "steps": [
          "第一步：設 $f(x) = x^2 - 3x + k$。",
          "第二步：根據餘式定理，餘數為 $f(k) = k^2 - 3k + k = k^2 - 2k$。",
          "第三步：由題目條件，該餘數等於 $k$，故有：$k^2 - 2k = k$。",
          "第四步：移項得 $k^2 - 3k = 0 \\implies k(k - 3) = 0$。",
          "第五步：解得 $k = 0$ 或 $k = 3$。"
        ],
        "ans": "D",
        "trick": "代入驗證：$k=0$ 時 $x^2-3x$ 除以 $x$ 餘數為 $0=k$；$k=3$ 時 $x^2-3x+3$ 除以 $x-3$ 餘數為 $3=k$，選 D！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十",
      "qNum": "解答題 第54題",
      "topic": "二次除式與二次餘式的求法",
      "score": "12分",
      "q": "設多項式 $f(x)$ 除以 $x^2 - 3x + 2$ 的餘式為 $x + 4$，而 $f(x)$ 除以 $x^2 - 4x + 3$ 的餘式為 $2x + 3$。試問：<br>(1) 函數值 $f(2)$ 為何？<br>(2) 函數值 $f(3)$ 為何？<br>(3) $f(x)$ 除以 $x^2 - 5x + 6$ 的餘式為何？",
      "options": [],
      "knowledge": {
        "formulas": [
          "x^2 - 3x + 2 = (x-1)(x-2)",
          "x^2 - 4x + 3 = (x-1)(x-3)",
          "x^2 - 5x + 6 = (x-2)(x-3)"
        ],
        "points": [
          "<b>聯立餘式定理</b>：二次除式分解為兩個一次因式，可提供兩個點的精確函數值；再設二次除式的餘式為一次式 $R(x) = ax + b$，代入兩點解方程組。"
        ]
      },
      "solution": {
        "thinking": "利用因式分解求出關鍵點 $f(2), f(3)$ 的值，再設所求餘式為 $ax+b$ 待定係數求解。",
        "steps": [
          "第一步 (1)：因 $x^2 - 3x + 2 = (x - 1)(x - 2)$，故 $f(x) = (x - 1)(x - 2)Q_1(x) + (x + 4)$。令 $x = 2$，得 $f(2) = 0 + (2 + 4) = 6$。",
          "第二步 (2)：因 $x^2 - 4x + 3 = (x - 1)(x - 3)$，故 $f(x) = (x - 1)(x - 3)Q_2(x) + (2x + 3)$。令 $x = 3$，得 $f(3) = 0 + (2(3) + 3) = 9$。",
          "第三步 (3)：所求除式為 $x^2 - 5x + 6 = (x - 2)(x - 3)$，其為二次式，故餘式最高為一次式，設餘式為 $R(x) = ax + b$。",
          "第四步：有恆等式 $f(x) = (x - 2)(x - 3)Q_3(x) + (ax + b)$。<br>代入 $x = 2$：$2a + b = f(2) = 6$；<br>代入 $x = 3$：$3a + b = f(3) = 9$。",
          "第五步：兩式相減：$(3a + b) - (2a + b) = 9 - 6 \\implies a = 3$。代入得 $2(3) + b = 6 \\implies b = 0$。",
          "第六步：因此，$f(x)$ 除以 $x^2 - 5x + 6$ 的餘式為 $3x$。"
        ],
        "ans": "(1) $f(2) = 6$；(2) $f(3) = 9$；(3) 餘式為 $3x$",
        "trick": "兩點斜率法：餘式是一次直線，過 $(2, 6)$ 與 $(3, 9)$，斜率 $a = \\frac{9-6}{3-2} = 3$，直線方程為 $y - 6 = 3(x - 2) \\implies y = 3x$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>(1)$f(2)=6$；(2)$f(3)=9$；(3)餘式為$3x</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十",
      "qNum": "填空題 第57題",
      "topic": "多項式二次除式之待定係數求餘式",
      "score": "4分",
      "q": "用 $x + 1$ 除多項式 $p(x)$ 的餘式為 2，用 $x + 2$ 除多項式 $p(x)$ 的餘式為 1，則用 $x^2 + 3x + 2$ 除多項式 $p(x)$ 的餘式為 $(\\quad)$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "x^2 + 3x + 2 = (x+1)(x+2)",
          "p(x) = (x+1)(x+2)q(x) + (ax + b)"
        ],
        "points": [
          "由條件知 $p(-1) = 2$，$p(-2) = 1$。設一次餘式 $ax+b$ 列聯立方程求解。"
        ]
      },
      "solution": {
        "thinking": "根據餘式定理獲得 $p(-1)$ 與 $p(-2)$ 的值，設餘式為 $ax+b$ 解方程。",
        "steps": [
          "第一步：由題意知 $p(-1) = 2$，$p(-2) = 1$。",
          "第二步：因 $x^2 + 3x + 2 = (x + 1)(x + 2)$，設 $p(x) = (x + 1)(x + 2)q(x) + ax + b$。",
          "第三步：代入 $x = -1$ 得 $-a + b = 2$；代入 $x = -2$ 得 $-2a + b = 1$。",
          "第四步：兩式相減：$(-a + b) - (-2a + b) = 2 - 1 \\implies a = 1$。代入得 $-1 + b = 2 \\implies b = 3$。",
          "第五步：所求餘式為 $x + 3$。"
        ],
        "ans": "$x + 3$",
        "trick": "斜率 $a = \\frac{2 - 1}{-1 - (-2)} = 1$，$b = 2 - 1(-1) = 3$，口算得 $x + 3$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>x+3</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題十",
      "qNum": "解答題 第63題",
      "topic": "有理分式之部分分式分解",
      "score": "8分",
      "q": "[四校真題] 把有理分式化為部分分式：<br>$$\\frac{x^2 + 2}{x^3 - x^2 + x - 1}$$",
      "options": [],
      "knowledge": {
        "formulas": [
          "x^3 - x^2 + x - 1 = x^2(x-1) + (x-1) = (x-1)(x^2 + 1)",
          "\\frac{x^2+2}{(x-1)(x^2+1)} = \\frac{A}{x-1} + \\frac{Bx+C}{x^2+1}"
        ],
        "points": [
          "<b>部分分式分解法則</b>：一次因式對應常數分子 $A$；二次不可約因式對應一次分子 $Bx + C$。"
        ]
      },
      "solution": {
        "thinking": "先將分母分組分解因式，再按部分分式法則設待定係數通分比較分子求解。",
        "steps": [
          "第一步：分母分組因式分解：$x^3 - x^2 + x - 1 = x^2(x - 1) + (x - 1) = (x - 1)(x^2 + 1)$。",
          "第二步：設部分分式形式為：$\\frac{x^2 + 2}{(x - 1)(x^2 + 1)} = \\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 1}$。",
          "第三步：通分得分子恆等式：$x^2 + 2 = A(x^2 + 1) + (Bx + C)(x - 1)$。",
          "第四步：求 $A$：令 $x = 1$，得 $1^2 + 2 = A(1 + 1) + 0 \\implies 3 = 2A \\implies A = \\frac{3}{2}$。",
          "第五步：求 $C$：令 $x = 0$，得 $0 + 2 = A(1) + C(-1) \\implies 2 = \\frac{3}{2} - C \\implies C = \\frac{3}{2} - 2 = -\\frac{1}{2}$。",
          "第六步：求 $B$：比較 $x^2$ 的係數：$1 = A + B \\implies 1 = \\frac{3}{2} + B \\implies B = 1 - \\frac{3}{2} = -\\frac{1}{2}$。",
          "第七步：綜合整理得：$\\frac{x^2 + 2}{x^3 - x^2 + x - 1} = \\frac{3}{2(x - 1)} - \\frac{x + 1}{2(x^2 + 1)}$。"
        ],
        "ans": "$\\frac{3}{2(x - 1)} - \\frac{x + 1}{2(x^2 + 1)}$",
        "trick": "掩蓋法（Heaviside 法）：令 $x=1$，在原式中遮住 $(x-1)$，得 $A = \\frac{1+2}{1+1} = \\frac{3}{2}$，極速求出 $A$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>3</m:t></m:r></m:num><m:den><m:r><m:t>2(x−1)</m:t></m:r></m:den></m:f><m:r><m:t>−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>x+1</m:t></m:r></m:num><m:den><m:r><m:t>2(</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>+1)</m:t></m:r></m:den></m:f></m:oMath>"
      }
    }
  ]
});
})();
