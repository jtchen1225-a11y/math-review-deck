/* 澳門四校聯考 · 微積分專題 100 分鐘限時練習 — 第一部分 基本初等函數積分公式熟練與直接填空題 (題 01~10 · 滿分 20分) (支援原生 OMML) */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push(
{
  "ch": "第一部分 基本公式填空",
  "year": "100分鐘專題",
  "paper": "基本公式",
  "title": "第一部分 基本初等函數積分公式熟練與直接填空題 (題 01~10 · 滿分 20分)",
  "color": "#2563eb",
  "sections": [
    "題 01 · 冪函數多項式不定積分",
    "題 02 · 根式化分數指數冪積分",
    "題 03 · 指數與倒數函數不定積分",
    "題 04 · 基本三角函數線性組合",
    "題 05 · 正割平方函數不定積分",
    "題 06 · 指數與冪函數混合積分",
    "題 07 · 一次複合函數冪積分",
    "題 08 · 多項式基本定積分計算",
    "題 09 · 對稱區間奇函數定積分性質",
    "題 10 · 微積分第一基本定理（變上限求導）"
  ]
,
  "slides": [
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 01",
        "topic": "冪函數多項式不定積分",
        "score": "2分",
        "options": [],
        "q": "求冪函數多項式不定積分：$$\\int (4x^3 - 6x^2 + 2x - 5) \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\int x^n \\, dx = \\frac{1}{n+1} x^{n+1} + C \\quad (n \\ne -1)",
                "\\int [a f(x) + b g(x)] \\, dx = a \\int f(x) \\, dx + b \\int g(x) \\, dx"
            ],
            "points": [
                "<b>線性性質</b>：多項式不定積分可拆為各項獨立求積，常數因子可直接提出。",
                "<b>常數項求積</b>：常數 $k$ 的原函數為 $kx$（即 $\\int -5 \\, dx = -5x$）。",
                "<b>任意常數</b>：不定積分必加常數 $+C$。"
            ],
            "pitfall": "常數項 $-5$ 容易漏乘變量 $x$；切忌忘寫積分常數 $+C$。"
        },
        "solution": {
            "thinking": "利用冪函數積分公式對多項式中的每一項分別積分，指數加 1 並除以新指數，常數項積出變量 $x$，最後加 $+C$。",
            "steps": [
                "$\\int 4x^3 \\, dx = 4 \\cdot \\frac{x^4}{4} = x^4$；",
                "$\\int (-6x^2) \\, dx = -6 \\cdot \\frac{x^3}{3} = -2x^3$；",
                "$\\int 2x \\, dx = 2 \\cdot \\frac{x^2}{2} = x^2$；",
                "$\\int (-5) \\, dx = -5x$；",
                "合併各項並加上積分常數：$x^4 - 2x^3 + x^2 - 5x + C$。"
            ],
            "ans": "$x^4 - 2x^3 + x^2 - 5x + C$",
            "quickTip": "冪次全部升一次、係數除以新冪次，直接心算 3 秒出答案！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>4</m:t></m:r></m:sup></m:sSup><m:r><m:t>−2</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup><m:r><m:t>+</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>−5x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 02",
        "topic": "根式化分數指數冪積分",
        "score": "2分",
        "options": [],
        "q": "求根式轉化為分數指數冪不定積分：$$\\int \\left( 3\\sqrt{x} + \\frac{2}{\\sqrt{x}} \\right) \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\sqrt{x} = x^{\\frac{1}{2}}, \\quad \\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}",
                "\\int x^a \\, dx = \\frac{1}{a+1} x^{a+1} + C"
            ],
            "points": [
                "<b>分數指數化</b>：將所有根式先改寫為分數冪 $x^a$，再統一套用冪函數積分公式。",
                "<b>係數通分運算</b>：除以 $\\frac{3}{2}$ 相當於乘以倒數 $\\frac{2}{3}$；除以 $\\frac{1}{2}$ 相當於乘以 2。"
            ],
            "pitfall": "分數指數加 1 時注意通分：$\\frac{1}{2}+1 = \\frac{3}{2}$，$-\\frac{1}{2}+1 = \\frac{1}{2}$，除以分數等於乘以倒數。"
        },
        "solution": {
            "thinking": "將根號改寫為指數冪形式 $3x^{\\frac{1}{2}} + 2x^{-\\frac{1}{2}}$，再逐項套用公式積分。",
            "steps": [
                "改寫被積函數：$\\int \\left( 3x^{\\frac{1}{2}} + 2x^{-\\frac{1}{2}} \\right) \\, dx$；",
                "第一項積分：$3 \\cdot \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = 3 \\cdot \\frac{2}{3} x^{\\frac{3}{2}} = 2x^{\\frac{3}{2}}$；",
                "第二項積分：$2 \\cdot \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} = 2 \\cdot 2 x^{\\frac{1}{2}} = 4\\sqrt{x}$；",
                "合併並加上積分常數：$2x^{\\frac{3}{2}} + 4\\sqrt{x} + C$ （或寫為 $2\\sqrt{x^3} + 4\\sqrt{x} + C$）。"
            ],
            "ans": "$2x^{\\frac{3}{2}} + 4\\sqrt{x} + C$",
            "quickTip": "記憶技巧：$\\int \\sqrt{x}dx = \\frac{2}{3}x\\sqrt{x}$，$\\int \\frac{1}{\\sqrt{x}}dx = 2\\sqrt{x}$，直接乘以係數相加！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>2</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>3</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f></m:sup></m:sSup><m:r><m:t>+4</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>x</m:t></m:r></m:e></m:rad><m:r><m:t>+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 03",
        "topic": "指數與倒數函數不定積分",
        "score": "2分",
        "options": [],
        "q": "求指數與倒數函數不定積分：$$\\int \\left( 5e^x + \\frac{3}{x} \\right) \\, dx \\quad (x > 0) = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\int e^x \\, dx = e^x + C",
                "\\int \\frac{1}{x} \\, dx = \\ln|x| + C"
            ],
            "points": [
                "<b>自然指數原函數不變</b>：$e^x$ 的導數與不定積分皆為自身。",
                "<b>倒數函數積出對數</b>：當已知條件 $x > 0$ 時，絕對值號可自然去掉得 $\\ln x$。"
            ],
            "pitfall": "切勿將 $\\frac{1}{x}$ 當作冪函數 $x^{-1}$ 用冪公式計算（導致分母出現 $-1+1=0$ 無意義）。"
        },
        "solution": {
            "thinking": "利用線性法則分別求 $5e^x$ 與 $\\frac{3}{x}$ 的原函數，因 $x>0$ 可直接寫 $\\ln x$。",
            "steps": [
                "第一項積分：$\\int 5e^x \\, dx = 5e^x$；",
                "第二項積分：$\\int \\frac{3}{x} \\, dx = 3\\ln|x|$；",
                "因題目已知 $x > 0$，故 $|x| = x$；",
                "合併加 $C$ 得：$5e^x + 3\\ln x + C$。"
            ],
            "ans": "$5e^x + 3\\ln x + C$",
            "quickTip": "指數不變、$1/x$ 出 $\\ln$，秒殺！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>5</m:t></m:r><m:sSup><m:e><m:r><m:t>e</m:t></m:r></m:e><m:sup><m:r><m:t>x</m:t></m:r></m:sup></m:sSup><m:r><m:t>+3</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>ln</m:t></m:r><m:r><m:t>x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 04",
        "topic": "基本三角函數線性組合",
        "score": "2分",
        "options": [],
        "q": "求基本三角函數線性組合不定積分：$$\\int (2\\cos x - 3\\sin x) \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\int \\cos x \\, dx = \\sin x + C",
                "\\int \\sin x \\, dx = -\\cos x + C"
            ],
            "points": [
                "<b>三角符號辨析</b>：餘弦積分為正弦（正號），正弦積分為負餘弦（負號）。",
                "<b>負負得正</b>：$-3 \\cdot (-\\cos x) = +3\\cos x$。"
            ],
            "pitfall": "三角函數求導與積分的符號極易混淆，記住 $(\\sin x)' = \\cos x$ 反推 $\\int \\cos x dx = \\sin x$；$(\\cos x)' = -\\sin x$ 反推 $\\int \\sin x dx = -\\cos x$。"
        },
        "solution": {
            "thinking": "分別求餘弦與正弦的原函數，特別注意正弦積分的負號與原式的減號相乘變正。",
            "steps": [
                "$\\int 2\\cos x \\, dx = 2\\sin x$；",
                "$\\int (-3\\sin x) \\, dx = -3(-\\cos x) = +3\\cos x$；",
                "合併加 $C$ 得：$2\\sin x + 3\\cos x + C$。"
            ],
            "ans": "$2\\sin x + 3\\cos x + C$",
            "quickTip": "正弦積分帶負號，負負得正變加號！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>2</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>sin</m:t></m:r><m:r><m:t>x+3</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>cos</m:t></m:r><m:r><m:t>x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 05",
        "topic": "正割平方函數不定積分",
        "score": "2分",
        "options": [],
        "q": "求正割平方函數不定積分：$$\\int 4\\sec^2 x \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "(\\tan x)' = \\sec^2 x \\iff \\int \\sec^2 x \\, dx = \\tan x + C"
            ],
            "points": [
                "<b>基本公式逆運算</b>：正切函數的導數為正割平方，反過來正割平方的不定積分即為正切。",
                "<b>常數倍提出</b>：$\\int 4\\sec^2 x \\, dx = 4\\int \\sec^2 x \\, dx$。"
            ],
            "pitfall": "切勿將 $\\sec^2 x$ 誤轉化為複合函數積出錯誤結果，這是聯考必備的基本公式之一。"
        },
        "solution": {
            "thinking": "由基本積分表直接調用 $\\int \\sec^2 x dx = \\tan x + C$。",
            "steps": [
                "提出常數 4：$\\int 4\\sec^2 x \\, dx = 4 \\int \\sec^2 x \\, dx$；",
                "調用公式得：$4\\tan x + C$。"
            ],
            "ans": "$4\\tan x + C$",
            "quickTip": "看到 $\\sec^2 x$ 就想到 $\\tan x$，乘以 4 加 $C$，2 秒作答！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>4</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>tan</m:t></m:r><m:r><m:t>x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 06",
        "topic": "指數與冪函數混合積分",
        "score": "2分",
        "options": [],
        "q": "求指數函數與冪函數混合不定積分：$$\\int (3^x + x^3) \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C \\quad (a > 0, a \\ne 1)",
                "\\int x^n \\, dx = \\frac{1}{n+1} x^{n+1} + C"
            ],
            "points": [
                "<b>底數為常數 vs 底數為變量</b>：$3^x$ 是指數函數，積分除以 $\\ln 3$；$x^3$ 是冪函數，積分指數變 4 除以 4。"
            ],
            "pitfall": "指數函數求導是乘以 $\\ln a$（$(a^x)' = a^x \\ln a$），積分則是「除以 $\\ln a$」，切勿乘除顛倒！"
        },
        "solution": {
            "thinking": "分別辨識指數函數 $3^x$ 與冪函數 $x^3$，應用各自對應的積分公式求和。",
            "steps": [
                "$\\int 3^x \\, dx = \\frac{3^x}{\\ln 3}$；",
                "$\\int x^3 \\, dx = \\frac{x^4}{4}$；",
                "合併加 $C$ 得：$\\frac{3^x}{\\ln 3} + \\frac{x^4}{4} + C$。"
            ],
            "ans": "$\\frac{3^x}{\\ln 3} + \\frac{x^4}{4} + C$",
            "quickTip": "指數除對數，冪次升一位，清晰分明！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:sSup><m:e><m:r><m:t>3</m:t></m:r></m:e><m:sup><m:r><m:t>x</m:t></m:r></m:sup></m:sSup></m:num><m:den><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>ln</m:t></m:r><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>4</m:t></m:r></m:sup></m:sSup></m:num><m:den><m:r><m:t>4</m:t></m:r></m:den></m:f><m:r><m:t>+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 07",
        "topic": "一次複合函數冪積分",
        "score": "2分",
        "options": [],
        "q": "求一次複合函數冪不定積分：$$\\int (2x - 3)^2 \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\int (ax + b)^n \\, dx = \\frac{1}{a} \\cdot \\frac{(ax + b)^{n+1}}{n+1} + C \\quad (a \\ne 0, n \\ne -1)"
            ],
            "points": [
                "<b>複合求積連鎖除法</b>：內層函數為線性式 $2x-3$，其導數為 2，積分時必須除以 2。",
                "<b>展開法驗算</b>：展開得 $4x^2 - 12x + 9$，逐項積分得 $\\frac{4}{3}x^3 - 6x^2 + 9x + C$。"
            ],
            "pitfall": "用複合公式時極易漏除內層導數 $a=2$；展開法最為穩健可靠。"
        },
        "solution": {
            "thinking": "方法一：使用一次複合函數積分公式；方法二：乘法展開逐項積分。兩者均可滿分。",
            "steps": [
                "【方法一：一次複合公式】",
                "$\\int (2x-3)^2 \\, dx = \\frac{1}{2} \\cdot \\frac{(2x-3)^3}{3} + C = \\frac{(2x-3)^3}{6} + C$；",
                "【方法二：展開逐項積分】",
                "$(2x-3)^2 = 4x^2 - 12x + 9$；",
                "$\\int (4x^2 - 12x + 9) \\, dx = \\frac{4}{3}x^3 - 6x^2 + 9x + C$。"
            ],
            "ans": "$\\frac{(2x-3)^3}{6} + C$",
            "quickTip": "冪次加 1 變 3，分母為 $2 \\times 3 = 6$，直接寫出！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>(2x−3</m:t></m:r><m:sSup><m:e><m:r><m:t>)</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:r><m:t>+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 08",
        "topic": "多項式基本定積分計算",
        "score": "2分",
        "options": [],
        "q": "求多項式基本定積分計算：$$\\int_0^1 (3x^2 - 2x + 1) \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a) \\quad (F'(x) = f(x))"
            ],
            "points": [
                "<b>牛頓-萊布尼茲公式</b>：先求原函數 $F(x)$，再代入上限值減去下限值。",
                "<b>零下限簡化</b>：多項式原函數在 $x=0$ 處值通常為 0，只需精確計算上限。"
            ],
            "pitfall": "代入下限時若下限非零或含常數項，切勿漏減下限值。"
        },
        "solution": {
            "thinking": "先求出原函數 $F(x) = x^3 - x^2 + x$，再代入上限 1 和下限 0 相減。",
            "steps": [
                "求原函數：$\\int (3x^2 - 2x + 1) \\, dx = x^3 - x^2 + x$；",
                "代入上限 1：$F(1) = 1^3 - 1^2 + 1 = 1 - 1 + 1 = 1$；",
                "代入下限 0：$F(0) = 0$；",
                "上下限相減：$F(1) - F(0) = 1 - 0 = 1$。"
            ],
            "ans": "$1$",
            "quickTip": "$[x^3 - x^2 + x]_0^1 = 1 - 1 + 1 = 1$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>1</m:t></m:r></m:oMath>"
        },
        "visual": function(host) {
                    host.innerHTML = `
                      <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
                        <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">📐 定積分幾何意義：曲線下方淨面積</div>
                        <svg viewBox="-20 -20 240 160" style="width:100%;max-width:320px;height:160px;background:#1e293b;border-radius:8px;">
                          <!-- 坐標軸 -->
                          <line x1="0" y1="120" x2="200" y2="120" stroke="#475569" stroke-width="1.5" />
                          <line x1="20" y1="140" x2="20" y2="10" stroke="#475569" stroke-width="1.5" />
                          <text x="190" y="135" fill="#94a3b8" font-size="11">x</text>
                          <text x="8" y="20" fill="#94a3b8" font-size="11">y</text>
                          <!-- 標記點 x=0 (20, 120), x=1 (140, 120) -->
                          <text x="16" y="133" fill="#cbd5e1" font-size="10">0</text>
                          <text x="136" y="133" fill="#cbd5e1" font-size="10">1</text>
                          <!-- 曲線 y = 3x^2 - 2x + 1. x=0: y=1 (20, 80); x=1/3: y=2/3 (60, 93); x=1: y=2 (140, 40) -->
                          <!-- 著色面積路徑 -->
                          <path d="M 20 120 L 20 80 Q 60 100 100 70 T 140 40 L 140 120 Z" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="2" />
                          <text x="65" y="90" fill="#38bdf8" font-weight="bold" font-size="13">面積 S = 1</text>
                        </svg>
                        <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">$\int_0^1 (3x^2-2x+1)dx = 1$ 代表曲線與 $x$ 軸在 $[0, 1]$ 圍成的面積。</div>
                      </div>`;
                  }
      },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 09",
        "topic": "對稱區間奇函數定積分性質",
        "score": "2分",
        "options": [],
        "q": "利用對稱區間奇函數性質計算定積分：$$\\int_{-2}^2 (x^5 - 3x^3 + \\sin x) \\, dx = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\int_{-a}^a f(x) \\, dx = 0 \\quad (f(-x) = -f(x), \\text{ 奇函數})",
                "\\int_{-a}^a g(x) \\, dx = 2 \\int_0^a g(x) \\, dx \\quad (g(-x) = g(x), \\text{ 偶函數})"
            ],
            "points": [
                "<b>對稱區間定積分</b>：區間 $[-2, 2]$ 關於原點對稱。",
                "<b>奇函數和仍為奇函數</b>：$x^5$、$x^3$、$\\sin x$ 均為奇函數，其和亦為奇函數，原函數為偶函數，上下限相減精確抵消為 0。"
            ],
            "pitfall": "切勿浪費時間逐項求原函數代入 2 與 -2 計算，審題優先檢查區間是否對稱！"
        },
        "solution": {
            "thinking": "審查積分區間為 $[-2, 2]$，對稱於原點。被積函數為三個奇函數之和，直接應用奇函數定積分性質得 0。",
            "steps": [
                "設 $f(x) = x^5 - 3x^3 + \\sin x$；",
                "檢驗奇偶性：$f(-x) = (-x)^5 - 3(-x)^3 + \\sin(-x) = -x^5 + 3x^3 - \\sin x = -f(x)$，故 $f(x)$ 為奇函數；",
                "區間 $[-2, 2]$ 關於原點對稱；",
                "由奇函數在對稱區間的定積分性質，正負面積完全相互抵消：$$\\int_{-2}^2 (x^5 - 3x^3 + \\sin x) \\, dx = 0$$"
            ],
            "ans": "$0$",
            "quickTip": "對稱區間奇函數，正負抵消直接填 0，1 秒作答！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>0</m:t></m:r></m:oMath>"
        },
        "visual": function(host) {
                    host.innerHTML = `
                      <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
                        <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">⚡ 奇函數對稱區間積分面積嚴格相消</div>
                        <svg viewBox="-100 -50 200 100" style="width:100%;max-width:320px;height:140px;background:#1e293b;border-radius:8px;">
                          <line x1="-90" y1="0" x2="90" y2="0" stroke="#475569" stroke-width="1.5" />
                          <line x1="0" y1="-45" x2="0" y2="45" stroke="#475569" stroke-width="1.5" />
                          <!-- 負半軸面積 S- -->
                          <path d="M -60 0 C -40 0, -20 35, 0 0 Z" fill="rgba(244, 63, 94, 0.4)" stroke="#f43f5e" stroke-width="1.5" />
                          <text x="-48" y="22" fill="#f43f5e" font-size="11" font-weight="bold">-S</text>
                          <!-- 正半軸面積 S+ -->
                          <path d="M 0 0 C 20 -35, 40 0, 60 0 Z" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" stroke-width="1.5" />
                          <text x="32" y="-14" fill="#38bdf8" font-size="11" font-weight="bold">+S</text>
                          <text x="-70" y="-10" fill="#94a3b8" font-size="10">-2</text>
                          <text x="56" y="16" fill="#94a3b8" font-size="10">+2</text>
                        </svg>
                        <div style="color:#a7f3d0;font-size:12px;margin-top:6px;">正負面積完全對稱等大：$(+S) + (-S) = 0$！</div>
                      </div>`;
                  }
      },
    {
        "year": "100分鐘專題",
        "paper": "基本公式",
        "qNum": "題 10",
        "topic": "微積分第一基本定理（變上限求導）",
        "score": "2分",
        "options": [],
        "q": "微積分第一基本定理（變上限求導）：$$\\frac{d}{dx} \\int_1^x \\sqrt{1 + t^4} \\, dt = \\underline{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}$$",
        "knowledge": {
            "formulas": [
                "\\frac{d}{dx} \\int_a^x f(t) \\, dt = f(x) \\quad (a \\text{ 為任意常數})"
            ],
            "points": [
                "<b>變上限積分求導</b>：積分的上限為自變量 $x$，下限為常數 1。對 $x$ 求導時，直接用上限 $x$ 替換被積函數中的虛擬變量 $t$。",
                "<b>互逆運算</b>：求導與定積分在變上限處互為逆運算。"
            ],
            "pitfall": "切勿試圖求出 $\\sqrt{1+t^4}$ 的原函數（此為橢圓積分，不能用初等函數表達！）。"
        },
        "solution": {
            "thinking": "被積函數 $\\sqrt{1+t^4}$ 在常數 1 附近連續，直接應用微積分第一基本定理將 $t$ 換成 $x$。",
            "steps": [
                "設 $f(t) = \\sqrt{1 + t^4}$，其在 $\\mathbb{R}$ 上連續；",
                "令 $F(x) = \\int_1^x f(t) \\, dt$；",
                "根據微積分第一基本定理：$F'(x) = f(x)$；",
                "代入得：$\\frac{d}{dx} \\int_1^x \\sqrt{1 + t^4} \\, dt = \\sqrt{1 + x^4}$。"
            ],
            "ans": "$\\sqrt{1 + x^4}$",
            "quickTip": "見 $\\frac{d}{dx} \\int_a^x f(t)dt$，直接將 $t$ 換成 $x$，直接出答案！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>1+</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>4</m:t></m:r></m:sup></m:sSup></m:e></m:rad></m:oMath>"
        }
    }
  ]
});
})();
