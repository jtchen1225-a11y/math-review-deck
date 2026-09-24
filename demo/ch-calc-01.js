/* 2026 高三理組數學思維本 · 微積分篇 — 專題一 導數與微分 (33 題) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
  "ch": "專題一 導數與微分",
  "year": "2026",
  "paper": "專題一",
  "title": "專題一 導數的定義、常見函數的導數與運算法則",
  "color": "#2563eb",
  "sections": [
    "單選題 1~6 題",
    "填空題 7~9 題",
    "基礎求導 10(1~12)",
    "複合求導 11(1~9)",
    "高階與隱函數 12~13",
    "幾何求導與圖像辨析 14~28"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第1題",
      "topic": "基本初等函數的導數與求值",
      "score": "4分",
      "q": "已知函數 $f(x) = \\sin x + x$，則 $\\left.\\frac{df}{dx}\\right|_{x=1}$ 的值為 $(\\quad)$。",
      "options": [
        "A. $1 - \\cos 1$",
        "B. $1 + \\cos 1$",
        "C. \\cos 1 - 1",
        "D. -1 - \\cos 1"
      ],
      "knowledge": {
        "formulas": [
          "(\\sin x)' = \\cos x",
          "(x)' = 1",
          "(u + v)' = u' + v'"
        ],
        "points": [
          "<b>和差求導法則</b>：$(f \\pm g)' = f' \\pm g'$。",
          "<b>特定點求值</b>：先求導函數 $f'(x)$，再代入自變量值 $x=1$。"
        ],
        "pitfall": "切勿先代入數值再求導（常數求導為 0），必須嚴格遵循「先求導、後代入」原則。"
      },
      "solution": {
        "thinking": "利用基本導數公式分別對 $\\sin x$ 和 $x$ 求導，得到 $f'(x)$，再代入 $x=1$。",
        "steps": [
          "求導函數：$f'(x) = (\\sin x)' + (x)' = \\cos x + 1$。",
          "計算點值：$\\left.\\frac{df}{dx}\\right|_{x=1} = f'(1) = \\cos 1 + 1 = 1 + \\cos 1$。"
        ],
        "ans": "B",
        "quickTip": "$(\\sin x + x)' = \\cos x + 1$，直接代入 1 即得 $1 + \\cos 1$，3 秒秒殺選 B！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第2題",
      "topic": "導數的物理意義 — 瞬時速度與停頓時刻",
      "score": "4分",
      "q": "一質點沿直線運動，如果由始點起經過 $t$ 秒後的位移為 $s = \\frac{1}{3}t^3 - \\frac{3}{2}t^2 + 2t$，那麼速度為零的時刻是 $(\\quad)$。",
      "options": [
        "A. 0 秒",
        "B. 1 秒末",
        "C. 2 秒末",
        "D. 1 秒末和 2 秒末"
      ],
      "knowledge": {
        "formulas": [
          "v(t) = s'(t) = \\frac{ds}{dt}",
          "a(t) = v'(t) = s''(t)"
        ],
        "points": [
          "<b>瞬時速度</b>：位移函數對時間的一階導數即為速度 $v(t) = s'(t)$。",
          "<b>速度為零</b>：令 $v(t) = 0$ 解一元二次方程。"
        ],
        "pitfall": "注意因式分解時符號：$t^2 - 3t + 2 = (t-1)(t-2) = 0$。"
      },
      "solution": {
        "thinking": "對位移函數 $s(t)$ 求導得到速度函數 $v(t)$，令 $v(t) = 0$ 求解時間 $t$。",
        "steps": [
          "求速度函數：$v(t) = s'(t) = \\left(\\frac{1}{3}t^3 - \\frac{3}{2}t^2 + 2t\\right)' = t^2 - 3t + 2$。",
          "令速度為零：$t^2 - 3t + 2 = 0$。",
          "因式分解得：$(t - 1)(t - 2) = 0$，解得 $t = 1$ 或 $t = 2$。"
        ],
        "ans": "D",
        "quickTip": "求導得 $t^2 - 3t + 2 = 0$，十字相乘直接看出兩根 $t=1, 2$，選 D！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第3題",
      "topic": "含參函數求導與方程求解",
      "score": "4分",
      "q": "已知 $m < 0$，$f(x) = mx^3 + \\frac{27x}{m}$，且 $f'(1) = -18$，則實數 $m$ 等於 $(\\quad)$。",
      "options": [
        "A. -9",
        "B. -3",
        "C. 3",
        "D. 9"
      ],
      "knowledge": {
        "formulas": [
          "(x^n)' = n x^{n-1}",
          "f'(x) = 3m x^2 + \\frac{27}{m}"
        ],
        "points": [
          "<b>多項式求導</b>：注意 $\\frac{27x}{m} = \\left(\\frac{27}{m}\\right)x$，其導數為常數 $\\frac{27}{m}$。",
          "<b>參數約束</b>：題幹明確給出 $m < 0$，解出方程後需檢驗符號。"
        ],
        "pitfall": "解二次方程時可能得到正負兩根，必須根據題意 $m < 0$ 排除正值。"
      },
      "solution": {
        "thinking": "求導後令 $x = 1$，建立關於 $m$ 的代數方程，並結合 $m < 0$ 確定 $m$ 的值。",
        "steps": [
          "對 $f(x)$ 求導：$f'(x) = 3mx^2 + \\frac{27}{m}$。",
          "代入 $x = 1$：$f'(1) = 3m + \\frac{27}{m} = -18$。",
          "兩邊同乘 $m$（$m < 0$）：$3m^2 + 18m + 27 = 0$。",
          "同除以 3：$m^2 + 6m + 9 = 0 \\implies (m + 3)^2 = 0$，解得 $m = -3$。"
        ],
        "ans": "B",
        "quickTip": "$3m + 27/m = -18$，利用完全平方式 $(m+3)^2 = 0$ 唯一解 $m = -3$！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第4題",
      "topic": "平均變化率的定義與差商計算",
      "score": "4分",
      "q": "在曲線 $y = x^2 + 1$ 的圖像上取一點 $(1,2)$ 及鄰近一點 $(1+\\Delta x, 2+\\Delta y)$，則 $\\frac{\\Delta y}{\\Delta x}$ 為 $(\\quad)$。",
      "options": [
        "A. $\\Delta x + \\frac{1}{\\Delta x} + 2$",
        "B. $\\Delta x - \\frac{1}{\\Delta x} - 2$",
        "C. $\\Delta x + 2$",
        "D. $2 + \\Delta x - \\frac{1}{\\Delta x}$"
      ],
      "knowledge": {
        "formulas": [
          "\\Delta y = f(x_0 + \\Delta x) - f(x_0)",
          "\\frac{\\Delta y}{\\Delta x} = \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}"
        ],
        "points": [
          "<b>割線斜率（差商）</b>：$\\frac{\\Delta y}{\\Delta x}$ 表示自變量變化 $\\Delta x$ 時函數的平均變化率。",
          "<b>消去零因子</b>：展開分子後提出 $\\Delta x$ 並約分。"
        ],
        "pitfall": "注意此題求的是割線斜率 $\\frac{\\Delta y}{\\Delta x}$，尚未取極限 $\\Delta x \\to 0$。"
      },
      "solution": {
        "thinking": "計算函數在 $x=1$ 處的增量 $\\Delta y = f(1+\\Delta x) - f(1)$，再除以 $\\Delta x$ 化簡。",
        "steps": [
          "計算 $\\Delta y$：$\\Delta y = [(1 + \\Delta x)^2 + 1] - (1^2 + 1) = 1 + 2\\Delta x + (\\Delta x)^2 + 1 - 2 = 2\\Delta x + (\\Delta x)^2$。",
          "計算差商：$\\frac{\\Delta y}{\\Delta x} = \\frac{2\\Delta x + (\\Delta x)^2}{\\Delta x} = 2 + \\Delta x = \\Delta x + 2$。"
        ],
        "ans": "C",
        "quickTip": "直接展開 $(1+\\Delta x)^2 - 1 = 2\\Delta x + (\\Delta x)^2$，除以 $\\Delta x$ 得 $2 + \\Delta x$。秒選 C！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第5題",
      "topic": "絕對值函數的局部求導",
      "score": "4分",
      "q": "函數 $f(x) = |x|$，則 $f'(5) = (\\quad)$。",
      "options": [
        "A. 不存在",
        "B. 0",
        "C. 1",
        "D. -1"
      ],
      "knowledge": {
        "formulas": [
          "|x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}",
          "(|x|)' = \\text{sgn}(x) \\quad (x \\ne 0)"
        ],
        "points": [
          "<b>局部去絕對值</b>：當 $x$ 在 5 的鄰域內時，$x > 0$，故 $|x| = x$。",
          "<b>可導性判斷</b>：$|x|$ 僅在原點 $x=0$ 處不可導，其餘非零點處均處處可導。"
        ],
        "pitfall": "誤以為絕對值函數在所有點都不可導，實際上僅在尖點 $x=0$ 處不可導。"
      },
      "solution": {
        "thinking": "考察 $x=5$ 鄰域內的函數解析式，去掉絕對值符號後直接求導。",
        "steps": [
          "因為點 $x = 5 > 0$，在 $x=5$ 的去心鄰域 $(4, 6)$ 內恆有 $f(x) = x$。",
          "對 $f(x) = x$ 求導得 $f'(x) = 1$。",
          "故 $f'(5) = 1$。"
        ],
        "ans": "C",
        "quickTip": "在 $x=5$ 處 $x>0$，$f(x)=x$，導數恆為 1，秒選 C！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第6題",
      "topic": "導函數條件逆推原函數",
      "score": "4分",
      "q": "若 $f'(1) = -1$，則此函數可能為 $(\\quad)$。",
      "options": [
        "A. $f(x) = x^4 - 5x$",
        "B. $f(x) = x^4 - 1$",
        "C. $f(x) = x^4 + 1$",
        "D. $f(x) = x^4 + 2$"
      ],
      "knowledge": {
        "formulas": [
          "(x^n)' = n x^{n-1}",
          "(C)' = 0"
        ],
        "points": [
          "<b>選項驗證法</b>：分別求各選項函數在 $x=1$ 處的導數值進行檢驗。",
          "<b>多項式常數項</b>：常數項求導均為 0，B、C、D 項的導數本質相同。"
        ],
        "pitfall": "注意符號運算，檢查 $4(1)^3 - 5 = -1$ 是否符合條件。"
      },
      "solution": {
        "thinking": "依次對四個選項求導並計算 $x=1$ 時的值，核對何者等於 $-1$。",
        "steps": [
          "檢驗 A：$f(x) = x^4 - 5x \\implies f'(x) = 4x^3 - 5$。代入 $x=1$ 得 $f'(1) = 4(1) - 5 = -1$，完全符合！",
          "檢驗 B、C、D：$f'(x) = 4x^3 \\implies f'(1) = 4 \\ne -1$。"
        ],
        "ans": "A",
        "quickTip": "B、C、D 求導均為 $4x^3$，在 $x=1$ 處均為 4，唯一不同的是 A，直接秒選 A！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "填空題 第7題",
      "topic": "導數定義的極限形式轉化",
      "score": "4分",
      "q": "若 $f'(x_0) = 2$，則 $\\lim_{k \\to 0} \\frac{f(x_0 - k) - f(x_0)}{2k} = \\underline{\\quad\\quad\\quad\\quad}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}",
          "\\lim_{k \\to 0} \\frac{f(x_0 + A k) - f(x_0)}{B k} = \\frac{A}{B} f'(x_0)"
        ],
        "points": [
          "<b>增量匹配</b>：分子中的增量為 $-k$，分母為 $2k$。",
          "<b>提係數法</b>：$\\frac{f(x_0 - k) - f(x_0)}{2k} = -\\frac{1}{2} \\cdot \\frac{f(x_0 + (-k)) - f(x_0)}{-k}$。"
        ],
        "pitfall": "極易遺漏分子 $-k$ 中的負號，誤算為 $+\\frac{1}{2} \\times 2 = 1$。"
      },
      "solution": {
        "thinking": "將待求極限嚴格配湊成導數定義的標準差商形式，提取係數比值。",
        "steps": [
          "重寫極限表達式：$\\lim_{k \\to 0} \\frac{f(x_0 - k) - f(x_0)}{2k} = \\lim_{k \\to 0} \\left[ -\\frac{1}{2} \\cdot \\frac{f(x_0 - k) - f(x_0)}{-k} \\right]$。",
          "令 $\\Delta x = -k$，當 $k \\to 0$ 時 $\\Delta x \\to 0$。",
          "則極限化為：$-\\frac{1}{2} \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x} = -\\frac{1}{2} f'(x_0)$。",
          "代入 $f'(x_0) = 2$：$-\\frac{1}{2} \\times 2 = -1$。"
        ],
        "ans": "-1",
        "quickTip": "分子自變量係數為 $-1$，分母係數為 $2$，極限值直接就是 $\\frac{-1}{2} f'(x_0) = -\\frac{1}{2}(2) = -1$！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "填空題 第8題",
      "topic": "原點處導數定義極限",
      "score": "4分",
      "q": "已知 $f(x) = \\sin x$，則 $\\lim_{h \\to 0} \\frac{f(h) - f(0)}{h} = \\underline{\\quad\\quad\\quad\\quad}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(0) = \\lim_{h \\to 0} \\frac{f(0 + h) - f(0)}{h}",
          "(\\sin x)' = \\cos x"
        ],
        "points": [
          "<b>定義識別</b>：該極限即為函數 $f(x)$ 在 $x = 0$ 處的導數定義 $f'(0)$。",
          "<b>三角特殊值</b>：$\\cos 0 = 1$。"
        ],
        "pitfall": "無須使用洛必達法則，直接辨析為導數定義最為簡潔。"
      },
      "solution": {
        "thinking": "由導數定義，該極限正是 $f'(0)$，直接求導並代入 0。",
        "steps": [
          "識別極限意義：$\\lim_{h \\to 0} \\frac{f(h) - f(0)}{h} = f'(0)$。",
          "對 $f(x) = \\sin x$ 求導得 $f'(x) = \\cos x$。",
          "代入 $x = 0$ 得：$f'(0) = \\cos 0 = 1$。"
        ],
        "ans": "1",
        "quickTip": "本質就是 $(\\sin x)'|_{x=0} = \\cos 0 = 1$！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "填空題 第9題",
      "topic": "二次函數導數待定係數",
      "score": "4分",
      "q": "設函數 $f(x) = x^2 + ax + 12$，已知 $f'(4) = 2$，則實數 $a$ 的值為 $\\underline{\\quad\\quad\\quad\\quad}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(x^2 + ax + b)' = 2x + a"
        ],
        "points": [
          "<b>一次項與二次項求導</b>：$f'(x) = 2x + a$。",
          "<b>線性方程求解</b>：令 $2(4) + a = 2$ 解一元一次方程。"
        ],
        "pitfall": "常數項 12 求導為 0，切勿將 12 誤保留到導數中。"
      },
      "solution": {
        "thinking": "求出 $f'(x)$ 的代數式，代入 $x=4$，由方程解出 $a$。",
        "steps": [
          "求導函數：$f'(x) = 2x + a$。",
          "代入 $x = 4$：$f'(4) = 2(4) + a = 8 + a$。",
          "已知 $f'(4) = 2$，得：$8 + a = 2 \\implies a = -6$。"
        ],
        "ans": "-6",
        "quickTip": "$2(4) + a = 2 \\implies a = 2 - 8 = -6$，一步算出！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第10題(1~3)",
      "topic": "基本求導法則練習 (根式、積、商)",
      "score": "10分",
      "q": "求下列函數的導數 $\\frac{dy}{dx}$：<br>(1) $y = (1 - \\sqrt{x})\\left(1 + \\frac{1}{\\sqrt{x}}\\right)$；<br>(2) $y = (x + 2a)(x - a)^2$；<br>(3) $y = \\frac{x^2}{\\sin x}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(u \\cdot v)' = u'v + uv'",
          "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
          "(x^r)' = r x^{r-1}"
        ],
        "points": [
          "<b>(1) 先化簡後求導</b>：展開多項式比直接用乘法法則簡單得多！",
          "<b>(2) 展開化為標準多項式</b>：$(x+2a)(x^2 - 2ax + a^2) = x^3 - 3a^2 x + 2a^3$。",
          "<b>(3) 商的求導法則</b>：分母平方，分子「上導下不導減上不導下導」。"
        ],
        "pitfall": "商法則中分子是減號不是加號：$(u/v)' = (u'v - uv')/v^2$。"
      },
      "solution": {
        "thinking": "能先代數展開化簡的先展開（如 (1)、(2)），不能展開的嚴格使用商法則（如 (3)）。",
        "steps": [
          "(1) 先展開：$y = 1 + \\frac{1}{\\sqrt{x}} - \\sqrt{x} - 1 = x^{-1/2} - x^{1/2}$。<br>求導得：$\\frac{dy}{dx} = -\\frac{1}{2}x^{-3/2} - \\frac{1}{2}x^{-1/2} = -\\frac{1}{2x\\sqrt{x}} - \\frac{1}{2\\sqrt{x}} = -\\frac{x+1}{2x\\sqrt{x}}$。",
          "(2) 展開：$y = (x+2a)(x^2 - 2ax + a^2) = x^3 - 3a^2 x + 2a^3$。<br>求導得：$\\frac{dy}{dx} = 3x^2 - 3a^2 = 3(x^2 - a^2)$（或用乘積法則亦可）。",
          "(3) 使用商法則：$\\frac{dy}{dx} = \\frac{(x^2)' \\sin x - x^2 (\\sin x)'}{\\sin^2 x} = \\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}$。"
        ],
        "ans": "(1) -\\frac{x+1}{2x\\sqrt{x}}；(2) 3(x^2 - a^2)；(3) \\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}",
        "quickTip": "遇到根式乘積，先展開化成冪函數 $x^r$，求導速度提高 3 倍且零失誤！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第10題(4~6)",
      "topic": "基本求導法則練習 (商法則、多項式負冪、三角平方)",
      "score": "10分",
      "q": "求下列函數的導數 $\\frac{dy}{dx}$：<br>(4) $y = \\frac{x+3}{x^2+3}$；<br>(5) $y = 2x^2 - 3x + 4 - \\frac{3}{x} + \\frac{2}{x^2}$；<br>(6) $y = \\sin^2\\left(2x + \\frac{\\pi}{3}\\right)$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}, \\quad \\left(\\frac{1}{x^2}\\right)' = -\\frac{2}{x^3}",
          "(\\sin^2 u)' = 2\\sin u \\cos u \\cdot u' = \\sin(2u) \\cdot u'"
        ],
        "points": [
          "<b>(4) 分式商求導</b>：注意分子項的合併化簡。",
          "<b>(5) 負整數指數冪</b>：改寫為 $-3x^{-1} + 2x^{-2}$ 直接套用冪法則。",
          "<b>(6) 複合求導與倍角公式</b>：利用二倍角公式化簡結果。"
        ],
        "pitfall": "求導連鎖律：(6) 中內部函數 $2x + \\pi/3$ 的導數為 2，切勿漏乘！"
      },
      "solution": {
        "thinking": "(4) 套商法則；(5) 轉為負冪求導；(6) 複合函數求導先對外層平方求導，再乘內層三角及線性導數。",
        "steps": [
          "(4) $\\frac{dy}{dx} = \\frac{1 \\cdot (x^2+3) - (x+3)(2x)}{(x^2+3)^2} = \\frac{x^2 + 3 - (2x^2 + 6x)}{(x^2+3)^2} = \\frac{-x^2 - 6x + 3}{(x^2+3)^2}$。",
          "(5) 改寫：$y = 2x^2 - 3x + 4 - 3x^{-1} + 2x^{-2}$。<br>求導得：$\\frac{dy}{dx} = 4x - 3 + 3x^{-2} - 4x^{-3} = 4x - 3 + \\frac{3}{x^2} - \\frac{4}{x^3}$。",
          "(6) 連鎖律：$\\frac{dy}{dx} = 2\\sin\\left(2x + \\frac{\\pi}{3}\\right) \\cdot \\cos\\left(2x + \\frac{\\pi}{3}\\right) \\cdot 2 = 2\\sin\\left(4x + \\frac{2\\pi}{3}\\right)$。"
        ],
        "ans": "(4) \\frac{-x^2-6x+3}{(x^2+3)^2}；(5) 4x - 3 + \\frac{3}{x^2} - \\frac{4}{x^3}；(6) 2\\sin\\left(4x+\\frac{2\\pi}{3}\\right)",
        "quickTip": "$2\\sin u\\cos u = \\sin(2u)$，倍角化簡一步到位！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第10題(7~9)",
      "topic": "基本求導法則練習 (分數指數冪、根式複合、三角線性)",
      "score": "10分",
      "q": "求下列函數的導數 $\\frac{dy}{dx}$：<br>(7) $y = \\sqrt[3]{x^2} + 5x^6 - \\frac{1}{x^2}$；<br>(8) $y = \\sqrt{x^2 + 2x + 4}$；<br>(9) $y = \\sin x + 2\\cos x + 1$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(\\sqrt[3]{x^2})' = (x^{2/3})' = \\frac{2}{3}x^{-1/3}",
          "(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}",
          "(\\cos x)' = -\\sin x"
        ],
        "points": [
          "<b>分數指數冪求導</b>：根號化為指數 $x^{2/3}$，負冪化為 $x^{-2}$。",
          "<b>根式速導公式</b>：$(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$ 聯考最常用。"
        ],
        "pitfall": "$\\cos x$ 求導有負號：$(\\cos x)' = -\\sin x$。"
      },
      "solution": {
        "thinking": "(7) 轉為冪函數逐項求導；(8) 套用根式複合求導公式；(9) 基礎三角求導。",
        "steps": [
          "(7) $y = x^{2/3} + 5x^6 - x^{-2}$。<br>$\\frac{dy}{dx} = \\frac{2}{3}x^{-1/3} + 30x^5 + 2x^{-3} = \\frac{2}{3\\sqrt[3]{x}} + 30x^5 + \\frac{2}{x^3}$。",
          "(8) 令 $u = x^2 + 2x + 4$，則 $u' = 2x + 2$。<br>$\\frac{dy}{dx} = \\frac{u'}{2\\sqrt{u}} = \\frac{2x+2}{2\\sqrt{x^2+2x+4}} = \\frac{x+1}{\\sqrt{x^2+2x+4}}$。",
          "(9) $\\frac{dy}{dx} = \\cos x - 2\\sin x$。"
        ],
        "ans": "(7) \\frac{2}{3\\sqrt[3]{x}} + 30x^5 + \\frac{2}{x^3}；(8) \\frac{x+1}{\\sqrt{x^2+2x+4}}；(9) \\cos x - 2\\sin x",
        "quickTip": "根式求導直接分子寫內層導數、分母寫 $2\\sqrt{\\text{原式}}$，再約分，5 秒寫出答案！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第10題(10~12)",
      "topic": "基本求導法則練習 (負指數多項式、除法拆項、乘積法則)",
      "score": "10分",
      "q": "求下列函數的導數 $\\frac{dy}{dx}$：<br>(10) $y = (5x^2 - 4x - 6)(3 - x^{-1})$；<br>(11) $y = \\frac{x^3 + x + 1}{x}$；<br>(12) $y = (3x - 1)\\sin x$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(u \\cdot v)' = u'v + uv'",
          "\\frac{x^3+x+1}{x} = x^2 + 1 + x^{-1}"
        ],
        "points": [
          "<b>(10) 展開法或乘積法</b>：展開後各項求導最穩。",
          "<b>(11) 逐項除以分母</b>：化為多項式與負冪之和，避免複雜商法則。",
          "<b>(12) 乘積法則</b>：一次多項式乘正弦函數。"
        ],
        "pitfall": "展開 (10) 時小心常數乘負冪：$-6 \\times (-x^{-1}) = +6x^{-1}$。"
      },
      "solution": {
        "thinking": "對 (10) 展開求導；(11) 拆項求導；(12) 乘積求導。",
        "steps": [
          "(10) 展開：$y = 15x^2 - 5x - 12x + 4 - 18 + 6x^{-1} = 15x^2 - 17x - 14 + 6x^{-1}$。<br>$\\frac{dy}{dx} = 30x - 17 - 6x^{-2} = 30x - 17 - \\frac{6}{x^2}$。",
          "(11) 拆項：$y = x^2 + 1 + x^{-1}$。<br>$\\frac{dy}{dx} = 2x - x^{-2} = 2x - \\frac{1}{x^2}$。",
          "(12) 乘積法則：$\\frac{dy}{dx} = (3x-1)' \\sin x + (3x-1)(\\sin x)' = 3\\sin x + (3x-1)\\cos x$。"
        ],
        "ans": "(10) 30x - 17 - \\frac{6}{x^2}；(11) 2x - \\frac{1}{x^2}；(12) 3\\sin x + (3x-1)\\cos x",
        "quickTip": "分子多項式、分母單項式時，務必「先拆項、後求導」！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第11題(1~3)",
      "topic": "複合函數鏈式求導 (三角、根式、冪)",
      "score": "10分",
      "q": "求下列函數的導數 $\\frac{dy}{dx}$：<br>(1) $y = \\cos\\frac{x}{4}$；<br>(2) $y = \\sqrt{3x - 1}$；<br>(3) $y = (5x - 4)^4$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}",
          "(\\cos u)' = -u' \\sin u",
          "(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}",
          "(u^n)' = n u^{n-1} u'"
        ],
        "points": [
          "<b>外層先導、內層再導</b>：鏈式法則的核心是層層剝繭。",
          "<b>內層導數不可漏</b>：(1) 的 $1/4$，(2) 的 $3$，(3) 的 $5$。"
        ],
        "pitfall": "最常見失誤是只求外層導數而忘記乘上內層導數 $u'$。"
      },
      "solution": {
        "thinking": "識別外層與內層函數，嚴格應用連鎖律 $\\frac{dy}{dx} = f'(u) \\cdot u'$。",
        "steps": [
          "(1) 外層 $\\cos u$，內層 $u = \\frac{x}{4}$，$\\frac{du}{dx} = \\frac{1}{4}$。<br>$\\frac{dy}{dx} = -\\sin\\left(\\frac{x}{4}\\right) \\cdot \\frac{1}{4} = -\\frac{1}{4}\\sin\\frac{x}{4}$。",
          "(2) 外層 $\\sqrt{u}$，內層 $u = 3x - 1$，$u' = 3$。<br>$\\frac{dy}{dx} = \\frac{3}{2\\sqrt{3x-1}}$。",
          "(3) 外層 $u^4$，內層 $u = 5x - 4$，$u' = 5$。<br>$\\frac{dy}{dx} = 4(5x - 4)^3 \\cdot 5 = 20(5x - 4)^3$。"
        ],
        "ans": "(1) -\\frac{1}{4}\\sin\\frac{x}{4}；(2) \\frac{3}{2\\sqrt{3x-1}}；(3) 20(5x-4)^3",
        "quickTip": "心中默念：外導乘內導！內導 $3$ 和 $5$ 提前乘好。"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第11題(4~6)",
      "topic": "複合函數鏈式求導 (高次冪、分母高次、三角相角)",
      "score": "10分",
      "q": "求下列函數的導數 $\\frac{dy}{dx}$：<br>(4) $y = (2 + 3x)^5$；<br>(5) $y = \\frac{1}{(2x^2 - 1)^3}$；<br>(6) $y = \\sin\\left(3x - \\frac{\\pi}{4}\\right)$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(u^n)' = n u^{n-1} u'",
          "(u^{-3})' = -3 u^{-4} u'",
          "(\\sin u)' = u' \\cos u"
        ],
        "points": [
          "<b>(5) 改寫為負冪</b>：$y = (2x^2 - 1)^{-3}$，避免使用商法則。",
          "<b>(5) 內層是二次式</b>：內層 $(2x^2 - 1)' = 4x$。"
        ],
        "pitfall": "(5) 內層導數為 $4x$，不是 4 也不是 2。"
      },
      "solution": {
        "thinking": "識別內外層結構，注意負冪運算與三角相角求導。",
        "steps": [
          "(4) 外層 $u^5$，內層 $u = 2+3x$，$u' = 3$。<br>$\\frac{dy}{dx} = 5(2 + 3x)^4 \\cdot 3 = 15(2 + 3x)^4$。",
          "(5) 改寫 $y = (2x^2 - 1)^{-3}$。<br>$\\frac{dy}{dx} = -3(2x^2 - 1)^{-4} \\cdot (4x) = -\\frac{12x}{(2x^2 - 1)^4}$。",
          "(6) 外層 $\\sin u$，內層 $u = 3x - \\frac{\\pi}{4}$，$u' = 3$。<br>$\\frac{dy}{dx} = 3\\cos\\left(3x - \\frac{\\pi}{4}\\right)$。"
        ],
        "ans": "(4) 15(2+3x)^4；(5) -\\frac{12x}{(2x^2-1)^4}；(6) 3\\cos\\left(3x-\\frac{\\pi}{4}\\right)",
        "quickTip": "分母冪函數直接寫成 $u^{-n}$，一步求導得 $-n u^{-(n+1)} u'$！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第11題(7~9)",
      "topic": "多重複合函數求導 (對數三角、指數函數、乘積與三角二次)",
      "score": "10分",
      "q": "求下列函數的導數 $\\frac{dy}{dx}$：<br>(7) $y = \\ln(\\sin(2x + 1))$；<br>(8) $y = 4^{x^2 + 3x - 1}$；<br>(9) $y = x\\cos(x^2 + 1)$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(\\ln u)' = \\frac{u'}{u}",
          "(a^u)' = a^u \\ln a \\cdot u'",
          "(u v)' = u' v + u v'"
        ],
        "points": [
          "<b>(7) 三重複合</b>：$\\ln \\to \\sin \\to (2x+1)$，結果化簡為 $2\\cot(2x+1)$。",
          "<b>(8) 一般底數指數求導</b>：必須乘上 $\\ln 4$ 與內層導數。",
          "<b>(9) 乘積與複合並存</b>：外層乘積，後項複合。"
        ],
        "pitfall": "指數函數 $a^u$ 求導時容易漏掉 $\\ln a$；對數求導 $\\frac{\\cos u}{\\sin u} = \\cot u$。"
      },
      "solution": {
        "thinking": "三重複合逐層求導；一般指數用底數對數；乘積法則結合連鎖律。",
        "steps": [
          "(7) $\\frac{dy}{dx} = \\frac{1}{\\sin(2x+1)} \\cdot \\cos(2x+1) \\cdot 2 = 2\\frac{\\cos(2x+1)}{\\sin(2x+1)} = 2\\cot(2x+1)$。",
          "(8) 外層 $4^u$ 導為 $4^u \\ln 4$，內層 $(x^2+3x-1)' = 2x+3$。<br>$\\frac{dy}{dx} = (2x+3) 4^{x^2+3x-1} \\ln 4$。",
          "(9) 乘積法則：$\\frac{dy}{dx} = (x)'\\cos(x^2+1) + x [\\cos(x^2+1)]'$<br>$= \\cos(x^2+1) + x [-\\sin(x^2+1) \\cdot 2x] = \\cos(x^2+1) - 2x^2\\sin(x^2+1)$。"
        ],
        "ans": "(7) 2\\cot(2x+1)；(8) (2x+3)4^{x^2+3x-1}\\ln 4；(9) \\cos(x^2+1) - 2x^2\\sin(x^2+1)",
        "quickTip": "$\\ln(\\sin u)$ 求導就是 $u' \\cot u$！直接口算 $2\\cot(2x+1)$。"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第12題",
      "topic": "高階導數 — 二階導數的計算 (顯函數與隱函數)",
      "score": "10分",
      "q": "求下列函數的二階導數 $\\frac{d^2y}{dx^2}$：<br>(1) $y = x^3 + 3x - 10$；<br>(2) $x^2 + y^2 = 12$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)",
          "x^2 + y^2 = R^2 \\implies y' = -\\frac{x}{y}, \\quad y'' = -\\frac{R^2}{y^3}"
        ],
        "points": [
          "<b>(1) 連續求導兩次</b>：先求 $y'$ 再對 $y'$ 求導。",
          "<b>(2) 隱函數二階求導</b>：對一階導式再次對 $x$ 求導，並將 $y'$ 與原方程代入回代化簡！"
        ],
        "pitfall": "隱函數二階求導後，答案中不得殘留 $y'$，且必須利用原方程 $x^2+y^2=12$ 進行極限化簡！"
      },
      "solution": {
        "thinking": "(1) 直接兩次求導；(2) 對圓方程隱函數求導兩次，將 $x^2+y^2=12$ 回代化為最簡。",
        "steps": [
          "(1) 一階導數：$\\frac{dy}{dx} = 3x^2 + 3$。<br>二階導數：$\\frac{d^2y}{dx^2} = \\frac{d}{dx}(3x^2 + 3) = 6x$。",
          "(2) 對 $x^2 + y^2 = 12$ 兩邊對 $x$ 求導：$2x + 2y y' = 0 \\implies y' = -\\frac{x}{y}$。<br>對 $y' = -\\frac{x}{y}$ 兩邊再對 $x$ 求導：<br>$y'' = -\\frac{1 \\cdot y - x \\cdot y'}{y^2} = -\\frac{y - x\\left(-\\frac{x}{y}\\right)}{y^2} = -\\frac{y^2 + x^2}{y^3}$。<br>由原方程知 $x^2 + y^2 = 12$，代入得：$\\frac{d^2y}{dx^2} = -\\frac{12}{y^3}$。"
        ],
        "ans": "(1) 6x；(2) -\\frac{12}{y^3}",
        "quickTip": "圓方程 $x^2 + y^2 = R^2$ 的二階導數必為 $-\\frac{R^2}{y^3}$！記住這個二階經典結論秒殺全場。"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第13題",
      "topic": "隱函數的一階導數求法",
      "score": "10分",
      "q": "求下列隱函數的導數 $\\frac{dy}{dx}$：<br>(1) $\\cos\\frac{1}{5}y = \\sin 2x$；<br>(2) $x^2 - \\frac{y^2}{4} + 2x - 3y + 3 = 0$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\frac{d}{dx}[f(y)] = f'(y) \\frac{dy}{dx}",
          "\\frac{d}{dx}\\left(\\cos\\frac{y}{5}\\right) = -\\frac{1}{5}\\sin\\frac{y}{5} \\cdot \\frac{dy}{dx}"
        ],
        "points": [
          "<b>兩邊同時對 x 求導</b>：遇 $y$ 的函數時，視 $y$ 為 $x$ 的函數，求導後必乘 $\\frac{dy}{dx}$。",
          "<b>移項因式分解</b>：將含 $\\frac{dy}{dx}$ 的項移到左邊，其餘項移到右邊解出。"
        ],
        "pitfall": "不要遺漏連鎖律常數係數，如 $\\frac{1}{5}y$ 求導為 $\\frac{1}{5}y'$。"
      },
      "solution": {
        "thinking": "方程兩側對 $x$ 求導，把 $y'$ 當作未知數解線性方程。",
        "steps": [
          "(1) 兩邊對 $x$ 求導：$-\\sin\\left(\\frac{1}{5}y\\right) \\cdot \\frac{1}{5} \\frac{dy}{dx} = 2\\cos 2x$。<br>解得：$\\frac{dy}{dx} = -\\frac{10\\cos 2x}{\\sin\\frac{y}{5}}$。",
          "(2) 兩邊對 $x$ 求導：$2x - \\frac{2y}{4}\\frac{dy}{dx} + 2 - 3\\frac{dy}{dx} = 0$。<br>化簡：$2x + 2 - \\left(\\frac{y}{2} + 3\\right)\\frac{dy}{dx} = 0$。<br>$\\left(\\frac{y+6}{2}\\right)\\frac{dy}{dx} = 2(x+1) \\implies \\frac{dy}{dx} = \\frac{4(x+1)}{y+6}$。"
        ],
        "ans": "(1) -\\frac{10\\cos 2x}{\\sin\\frac{y}{5}}；(2) \\frac{4(x+1)}{y+6}",
        "quickTip": "公式法：$\\frac{dy}{dx} = -\\frac{F_x}{F_y}$。對 (2) $F_x = 2x+2$，$F_y = -y/2 - 3$，比值即為 $\\frac{4(x+1)}{y+6}$！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第14題",
      "topic": "有理分式的高階導數與給定點求值",
      "score": "8分",
      "q": "設 $y = \\frac{x}{x^2 + 1}$，求 $\\left.\\frac{dy}{dx}\\right|_{x=1}$ 及 $\\left.\\frac{d^2y}{dx^2}\\right|_{x=-1}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y' = \\frac{1(x^2+1) - x(2x)}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}",
          "y'' = \\frac{-2x(x^2+1)^2 - (1-x^2) \\cdot 2(x^2+1)(2x)}{(x^2+1)^4} = \\frac{2x(x^2 - 3)}{(x^2+1)^3}"
        ],
        "points": [
          "<b>一階導求值</b>：代入 $x=1$ 得分子 $1 - 1^2 = 0$！",
          "<b>二階導求值</b>：代入 $x=-1$，注意約去公因式 $(x^2+1)$。"
        ],
        "pitfall": "求二階導時務必先約掉分子分母的 $(x^2+1)$，避免四次方展開的繁重運算。"
      },
      "solution": {
        "thinking": "商法則求一階導數，約分求二階導數，分別代入指定點求值。",
        "steps": [
          "求一階導數：$\\frac{dy}{dx} = \\frac{1(x^2+1) - x(2x)}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}$。<br>代入 $x = 1$：$\\left.\\frac{dy}{dx}\\right|_{x=1} = \\frac{1 - 1^2}{(1+1)^2} = 0$。",
          "求二階導數：<br>$\\frac{d^2y}{dx^2} = \\frac{-2x(x^2+1)^2 - (1-x^2) \\cdot 2(x^2+1)(2x)}{(x^2+1)^4} = \\frac{-2x(x^2+1) - 4x(1-x^2)}{(x^2+1)^3} = \\frac{2x^3 - 6x}{(x^2+1)^3} = \\frac{2x(x^2-3)}{(x^2+1)^3}$。<br>代入 $x = -1$：<br>$\\left.\\frac{d^2y}{dx^2}\\right|_{x=-1} = \\frac{2(-1)((-1)^2 - 3)}{((-1)^2 + 1)^3} = \\frac{-2(1 - 3)}{2^3} = \\frac{4}{8} = \\frac{1}{2}$。"
        ],
        "ans": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 0, \\quad \\left.\\frac{d^2y}{dx^2}\\right|_{x=-1} = \\frac{1}{2}",
        "quickTip": "在 $x=1$ 處分子為 $1 - x^2 = 0$，一階導直接為 0！二階導代入 $x=-1$ 得 $4/8 = 1/2$。"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第15題",
      "topic": "多項式的一階與二階導數點值",
      "score": "6分",
      "q": "設 $y = x^5 - 5x^3$，求 $f'(2)$ 及 $f''(1)$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x) = 5x^4 - 15x^2",
          "f''(x) = 20x^3 - 30x"
        ],
        "points": [
          "<b>冪函數連續求導</b>：逐次降冪乘係數。",
          "<b>代入指定點計算</b>：$2^4 = 16, 2^2 = 4$。"
        ],
        "pitfall": "計算 $f'(2)$ 時注意運算優先級：$5(16) - 15(4) = 80 - 60 = 20$。"
      },
      "solution": {
        "thinking": "連續求導兩次，分別代入自變量值 2 與 1。",
        "steps": [
          "一階求導：$f'(x) = 5x^4 - 15x^2$。<br>計算 $f'(2) = 5(2^4) - 15(2^2) = 5(16) - 15(4) = 80 - 60 = 20$。",
          "二階求導：$f''(x) = (5x^4 - 15x^2)' = 20x^3 - 30x$。<br>計算 $f''(1) = 20(1^3) - 30(1) = 20 - 30 = -10$。"
        ],
        "ans": "f'(2) = 20, \\quad f''(1) = -10",
        "quickTip": "$f'(2) = 5(16) - 15(4) = 20$；$f''(1) = 20 - 30 = -10$。心算即得！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第16題",
      "topic": "原點處一階與二階導數計算",
      "score": "6分",
      "q": "設 $y = 2x^3 - 15x^2 + 24x$，求 $\\left.\\frac{dy}{dx}\\right|_{x=0}$ 及 $\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y' = 6x^2 - 30x + 24",
          "y'' = 12x - 30"
        ],
        "points": [
          "<b>在原點求導的特徵</b>：求導後令 $x=0$，即為導函數的常數項！"
        ],
        "pitfall": "切勿代錯點，此題兩問均是在 $x=0$ 處求值。"
      },
      "solution": {
        "thinking": "求一階導和二階導，直接取其常數項。",
        "steps": [
          "求一階導數：$\\frac{dy}{dx} = 6x^2 - 30x + 24$。<br>代入 $x = 0$：$\\left.\\frac{dy}{dx}\\right|_{x=0} = 24$。",
          "求二階導數：$\\frac{d^2y}{dx^2} = 12x - 30$。<br>代入 $x = 0$：$\\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = -30$。"
        ],
        "ans": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 24, \\quad \\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = -30",
        "quickTip": "$x=0$ 處導數就是一次項係數 24，二階導就是二次項係數的 2 倍即 $2 \\times (-15) = -30$！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第17題",
      "topic": "三次多項式指定點導數計算",
      "score": "6分",
      "q": "設函數 $f(x) = x^3 - 6x^2 + 9x + 2$，求 $f'(-2)$ 及 $f''(0)$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x) = 3x^2 - 12x + 9",
          "f''(x) = 6x - 12"
        ],
        "points": [
          "<b>負數代入注意符號</b>：$(-2)^2 = 4, -12(-2) = +24$。",
          "<b>二階導在 0 處</b>：常數項為 -12。"
        ],
        "pitfall": "負負得正：$-12(-2) = +24$，避免算成 $-24$。"
      },
      "solution": {
        "thinking": "分別求出一階和二階導函數，代入 $x=-2$ 與 $x=0$。",
        "steps": [
          "求一階導：$f'(x) = 3x^2 - 12x + 9$。<br>代入 $x = -2$：$f'(-2) = 3(-2)^2 - 12(-2) + 9 = 3(4) + 24 + 9 = 12 + 24 + 9 = 45$。",
          "求二階導：$f''(x) = 6x - 12$。<br>代入 $x = 0$：$f''(0) = 6(0) - 12 = -12$。"
        ],
        "ans": "f'(-2) = 45, \\quad f''(0) = -12",
        "quickTip": "$f'(-2) = 12 + 24 + 9 = 45$；$f''(0) = -12$。"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第18題",
      "topic": "圓柱表面積函數構建與一二階求導",
      "score": "8分",
      "q": "一底半徑為 $x$ 的正圓柱，其體積為 $54\\pi$。設該圓柱的表面面積為 $S(x)$：<br>(1) 證明 $S(x) = 2\\pi\\left(x^2 + \\frac{54}{x}\\right), \\quad x > 0$；<br>(2) 求 $\\frac{dS}{dx}$ 及 $\\frac{d^2S}{dx^2}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "V = \\pi x^2 h = 54\\pi \\implies h = \\frac{54}{x^2}",
          "S = 2\\pi x^2 + 2\\pi x h",
          "\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}, \\quad \\left(\\frac{1}{x^2}\\right)' = -\\frac{2}{x^3}"
        ],
        "points": [
          "<b>消元法</b>：利用體積公式將高 $h$ 用底半徑 $x$ 表示。",
          "<b>表面積組成</b>：兩個底圓面積 $2\\pi x^2$ 加上側面展開面積 $2\\pi x h$。"
        ],
        "pitfall": "正圓柱全表面積包含上底和下底，底面積是 $2 \\times \\pi x^2$。"
      },
      "solution": {
        "thinking": "由體積確定高 $h(x)$，代入全表面積公式消去 $h$ 完成證明；再對 $x$ 連續求導兩次。",
        "steps": [
          "(1) 設正圓柱的高為 $h$。由體積公式：$V = \\pi x^2 h = 54\\pi \\implies h = \\frac{54}{x^2}$。<br>該圓柱的全表面面積由兩底圓和一個側面組成：<br>$S(x) = 2\\pi x^2 + 2\\pi x h = 2\\pi x^2 + 2\\pi x \\left(\\frac{54}{x^2}\\right) = 2\\pi x^2 + 2\\pi\\left(\\frac{54}{x}\\right) = 2\\pi\\left(x^2 + \\frac{54}{x}\\right), \\quad x > 0$。得證！",
          "(2) 對 $S(x)$ 求一階導數：<br>$\\frac{dS}{dx} = 2\\pi\\left(2x - \\frac{54}{x^2}\\right)$。<br>對 $S(x)$ 求二階導數：<br>$\\frac{d^2S}{dx^2} = 2\\pi\\left(2 - 54(-2x^{-3})\\right) = 2\\pi\\left(2 + \\frac{108}{x^3}\\right)$。"
        ],
        "ans": "(1) 見步驟證明；(2) \\frac{dS}{dx} = 2\\pi\\left(2x - \\frac{54}{x^2}\\right), \\quad \\frac{d^2S}{dx^2} = 2\\pi\\left(2 + \\frac{108}{x^3}\\right)",
        "quickTip": "令 $\\frac{dS}{dx} = 0 \\implies 2x = 54/x^2 \\implies x^3 = 27 \\implies x = 3$ 即為表面積最小的最優尺寸！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第19題",
      "topic": "正圓錐幾何關係與體積平方函數求導",
      "score": "8分",
      "q": "已知正圓錐的底半徑為 $r\\text{ cm}$，體積為 $V\\text{ cm}^3$ 及表面面積為 $4\\pi\\text{ cm}^2$：<br>(1) 以 $r$ 表示 $V^2$；<br>(2) 求 $V^2(r)$ 的一階導數。",
      "options": [],
      "knowledge": {
        "formulas": [
          "S = \\pi r^2 + \\pi r l = 4\\pi \\implies l = \\frac{4 - r^2}{r}",
          "h^2 = l^2 - r^2",
          "V = \\frac{1}{3}\\pi r^2 h \\implies V^2 = \\frac{1}{9}\\pi^2 r^4 h^2"
        ],
        "points": [
          "<b>母線長表示</b>：側面展開扇形面積加底圓面積等於全表面積 $4\\pi$。",
          "<b>勾股定理求高</b>：$h^2 = l^2 - r^2 = \\frac{(4-r^2)^2 - r^4}{r^2} = \\frac{16 - 8r^2}{r^2}$。"
        ],
        "pitfall": "求 $V^2$ 可以避免根號運算，化簡後為乾淨的多項式。"
      },
      "solution": {
        "thinking": "由全表面積表示母線長 $l$，勾股定理得高 $h^2$，代入 $V^2$ 公式消元並求導。",
        "steps": [
          "(1) 圓錐表面積：$S = \\pi r^2 + \\pi r l = 4\\pi \\implies \\pi r l = 4\\pi - \\pi r^2 \\implies l = \\frac{4 - r^2}{r}$。<br>由勾股定理：$h^2 = l^2 - r^2 = \\left(\\frac{4-r^2}{r}\\right)^2 - r^2 = \\frac{16 - 8r^2 + r^4 - r^4}{r^2} = \\frac{16 - 8r^2}{r^2}$。<br>體積公式：$V = \\frac{1}{3}\\pi r^2 h \\implies V^2 = \\frac{1}{9}\\pi^2 r^4 h^2$。<br>代入 $h^2$ 得：$V^2 = \\frac{1}{9}\\pi^2 r^4 \\left(\\frac{16 - 8r^2}{r^2}\\right) = \\frac{\\pi^2}{9} r^2 (16 - 8r^2) = \\frac{8\\pi^2}{9}(2r^2 - r^4)$。",
          "(2) 對 $V^2$ 關於 $r$ 求導：<br>$\\frac{d(V^2)}{dr} = \\frac{8\\pi^2}{9}(4r - 4r^3) = \\frac{32\\pi^2}{9}r(1 - r^2)$。"
        ],
        "ans": "(1) V^2 = \\frac{8\\pi^2}{9}(2r^2 - r^4)；(2) \\frac{d(V^2)}{dr} = \\frac{32\\pi^2}{9}(r - r^3)",
        "quickTip": "令導數為 0 得 $r = 1\\text{ cm}$，此時體積取得最大值！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第20題",
      "topic": "正圓柱體積函數與高階導數",
      "score": "8分",
      "q": "一正圓柱的底半徑和高之和為 $36\\text{ cm}$。設此正圓柱的底半徑為 $x\\text{ cm}$ 及體積為 $V(x)\\text{ cm}^3$，其中 $V(x)$ 為 $x$ 的函數：<br>(1) 求 $V(x)$；<br>(2) 求 $V'(x)$ 及 $V''(x)$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "x + h = 36 \\implies h = 36 - x",
          "V(x) = \\pi x^2 h = \\pi x^2 (36 - x) = \\pi (36x^2 - x^3)",
          "V'(x) = \\pi(72x - 3x^2), \\quad V''(x) = \\pi(72 - 6x)"
        ],
        "points": [
          "<b>自變量範圍</b>：$0 < x < 36$。",
          "<b>三次多項式求導</b>：展開後逐項求導。"
        ],
        "pitfall": "展開時注意係數：$\\pi x^2(36-x) = 36\\pi x^2 - \\pi x^3$。"
      },
      "solution": {
        "thinking": "由半徑與高之和消去高，建立體積多項式函數，依次求出一階與二階導數。",
        "steps": [
          "(1) 設正圓柱的高為 $h$。由題意 $x + h = 36 \\implies h = 36 - x$。<br>體積為：$V(x) = \\pi x^2 h = \\pi x^2 (36 - x) = \\pi (36x^2 - x^3)$（其中 $0 < x < 36$）。",
          "(2) 求一階導：$V'(x) = \\pi(72x - 3x^2) = 3\\pi x(24 - x)$。<br>求二階導：$V''(x) = \\pi(72 - 6x) = 6\\pi(12 - x)$。"
        ],
        "ans": "(1) V(x) = \\pi(36x^2 - x^3)；(2) V'(x) = 3\\pi x(24 - x), \\quad V''(x) = 6\\pi(12 - x)",
        "quickTip": "令 $V'(x) = 0$ 得 $x = 24$，此時 $V''(24) = 6\\pi(12-24) < 0$，體積取得最大值！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第21題",
      "topic": "原函數與導函數圖像對應辨析",
      "score": "4分",
      "q": "已知二次函數 $f(x)$ 的圖像如圖所示（開口向下，對稱軸為 $y$ 軸，零點為 $\\pm 1$），則其導函數 $f'(x)$ 的圖像大致形狀是 $(\\quad)$。<div style=\"display:flex;justify-content:center;gap:16px;margin:8px 0;flex-wrap:wrap;\"><img src=\"img/p2_img1_89.png\" style=\"max-height:120px;\" alt=\"f(x)原函數圖像\" /><img src=\"img/p2_img2_90.png\" style=\"max-height:120px;\" alt=\"選項ABCD導函數圖像\" /></div>",
      "options": [
        "A. 選項 A",
        "B. 選項 B (過原點斜率為負的直線)",
        "C. 選項 C",
        "D. 選項 D"
      ],
      "knowledge": {
        "formulas": [
          "f(x) = a x^2 + c \\quad (a < 0)",
          "f'(x) = 2a x \\quad (2a < 0)"
        ],
        "points": [
          "<b>二次函數求導為一次函數</b>：拋物線的導函數必然是一條直線！",
          "<b>斜率的正負</b>：原圖開口向下，說明 $a < 0$，因此導函數直線的斜率 $2a < 0$（遞減直線）。",
          "<b>過原點性質</b>：對稱軸為 $x=0$，極值點在原點，故 $f'(0) = 0$，直線必過原點 $(0, 0)$。"
        ],
        "pitfall": "注意看選項 B 與 A 的差別：A 不過原點，B 正好過原點且斜率為負。"
      },
      "solution": {
        "thinking": "由原函數拋物線開口向下且頂點在 $y$ 軸，判定其解析式為 $f(x) = ax^2 + c$ ($a < 0$)，求導得 $f'(x) = 2ax$ 為過原點且斜率為負的直線。",
        "steps": [
          "觀察 $f(x)$ 圖像：為開口向下的拋物線，且對稱軸為 $y$ 軸（$x = 0$）。",
          "設函數解析式為 $f(x) = -k x^2 + c$（$k > 0, c > 0$）。",
          "求導得導函數：$f'(x) = -2kx$。",
          "分析 $f'(x)$ 圖像特徵：<br>① 為一次函數，圖像是直線；<br>② 當 $x = 0$ 時 $f'(0) = 0$，直線必過坐標原點 $(0, 0)$；<br>③ 斜率 $-2k < 0$，為單調遞減的直線（從左上穿向右下）。",
          "對比選項圖形，只有 B 符合過原點且斜率為負。"
        ],
        "ans": "B",
        "quickTip": "開口向下 $\\implies$ 導數斜率為負；頂點在 $x=0 \\implies$ 導數過原點！唯有 B 完全吻合！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "單選題 第22題",
      "topic": "三次函數導函數特徵與圖像選擇",
      "score": "4分",
      "q": "下列圖像中，是函數 $f(x) = \\frac{1}{3}x^3 + ax^2 + (a^2 - 1)x + 1$ ($a \\in \\mathbb{R}, a \\ne 0$) 的導函數 $f'(x)$ 的圖像為 $(\\quad)$。<div style=\"text-align:center;margin:8px 0;\"><img src=\"img/p2_img3_91.png\" style=\"max-height:130px;\" alt=\"候選圖像(1)(2)(3)(4)\" /></div>",
      "options": [
        "A. (1)",
        "B. (2)",
        "C. (3)",
        "D. (4)"
      ],
      "knowledge": {
        "formulas": [
          "f'(x) = x^2 + 2ax + (a^2 - 1) = (x+a)^2 - 1",
          "\\text{對稱軸：} x = -a \\ne 0",
          "\\text{頂點坐標：} (-a, -1)"
        ],
        "points": [
          "<b>開口方向</b>：$x^2$ 的係數為 $+1 > 0$，故拋物線必開口向上，排除 (2) 和 (4)。",
          "<b>對稱軸位置</b>：對稱軸為 $x = -a$。題幹指明 $a \\ne 0$，因此對稱軸不可能在 $y$ 軸上，排除 (1)！",
          "<b>頂點縱坐標</b>：頂點最小值為 $-1 < 0$，拋物線與 $x$ 軸有兩個交點。"
        ],
        "pitfall": "容易忽略 $a \\ne 0$ 的非零條件而錯選 (1)。"
      },
      "solution": {
        "thinking": "求出導函數解析式，配方確定頂點坐標與對稱軸，利用排除法選出唯一合適圖像。",
        "steps": [
          "求導函數：$f'(x) = \\left(\\frac{1}{3}x^3 + ax^2 + (a^2 - 1)x + 1\\right)' = x^2 + 2ax + (a^2 - 1)$。",
          "配方：$f'(x) = (x + a)^2 - 1$。",
          "分析拋物線性質：<br>① 二次項係數為 $1 > 0$，開口向上，排除開口向下的 (2) 和 (4)；<br>② 對稱軸為直線 $x = -a$。因題目已知 $a \\ne 0$，故對稱軸絕不能是 $y$ 軸（$x = 0$），排除對稱軸在 $y$ 軸上的 (1)；<br>③ 頂點為 $(-a, -1)$，頂點縱坐標在 $x$ 軸下方，且對稱軸偏離 $y$ 軸。",
          "因此符合條件的圖像只能是 (3)。"
        ],
        "ans": "C",
        "quickTip": "開口向上排除 (2)(4)；$a \\ne 0$ 對稱軸不偏不倚必排除 (1)；秒選 (3)，答案為 C！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第23題",
      "topic": "多項式給定點導數聯立求解",
      "score": "8分",
      "q": "給出曲線 $y = x(x - a)(x - b)$，其中 $a$ 和 $b$ 是正數。設 $\\left.\\frac{dy}{dx}\\right|_{x=a} = -1$ 及 $\\left.\\frac{dy}{dx}\\right|_{x=b} = 2$，求 $a$ 和 $b$ 的值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "y = x(x-a)(x-b)",
          "y'(a) = a(a-b)",
          "y'(b) = b(b-a)"
        ],
        "points": [
          "<b>零點處求導速算訣竅</b>：若 $f(x) = (x-r) g(x)$，則 $f'(r) = g(r)$！",
          "代入得：$y'(a) = a(a-b) = -1$，即 $a(b-a) = 1$；$y'(b) = b(b-a) = 2$。"
        ],
        "pitfall": "不需要把整個三次式全部展開求導，直接用乘積規則在零點求值能節省大量時間。"
      },
      "solution": {
        "thinking": "利用零點處乘積求導特性直接得出 $y'(a)$ 與 $y'(b)$ 的緊湊表達式，兩式相除即可求出 $a$ 與 $b$。",
        "steps": [
          "對 $y = x(x-a)(x-b)$ 求導：<br>$y' = (x-a)(x-b) + x(x-b) + x(x-a)$。",
          "代入 $x = a$：$y'(a) = (0) + a(a-b) + 0 = a(a-b)$。<br>已知 $y'(a) = -1$，故 $a(a-b) = -1 \\implies a(b-a) = 1$　…… ①",
          "代入 $x = b$：$y'(b) = 0 + 0 + b(b-a) = b(b-a)$。<br>已知 $y'(b) = 2$，故 $b(b-a) = 2$　…… ②",
          "將 ② 式除以 ① 式：<br>$\\frac{b(b-a)}{a(b-a)} = \\frac{2}{1} \\implies \\frac{b}{a} = 2 \\implies b = 2a$。",
          "將 $b = 2a$ 代入 ① 式：<br>$a(2a - a) = a^2 = 1$。<br>因為題幹指明 $a$ 為正數，所以 $a = 1$。",
          "進而求得 $b = 2a = 2$。"
        ],
        "ans": "a = 1, \\quad b = 2",
        "quickTip": "兩式相比：$b(b-a) / [a(b-a)] = b/a = 2/1 \\implies b = 2a$；代入 $a(a) = 1 \\implies a = 1, b = 2$，秒殺！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第24題",
      "topic": "用導數極限定義求導 (一次分式/二次式)",
      "score": "6分",
      "q": "用導數定義求函數 $y = f(x) = x^2 + 2x$ 的導數。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}",
          "\\Delta y = f(x + \\Delta x) - f(x)"
        ],
        "points": [
          "<b>定義法三步曲</b>：① 求增量 $\\Delta y$；② 算差商 $\\frac{\\Delta y}{\\Delta x}$；③ 取極限 $\\lim_{\\Delta x \\to 0}$。",
          "規範作答必須寫出 $\\Delta x$ 的極限式，不能直接寫求導公式。"
        ],
        "pitfall": "務必寫出「當 $\\Delta x \\to 0$ 時取極限」，不可跳過差商化簡步驟。"
      },
      "solution": {
        "thinking": "按定義求 $\\Delta y = f(x+\\Delta x) - f(x)$，消去公因式 $\\Delta x$ 後取極限。",
        "steps": [
          "第一步，求函數增量 $\\Delta y$：<br>$\\Delta y = f(x + \\Delta x) - f(x) = [(x + \\Delta x)^2 + 2(x + \\Delta x)] - (x^2 + 2x)$<br>$= x^2 + 2x\\Delta x + (\\Delta x)^2 + 2x + 2\\Delta x - x^2 - 2x = (2x + 2)\\Delta x + (\\Delta x)^2$。",
          "第二步，計算差商 $\\frac{\\Delta y}{\\Delta x}$：<br>$\\frac{\\Delta y}{\\Delta x} = \\frac{(2x + 2)\\Delta x + (\\Delta x)^2}{\\Delta x} = 2x + 2 + \\Delta x$（其中 $\\Delta x \\ne 0$）。",
          "第三步，取極限：<br>$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{\\Delta x \\to 0} (2x + 2 + \\Delta x) = 2x + 2$。"
        ],
        "ans": "f'(x) = 2x + 2",
        "quickTip": "常規求導驗算：$(x^2 + 2x)' = 2x + 2$，定義法三步踩點滿分。"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第25題",
      "topic": "用導數極限定義求導 (一般二次多項式)",
      "score": "6分",
      "q": "用導數定義求函數 $y = f(x) = 3x^2 - 2x$ 的導數。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}"
        ],
        "points": [
          "<b>展開化簡</b>：$3(x+\\Delta x)^2 - 2(x+\\Delta x) = 3x^2 + 6x\\Delta x + 3(\\Delta x)^2 - 2x - 2\\Delta x$。",
          "<b>提出公因式</b>：$\\Delta y = (6x - 2)\\Delta x + 3(\\Delta x)^2$。"
        ],
        "pitfall": "注意係數 3 乘到交叉項上為 $6x\\Delta x$。"
      },
      "solution": {
        "thinking": "嚴格遵循定義步驟展開分子，約去 $\\Delta x$ 後令 $\\Delta x \\to 0$。",
        "steps": [
          "計算增量 $\\Delta y$：<br>$\\Delta y = f(x + \\Delta x) - f(x) = [3(x + \\Delta x)^2 - 2(x + \\Delta x)] - (3x^2 - 2x)$<br>$= 3(x^2 + 2x\\Delta x + (\\Delta x)^2) - 2x - 2\\Delta x - 3x^2 + 2x$<br>$= 6x\\Delta x + 3(\\Delta x)^2 - 2\\Delta x = (6x - 2)\\Delta x + 3(\\Delta x)^2$。",
          "計算平均變化率：<br>$\\frac{\\Delta y}{\\Delta x} = 6x - 2 + 3\\Delta x$。",
          "取極限得瞬時變化率：<br>$f'(x) = \\lim_{\\Delta x \\to 0} (6x - 2 + 3\\Delta x) = 6x - 2$。"
        ],
        "ans": "f'(x) = 6x - 2",
        "quickTip": "$(3x^2 - 2x)' = 6x - 2$，定義法標準得分步驟。"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第26題",
      "topic": "隱函數對數與三角求導",
      "score": "8分",
      "q": "求函數 $\\sin(xy) - \\ln(x+1) + \\ln y = 1$ 的導數 $\\frac{dy}{dx}$。",
      "options": [],
      "knowledge": {
        "formulas": [
          "\\frac{d}{dx}[\\sin(xy)] = \\cos(xy)(y + xy')",
          "\\frac{d}{dx}[\\ln(x+1)] = \\frac{1}{x+1}",
          "\\frac{d}{dx}(\\ln y) = \\frac{y'}{y}"
        ],
        "points": [
          "<b>乘積複合求導</b>：$\\sin(xy)$ 內部的 $xy$ 是乘積，求導為 $(xy)' = y + xy'$。",
          "<b>因式提取 $y'$</b>：整理出 $y'$ 的係數並移項。"
        ],
        "pitfall": "切勿漏掉 $\\sin(xy)$ 中的內層導數乘積項 $y + x y'$。"
      },
      "solution": {
        "thinking": "方程兩端對 $x$ 求導，展開括號後合併含 $y'$ 的同類項。",
        "steps": [
          "對方程兩側逐項對 $x$ 求導：<br>$\\cos(xy) \\cdot (y + x y') - \\frac{1}{x+1} + \\frac{y'}{y} = 0$。",
          "展開括號：<br>$y\\cos(xy) + x\\cos(xy) y' - \\frac{1}{x+1} + \\frac{1}{y} y' = 0$。",
          "將含 $y'$ 的項留在左邊，其餘項移到右邊：<br>$\\left(x\\cos(xy) + \\frac{1}{y}\\right) y' = \\frac{1}{x+1} - y\\cos(xy)$。",
          "通分並解出 $y'$：<br>$\\frac{xy\\cos(xy) + 1}{y} y' = \\frac{1 - y(x+1)\\cos(xy)}{x+1}$。<br>$\\frac{dy}{dx} = \\frac{y [1 - y(x+1)\\cos(xy)]}{(x+1)[xy\\cos(xy) + 1]}$。"
        ],
        "ans": "\\frac{dy}{dx} = \\frac{y [1 - y(x+1)\\cos(xy)]}{(x+1)[xy\\cos(xy) + 1]}",
        "quickTip": "移項提取 $y'$ 時兩邊同乘 $y$，能快速化去繁分式！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第27題",
      "topic": "含自身導數常數項的方程求解",
      "score": "8分",
      "q": "已知 $f(x)$ 在 $x = x_0$ 處可導，且 $f(x) = 2f'(3)x - 2x^2 + 2\\ln x$，求 $f'(3)$ 的值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "f'(x) = [2f'(3)x]' - (2x^2)' + (2\\ln x)' = 2f'(3) - 4x + \\frac{2}{x}"
        ],
        "points": [
          "<b>$f'(3)$ 是常數</b>：本質是待定常數 $C = f'(3)$，求導時作為係數處理。",
          "<b>代入自身求值</b>：求出 $f'(x)$ 後令 $x = 3$，建立關於 $f'(3)$ 的一元一次方程求解。"
        ],
        "pitfall": "很多人容易把 $f'(3)$ 誤當作變量求導，必須牢記 $f'(3)$ 是一個具體的實數常數！"
      },
      "solution": {
        "thinking": "先將 $f'(3)$ 當作常數對 $f(x)$ 求導，再將 $x=3$ 代入導函數，列出關於 $f'(3)$ 的方程解出。",
        "steps": [
          "注意到 $f'(3)$ 是一個常數。對 $f(x)$ 兩邊對 $x$ 求導：<br>$f'(x) = 2f'(3) - 4x + \\frac{2}{x}$。",
          "在導函數式中令 $x = 3$：<br>$f'(3) = 2f'(3) - 4(3) + \\frac{2}{3}$。",
          "化簡：<br>$f'(3) = 2f'(3) - 12 + \\frac{2}{3} = 2f'(3) - \\frac{34}{3}$。",
          "移項解得：<br>$f'(3) = \\frac{34}{3}$。"
        ],
        "ans": "f'(3) = \\frac{34}{3}",
        "quickTip": "設 $A = f'(3)$，則 $A = 2A - 12 + 2/3 \\implies A = 12 - 2/3 = 34/3$。10 秒秒殺！"
      }
    },
    {
      "year": "2026",
      "paper": "專題一",
      "qNum": "解答題 第28題",
      "topic": "分段函數可導性與點方程",
      "score": "8分",
      "q": "已知分段函數 $f(x) = \\begin{cases} e^x, & x < 0 \\\\ \\ln x, & 0 < x < 1 \\end{cases}$，若 $f'(a) = \\frac{1}{2}$，求實數 $a$ 的值。",
      "options": [],
      "knowledge": {
        "formulas": [
          "(e^x)' = e^x",
          "(\\ln x)' = \\frac{1}{x} \\quad (x > 0)"
        ],
        "points": [
          "<b>分段討論</b>：分別在 $a < 0$ 與 $0 < a < 1$ 兩區間內求導並解方程。",
          "<b>定義域檢驗</b>：解出的解必須落在該分段的區間範圍內！"
        ],
        "pitfall": "解 $1/a = 1/2 \\implies a = 2$，但 $a=2$ 不在區間 $(0, 1)$ 內，為增根，必須堅決捨去！"
      },
      "solution": {
        "thinking": "對各分段區間分別求導，令導數等於 $1/2$ 求出候選解，並檢驗是否落在定義域內。",
        "steps": [
          "當 $x < 0$ 時：$f(x) = e^x \\implies f'(x) = e^x$。<br>令 $f'(a) = e^a = \\frac{1}{2} \\implies a = \\ln\\frac{1}{2} = -\\ln 2$。<br>檢驗：$-\\ln 2 \\approx -0.693 < 0$，符合 $a < 0$ 的範圍條件！",
          "當 $0 < x < 1$ 時：$f(x) = \\ln x \\implies f'(x) = \\frac{1}{x}$。<br>令 $f'(a) = \\frac{1}{a} = \\frac{1}{2} \\implies a = 2$。<br>檢驗：$a = 2 \\notin (0, 1)$，超出分段區間，故捨去！",
          "綜上所述，實數 $a$ 的唯一值為 $-\\ln 2$（或 $\\ln\\frac{1}{2}$）。"
        ],
        "ans": "a = -\\ln 2 \\quad \\left(\\text{或 } \\ln\\frac{1}{2}\\right)",
        "quickTip": "第二段 $1/a = 1/2 \\implies a=2 > 1$ 越界捨去，僅第一段 $e^a = 1/2 \\implies a = -\\ln 2$ 成立！"
      }
    }
  ]
});
})();
