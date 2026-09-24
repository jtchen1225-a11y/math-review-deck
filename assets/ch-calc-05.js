/* 2026 高三理組數學思維本 — 專題五 定積分與幾何 (14 題) - 支援 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題五 定積分與幾何",
  "year": "2026",
  "paper": "專題五",
  "title": "專題五 定積分的運算、幾何面積與旋轉體體積",
  "color": "#e11d48",
  "sections": [
    "面積定積分表達式",
    "基礎定積分 2(1~4)",
    "絕對值定積分 3(1~2)",
    "曲線圍成面積 4(1~8)",
    "待定係數與切線面積 5~7",
    "旋轉體體積 8~10",
    "黎曼和、變上限方程與面積最值 11~13"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第1題",
      "topic": "多項式幾何面積的定積分分段表示式",
      "score": "6分",
      "q": "多項式函數 $f(x)$ 的圖形如圖所示（與 $x$ 軸交於 $(0,0), (1,0), (2,0), (3,0)$），試寫出 $f(x)$ 與 $x$ 軸所圍成之區域面積的定積分式子。<div style=\"text-align:center;margin:8px 0;\"><img src=\"img/p6_img1_166.jpeg\" style=\"max-height:140px;\" alt=\"f(x) 與 x 軸圍成之三塊黃色面積\" /></div>",
      "options": [],
      "knowledge": {
        "formulas": [
          "A = \\int_a^b |f(x)|dx",
          "A = \\int_{f \\ge 0} f(x)dx + \\int_{f < 0} (-f(x))dx"
        ],
        "points": [
          "<b>面積非負性</b>：$x$ 軸下方的區域，函數值為負，積分必須取相反數 $-f(x)$ 才能得到正面積。",
          "<b>區間逐段拆分</b>：$[0, 1]$ 在軸下方；$[1, 2]$ 在軸上方；$[2, 3]$ 在軸下方。"
        ],
        "pitfall": "切勿直接寫成 $\\int_0^3 f(x)dx$，代數積分正負抵消不是幾何面積！"
      },
      "solution": {
        "thinking": "觀察圖像在各區間的正負符號，將曲線下方區域的被積函數取負號以保證面積為正。",
        "steps": [
          "觀察題圖中多項式函數 $y = f(x)$ 與 $x$ 軸的交點：分別為 $x = 0, 1, 2, 3$。",
          "分析各區間內函數的符號（高於或低於 $x$ 軸）：<br>① 在區間 $[0, 1]$ 內：曲線在 $x$ 軸下方，即 $f(x) \\le 0$，面積為 $-\\int_0^1 f(x)dx$；<br>② 在區間 $[1, 2]$ 內：曲線在 $x$ 軸上方，即 $f(x) \\ge 0$，面積為 $\\int_1^2 f(x)dx$；<br>③ 在區間 $[2, 3]$ 內：曲線在 $x$ 軸下方，即 $f(x) \\le 0$，面積為 $-\\int_2^3 f(x)dx$。",
          "因此，所圍成之區域的總面積定積分式子為：<br>$A = -\\int_0^1 f(x)dx + \\int_1^2 f(x)dx - \\int_2^3 f(x)dx$（或統記為 $\\int_0^3 |f(x)|dx$）。"
        ],
        "ans": "$A = -\\int_0^1 f(x)dx + \\int_1^2 f(x)dx - \\int_2^3 f(x)dx \\quad \\left(\\text{或 } \\int_0^3 |f(x)|dx\\right)$",
        "quickTip": "軸下加負號、軸上取正號，分段求和：$-\\int_0^1 + \\int_1^2 - \\int_2^3$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>A=−</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>1</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>f(x)dx+</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>1</m:t></m:r></m:sub><m:sup><m:r><m:t>2</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>f(x)dx−</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>2</m:t></m:r></m:sub><m:sup><m:r><m:t>3</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>f(x)dx</m:t></m:r><m:r><m:t>(或</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>3</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>|f(x)|dx)</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第2題",
      "topic": "多項式定積分基礎運算與上下限性質",
      "score": "10分",
      "q": "求下列定積分的值：<br>(1) $\\int_1^3 (x^2 - 3) dx$；<br>(2) $\\int_5^2 (4x^3 - x + 1) dx$；<br>(3) $\\int_1^{-2} (y - 1)^3 dy$；<br>(4) $\\int_3^1 (3x^2 + 5x - 8) dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\int_a^b f(x)dx = F(b) - F(a)",
          "\\int_b^a f(x)dx = -\\int_a^b f(x)dx"
        ],
        "points": [
          "<b>微積分基本定理（牛頓-萊布尼茨公式）</b>：先求原函數，再代入「上限值減下限值」。",
          "<b>上下限倒置</b>：(2)、(3)、(4) 的上限小於下限，嚴格按 $F(\\text{上限}) - F(\\text{下限})$ 計算或調換上下限添負號。"
        ],
        "pitfall": "上下限反轉時符號容易出錯，嚴格遵循 $F(b) - F(a)$ 最不容易出錯。"
      },
      "solution": {
        "thinking": "分別求出各題原函數，嚴格代入上下限計算。",
        "steps": [
          "(1) 原函數為 $\\frac{x^3}{3} - 3x$。<br>$\\int_1^3 (x^2 - 3) dx = \\left[ \\frac{x^3}{3} - 3x \\right]_1^3 = (9 - 9) - \\left(\\frac{1}{3} - 3\\right) = 0 - \\left(-\\frac{8}{3}\\right) = \\frac{8}{3}$。",
          "(2) 原函數為 $x^4 - \\frac{x^2}{2} + x$。<br>$\\int_5^2 (4x^3 - x + 1) dx = \\left[ x^4 - \\frac{x^2}{2} + x \\right]_5^2 = \\left(16 - 2 + 2\\right) - \\left(625 - \\frac{25}{2} + 5\\right)$<br>$= 16 - (630 - 12.5) = 16 - 617.5 = -601.5 = -\\frac{1203}{2}$。",
          "(3) 原函數為 $\\frac{(y-1)^4}{4}$。<br>$\\int_1^{-2} (y - 1)^3 dy = \\left[ \\frac{(y-1)^4}{4} \\right]_1^{-2} = \\frac{(-2 - 1)^4}{4} - \\frac{(1 - 1)^4}{4} = \\frac{(-3)^4}{4} - 0 = \\frac{81}{4}$。",
          "(4) 原函數為 $x^3 + \\frac{5}{2}x^2 - 8x$。<br>$\\int_3^1 (3x^2 + 5x - 8) dx = \\left[ x^3 + \\frac{5}{2}x^2 - 8x \\right]_3^1$<br>$= \\left(1 + \\frac{5}{2} - 8\\right) - \\left(27 + \\frac{5}{2}(9) - 24\\right) = \\left(-\\frac{9}{2}\\right) - \\left(3 + \\frac{45}{2}\\right) = -\\frac{9}{2} - \\frac{51}{2} = -\\frac{60}{2} = -30$。"
        ],
        "ans": "(1) $\\frac{8}{3}$；(2) $-\\frac{1203}{2}$；(3) $\\frac{81}{4}$；(4) $-30$",
        "quickTip": "牛頓-萊布尼茨公式一步到位，分數通分細心即得滿分！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(1)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>8</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>$；(2)$−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1203</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>$；(3)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>81</m:t></m:r></m:num><m:den><m:r><m:t>4</m:t></m:r></m:den></m:f><m:r><m:t>$；(4)$−30$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第3題",
      "topic": "含絕對值函數的定積分 (分段積分與幾何法)",
      "score": "8分",
      "q": "求下列定積分的值：<br>(1) $\\int_{-3}^3 |2x + 1| dx$；<br>(2) $\\int_0^3 (|x - 2| + 2x) dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "|u| = \\begin{cases} u, & u \\ge 0 \\\\ -u, & u < 0 \\end{cases}",
          "\\int_a^b |f(x)|dx = \\int_a^c (-f(x))dx + \\int_c^b f(x)dx"
        ],
        "points": [
          "<b>零點分段</b>：(1) 的零點為 $x = -1/2$；(2) 的零點為 $x = 2$。",
          "<b>幾何三角形面積法速算</b>：一次函數絕對值的定積分本質是兩個直角三角形的面積之和！"
        ],
        "pitfall": "去絕對值時負區間必須整體添負號：$-(2x+1) = -2x - 1$。"
      },
      "solution": {
        "thinking": "以絕對值內部表達式的零點為界拆分區間，分別去絕對值後求定積分；亦可用幾何三角形面積速算驗證。",
        "steps": [
          "(1) 令 $2x + 1 = 0 \\implies x = -\\frac{1}{2} \\in [-3, 3]$。<br>分兩段積分：<br>$\\int_{-3}^3 |2x + 1| dx = \\int_{-3}^{-1/2} -(2x + 1) dx + \\int_{-1/2}^3 (2x + 1) dx$<br>幾何法（兩直角三角形面積之和）：<br>左側三角形底邊為 $-1/2 - (-3) = 2.5$，高為 $|2(-3)+1| = 5$，面積為 $\\frac{1}{2} \\times 2.5 \\times 5 = 6.25 = \\frac{25}{4}$；<br>右側三角形底邊為 $3 - (-1/2) = 3.5$，高為 $2(3)+1 = 7$，面積為 $\\frac{1}{2} \\times 3.5 \\times 7 = 12.25 = \\frac{49}{4}$；<br>總值為：$\\frac{25}{4} + \\frac{49}{4} = \\frac{74}{4} = \\frac{37}{2} = 18.5$。",
          "(2) 拆開積分：$\\int_0^3 (|x - 2| + 2x) dx = \\int_0^3 |x - 2| dx + \\int_0^3 2x dx$。<br>第一部分 $\\int_0^3 |x - 2| dx$：零點在 $x = 2$，兩三角形底分別為 2 和 1，高分別為 2 和 1：<br>面積為 $\\frac{1}{2}(2)(2) + \\frac{1}{2}(1)(1) = 2 + 0.5 = 2.5 = \\frac{5}{2}$；<br>第二部分 $\\int_0^3 2x dx = [x^2]_0^3 = 9$；<br>總和：$\\frac{5}{2} + 9 = \\frac{23}{2} = 11.5$。"
        ],
        "ans": "(1) $\\frac{37}{2} \\quad (\\text{或 } 18.5)$；(2) $\\frac{23}{2} \\quad (\\text{或 } 11.5)$",
        "quickTip": "一次絕對值定積分直接用幾何三角形面積相加，10 秒口算得出答案！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(1)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>37</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>(或18.5)$；(2)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>23</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>(或11.5)$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第4題(1~4)",
      "topic": "平面圖形面積定積分 (拋物線、二次多項式、多線交集)",
      "score": "12分",
      "q": "寫出下列給定曲線所圍成的圖形面積的定積分運算式及其值：<br>(1) $y = x, \\quad y = \\sqrt{x}$；<br>(2) $y = 3 - 2x - x^2, \\quad x$ 軸；<br>(3) $y = 2x + 3, \\quad y = x^2$；<br>(4) $y = x^2, \\quad y = x, \\quad y = 2x$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "A = \\int_a^b [y_{\\text{上}}(x) - y_{\\text{下}}(x)] dx",
          "\\text{拋物線與弦圍成面積：} A = \\frac{|a|}{6}(x_2 - x_1)^3 \\quad (\\text{阿基米德公式})"
        ],
        "points": [
          "<b>求交點確定上下限</b>：聯立兩曲線方程解交點橫坐標。",
          "<b>判斷上下曲線</b>：在上方的曲線減去在下方的曲線。",
          "<b>阿基米德秒殺公式</b>：二次拋物線與直線交於兩點時，面積必為 $\\frac{|a|}{6}(x_2 - x_1)^3$！"
        ],
        "pitfall": "(4) 三條線圍成的區域需分段積分：$[0, 1]$ 與 $[1, 2]$。"
      },
      "solution": {
        "thinking": "聯立方程求解交點確定積分上下限，用上方曲線減去下方曲線求定積分。",
        "steps": [
          "(1) 聯立 $x = \\sqrt{x} \\implies x^2 - x = 0 \\implies x = 0, 1$。<br>在 $[0, 1]$ 上 $\\sqrt{x} \\ge x$。<br>定積分式：$A = \\int_0^1 (\\sqrt{x} - x) dx = \\left[ \\frac{2}{3}x^{3/2} - \\frac{x^2}{2} \\right]_0^1 = \\frac{2}{3} - \\frac{1}{2} = \\frac{1}{6}$。",
          "(2) 拋物線與 $x$ 軸交點：$3 - 2x - x^2 = 0 \\implies (x+3)(x-1) = 0 \\implies x = -3, 1$。<br>在 $[-3, 1]$ 上 $y \\ge 0$。<br>定積分式：$A = \\int_{-3}^1 (3 - 2x - x^2) dx = \\left[ 3x - x^2 - \\frac{x^3}{3} \\right]_{-3}^1 = \\frac{5}{3} - (-9) = \\frac{32}{3}$。<br>（秒殺驗證：$\\frac{1}{6}(1 - (-3))^3 = \\frac{4^3}{6} = \\frac{64}{6} = \\frac{32}{3}$）。",
          "(3) 聯立 $x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0 \\implies x = -1, 3$。<br>在 $[-1, 3]$ 上直線在拋物線上方：$2x + 3 \\ge x^2$。<br>定積分式：$A = \\int_{-1}^3 (2x + 3 - x^2) dx = \\left[ x^2 + 3x - \\frac{x^3}{3} \\right]_{-1}^3 = 9 - \\left(-\\frac{5}{3}\\right) = \\frac{32}{3}$。<br>（秒殺驗證：$\\frac{1}{6}(3 - (-1))^3 = \\frac{64}{6} = \\frac{32}{3}$）。",
          "(4) 交點分析：$y=2x$ 與 $y=x^2$ 交於 $(0,0)$ 和 $(2,4)$；$y=x$ 與 $y=x^2$ 交於 $(0,0)$ 和 $(1,1)$。<br>三線圍成第一象限區域，需在 $x=1$ 處分段：<br>① 在 $x \\in [0, 1]$ 內，上邊界為 $y=2x$，下邊界為 $y=x$：$A_1 = \\int_0^1 (2x - x)dx = \\int_0^1 x dx = \\frac{1}{2}$；<br>② 在 $x \\in [1, 2]$ 內，上邊界為 $y=2x$，下邊界為 $y=x^2$：$A_2 = \\int_1^2 (2x - x^2)dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_1^2 = \\left(4 - \\frac{8}{3}\\right) - \\left(1 - \\frac{1}{3}\\right) = \\frac{4}{3} - \\frac{2}{3} = \\frac{2}{3}$；<br>總面積：$A = A_1 + A_2 = \\frac{1}{2} + \\frac{2}{3} = \\frac{7}{6}$。"
        ],
        "ans": "(1) $\\int_0^1 (\\sqrt{x}-x)dx = \\frac{1}{6}$；(2) $\\int_{-3}^1 (3-2x-x^2)dx = \\frac{32}{3}$；(3) $\\int_{-1}^3 (2x+3-x^2)dx = \\frac{32}{3}$；(4) $\\int_0^1 (2x-x)dx + \\int_1^2 (2x-x^2)dx = \\frac{7}{6}$",
        "quickTip": "阿基米德拋物線弦面積公式 $\\frac{|a|}{6}(\\Delta x)^3$ 秒殺 (2) 和 (3) 均為 $32/3$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(1)$</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>1</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>(</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>x</m:t></m:r></m:e></m:rad><m:r><m:t>−x)dx=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:r><m:t>$；(2)$</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>−3</m:t></m:r></m:sub><m:sup><m:r><m:t>1</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>(3−2x−</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>)dx=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>32</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>$；(3)$</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>−1</m:t></m:r></m:sub><m:sup><m:r><m:t>3</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>(2x+3−</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>)dx=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>32</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>$；(4)$</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>1</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>(2x−x)dx+</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>1</m:t></m:r></m:sub><m:sup><m:r><m:t>2</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>(2x−</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>)dx=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>7</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:r><m:t>$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第4題(5~8)",
      "topic": "平面圖形面積定積分 (雙拋物線對稱、反比例與三次奇函數)",
      "score": "12分",
      "q": "寫出下列給定曲線所圍成的圖形面積的定積分運算式及其值：<br>(5) $y = -x^2 + 2x + 1, \\quad y = 1$；<br>(6) $y^2 = 4(x - 1), \\quad y^2 = 4(2 - x)$；<br>(7) $y = \\frac{x^2}{2}, \\quad y = \\frac{1}{1 + x^2}, \\quad x = \\pm\\sqrt{3}$；<br>(8) $y = x(x - 3)(x + 3), \\quad x$ 軸。",
      "options": [],
      "knowledge": {
        "formulas": [
          "A = \\int_{y_1}^{y_2} [x_{\\text{右}}(y) - x_{\\text{左}}(y)] dy \\quad (\\text{對 y 積分})",
          "\\int \\frac{dx}{1+x^2} = \\arctan x + C"
        ],
        "points": [
          "<b>(6) 對 y 積分更簡捷</b>：對稱交於 $y = \\pm\\sqrt{2}$，利用 $x_{\\text{右}} - x_{\\text{左}}$ 一次積分完成。",
          "<b>(7) 關於 y 軸對稱</b>：交點在 $x = \\pm 1$，利用對稱性計算正半軸的兩段面積再乘 2。",
          "<b>(8) 奇函數關於原點對稱</b>：兩瓣面積完全相等，計算右半瓣乘 2。"
        ],
        "pitfall": "(8) 奇函數在 $[-3, 3]$ 上的代數積分為 0，幾何面積必須取絕對值！"
      },
      "solution": {
        "thinking": "利用幾何對稱性簡化運算，對 (6) 採用對 $y$ 積分，對 (7) 分段積分，對 (8) 算一半倍增。",
        "steps": [
          "(5) 聯立 $-x^2 + 2x + 1 = 1 \\implies x(2 - x) = 0 \\implies x = 0, 2$。<br>定積分式：$A = \\int_0^2 (-x^2 + 2x + 1 - 1) dx = \\int_0^2 (-x^2 + 2x) dx = \\left[ -\\frac{x^3}{3} + x^2 \\right]_0^2 = -\\frac{8}{3} + 4 = \\frac{4}{3}$。<br>（阿基米德公式：$\\frac{1}{6}(2 - 0)^3 = \\frac{8}{6} = \\frac{4}{3}$）。",
          "(6) 兩拋物線交點：$4(x - 1) = 4(2 - x) \\implies x = \\frac{3}{2}$。<br>代入得 $y^2 = 4(3/2 - 1) = 2 \\implies y = \\pm\\sqrt{2}$。<br>對 $y$ 積分（右邊曲線為 $x = 2 - y^2/4$，左邊曲線為 $x = 1 + y^2/4$）：<br>$A = \\int_{-\\sqrt{2}}^{\\sqrt{2}} \\left[\\left(2 - \\frac{y^2}{4}\\right) - \\left(1 + \\frac{y^2}{4}\\right)\\right] dy = 2\\int_0^{\\sqrt{2}} \\left(1 - \\frac{y^2}{2}\\right) dy$<br>$= 2\\left[ y - \\frac{y^3}{6} \\right]_0^{\\sqrt{2}} = 2\\left( \\sqrt{2} - \\frac{2\\sqrt{2}}{6} \\right) = 2\\left( \\frac{2\\sqrt{2}}{3} \\right) = \\frac{4\\sqrt{2}}{3}$。",
          "(7) 曲線交點：$\\frac{x^2}{2} = \\frac{1}{1+x^2} \\implies x^4 + x^2 - 2 = 0 \\implies x^2 = 1 \\implies x = \\pm 1$。<br>由對稱性，總面積 $A = 2(A_1 + A_2)$：<br>在 $[0, 1]$ 內，$\\frac{1}{1+x^2} \\ge \\frac{x^2}{2}$：$A_1 = \\int_0^1 \\left(\\frac{1}{1+x^2} - \\frac{x^2}{2}\\right)dx = \\left[ \\arctan x - \\frac{x^3}{6} \\right]_0^1 = \\frac{\\pi}{4} - \\frac{1}{6}$；<br>在 $[1, \\sqrt{3}]$ 內，$\\frac{x^2}{2} \\ge \\frac{1}{1+x^2}$：$A_2 = \\int_1^{\\sqrt{3}} \\left(\\frac{x^2}{2} - \\frac{1}{1+x^2}\\right)dx = \\left[ \\frac{x^3}{6} - \\arctan x \\right]_1^{\\sqrt{3}} = \\left(\\frac{\\sqrt{3}}{2} - \\frac{\\pi}{3}\\right) - \\left(\\frac{1}{6} - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{3}}{2} - \\frac{\\pi}{12} - \\frac{1}{6}$；<br>$A_1 + A_2 = \\frac{\\sqrt{3}}{2} + \\frac{\\pi}{6} - \\frac{1}{3} \\implies A = 2(A_1 + A_2) = \\sqrt{3} + \\frac{\\pi}{3} - \\frac{2}{3}$。",
          "(8) 函數 $y = x^3 - 9x$ 與 $x$ 軸交於 $x = -3, 0, 3$。為奇函數，兩瓣面積相等：<br>$A = 2\\int_0^3 (0 - (x^3 - 9x)) dx = 2\\int_0^3 (9x - x^3) dx = 2\\left[ \\frac{9}{2}x^2 - \\frac{x^4}{4} \\right]_0^3 = 2\\left( \\frac{81}{2} - \\frac{81}{4} \\right) = 2\\left( \\frac{81}{4} \\right) = \\frac{81}{2} = 40.5$。"
        ],
        "ans": "(5) $\\frac{4}{3}$；(6) $\\frac{4\\sqrt{2}}{3}$；(7) $\\sqrt{3} + \\frac{\\pi}{3} - \\frac{2}{3}$；(8) $\\frac{81}{2}$",
        "quickTip": "(6) 對 y 積分，一步出 $4\\sqrt{2}/3$；(8) 奇函數算一半乘 2 得 $81/2$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(5)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>4</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>$；(6)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>4</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>2</m:t></m:r></m:e></m:rad></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>$；(7)$</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>π</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>2</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>$；(8)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>81</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第5題",
      "topic": "待定二次函數定積分計算",
      "score": "8分",
      "q": "設 $f(x)$ 是二次函數，滿足 $f(1) = 0$，$f(2) = 0$，$f(3) = 2$，求 $\\int_0^4 f(x) dx$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f(x) = c(x - 1)(x - 2) = c(x^2 - 3x + 2)",
          "\\int_0^4 (x^2 - 3x + 2)dx = \\left[ \\frac{x^3}{3} - \\frac{3}{2}x^2 + 2x \\right]_0^4"
        ],
        "points": [
          "<b>零點設式法</b>：已知 $x = 1, 2$ 為兩根，直接設 $f(x) = c(x-1)(x-2)$ 比設一般式快得多！",
          "<b>代入第三點求係數</b>：$f(3) = c(2)(1) = 2 \\implies c = 1$。"
        ],
        "pitfall": "代入上限 4 時分數計算要準確：$64/3 - 24 + 8 = 64/3 - 16 = 16/3$。"
      },
      "solution": {
        "thinking": "利用二次函數的兩根設雙根式求出解析式，再對區間 $[0, 4]$ 進行定積分運算。",
        "steps": [
          "第一步：求二次函數解析式 $f(x)$：<br>因為 $f(1) = 0$ 且 $f(2) = 0$，故 $x = 1, 2$ 是 $f(x) = 0$ 的兩根。<br>可設 $f(x) = c(x - 1)(x - 2) = c(x^2 - 3x + 2)$（其中 $c \\ne 0$）。<br>由 $f(3) = 2$ 代入得：$c(3 - 1)(3 - 2) = 2 \\implies 2c = 2 \\implies c = 1$。<br>因此 $f(x) = (x - 1)(x - 2) = x^2 - 3x + 2$。",
          "第二步：計算定積分 $\\int_0^4 f(x) dx$：<br>$\\int_0^4 (x^2 - 3x + 2) dx = \\left[ \\frac{x^3}{3} - \\frac{3}{2}x^2 + 2x \\right]_0^4$。<br>代入上限 4：<br>$\\frac{4^3}{3} - \\frac{3}{2}(4^2) + 2(4) = \\frac{64}{3} - \\frac{3}{2}(16) + 8 = \\frac{64}{3} - 24 + 8 = \\frac{64}{3} - 16$。<br>通分得：$\\frac{64 - 48}{3} = \\frac{16}{3}$。"
        ],
        "ans": "$\\frac{16}{3}$",
        "quickTip": "$f(x) = (x-1)(x-2) = x^2-3x+2$，積分 $[x^3/3 - 1.5x^2 + 2x]_0^4 = 64/3 - 16 = 16/3$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>16</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第6題",
      "topic": "拋物線與兩條切線圍成面積",
      "score": "10分",
      "q": "求拋物線 $y = -x^2 + 4x - 3$ 及其在點 $(0, -3)$ 和 $(4, -3)$ 處的切線所圍成的圖形的面積。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y' = -2x + 4",
          "\\text{阿基米德切線三角形面積定理：拋物線與兩切線所圍面積為切線三角形面積的 } \\frac{1}{3}"
        ],
        "points": [
          "<b>切線方程</b>：在 $(0, -3)$ 處切線為 $y = 4x - 3$；在 $(4, -3)$ 處切線為 $y = -4x + 13$。",
          "<b>切線交點</b>：聯立得交點為 $(2, 5)$，剛好落在對稱軸 $x = 2$ 上！",
          "<b>分段積分</b>：以 $x = 2$ 為界分為 $[0, 2]$ 與 $[2, 4]$ 兩段。"
        ],
        "pitfall": "兩切線圍成的區域上方是折線（切線），下方是拋物線，積分時別漏了分段。"
      },
      "solution": {
        "thinking": "求出兩切線方程及其交點，利用左右對稱性將區域分為兩段定積分，或套用阿基米德切線面積定理秒殺。",
        "steps": [
          "求切線斜率與方程：<br>求導：$y' = -2x + 4$。<br>① 在點 $(0, -3)$ 處：斜率 $k_1 = y'(0) = 4$。切線方程為 $y - (-3) = 4(x - 0) \\implies y = 4x - 3$；<br>② 在點 $(4, -3)$ 處：斜率 $k_2 = y'(4) = -4$。切線方程為 $y - (-3) = -4(x - 4) \\implies y = -4x + 13$。",
          "求兩切線交點：<br>聯立 $4x - 3 = -4x + 13 \\implies 8x = 16 \\implies x = 2$。代入得 $y = 4(2) - 3 = 5$。交點為 $(2, 5)$。",
          "計算面積：<br>由對稱性，總面積 $A = 2 \\int_0^2 [(4x - 3) - (-x^2 + 4x - 3)] dx$。<br>化簡被積函數：$(4x - 3) - (-x^2 + 4x - 3) = x^2$！<br>因此：$A = 2 \\int_0^2 x^2 dx = 2 \\left[ \\frac{x^3}{3} \\right]_0^2 = 2 \\times \\frac{8}{3} = \\frac{16}{3}$。<br>（注：若計算兩切點與交點組成的三角形面積 $S_{\\triangle} = \\frac{1}{2} \\times 4 \\times (5 - (-3)) = 16$，則所求面積 $A = \\frac{1}{3} S_{\\triangle} = \\frac{16}{3}$，完全吻合！）"
        ],
        "ans": "$\\frac{16}{3}$",
        "quickTip": "被積函數化簡為極簡的 $x^2$！$2 \\int_0^2 x^2 dx = 2(8/3) = 16/3$，絕美簡約！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>16</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第7題",
      "topic": "拋物線橫向切線與坐標軸圍成面積 (對 y 積分)",
      "score": "8分",
      "q": "求由拋物線 $(y - 2)^2 = x - 1$ 和與拋物線相切於縱坐標 $y_0 = 3$ 處的切線及 $x$ 軸所圍成的平面圖形的面積。",
      "options": [],
      "knowledge": {
        "formulas": [
          "x = (y - 2)^2 + 1",
          "\\frac{dx}{dy} = 2(y - 2)",
          "A = \\int_0^3 [x_{\\text{拋物線}}(y) - x_{\\text{切線}}(y)] dy"
        ],
        "points": [
          "<b>對 y 積分壓倒性優勢</b>：拋物線開口向右，對 $y$ 積分無需分段，直接從 $y = 0$ 積到 $y = 3$！",
          "<b>求切線在 y 坐標下的方程</b>：在 $y_0 = 3$ 處，$x_0 = (3-2)^2 + 1 = 2$。$\\frac{dx}{dy} = 2(3-2) = 2$。切線為 $x - 2 = 2(y - 3) \\implies x = 2y - 4$。"
        ],
        "pitfall": "若對 $x$ 積分需要分兩段且含根號運算，極易算錯；強烈推薦對 $y$ 積分！"
      },
      "solution": {
        "thinking": "將 $x$ 表為 $y$ 的函數，求出切線方程 $x(y)$，以 $y$ 為積分變量從 $y=0$ 到 $y=3$ 一次定積分求解。",
        "steps": [
          "確定切點與切線方程：<br>拋物線方程為 $x = (y - 2)^2 + 1$。<br>當縱坐標 $y_0 = 3$ 時，橫坐標 $x_0 = (3 - 2)^2 + 1 = 2$，切點為 $(2, 3)$。<br>對 $y$ 求導：$\\frac{dx}{dy} = 2(y - 2)$。在 $y = 3$ 處斜率為 $\\left.\\frac{dx}{dy}\\right|_{y=3} = 2(3 - 2) = 2$。<br>由點斜式寫出切線方程：$x - 2 = 2(y - 3) \\implies x = 2y - 4$。",
          "確定積分區間與邊界：<br>下邊界為 $x$ 軸（即直線 $y = 0$）；上邊界為切點縱坐標 $y = 3$。<br>在區間 $y \\in [0, 3]$ 內，拋物線曲線在右側，切線在左側：<br>$x_{\\text{右}} - x_{\\text{左}} = [(y - 2)^2 + 1] - (2y - 4) = y^2 - 4y + 5 - 2y + 4 = y^2 - 6y + 9 = (y - 3)^2$！",
          "計算定積分：<br>$A = \\int_0^3 (y - 3)^2 dy = \\left[ \\frac{(y - 3)^3}{3} \\right]_0^3 = \\frac{(3 - 3)^3}{3} - \\frac{(0 - 3)^3}{3} = 0 - \\left( -\\frac{27}{3} \\right) = 9$。"
        ],
        "ans": "9",
        "quickTip": "被積函數化簡為完美平方式 $(y-3)^2$！$\\int_0^3 (y-3)^2 dy = -(-27/3) = 9$。絕妙技巧！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>9</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第8題",
      "topic": "旋轉體體積 — 繞 y 軸旋轉碗狀立體容積與材料體積",
      "score": "10分",
      "q": "曲線 $y = \\frac{5}{4}x^2$ 和 $y = x^2 + 9$ 所圍成的區域繞著 $y$ 軸旋轉，得一碗狀立體：<br>(a) 試求此碗狀立體的容積；<br>(b) 試求構成此碗狀立體的材料的體積。",
      "options": [],
      "knowledge": {
        "formulas": [
          "V = \\pi \\int_{y_1}^{y_2} x^2 dy",
          "V_{\\text{材料}} = V_{\\text{外體積}} - V_{\\text{容積}}"
        ],
        "points": [
          "<b>求交點確定頂部邊界</b>：$\\frac{5}{4}x^2 = x^2 + 9 \\implies x^2 = 36 \\implies y = 45$。",
          "<b>容積（內腔體積）</b>：由內壁 $y = x^2 + 9$ 從底部 $y = 9$ 到頂部 $y = 45$ 旋轉形成。",
          "<b>外體積</b>：由外壁 $y = \\frac{5}{4}x^2$ 從頂點 $y = 0$ 到頂部 $y = 45$ 旋轉形成。"
        ],
        "pitfall": "內壁頂點在 $(0, 9)$，容積積分下限是 9 不是 0。"
      },
      "solution": {
        "thinking": "聯立解出碗頂交點高度 $y=45$；容積為內壁繞 $y$ 軸旋轉體積；材料體積為外壁總旋轉體積減去內腔容積。",
        "steps": [
          "求解兩曲線交點（碗的頂部邊緣）：<br>聯立 $\\frac{5}{4}x^2 = x^2 + 9 \\implies \\frac{1}{4}x^2 = 9 \\implies x^2 = 36$。<br>頂部高度為 $y = 36 + 9 = 45$。",
          "(a) 碗狀立體的容積（即內壁旋轉所圍成的內部空腔體積）：<br>內壁方程為 $y = x^2 + 9 \\implies x^2 = y - 9$（底部位於 $y = 9$，頂部位於 $y = 45$）。<br>$V_{\\text{容積}} = \\pi \\int_9^{45} x^2 dy = \\pi \\int_9^{45} (y - 9) dy = \\pi \\left[ \\frac{(y - 9)^2}{2} \\right]_9^{45}$<br>$= \\pi \\left( \\frac{(45 - 9)^2}{2} - 0 \\right) = \\pi \\times \\frac{36^2}{2} = \\pi \\times \\frac{1296}{2} = 648\\pi$。",
          "(b) 構成碗狀立體的材料體積（即外壁旋轉體積減去內腔容積）：<br>外壁方程為 $y = \\frac{5}{4}x^2 \\implies x^2 = \\frac{4}{5}y$（底部位於 $y = 0$，頂部位於 $y = 45$）。<br>外體積為：<br>$V_{\\text{外}} = \\pi \\int_0^{45} \\frac{4}{5}y dy = \\frac{4\\pi}{5} \\left[ \\frac{y^2}{2} \\right]_0^{45} = \\frac{2\\pi}{5} \\times 45^2 = \\frac{2\\pi}{5} \\times 2025 = 810\\pi$。<br>材料體積為：<br>$V_{\\text{材料}} = V_{\\text{外}} - V_{\\text{容積}} = 810\\pi - 648\\pi = 162\\pi$。"
        ],
        "ans": "(a) 容積為 $648\\pi$；(b) 材料體積為 $162\\pi$",
        "quickTip": "圓柱殼法或截面圓法：內腔 $36^2 / 2 \\times \\pi = 648\\pi$，外體積 $810\\pi$，相減得 $162\\pi$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)容積為$648π$；(b)材料體積為$162π$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第9題",
      "topic": "旋轉體體積 — 繞 y 軸旋轉 (圓柱殼法與圓環法)",
      "score": "8分",
      "q": "計算由曲線 $y = 25 - x^2$ 和直線 $x = 3$ 及 $y = 0$ 所圍成區域繞 $y$ 軸旋轉而成的立體的體積。",
      "options": [],
      "knowledge": {
        "formulas": [
          "V = 2\\pi \\int_a^b x \\cdot y(x) dx \\quad (\\text{圓柱殼法，繞 y 軸})",
          "V = \\pi \\int_c^d (x_{\\text{外}}^2 - x_{\\text{內}}^2) dy \\quad (\\text{圓環法})"
        ],
        "points": [
          "<b>圓柱殼法極速秒殺</b>：繞 $y$ 軸旋轉且已知 $y(x)$ 時，公式 $V = 2\\pi \\int x y dx$ 無需反求 $x(y)$！",
          "<b>邊界範圍</b>：曲線 $y = 25 - x^2$ 與 $x$ 軸交於 $x = 5$，積分區間為 $[3, 5]$。"
        ],
        "pitfall": "積分區間是 $x \\in [3, 5]$，切勿從 0 開始積。"
      },
      "solution": {
        "thinking": "利用圓柱殼法公式 $V = 2\\pi \\int x y dx$ 一步求出繞 $y$ 軸旋轉體積。",
        "steps": [
          "確定平面區域範圍：<br>曲線 $y = 25 - x^2$ 與 $x$ 軸（$y = 0$）在第一象限的交點為 $x = 5$。<br>區域在 $x$ 方向的範圍為 $x \\in [3, 5]$，高度為 $y = 25 - x^2$。",
          "採用圓柱殼法（Shell Method）繞 $y$ 軸旋轉：<br>$V = 2\\pi \\int_3^5 x \\cdot y(x) dx = 2\\pi \\int_3^5 x(25 - x^2) dx$。",
          "計算定積分：<br>$\\int_3^5 (25x - x^3) dx = \\left[ \\frac{25}{2}x^2 - \\frac{x^4}{4} \\right]_3^5$。<br>代入上限 5：$\\frac{25}{2}(25) - \\frac{625}{4} = \\frac{625}{2} - \\frac{625}{4} = \\frac{625}{4}$；<br>代入下限 3：$\\frac{25}{2}(9) - \\frac{81}{4} = \\frac{225}{2} - \\frac{81}{4} = \\frac{450 - 81}{4} = \\frac{369}{4}$；<br>兩者相減：$\\frac{625 - 369}{4} = \\frac{256}{4} = 64$。",
          "乘上外層常數 $2\\pi$：<br>$V = 2\\pi \\times 64 = 128\\pi$。"
        ],
        "ans": "$128\\pi$",
        "quickTip": "圓柱殼法：$2\\pi \\int_3^5 (25x - x^3)dx = 2\\pi \\times 64 = 128\\pi$。運算乾淨俐落！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>128π</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第10題",
      "topic": "旋轉體體積 — 繞 x 軸旋轉墊圈法分段運算",
      "score": "10分",
      "q": "求由曲線 $y = x^2$、$y = \\frac{1}{x^2}$ 及 $y = 4$ 所圍成的區域繞著 $x$ 軸旋轉所得的旋轉體的體積。",
      "options": [],
      "knowledge": {
        "formulas": [
          "V = \\pi \\int_a^b (y_{\\text{外}}^2 - y_{\\text{內}}^2) dx \\quad (\\text{墊圈法})",
          "\\text{交點：} x^2 = 4 \\implies x = 2, \\quad \\frac{1}{x^2} = 4 \\implies x = \\frac{1}{2}, \\quad x^2 = \\frac{1}{x^2} \\implies x = 1"
        ],
        "points": [
          "<b>區域交點確定</b>：第一象限內三條線在 $x = 1/2, 1, 2$ 處交匯。",
          "<b>分段墊圈法</b>：在 $[1/2, 1]$ 內外半徑為 4，內半徑為 $1/x^2$；在 $[1, 2]$ 內外半徑為 4，內半徑為 $x^2$。"
        ],
        "pitfall": "內邊界曲線在 $x=1$ 處交替，必須分段求積分！"
      },
      "solution": {
        "thinking": "在第一象限分析三個交點橫坐標，將區域分為兩段，利用墊圈法（大圓減小圓）求繞 $x$ 軸旋轉體積。",
        "steps": [
          "第一象限交點分析：<br>① $y = \\frac{1}{x^2}$ 與 $y = 4$ 交於 $x = \\frac{1}{2}$；<br>② $y = \\frac{1}{x^2}$ 與 $y = x^2$ 交於 $x = 1$；<br>③ $y = x^2$ 與 $y = 4$ 交於 $x = 2$。<br>在第一象限內，上邊界恆為 $y = 4$；下邊界在 $[1/2, 1]$ 上為 $y = 1/x^2$，在 $[1, 2]$ 上為 $y = x^2$。",
          "分段運用繞 $x$ 軸旋轉的墊圈法：<br>$V = \\pi \\int_{1/2}^1 \\left(4^2 - \\left(\\frac{1}{x^2}\\right)^2\\right) dx + \\pi \\int_1^2 (4^2 - (x^2)^2) dx$。",
          "計算第一段積分：<br>$\\int_{1/2}^1 (16 - x^{-4}) dx = \\left[ 16x + \\frac{1}{3}x^{-3} \\right]_{1/2}^1 = \\left(16 + \\frac{1}{3}\\right) - \\left(8 + \\frac{8}{3}\\right) = 8 - \\frac{7}{3} = \\frac{17}{3}$。",
          "計算第二段積分：<br>$\\int_1^2 (16 - x^4) dx = \\left[ 16x - \\frac{x^5}{5} \\right]_1^2 = \\left(32 - \\frac{32}{5}\\right) - \\left(16 - \\frac{1}{5}\\right) = 16 - \\frac{31}{5} = \\frac{49}{5}$。",
          "兩段相加：<br>$\\frac{17}{3} + \\frac{49}{5} = \\frac{85 + 147}{15} = \\frac{232}{15}$。<br>故總旋轉體積為 $V = \\frac{232\\pi}{15}$。"
        ],
        "ans": "$\\frac{232\\pi}{15}$",
        "quickTip": "墊圈法分段：$\\pi\\left(\\frac{17}{3} + \\frac{49}{5}\\right) = \\frac{232\\pi}{15}$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>232π</m:t></m:r></m:num><m:den><m:r><m:t>15</m:t></m:r></m:den></m:f></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第11題",
      "topic": "黎曼和極限化為定積分計算 (單位圓與圓面積)",
      "score": "10分",
      "q": "將下列極限換成定積分，並計算出極限值：<br>(1) $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\sqrt{1 - \\left(\\frac{k}{n}\\right)^2}$；<br>(2) $\\lim_{n \\to \\infty} \\frac{4}{n^2} \\sum_{k=1}^n \\sqrt{16n^2 - (4k)^2}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n f\\left(\\frac{k}{n}\\right) = \\int_0^1 f(x) dx",
          "\\int_0^1 \\sqrt{1 - x^2} dx = \\frac{\\pi}{4} \\quad (\\text{四分之一單位圓面積})"
        ],
        "points": [
          "<b>識別步長與節點</b>：步長 $\\Delta x = \\frac{1}{n}$，節點 $x_k = \\frac{k}{n}$。",
          "<b>(2) 提公因式配湊標準形式</b>：根號內提出 $16n^2$，化為 $\\frac{1}{n}$ 乘標準被積函數。"
        ],
        "pitfall": "(2) 提公因式時：$\\sqrt{16n^2 - 16k^2} = 4n\\sqrt{1 - (k/n)^2}$，與前面的 $\\frac{4}{n^2}$ 相乘得到 $16 \\times \\frac{1}{n}$。"
      },
      "solution": {
        "thinking": "將和式極限配湊為定積分定義的標準黎曼和 $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum f(k/n) = \\int_0^1 f(x)dx$，利用幾何圓面積求值。",
        "steps": [
          "(1) 觀察和式結構：<br>令 $x_k = \\frac{k}{n}$，$\\Delta x = \\frac{1}{n}$，被積函數為 $f(x) = \\sqrt{1 - x^2}$。<br>由定積分定義：<br>$\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\sqrt{1 - \\left(\\frac{k}{n}\\right)^2} = \\int_0^1 \\sqrt{1 - x^2} dx$。<br>幾何意義：$y = \\sqrt{1 - x^2}$ 在 $[0, 1]$ 上的圖像為半徑為 1 的圓在第一象限的四分之一圓弧。<br>故定積分值為圓面積的 $\\frac{1}{4}$：$\\frac{1}{4} \\pi (1^2) = \\frac{\\pi}{4}$。",
          "(2) 對和式進行代數變形配湊：<br>$\\sqrt{16n^2 - (4k)^2} = \\sqrt{16n^2\\left(1 - \\left(\\frac{k}{n}\\right)^2\\right)} = 4n \\sqrt{1 - \\left(\\frac{k}{n}\\right)^2}$。<br>代入原極限：<br>$\\lim_{n \\to \\infty} \\frac{4}{n^2} \\sum_{k=1}^n 4n \\sqrt{1 - \\left(\\frac{k}{n}\\right)^2} = \\lim_{n \\to \\infty} \\frac{16}{n} \\sum_{k=1}^n \\sqrt{1 - \\left(\\frac{k}{n}\\right)^2} = 16 \\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\sqrt{1 - \\left(\\frac{k}{n}\\right)^2}$。<br>由 (1) 的結論，極限值為：$16 \\int_0^1 \\sqrt{1 - x^2} dx = 16 \\times \\frac{\\pi}{4} = 4\\pi$。"
        ],
        "ans": "(1) $\\int_0^1 \\sqrt{1-x^2}dx = \\frac{\\pi}{4}$；(2) $16\\int_0^1 \\sqrt{1-x^2}dx = 4\\pi$",
        "quickTip": "黎曼和轉化為定積分就是算 $1/4$ 圓面積 $\\pi/4$！(2) 提係數 16 即得 $16 \\times \\pi/4 = 4\\pi$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(1)$</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>1</m:t></m:r></m:sup><m:e/></m:nary><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>1−</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup></m:e></m:rad><m:r><m:t>dx=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>π</m:t></m:r></m:num><m:den><m:r><m:t>4</m:t></m:r></m:den></m:f><m:r><m:t>$；(2)$16</m:t></m:r><m:nary><m:naryPr><m:chr m:val=\"∫\"/><m:limLoc m:val=\"subSup\"/><m:grow m:val=\"1\"/><m:subHide m:val=\"off\"/><m:supHide m:val=\"off\"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>1</m:t></m:r></m:sup><m:e/></m:nary><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>1−</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup></m:e></m:rad><m:r><m:t>dx=4π$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第12題",
      "topic": "變上限積分方程與二元函數方程組",
      "score": "10分",
      "q": "設 $f(t)$ 與 $g(t)$ 為兩個多項式函數，若 $\\int_1^x (2f(t) - g(t)) dt = 3x^2 + 5x + a$，且 $\\int_1^x (f(t) + 2g(t)) dt = 5x^3 - x^2 + b$，其中 $a, b$ 為常數：<br>(a) 試求這兩個多項式函數 $f(x)$ 與 $g(x)$；<br>(b) 試求常數 $a, b$ 的值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\frac{d}{dx}\\left(\\int_1^x h(t)dt\\right) = h(x)",
          "\\left.\\int_1^x h(t)dt\\right|_{x=1} = 0"
        ],
        "points": [
          "<b>變上限積分求導法則</b>：對 $x$ 求導直接消去積分號得到被積函數！",
          "<b>定積分上下限相等為 0</b>：令 $x = 1$，左邊為 0，代入右邊即可求出常數 $a, b$！"
        ],
        "pitfall": "求 $a, b$ 不需要先求出 $f, g$ 積分，直接令 $x=1$ 代入原方程最簡捷！"
      },
      "solution": {
        "thinking": "兩邊對 $x$ 求導解二元一次方程組得到 $f(x), g(x)$；令 $x=1$ 利用上下限相等積分值為 0 解出 $a, b$。",
        "steps": [
          "(a) 對已知兩式兩邊同時對 $x$ 求導：<br>① $\\frac{d}{dx}\\int_1^x (2f(t) - g(t))dt = \\frac{d}{dx}(3x^2 + 5x + a) \\implies 2f(x) - g(x) = 6x + 5$　…… (1)<br>② $\\frac{d}{dx}\\int_1^x (f(t) + 2g(t))dt = \\frac{d}{dx}(5x^3 - x^2 + b) \\implies f(x) + 2g(x) = 15x^2 - 2x$　…… (2)<br>消元解方程組：<br>將 (1) 式乘 2 加上 (2) 式：<br>$2(2f(x) - g(x)) + (f(x) + 2g(x)) = 2(6x + 5) + (15x^2 - 2x)$<br>$5f(x) = 12x + 10 + 15x^2 - 2x = 15x^2 + 10x + 10$。<br>兩邊同除以 5：$f(x) = 3x^2 + 2x + 2$。<br>由 (1) 式解得 $g(x)$：<br>$g(x) = 2f(x) - (6x + 5) = 2(3x^2 + 2x + 2) - 6x - 5 = 6x^2 + 4x + 4 - 6x - 5 = 6x^2 - 2x - 1$。",
          "(b) 利用變上限積分的初值條件：<br>在原方程中令 $x = 1$（定積分上限與下限相等時值恆為 0）：<br>① $\\int_1^1 (2f(t) - g(t))dt = 3(1^2) + 5(1) + a \\implies 0 = 3 + 5 + a \\implies 8 + a = 0 \\implies a = -8$；<br>② $\\int_1^1 (f(t) + 2g(t))dt = 5(1^3) - 1^2 + b \\implies 0 = 5 - 1 + b \\implies 4 + b = 0 \\implies b = -4$。"
        ],
        "ans": "(a) $f(x) = 3x^2 + 2x + 2, \\quad g(x) = 6x^2 - 2x - 1$；(b) $a = -8, \\quad b = -4$",
        "quickTip": "令 $x=1$ 秒得 $a = -8, b = -4$；求導消元得 $f(x)=3x^2+2x+2, g(x)=6x^2-2x-1$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)$f(x)=3</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>+2x+2,g(x)=6</m:t></m:r><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>−2x−1$；(b)$a=−8,b=−4$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題五",
      "qNum": "解答題 第13題",
      "topic": "含參三次函數圍成面積函數 A(k) 與最值",
      "score": "12分",
      "q": "設函數 $f(x) = x^3 - kx^2 - x + k$（其中 $-1 \\le k \\le 1$）的圖形與 $x$ 軸所圍成的區域的面積為 $A(k)$：<br>(a) 試以 $k$ 來表示 $A(k)$；<br>(b) 求 $A(k)$ 的最大值與最小值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f(x) = (x^2 - 1)(x - k) = (x-1)(x+1)(x-k)",
          "A(k) = \\int_{-1}^k f(x)dx - \\int_k^1 f(x)dx",
          "A(k) = -\\frac{1}{6}k^4 + k^2 + \\frac{1}{2}"
        ],
        "points": [
          "<b>因式分解求根</b>：根為 $-1, k, 1$，因 $-1 \\le k \\le 1$，根的大小順序固定為 $-1 \\le k \\le 1$！",
          "<b>分段符號</b>：在 $[-1, k]$ 上 $f(x) \\ge 0$；在 $[k, 1]$ 上 $f(x) \\le 0$。",
          "<b>換元求最值</b>：令 $u = k^2 \\in [0, 1]$，化為二次函數在閉區間上的最值！"
        ],
        "pitfall": "二次函數對稱軸在 $u = 3$，超出定義域 $[0, 1]$，故在 $[0, 1]$ 上單調遞增，最值在端點取到。"
      },
      "solution": {
        "thinking": "分解因式確定三個零點順序，分兩段積分求出 $A(k)$ 的解析式；透過換元 $u = k^2$ 轉化為二次函數求最值。",
        "steps": [
          "(a) 因式分解：<br>$f(x) = x^2(x - k) - (x - k) = (x^2 - 1)(x - k) = (x - 1)(x + 1)(x - k)$。<br>三根為 $x = -1, k, 1$。已知 $-1 \\le k \\le 1$，因此三根的大小順序為 $-1 \\le k \\le 1$。<br>① 當 $x \\in [-1, k]$ 時，$f(x) \\ge 0$；<br>② 當 $x \\in [k, 1]$ 時，$f(x) \\le 0$。<br>面積函數為：$A(k) = \\int_{-1}^k (x^3 - kx^2 - x + k) dx - \\int_k^1 (x^3 - kx^2 - x + k) dx$。<br>求原函數：$F(x) = \\frac{x^4}{4} - \\frac{kx^3}{3} - \\frac{x^2}{2} + kx$。<br>$A(k) = [F(k) - F(-1)] - [F(1) - F(k)] = 2F(k) - F(-1) - F(1)$。<br>代入計算：<br>$F(k) = \\frac{k^4}{4} - \\frac{k^4}{3} - \\frac{k^2}{2} + k^2 = -\\frac{k^4}{12} + \\frac{k^2}{2}$；<br>$F(1) = \\frac{1}{4} - \\frac{k}{3} - \\frac{1}{2} + k = -\\frac{1}{4} + \\frac{2}{3}k$；<br>$F(-1) = \\frac{1}{4} + \\frac{k}{3} - \\frac{1}{2} - k = -\\frac{1}{4} - \\frac{2}{3}k$；<br>$F(1) + F(-1) = -\\frac{1}{2}$。<br>代入得：$A(k) = 2\\left(-\\frac{k^4}{12} + \\frac{k^2}{2}\\right) - \\left(-\\frac{1}{2}\\right) = -\\frac{1}{6}k^4 + k^2 + \\frac{1}{2}$。",
          "(b) 求 $A(k)$ 在 $[-1, 1]$ 上的最值：<br>令 $u = k^2$。因為 $k \\in [-1, 1]$，所以 $u \\in [0, 1]$。<br>$A(u) = -\\frac{1}{6}u^2 + u + \\frac{1}{2}$。<br>此為關於 $u$ 的二次函數，對稱軸為 $u = -\\frac{1}{2(-1/6)} = 3$。<br>因為開口向下且對稱軸 $u = 3 > 1$，所以在區間 $u \\in [0, 1]$ 上，$A(u)$ 單調遞增！<br>① 當 $u = 0$（即 $k = 0$）時，取得最小值：<br>$A_{\\min} = A(0) = \\frac{1}{2}$；<br>② 當 $u = 1$（即 $k = \\pm 1$）時，取得最大值：<br>$A_{\\max} = A(1) = -\\frac{1}{6}(1) + 1 + \\frac{1}{2} = \\frac{4}{3}$。"
        ],
        "ans": "(a) $A(k) = -\\frac{1}{6}k^4 + k^2 + \\frac{1}{2}$；(b) 最大值為 $\\frac{4}{3}$ (當 $k = \\pm 1$ 時)，最小值為 $\\frac{1}{2}$ (當 $k = 0$ 時)",
        "quickTip": "令 $u = k^2 \\in [0, 1]$，對稱軸在 $u=3$，區間內單調遞增！最小 $A(0) = 1/2$，最大 $A(1) = 4/3$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)$A(k)=−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:sSup><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sup><m:r><m:t>4</m:t></m:r></m:sup></m:sSup><m:r><m:t>+</m:t></m:r><m:sSup><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>$；(b)最大值為$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>4</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>$(當$k=±1$時)，最小值為$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>$(當$k=0$時)</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
