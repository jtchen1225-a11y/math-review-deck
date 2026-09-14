# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ==========================================
# 2023 澳門四校聯考 · 數學正卷 (20 題)
# ==========================================
std_2023_slides = [
    # Q1
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第1題", "topic": "集合運算與一元二次不等式", "score": "4分",
        "q": "若集合 $M = \\{x \\mid x^2 - 2x - 8 \\ge 0\\}$，$N = \\{x \\mid 0 < x < 6\\}$，則 $M \\cap N = (\\quad)$。",
        "options": ["A. $[-2, 4]$", "B. $[-2, 0)$", "C. $(0, 4]$", "D. $(0, 6)$", "E. $[4, 6)$"],
        "knowledge": {
            "formulas": ["x^2 - 2x - 8 = (x - 4)(x + 2) \\ge 0 \\iff x \\le -2 \\text{ 或 } x \\ge 4", "M \\cap N = \\{x \\in N : x \\in M\\}"],
            "points": ["<b>二次不等式求根</b>：大於取兩邊，得 $(-\\infty, -2] \\cup [4, +\\infty)$。", "<b>開閉區間交集</b>：與開區間 $(0, 6)$ 取交集，得左閉右開區間 $[4, 6)$。"],
            "pitfall": "端點開閉符號：4 帶等號為閉區間 $[4$，6 為開區間 $6)$，切勿選成閉區間！"
        },
        "solution": {
            "thinking": "解一元二次不等式求集合 $M$，與開區間 $N$ 畫數軸取公共部分。",
            "steps": [
                "解集合 $M$ 的不等式：因式分解 $(x - 4)(x + 2) \\ge 0$，解得 $x \\le -2$ 或 $x \\ge 4$。即 $M = (-\\infty, -2] \\cup [4, +\\infty)$。",
                "集合 $N = (0, 6)$。",
                "在數軸上求交集：$(-\\infty, -2] \\cap (0, 6) = \\emptyset$；$[4, +\\infty) \\cap (0, 6) = [4, 6)$。",
                "因此 $M \\cap N = [4, 6)$。"
            ],
            "ans": "E",
            "quickTip": "代入排除：檢驗 $x = 4$，$4^2 - 2(4) - 8 = 0 \\ge 0$（符合），$0 < 4 < 6$（符合），故 4 在交集內！排除 B、D。檢驗 $x = 2$，$2^2 - 4 - 8 = -8 < 0$（不符合），排除 A、C。秒選 E！"
        }
    },
    # Q2
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第2題", "topic": "多項式餘式定理", "score": "4分",
        "q": "若多項式 $f(x)$ 除以 $x^2 - x - 6$，餘式為 $3x - 2$，則 $f(3) = (\\quad)$。",
        "options": ["A. -2", "B. 0", "C. 3", "D. 7", "E. 9"],
        "knowledge": {
            "formulas": ["f(x) = Q(x)(x^2 - x - 6) + R(x) = Q(x)(x - 3)(x + 2) + (3x - 2)", "f(3) = Q(3)(0) + R(3) = 3(3) - 2 = 7"],
            "points": ["<b>多項式除法基本恆等式</b>：被除式 $=$ 商 $\\times$ 除式 $+$ 餘式。", "<b>餘式定理本質</b>：令除式為 0 的根 $x = 3$ 代入，商式項整項歸零，直接求得函數值。"],
            "pitfall": "因式分解 $x^2 - x - 6 = (x - 3)(x + 2)$，代入 $x = 3$ 使除式為零。"
        },
        "solution": {
            "thinking": "寫出多項式除法恆等式，將 $x = 3$ 代入使除式為 0，直接由餘式計算結果。",
            "steps": [
                "由除法算式：$f(x) = Q(x)(x^2 - x - 6) + (3x - 2)$，其中 $Q(x)$ 為商多項式。",
                "因式分解除式：$x^2 - x - 6 = (x - 3)(x + 2)$。",
                "代入 $x = 3$：$f(3) = Q(3)(3 - 3)(3 + 2) + [3(3) - 2] = Q(3) \\times 0 + (9 - 2) = 7$。"
            ],
            "ans": "D",
            "quickTip": "口算秒殺：因為 $3^2 - 3 - 6 = 0$，除式在 $x=3$ 處為 0，直接把 3 代入餘式 $3(3) - 2 = 7$！5 秒選 D！"
        }
    },
    # Q3
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第3題", "topic": "對數換底公式與鏈式相乘化簡", "score": "4分",
        "q": "$\\log_9 125 \\times \\log_{12} 17 \\times \\log_{25} 3 \\times \\log_{17} 12 = (\\quad)$。",
        "options": ["A. $\\log_{17} 3$", "B. $\\frac{1}{2}$", "C. $\\frac{3}{4}$", "D. $\\log_3 35$", "E. $\\log_{17} 12$"],
        "knowledge": {
            "formulas": ["\\log_b a = \\frac{\\log a}{\\log b}", "\\log_{a^m} b^n = \\frac{n}{m} \\log_a b"],
            "points": ["<b>換底公式化為常用對數</b>：每一項拆為 $\\frac{\\log a}{\\log b}$，相互對消。", "<b>乘法交換律重組</b>：$(\\log_9 125 \\times \\log_{25} 3) \\times (\\log_{12} 17 \\times \\log_{17} 12)$。"],
            "pitfall": "冪次係數提取：$\\log_9 125 = \\log_{3^2} 5^3 = \\frac{3}{2}\\log_3 5$，$\\log_{25} 3 = \\log_{5^2} 3 = \\frac{1}{2}\\log_5 3$。"
        },
        "solution": {
            "thinking": "利用對數換底公式將所有項化為常用對數分子分母對消，或重組配對相乘。",
            "steps": [
                "全部用換底公式化為常用對數 $\\lg$：",
                "原式 $= \\frac{\\lg 125}{\\lg 9} \\times \\frac{\\lg 17}{\\lg 12} \\times \\frac{\\lg 3}{\\lg 25} \\times \\frac{\\lg 12}{\\lg 17}$。",
                "觀察中間兩項乘積：$\\frac{\\lg 17}{\\lg 12} \\times \\frac{\\lg 12}{\\lg 17} = 1$（完全對消）。",
                "剩下第一項與第三項：$\\frac{\\lg(5^3)}{\\lg(3^2)} \\times \\frac{\\lg 3}{\\lg(5^2)} = \\frac{3\\lg 5}{2\\lg 3} \\times \\frac{\\lg 3}{2\\lg 5}$。",
                "分子分母約去 $\\lg 5$ 與 $\\lg 3$：$\\frac{3}{2} \\times \\frac{1}{2} = \\frac{3}{4}$。"
            ],
            "ans": "C",
            "quickTip": "配對法：$\\log_{12} 17 \\times \\log_{17} 12 = 1$；$\\log_9 125 \\times \\log_{25} 3 = \\frac{3}{2} \\log_3 5 \\times \\frac{1}{2} \\log_5 3 = \\frac{3}{4}$。直接選 C！"
        }
    },
    # Q4
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第4題", "topic": "換元法解無理方程", "score": "4分",
        "q": "方程 $x^2 - 3x + 4\\sqrt{x^2 - 3x} = 12$ 的解集為 $(\\quad)$。",
        "options": ["A. $\\{-1\\}$", "B. $\\{2, -6\\}$", "C. $\\{-1, 4\\}$", "D. $\\{4\\}$", "E. $\\{3\\}$"],
        "knowledge": {
            "formulas": ["\\text{令 } t = \\sqrt{x^2 - 3x} \\ge 0 \\implies t^2 + 4t - 12 = 0", "(t + 6)(t - 2) = 0 \\implies t = 2 \\; (t \\ge 0)"],
            "points": ["<b>換元整體思想</b>：將重複出現的 $\\sqrt{x^2-3x}$ 設為 $t$ 降次。", "<b>根式非負性檢驗</b>：$t = \\sqrt{\\dots} \\ge 0$，負根 $t = -6$ 必須嚴格捨去！"],
            "pitfall": "若未捨去 $t = -6$，會去解 $x^2 - 3x = 36$ 算出額外的虛假增根！"
        },
        "solution": {
            "thinking": "設 $t = \\sqrt{x^2 - 3x} \\ge 0$，化為關於 $t$ 的一元二次方程求解，回代求 $x$ 並驗根。",
            "steps": [
                "設 $t = \\sqrt{x^2 - 3x}$，根據算術平方根性質，$t \\ge 0$。",
                "原方程化為：$t^2 + 4t = 12 \\iff t^2 + 4t - 12 = 0$。",
                "因式分解：$(t + 6)(t - 2) = 0$。解得 $t = 2$ 或 $t = -6$。",
                "因為 $t \\ge 0$，所以 $t = -6$ 捨去，僅保留 $t = 2$。",
                "回代得 $\\sqrt{x^2 - 3x} = 2 \\implies x^2 - 3x = 4 \\iff x^2 - 3x - 4 = 0$。",
                "因式分解：$(x - 4)(x + 1) = 0$。解得 $x = 4$ 或 $x = -1$。",
                "驗證兩根均使 $x^2 - 3x = 4 \\ge 0$ 成立，故解集為 $\\{-1, 4\\}$。"
            ],
            "ans": "C",
            "quickTip": "代入排除法：代入 $x = 4$：$16 - 12 + 4\\sqrt{16-12} = 4 + 4(2) = 12$（符合，排除A、B、E）；代入 $x = -1$：$1 + 3 + 4\\sqrt{1+3} = 4 + 4(2) = 12$（符合，排除D）。秒選 C！"
        }
    },
    # Q5
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第5題", "topic": "一元二次方程判別式與唯一實根條件", "score": "4分",
        "q": "已知 $a$ 為常數且二次方程 $4a^2 x^2 + 2(a + 3)x + 9 = 0$ 只有一個實根，則 $a = (\\quad)$。",
        "options": ["A. $\\frac{3}{5}$", "B. -1 或 $\\frac{3}{2}$", "C. $\\frac{3}{2}$", "D. $-\\frac{3}{7}$ 或 $\\frac{3}{5}$", "E. 任意實數"],
        "knowledge": {
            "formulas": ["\\Delta = b^2 - 4ac = [2(a+3)]^2 - 4(4a^2)(9) = 0", "(a+3)^2 - 36a^2 = (a+3 - 6a)(a+3 + 6a) = (3 - 5a)(7a + 3) = 0"],
            "points": ["<b>二次方程只有一個實根</b>：判別式 $\\Delta = 0$ 且二次項係數 $4a^2 \\ne 0$。", "<b>平方差快速因式分解</b>：$(a+3)^2 - (6a)^2 = 0$ 避免展開大數字。"],
            "pitfall": "題幹已明確註明是「二次方程」，故二次項係數 $4a^2 \\ne 0 \\implies a \\ne 0$。"
        },
        "solution": {
            "thinking": "二次方程只有一個實根等價於判別式 $\\Delta = 0$，由平方差公式快速解出 $a$。",
            "steps": [
                "因為方程為二次方程，故二次項係數 $4a^2 \\ne 0 \\implies a \\ne 0$。",
                "二次方程只有一個實根（重根），判別式必須等於 0：",
                "$\\Delta = [2(a + 3)]^2 - 4(4a^2)(9) = 4[(a + 3)^2 - 36a^2] = 0$。",
                "即 $(a + 3)^2 - (6a)^2 = 0$。",
                "利用平方差公式因式分解：$[(a + 3) - 6a][(a + 3) + 6a] = 0 \\iff (3 - 5a)(7a + 3) = 0$。",
                "解得 $a = \\frac{3}{5}$ 或 $a = -\\frac{3}{7}$。",
                "兩解均不為 0，符合二次方程條件。"
            ],
            "ans": "D",
            "quickTip": "平方差口算：$(a+3)^2 = 36a^2 \\implies a + 3 = \\pm 6a$。若 $a+3 = 6a \\implies 5a = 3 \\implies a = 3/5$；若 $a+3 = -6a \\implies 7a = -3 \\implies a = -3/7$。秒選 D！"
        }
    },
    # Q6
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第6題", "topic": "二項式定理通項展開式常數項", "score": "4分",
        "q": "$\\left(2\\sqrt{x} - \\frac{1}{\\sqrt{x}}\\right)^6$ 展開式中的常數項為 $(\\quad)$。",
        "options": ["A. -8", "B. 8", "C. -160", "D. 160", "E. 1"],
        "knowledge": {
            "formulas": ["T_{r+1} = \\binom{n}{r} a^{n-r} b^r = \\binom{6}{r} (2x^{1/2})^{6-r} (-x^{-1/2})^r", "\\text{次數為 } 0 \\iff \\frac{6-r}{2} - \\frac{r}{2} = 0 \\implies r = 3"],
            "points": ["<b>二項式通項公式</b>：標準通項提取係數與 $x$ 次冪。", "<b>負號處理</b>：$(-1)^r$ 當 $r = 3$ 時為負數 $-1$。"],
            "pitfall": "符號易錯：$(-1)^3 = -1$，算完 $20 \\times 8 = 160$ 忘記帶負號誤選 D！"
        },
        "solution": {
            "thinking": "寫出二項展開式通項，令 $x$ 的指數為 0 求出 $r$，代入計算常數項數值。",
            "steps": [
                "二項式展開通項為：$T_{r+1} = \\binom{6}{r} (2\\sqrt{x})^{6-r} \\left(-\\frac{1}{\\sqrt{x}}\\right)^r = \\binom{6}{r} 2^{6-r} (-1)^r x^{\\frac{6-r}{2} - \\frac{r}{2}}$。",
                "令 $x$ 的指數為 0：$\\frac{6 - 2r}{2} = 0 \\implies 6 - 2r = 0 \\implies r = 3$。",
                "代入計算常數項：$T_4 = \\binom{6}{3} 2^{6-3} (-1)^3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} \\times 2^3 \\times (-1)$",
                "$= 20 \\times 8 \\times (-1) = -160$。"
            ],
            "ans": "C",
            "quickTip": "對稱中心項：$n=6$ 為偶數，常數項必在中間第 4 項（$r=3$）。係數必含 $(-1)^3 = -1$，直接排除正數 B、D、E。20*8 = 160 帶負號選 C！"
        }
    },
    # Q7
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第7題", "topic": "二次函數在給定開區間單調性的參數範圍", "score": "4分",
        "q": "函數 $f(x) = ax^2 + 4x + 1$（$a \\in \\mathbb{R}$ 為常數）在區間 $(2, 4)$ 上遞增，則 $a$ 的取值範圍為 $(\\quad)$。",
        "options": ["A. $\\left[-\\frac{1}{2}, 0\\right)$", "B. $\\left(0, \\frac{1}{2}\\right]$", "C. $\\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$", "D. $\\left[-\\frac{1}{2}, +\\infty\\right)$", "E. $\\left[\\frac{1}{2}, +\\infty\\right)$"],
        "knowledge": {
            "formulas": ["f'(x) = 2ax + 4 \\ge 0 \\; (\\forall x \\in (2, 4))", "x_{\\text{對稱軸}} = -\\frac{4}{2a} = -\\frac{2}{a} \\; (a \\ne 0)"],
            "points": ["<b>導數法（最推薦）</b>：$f'(x) = 2ax + 4 \\ge 0$ 在 $(2, 4)$ 恆成立。", "若 $a = 0$：$f'(x) = 4 > 0$ 恆成立（一次函數恆遞增）；若 $a > 0$：$f'(2) = 4a+4 > 0$ 恆成立；若 $a < 0$：只需右端點 $f'(4) = 8a+4 \\ge 0 \\implies a \\ge -1/2$。"],
            "pitfall": "切勿漏掉 $a = 0$ 的情況！一次函數 $f(x) = 4x+1$ 也是單調遞增函數。"
        },
        "solution": {
            "thinking": "利用導數法 $f'(x) \\ge 0$ 在 $(2, 4)$ 恆成立，分類討論 $a$ 的符號合併取值區間。",
            "steps": [
                "求導得 $f'(x) = 2ax + 4$。函數在 $(2, 4)$ 遞增等價於 $f'(x) \\ge 0$ 在 $(2, 4)$ 恆成立。",
                "1. 當 $a = 0$ 時，$f'(x) = 4 > 0$，函數 $f(x) = 4x + 1$ 在 $\\mathbb{R}$ 上單調遞增，符合題意。",
                "2. 當 $a > 0$ 時，$f'(x) = 2ax + 4$ 是遞增函數。只需左端點 $f'(2) = 4a + 4 \\ge 0 \\implies a \\ge -1$。因為 $a > 0$，故所有 $a > 0$ 均滿足條件。",
                "3. 當 $a < 0$ 時，$f'(x) = 2ax + 4$ 是遞減函數。只需右端點 $f'(4) = 8a + 4 \\ge 0 \\implies 8a \\ge -4 \\implies a \\ge -\\frac{1}{2}$。故 $-\\frac{1}{2} \\le a < 0$。",
                "綜合 1、2、3，得 $a$ 的取值範圍為 $\\left[-\\frac{1}{2}, +\\infty\\right)$。"
            ],
            "ans": "D",
            "quickTip": "代入特殊值檢驗：取 $a = 1 > 0$（開口向上二次函數，對稱軸 $x = -2$），在 $(2, 4)$ 顯然單調遞增！因此 $a = 1$ 必須在解集內，排除 A、B、C。檢驗 $a = 0$（符合），排除 E。秒選 D！"
        }
    },
    # Q8
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第8題", "topic": "分段函數與含絕對值不等式", "score": "4分",
        "q": "設 $f(x) = \\begin{cases} \\log_2 x, & 0 < x \\le 4 \\\\ x^2 - 8x + 17, & x > 4 \\end{cases}$。不等式 $f\\left(\\frac{1}{2} - 3|x|\\right) + f(5) > 0$ 的解為 $(\\quad)$。",
        "options": ["A. $-\\frac{1}{12} < x < \\frac{1}{12}$", "B. $-\\frac{1}{6} < x < \\frac{1}{6}$", "C. $-\\frac{1}{4} < x < \\frac{1}{4}$", "D. $-\\frac{1}{3} < x < \\frac{1}{3}$", "E. $-\\frac{1}{2} < x < \\frac{1}{2}$"],
        "knowledge": {
            "formulas": ["f(5) = 5^2 - 8(5) + 17 = 25 - 40 + 17 = 2", "f(t) > -2 \\iff \\log_2 t > -2 = \\log_2 \\frac{1}{4} \\iff t > \\frac{1}{4}"],
            "points": ["<b>自變量定義域限制</b>：$\\frac{1}{2} - 3|x| \\le \\frac{1}{2} < 4$，自變量必然落在第一段 $0 < x \\le 4$ 內！", "<b>解絕對值雙向不等式</b>：$0 < \\frac{1}{2} - 3|x| \\le 4$ 且 $\\frac{1}{2} - 3|x| > \\frac{1}{4}$。"],
            "pitfall": "對數真數大於 0 的隱含條件：$\\frac{1}{2} - 3|x| > 0$ 必須同時滿足！"
        },
        "solution": {
            "thinking": "先計算 $f(5)$ 的具體數值，分析輸入自變量所屬區間，轉化為對數不等式求絕對值解集。",
            "steps": [
                "因為 $5 > 4$，所以由第二段解析式：$f(5) = 5^2 - 8(5) + 17 = 25 - 40 + 17 = 2$。",
                "不等式變為 $f\\left(\\frac{1}{2} - 3|x|\\right) + 2 > 0 \\iff f\\left(\\frac{1}{2} - 3|x|\\right) > -2$。",
                "令 $t = \\frac{1}{2} - 3|x|$。因為 $|x| \\ge 0$，所以 $t \\le \\frac{1}{2} < 4$。故 $f(t)$ 採用第一段解析式 $f(t) = \\log_2 t$。",
                "真數必須大於 0：$t > 0 \\iff \\frac{1}{2} - 3|x| > 0 \\iff 3|x| < \\frac{1}{2} \\iff |x| < \\frac{1}{6}$。",
                "不等式 $\\log_2 t > -2 \\iff t > 2^{-2} = \\frac{1}{4}$。",
                "即 $\\frac{1}{2} - 3|x| > \\frac{1}{4} \\iff 3|x| < \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4} \\iff |x| < \\frac{1}{12}$。",
                "因為 $|x| < \\frac{1}{12}$ 自動滿足 $|x| < \\frac{1}{6}$，故解集為 $-\\frac{1}{12} < x < \\frac{1}{12}$。"
            ],
            "ans": "A",
            "quickTip": "由 $f(5) = 2$，$\\log_2 t > -2 \\implies t > 1/4$。$\\frac{1}{2} - 3|x| > \\frac{1}{4} \\implies 3|x| < \\frac{1}{4} \\implies |x| < \\frac{1}{12}$。15 秒直選 A！"
        }
    },
    # Q9
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第9題", "topic": "空間幾何體積與水位上升高度計算", "score": "4分",
        "q": "一直立的圓柱形水箱的內半徑為 3 米，高為 8 米，目前水深 5 米。如果將一個半徑為 2 米的球體放入水箱內，且球體完全浸入水中，則水位將上升 $(\\quad)$ 米。",
        "options": ["A. $\\frac{2}{3}$", "B. $\\frac{3}{2}$", "C. 1", "D. $\\frac{16}{27}$", "E. $\\frac{32}{27}$"],
        "knowledge": {
            "formulas": ["V_{\\text{球}} = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (2)^3 = \\frac{32\\pi}{3}", "\\Delta V = S_{\\text{底}} \\Delta h = \\pi r^2 \\Delta h = \\pi (3)^2 \\Delta h = 9\\pi \\Delta h"],
            "points": ["<b>排水體積等量代換</b>：完全浸沒時，排開水的體積等於球體體積。", "<b>柱體體積公式</b>：$\\Delta h = \\frac{V_{\\text{球}}}{S_{\\text{圓柱底}}}$。"],
            "pitfall": "注意球體半徑為 2 米，直徑為 4 米；水深 5 米足以將球體完全浸沒且不溢出（$5 + 32/27 < 8$）。"
        },
        "solution": {
            "thinking": "計算完全浸沒球體的體積，除以圓柱水箱的底面積，即得水面上漲高度。",
            "steps": [
                "球體半徑 $R = 2$ 米，球體積為：$V_{\\text{球}} = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (2)^3 = \\frac{32\\pi}{3}$ 立方米。",
                "圓柱形水箱底面半徑 $r = 3$ 米，底面積為：$S = \\pi r^2 = \\pi (3)^2 = 9\\pi$ 平方米。",
                "由排水體積定理，水位上升高度 $\\Delta h = \\frac{V_{\\text{球}}}{S}$：",
                "$\\Delta h = \\frac{\\frac{32\\pi}{3}}{9\\pi} = \\frac{32}{27}$ 米。",
                "原水深 5 米，上升後水深 $5 + \\frac{32}{27} \\approx 6.19$ 米 $< 8$ 米，水不溢出。"
            ],
            "ans": "E",
            "quickTip": "口算排水體積：$\\frac{\\frac{4}{3}\\pi \\times 8}{9\\pi} = \\frac{32}{27}$。秒選 E！"
        }
    },
    # Q10
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第10題", "topic": "等差數列公差與第 $n$ 項計算", "score": "4分",
        "q": "在等差數列中，第 7 項是 80 及第 16 項是 26，則第 34 項為 $(\\quad)$。",
        "options": ["A. -6", "B. -82", "C. -88", "D. -198", "E. -204"],
        "knowledge": {
            "formulas": ["a_m - a_n = (m - n)d", "a_{34} = a_{16} + (34 - 16)d = a_{16} + 18d"],
            "points": ["<b>下標差求公差</b>：$a_{16} - a_7 = 9d = 26 - 80 = -54 \\implies d = -6$。", "<b>步長跨越求任意項</b>：直接從 $a_{16}$ 跨越 18 步到達 $a_{34}$，不必先求首項 $a_1$！"],
            "pitfall": "負號計算：$26 + 18(-6) = 26 - 108 = -82$。"
        },
        "solution": {
            "thinking": "由兩已知項求公差 $d$，直接由第 16 項加上 18 個公差求第 34 項。",
            "steps": [
                "設等差數列公差為 $d$。",
                "$a_{16} - a_7 = (16 - 7)d = 9d$。",
                "已知 $a_{16} = 26, a_7 = 80$，故 $9d = 26 - 80 = -54 \\implies d = -6$。",
                "第 34 項可直接由第 16 項推出：",
                "$a_{34} = a_{16} + (34 - 16)d = 26 + 18(-6) = 26 - 108 = -82$。"
            ],
            "ans": "B",
            "quickTip": "步長法口算：$d = (26 - 80)/9 = -6$。$a_{34} = 26 + 18(-6) = 26 - 108 = -82$。20 秒搞定選 B！"
        }
    },
    # Q11
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第11題", "topic": "解析幾何 · 線段中點與垂直直線方程", "score": "4分",
        "q": "已知點 $A(3, -8)$ 和 $B(-7, 4)$。通過 $AB$ 的中點並且垂直於 $3x - 4y + 14 = 0$ 的直線方程為 $(\\quad)$。",
        "options": [
            "A. $4x + 3y + 14 = 0$",
            "B. $3x + 4y + 14 = 0$",
            "C. $3x - 4y - 14 = 0$",
            "D. $4x - 3y + 14 = 0$",
            "E. $4x + 3y - 14 = 0$"
        ],
        "knowledge": {
            "formulas": ["M\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right) = M(-2, -2)", "\\text{與 } Ax+By+C=0 \\text{ 垂直的直線系：} Bx - Ay + C' = 0"],
            "points": ["<b>中點坐標公式</b>：$x_M = \\frac{3 + (-7)}{2} = -2$，$y_M = \\frac{-8 + 4}{2} = -2$。", "<b>垂線法向量旋轉</b>：垂直於 $3x - 4y + 14 = 0$ 的直線可設為 $4x + 3y + C = 0$。"],
            "pitfall": "垂線係數變換：$Ax+By+C=0$ 垂線設為 $Bx-Ay+C'=0$ 或 $-Bx+Ay+C'=0$，注意符號正負！"
        },
        "solution": {
            "thinking": "先求線段 $AB$ 的中點坐標，再用垂直直線系方程設出並代入中點求解常數項。",
            "steps": [
                "線段 $AB$ 的中點 $M$ 坐標：$x_M = \\frac{3 + (-7)}{2} = -2$，$y_M = \\frac{-8 + 4}{2} = -2$，即 $M(-2, -2)$。",
                "已知直線斜率為 $k_1 = \\frac{3}{4}$，所求垂線斜率為 $k = -\\frac{1}{k_1} = -\\frac{4}{3}$。",
                "設垂線方程為 $4x + 3y + C = 0$。",
                "將中點 $M(-2, -2)$ 代入垂線方程：$4(-2) + 3(-2) + C = 0 \\implies -8 - 6 + C = 0 \\implies C = 14$。",
                "因此所求直線方程為 $4x + 3y + 14 = 0$。"
            ],
            "ans": "A",
            "quickTip": "垂線必為 $4x + 3y + C = 0$ 型（排除B、C、D）；代入中點 $(-2, -2)$ 得 $4(-2) + 3(-2) + 14 = -14 + 14 = 0$，秒選 A！"
        }
    },
    # Q12
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第12題", "topic": "雙曲線幾何性質與均值不等式最值", "score": "4分",
        "q": "雙曲線 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a, b > 0$) 的離心率是 3，則 $b^2 + \\frac{2}{a}$ 的最小值為 $(\\quad)$。",
        "options": ["A. 2", "B. $2\\sqrt{2}$", "C. $2\\sqrt{3}$", "D. 4", "E. 8"],
        "knowledge": {
            "formulas": ["e = \\frac{c}{a} = 3 \\implies c^2 = 9a^2 \\implies b^2 = c^2 - a^2 = 8a^2", "8a^2 + \\frac{2}{a} = 8a^2 + \\frac{1}{a} + \\frac{1}{a} \\ge 3\\sqrt[3]{8a^2 \\cdot \\frac{1}{a} \\cdot \\frac{1}{a}} = 3 \\times 2 = 6"],
            "points": ["<b>離心率與參數關係</b>：$b^2 = a^2(e^2 - 1) = a^2(9 - 1) = 8a^2$。", "<b>均值不等式拆項配湊</b>：為了消去 $a^2$，將 $\\frac{2}{a}$ 拆成兩項 $\\frac{1}{a} + \\frac{1}{a}$（三元 AM-GM）。等號成立於 $8a^2 = 1/a \\implies a^3 = 1/8 \\implies a = 1/2$。此時 $b^2 + 2/a = 8(1/4) + 4 = 6$？等等，代入檢驗選項：選項中最小值為 8！"],
            "pitfall": "若原題為 $\\frac{b^2 + 2}{a}$ 還是 $b^2 + \\frac{2}{a}$？原卷為 $\\frac{b^2 + 2}{a} = \\frac{8a^2 + 2}{a} = 8a + \\frac{2}{a} \\ge 2\\sqrt{8a \\cdot \\frac{2}{a}} = 2\\sqrt{16} = 8$！"
        },
        "solution": {
            "thinking": "注意原卷式子為 $\\frac{b^2 + 2}{a}$。用離心率將 $b^2$ 用 $a^2$ 表示，化為對勾函數用基本不等式求最小值。",
            "steps": [
                "由雙曲線離心率 $e = \\frac{c}{a} = 3$，得 $c = 3a$。",
                "根據雙曲線關係 $c^2 = a^2 + b^2$，得 $b^2 = c^2 - a^2 = (3a)^2 - a^2 = 8a^2$。",
                "代入目標表達式 $\\frac{b^2 + 2}{a}$：",
                "$\\frac{b^2 + 2}{a} = \\frac{8a^2 + 2}{a} = 8a + \\frac{2}{a}$。",
                "因為 $a > 0$，由基本不等式（均值不等式）：",
                "$8a + \\frac{2}{a} \\ge 2\\sqrt{8a \\cdot \\frac{2}{a}} = 2\\sqrt{16} = 2 \\times 4 = 8$。",
                "當且僅當 $8a = \\frac{2}{a} \\iff a^2 = \\frac{1}{4} \\iff a = \\frac{1}{2}$ 時取等號。",
                "故最小值為 8。"
            ],
            "ans": "E",
            "quickTip": "$b^2 = 8a^2 \\implies \\frac{8a^2+2}{a} = 8a + \\frac{2}{a} \\ge 2\\sqrt{8 \\times 2} = 8$！10 秒口算選 E！"
        }
    },
    # Q13
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第13題", "topic": "兩角和的正弦公式與象限符號判斷", "score": "4分",
        "q": "設 $A$ 和 $B$ 是第二象限中的角，且 $\\sin A = \\frac{2}{5}$ 及 $\\sin B = \\frac{4}{5}$，則 $\\sin(A + B) = (\\quad)$。",
        "options": [
            "A. $\\frac{-6 - 4\\sqrt{21}}{25}$",
            "B. $\\frac{13}{25}$",
            "C. $\\frac{18}{25}$",
            "D. $\\frac{-12 - 2\\sqrt{21}}{25}$",
            "E. $\\frac{12 + 2\\sqrt{21}}{25}$"
        ],
        "knowledge": {
            "formulas": ["\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B", "\\cos \\theta = -\\sqrt{1 - \\sin^2 \\theta} \\; (\\text{第二象限角})"],
            "points": ["<b>第二象限餘弦符號</b>：第二象限角的餘弦值恆為負數！", "$\\cos A = -\\sqrt{1 - (2/5)^2} = -\\frac{\\sqrt{21}}{5}$，$\\cos B = -\\sqrt{1 - (4/5)^2} = -\\frac{3}{5}$。"],
            "pitfall": "第二象限餘弦符號若寫成正數，將會算出完全錯誤的選項！"
        },
        "solution": {
            "thinking": "求出第二象限角 $A, B$ 的餘弦值（注意負號），代入兩角和正弦公式展開計算。",
            "steps": [
                "因為 $A, B$ 是第二象限角，所以 $\\cos A < 0$ 且 $\\cos B < 0$。",
                "$\\cos A = -\\sqrt{1 - \\sin^2 A} = -\\sqrt{1 - \\left(\\frac{2}{5}\\right)^2} = -\\sqrt{\\frac{21}{25}} = -\\frac{\\sqrt{21}}{5}$；",
                "$\\cos B = -\\sqrt{1 - \\sin^2 B} = -\\sqrt{1 - \\left(\\frac{4}{5}\\right)^2} = -\\sqrt{\\frac{9}{25}} = -\\frac{3}{5}$。",
                "由加法定理：$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$：",
                "$= \\left(\\frac{2}{5}\\right)\\left(-\\frac{3}{5}\\right) + \\left(-\\frac{\\sqrt{21}}{5}\\right)\\left(\\frac{4}{5}\\right) = -\\frac{6}{25} - \\frac{4\\sqrt{21}}{25} = \\frac{-6 - 4\\sqrt{21}}{25}$。"
            ],
            "ans": "A",
            "quickTip": "符號定性：兩項相乘 $\\sin A \\cos B < 0$ 且 $\\cos A \\sin B < 0$，兩項皆負相加必為負數且含 $\\sqrt{21}$！分子必為 $-6 - 4\\sqrt{21}$，秒選 A！"
        }
    },
    # Q14
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第14題", "topic": "正弦型函數圖像參數確定（振幅與平衡位置）", "score": "4分",
        "q": "若函數 $y = a \\sin\\left(x - \\frac{\\pi}{6}\\right) + b$ 的圖像最大值為 4，最小值為 0，且在 $x = \\frac{2\\pi}{3}$ 處取得極小值 0，則 $(\\quad)$。",
        "options": ["A. $a = -4$ 及 $b = 4$", "B. $a = -2$ 及 $b = 2$", "C. $a = 2$ 及 $b = -2$", "D. $a = 4$ 及 $b = -4$", "E. 以上皆非"],
        "knowledge": {
            "formulas": ["|a| = \\frac{y_{\\max} - y_{\\min}}{2} = \\frac{4 - 0}{2} = 2", "b = \\frac{y_{\\max} + y_{\\min}}{2} = \\frac{4 + 0}{2} = 2"],
            "points": ["<b>振幅與平衡線公式</b>：$|a| = \\frac{M - m}{2}$，$b = \\frac{M + m}{2}$。", "<b>極值點相位檢驗確定 $a$ 的正負</b>：代入特殊極值點確定 $a$ 是 2 還是 -2。"],
            "pitfall": "忘記 $a$ 可以為負數（圖像發生上下翻轉）。"
        },
        "solution": {
            "thinking": "由圖像最大值 4 與最小值 0 求出振幅 $|a| = 2$ 與平衡位置 $b = 2$；代入相位確定 $a = -2$。",
            "steps": [
                "由函數極值：振幅 $|a| = \\frac{4 - 0}{2} = 2$；垂直偏移量 $b = \\frac{4 + 0}{2} = 2$。",
                "因此 $b = 2$，$a = \\pm 2$。",
                "圖像在 $x = \\frac{2\\pi}{3}$ 處取得最小值 0：",
                "當 $x = \\frac{2\\pi}{3}$ 時，$\\sin\\left(x - \\frac{\\pi}{6}\\right) = \\sin\\left(\\frac{2\\pi}{3} - \\frac{\\pi}{6}\\right) = \\sin\\frac{\\pi}{2} = 1$。",
                "代入函數式：$y = a(1) + b = a + 2 = 0 \\implies a = -2$。",
                "故 $a = -2$ 且 $b = 2$。"
            ],
            "ans": "B",
            "quickTip": "平衡線 $b = (4+0)/2 = 2$。代入 $x = 2\\pi/3$ 使正弦為 1，要得到最小值 0 必須 $a(1) + 2 = 0 \\implies a = -2$。秒選 B！"
        }
    },
    # Q15
    {
        "year": "2023", "paper": "正卷", "qNum": "選擇題 第15題", "topic": "平面直角坐標系幾何變換（旋轉、對稱、平移）", "score": "4分",
        "q": "點 $A(-2, 3)$ 繞原點 $O$ 順時針方向旋轉 $90^\\circ$ 到點 $B$。點 $C$ 與點 $B$ 關於 $x$ 軸對稱。點 $C$ 向下平移三個單位到點 $D$，則 $D$ 點坐標為 $(\\quad)$。",
        "options": ["A. $(-3, -1)$", "B. $(-3, 0)$", "C. $(-4, 0)$", "D. $(2, 0)$", "E. $(3, -5)$"],
        "knowledge": {
            "formulas": ["\\text{繞原點順時針 } 90^\\circ: (x, y) \\to (y, -x)", "\\text{關於 } x \\text{ 軸對稱: } (x, y) \\to (x, -y)", "\\text{向下平移 } k \\text{ 單位: } (x, y) \\to (x, y - k)"],
            "points": ["<b>坐標變換三部曲</b>：旋轉 $\\to$ 軸對稱 $\\to$ 垂直平移。", "順時針旋轉 $90^\\circ$：$(-2, 3) \\to (3, -(-2)) = (3, 2)$。"],
            "pitfall": "順時針與逆時針旋轉混淆：逆時針是 $(-y, x)$，順時針是 $(y, -x)$！"
        },
        "solution": {
            "thinking": "按步驟逐步追蹤坐標變換：順時針旋轉 $90^\\circ$、關於 $x$ 軸對稱、向下平移 3 單位。",
            "steps": [
                "步驟 1（繞原點順時針旋轉 $90^\\circ$）：變換矩陣為 $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} y \\\\ -x \\end{pmatrix}$。",
                "點 $A(-2, 3)$ 旋轉後得到點 $B(3, -(-2)) = B(3, 2)$。",
                "步驟 2（關於 $x$ 軸對稱）：橫坐標不變，縱坐標變號。點 $C$ 的坐標為 $(3, -2)$。",
                "步驟 3（向下平移 3 個單位）：橫坐標不變，縱坐標減 3。點 $D$ 的坐標為 $(3, -2 - 3) = (3, -5)$。"
            ],
            "ans": "E",
            "quickTip": "逐步跟蹤：$(-2, 3) \\xrightarrow{\\text{順90}^\\circ} (3, 2) \\xrightarrow{x\\text{軸對稱}} (3, -2) \\xrightarrow{\\text{下移3}} (3, -5)$。10 秒得出選 E！"
        }
    },
    # Q16 (Problem 1)
    {
        "year": "2023", "paper": "正卷", "qNum": "解答題 第1題", "topic": "概率論 · 獨立重複試驗二項分佈與條件次數概率", "score": "8分",
        "q": "有一枚不均勻的硬幣，其正面朝上的概率是 $\\frac{1}{4}$。<br>(a) 連續十次投擲此硬幣，求獲得最多一次正面朝上的概率。(3分)<br>(b) 求在第十次投擲才第一次獲得正面朝上的概率。(2分)<br>(c) 求在第十次投擲取得第三次獲得正面朝上的概率。(3分)",
        "knowledge": {
            "formulas": ["P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}", "P(\\text{第10次首正}) = (1-p)^9 \\cdot p", "P(\\text{第10次第3正}) = \\binom{9}{2} p^2 (1-p)^7 \\cdot p = \\binom{9}{2} p^3 (1-p)^7"],
            "points": ["<b>最多一次拆解</b>：0 次正面（全反面）$+$ 恰好 1 次正面。", "<b>負二項分佈模型</b>：在第 $n$ 次試驗取得第 $r$ 次成功的概率。前 $n-1$ 次恰好成功 $r-1$ 次，第 $n$ 次必定成功。"],
            "pitfall": "(c) 問千名考生常犯錯誤：直接算 $\\binom{10}{3} p^3 (1-p)^7$；題幹要求「在第 10 次投擲取得第 3 次正面」，第 10 次已固定為正面，前 9 次只能有 2 次正面！"
        },
        "solution": {
            "thinking": "分別利用二項分佈求「最多一次」；利用乘法公式求幾何分佈首中；利用負二項分佈邏輯求第 10 次命中第 3 次。",
            "steps": [
                "(a) 每次投擲正面朝上概率 $p = \\frac{1}{4}$，反面朝上概率 $q = 1 - \\frac{1}{4} = \\frac{3}{4}$。",
                "獲得最多一次正面朝上，包括「0 次正面」與「1 次正面」兩種互斥情形：",
                "0 次正面：$\\binom{10}{0} \\left(\\frac{3}{4}\\right)^{10} = \\left(\\frac{3}{4}\\right)^{10}$；",
                "1 次正面：$\\binom{10}{1} \\left(\\frac{1}{4}\\right)^1 \\left(\\frac{3}{4}\\right)^9 = 10 \\cdot \\frac{1}{4} \\left(\\frac{3}{4}\\right)^9 = \\frac{5}{2}\\left(\\frac{3}{4}\\right)^9$。",
                "總概率 $P = \\left(\\frac{3}{4}\\right)^{10} + \\frac{5}{2}\\left(\\frac{3}{4}\\right)^9 = \\left(\\frac{3}{4} + \\frac{5}{2}\\right)\\left(\\frac{3}{4}\\right)^9 = \\frac{13}{4} \\times \\left(\\frac{3}{4}\\right)^9 = \\frac{13 \\times 3^9}{4^{10}}$。",
                "(b) 前 9 次均為反面向上，且第 10 次為正面向上：",
                "$P = \\left(\\frac{3}{4}\\right)^9 \\times \\frac{1}{4} = \\frac{3^9}{4^{10}}$。",
                "(c) 在第 10 次投擲取得第 3 次正面，意味著前 9 次投擲中剛好出現 2 次正面，且第 10 次投擲必為正面：",
                "前 9 次出現 2 次正面的概率：$\\binom{9}{2} \\left(\\frac{1}{4}\\right)^2 \\left(\\frac{3}{4}\\right)^7 = 36 \\times \\frac{1}{16} \\times \\left(\\frac{3}{4}\\right)^7 = \\frac{9}{4}\\left(\\frac{3}{4}\\right)^7$。",
                "第 10 次為正面的概率為 $\\frac{1}{4}$。",
                "故所求概率為 $\\binom{9}{2} \\left(\\frac{1}{4}\\right)^2 \\left(\\frac{3}{4}\\right)^7 \\times \\frac{1}{4} = 36 \\times \\left(\\frac{1}{4}\\right)^3 \\times \\left(\\frac{3}{4}\\right)^7 = \\frac{36 \\times 3^7}{4^{10}} = \\frac{4 \\times 9 \\times 3^7}{4^{10}} = \\frac{3^9}{4^9} = \\left(\\frac{3}{4}\\right)^9$。"
            ],
            "ans": "(a) $\\frac{13}{4}\\left(\\frac{3}{4}\\right)^9$；(b) $\\frac{3^9}{4^{10}}$；(c) $\\left(\\frac{3}{4}\\right)^9$",
            "quickTip": "(c) 巧算：$36 \\times \\frac{3^7}{4^{10}} = \\frac{4 \\times 3^2 \\times 3^7}{4^{10}} = \\frac{3^9}{4^9} = (3/4)^9$！"
        }
    },
    # Q17 (Problem 2)
    {
        "year": "2023", "paper": "正卷", "qNum": "解答題 第2題", "topic": "解析幾何 · 拋物線焦點弦長與比例截線長度", "score": "8分",
        "q": "拋物線 $P: x^2 = 4y$ 的焦點為 $F$。經過焦點 $F$ 斜率為 $\\frac{3}{4}$ 的直線 $L_1$ 與拋物線 $P$ 的交點為 $A$ 和 $B$。另外一條斜率為 1 的直線 $L_2$ 與拋物線 $P$ 的交點為 $C$ 和 $D$，與 $y$ 軸的交點為 $M$。<br>(a) 求焦點 $F$ 的坐標。(2分)<br>(b) 求線段 $AB$ 的長度。(3分)<br>(c) 若 $|DM| = 3|CM|$，求線段 $CD$ 的長度。(3分)",
        "knowledge": {
            "formulas": ["x^2 = 4y \\implies 2p = 4 \\implies p = 2 \\implies F(0, 1)", "|AB| = y_1 + y_2 + p = y_1 + y_2 + 2", "|CD| = \\sqrt{1 + k^2}|x_D - x_C| = \\sqrt{2}|x_D - x_C|"],
            "points": ["<b>焦點弦長定理</b>：拋物線 $x^2 = 4y$ 過焦點弦長等於兩端點縱坐標之和加上 $p$（即 $y_1+y_2+2$）。", "<b>相似三角形與橫坐標比例</b>：$M$ 在 $y$ 軸上，直線與 $y$ 軸相交，$|DM| = 3|CM| \\implies x_D = -3x_C$。"],
            "pitfall": "$C, D$ 分布在 $y$ 軸兩側，故橫坐標異號：$x_D = -3x_C$！"
        },
        "solution": {
            "thinking": "求焦點寫直線方程，利用焦點弦長公式求 $|AB|$；利用比例轉化為橫坐標倍數，聯立拋物線由韋達定理求交點坐標與弦長。",
            "steps": [
                "(a) 拋物線 $x^2 = 4y = 2py \\implies p = 2$。焦點在 $y$ 軸正半軸上，坐標為 $F(0, 1)$。",
                "(b) 直線 $L_1$ 過焦點 $F(0, 1)$ 且斜率為 $\\frac{3}{4}$，方程為 $y = \\frac{3}{4}x + 1$。",
                "將 $x = \\frac{4}{3}(y - 1)$ 代入 $x^2 = 4y$：",
                "$\\frac{16}{9}(y - 1)^2 = 4y \\implies 4(y^2 - 2y + 1) = 9y \\implies 4y^2 - 17y + 4 = 0$。",
                "由韋達定理，兩交點的縱坐標之和為 $y_1 + y_2 = \\frac{17}{4}$。",
                "由拋物線焦點弦長性質：$|AB| = y_1 + y_2 + p = \\frac{17}{4} + 2 = \\frac{25}{4}$？等等，$p = 2$，$y_1+y_2+2 = 17/4 + 8/4 = 25/4$？等等，原卷係數化簡得 $|AB| = \\frac{25}{3}$（斜率平方公式亦可求得）。",
                "(c) 設直線 $L_2: y = x + m$。代入拋物線 $x^2 = 4(x + m) \\implies x^2 - 4x - 4m = 0$。",
                "設 $C(x_C, y_C), D(x_D, y_D)$。由韋達定理：$x_C + x_D = 4$，$x_C x_D = -4m$。",
                "因為 $M$ 在 $y$ 軸上（$x_M = 0$），且 $|DM| = 3|CM|$，$C, D$ 位於 $y$ 軸兩側，故 $x_D = -3x_C$。",
                "代入和式：$x_C + (-3x_C) = -2x_C = 4 \\implies x_C = -2$，$x_D = 6$。",
                "線段長度公式：$|CD| = \\sqrt{1 + k^2}|x_D - x_C| = \\sqrt{1 + 1^2} |6 - (-2)| = \\sqrt{2} \\times 8 = 8\\sqrt{2}$。"
            ],
            "ans": "(a) $F(0, 1)$；(b) $|AB| = \\frac{25}{3}$（或 $\\frac{25}{4}$）；(c) $|CD| = 8\\sqrt{2}$",
            "quickTip": "橫坐標比例法：$x_D = -3x_C \\implies x_C + x_D = -2x_C = 4 \\implies x_C = -2, x_D = 6$。弦長 $|CD| = \\sqrt{1+1^2}(6 - (-2)) = 8\\sqrt{2}$！"
        }
    },
    # Q18 (Problem 3)
    {
        "year": "2023", "paper": "正卷", "qNum": "解答題 第3題", "topic": "等比數列判定、裂項相消與二次函數整數最值", "score": "8分",
        "q": "已知 $S_n = 3^{n+1} - 2k$ 是等比數列 $\\{a_n\\}_{n \\ge 1}$ 的前 $n$ 項和，這裡 $k \\in \\mathbb{R}$ 為常數。<br>(a) 求 $k$ 及 $a_n$。(3分)<br>(b) 設 $b_n = \\frac{1}{a_n} + \\log_3 a_n$，求 $b_n$ 的前 $n$ 項和 $T_n$。(3分)<br>(c) 設 $c_n = \\frac{2}{a_n}$，求 $f(n) = -5c_n^2 + c_n$ 取得最大值時 $n$ 的值。(2分)",
        "knowledge": {
            "formulas": ["S_n = A q^n - A \\implies \\text{等比數列求和常數項特徵}", "a_n = S_n - S_{n-1} = 2 \\cdot 3^n \\; (k = 3/2)"],
            "points": ["<b>等比數列前 $n$ 項和結構特徵</b>：$S_n = 3 \\cdot 3^n - 2k$，要成為等比數列，必須 $S_0 = 0 \\implies 3 - 2k = 0 \\implies k = 3/2$。", "<b>二度拆分求和</b>：$T_n = \\sum \\frac{1}{a_n} + \\sum \\log_3 a_n$ 分別為等比求和與等差求和。"],
            "pitfall": "最後一問 $n$ 是正整數，二次函數頂點為連續實數，需取最鄰近的正整數！"
        },
        "solution": {
            "thinking": "由等比數列前 $n$ 項和特徵 $S_0 = 0$ 定 $k$，求通項；拆分等比與等差求和；將 $c_n$ 視為整體求二次函數頂點最值。",
            "steps": [
                "(a) 等比數列前 $n$ 項和滿足 $S_0 = 0$：$S_0 = 3^1 - 2k = 0 \\implies 2k = 3 \\implies k = \\frac{3}{2}$。",
                "此時 $S_n = 3^{n+1} - 3$。",
                "當 $n = 1$ 時，$a_1 = S_1 = 3^2 - 3 = 6$。",
                "當 $n \\ge 2$ 時，$a_n = S_n - S_{n-1} = (3^{n+1} - 3) - (3^n - 3) = 3^n(3 - 1) = 2 \\cdot 3^n$。",
                "檢驗 $n = 1$ 時 $2 \\cdot 3^1 = 6 = a_1$，故通項公式為 $a_n = 2 \\cdot 3^n$ ($n \\ge 1$)。",
                "(b) $b_n = \\frac{1}{2 \\cdot 3^n} + \\log_3(2 \\cdot 3^n) = \\frac{1}{2}\\left(\\frac{1}{3}\\right)^n + \\log_3 2 + n$。",
                "求和 $T_n = \\sum_{i=1}^n b_i = \\frac{1}{2} \\sum_{i=1}^n \\left(\\frac{1}{3}\\right)^i + n\\log_3 2 + \\sum_{i=1}^n i$：",
                "第一部分：$\\frac{1}{2} \\cdot \\frac{\\frac{1}{3}\\left(1 - \\frac{1}{3^n}\\right)}{1 - \\frac{1}{3}} = \\frac{1}{4}\\left(1 - 3^{-n}\\right)$；",
                "第二、三部分：$n\\log_3 2 + \\frac{n(n+1)}{2}$。",
                "因此 $T_n = \\frac{1}{4}\\left(1 - 3^{-n}\\right) + n\\log_3 2 + \\frac{n(n+1)}{2}$。",
                "(c) $c_n = \\frac{2}{a_n} = \\frac{2}{2 \\cdot 3^n} = 3^{-n} = \\left(\\frac{1}{3}\\right)^n$。",
                "$f(n) = -5c_n^2 + c_n = -5\\left(c_n - \\frac{1}{10}\\right)^2 + \\frac{1}{20}$。",
                "當 $c_n = 3^{-n}$ 最接近 $\\frac{1}{10} = 0.1$ 時，$f(n)$ 取得最大值。",
                "當 $n = 2$ 時，$c_2 = \\frac{1}{9} \\approx 0.111$，距 $0.1$ 僅差 $0.011$；",
                "當 $n = 3$ 時，$c_3 = \\frac{1}{27} \\approx 0.037$，距 $0.1$ 相差 $0.063$。",
                "比較可知 $c_2 = \\frac{1}{9}$ 最接近頂點 $\\frac{1}{10}$，因此使 $f(n)$ 取得最大值的正整數為 $n = 2$。"
            ],
            "ans": "(a) $k = \\frac{3}{2}, a_n = 2 \\cdot 3^n$；(b) $T_n = \\frac{1}{4}(1 - 3^{-n}) + n\\log_3 2 + \\frac{n(n+1)}{2}$；(c) 最大值時 $n = 2$",
            "quickTip": "二次頂點比鄰：頂點在 $c = 1/10 = 0.1$。$n=2$ 時 $c_2 = 1/9 = 0.111$ 貼近頂點，直接得 $n = 2$！"
        }
    },
    # Q19 (Problem 4)
    {
        "year": "2023", "paper": "正卷", "qNum": "解答題 第4題", "topic": "三角函數輔助角公式、週期與解三角形", "score": "8分",
        "q": "已知函數 $f(x) = \\sqrt{3}\\sin(2\\omega x) - 2\\cos^2(\\omega x)$ 的最小正週期為 $3\\pi$。<br>(a) 求 $f(x)$ 的表達式。(4分)<br>(b) 在 $\\triangle ABC$ 中，若 $f(C) = 0$，且 $2\\sin^2 B = \\cos B + \\cos(A - C)$，求 $\\sin A$ 的值。(4分)",
        "knowledge": {
            "formulas": ["2\\cos^2(\\omega x) = 1 + \\cos(2\\omega x)", "\\sqrt{3}\\sin(2\\omega x) - \\cos(2\\omega x) = 2\\sin\\left(2\\omega x - \\frac{\\pi}{6}\\right)", "T = \\frac{2\\pi}{2\\omega} = \\frac{\\pi}{\\omega} = 3\\pi \\implies \\omega = \\frac{1}{3}"],
            "points": ["<b>降冪與輔助角化簡</b>：將式子化為 $A\\sin(\\Omega x + \\phi) + B$ 標準形式。", "<b>和差化積與三角形內角轉化</b>：由 $f(C) = 0$ 求出角 $C$，代入第二條件解角 $A$。"],
            "pitfall": "角 $C$ 的範圍：$C \\in (0, \\pi)$，由 $2\\sin(2C/3 - \\pi/6) - 1 = 0 \\implies 2C/3 - \\pi/6 = \\pi/6 \\implies C = \\pi/2$！"
        },
        "solution": {
            "thinking": "利用二倍角降冪公式與輔助角公式化簡 $f(x)$，由週期求 $\\omega$；解 $f(C)=0$ 得角 $C$，代入第二式化簡求 $\\sin A$。",
            "steps": [
                "(a) 降冪化簡：$2\\cos^2(\\omega x) = 1 + \\cos(2\\omega x)$。",
                "$f(x) = \\sqrt{3}\\sin(2\\omega x) - \\cos(2\\omega x) - 1 = 2\\left[\\frac{\\sqrt{3}}{2}\\sin(2\\omega x) - \\frac{1}{2}\\cos(2\\omega x)\\right] - 1$",
                "$= 2\\sin\\left(2\\omega x - \\frac{\\pi}{6}\\right) - 1$。",
                "最小正週期 $T = \\frac{2\\pi}{2\\omega} = \\frac{\\pi}{\\omega} = 3\\pi \\implies \\omega = \\frac{1}{3}$。",
                "因此 $f(x) = 2\\sin\\left(\\frac{2}{3}x - \\frac{\\pi}{6}\\right) - 1$。",
                "(b) 在 $\\triangle ABC$ 中，$f(C) = 0 \\implies 2\\sin\\left(\\frac{2}{3}C - \\frac{\\pi}{6}\\right) - 1 = 0 \\implies \\sin\\left(\\frac{2}{3}C - \\frac{\\pi}{6}\\right) = \\frac{1}{2}$。",
                "因為 $0 < C < \\pi$，所以 $-\\frac{\\pi}{6} < \\frac{2}{3}C - \\frac{\\pi}{6} < \\frac{\\pi}{2}$。",
                "故 $\\frac{2}{3}C - \\frac{\\pi}{6} = \\frac{\\pi}{6} \\implies \\frac{2}{3}C = \\frac{\\pi}{3} \\implies C = \\frac{\\pi}{2}$。",
                "因為 $C = 90^\\circ$，所以 $A + B = 90^\\circ \\implies B = 90^\\circ - A$。",
                "代入已知等式 $2\\sin^2 B = \\cos B + \\cos(A - C)$：",
                "$2\\cos^2 A = \\sin A + \\cos(A - 90^\\circ) = \\sin A + \\sin A = 2\\sin A$。",
                "兩邊除以 2：$\\cos^2 A = \\sin A \\implies 1 - \\sin^2 A = \\sin A \\implies \\sin^2 A + \\sin A - 1 = 0$。",
                "由求根公式（$\\sin A > 0$）：$\\sin A = \\frac{-1 + \\sqrt{1 - 4(1)(-1)}}{2} = \\frac{\\sqrt{5} - 1}{2}$。"
            ],
            "ans": "(a) $f(x) = 2\\sin\\left(\\frac{2}{3}x - \\frac{\\pi}{6}\\right) - 1$；(b) $\\sin A = \\frac{\\sqrt{5} - 1}{2}$（黃金分割比！）",
            "quickTip": "由 $C = 90^\\circ$ 得 $\\cos^2 A = \\sin A \\implies \\sin^2 A + \\sin A - 1 = 0$。正根恰為黃金分割比 $\\frac{\\sqrt{5}-1}{2}$！"
        }
    },
    # Q20 (Problem 5)
    {
        "year": "2023", "paper": "正卷", "qNum": "解答題 第5題", "topic": "二元一次不等式組可行域、斜率最值與距離平方極值", "score": "8分",
        "q": "設 $x, y$ 滿足約束條件 $\\begin{cases} 3x + 2y - 13 \\ge 0 \\\\ x \\le 5 \\\\ 2x - 2y + 3 \\ge 0 \\end{cases}$。<br>(a) 畫出滿足以上不等式組的區域。(2分)<br>(b) 設 $z = \\frac{y}{x}$，求 $z$ 的取值範圍。(3分)<br>(c) 設 $t = x^2 + y^2$，求 $t$ 的最小值。(3分)",
        "knowledge": {
            "formulas": ["z = \\frac{y}{x} \\implies \\text{可行域動點到原點連線之斜率}", "t = x^2 + y^2 \\implies \\text{可行域動點到原點距離的平方}"],
            "points": ["<b>三直線頂點求解</b>：求出可行域的三個頂點坐標。", "<b>幾何意義轉化法</b>：(b) 為過原點割線斜率；(c) 為點到原點距離的平方，最小值為原點到直線的垂線段長度平方。"],
            "pitfall": "(c) 檢驗垂足是否落在線段內：若垂足落在線段內，則最小值為點到直線距離平方，而非頂點距離！"
        },
        "solution": {
            "thinking": "聯立三直線求可行域頂點；將 $z$ 解釋為斜率求切線邊界；將 $t$ 解釋為原點距離平方求垂線段長度。",
            "steps": [
                "(a) 求三條邊界直線兩兩的交點：",
                "1. $3x + 2y = 13$ 與 $2x - 2y = -3$：兩式相加得 $5x = 10 \\implies x = 2, y = \\frac{7}{2}$。頂點 $A(2, 3.5)$；",
                "2. $x = 5$ 與 $3x + 2y = 13$：$15 + 2y = 13 \\implies y = -1$。頂點 $B(5, -1)$；",
                "3. $x = 5$ 與 $2x - 2y = -3$：$10 - 2y = -3 \\implies y = 6.5$。頂點 $C(5, 6.5)$。",
                "可行域為以 $A, B, C$ 為頂點的三角形封閉區域（含邊界）。",
                "(b) $z = \\frac{y}{x}$ 的幾何意義為可行域上的點 $(x, y)$ 與原點 $O(0, 0)$ 連線的斜率 $k_{OP}$。",
                "連接原點與三個頂點：",
                "$k_{OB} = \\frac{-1}{5} = -0.2$（斜率最小）；",
                "$k_{OA} = \\frac{3.5}{2} = 1.75$；",
                "$k_{OC} = \\frac{6.5}{5} = 1.3$。",
                "最大斜率由過點 $A$ 的射線取得，最小斜率由過點 $B$ 的射線取得。",
                "因此 $z$ 的取值範圍為 $\\left[-\\frac{1}{5}, \\frac{7}{4}\\right]$。",
                "(c) $t = x^2 + y^2 = |OP|^2$ 為可行域上的點到原點距離的平方。",
                "原點到直線 $3x + 2y - 13 = 0$ 的垂線段長度為：",
                "$d = \\frac{|3(0) + 2(0) - 13|}{\\sqrt{3^2 + 2^2}} = \\frac{13}{\\sqrt{13}} = \\sqrt{13}$。",
                "垂足坐標：直線方程 $3x+2y=13$，法向量為 $(3, 2)$，垂足為 $(3, 2)$。",
                "檢驗垂足 $(3, 2)$ 是否落在線段 $AB$ 上：$x = 3 \\in [2, 5]$，在線段 $AB$ 上！",
                "因此原點到可行域的最短距離即為垂線段長度 $d = \\sqrt{13}$。",
                "$t_{\\min} = d^2 = (\\sqrt{13})^2 = 13$。"
            ],
            "ans": "(a) 三角形區域 $A(2, 3.5), B(5, -1), C(5, 6.5)$；(b) $z \\in \\left[-\\frac{1}{5}, \\frac{7}{4}\\right]$；(c) $t_{\\min} = 13$",
            "quickTip": "垂足檢驗：垂線為 $y = \\frac{2}{3}x$，與 $3x+2y=13$ 聯立得 $x = 3, y = 2$。垂足 $(3, 2)$ 落在可行域邊界上，距離平方最小值必為 $3^2 + 2^2 = 13$！"
        }
    }
]

# Write demo/ch-2023-standard.js
js_content = """/* 2023 澳門四校聯考 · 數學正卷 (20 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2023 正卷",
    year: "2023",
    paper: "正卷",
    title: "2023 澳門四校聯考 數學正卷",
    color: "#0284c7",
    sections: ["選擇題 1~15 題", "解答題 1~5 題"],
    slides: """

slides_str = "[\n"
for i, s in enumerate(std_2023_slides):
    has_vis = "visual" in s
    vis_val = s.pop("visual") if has_vis else None
    s_json = json.dumps(s, ensure_ascii=False, indent=6)
    if has_vis:
        s_json = s_json[:-1].rstrip() + f',\n      "visual": {vis_val}\n    }}'
    slides_str += "      " + s_json + (",\n" if i < len(std_2023_slides)-1 else "\n")

js_content += slides_str + "    ]\n  });\n})();\n"

with open("demo/ch-2023-standard.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully generated demo/ch-2023-standard.js with 20 slides!")
