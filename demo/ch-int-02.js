/* 澳門四校聯考 · 微積分專題 100 分鐘限時練習 — 第二部分 不定積分靈活運算與代數化簡題 (題 01~08 · 滿分 24分) (支援原生 OMML) */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push(
{
  "ch": "第二部分 不定積分運算化簡",
  "year": "100分鐘專題",
  "paper": "運算化簡",
  "title": "第二部分 不定積分靈活運算與代數化簡題 (題 01~08 · 滿分 24分)",
  "color": "#0284c7",
  "sections": [
    "題 01 · 乘積展開逐項積分",
    "題 02 · 分式拆項化簡與對數原函數",
    "題 03 · 立方和因式分解約分積分",
    "題 04 · 根式化分數指數冪乘積展開",
    "題 05 · 負整數指數與分數冪分式化簡",
    "題 06 · 二倍角平方差因式約分積分",
    "題 07 · 正弦二倍角展開約分與一次複合",
    "題 08 · 湊微分法與第一類換元積分"
  ]
,
  "slides": [
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.1",
        "topic": "乘積展開逐項積分",
        "score": "3分",
        "options": [],
        "q": "求不定積分：$$\\int (4x - 1)(2x + 6) \\, dx$$",
        "knowledge": {
            "formulas": [
                "(ax+b)(cx+d) = acx^2 + (ad+bc)x + bd",
                "\\int x^n \\, dx = \\frac{1}{n+1} x^{n+1} + C"
            ],
            "points": [
                "<b>嚴禁乘積直接積分</b>：不定積分沒有積的法則 $\\int uv dx \\ne \\int u dx \\cdot \\int v dx$！",
                "<b>代數展開多項式</b>：必須先利用多項式乘法展開為標準降冪形式，再逐項積分。"
            ],
            "pitfall": "切勿將乘積兩項分別求積再相乘！這是初學者最嚴重的根本性概念錯誤。"
        },
        "solution": {
            "thinking": "先將被積多項式展開為標準二次多項式，再逐項應用冪函數求積公式。",
            "steps": [
                "展開被積多項式：$(4x - 1)(2x + 6) = 8x^2 + 24x - 2x - 6 = 8x^2 + 22x - 6$；",
                "逐項積分：$\\int (8x^2 + 22x - 6) \\, dx = 8 \\cdot \\frac{x^3}{3} + 22 \\cdot \\frac{x^2}{2} - 6x + C$；",
                "化簡係數得：$\\frac{8}{3}x^3 + 11x^2 - 6x + C$。"
            ],
            "ans": "$\\frac{8}{3}x^3 + 11x^2 - 6x + C$",
            "quickTip": "展開係數 $8x^2 + 22x - 6$，積分直接得 $\\frac{8}{3}x^3 + 11x^2 - 6x + C$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>8</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup><m:r><m:t>+11</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>−6x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.2",
        "topic": "分式拆項化簡與對數原函數",
        "score": "3分",
        "options": [],
        "q": "求不定積分：$$\\int \\frac{4x^2 + 5x - 2}{x} \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\frac{a+b+c}{x} = \\frac{a}{x} + \\frac{b}{x} + \\frac{c}{x}",
                "\\int \\frac{1}{x} \\, dx = \\ln|x| + C"
            ],
            "points": [
                "<b>單項式分母拆項</b>：分子每項分別除以分母 $x$，轉化為獨立的簡單冪函數與倒數項。",
                "<b>對數絕對值</b>：倒數項原函數 $\\int \\frac{1}{x}dx = \\ln|x| + C$ 必須保留絕對值符號。"
            ],
            "pitfall": "忘寫 $\\ln|x|$ 中的絕對值符號；切忌將分式上下分別積分。"
        },
        "solution": {
            "thinking": "將分子三項分別除以 $x$ 拆成三項，再分別套用冪函數與對數積分公式。",
            "steps": [
                "分式拆項化簡：$\\frac{4x^2 + 5x - 2}{x} = 4x + 5 - \\frac{2}{x}$；",
                "逐項求原函數：$\\int 4x \\, dx = 2x^2$；$\\int 5 \\, dx = 5x$；$\\int -\\frac{2}{x} \\, dx = -2\\ln|x|$；",
                "合併加 $C$ 得：$2x^2 + 5x - 2\\ln|x| + C$。"
            ],
            "ans": "$2x^2 + 5x - 2\\ln|x| + C$",
            "quickTip": "拆為 $4x + 5 - 2/x$，秒積 $2x^2 + 5x - 2\\ln|x| + C$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>2</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>+5x−2</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>ln</m:t></m:r><m:r><m:t>|x|+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.3",
        "topic": "立方和因式分解約分積分",
        "score": "3分",
        "options": [],
        "q": "求不定積分：$$\\int \\frac{x^3 + 27}{x + 3} \\, dx$$",
        "knowledge": {
            "formulas": [
                "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
                "\\frac{x^3 + 27}{x + 3} = x^2 - 3x + 9 \\quad (x \\ne -3)"
            ],
            "points": [
                "<b>代數恆等式約分</b>：利用立方和公式將分子因式分解，約去分母的一次因式 $(x+3)$，轉化為二次多項式積分。"
            ],
            "pitfall": "立方和中間項為負號 $-ab$（即 $-3x$），切勿寫錯成 $+3x$ 或 $-6x$。"
        },
        "solution": {
            "thinking": "利用立方和公式 $x^3+27 = (x+3)(x^2-3x+9)$ 與分母約分，再逐項求不定積分。",
            "steps": [
                "分子因式分解：$x^3 + 27 = x^3 + 3^3 = (x + 3)(x^2 - 3x + 9)$；",
                "約分消去公因式：$\\frac{(x+3)(x^2 - 3x + 9)}{x+3} = x^2 - 3x + 9$；",
                "逐項積分：$\\int (x^2 - 3x + 9) \\, dx = \\frac{x^3}{3} - \\frac{3}{2}x^2 + 9x + C$。"
            ],
            "ans": "$\\frac{x^3}{3} - \\frac{3}{2}x^2 + 9x + C$",
            "quickTip": "立方和約分剩 $x^2 - 3x + 9$，直接逐項積分！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>3</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>+9x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.4",
        "topic": "根式化分數指數冪乘積展開",
        "score": "3分",
        "options": [],
        "q": "求不定積分：$$\\int (x^2 + 2)\\sqrt{x} \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\sqrt{x} = x^{\\frac{1}{2}}",
                "x^m \\cdot x^n = x^{m+n}",
                "\\int x^p \\, dx = \\frac{1}{p+1} x^{p+1} + C"
            ],
            "points": [
                "<b>指數相加律</b>：$x^2 \\cdot x^{\\frac{1}{2}} = x^{2+\\frac{1}{2}} = x^{\\frac{5}{2}}$；$2 \\cdot x^{\\frac{1}{2}} = 2x^{\\frac{1}{2}}$。",
                "<b>通分倒數</b>：$\\frac{5}{2}+1 = \\frac{7}{2}$ 倒數為 $\\frac{2}{7}$；$\\frac{1}{2}+1 = \\frac{3}{2}$ 倒數為 $\\frac{2}{3}$。"
            ],
            "pitfall": "指數加 1 時分子分母算錯；切勿未乘法分配律展開就直接積分。"
        },
        "solution": {
            "thinking": "將 $\\sqrt{x}$ 寫成 $x^{1/2}$，乘入括號內展開為兩項分數指數冪，再套用冪函數積分公式。",
            "steps": [
                "化根式為分數指數並展開：$(x^2 + 2)x^{\\frac{1}{2}} = x^{\\frac{5}{2}} + 2x^{\\frac{1}{2}}$；",
                "積分第一項：$\\int x^{\\frac{5}{2}} \\, dx = \\frac{2}{7} x^{\\frac{7}{2}}$；",
                "積分第二項：$\\int 2x^{\\frac{1}{2}} \\, dx = 2 \\cdot \\frac{2}{3} x^{\\frac{3}{2}} = \\frac{4}{3} x^{\\frac{3}{2}}$；",
                "合併加 $C$ 得：$\\frac{2}{7}x^{\\frac{7}{2}} + \\frac{4}{3}x^{\\frac{3}{2}} + C$。"
            ],
            "ans": "$\\frac{2}{7}x^{\\frac{7}{2}} + \\frac{4}{3}x^{\\frac{3}{2}} + C$",
            "quickTip": "$x^{5/2} \\to \\frac{2}{7}x^{7/2}$，$2x^{1/2} \\to \\frac{4}{3}x^{3/2}$，輕鬆搞定！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>2</m:t></m:r></m:num><m:den><m:r><m:t>7</m:t></m:r></m:den></m:f><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>7</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f></m:sup></m:sSup><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>4</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>3</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f></m:sup></m:sSup><m:r><m:t>+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.5",
        "topic": "負整數指數與分數冪分式化簡",
        "score": "3分",
        "options": [],
        "q": "求不定積分：$$\\int \\left( \\frac{1}{\\sqrt[4]{x}} - \\frac{4}{x^4} \\right) \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\frac{1}{\\sqrt[4]{x}} = x^{-\\frac{1}{4}}, \\quad \\frac{4}{x^4} = 4x^{-4}",
                "\\int x^{-4} \\, dx = \\frac{1}{-3} x^{-3} + C = -\\frac{1}{3x^3} + C"
            ],
            "points": [
                "<b>負指數冪化</b>：分母上的冪次改寫為負指數，直接應用冪公式。",
                "<b>負負得正</b>：$-4 \\cdot \\left(-\\frac{1}{3}x^{-3}\\right) = +\\frac{4}{3x^3}$。"
            ],
            "pitfall": "$-4 + 1 = -3$（不是 $-5$！）；負負得正的符號極易出錯。"
        },
        "solution": {
            "thinking": "統一化為負指數冪 $x^{-1/4} - 4x^{-4}$，逐項加 1 積分，注意負負得正。",
            "steps": [
                "轉化為指數形式：$\\int (x^{-\\frac{1}{4}} - 4x^{-4}) \\, dx$；",
                "第一項積分：$\\frac{1}{-\\frac{1}{4}+1} x^{\\frac{3}{4}} = \\frac{1}{\\frac{3}{4}} x^{\\frac{3}{4}} = \\frac{4}{3}x^{\\frac{3}{4}}$；",
                "第二項積分：$-4 \\cdot \\frac{x^{-3}}{-3} = +\\frac{4}{3}x^{-3} = \\frac{4}{3x^3}$；",
                "合併加 $C$ 得：$\\frac{4}{3}x^{\\frac{3}{4}} + \\frac{4}{3x^3} + C$。"
            ],
            "ans": "$\\frac{4}{3}x^{\\frac{3}{4}} + \\frac{4}{3x^3} + C$",
            "quickTip": "指數加 1，負負得正，兩項係數均為 $+4/3$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>4</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>3</m:t></m:r></m:num><m:den><m:r><m:t>4</m:t></m:r></m:den></m:f></m:sup></m:sSup><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>4</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup></m:den></m:f><m:r><m:t>+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.6",
        "topic": "二倍角平方差因式約分積分",
        "score": "3分",
        "options": [],
        "q": "求不定積分：$$\\int \\frac{\\cos 2x}{\\cos x - \\sin x} \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\cos 2x = \\cos^2 x - \\sin^2 x = (\\cos x - \\sin x)(\\cos x + \\sin x)"
            ],
            "points": [
                "<b>三角恆等式因式分解</b>：二倍角公式的平方差形式，可與分母精確約分。",
                "<b>約分後直接積分</b>：剩下 $\\cos x + \\sin x$，原函數為 $\\sin x - \\cos x$。"
            ],
            "pitfall": "正弦求積帶負號：$\\int \\sin x dx = -\\cos x$，切勿寫成 $+\\cos x$。"
        },
        "solution": {
            "thinking": "利用二倍角平方差公式展開分子，約去分母 $(\\cos x - \\sin x)$，再求基本三角不定積分。",
            "steps": [
                "分子平方差展開：$\\cos 2x = \\cos^2 x - \\sin^2 x = (\\cos x - \\sin x)(\\cos x + \\sin x)$；",
                "約去分母：$\\frac{(\\cos x - \\sin x)(\\cos x + \\sin x)}{\\cos x - \\sin x} = \\cos x + \\sin x$；",
                "逐項積分：$\\int (\\cos x + \\sin x) \\, dx = \\sin x - \\cos x + C$。"
            ],
            "ans": "$\\sin x - \\cos x + C$",
            "quickTip": "二倍角約分得 $\\cos x + \\sin x$，積分即得 $\\sin x - \\cos x + C$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>sin</m:t></m:r><m:r><m:t>x−</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>cos</m:t></m:r><m:r><m:t>x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.7",
        "topic": "正弦二倍角展開約分與一次複合",
        "score": "3分",
        "options": [],
        "q": "求不定積分：$$\\int \\frac{\\sin 10x}{\\cos 5x} \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\sin 2\\theta = 2\\sin\\theta \\cos\\theta \\implies \\sin 10x = 2\\sin 5x \\cos 5x",
                "\\int \\sin(kx) \\, dx = -\\frac{1}{k} \\cos(kx) + C"
            ],
            "points": [
                "<b>倍角角度減半</b>：$10x = 2 \\times (5x)$，展開後可約去 $\\cos 5x$。",
                "<b>連鎖係數除法</b>：求積時除以內層一次項係數 5。"
            ],
            "pitfall": "忘記除以內層係數 5；或正弦積分漏負號。"
        },
        "solution": {
            "thinking": "將 $\\sin 10x$ 視為 $\\sin(2 \\cdot 5x)$ 用正弦二倍角展開，約去分母，再做一次複合函數積分。",
            "steps": [
                "二倍角展開：$\\sin 10x = 2\\sin 5x \\cos 5x$；",
                "約分化簡：$\\frac{2\\sin 5x \\cos 5x}{\\cos 5x} = 2\\sin 5x$；",
                "複合函數求積：$\\int 2\\sin 5x \\, dx = 2 \\cdot \\left(-\\frac{1}{5}\\cos 5x\\right) + C = -\\frac{2}{5}\\cos 5x + C$。"
            ],
            "ans": "$-\\frac{2}{5}\\cos 5x + C$",
            "quickTip": "展開約分剩 $2\\sin 5x$，積分除以 5 帶負號，得 $-\\frac{2}{5}\\cos 5x + C$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>2</m:t></m:r></m:num><m:den><m:r><m:t>5</m:t></m:r></m:den></m:f><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>cos</m:t></m:r><m:r><m:t>5x+C</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "運算化簡",
        "qNum": "小題 2.8",
        "topic": "湊微分法與第一類換元積分",
        "score": "3分",
        "options": [],
        "q": "求下列各不定積分（湊微分法）：\n(1) $\\int \\frac{2x}{x^2 + 1} \\, dx$ ；\n(2) $\\int \\tan x \\, dx$",
        "knowledge": {
            "formulas": [
                "\\int \\frac{g'(x)}{g(x)} \\, dx = \\ln|g(x)| + C",
                "\\tan x = \\frac{\\sin x}{\\cos x} = -\\frac{(\\cos x)'}{\\cos x}"
            ],
            "points": [
                "<b>湊微分基本型</b>：若分子恰為分母的導數，原函數直接為分母的自然對數 $\\ln|g(x)|$。",
                "<b>恆正省略絕對值</b>：因 $x^2 + 1 \\ge 1 > 0$，故 $\\ln(x^2+1)$ 無需加絕對值。"
            ],
            "pitfall": "(2) 小題中 $\\sin x dx = -d(\\cos x)$，切勿漏掉負號。"
        },
        "solution": {
            "thinking": "辨識分子為分母導數的形式，利用 $\\int \\frac{du}{u} = \\ln|u| + C$ 求解。",
            "steps": [
                "(1) 觀察到 $(x^2+1)' = 2x$，即 $2x dx = d(x^2+1)$：\n    $\\int \\frac{2x}{x^2+1} \\, dx = \\int \\frac{d(x^2+1)}{x^2+1} = \\ln(x^2+1) + C$；",
                "(2) 將正切寫為商：$\\tan x = \\frac{\\sin x}{\\cos x}$。因 $d(\\cos x) = -\\sin x dx$：\n    $\\int \\tan x \\, dx = -\\int \\frac{d(\\cos x)}{\\cos x} = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$。"
            ],
            "ans": "(1) $\\ln(x^2 + 1) + C$ ； (2) $-\\ln|\\cos x| + C$",
            "quickTip": "分子是分母導數，直接積出 $\\ln(\\text{分母})$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>ln</m:t></m:r><m:r><m:t>(</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>+1)+C</m:t></m:r></m:oMath>"
        }
    }
  ]
});
})();
