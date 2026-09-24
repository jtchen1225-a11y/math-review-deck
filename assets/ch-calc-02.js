/* 2026 高三理組數學思維本 · 微積分篇 — 專題二 導數的應用 (23 題) - 支援 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
  "ch": "專題二 導數的應用",
  "year": "2026",
  "paper": "專題二",
  "title": "專題二 導數的應用 — 曲線的切線、單調性、極值、拐點與最優化",
  "color": "#059669",
  "sections": [
    "單選題 1~6 題",
    "切線方程 7~9 題",
    "極值與作圖 10~13 題",
    "最優化工程應用 14~15 題",
    "垂直切線與傾角 16~17 題",
    "恆成立與綜合 18~23 題"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第1題",
      "topic": "拋物線與直線相切的切點與參數確定",
      "score": "4分",
      "q": "函數 $y = ax^2 + 1$ 的圖像與直線 $y = x$ 相切，則實數 $a = (\\quad)$。",
      "options": [
        "A. $1 - \\cos 1$",
        "B. $1 + \\cos 1$",
        "C. $\\cos 1 - 1$",
        "D. $-1 - \\cos 1$"
      ],
      "knowledge": {
        "formulas": [
          "y' = 2ax",
          "\\text{切線斜率：} 2ax_0 = 1",
          "\\text{切點共用：} ax_0^2 + 1 = x_0"
        ],
        "points": [
          "<b>切線幾何條件</b>：切點處函數值相等且導數等於直線斜率 1。",
          "<b>判別式法</b>：聯立 $ax^2 - x + 1 = 0$，相切等價於判別式 $\\Delta = 0$。"
        ],
        "pitfall": "忘記 $a \\ne 0$，否則 $y=1$ 與 $y=x$ 不可能相切。"
      },
      "solution": {
        "thinking": "方法一（導數法）：設切點為 $(x_0, y_0)$，利用切線斜率為 1 及切點在直線上建立方程組；方法二（判別式法）：相切即方程有唯一重根，令 $\\Delta = 0$。",
        "steps": [
          "方法一（導數法）：<br>設切點為 $(x_0, y_0)$。求導得 $y' = 2ax$。<br>因為直線 $y = x$ 的斜率為 1，所以 $2ax_0 = 1 \\implies x_0 = \\frac{1}{2a}$。<br>切點同時在曲線和直線上：$y_0 = ax_0^2 + 1 = x_0$。<br>代入 $x_0 = \\frac{1}{2a}$：$a\\left(\\frac{1}{2a}\\right)^2 + 1 = \\frac{1}{2a} \\implies \\frac{1}{4a} + 1 = \\frac{1}{2a}$。<br>同乘 $4a$：$1 + 4a = 2 \\implies 4a = 1 \\implies a = \\frac{1}{4}$。",
          "方法二（判別式法）：<br>聯立 $\\begin{cases} y = ax^2 + 1 \\\\ y = x \\end{cases} \\implies ax^2 - x + 1 = 0$。<br>直線與拋物線相切 $\\iff \\Delta = (-1)^2 - 4(a)(1) = 0 \\implies 1 - 4a = 0 \\implies a = \\frac{1}{4}$。"
        ],
        "ans": "B",
        "quickTip": "二次方程判別式 $\\Delta = 1 - 4a = 0 \\implies a = 1/4$，3 秒秒殺！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第2題",
      "topic": "曲線切線與垂直直線斜率條件",
      "score": "4分",
      "q": "設曲線 $y = \\frac{x+1}{x-1}$ 在點 $(3, 2)$ 處的切線與直線 $ax + y + 3 = 0$ 垂直，則 $a = (\\quad)$。",
      "options": [
        "A. 2",
        "B. -2",
        "C. $\\frac{1}{2}$",
        "D. $-\\frac{1}{2}$"
      ],
      "knowledge": {
        "formulas": [
          "y' = \\left(\\frac{x+1}{x-1}\\right)' = \\frac{1(x-1) - (x+1)(1)}{(x-1)^2} = -\\frac{2}{(x-1)^2}",
          "k_1 \\cdot k_2 = -1 \\quad (\\text{垂直條件})"
        ],
        "points": [
          "<b>切線斜率</b>：在點 $x=3$ 處求導得 $k_1 = y'(3) = -\\frac{2}{(3-1)^2} = -\\frac{1}{2}$。",
          "<b>直線斜率</b>：直線 $ax + y + 3 = 0 \\implies y = -ax - 3$，斜率 $k_2 = -a$。"
        ],
        "pitfall": "垂直時斜率乘積為 $-1$，注意負號運算：$(-1/2)(-a) = -1 \\implies a/2 = -1 \\implies a = -2$。"
      },
      "solution": {
        "thinking": "先求分式函數在 $x=3$ 處的導數得到切線斜率，再由兩直線垂直的斜率關係求出參數 $a$。",
        "steps": [
          "求切線斜率 $k_1$：<br>$y' = \\frac{1(x-1) - (x+1)(1)}{(x-1)^2} = \\frac{-2}{(x-1)^2}$。<br>代入 $x = 3$：$k_1 = y'(3) = \\frac{-2}{(3-1)^2} = \\frac{-2}{4} = -\\frac{1}{2}$。",
          "求直線斜率 $k_2$：<br>直線 $ax + y + 3 = 0$ 化為斜截式 $y = -ax - 3$，其斜率 $k_2 = -a$。",
          "由兩直線互相垂直：$k_1 \\cdot k_2 = -1$。<br>$\\left(-\\frac{1}{2}\\right)(-a) = -1 \\implies \\frac{a}{2} = -1 \\implies a = -2$。"
        ],
        "ans": "B",
        "quickTip": "切線斜率為 $-1/2$，垂直直線斜率必為 $+2$。而直線斜率為 $-a$，故 $-a = 2 \\implies a = -2$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第3題",
      "topic": "三次多項式極小值點分佈區間",
      "score": "4分",
      "q": "函數 $f(x) = x^3 - 6b^2 x + 3b$ 在區間 $(0, 1)$ 內有極小值，則實數 $b$ 的取值範圍是 $(\\quad)$。",
      "options": [
        "A. $b > 0$",
        "B. $b < \\frac{1}{2}$",
        "C. $0 < b < \\frac{\\sqrt{2}}{2}$",
        "D. $b < 1$"
      ],
      "knowledge": {
        "formulas": [
          "f'(x) = 3x^2 - 6b^2 = 3(x^2 - 2b^2)",
          "\\text{極值可疑點：} x = \\pm \\sqrt{2}|b|"
        ],
        "points": [
          "<b>極小值點判定</b>：三次多項式二次項為 0，導函數根為 $-\\sqrt{2}|b|$（極大值點）和 $+\\sqrt{2}|b|$（極小值點）。",
          "<b>開區間約束</b>：極小值點 $x = \\sqrt{2}|b|$ 必須落在開區間 $(0, 1)$ 內。"
        ],
        "pitfall": "必須保證極值點在區間內部，即 $0 < \\sqrt{2}|b| < 1$，故 $0 < |b| < \\frac{\\sqrt{2}}{2}$。"
      },
      "solution": {
        "thinking": "求出導函數零點，判斷極值點性質，將極小值點限制在開區間 $(0, 1)$ 內求解不等式。",
        "steps": [
          "求導函數：$f'(x) = 3x^2 - 6b^2$。",
          "令 $f'(x) = 0 \\implies x^2 = 2b^2$。<br>若 $b = 0$，則 $f'(x) = 3x^2 \\ge 0$，無極值，故 $b \\ne 0$。<br>導函數零點為 $x_1 = -\\sqrt{2}|b|$ 與 $x_2 = \\sqrt{2}|b|$。",
          "由三次函數開口向上性質：<br>當 $x < -\\sqrt{2}|b|$ 時 $f' > 0$；當 $-\\sqrt{2}|b| < x < \\sqrt{2}|b|$ 時 $f' < 0$；當 $x > \\sqrt{2}|b|$ 時 $f' > 0$。<br>因此，極小值點必為正根 $x_2 = \\sqrt{2}|b|$。",
          "題目要求在 $(0, 1)$ 內有極小值：<br>$0 < \\sqrt{2}|b| < 1 \\implies 0 < |b| < \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$。<br>當限定 $b > 0$ 時，即為 $0 < b < \\frac{\\sqrt{2}}{2}$。"
        ],
        "ans": "C",
        "quickTip": "極小值點為 $\\sqrt{2}b \\in (0, 1) \\implies 0 < b < 1/\\sqrt{2} = \\sqrt{2}/2$，選 C！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>C</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第4題",
      "topic": "原函數曲線的極值點個數辨析",
      "score": "4分",
      "q": "函數 $f(x)$ 的定義域為開區間 $(m, n)$，圖像如圖所示，則函數 $f(x)$ 在 $(m, n)$ 內有極點 $(\\quad)$ 個。<div style=\"text-align:center;margin:8px 0;\"><img src=\"img/p3_img2_120.jpeg\" style=\"max-height:140px;\" alt=\"f(x) 原函數曲線\" /></div>",
      "options": [
        "A. 1 個",
        "B. 2 個",
        "C. 3 個",
        "D. 4 個"
      ],
      "knowledge": {
        "formulas": [
          "\\text{極值點：函數在該點鄰域內取得局部最大值或局部最小值}"
        ],
        "points": [
          "<b>原函數極值點特徵</b>：原函數圖像的「波峰」（局部極大值）與「波谷」（局部極小值）。",
          "<b>圖形逐點觀察</b>：在 $x=a$ 處為波谷（極小值），在 $x=b$ 處為波峰（極大值），在 $x=d$ 處為波谷（極小值），端點 $m, n$ 為開區間不計入。"
        ],
        "pitfall": "$c, e$ 是與 $x$ 軸的交點（零點），不是極值點！"
      },
      "solution": {
        "thinking": "本圖是原函數 $y = f(x)$ 本身的曲線，極值點對應圖中的所有波峰與波谷。",
        "steps": [
          "仔細觀察題圖（此圖為原函數 $y = f(x)$ 的圖像）：",
          "在點 $x = a$ 處，函數由減變增，為局部波谷（極小值點）；",
          "在點 $x = b$ 處，函數由增變減，為局部波峰（極大值點）；",
          "在點 $x = d$ 處，函數由減變增，為局部波谷（極小值點）；",
          "而 $c, e$ 為函數與 $x$ 軸的交點（零點），非極值點；$m, n$ 為開區間端點不在區間內。",
          "故在 $(m, n)$ 內共有 3 個極值點（分別為 $a, b, d$）。"
        ],
        "ans": "C",
        "quickTip": "數原函數波峰波谷：$a$ 谷、$b$ 峰、$d$ 谷，共 3 個，選 C！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>C</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第5題",
      "topic": "導函數符號變化判斷極小值點個數",
      "score": "4分",
      "q": "函數 $f(x)$ 的定義域為開區間 $(a, b)$，導函數 $f'(x)$ 在 $(a, b)$ 內的圖像如圖所示，則函數 $f(x)$ 在開區間 $(a, b)$ 內有極小值點 $(\\quad)$ 個。<div style=\"text-align:center;margin:8px 0;\"><img src=\"img/p3_img1_119.jpeg\" style=\"max-height:140px;\" alt=\"f'(x) 導函數曲線\" /></div>",
      "options": [
        "A. 1 個",
        "B. 2 個",
        "C. 3 個",
        "D. 4 個"
      ],
      "knowledge": {
        "formulas": [
          "f'(x) < 0 \\to f'(x) > 0 \\implies x_0 \\text{ 為極小值點}",
          "f'(x) > 0 \\to f'(x) < 0 \\implies x_0 \\text{ 為極大值點}"
        ],
        "points": [
          "<b>看清圖象是導函數 $y = f'(x)$</b>：極小值點對應導函數圖像由 $x$ 軸下方穿到上方（負變正的穿零點）。",
          "<b>相切零點不變號</b>：在原點處導函數相切於 $x$ 軸未變號，不構成極值點。"
        ],
        "pitfall": "千萬不能當成原函數數波谷！導函數的極小值點必須滿足「負穿正」。"
      },
      "solution": {
        "thinking": "在導函數圖像中，尋找 $f'(x) = 0$ 且兩側符號由負變正的穿透交點。",
        "steps": [
          "注意本圖為導函數 $y = f'(x)$ 的圖像：",
          "從左端 $a$ 出發：$f'(x) > 0$；",
          "第一個零點：導函數由上往下穿過 $x$ 軸（由正變負），對應原函數的極大值點；",
          "第二個零點：導函數由下往上穿過 $x$ 軸（由負變正），對應原函數的極小值點（第 1 個）；",
          "原點處：導函數與 $x$ 軸相切（兩側均為正），符號未變，不是極值點；",
          "第三個零點（右側）：導函數由上往下穿過 $x$ 軸（由正變負），對應極大值點。",
          "整個區間內，導函數「由負變正」的穿零點只有 1 處，故極小值點只有 1 個。"
        ],
        "ans": "A",
        "quickTip": "導函數求極小：找「下穿上（負變正）」的零點，全圖僅 1 處，選 A！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>A</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第6題",
      "topic": "三次多項式全實數單調性與判別式",
      "score": "4分",
      "q": "已知函數 $f(x) = -x^3 + ax^2 - x - 1$ 在 $(-\\infty, +\\infty)$ 上是單調函數，則實數 $a$ 的取值範圍是 $(\\quad)$。",
      "options": [
        "A. $(-\\infty, -\\sqrt{3}] \\cup [\\sqrt{3}, +\\infty)$",
        "B. $[-\\sqrt{3}, \\sqrt{3}]$",
        "C. $(-\\infty, -\\sqrt{3}) \\cup (\\sqrt{3}, +\\infty)$",
        "D. $(-\\sqrt{3}, \\sqrt{3})$"
      ],
      "knowledge": {
        "formulas": [
          "f'(x) = -3x^2 + 2ax - 1 \\le 0 \\quad (\\forall x \\in \\mathbb{R})",
          "\\Delta = (2a)^2 - 4(-3)(-1) \\le 0"
        ],
        "points": [
          "<b>全域單調條件</b>：三次項係數為 $-1 < 0$，函數必在全實數上單調遞減，等價於 $f'(x) \\le 0$ 恆成立。",
          "<b>二次型恆負條件</b>：二次項係數 $-3 < 0$，只需判別式 $\\Delta \\le 0$。"
        ],
        "pitfall": "單調性包含端點等號，判別式必須帶等號 $\\Delta \\le 0$（閉區間）。"
      },
      "solution": {
        "thinking": "由首項係數負值確定其必然全域單調遞減，轉化為二次導函數恆非正，利用判別式 $\\Delta \\le 0$ 求解。",
        "steps": [
          "求導函數：$f'(x) = -3x^2 + 2ax - 1$。",
          "因為 $f(x)$ 在 $\\mathbb{R}$ 上單調，且最高次項係數為負，故 $f(x)$ 必為單調遞減函數。",
          "這等價於對所有 $x \\in \\mathbb{R}$，恆有 $f'(x) \\le 0$，即 $-3x^2 + 2ax - 1 \\le 0$ 恆成立。",
          "二次項係數 $-3 < 0$ 滿足開口向下，只需判別式 $\\Delta \\le 0$：<br>$\\Delta = (2a)^2 - 4(-3)(-1) = 4a^2 - 12 \\le 0$。",
          "解得：$a^2 \\le 3 \\implies -\\sqrt{3} \\le a \\le \\sqrt{3}$，即 $a \\in [-\\sqrt{3}, \\sqrt{3}]$。"
        ],
        "ans": "B",
        "quickTip": "$\\Delta = 4a^2 - 12 \\le 0 \\implies a^2 \\le 3 \\implies [-\\sqrt{3}, \\sqrt{3}]$，選 B！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>B</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第7題",
      "topic": "高次複合多項式切線方程",
      "score": "6分",
      "q": "求通過點 $(0, 1)$ 且與曲線 $f(x) = (1 + 4x)^{10}$ 相切的切線方程。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x) = 10(1 + 4x)^9 \\cdot 4 = 40(1 + 4x)^9",
          "y - y_0 = f'(x_0)(x - x_0)"
        ],
        "points": [
          "<b>檢驗點是否在曲線上</b>：將 $x=0$ 代入得 $f(0) = (1+0)^{10} = 1$，說明 $(0, 1)$ 恰好就是切點！",
          "<b>點斜式寫方程</b>：直接由切點斜率寫出切線方程。"
        ],
        "pitfall": "如果點在曲線上，切線斜率直接就是 $f'(0)$；若點不在曲線上才需要設切點。"
      },
      "solution": {
        "thinking": "檢驗點 $(0, 1)$ 在曲線內部，求導得到切線斜率，利用點斜式寫出直線方程。",
        "steps": [
          "檢驗點 $(0, 1)$：$f(0) = (1 + 4(0))^{10} = 1$，說明點 $(0, 1)$ 就是曲線上的切點。",
          "對 $f(x)$ 求導：$f'(x) = 10(1 + 4x)^9 \\cdot (1 + 4x)' = 40(1 + 4x)^9$。",
          "計算切線斜率：$k = f'(0) = 40(1 + 0)^9 = 40$。",
          "由點斜式寫出切線方程：<br>$y - 1 = 40(x - 0) \\implies y = 40x + 1$（或一般式 $40x - y + 1 = 0$）。"
        ],
        "ans": "$y = 40x + 1 \\quad (\\text{或 } 40x - y + 1 = 0)$",
        "quickTip": "切點為 $(0, 1)$，斜率 $f'(0) = 40$，切線就是 $y = 40x + 1$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>y=40x+1(或40x−y+1=0)</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第8題",
      "topic": "三角函數在零點處的切線方程",
      "score": "6分",
      "q": "求曲線 $y = \\sin 3x$ 在點 $P\\left(\\frac{\\pi}{3}, 0\\right)$ 處的切線方程。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y' = 3\\cos 3x",
          "\\cos\\pi = -1"
        ],
        "points": [
          "<b>切線斜率</b>：$y'\\left(\\frac{\\pi}{3}\\right) = 3\\cos\\left(3 \\cdot \\frac{\\pi}{3}\\right) = 3\\cos\\pi = -3$。",
          "<b>點斜式方程</b>：$y - 0 = -3\\left(x - \\frac{\\pi}{3}\\right)$。"
        ],
        "pitfall": "求導連鎖律漏乘內層係數 3；三角數值 $\\cos\\pi = -1$。"
      },
      "solution": {
        "thinking": "求三角函數導數，代入給定點橫坐標計算斜率，寫出直線方程。",
        "steps": [
          "求導函數：$y' = (\\sin 3x)' = 3\\cos 3x$。",
          "計算點 $P$ 處的切線斜率：<br>$k = y'\\left(\\frac{\\pi}{3}\\right) = 3\\cos\\left(3 \\cdot \\frac{\\pi}{3}\\right) = 3\\cos\\pi = 3(-1) = -3$。",
          "由點斜式寫出切線方程：<br>$y - 0 = -3\\left(x - \\frac{\\pi}{3}\\right) \\implies y = -3x + \\pi$（或一般式 $3x + y - \\pi = 0$）。"
        ],
        "ans": "$3x + y - \\pi = 0 \\quad (\\text{或 } y = -3x + \\pi)$",
        "quickTip": "斜率為 $3\\cos\\pi = -3$，方程 $y = -3(x - \\pi/3) \\implies 3x + y - \\pi = 0$。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>3x+y−π=0(或y=−3x+π)</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第9題",
      "topic": "隱函數曲線的切線方程",
      "score": "8分",
      "q": "求曲線 $xy^2 + x^2 y + 6 = 0$ 在點 $(-2, 3)$ 處的切線方程。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\frac{d}{dx}(xy^2) = y^2 + 2xy y'",
          "\\frac{d}{dx}(x^2 y) = 2xy + x^2 y'"
        ],
        "points": [
          "<b>乘積法則隱函數求導</b>：對 $xy^2$ 與 $x^2 y$ 分別運用乘積求導。",
          "<b>切點代入求斜率</b>：將 $x = -2, y = 3$ 直接代入導函數方程解出 $y'$。"
        ],
        "pitfall": "求導過程中代入點坐標時正負號務必看清：$2(-2)(3) = -12$。"
      },
      "solution": {
        "thinking": "對隱函數方程兩邊對 $x$ 求導，代入切點坐標求出斜率，寫出切線方程。",
        "steps": [
          "對方程 $xy^2 + x^2 y + 6 = 0$ 兩側對 $x$ 求導：<br>$(1 \\cdot y^2 + x \\cdot 2y y') + (2x \\cdot y + x^2 y') + 0 = 0$。",
          "整理得：$y^2 + 2xy + (2xy + x^2) y' = 0$。",
          "代入切點坐標 $x = -2, y = 3$：<br>$3^2 + 2(-2)(3) + [2(-2)(3) + (-2)^2] y' = 0$<br>$9 - 12 + [-12 + 4] y' = 0$<br>$-3 - 8 y' = 0 \\implies 8 y' = -3 \\implies y' = -\\frac{3}{8}$。",
          "由點斜式寫出切線方程：<br>$y - 3 = -\\frac{3}{8}(x - (-2)) \\implies 8(y - 3) = -3(x + 2)$<br>$8y - 24 = -3x - 6 \\implies 3x + 8y - 18 = 0$。"
        ],
        "ans": "3x + 8y - 18 = 0",
        "quickTip": "代入點求導：$9 - 12 + (-12 + 4)y' = 0 \\implies y' = -3/8$，$3x + 8y - 18 = 0$ 一步到位！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>3x+8y−18=0</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第10題",
      "topic": "常見函數的極值求解 (分式、根式差、三次多項式)",
      "score": "10分",
      "q": "求下列函數的極值：<br>(1) $f(x) = x^3 + \\frac{3}{x}$；<br>(2) $y = \\sqrt{2x + 4} - \\sqrt{x + 3}$；<br>(3) $f(x) = x^3 - 3x^2 + 6x - 2$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x) = 0 \\text{ 求駐點，由符號變化判斷極大值/極小值}",
          "(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}"
        ],
        "points": [
          "<b>(1) 定義域 $x \\ne 0$</b>：$f'(x) = 3x^2 - 3/x^2 = 0 \\implies x^4 = 1$。",
          "<b>(2) 根式定義域</b>：$2x+4 \\ge 0$ 且 $x+3 \\ge 0 \\implies x \\ge -2$。",
          "<b>(3) 判別式無根</b>：$f'(x) = 3x^2 - 6x + 6 = 3[(x-1)^2 + 1] > 0$ 恆成立，無極值！"
        ],
        "pitfall": "(3) 中導函數恆大於 0，全域單調遞增，千萬別硬求極值。"
      },
      "solution": {
        "thinking": "分別求導，令導函數為零求出駐點，透過一階導數符號表判斷極大、極小值。",
        "steps": [
          "(1) 定義域為 $x \\ne 0$。$f'(x) = 3x^2 - \\frac{3}{x^2} = \\frac{3(x^4 - 1)}{x^2}$。<br>令 $f'(x) = 0 \\implies x^4 = 1 \\implies x = \\pm 1$。<br>當 $x = -1$ 時，$f'(x)$ 由正變負，取得極大值 $f(-1) = -1 - 3 = -4$；<br>當 $x = 1$ 時，$f'(x)$ 由負變正，取得極小值 $f(1) = 1 + 3 = 4$。",
          "(2) 定義域：$x \\ge -2$。求導：$y' = \\frac{2}{2\\sqrt{2x+4}} - \\frac{1}{2\\sqrt{x+3}} = \\frac{1}{\\sqrt{2x+4}} - \\frac{1}{2\\sqrt{x+3}}$。<br>令 $y' = 0 \\implies 2\\sqrt{x+3} = \\sqrt{2x+4} \\implies 4(x+3) = 2x+4 \\implies 2x = -8 \\implies x = -4$。<br>但 $x = -4$ 不在定義域 $x \\ge -2$ 內！在定義域 $[-2, +\\infty)$ 內 $y' > 0$ 恆成立，函數單調遞增，無內部極值點（端點 $x=-2$ 取得最小值 $-1$）。",
          "(3) $f'(x) = 3x^2 - 6x + 6 = 3(x^2 - 2x + 2) = 3[(x-1)^2 + 1] > 0$ 恆成立。<br>因此 $f(x)$ 在 $\\mathbb{R}$ 上嚴格單調遞增，無極值。"
        ],
        "ans": "(1) 極大值 $f(-1) = -4$，極小值 $f(1) = 4$；(2) 無內部極值（在 $x=-2$ 處有端點最小值 $-1$）；(3) 無極值",
        "quickTip": "(1) 奇函數，負處極大為 -4，正處極小為 4；(3) 判別式小於 0 恆增無極值！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(1)極大值$f(−1)=−4$，極小值$f(1)=4$；(2)無內部極值（在$x=−2$處有端點最小值$−1$）；(3)無極值</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第11題",
      "topic": "四次多項式的單調區間、極值與拐點",
      "score": "10分",
      "q": "求函數 $y = \\frac{x^4}{2} - \\frac{2}{3}x^3 - x^2 + 2x + 4$ 的單調區間，極值及拐點。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y' = 2x^3 - 2x^2 - 2x + 2 = 2(x^3 - x^2 - x + 1) = 2(x-1)^2(x+1)",
          "y'' = 6x^2 - 4x - 2 = 2(3x+1)(x-1)"
        ],
        "points": [
          "<b>因式分解一階導</b>：$x^3 - x^2 - x + 1 = x^2(x-1) - (x-1) = (x-1)^2(x+1)$。",
          "<b>二重根不改變符號</b>：$x = 1$ 是二重根，導函數在 $x=1$ 兩側不變號，故 $x=1$ 不是極值點！",
          "<b>拐點判定</b>：二階導零點 $x = 1, -1/3$ 處符號均發生改變，皆為拐點。"
        ],
        "pitfall": "極值點只有 $x = -1$ 一個！$x = 1$ 是駐點但不是極值點（是拐點）。"
      },
      "solution": {
        "thinking": "求出一階導數因式分解判斷單調性與極值；求出二階導數因式分解求出拐點坐標。",
        "steps": [
          "一階求導：$y' = 2x^3 - 2x^2 - 2x + 2 = 2[x^2(x-1) - (x-1)] = 2(x-1)^2(x+1)$。<br>令 $y' = 0 \\implies x = -1$ 或 $x = 1$。<br>① 當 $x < -1$ 時，$x+1 < 0, (x-1)^2 > 0 \\implies y' < 0$，單調遞減；<br>② 當 $-1 < x < 1$ 時，$x+1 > 0, (x-1)^2 > 0 \\implies y' > 0$，單調遞增；<br>③ 當 $x > 1$ 時，$y' > 0$，單調遞增。<br>因此：單調遞減區間為 $(-\\infty, -1]$；單調遞增區間為 $[-1, +\\infty)$。<br>極小值在 $x = -1$ 處：$y(-1) = \\frac{1}{2} + \\frac{2}{3} - 1 - 2 + 4 = \\frac{13}{6}$。無極大值。",
          "二階求導：$y'' = 6x^2 - 4x - 2 = 2(3x^2 - 2x - 1) = 2(3x + 1)(x - 1)$。<br>令 $y'' = 0 \\implies x = -\\frac{1}{3}$ 或 $x = 1$。<br>兩側二階導數符號均改變，故拐點有兩處：<br>當 $x = 1$ 時，$y(1) = \\frac{1}{2} - \\frac{2}{3} - 1 + 2 + 4 = \\frac{29}{6}$，拐點 $(1, \\frac{29}{6})$；<br>當 $x = -\\frac{1}{3}$ 時，$y(-1/3) = \\frac{1}{162} + \\frac{2}{81} - \\frac{1}{9} - \\frac{2}{3} + 4 = \\frac{529}{162}$，拐點 $(-\\frac{1}{3}, \\frac{529}{162})$。"
        ],
        "ans": "單調減區間 $(-\\infty, -1]$，增區間 $[-1, +\\infty)$；極小值 $y(-1) = \\frac{13}{6}$；拐點為 $(1, \\frac{29}{6})$ 和 $(-\\frac{1}{3}, \\frac{529}{162})$",
        "quickTip": "$x=1$ 為導函數的二重零點，函數穿過後繼續遞增，是典型的拐點而非極值點！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>單調減區間$(−∞,−1]$，增區間$[−1,+∞)$；極小值$y(−1)=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>13</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:r><m:t>$；拐點為$(1,</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>29</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:r><m:t>)$和$(−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>,</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>529</m:t></m:r></m:num><m:den><m:r><m:t>162</m:t></m:r></m:den></m:f><m:r><m:t>)$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第12題",
      "topic": "閉區間多項式函數的最大值",
      "score": "6分",
      "q": "求函數 $y = x^4 - 8x^2 + 2$ 在區間 $[-1, 3]$ 上的最大值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y' = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)",
          "\\text{閉區間最值比較：端點值與內部極值點值}"
        ],
        "points": [
          "<b>駐點落在區間內</b>：區間為 $[-1, 3]$，駐點 $-2$ 不在區間內，只有 $x = 0$ 和 $x = 2$ 在區間內。",
          "<b>列值表對比</b>：計算 $x = -1, 0, 2, 3$ 四個點的函數值。"
        ],
        "pitfall": "不要遺漏區間右端點 $x = 3$ 的函數值計算。"
      },
      "solution": {
        "thinking": "求導求出區間內部的所有駐點，分別計算駐點值與端點值，比較得出最大值。",
        "steps": [
          "求導函數：$y' = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)$。",
          "令 $y' = 0$，駐點為 $x = 0, 2, -2$。<br>因為自變量區間為 $[-1, 3]$，所以區間內部的駐點為 $x = 0$ 和 $x = 2$（$-2$ 捨去）。",
          "計算各候選點的函數值：<br>① 左端點：$y(-1) = (-1)^4 - 8(-1)^2 + 2 = 1 - 8 + 2 = -5$；<br>② 內部駐點：$y(0) = 0 - 0 + 2 = 2$；<br>③ 內部駐點：$y(2) = 2^4 - 8(2^2) + 2 = 16 - 32 + 2 = -14$；<br>④ 右端點：$y(3) = 3^4 - 8(3^2) + 2 = 81 - 72 + 2 = 11$。",
          "比較可得：最大值為 $y(3) = 11$（最小值為 $y(2) = -14$）。"
        ],
        "ans": "最大值為 $11$ (在 $x = 3$ 處取得)",
        "quickTip": "令 $u = x^2 \\in [0, 9]$，原式化為二次函數 $u^2 - 8u + 2 = (u-4)^2 - 14$。當 $u=9$ 時最大，值為 $(9-4)^2 - 14 = 25 - 14 = 11$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>最大值為$11$(在$x=3$處取得)</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第13題",
      "topic": "函數圖形描繪 (漸近線、極值點與拐點)",
      "score": "10分",
      "q": "描繪下列函數的圖形，若存在，求出極點及拐點：<br>(1) $y = \\frac{x}{x^2 - 1}$；<br>(2) $y = x^3 - 6x^2 + 9x - 10$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(1) y' = \\frac{-(x^2+1)}{(x^2-1)^2} < 0, \\quad y'' = \\frac{2x(x^2+3)}{(x^2-1)^3}",
          "(2) y' = 3(x-1)(x-3), \\quad y'' = 6(x-2)"
        ],
        "points": [
          "<b>(1) 奇函數與垂直漸近線</b>：定義域 $x \\ne \\pm 1$，垂直漸近線為 $x = \\pm 1$，水平漸近線為 $y = 0$。導函數恆負，無極值，拐點在原點 $(0, 0)$。",
          "<b>(2) 三次函數經典形態</b>：極大值點 $(1, -6)$，極小值點 $(3, -10)$，對稱中心（拐點）為 $(2, -8)$。"
        ],
        "pitfall": "有理分式必須先明確定義域與垂直漸近線位置。"
      },
      "solution": {
        "thinking": "利用一階導數判定單調性與極值，二階導數判定凹凸性與拐點，結合極限漸近線繪製圖像。",
        "steps": [
          "(1) 函數 $y = \\frac{x}{x^2 - 1}$：<br>① 定義域 $x \\ne \\pm 1$，為奇函數（圖形關於原點對稱）。<br>② 垂直漸近線為 $x = 1$ 和 $x = -1$，水平漸近線為 $y = 0$。<br>③ 一階導：$y' = \\frac{1(x^2-1) - x(2x)}{(x^2-1)^2} = \\frac{-x^2-1}{(x^2-1)^2} < 0$ 恆成立。在各定義區間內均單調遞減，無極值點。<br>④ 二階導：$y'' = \\frac{2x(x^2+3)}{(x^2-1)^3}$。當 $x = 0$ 時 $y'' = 0$ 且兩側變號，故拐點為原點 $(0, 0)$。<br>⑤ 作圖要點：三支雙曲線型分支，分別在 $(-\\infty, -1)$, $(-1, 1)$, $(1, +\\infty)$。",
          "(2) 函數 $y = x^3 - 6x^2 + 9x - 10$：<br>① 一階導：$y' = 3x^2 - 12x + 9 = 3(x-1)(x-3)$。令 $y' = 0 \\implies x = 1$ 或 $x = 3$。<br>在 $x=1$ 處取極大值：$y(1) = 1 - 6 + 9 - 10 = -6$，極大值點為 $(1, -6)$；<br>在 $x=3$ 處取極小值：$y(3) = 27 - 54 + 27 - 10 = -10$，極小值點為 $(3, -10)$。<br>② 二階導：$y'' = 6x - 12 = 6(x-2)$。令 $y'' = 0 \\implies x = 2$。<br>拐點坐標為 $(2, y(2)) = (2, 8 - 24 + 18 - 10) = (2, -8)$。<br>③ 圖像為標準 S 型三次曲線，拐點 $(2, -8)$ 亦為其對稱中心。"
        ],
        "ans": "(1) 無極值，拐點 $(0, 0)$，漸近線 $x = \\pm 1, y = 0$；(2) 極大值點 $(1, -6)$，極小值點 $(3, -10)$，拐點 $(2, -8)$",
        "quickTip": "三次函數拐點坐標必為兩極值點的中點：$((1+3)/2, (-6-10)/2) = (2, -8)$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(1)無極值，拐點$(0,0)$，漸近線$x=±1,y=0$；(2)極大值點$(1,−6)$，極小值點$(3,−10)$，拐點$(2,−8)$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第14題",
      "topic": "拋物線內接矩形面積最優化",
      "score": "10分",
      "q": "(a) 描繪曲線 $y = 12 - x^2$ 的圖像。<br>(b) 設矩形 $PQRS$ 的下底在 $x$ 軸上，其上的二頂點在曲線 $y = 12 - x^2$ 上。若 $P(s, t)$ 為第一象限的點。試以 $s$ 表 $PQRS$ 的面積。<br>(c) 求矩形 $PQRS$ 之最大的可能面積。",
      "options": [],
      "knowledge": {
        "formulas": [
          "A(s) = 2s \\cdot t = 2s(12 - s^2) = 24s - 2s^3 \\quad (0 < s < \\sqrt{12})",
          "A'(s) = 24 - 6s^2 = 0 \\implies s = 2"
        ],
        "points": [
          "<b>對稱性定底長</b>：由於拋物線關於 $y$ 軸對稱，矩形底長為 $2s$，高為 $t = 12 - s^2$。",
          "<b>求導求最值</b>：令面積導函數為 0 求出最優尺寸。"
        ],
        "pitfall": "底邊長度是 $2s$ 而不是 $s$（因為左右各佔 $s$）。"
      },
      "solution": {
        "thinking": "利用對稱性寫出以 $s$ 為自變量的矩形面積函數，求導找出極值點並計算最大面積。",
        "steps": [
          "(a) 曲線 $y = 12 - x^2$ 是頂點在 $(0, 12)$、與 $x$ 軸交於 $(\\pm\\sqrt{12}, 0) = (\\pm 2\\sqrt{3}, 0)$ 的開口向下對稱拋物線。",
          "(b) 頂點 $P(s, t)$ 在第一象限且在曲線上，故 $t = 12 - s^2$（其中 $0 < s < 2\\sqrt{3}$）。<br>由對稱性，矩形位於 $x$ 軸上的底邊長度為 $2s$，高為 $t = 12 - s^2$。<br>因此矩形面積為：$A(s) = 2s \\cdot (12 - s^2) = 24s - 2s^3$。",
          "(c) 對 $A(s)$ 求導：$A'(s) = 24 - 6s^2$。<br>令 $A'(s) = 0 \\implies 6s^2 = 24 \\implies s^2 = 4$。<br>因為 $s > 0$，所以唯一臨界點為 $s = 2$。<br>當 $0 < s < 2$ 時 $A'(s) > 0$；當 $s > 2$ 時 $A'(s) < 0$。<br>因此在 $s = 2$ 處取得最大面積：<br>$A_{\\max} = A(2) = 24(2) - 2(2^3) = 48 - 16 = 32$。"
        ],
        "ans": "(b) $A(s) = 24s - 2s^3$；(c) 最大可能面積為 $32$",
        "quickTip": "$A'(s) = 24 - 6s^2 = 0 \\implies s = 2$；$A = 2(2)(12 - 4) = 4 \\times 8 = 32$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(b)$A(s)=24s−2</m:t></m:r><m:sSup><m:e><m:r><m:t>s</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup><m:r><m:t>$；(c)最大可能面積為$32$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第15題",
      "topic": "無蓋長方體盒表面積最小化工程最優設計",
      "score": "10分",
      "q": "一開口的長方體盒子，其底為正方形，體積為 $500\\text{ cm}^3$：<br>(a) 設盒子的底邊長為 $x\\text{ cm}$，高為 $h\\text{ cm}$，試以 $x$ 表 $h$。<br>(b) 設盒子的表面積為 $S\\text{ cm}^2$，試以 $x$ 表 $S$。<br>(c) 若要用最少的材料做成這個盒子，那麼盒子的尺寸為何？",
      "options": [],
      "knowledge": {
        "formulas": [
          "V = x^2 h = 500 \\implies h = \\frac{500}{x^2}",
          "S = x^2 + 4xh = x^2 + \\frac{2000}{x} \\quad (x > 0)",
          "S'(x) = 2x - \\frac{2000}{x^2} = 0 \\implies x = 10"
        ],
        "points": [
          "<b>開口無蓋</b>：表面積只有 1 個底面加上 4 個側面，即 $S = x^2 + 4xh$。",
          "<b>材料最少等價於表面積最小</b>：令 $S'(x) = 0$ 求解最優尺寸。"
        ],
        "pitfall": "題目明確是「開口的盒子」，頂面無蓋，底面積不能算兩次！"
      },
      "solution": {
        "thinking": "利用固定體積消去變量 $h$，構建表面積關於底邊 $x$ 的函數，求導求極小值得到最優尺寸。",
        "steps": [
          "(a) 盒子的底面為正方形，邊長為 $x$，高為 $h$。<br>體積為 $V = x^2 h = 500$。<br>故 $h = \\frac{500}{x^2}\\text{ cm}$。",
          "(b) 盒子開口（無蓋），材料面積即為 1 個底面加上 4 個側面面積：<br>$S(x) = x^2 + 4xh = x^2 + 4x\\left(\\frac{500}{x^2}\\right) = x^2 + \\frac{2000}{x}\\text{ cm}^2$（其中 $x > 0$）。",
          "(c) 對 $S(x)$ 求導：$S'(x) = 2x - \\frac{2000}{x^2}$。<br>令 $S'(x) = 0 \\implies 2x = \\frac{2000}{x^2} \\implies x^3 = 1000 \\implies x = 10\\text{ cm}$。<br>當 $x < 10$ 時 $S'(x) < 0$；當 $x > 10$ 時 $S'(x) > 0$。<br>故在 $x = 10\\text{ cm}$ 處材料最省（表面積最小）。<br>此時高為 $h = \\frac{500}{10^2} = 5\\text{ cm}$。<br>因此，最優尺寸為：底邊長 $10\\text{ cm}$，高 $5\\text{ cm}$。"
        ],
        "ans": "(a) $h = \\frac{500}{x^2}$；(b) $S = x^2 + \\frac{2000}{x}$；(c) 底邊長 $10\\text{ cm}$，高 $5\\text{ cm}$",
        "quickTip": "無蓋最優形狀規律：底邊必為高的 2 倍！$x = 2h \\implies 4h^3 = 500 \\implies h^3 = 125 \\implies h = 5, x = 10$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)$h=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>500</m:t></m:r></m:num><m:den><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup></m:den></m:f><m:r><m:t>$；(b)$S=</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>2000</m:t></m:r></m:num><m:den><m:r><m:t>x</m:t></m:r></m:den></m:f><m:r><m:t>$；(c)底邊長$</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>10cm</m:t></m:r><m:r><m:t>$，高$</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>5cm</m:t></m:r><m:r><m:t>$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第16題",
      "topic": "垂直直線與三次曲線切線方程",
      "score": "4分",
      "q": "與直線 $2x - 6y + 1 = 0$ 垂直，且與曲線 $f(x) = x^3 + 3x^2 - 1$ 相切的直線方程是 $(\\quad)$。",
      "options": [
        "A. $3x + y + 2 = 0$",
        "B. $3x - y + 2 = 0$",
        "C. $x + 3y + 2 = 0$",
        "D. $x - 3y - 2 = 0$"
      ],
      "knowledge": {
        "formulas": [
          "2x - 6y + 1 = 0 \\implies y = \\frac{1}{3}x + \\frac{1}{6} \\implies k_0 = \\frac{1}{3}",
          "k_{\\text{切}} = -\\frac{1}{k_0} = -3",
          "f'(x) = 3x^2 + 6x = -3"
        ],
        "points": [
          "<b>切線斜率確定</b>：垂直直線斜率為 $1/3$ 的負倒數，即 $-3$。",
          "<b>切點求解</b>：$3x^2 + 6x + 3 = 0 \\implies 3(x+1)^2 = 0 \\implies x = -1$。"
        ],
        "pitfall": "求出 $x=-1$ 後，切點的縱坐標 $y$ 必須代入原曲線 $f(x)$，切勿代錯。"
      },
      "solution": {
        "thinking": "由垂直條件得出切線斜率為 $-3$，求導令其等於 $-3$ 求出切點，寫出切線方程。",
        "steps": [
          "直線 $2x - 6y + 1 = 0$ 的斜率為 $k_0 = \\frac{2}{6} = \\frac{1}{3}$。",
          "因為切線與該直線垂直，故切線斜率 $k = -\\frac{1}{k_0} = -3$。",
          "對曲線求導：$f'(x) = 3x^2 + 6x$。<br>令 $3x^2 + 6x = -3 \\implies 3(x^2 + 2x + 1) = 0 \\implies 3(x+1)^2 = 0 \\implies x = -1$。",
          "計算切點縱坐標：$y_0 = f(-1) = (-1)^3 + 3(-1)^2 - 1 = -1 + 3 - 1 = 1$。切點為 $(-1, 1)$。",
          "由點斜式得切線方程：<br>$y - 1 = -3(x - (-1)) \\implies y - 1 = -3x - 3 \\implies 3x + y + 2 = 0$。"
        ],
        "ans": "A",
        "quickTip": "斜率為 $-3$，排除 C、D；直線形式為 $3x + y + C = 0$，代入切點 $(-1, 1)$ 得 $-3+1+C=0 \\implies C=2$，選 A！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>A</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "單選題 第17題",
      "topic": "導函數取值範圍與切線傾斜角的最值",
      "score": "4分",
      "q": "函數 $y = \\frac{x^3}{3} - x^2 + 1$ ($0 < x < 2$) 的圖形上任意點處切線的傾斜角記為 $\\alpha$，則 $\\alpha$ 的最小值是 $(\\quad)$。",
      "options": [
        "A. $\\frac{\\pi}{4}$",
        "B. $\\frac{\\pi}{6}$",
        "C. $\\frac{5\\pi}{6}$",
        "D. $\\frac{3\\pi}{4}$"
      ],
      "knowledge": {
        "formulas": [
          "k = \\tan\\alpha = y' = x^2 - 2x = (x-1)^2 - 1",
          "\\alpha \\in [0, \\pi)"
        ],
        "points": [
          "<b>斜率取值範圍</b>：當 $x \\in (0, 2)$ 時，$(x-1)^2 \\in [0, 1)$，故 $k = (x-1)^2 - 1 \\in [-1, 0)$。",
          "<b>正切與傾斜角關係</b>：當斜率 $k < 0$ 時，傾斜角為鈍角 $\\alpha \\in (\\frac{\\pi}{2}, \\pi)$。$\\tan\\alpha$ 越小（負得越多），鈍角 $\\alpha$ 越小！"
        ],
        "pitfall": "斜率 $k$ 最小為 $-1$，對應的傾斜角是 $\\tan\\alpha = -1 \\implies \\alpha = \\frac{3\\pi}{4}$，不是銳角 $\\pi/4$！"
      },
      "solution": {
        "thinking": "先求導數得到斜率 $k = \\tan\\alpha$ 的範圍，結合傾斜角定義域 $[0, \\pi)$ 確定 $\\alpha$ 的最小值。",
        "steps": [
          "求切線斜率：$k = y' = x^2 - 2x = (x - 1)^2 - 1$。",
          "因為 $0 < x < 2$，所以 $x - 1 \\in (-1, 1) \\implies (x - 1)^2 \\in [0, 1)$。<br>因此 $k = \\tan\\alpha \\in [-1, 0)$。",
          "分析正切函數在傾斜角區間 $[0, \\pi)$ 的性質：<br>當 $\\tan\\alpha \\in [-1, 0)$ 時，$\\alpha$ 落在第二象限鈍角範圍內，即 $\\alpha \\in \\left[\\frac{3\\pi}{4}, \\pi\\right)$。",
          "因為在第二象限內，正切函數嚴格單調遞增，所以當 $\\tan\\alpha$ 取得最小值 $-1$（在 $x = 1$ 處）時，傾斜角 $\\alpha$ 取得最小值 $\\frac{3\\pi}{4}$。"
        ],
        "ans": "D",
        "quickTip": "斜率 $k \\in [-1, 0)$，負斜率對應鈍角，$\\tan\\alpha = -1$ 對應最小傾斜角 $135^\\circ = 3\\pi/4$，選 D！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "填空題 第18題",
      "topic": "不等式恆成立轉化為全域最小值問題",
      "score": "4分",
      "q": "若不等式 $x^4 - 4x^3 \\ge 2 - a$ 對任意實數 $x$ 都成立，則實數 $a$ 的取值範圍是 $\\underline{\\quad\\quad\\quad\\quad}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f(x) \\ge M \\iff f(x)_{\\min} \\ge M",
          "g(x) = x^4 - 4x^3, \\quad g'(x) = 4x^2(x - 3)"
        ],
        "points": [
          "<b>恆成立轉化最值</b>：只需函數 $g(x) = x^4 - 4x^3$ 的最小值大於等於 $2 - a$。",
          "<b>二重根符號不變</b>：$g'(x) = 4x^2(x-3)$，在 $x=0$ 兩側導函數均非正，全域最小值唯一在 $x=3$ 處取得。"
        ],
        "pitfall": "移項不等式符號：$-27 \\ge 2 - a \\implies a \\ge 29$。"
      },
      "solution": {
        "thinking": "令 $g(x) = x^4 - 4x^3$，求出其在全實數上的最小值，令最小值 $\\ge 2 - a$ 解出 $a$ 的範圍。",
        "steps": [
          "設 $g(x) = x^4 - 4x^3$。不等式恆成立等價於 $g(x)_{\\min} \\ge 2 - a$。",
          "求導：$g'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$。<br>令 $g'(x) = 0 \\implies x = 0$ 或 $x = 3$。",
          "分析符號：<br>當 $x < 0$ 時 $g' < 0$；當 $0 < x < 3$ 時 $g' < 0$；當 $x > 3$ 時 $g' > 0$。<br>因此 $g(x)$ 在 $(-\\infty, 3]$ 上單調遞減，在 $[3, +\\infty)$ 上單調遞增。<br>在 $x = 3$ 處取得全域最小值！",
          "計算最小值：$g(3) = 3^4 - 4(3^3) = 81 - 108 = -27$。",
          "由題意：$-27 \\ge 2 - a \\implies a \\ge 2 + 27 = 29$。"
        ],
        "ans": "$a \\ge 29 \\quad (\\text{或 } [29, +\\infty))$",
        "quickTip": "最小值為 $g(3) = -27$，$-27 \\ge 2 - a \\implies a \\ge 29$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>a≥29(或[29,+∞))</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "填空題 第19題",
      "topic": "切線方程逆讀函數值與導數值",
      "score": "4分",
      "q": "如圖，函數 $y = f(x)$ 的圖像在點 $P$ 處的切線方程為 $y = -x + 8$（其中點 $P$ 的橫坐標為 5），則 $f(5) + f'(5) = \\underline{\\quad\\quad\\quad\\quad}$。<div style=\"text-align:center;margin:8px 0;\"><img src=\"img/p4_img1_132.jpeg\" style=\"max-height:130px;\" alt=\"點P處切線圖\" /></div>",
      "options": [],
      "knowledge": {
        "formulas": [
          "f(x_0) = y_{\\text{切}}(x_0)",
          "f'(x_0) = k_{\\text{切}}"
        ],
        "points": [
          "<b>切點在切線上</b>：切點的縱坐標可直接代入切線方程求出 $f(5) = -5 + 8 = 3$。",
          "<b>導數即切線斜率</b>：切線方程 $y = -x + 8$ 的斜率為 $-1$，故 $f'(5) = -1$。"
        ],
        "pitfall": "切勿混淆函數值 $f(5)$ 與導數值 $f'(5)$。"
      },
      "solution": {
        "thinking": "利用切點同時在曲線與切線上求 $f(5)$，由切線斜率直接得到 $f'(5)$，相加即得。",
        "steps": [
          "因為點 $P$ 為切點且其橫坐標為 5，故點 $P(5, f(5))$ 在切線 $y = -x + 8$ 上：<br>$f(5) = -5 + 8 = 3$。",
          "切線方程為 $y = -x + 8$，其斜率 $k = -1$。<br>由導數的幾何意義知：$f'(5) = k = -1$。",
          "兩者相加：$f(5) + f'(5) = 3 + (-1) = 2$。"
        ],
        "ans": "2",
        "quickTip": "$f(5) = 3$，$f'(5) = -1$，直接 $3 - 1 = 2$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>2</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第20題",
      "topic": "過原點的外點切線方程求解",
      "score": "8分",
      "q": "求經過原點 $(0, 0)$ 且與曲線 $y = \\frac{x+9}{x+5}$ 相切的直線方程。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y' = \\frac{1(x+5) - (x+9)(1)}{(x+5)^2} = -\\frac{4}{(x+5)^2}",
          "\\text{過原點條件：} \\frac{y_0}{x_0} = y'(x_0)"
        ],
        "points": [
          "<b>外點切線標準解法</b>：設切點為 $(x_0, y_0)$，切線過原點等價於切點到原點的斜率等於切線導數斜率。",
          "<b>有兩條切線</b>：一元二次方程有兩個不同實根，對應兩條過原點的切線。"
        ],
        "pitfall": "原點不在曲線上（因為代入得 $9/5 \\ne 0$），必須設切點求解！"
      },
      "solution": {
        "thinking": "設切點為 $(x_0, y_0)$，用 $x_0$ 表示切點坐標與切線斜率，利用直線過原點列出方程求解。",
        "steps": [
          "求導：$y' = \\frac{1(x+5) - (x+9)}{(x+5)^2} = -\\frac{4}{(x+5)^2}$。",
          "設切點為 $P\\left(x_0, \\frac{x_0+9}{x_0+5}\\right)$（$x_0 \\ne -5$）。<br>切線斜率為 $k = -\\frac{4}{(x_0+5)^2}$。<br>切線方程為：$y - \\frac{x_0+9}{x_0+5} = -\\frac{4}{(x_0+5)^2}(x - x_0)$。",
          "因為切線經過原點 $(0, 0)$，代入得：<br>$-\\frac{x_0+9}{x_0+5} = -\\frac{4}{(x_0+5)^2}(0 - x_0) = \\frac{4x_0}{(x_0+5)^2}$。",
          "兩邊同乘 $(x_0+5)^2$：<br>$-(x_0+9)(x_0+5) = 4x_0 \\implies -(x_0^2 + 14x_0 + 45) = 4x_0$。<br>移項得：$x_0^2 + 18x_0 + 45 = 0$。<br>因式分解：$(x_0 + 3)(x_0 + 15) = 0 \\implies x_0 = -3$ 或 $x_0 = -15$。",
          "分別求兩條切線方程：<br>① 當 $x_0 = -3$ 時：斜率 $k_1 = -\\frac{4}{(-3+5)^2} = -\\frac{4}{4} = -1$。切線為 $y = -x$（即 $x + y = 0$）；<br>② 當 $x_0 = -15$ 時：斜率 $k_2 = -\\frac{4}{(-15+5)^2} = -\\frac{4}{100} = -\\frac{1}{25}$。切線為 $y = -\\frac{1}{25}x$（即 $x + 25y = 0$）。"
        ],
        "ans": "$x + y = 0$ 或 $x + 25y = 0$",
        "quickTip": "過原點斜率 $y_0/x_0 = y'_0 \\implies x_0^2 + 18x_0 + 45 = 0 \\implies x_0 = -3, -15$。對應斜率 $-1$ 和 $-1/25$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>x+y=0$或$x+25y=0</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第21題",
      "topic": "切線方程已知求點函數值與導數值",
      "score": "6分",
      "q": "已知函數 $y = f(x)$ 的圖像在點 $M(1, f(1))$ 處的切線方程是 $y = \\frac{1}{2}x + 2$，求 $f(1) + f'(1)$ 的值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f(1) = y_{\\text{切}}(1) = \\frac{1}{2}(1) + 2 = \\frac{5}{2}",
          "f'(1) = k_{\\text{切}} = \\frac{1}{2}"
        ],
        "points": [
          "<b>切點在切線上</b>：$f(1) = 1/2 + 2 = 5/2$。",
          "<b>導數為斜率</b>：$f'(1) = 1/2$。"
        ],
        "pitfall": "審題要仔細，求的是兩者之和 $f(1) + f'(1)$。"
      },
      "solution": {
        "thinking": "直接由切線方程讀出切點縱坐標 $f(1)$ 與切線斜率 $f'(1)$，相加得出結果。",
        "steps": [
          "由切線方程 $y = \\frac{1}{2}x + 2$：",
          "因為點 $M(1, f(1))$ 是切點，所以它在切線上，將 $x = 1$ 代入：<br>$f(1) = \\frac{1}{2}(1) + 2 = \\frac{5}{2}$。",
          "切線的斜率即為函數在該點的導數值：<br>$f'(1) = \\frac{1}{2}$。",
          "計算兩者之和：<br>$f(1) + f'(1) = \\frac{5}{2} + \\frac{1}{2} = \\frac{6}{2} = 3$。"
        ],
        "ans": "3",
        "quickTip": "$f(1) = 2.5$，$f'(1) = 0.5$，$2.5 + 0.5 = 3$。5 秒心算！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>3</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第22題",
      "topic": "含參三次多項式極小值待定係數與畫圖",
      "score": "10分",
      "q": "已知函數 $f(x) = x^3 - 3ax^2 + 2bx$ 在 $x = 1$ 處有極小值為 $-1$，試確定 $a, b$ 的值，並描繪 $f(x)$ 的圖像。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f(1) = -1 \\implies 1 - 3a + 2b = -1 \\implies 3a - 2b = 2",
          "f'(1) = 0 \\implies 3 - 6a + 2b = 0 \\implies 6a - 2b = 3"
        ],
        "points": [
          "<b>極值點兩大條件</b>：① 函數值等於極值 $f(1) = -1$；② 駐點導數為零 $f'(1) = 0$。",
          "<b>二階導驗證極小值</b>：$f''(1) > 0$ 確保是極小值而不是極大值。"
        ],
        "pitfall": "聯立解出 $a, b$ 後必須驗證 $x=1$ 確實為極小值點，避免是極大值點。"
      },
      "solution": {
        "thinking": "利用 $f(1)=-1$ 與 $f'(1)=0$ 建立方程組解出 $a, b$，再求出另一駐點並作圖。",
        "steps": [
          "由題意，在 $x = 1$ 處有極小值 $-1$：<br>① $f(1) = 1^3 - 3a(1^2) + 2b(1) = 1 - 3a + 2b = -1 \\implies 3a - 2b = 2$　…… (1)<br>② 求導：$f'(x) = 3x^2 - 6ax + 2b$。<br>極值點必為駐點：$f'(1) = 3(1^2) - 6a(1) + 2b = 3 - 6a + 2b = 0 \\implies 6a - 2b = 3$　…… (2)",
          "將 (2) 式減去 (1) 式：<br>$(6a - 2b) - (3a - 2b) = 3 - 2 \\implies 3a = 1 \\implies a = \\frac{1}{3}$。<br>代入 (1) 式：$3\\left(\\frac{1}{3}\\right) - 2b = 2 \\implies 1 - 2b = 2 \\implies 2b = -1 \\implies b = -\\frac{1}{2}$。",
          "驗證極值性：<br>將 $a = \\frac{1}{3}, b = -\\frac{1}{2}$ 代入原函數與導函數：<br>$f(x) = x^3 - x^2 - x, \\quad f'(x) = 3x^2 - 2x - 1 = (3x + 1)(x - 1)$。<br>駐點為 $x = -\\frac{1}{3}$ 和 $x = 1$。<br>二階導：$f''(x) = 6x - 2$。在 $x=1$ 處 $f''(1) = 4 > 0$，確實為極小值點！<br>而在 $x = -\\frac{1}{3}$ 處 $f''(-1/3) = -4 < 0$，取得極大值 $f(-1/3) = -\\frac{1}{27} - \\frac{1}{9} + \\frac{1}{3} = \\frac{5}{27}$。",
          "圖像特徵：通過原點 $(0, 0)$，零點為 $x(x^2 - x - 1) = 0 \\implies x = 0, \\frac{1\\pm\\sqrt{5}}{2}$；極大值點 $(-\\frac{1}{3}, \\frac{5}{27})$，極小值點 $(1, -1)$。"
        ],
        "ans": "$a = \\frac{1}{3}, \\quad b = -\\frac{1}{2}$；極大值點 $\\left(-\\frac{1}{3}, \\frac{5}{27}\\right)$，極小值點 $(1, -1)$",
        "quickTip": "(2)-(1) 即得 $3a = 1 \\implies a = 1/3$，代入得 $b = -1/2$。一階導 $(3x+1)(x-1)$ 驗算完美！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>a=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>,b=−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>$；極大值點$</m:t></m:r><m:r><m:t>(−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>,</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>5</m:t></m:r></m:num><m:den><m:r><m:t>27</m:t></m:r></m:den></m:f><m:r><m:t>)</m:t></m:r><m:r><m:t>$，極小值點$(1,−1)</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二",
      "qNum": "解答題 第23題",
      "topic": "奇函數對稱性與三次函數解析式",
      "score": "8分",
      "q": "設 $y = f(x)$ 為三次函數，且圖像關於原點對稱。當 $x = \\frac{1}{2}$ 時，$f(x)$ 的極小值為 $-1$，求函數 $f(x)$ 的解析式。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f(-x) = -f(x) \\implies f(x) = ax^3 + cx",
          "f'(x) = 3ax^2 + c",
          "f(1/2) = -1, \\quad f'(1/2) = 0"
        ],
        "points": [
          "<b>原點對稱（奇函數）</b>：多項式中不含偶次項（即 $x^2$ 係數與常數項均為 0），簡化為 $f(x) = ax^3 + cx$！",
          "<b>聯立求係數</b>：只需兩個未知數 $a, c$，由極值條件列二元一次方程組。"
        ],
        "pitfall": "開口方向與極小值驗證：$f''(1/2) = 6a(1/2) = 3a > 0 \\implies a > 0$。"
      },
      "solution": {
        "thinking": "利用奇函數性質設出簡化解析式，代入極小值點的函數值與導數值解二元一次方程組。",
        "steps": [
          "因為 $f(x)$ 為三次函數且圖像關於原點對稱（奇函數），故其解析式不含偶次項與常數項。<br>設 $f(x) = ax^3 + cx$（其中 $a \\ne 0$）。",
          "求導得：$f'(x) = 3ax^2 + c$。",
          "由題意，當 $x = \\frac{1}{2}$ 時有極小值 $-1$：<br>① 函數值：$f\\left(\\frac{1}{2}\\right) = a\\left(\\frac{1}{8}\\right) + c\\left(\\frac{1}{2}\\right) = -1 \\implies a + 4c = -8$　…… (1)<br>② 導數值：$f'\\left(\\frac{1}{2}\\right) = 3a\\left(\\frac{1}{4}\\right) + c = 0 \\implies 3a + 4c = 0$　…… (2)",
          "用 (2) 式減去 (1) 式：<br>$(3a + 4c) - (a + 4c) = 0 - (-8) \\implies 2a = 8 \\implies a = 4$。<br>代入 (2) 式：$3(4) + 4c = 0 \\implies 4c = -12 \\implies c = -3$。",
          "檢驗極小值性：<br>$f(x) = 4x^3 - 3x, \\quad f'(x) = 12x^2 - 3 = 3(4x^2 - 1) = 3(2x-1)(2x+1)$。<br>當 $x$ 在 $1/2$ 附近時，左側 $x < 1/2$ 導數為負，右側 $x > 1/2$ 導數為正，確實為極小值點！",
          "故所求函數解析式為 $f(x) = 4x^3 - 3x$。"
        ],
        "ans": "f(x) = 4x^3 - 3x",
        "quickTip": "由 $f'(1/2) = 0 \\implies c = -3a/4$；代入 $f(1/2) = a/8 - 3a/8 = -a/4 = -1 \\implies a = 4, c = -3$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>f(x)=4</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup><m:r><m:t>−3x</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
