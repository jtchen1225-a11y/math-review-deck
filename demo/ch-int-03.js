/* 澳門四校聯考 · 微積分專題 100 分鐘限時練習 — 第三部分 定積分綜合計算與微積分基本定理 (題 01~06 · 滿分 24分) (支援原生 OMML) */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push(
{
  "ch": "第三部分 定積分綜合與定理",
  "year": "100分鐘專題",
  "paper": "定積分綜合",
  "title": "第三部分 定積分綜合計算與微積分基本定理 (題 01~06 · 滿分 24分)",
  "color": "#7c3aed",
  "sections": [
    "題 01 · 牛頓-萊布尼茲公式與對數值求值",
    "題 02 · 完全平方式展開與定積分通分計算",
    "題 03 · 三角函數與多項式混合定積分",
    "題 04 · 三角恆等變換正切平方定積分",
    "題 05 · 變上限積分求導連鎖律與換限反號",
    "題 06 · 變量中含定積分的函數方程求解"
  ]
,
  "slides": [
    {
        "year": "100分鐘專題",
        "paper": "定積分綜合",
        "qNum": "小題 3.1",
        "topic": "牛頓-萊布尼茲公式與對數值求值",
        "score": "4分",
        "options": [],
        "q": "計算定積分：$$\\int_1^2 \\left( 2x + \\frac{1}{x} \\right) \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)",
                "\\ln 1 = 0"
            ],
            "points": [
                "<b>原函數構造</b>：$2x \\to x^2$，$\\frac{1}{x} \\to \\ln x$（在 $[1, 2]$ 上 $x>0$）。",
                "<b>代入計算</b>：上限減下限，利用常識 $\\ln 1 = 0$ 簡化。"
            ],
            "pitfall": "忘記 $\\ln 1 = 0$；或在代入下限 1 時忘記將括號展開變號。"
        },
        "solution": {
            "thinking": "先求出被積函數的原函數 $x^2 + \\ln x$，然後分別代入上限 2 與下限 1 相減。",
            "steps": [
                "求原函數：$F(x) = x^2 + \\ln x$ （在 $[1, 2]$ 上 $x > 0$）；",
                "代入牛頓-萊布尼茲公式：$\\left[ x^2 + \\ln x \\right]_1^2$；",
                "代入上限 2：$2^2 + \\ln 2 = 4 + \\ln 2$；",
                "代入下限 1：$1^2 + \\ln 1 = 1 + 0 = 1$；",
                "相減求值：$(4 + \\ln 2) - 1 = 3 + \\ln 2$。"
            ],
            "ans": "$3 + \\ln 2$",
            "quickTip": "代 2 得 $4+\\ln 2$，代 1 得 1，相減得 $3+\\ln 2$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>3+</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>ln</m:t></m:r><m:r><m:t>2</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "定積分綜合",
        "qNum": "小題 3.2",
        "topic": "完全平方式展開與定積分通分計算",
        "score": "4分",
        "options": [],
        "q": "計算定積分：$$\\int_1^2 \\left( x - \\frac{1}{x} \\right)^2 \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\left( x - \\frac{1}{x} \\right)^2 = x^2 - 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = x^2 - 2 + x^{-2}",
                "\\int x^{-2} \\, dx = -\\frac{1}{x} + C"
            ],
            "points": [
                "<b>完全平方式展開</b>：中間交叉項為常數 $-2$。",
                "<b>通分計算精度</b>：代入上下限時分數通分需極度仔細。"
            ],
            "pitfall": "完全平方中間項常漏乘 2 錯寫為 $-1$；負指數代入時負號容易算錯。"
        },
        "solution": {
            "thinking": "先展開被積式為 $x^2 - 2 + x^{-2}$，求出原函數 $\\frac{x^3}{3} - 2x - \\frac{1}{x}$，再代限計算。",
            "steps": [
                "展開被積式：$\\left( x - \\frac{1}{x} \\right)^2 = x^2 - 2 + x^{-2}$；",
                "求原函數：$\\int (x^2 - 2 + x^{-2}) \\, dx = \\left[ \\frac{x^3}{3} - 2x - \\frac{1}{x} \\right]_1^2$；",
                "代入上限 2：$\\frac{8}{3} - 4 - \\frac{1}{2} = \\frac{16 - 24 - 3}{6} = -\\frac{11}{6}$；",
                "代入下限 1：$\\frac{1}{3} - 2 - 1 = \\frac{1}{3} - 3 = -\\frac{8}{3} = -\\frac{16}{6}$；",
                "相減求值：$-\\frac{11}{6} - \\left(-\\frac{16}{6}\\right) = \\frac{5}{6}$。"
            ],
            "ans": "$\\frac{5}{6}$",
            "quickTip": "上限 $-11/6$，下限 $-16/6$，相減直接得 $5/6$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>5</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "定積分綜合",
        "qNum": "小題 3.3",
        "topic": "三角函數與多項式混合定積分",
        "score": "4分",
        "options": [],
        "q": "計算定積分：$$\\int_0^{\\frac{\\pi}{2}} (3x + \\sin x) \\, dx$$",
        "knowledge": {
            "formulas": [
                "\\int (3x + \\sin x) \\, dx = \\frac{3}{2}x^2 - \\cos x + C",
                "\\cos\\frac{\\pi}{2} = 0, \\quad \\cos 0 = 1"
            ],
            "points": [
                "<b>正弦原函數負號</b>：$\\int \\sin x dx = -\\cos x$。",
                "<b>代入下限非零警惕</b>：雖然下限 $x=0$，但 $-\\cos 0 = -1 \\ne 0$！減去下限時得 $-(-1) = +1$。"
            ],
            "pitfall": "學生最常犯錯：誤以為下限為 0 時結果就是 0，漏掉 $\\cos 0 = 1$ 的影響！"
        },
        "solution": {
            "thinking": "求原函數 $\\frac{3}{2}x^2 - \\cos x$，嚴格計算上限與下限的函數值並相減。",
            "steps": [
                "求原函數：$F(x) = \\frac{3}{2}x^2 - \\cos x$；",
                "代入上限 $\\frac{\\pi}{2}$：$\\frac{3}{2}\\left(\\frac{\\pi}{2}\\right)^2 - \\cos\\frac{\\pi}{2} = \\frac{3}{2} \\cdot \\frac{\\pi^2}{4} - 0 = \\frac{3\\pi^2}{8}$；",
                "代入下限 0：$\\frac{3}{2}(0)^2 - \\cos 0 = 0 - 1 = -1$；",
                "上下限相減：$\\frac{3\\pi^2}{8} - (-1) = \\frac{3\\pi^2}{8} + 1$。"
            ],
            "ans": "$\\frac{3\\pi^2}{8} + 1$",
            "quickTip": "記住 $\\cos 0 = 1$ 不是 0，減去負 1 變加 1！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>3</m:t></m:r><m:sSup><m:e><m:r><m:t>π</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup></m:num><m:den><m:r><m:t>8</m:t></m:r></m:den></m:f><m:r><m:t>+1</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "定積分綜合",
        "qNum": "小題 3.4",
        "topic": "三角恆等變換正切平方定積分",
        "score": "4分",
        "options": [],
        "q": "計算三角定積分：$$\\int_0^{\\frac{\\pi}{4}} \\tan^2 x \\, dx$$",
        "knowledge": {
            "formulas": [
                "1 + \\tan^2 x = \\sec^2 x \\iff \\tan^2 x = \\sec^2 x - 1",
                "\\int \\sec^2 x \\, dx = \\tan x + C"
            ],
            "points": [
                "<b>無直接公式轉化</b>：$\\tan^2 x$ 不能直接積分，必須聯想三角平方關係轉化為 $(\\sec^2 x - 1)$。",
                "<b>特殊角正切值</b>：$\\tan\\frac{\\pi}{4} = 1$，$\\tan 0 = 0$。"
            ],
            "pitfall": "千萬不要誤把 $\\tan^2 x$ 寫成 $\\frac{\\tan^3 x}{3}$（這只有在 $d(\\tan x)$ 時才成立！）。"
        },
        "solution": {
            "thinking": "利用三角恆等式 $\\tan^2 x = \\sec^2 x - 1$，將原積分拆為正割平方與常數的定積分。",
            "steps": [
                "三角變換：$\\int_0^{\\frac{\\pi}{4}} \\tan^2 x \\, dx = \\int_0^{\\frac{\\pi}{4}} (\\sec^2 x - 1) \\, dx$；",
                "求原函數：$[\\tan x - x]_0^{\\frac{\\pi}{4}}$；",
                "代入上限 $\\frac{\\pi}{4}$：$\\tan\\frac{\\pi}{4} - \\frac{\\pi}{4} = 1 - \\frac{\\pi}{4}$；",
                "代入下限 0：$\\tan 0 - 0 = 0$；",
                "相減求值：$\\left( 1 - \\frac{\\pi}{4} \\right) - 0 = 1 - \\frac{\\pi}{4}$。"
            ],
            "ans": "$1 - \\frac{\\pi}{4}$",
            "quickTip": "恆等變換為 $\\sec^2 x - 1$，積出 $\\tan x - x$，代限得 $1 - \\pi/4$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>1−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>π</m:t></m:r></m:num><m:den><m:r><m:t>4</m:t></m:r></m:den></m:f></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "定積分綜合",
        "qNum": "小題 3.5",
        "topic": "變上限積分求導連鎖律與換限反號",
        "score": "4分",
        "options": [],
        "q": "變上限積分函數求導（微積分基本定理連鎖律應用）：\n(1) 設 $F(x) = \\int_0^{x^2} \\cos t \\, dt$，求 $F'(x)$；\n(2) 設 $y = \\int_{1+x^2}^3 \\frac{1}{2 + e^t} \\, dt$，求 $\\frac{dy}{dx}$。",
        "knowledge": {
            "formulas": [
                "\\frac{d}{dx} \\int_a^{u(x)} f(t) \\, dt = f(u(x)) \\cdot u'(x)",
                "\\int_{v(x)}^b f(t) \\, dt = -\\int_b^{v(x)} f(t) \\, dt"
            ],
            "points": [
                "<b>上限為複合函數</b>：求導時被積函數代入上限 $u(x)$，且必須乘以內層導數 $u'(x)$。",
                "<b>自變量在下限</b>：顛倒上下限必添負號，求導結果自帶負號。"
            ],
            "pitfall": "(1) 容易漏乘 $(x^2)' = 2x$；(2) 自變量在下限時常漏掉負號！"
        },
        "solution": {
            "thinking": "利用微積分第一基本定理推廣連鎖律：代入上限乘以其導數；下限變量先調換限位添負號。",
            "steps": [
                "(1) 上限為 $u(x) = x^2$，其導數為 $u'(x) = 2x$：\n    $F'(x) = \\cos(x^2) \\cdot (x^2)' = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$；",
                "(2) 自變量在下限，交換上下限並反號：\n    $y = -\\int_3^{1+x^2} \\frac{1}{2 + e^t} \\, dt$。\n    對 $x$ 求導，應用連鎖律：\n    $\\frac{dy}{dx} = -\\frac{1}{2 + e^{1+x^2}} \\cdot (1+x^2)' = -\\frac{2x}{2 + e^{1+x^2}}$。"
            ],
            "ans": "(1) $F'(x) = 2x\\cos(x^2)$ ； (2) $\\frac{dy}{dx} = -\\frac{2x}{2 + e^{1+x^2}}$",
            "quickTip": "代入上限乘導數，下限求導必帶負號！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSup><m:e><m:r><m:t>F</m:t></m:r></m:e><m:sup><m:r><m:t>′</m:t></m:r></m:sup></m:sSup><m:r><m:t>(x)=2x</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>cos</m:t></m:r><m:r><m:t>(</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>)</m:t></m:r></m:oMath>"
        }
    },
    {
        "year": "100分鐘專題",
        "paper": "定積分綜合",
        "qNum": "小題 3.6",
        "topic": "變量中含定積分的函數方程求解",
        "score": "4分",
        "options": [],
        "q": "已知多項式函數滿足方程：$$f(x) = 3x^2 + 2x \\left( \\int_1^2 f(t) \\, dt \\right) + 1$$求此多項式函數 $f(x)$ 的解析式。",
        "knowledge": {
            "formulas": [
                "\\int_a^b f(t) \\, dt = K \\quad (\\text{定積分的值是一個實常數})"
            ],
            "points": [
                "<b>常數代換法</b>：定積分 $\\int_1^2 f(t)dt$ 的計算結果是確定的數值常數，令其為 $K$。",
                "<b>自洽方程求解</b>：將 $f(x) = 3x^2 + 2Kx + 1$ 代入定積分表達式，列出關於 $K$ 的一元一次方程解出 $K$。"
            ],
            "pitfall": "不要將定積分當成變量，定積分本質就是一個常數！抓住這點即可順暢化簡。"
        },
        "solution": {
            "thinking": "設常數 $K = \\int_1^2 f(t) dt$，則 $f(x) = 3x^2 + 2Kx + 1$。將解析式代回定積分求出 $K$。",
            "steps": [
                "令常數 $K = \\int_1^2 f(t) \\, dt$，則方程寫為 $f(x) = 3x^2 + 2Kx + 1$；",
                "將 $f(t) = 3t^2 + 2Kt + 1$ 代入定積分：\n    $K = \\int_1^2 (3t^2 + 2Kt + 1) \\, dt = \\left[ t^3 + Kt^2 + t \\right]_1^2$；",
                "代限計算：\n    $(2^3 + K \\cdot 2^2 + 2) - (1^3 + K \\cdot 1^2 + 1) = (10 + 4K) - (2 + K) = 8 + 3K$；",
                "解方程：$K = 8 + 3K \\implies -2K = 8 \\implies K = -4$；",
                "代回得解析式：$f(x) = 3x^2 + 2(-4)x + 1 = 3x^2 - 8x + 1$。"
            ],
            "ans": "$f(x) = 3x^2 - 8x + 1$",
            "quickTip": "令定積分為 $K$，列出 $K = 8 + 3K \\implies K = -4$，秒出 $f(x) = 3x^2 - 8x + 1$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>f(x)=3</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>−8x+1</m:t></m:r></m:oMath>"
        }
    }
  ]
});
})();
