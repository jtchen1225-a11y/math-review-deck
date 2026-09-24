/* 2026 高三理組數學思維本 · 微積分篇 — 專題四 不定積分 (10 題) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
  "ch": "專題四 不定積分",
  "year": "2026",
  "paper": "專題四",
  "title": "專題四 不定積分的定義、運算法則與積分技巧",
  "color": "#7c3aed",
  "sections": [
    "三角降冪遞推公式",
    "代換求導",
    "22 道經典不定積分 3(1~22)",
    "6 道進階不定積分 4(1~6)"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第1題",
      "topic": "正弦高次冪的微分關係與遞推積分公式",
      "score": "10分",
      "q": "設 $n$ 為正整數且 $n \\ge 2$：<br>(a) 證明 $\\frac{d}{dx}(\\sin^{n-1}x \\cos x) = (n-1)\\sin^{n-2}x - n\\sin^n x$；<br>(b) 設 $I_n = \\int \\sin^n x dx$，證明 $I_n = -\\frac{1}{n}\\sin^{n-1}x \\cos x + \\frac{n-1}{n}I_{n-2}$；<br>(c) 由此，計算 $\\int \\sin^4 x dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(u v)' = u'v + uv'",
          "\\cos^2 x = 1 - \\sin^2 x",
          "I_n = -\\frac{1}{n}\\sin^{n-1}x \\cos x + \\frac{n-1}{n}I_{n-2}"
        ],
        "points": [
          "<b>(a) 乘積求導與同角三角恆等式</b>：將 $\\cos^2 x$ 換為 $1 - \\sin^2 x$ 合併同類項。",
          "<b>(b) 兩邊同時積分</b>：利用微積分基本定理直接得到遞推公式。",
          "<b>(c) 降冪計算</b>：$n=4 \\implies I_4 = -\\frac{1}{4}\\sin^3 x \\cos x + \\frac{3}{4}I_2$。"
        ],
        "pitfall": "遞推至 $I_0$：$I_0 = \\int 1 dx = x + C$。"
      },
      "solution": {
        "thinking": "乘積法則求導後代入 $\\cos^2 x = 1 - \\sin^2 x$；兩端積分移項整理得遞推式；最後降階計算 $\\int \\sin^4 x dx$。",
        "steps": [
          "(a) 運用乘積求導法則：<br>$\\frac{d}{dx}(\\sin^{n-1}x \\cos x) = (\\sin^{n-1}x)' \\cos x + \\sin^{n-1}x (\\cos x)'$<br>$= (n-1)\\sin^{n-2}x \\cos x \\cdot \\cos x + \\sin^{n-1}x (-\\sin x)$<br>$= (n-1)\\sin^{n-2}x \\cos^2 x - \\sin^n x$<br>$= (n-1)\\sin^{n-2}x (1 - \\sin^2 x) - \\sin^n x$<br>$= (n-1)\\sin^{n-2}x - (n-1)\\sin^n x - \\sin^n x = (n-1)\\sin^{n-2}x - n\\sin^n x$。得證！",
          "(b) 對 (a) 式兩邊對 $x$ 積分：<br>$\\sin^{n-1}x \\cos x = (n-1)\\int \\sin^{n-2}x dx - n\\int \\sin^n x dx$<br>即 $\\sin^{n-1}x \\cos x = (n-1)I_{n-2} - n I_n$。<br>移項整理：$n I_n = -\\sin^{n-1}x \\cos x + (n-1)I_{n-2}$。<br>兩邊同除以 $n$：$I_n = -\\frac{1}{n}\\sin^{n-1}x \\cos x + \\frac{n-1}{n}I_{n-2}$。得證！",
          "(c) 計算 $\\int \\sin^4 x dx$（即 $n = 4$）：<br>由遞推公式：$I_4 = -\\frac{1}{4}\\sin^3 x \\cos x + \\frac{3}{4}I_2$。<br>對 $n = 2$：$I_2 = -\\frac{1}{2}\\sin x \\cos x + \\frac{1}{2}I_0 = -\\frac{1}{4}\\sin 2x + \\frac{1}{2}x$（其中 $I_0 = \\int 1 dx = x$）。<br>代入 $I_4$：<br>$I_4 = -\\frac{1}{4}\\sin^3 x \\cos x + \\frac{3}{4}\\left(-\\frac{1}{2}\\sin x \\cos x + \\frac{1}{2}x\\right) + C$<br>$= \\frac{3}{8}x - \\frac{3}{8}\\sin x \\cos x - \\frac{1}{4}\\sin^3 x \\cos x + C$<br>$= \\frac{3}{8}x - \\frac{1}{4}\\sin 2x + \\frac{1}{32}\\sin 4x + C$。"
        ],
        "ans": "\\int \\sin^4 x dx = \\frac{3}{8}x - \\frac{1}{4}\\sin 2x + \\frac{1}{32}\\sin 4x + C",
        "quickTip": "經典三角遞推公式，兩步降階直接求解高次正弦不定積分！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第2題",
      "topic": "商求導逆運算與湊微分定積分",
      "score": "6分",
      "q": "(a) 求 $\\frac{d}{dx}\\left(\\frac{1}{x^2+1}\\right)$；<br>(b) 由此，或用其他方法，求 $\\int \\frac{x}{(1+x^2)^2} dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\frac{d}{dx}(u^{-1}) = -u^{-2} u'",
          "\\int \\frac{x}{(x^2+1)^2}dx = \\frac{1}{2}\\int (x^2+1)^{-2} d(x^2+1)"
        ],
        "points": [
          "<b>(a) 鏈式求導</b>：$\\left((x^2+1)^{-1}\\right)' = -(x^2+1)^{-2} \\cdot 2x = -\\frac{2x}{(x^2+1)^2}$。",
          "<b>(b) 逆向觀察法</b>：被積函數正好是 (a) 導數結果的 $-\\frac{1}{2}$ 倍！"
        ],
        "pitfall": "不定積分務必加上任意常數 $+C$。"
      },
      "solution": {
        "thinking": "先求負一次冪的導數，再由微分與積分的互逆關係直接得出不定積分結果。",
        "steps": [
          "(a) 令 $y = (x^2 + 1)^{-1}$。<br>$\\frac{d}{dx}\\left(\\frac{1}{x^2+1}\\right) = -(x^2+1)^{-2} \\cdot (2x) = -\\frac{2x}{(x^2+1)^2}$。",
          "(b) 觀察 (a) 的結果：<br>$\\frac{d}{dx}\\left(\\frac{1}{x^2+1}\\right) = -2 \\cdot \\frac{x}{(1+x^2)^2}$。<br>兩邊同除以 $-2$：<br>$\\frac{x}{(1+x^2)^2} = -\\frac{1}{2} \\frac{d}{dx}\\left(\\frac{1}{x^2+1}\\right)$。<br>兩邊積分得：<br>$\\int \\frac{x}{(1+x^2)^2} dx = -\\frac{1}{2}\\left(\\frac{1}{x^2+1}\\right) + C = -\\frac{1}{2(x^2+1)} + C$。"
        ],
        "ans": "(a) -\\frac{2x}{(x^2+1)^2}；(b) -\\frac{1}{2(x^2+1)} + C",
        "quickTip": "湊微分法：$x dx = \\frac{1}{2}d(x^2+1)$，$\\frac{1}{2}\\int u^{-2}du = -\\frac{1}{2u} + C$！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第3題(1~4)",
      "topic": "基礎不定積分 (冪函數、展開法與分數指數冪)",
      "score": "10分",
      "q": "求下列各不定積分：<br>(1) $\\int (x^2 + 1) dx$；<br>(2) $\\int (x - 2)^2 dx$；<br>(3) $\\int \\frac{dx}{x^2 \\sqrt{x}}$；<br>(4) $\\int \\left(1 - \\frac{1}{x^2}\\right)\\sqrt{x\\sqrt{x}} dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\ne -1)",
          "\\sqrt{x\\sqrt{x}} = \\sqrt{x \\cdot x^{1/2}} = \\sqrt{x^{3/2}} = x^{3/4}"
        ],
        "points": [
          "<b>(1) 基礎多項式</b>：逐項積分（原教材留白處補充多項式基礎範例）。",
          "<b>(2) 線性複合或展開</b>：直接積分為 $\\frac{1}{3}(x-2)^3 + C$。",
          "<b>(3) 化為負分數冪</b>：$x^2 \\sqrt{x} = x^{5/2} \\implies x^{-5/2}$。",
          "<b>(4) 雙重根號化簡</b>：$\\sqrt{x\\sqrt{x}} = x^{3/4}$，乘開後分別積分。"
        ],
        "pitfall": "指數加 1 時分數通分計算務必準確：$-5/2 + 1 = -3/2$；$3/4 + 1 = 7/4$。"
      },
      "solution": {
        "thinking": "全部化為標準冪函數形式 $x^r$，套用冪函數積分基本公式逐項積分。",
        "steps": [
          "(1) $\\int (x^2 + 1) dx = \\frac{x^3}{3} + x + C$。",
          "(2) $\\int (x - 2)^2 dx = \\frac{1}{3}(x - 2)^3 + C$（或展開為 $\\frac{x^3}{3} - 2x^2 + 4x + C$）。",
          "(3) $\\int \\frac{dx}{x^2 \\sqrt{x}} = \\int x^{-5/2} dx = \\frac{x^{-5/2 + 1}}{-5/2 + 1} + C = \\frac{x^{-3/2}}{-3/2} + C = -\\frac{2}{3x\\sqrt{x}} + C$。",
          "(4) 先化簡被積函數：$\\sqrt{x\\sqrt{x}} = (x \\cdot x^{1/2})^{1/2} = (x^{3/2})^{1/2} = x^{3/4}$。<br>展開式子：$\\left(1 - x^{-2}\\right) x^{3/4} = x^{3/4} - x^{-5/4}$。<br>逐項積分：<br>$\\int (x^{3/4} - x^{-5/4})dx = \\frac{x^{7/4}}{7/4} - \\frac{x^{-1/4}}{-1/4} + C = \\frac{4}{7}x^{7/4} + 4x^{-1/4} + C = \\frac{4}{7}x\\sqrt[4]{x^3} + \\frac{4}{\\sqrt[4]{x}} + C$。"
        ],
        "ans": "(1) \\frac{x^3}{3} + x + C；(2) \\frac{(x-2)^3}{3} + C；(3) -\\frac{2}{3x\\sqrt{x}} + C；(4) \\frac{4}{7}x^{7/4} + 4x^{-1/4} + C",
        "quickTip": "遇到根號先化為分數指數：$x^{-5/2} \\to -\\frac{2}{3}x^{-3/2}$，運算快又準！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第3題(5~8)",
      "topic": "基礎不定積分 (多項式拆項、線性複合、三角積分)",
      "score": "10分",
      "q": "求下列各不定積分：<br>(5) $\\int (x^2 + 2x - x^{-2}) dx$；<br>(6) $\\int (3 - 2x)^3 dx$；<br>(7) $\\int \\cos\\frac{x}{3} dx$；<br>(8) $\\int \\sin x \\cos x dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C",
          "\\int \\cos(kx) dx = \\frac{1}{k}\\sin(kx) + C",
          "\\int \\sin x \\cos x dx = \\frac{1}{2}\\int \\sin 2x dx"
        ],
        "points": [
          "<b>(6) 一次線性複合代換</b>：別忘記除以內層係數 $a = -2$！",
          "<b>(7) 係數倒數</b>：$\\int \\cos(x/3) dx = 3\\sin(x/3) + C$。",
          "<b>(8) 二倍角公式或湊微分</b>：$\\sin x d(\\sin x) = \\frac{1}{2}\\sin^2 x + C$。"
        ],
        "pitfall": "(6) 係數為 $-2$，積分後係數為 $-\\frac{1}{2 \\times 4} = -\\frac{1}{8}$，漏負號扣分！"
      },
      "solution": {
        "thinking": "(5) 逐項積分；(6) 湊微分或線性換元；(7) 三角積分提取係數；(8) 二倍角或湊微分法。",
        "steps": [
          "(5) $\\int (x^2 + 2x - x^{-2}) dx = \\frac{x^3}{3} + x^2 - \\frac{x^{-1}}{-1} + C = \\frac{x^3}{3} + x^2 + \\frac{1}{x} + C$。",
          "(6) 湊微分：$d(3 - 2x) = -2 dx \\implies dx = -\\frac{1}{2}d(3 - 2x)$。<br>$\\int (3 - 2x)^3 dx = -\\frac{1}{2}\\int (3 - 2x)^3 d(3 - 2x) = -\\frac{1}{2} \\cdot \\frac{(3 - 2x)^4}{4} + C = -\\frac{1}{8}(3 - 2x)^4 + C$。",
          "(7) $\\int \\cos\\frac{x}{3} dx = 3\\int \\cos\\frac{x}{3} d\\left(\\frac{x}{3}\\right) = 3\\sin\\frac{x}{3} + C$。",
          "(8) 方法一：$\\int \\sin x \\cos x dx = \\int \\sin x d(\\sin x) = \\frac{1}{2}\\sin^2 x + C$；<br>方法二：$\\frac{1}{2}\\int \\sin 2x dx = -\\frac{1}{4}\\cos 2x + C_1$（兩者等價）。"
        ],
        "ans": "(5) \\frac{x^3}{3} + x^2 + \\frac{1}{x} + C；(6) -\\frac{1}{8}(3-2x)^4 + C；(7) 3\\sin\\frac{x}{3} + C；(8) \\frac{1}{2}\\sin^2 x + C",
        "quickTip": "$\\sin x \\cos x$ 湊微分直接寫 $\\frac{1}{2}\\sin^2 x + C$ 最簡約！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第3題(9~12)",
      "topic": "第一類換元積分法 (根式湊微分、對數型有理分式)",
      "score": "10分",
      "q": "求下列各不定積分：<br>(9) $\\int \\frac{dx}{\\sqrt[3]{2 - 3x}}$；<br>(10) $\\int \\frac{\\sin\\sqrt{t}}{\\sqrt{t}} dt$；<br>(11) $\\int x\\cos(x^2) dx$；<br>(12) $\\int \\frac{3x^3}{1 - x^4} dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\int f(g(x))g'(x)dx = \\int f(u)du",
          "\\frac{dt}{\\sqrt{t}} = 2 d(\\sqrt{t})",
          "x dx = \\frac{1}{2}d(x^2)",
          "\\int \\frac{du}{u} = \\ln|u| + C"
        ],
        "points": [
          "<b>(9) 三次根式化負冪</b>：$(2-3x)^{-1/3}$ 湊 $d(2-3x)$。",
          "<b>(10) 根號 $t$ 湊微分</b>：$\\frac{dt}{\\sqrt{t}} = 2d(\\sqrt{t})$。",
          "<b>(12) 對數型湊微分</b>：分子剛好是分母導數的常數倍。"
        ],
        "pitfall": "(12) $d(1 - x^4) = -4x^3 dx$，係數為 $-\\frac{3}{4}$。"
      },
      "solution": {
        "thinking": "識別各被積函數中的內層函數與其微分因子，靈活運用第一類換元法（湊微分）。",
        "steps": [
          "(9) 改寫為冪函數：$\\int (2 - 3x)^{-1/3} dx = -\\frac{1}{3}\\int (2 - 3x)^{-1/3} d(2 - 3x)$<br>$= -\\frac{1}{3} \\cdot \\frac{(2 - 3x)^{2/3}}{2/3} + C = -\\frac{1}{2}(2 - 3x)^{2/3} + C = -\\frac{1}{2}\\sqrt[3]{(2-3x)^2} + C$。",
          "(10) 注意到 $d(\\sqrt{t}) = \\frac{1}{2\\sqrt{t}}dt \\implies \\frac{dt}{\\sqrt{t}} = 2d(\\sqrt{t})$：<br>$\\int \\frac{\\sin\\sqrt{t}}{\\sqrt{t}} dt = 2\\int \\sin\\sqrt{t} d(\\sqrt{t}) = -2\\cos\\sqrt{t} + C$。",
          "(11) 湊微分 $x dx = \\frac{1}{2}d(x^2)$：<br>$\\int x\\cos(x^2) dx = \\frac{1}{2}\\int \\cos(x^2) d(x^2) = \\frac{1}{2}\\sin(x^2) + C$。",
          "(12) 湊微分 $d(1 - x^4) = -4x^3 dx \\implies x^3 dx = -\\frac{1}{4}d(1 - x^4)$：<br>$\\int \\frac{3x^3}{1 - x^4} dx = 3\\left(-\\frac{1}{4}\\right)\\int \\frac{d(1 - x^4)}{1 - x^4} = -\\frac{3}{4}\\ln|1 - x^4| + C$。"
        ],
        "ans": "(9) -\\frac{1}{2}(2-3x)^{2/3} + C；(10) -2\\cos\\sqrt{t} + C；(11) \\frac{1}{2}\\sin(x^2) + C；(12) -\\frac{3}{4}\\ln|1-x^4| + C",
        "quickTip": "看到 $\\frac{g'(x)}{g(x)}$ 結構直接寫出 $\\ln|g(x)|$，配平係數即可！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第3題(13~16)",
      "topic": "三角函數湊微分與降冪、根式拆項",
      "score": "10分",
      "q": "求下列各不定積分：<br>(13) $\\int \\frac{\\sin x}{\\cos^3 x} dx$；<br>(14) $\\int \\frac{1 - x}{\\sqrt{9 - 4x^2}} dx$；<br>(15) $\\int \\cos^3 x dx$；<br>(16) $\\int \\cos^2\\frac{x}{2} dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\int \\frac{du}{\\sqrt{a^2 - u^2}} = \\arcsin\\frac{u}{a} + C",
          "\\cos^3 x = (1 - \\sin^2 x)\\cos x",
          "\\cos^2\\frac{x}{2} = \\frac{1 + \\cos x}{2}"
        ],
        "points": [
          "<b>(13) 湊正割或負冪</b>：$\\frac{\\sin x}{\\cos^3 x} = \\tan x \\sec^2 x$ 或 $-(\\cos x)^{-3} d(\\cos x)$。",
          "<b>(14) 拆成兩項</b>：一項是反正弦標準型，一項是根式湊微分型。",
          "<b>(15) 奇數次三角湊微分</b>：留一個 $\\cos x$ 湊成 $d(\\sin x)$。",
          "<b>(16) 二倍角降冪公式</b>：$\\cos^2(x/2) = \\frac{1+\\cos x}{2}$。"
        ],
        "pitfall": "(14) 拆項後 $-\\int \\frac{x}{\\sqrt{9-4x^2}}dx$ 的係數：$d(9-4x^2) = -8x dx$，係數為 $+\\frac{1}{8} \\times 2 = +\\frac{1}{4}$。"
      },
      "solution": {
        "thinking": "靈活拆項、降冪與提取微分因子。",
        "steps": [
          "(13) 湊微分 $\\sin x dx = -d(\\cos x)$：<br>$\\int \\frac{\\sin x}{\\cos^3 x} dx = -\\int (\\cos x)^{-3} d(\\cos x) = -\\frac{(\\cos x)^{-2}}{-2} + C = \\frac{1}{2\\cos^2 x} + C = \\frac{1}{2}\\sec^2 x + C$。",
          "(14) 拆分為兩個積分：<br>$\\int \\frac{1 - x}{\\sqrt{9 - 4x^2}} dx = \\int \\frac{dx}{\\sqrt{9 - 4x^2}} - \\int \\frac{x dx}{\\sqrt{9 - 4x^2}}$。<br>第一部分：$\\int \\frac{dx}{\\sqrt{9 - (2x)^2}} = \\frac{1}{2}\\int \\frac{d(2x)}{\\sqrt{3^2 - (2x)^2}} = \\frac{1}{2}\\arcsin\\frac{2x}{3}$；<br>第二部分：$d(9 - 4x^2) = -8x dx \\implies x dx = -\\frac{1}{8}d(9 - 4x^2)$，<br>$-\\int (9 - 4x^2)^{-1/2} \\left(-\\frac{1}{8}\\right) d(9 - 4x^2) = \\frac{1}{8} \\cdot 2\\sqrt{9 - 4x^2} = \\frac{1}{4}\\sqrt{9 - 4x^2}$。<br>合併得：$\\frac{1}{2}\\arcsin\\frac{2x}{3} + \\frac{1}{4}\\sqrt{9 - 4x^2} + C$。",
          "(15) 湊微分：$\\int \\cos^3 x dx = \\int (1 - \\sin^2 x) d(\\sin x) = \\sin x - \\frac{1}{3}\\sin^3 x + C$。",
          "(16) 降冪：$\\int \\cos^2\\frac{x}{2} dx = \\int \\frac{1 + \\cos x}{2} dx = \\frac{1}{2}x + \\frac{1}{2}\\sin x + C$。"
        ],
        "ans": "(13) \\frac{1}{2\\cos^2 x} + C；(14) \\frac{1}{2}\\arcsin\\frac{2x}{3} + \\frac{1}{4}\\sqrt{9-4x^2} + C；(15) \\sin x - \\frac{1}{3}\\sin^3 x + C；(16) \\frac{x}{2} + \\frac{\\sin x}{2} + C",
        "quickTip": "奇次三角留一個湊微分，偶次三角用二倍角降冪，兩大三角基本功！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第3題(17~19)",
      "topic": "積化和差、正割正切湊微分與假分式多項式除法",
      "score": "10分",
      "q": "求下列各不定積分：<br>(17) $\\int \\sin 2x \\cos 3x dx$；<br>(18) $\\int \\tan^3 x \\sec x dx$；<br>(19) $\\int \\frac{x^3}{x + 3} dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\sin A \\cos B = \\frac{1}{2}[\\sin(A+B) + \\sin(A-B)]",
          "\\sec x \\tan x dx = d(\\sec x)",
          "\\frac{x^3}{x+3} = x^2 - 3x + 9 - \\frac{27}{x+3}"
        ],
        "points": [
          "<b>(17) 積化和差</b>：$\\sin 2x \\cos 3x = \\frac{1}{2}[\\sin 5x + \\sin(-x)] = \\frac{1}{2}(\\sin 5x - \\sin x)$。",
          "<b>(18) 提取 $\\sec x \\tan x$</b>：$\\tan^3 x \\sec x = (\\sec^2 x - 1) \\sec x \\tan x$。",
          "<b>(19) 多項式長除法</b>：假分式必須先除成多項式加真分式。"
        ],
        "pitfall": "多項式長除法符號：$x^3 = (x+3)(x^2 - 3x + 9) - 27$。"
      },
      "solution": {
        "thinking": "積化和差拆項；正割正切利用 $d(\\sec x)$ 湊微分；假分式長除法化簡。",
        "steps": [
          "(17) 運用積化和差公式：<br>$\\sin 2x \\cos 3x = \\frac{1}{2}[\\sin(2x+3x) + \\sin(2x-3x)] = \\frac{1}{2}(\\sin 5x - \\sin x)$。<br>積分：$\\frac{1}{2}\\int (\\sin 5x - \\sin x)dx = \\frac{1}{2}\\left(-\\frac{1}{5}\\cos 5x + \\cos x\\right) + C = -\\frac{1}{10}\\cos 5x + \\frac{1}{2}\\cos x + C$。",
          "(18) 改寫為正割的導函數形式：<br>$\\tan^3 x \\sec x = \\tan^2 x (\\sec x \\tan x) = (\\sec^2 x - 1) d(\\sec x)$。<br>積分：$\\int (\\sec^2 x - 1) d(\\sec x) = \\frac{1}{3}\\sec^3 x - \\sec x + C$。",
          "(19) 多項式長除法：<br>$x^3 = (x^3 + 27) - 27 = (x+3)(x^2 - 3x + 9) - 27$。<br>$\\frac{x^3}{x+3} = x^2 - 3x + 9 - \\frac{27}{x+3}$。<br>逐項積分：<br>$\\int \\left(x^2 - 3x + 9 - \\frac{27}{x+3}\\right) dx = \\frac{x^3}{3} - \\frac{3}{2}x^2 + 9x - 27\\ln|x+3| + C$。"
        ],
        "ans": "(17) -\\frac{1}{10}\\cos 5x + \\frac{1}{2}\\cos x + C；(18) \\frac{1}{3}\\sec^3 x - \\sec x + C；(19) \\frac{x^3}{3} - \\frac{3}{2}x^2 + 9x - 27\\ln|x+3| + C",
        "quickTip": "分式次數分子大於等於分母時，毫不猶豫先做長除法！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第3題(20~22)",
      "topic": "三角代換法、同角拆項與分部積分法",
      "score": "10分",
      "q": "求下列各不定積分：<br>(20) $\\int \\frac{\\sqrt{x^2 - 4}}{x} dx$；<br>(21) $\\int \\frac{\\cos 2x}{\\cos^2 x \\sin^2 x} dx$；<br>(22) $\\int \\sin\\sqrt{x} dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "x = 2\\sec\\theta \\implies \\sqrt{x^2 - 4} = 2\\tan\\theta",
          "\\cos 2x = \\cos^2 x - \\sin^2 x",
          "\\int u dv = u v - \\int v du"
        ],
        "points": [
          "<b>(20) 三角代換法</b>：遇 $\\sqrt{x^2 - a^2}$ 設 $x = a\\sec\\theta$。",
          "<b>(21) 分子倍角展開拆項</b>：$\\frac{\\cos^2 x - \\sin^2 x}{\\cos^2 x \\sin^2 x} = \\csc^2 x - \\sec^2 x$。",
          "<b>(22) 先換元後分部</b>：令 $t = \\sqrt{x} \\implies x = t^2, dx = 2t dt$。"
        ],
        "pitfall": "(21) 拆項後 $\\int \\csc^2 x dx = -\\cot x$，$\\int \\sec^2 x dx = \\tan x$。"
      },
      "solution": {
        "thinking": "(20) 用正割三角代換；(21) 分子展開拆為兩個基本三角積分；(22) 換元化為分部積分。",
        "steps": [
          "(20) 令 $x = 2\\sec\\theta$（$0 < \\theta < \\frac{\\pi}{2}$），則 $dx = 2\\sec\\theta\\tan\\theta d\\theta$，$\\sqrt{x^2-4} = 2\\tan\\theta$。<br>$\\int \\frac{\\sqrt{x^2-4}}{x} dx = \\int \\frac{2\\tan\\theta}{2\\sec\\theta} (2\\sec\\theta\\tan\\theta) d\\theta = 2\\int \\tan^2\\theta d\\theta = 2\\int (\\sec^2\\theta - 1)d\\theta = 2(\\tan\\theta - \\theta) + C$。<br>回代：$2\\tan\\theta = \\sqrt{x^2 - 4}$，$\\theta = \\text{arcsec}\\frac{x}{2} = \\arccos\\frac{2}{x}$。<br>結果：$\\sqrt{x^2 - 4} - 2\\text{arcsec}\\frac{x}{2} + C$（或 $\\sqrt{x^2 - 4} - 2\\arccos\\frac{2}{x} + C$）。",
          "(21) 展開分子 $\\cos 2x = \\cos^2 x - \\sin^2 x$：<br>$\\frac{\\cos 2x}{\\cos^2 x \\sin^2 x} = \\frac{\\cos^2 x - \\sin^2 x}{\\cos^2 x \\sin^2 x} = \\frac{1}{\\sin^2 x} - \\frac{1}{\\cos^2 x} = \\csc^2 x - \\sec^2 x$。<br>積分得：$\\int (\\csc^2 x - \\sec^2 x)dx = -\\cot x - \\tan x + C$。",
          "(22) 令 $t = \\sqrt{x} \\implies x = t^2, dx = 2t dt$：<br>$\\int \\sin\\sqrt{x} dx = \\int (\\sin t)(2t dt) = 2\\int t \\sin t dt$。<br>分部積分：令 $u = t, dv = \\sin t dt \\implies v = -\\cos t$：<br>$2\\left[ -t\\cos t - \\int (-\\cos t)dt \\right] = 2(-t\\cos t + \\sin t) + C = 2\\sin\\sqrt{x} - 2\\sqrt{x}\\cos\\sqrt{x} + C$。"
        ],
        "ans": "(20) \\sqrt{x^2-4} - 2\\text{arcsec}\\frac{x}{2} + C；(21) -\\cot x - \\tan x + C；(22) 2\\sin\\sqrt{x} - 2\\sqrt{x}\\cos\\sqrt{x} + C",
        "quickTip": "(21) 拆項直接得 $-\\cot x - \\tan x + C$；(22) 根號換元後分部秒出！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第4題(1~3)",
      "topic": "進階不定積分 (根式換元、巧妙拆項、對數分部)",
      "score": "12分",
      "q": "求下列各不定積分：<br>(1) $\\int \\frac{x^5}{\\sqrt[4]{x^3 + 1}} dx$；<br>(2) $\\int \\frac{x^5 - x}{x^8 + 1} dx$；<br>(3) $\\int x^2 \\ln x dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(1) x^5 dx = x^3 \\cdot x^2 dx = \\frac{1}{3}(u-1) du \\quad (u = x^3+1)",
          "(2) \\frac{x^5}{x^8+1}dx = \\frac{1}{4}\\frac{d(x^4)}{(x^4)^2+1}, \\quad \\frac{x}{x^8+1}dx = \\frac{1}{2}\\frac{d(x^2)}{(x^2)^4+1}",
          "(3) \\int u dv = uv - \\int v du \\quad (u = \\ln x)"
        ],
        "points": [
          "<b>(1) 拆出 $x^2 dx$</b>：令 $u = x^3 + 1$，則 $x^3 = u - 1$，$x^2 dx = \\frac{1}{3}du$。",
          "<b>(2) 分子分開湊微分</b>：一項湊 $d(x^4)$ 得反正切，一項湊 $d(x^2)$。",
          "<b>(3) 對數優先選為 u</b>：$u = \\ln x, dv = x^2 dx$。"
        ],
        "pitfall": "(3) 分部積分後不要遺漏最後的積分常數 $+C$。"
      },
      "solution": {
        "thinking": "(1) 變量代換；(2) 拆項分別湊微分；(3) 對數標準分部積分法。",
        "steps": [
          "(1) 令 $u = x^3 + 1 \\implies x^3 = u - 1, du = 3x^2 dx \\implies x^2 dx = \\frac{1}{3}du$。<br>原式 $= \\int \\frac{x^3}{\\sqrt[4]{x^3+1}} (x^2 dx) = \\frac{1}{3}\\int \\frac{u - 1}{u^{1/4}} du = \\frac{1}{3}\\int (u^{3/4} - u^{-1/4})du$<br>$= \\frac{1}{3}\\left[ \\frac{u^{7/4}}{7/4} - \\frac{u^{3/4}}{3/4} \\right] + C = \\frac{4}{21}u^{7/4} - \\frac{4}{9}u^{3/4} + C$<br>$= \\frac{4}{21}(x^3 + 1)^{7/4} - \\frac{4}{9}(x^3 + 1)^{3/4} + C$。",
          "(2) 拆為兩項：$\\int \\frac{x^5}{x^8+1}dx - \\int \\frac{x}{x^8+1}dx$。<br>第一項：令 $t = x^4 \\implies dt = 4x^3 dx$（或分部），改為令 $w = x^2$ 統一觀察：<br>$\\int \\frac{x^5 dx}{(x^2)^4+1} - \\int \\frac{x dx}{(x^2)^4+1}$。令 $t = x^2 \\implies dt = 2x dx$：<br>$= \\frac{1}{2}\\int \\frac{t^2 - 1}{t^4 + 1} dt = \\frac{1}{2}\\int \\frac{1 - 1/t^2}{t^2 + 1/t^2} dt$。<br>注意到分子為 $d(t + 1/t)$，分母為 $(t + 1/t)^2 - 2$：<br>$= \\frac{1}{2}\\int \\frac{d(t + 1/t)}{(t + 1/t)^2 - (\\sqrt{2})^2} = \\frac{1}{4\\sqrt{2}}\\ln\\left|\\frac{t + 1/t - \\sqrt{2}}{t + 1/t + \\sqrt{2}}\\right| + C$<br>$= \\frac{1}{4\\sqrt{2}}\\ln\\left|\\frac{x^4 - \\sqrt{2}x^2 + 1}{x^4 + \\sqrt{2}x^2 + 1}\\right| + C$。",
          "(3) 分部積分：令 $u = \\ln x \\implies du = \\frac{1}{x}dx$；$dv = x^2 dx \\implies v = \\frac{x^3}{3}$。<br>$\\int x^2 \\ln x dx = \\frac{x^3}{3}\\ln x - \\int \\frac{x^3}{3} \\cdot \\frac{1}{x} dx = \\frac{x^3}{3}\\ln x - \\frac{1}{3}\\int x^2 dx$<br>$= \\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C$。"
        ],
        "ans": "(1) \\frac{4}{21}(x^3+1)^{7/4} - \\frac{4}{9}(x^3+1)^{3/4} + C；(2) \\frac{1}{4\\sqrt{2}}\\ln\\left|\\frac{x^4 - \\sqrt{2}x^2 + 1}{x^4 + \\sqrt{2}x^2 + 1}\\right| + C；(3) \\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C",
        "quickTip": "(2) 歐拉技巧：分子分母同除以 $t^2$ 湊 $d(t + 1/t)$，是競賽與自主招生極具含金量的秒解招式！"
      }
    },
    {
      "year": "2026",
      "paper": "專題四",
      "qNum": "解答題 第4題(4~6)",
      "topic": "進階不定積分 (指數三角循環分部、參數根式三角換元、對數複合)",
      "score": "12分",
      "q": "求下列各不定積分：<br>(4) $\\int e^{-2x}\\sin\\frac{x}{2} dx$；<br>(5) $\\int x\\sqrt{\\frac{x}{2a - x}} dx$ ($a > 0$)；<br>(6) $\\int \\frac{\\ln x}{x\\sqrt{1 + \\ln x}} dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\int e^{ax}\\sin(bx) dx = \\frac{e^{ax}}{a^2+b^2}(a\\sin bx - b\\cos bx) + C",
          "x = 2a\\sin^2\\theta \\implies \\frac{x}{2a-x} = \\tan^2\\theta",
          "u = \\sqrt{1+\\ln x} \\implies \\ln x = u^2 - 1"
        ],
        "points": [
          "<b>(4) 指數乘正弦速解公式</b>：套用經典公式 $a = -2, b = 1/2$，分母 $a^2+b^2 = 4 + 1/4 = 17/4$。",
          "<b>(5) 三角換元去根號</b>：$x = 2a\\sin^2\\theta$ 徹底消去根號。",
          "<b>(6) 整體代換根式</b>：令 $u = \\sqrt{1+\\ln x}$，則 $\\frac{dx}{x} = d(\\ln x) = 2u du$。"
        ],
        "pitfall": "(4) 分部積分需要兩次循環，直接用待定係數或經典結論速度提升 5 倍！"
      },
      "solution": {
        "thinking": "(4) 指數三角循環分部；(5) 根式三角換元；(6) 根式整體代換法。",
        "steps": [
          "(4) 方法一（經典公式法）：<br>公式：$\\int e^{\\alpha x}\\sin(\\beta x)dx = \\frac{e^{\\alpha x}}{\\alpha^2 + \\beta^2}(\\alpha\\sin\\beta x - \\beta\\cos\\beta x) + C$。<br>此處 $\\alpha = -2, \\beta = \\frac{1}{2}$，$\\alpha^2 + \\beta^2 = 4 + \\frac{1}{4} = \\frac{17}{4}$。<br>代入得：$\\frac{e^{-2x}}{17/4}\\left(-2\\sin\\frac{x}{2} - \\frac{1}{2}\\cos\\frac{x}{2}\\right) + C = -\\frac{2}{17}e^{-2x}\\left(4\\sin\\frac{x}{2} + \\cos\\frac{x}{2}\\right) + C$。",
          "(5) 令 $x = 2a\\sin^2\\theta$（$\\theta \\in [0, \\pi/2)$），則 $2a - x = 2a\\cos^2\\theta$。<br>根式化簡：$\\sqrt{\\frac{x}{2a-x}} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$。<br>$dx = 4a\\sin\\theta\\cos\\theta d\\theta$。<br>原式 $= \\int (2a\\sin^2\\theta)(\\tan\\theta)(4a\\sin\\theta\\cos\\theta) d\\theta = 8a^2 \\int \\sin^4\\theta d\\theta$。<br>由第 1 題結論 $\\int \\sin^4\\theta d\\theta = \\frac{3}{8}\\theta - \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C$：<br>$= 8a^2\\left[\\frac{3}{8}\\theta - \\frac{1}{2}\\sin\\theta\\cos\\theta + \\frac{1}{8}\\sin\\theta\\cos\\theta(\\cos^2\\theta - \\sin^2\\theta)\\right] + C$<br>回代 $\\sin\\theta = \\sqrt{\\frac{x}{2a}}, \\cos\\theta = \\sqrt{\\frac{2a-x}{2a}}, \\theta = \\arcsin\\sqrt{\\frac{x}{2a}}$ 即得。",
          "(6) 令 $u = \\sqrt{1 + \\ln x} \\implies u^2 = 1 + \\ln x \\implies \\ln x = u^2 - 1$。<br>兩邊微分：$\\frac{dx}{x} = 2u du$。<br>代入原式：<br>$\\int \\frac{\\ln x}{\\sqrt{1+\\ln x}} \\frac{dx}{x} = \\int \\frac{u^2 - 1}{u} (2u du) = 2\\int (u^2 - 1) du$<br>$= 2\\left(\\frac{u^3}{3} - u\\right) + C = \\frac{2}{3}u^3 - 2u + C$<br>$= \\frac{2}{3}(1 + \\ln x)^{3/2} - 2\\sqrt{1 + \\ln x} + C = \\frac{2}{3}(\\ln x - 2)\\sqrt{1 + \\ln x} + C$。"
        ],
        "ans": "(4) -\\frac{2}{17}e^{-2x}\\left(4\\sin\\frac{x}{2} + \\cos\\frac{x}{2}\\right) + C；(5) 3a^2\\arcsin\\sqrt{\\frac{x}{2a}} - \\frac{1}{2}(3a+x)\\sqrt{x(2a-x)} + C；(6) \\frac{2}{3}(\\ln x - 2)\\sqrt{1+\\ln x} + C",
        "quickTip": "(6) 換元 $u = \\sqrt{1+\\ln x}$ 後分母 $u$ 與 $2u du$ 的 $u$ 完美對消，直接化為多項式積分！"
      }
    }
  ]
});
})();
