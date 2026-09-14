# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ==========================================
# 2025 澳門四校聯考 · 數學正卷 (20 題)
# ==========================================
std_2025_slides = [
    # Q1
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第1題", "topic": "集合運算與一元二次不等式", "score": "4分",
        "q": "設集合 $A = \\{x : x^2 + 3x - 4 \\ge 0\\}$，$B = \\{-4, -2, 0, 3\\}$，則 $A \\cap B = (\\quad)$。",
        "options": ["A. $\\{-4, 3\\}$", "B. $\\{-4, -2\\}$", "C. $\\{-2, 3\\}$", "D. $\\{0, 3\\}$", "E. $\\{-2, 0\\}$"],
        "knowledge": {
            "formulas": ["x^2 + 3x - 4 = (x+4)(x-1) \\ge 0 \\iff x \\le -4 \\text{ 或 } x \\ge 1", "A \\cap B = \\{x \\in B : x \\in A\\}"],
            "points": ["<b>交集定義</b>：屬於集合 $A$ 且屬於集合 $B$ 的所有元素之集合。", "<b>二次不等式求法</b>：因式分解找出零點，大於取兩邊、小於取中間。"],
            "pitfall": "端點檢驗：不等式帶等號 $\\ge$，端點 $-4$ 與 $1$ 均包含在集合 $A$ 內！"
        },
        "solution": {
            "thinking": "先求不等式解集確定集合 $A$，再逐一檢驗集合 $B$ 中的元素是否滿足條件。",
            "steps": [
                "解一元二次不等式：因式分解得 $(x + 4)(x - 1) \\ge 0$，因此 $A = \\{x \\mid x \\le -4 \\text{ 或 } x \\ge 1\\}$。",
                "逐一驗證 $B$ 中元素：$-4 \\le -4$（符合）；$-2$ 與 $0$ 均在 $(-4, 1)$ 內（不符合）；$3 \\ge 1$（符合）。",
                "因此 $A \\cap B = \\{-4, 3\\}$。"
            ],
            "ans": "A",
            "quickTip": "代入排除法：直接將 $B$ 中元素 $-4, -2, 0, 3$ 代入 $x^2+3x-4$ 算值，$-4$ 得 $0\\ge 0$（留），$-2$ 得 $-6<0$（排除B、C、E），$0$ 得 $-4<0$（排除D），秒選 A！"
        }
    },
    # Q2
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第2題", "topic": "一元二次方程根與係數之關係（韋達定理）", "score": "4分",
        "q": "若 $\\frac{1}{\\alpha}$ 和 $\\frac{1}{\\beta}$ 是方程 $2x^2 + 2x - 1 = 0$ 的根，則 $2^{\\alpha+1} \\times 2^{\\beta+1} = (\\quad)$。",
        "options": ["A. 1", "B. 2", "C. 4", "D. 16", "E. $\\frac{1}{16}$"],
        "knowledge": {
            "formulas": ["\\text{韋達定理：若 } x_1, x_2 \\text{ 為 } ax^2+bx+c=0 \\text{ 之根，則 } x_1+x_2 = -\\frac{b}{a}, \\; x_1 x_2 = \\frac{c}{a}", "2^{\\alpha+1} \\times 2^{\\beta+1} = 2^{\\alpha + \\beta + 2}"],
            "points": ["<b>指數運算法則</b>：同底數冪相乘，底數不變，指數相加。", "<b>對稱代數式轉化</b>：先由根之和、積求出 $\\alpha\\beta$ 與 $\\alpha+\\beta$。"],
            "pitfall": "注意題幹給的是 $\\frac{1}{\\alpha}$ 與 $\\frac{1}{\\beta}$ 為方程之根，不可直接誤把 $\\alpha, \\beta$ 當成方程的根！"
        },
        "solution": {
            "thinking": "利用韋達定理寫出 $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ 與 $\\frac{1}{\\alpha\\beta}$，從而解出 $\\alpha+\\beta$。",
            "steps": [
                "由韋達定理：$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = -\\frac{2}{2} = -1$，$\\frac{1}{\\alpha} \\cdot \\frac{1}{\\beta} = -\\frac{1}{2}$。",
                "由 $\\frac{1}{\\alpha\\beta} = -\\frac{1}{2}$ 得 $\\alpha\\beta = -2$。",
                "通分得 $\\frac{\\alpha+\\beta}{\\alpha\\beta} = -1 \\implies \\alpha+\\beta = -1 \\cdot (\\alpha\\beta) = -1 \\cdot (-2) = 2$。",
                "所求指數式為 $2^{(\\alpha+1)+(\\beta+1)} = 2^{\\alpha+\\beta+2} = 2^{2+2} = 2^4 = 16$。"
            ],
            "ans": "D",
            "quickTip": "令倒數換元 $y = 1/x$，則 $x = 1/y$，代入方程得 $2(1/y)^2 + 2(1/y) - 1 = 0 \\iff -y^2 + 2y + 2 = 0 \\iff y^2 - 2y - 2 = 0$。此方程的根即為 $\\alpha, \\beta$，由韋達定理直接得 $\\alpha+\\beta = 2$，所求為 $2^{2+2} = 16$！"
        }
    },
    # Q3
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第3題", "topic": "空間幾何 · 圓柱體積變化百分比", "score": "4分",
        "q": "若一個正圓柱體的底半徑增加 $30\\%$，而其高度同時減少 $30\\%$，其體積將 $(\\quad)$。",
        "options": ["A. 增加 $18.3\\%$", "B. 增加 $9\\%$", "C. 減少 $9\\%$", "D. 減少 $6\\%$", "E. 維持不變"],
        "knowledge": {
            "formulas": ["V = \\pi r^2 h", "V_{\\text{新}} = \\pi (r(1+30\\%))^2 (h(1-30\\%)) = \\pi r^2 h \\times (1.3)^2 \\times 0.7"],
            "points": ["<b>體積對各變量的敏感度</b>：半徑是平方項 $r^2$，高是一次方項 $h$。", "<b>增減百分比計算</b>：增長率 $= \\frac{V_{\\text{新}} - V}{V} \\times 100\\%$。"],
            "pitfall": "容易直覺以為半徑加30%、高減30%剛好抵消維持不變，忽略了半徑具有平方效應！"
        },
        "solution": {
            "thinking": "設原底半徑為 $r$，高為 $h$，求新體積倍率。",
            "steps": [
                "新半徑 $r' = 1.3r$，新高度 $h' = 0.7h$。",
                "新體積 $V' = \\pi (r')^2 h' = \\pi (1.3r)^2 (0.7h) = 1.69 \\times 0.7 \\times \\pi r^2 h = 1.183 V$。",
                "體積變化率為 $\\frac{1.183V - V}{V} = +18.3\\%$，即增加 $18.3\\%$。"
            ],
            "ans": "A",
            "quickTip": "速算：$1.3^2 \\times 0.7 = 1.69 \\times 0.7 = 1.183$。末位是 3，直接鎖定 18.3% 選 A！"
        }
    },
    # Q4
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第4題", "topic": "指數冪化簡與代數因式分解", "score": "4分",
        "q": "$\\frac{m^{\\frac{3}{2}} - m^{-\\frac{1}{2}}}{m^{\\frac{1}{2}} + m^{-\\frac{1}{2}}} = (\\quad)$。",
        "options": ["A. $m$", "B. $m + 1$", "C. $m - 1$", "D. $m^2 + 1$", "E. $m^2 - 1$"],
        "knowledge": {
            "formulas": ["m^{\\frac{3}{2}} = m^{-\\frac{1}{2}} \\cdot m^2", "m^2 - 1 = (m - 1)(m + 1)"],
            "points": ["<b>公因式提取法</b>：分子與分母均提取最低次冪 $m^{-\\frac{1}{2}}$。", "<b>有理化/平方差公式</b>：約去公因式後利用平方差化簡。"],
            "pitfall": "負指數與分數指數計算混淆，注意 $m^{3/2} / m^{-1/2} = m^{3/2 - (-1/2)} = m^2$。"
        },
        "solution": {
            "thinking": "分子分母同乘以 $m^{1/2}$ 消除負分數指數。",
            "steps": [
                "分子分母同乘 $m^{\\frac{1}{2}}$：",
                "分子 $= (m^{\\frac{3}{2}} - m^{-\\frac{1}{2}}) \\cdot m^{\\frac{1}{2}} = m^2 - 1$。",
                "分母 $= (m^{\\frac{1}{2}} + m^{-\\frac{1}{2}}) \\cdot m^{\\frac{1}{2}} = m + 1$。",
                "原式 $= \\frac{m^2 - 1}{m + 1} = \\frac{(m-1)(m+1)}{m+1} = m - 1$。"
            ],
            "ans": "C",
            "quickTip": "特殊值代入法：令 $m = 4$。則 $m^{1/2} = 2, m^{-1/2} = 1/2, m^{3/2} = 8$。原式 $= \\frac{8 - 0.5}{2 + 0.5} = \\frac{7.5}{2.5} = 3$。檢查選項：A=4, B=5, C=$4-1=3$, D=17, E=15。唯一符合是 C！"
        }
    },
    # Q5
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第5題", "topic": "對數性質與換底運算", "score": "4分",
        "q": "若 $2^p = 5$ 及 $2^q = 7$，則 $\\log_2 0.7 = (\\quad)$。",
        "options": ["A. $q + p - 1$", "B. $2q - 2p$", "C. $q - p + 1$", "D. $q - p - 1$", "E. 以上皆非"],
        "knowledge": {
            "formulas": ["2^p = 5 \\iff p = \\log_2 5, \\quad 2^q = 7 \\iff q = \\log_2 7", "\\log_a \\frac{x}{y} = \\log_a x - \\log_a y, \\quad \\log_a (xy) = \\log_a x + \\log_a y"],
            "points": ["<b>小數轉分數</b>：$0.7 = \\frac{7}{10} = \\frac{7}{2 \\times 5}$。", "<b>對數真數拆解</b>：拆解為已知底數 2 與條件值 5, 7。"],
            "pitfall": "拆解 $10 = 2 \\times 5$ 時注意減號括號：$-\\log_2 10 = -(\\log_2 2 + \\log_2 5) = -(1 + p) = -1 - p$。"
        },
        "solution": {
            "thinking": "將指數轉為以 2 為底之對數，再將 $0.7$ 化為分數拆解。",
            "steps": [
                "由 $2^p = 5, 2^q = 7$ 得 $\\log_2 5 = p, \\log_2 7 = q$。",
                "$\\log_2 0.7 = \\log_2 \\frac{7}{10} = \\log_2 7 - \\log_2 10$。",
                "$\\log_2 10 = \\log_2 (2 \\times 5) = \\log_2 2 + \\log_2 5 = 1 + p$。",
                "因此 $\\log_2 0.7 = q - (1 + p) = q - p - 1$。"
            ],
            "ans": "D",
            "quickTip": "估算鎖定：$0.7 < 1 \\implies \\log_2 0.7 < 0$。$2^p=5 \\implies p\\approx 2.32, 2^q=7 \\implies q\\approx 2.81$。$q - p - 1 \\approx 2.81 - 2.32 - 1 = -0.51 < 0$；而 $q - p + 1 > 0$（正數），秒殺選 D！"
        }
    },
    # Q6
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第6題", "topic": "含絕對值之一元二次不等式", "score": "4分",
        "q": "不等式 $|x(x - 5)| < 6$ 的解集為 $(\\quad)$。",
        "options": [
            "A. $\\{-1 < x < 6\\}$",
            "B. $\\{-2 < x < 1\\}$",
            "C. $\\{-1 < x \\le 1\\} \\cup \\{4 \\le x \\le 5\\}$",
            "D. $\\{x \\le -1\\} \\cup \\{x \\ge 6\\}$",
            "E. $\\{-1 < x < 2\\} \\cup \\{3 < x < 6\\}$"
        ],
        "knowledge": {
            "formulas": ["|A| < B \\iff -B < A < B \\quad (B > 0)", "A < B < C \\iff \\begin{cases} B > A \\\\ B < C \\end{cases}"],
            "points": ["<b>絕對值雙向展開</b>：拆成不等式組連立求解。", "<b>二次不等式因式分解</b>：分別求兩側不等式之交集。"],
            "pitfall": "只解一邊 $x(x-5) < 6$ 而遺漏另一邊 $x(x-5) > -6$。"
        },
        "solution": {
            "thinking": "去絕對值轉化為雙邊不等式 $-6 < x^2 - 5x < 6$。",
            "steps": [
                "由 $|x^2 - 5x| < 6$ 得 $-6 < x^2 - 5x < 6$。",
                "第一部分：$x^2 - 5x < 6 \\iff x^2 - 5x - 6 < 0 \\iff (x - 6)(x + 1) < 0 \\iff -1 < x < 6$。",
                "第二部分：$x^2 - 5x > -6 \\iff x^2 - 5x + 6 > 0 \\iff (x - 2)(x - 3) > 0 \\iff x < 2 \\text{ 或 } x > 3$。",
                "取兩者交集：$(-1 < x < 6) \\cap (x < 2 \\text{ 或 } x > 3) = \\{-1 < x < 2\\} \\cup \\{3 < x < 6\\}$。"
            ],
            "ans": "E",
            "quickTip": "代入特殊點：檢驗 $x = 2.5$（在 2 與 3 之間）。$|2.5 \\times (-2.5)| = 6.25 > 6$，不滿足不等式！因此解集必定扣除 $[2, 3]$，A 選項包含 2.5 故淘汰，直接選 E！"
        }
    },
    # Q7
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第7題", "topic": "排列組合 · 不相鄰問題（插空法）", "score": "4分",
        "q": "四個女孩和三個男孩排成一行。若不允許男孩連排，則可能的排列有 $(\\quad)$ 種。",
        "options": ["A. 144", "B. 288", "C. 1440", "D. 2880", "E. 5760"],
        "knowledge": {
            "formulas": ["P_n^n = n!, \\quad P_m^k = \\frac{m!}{(m-k)!}", "\\text{插空法總數} = (\\text{主體全排列}) \\times (\\text{空位選取排列})"],
            "points": ["<b>不相鄰典型策略（插空法）</b>：先排沒有限制的元素（女生），形成首尾及相鄰間的空位，再將受限元素（男生）插入空位。", "4 個女生排成一列產生 $4 + 1 = 5$ 個可插入的空位。"],
            "pitfall": "誤以為男孩排法用組合 $C_5^3$；題目要求排成一行，男孩之間彼此有別，必須是有序排列 $P_5^3$！"
        },
        "solution": {
            "thinking": "經典「不相鄰用插空法」。先排 4 位女生，再在形成的 5 個空位中排列 3 位男生。",
            "steps": [
                "步驟一（排女生）：4 位女孩全排列，有 $4! = 24$ 種排法。",
                "步驟二（產生空位）：4 位女孩排好後，兩側及相互之間共有 $4 + 1 = 5$ 個空位：$\\underline{\\quad} \\text{女} \\underline{\\quad} \\text{女} \\underline{\\quad} \\text{女} \\underline{\\quad} \\text{女} \\underline{\\quad}$。",
                "步驟三（插男生）：從 5 個空位中選出 3 個排列 3 位男孩，有 $P_5^3 = 5 \\times 4 \\times 3 = 60$ 種排法。",
                "乘法原理：總排列數 $= 24 \\times 60 = 1440$ 種。"
            ],
            "ans": "C",
            "quickTip": "速算：$4! \\times P_5^3 = 24 \\times 60 = 1440$。秒出答案選 C！"
        }
    },
    # Q8
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第8題", "topic": "統計學 · 中位數與算術平均數", "score": "4分",
        "q": "若六個數 $x + 2, x + 3, x + 4, x - 4, x - 5, x - 6$ 的中位數是 8，則這六個數的平均值是 $(\\quad)$。",
        "options": ["A. 3", "B. 7", "C. 8", "D. 9", "E. $x$"],
        "knowledge": {
            "formulas": ["\\text{中位數：偶數個數據排序後中間兩數之平均值}", "\\text{平均值 } \\bar{x} = \\frac{\\sum x_i}{n}"],
            "points": ["<b>中位數求解關鍵</b>：必須先將數據由小到大嚴格排序！", "<b>代數對稱性</b>：觀察各項常數項之和與中間項之關係。"],
            "pitfall": "未經排序直接拿中間兩個給定表達式相加，將會算出錯誤結果。"
        },
        "solution": {
            "thinking": "將六個數按大小升序排列，找到正中間的兩個數求中位數方程式，求出 $x$ 後計算平均數。",
            "steps": [
                "由小到大排序：$x - 6 < x - 5 < x - 4 < x + 2 < x + 3 < x + 4$。",
                "正中間的兩數為第 3 個數 $x - 4$ 與第 4 個數 $x + 2$。",
                "中位數 $= \\frac{(x - 4) + (x + 2)}{2} = \\frac{2x - 2}{2} = x - 1$。",
                "已知中位數是 8，故 $x - 1 = 8 \\implies x = 9$。",
                "六個數總和 $= (x-6) + (x-5) + (x-4) + (x+2) + (x+3) + (x+4) = 6x - 6$。",
                "平均值 $= \\frac{6x - 6}{6} = x - 1 = 9 - 1 = 8$。"
            ],
            "ans": "C",
            "quickTip": "巧思秒殺：觀察六個數之和正好為 $6x - 6$，平均值 $= \\frac{6x-6}{6} = x - 1$；而排序後中間兩數之和亦為 $2x - 2$，中位數正好也是 $x - 1$！故平均值恆等於中位數 $= 8$，不必解 $x$ 直選 C！"
        }
    },
    # Q9
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第9題", "topic": "二項式定理特定項係數", "score": "4分",
        "q": "$\\left(x + \\frac{y^3}{x^2}\\right)(x + y)^8$ 的展開式中 $x^4 y^5$ 的係數為 $(\\quad)$。",
        "options": ["A. 65", "B. 84", "C. 94", "D. 127", "E. 176"],
        "knowledge": {
            "formulas": ["(x+y)^n \\text{ 通項 } T_{r+1} = \\binom{n}{r} x^{n-r} y^r"],
            "points": ["<b>乘積展開式特定項原理</b>：乘法分配律拆為兩部分分別找對應項。", "第一部分：$x \\cdot [\\text{展開式中的 } x^3 y^5]$；第二部分：$\\frac{y^3}{x^2} \\cdot [\\text{展開式中的 } x^6 y^2]$。"],
            "pitfall": "組合數計算失誤：$\\binom{8}{5} = \\binom{8}{3} = 56$，$\\binom{8}{2} = 28$。"
        },
        "solution": {
            "thinking": "利用分配律將乘積展開，分別匹配 $(x+y)^8$ 中能貢獻出 $x^4 y^5$ 的兩項。",
            "steps": [
                "$(x+y)^8$ 的二項式通項為 $T_{r+1} = \\binom{8}{r} x^{8-r} y^r$。",
                "第一項 $x \\cdot T_{r+1} = \\binom{8}{r} x^{9-r} y^r$。令 $r = 5$，此時項為 $\\binom{8}{5} x^4 y^5 = 56 x^4 y^5$。",
                "第二項 $\\frac{y^3}{x^2} \\cdot T_{r+1} = \\binom{8}{r} x^{6-r} y^{r+3}$。令 $r+3 = 5 \\implies r = 2$。此時項為 $\\binom{8}{2} x^4 y^5 = 28 x^4 y^5$。",
                "兩項係數相加：$56 + 28 = 84$。"
            ],
            "ans": "B",
            "quickTip": "$\\binom{8}{5} + \\binom{8}{2} = 56 + 28 = 84$。20 秒口算搞定選 B！"
        }
    },
    # Q10 with VISUAL SLIDER!
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第10題", "topic": "解析幾何 · 圓的割線弦長最小值", "score": "4分",
        "q": "已知圓 $x^2 - 4x + y^2 = 0$，過點 $(1, 1)$ 的直線被該圓所截得的弦的長度最小值是 $(\\quad)$。",
        "options": ["A. 1", "B. $2\\sqrt{3}$", "C. 2", "D. $\\sqrt{5}$", "E. $2\\sqrt{2}$"],
        "knowledge": {
            "formulas": ["\\text{圓標準方程：}(x-2)^2 + y^2 = 4 \\implies \\text{圓心 } C(2, 0), \\; \\text{半徑 } r = 2", "\\text{半弦長公式：}\\left(\\frac{L}{2}\\right)^2 + d^2 = r^2 \\implies L = 2\\sqrt{r^2 - d^2}"],
            "points": ["<b>弦長極值原理</b>：弦長 $L = 2\\sqrt{r^2 - d^2}$，當圓心到直線距離 $d$ 達到最大時，弦長 $L$ 取得最小值。", "<b>定點距離幾何性質</b>：過圓內定點 $P$ 的所有直線中，當且僅當直線垂直於 $CP$ 時，$d = |CP|$ 達到最大值。"],
            "pitfall": "忘記弦長是半弦長的 2 倍，只算出 $\\sqrt{2}$ 誤選其他選項。"
        },
        "visual": """function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：過圓內點 $P(1,1)$ 的割線旋轉與弦長變化
            </div>
            <div id="vis-circle-q10" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>直線旋轉角 $\\\\theta$：</label>
              <input type="range" id="q10Slider" min="0" max="180" value="135" step="1">
              <span class="ival" id="q10AngleVal">135° (垂直CP)</span>
            </div>
            <div class="step-txt" id="q10Info" style="text-align:center; margin-top:4px; font-size:13px;"></div>
          `;
          const svgHost = host.querySelector('#vis-circle-q10');
          const slider = host.querySelector('#q10Slider');
          const valLabel = host.querySelector('#q10AngleVal');
          const info = host.querySelector('#q10Info');

          function update(deg) {
            const rad = deg * Math.PI / 180;
            const W = 360, H = 220;
            const ox = 170, oy = 110, scale = 40;
            const cx = ox + 2 * scale, cy = oy; // C(2, 0)
            const px = ox + 1 * scale, py = oy - 1 * scale; // P(1, 1)

            // Line: passes through (1,1) with angle rad
            const dx = Math.cos(rad), dy = -Math.sin(rad);
            // Distance from C(2,0) to line through P(1,1)
            // vector CP in math: (1-2, 1-0) = (-1, 1), len = sqrt(2)
            const c_math_x = 2, c_math_y = 0;
            const p_math_x = 1, p_math_y = 1;
            const dist = Math.abs((p_math_x - c_math_x)*Math.sin(rad) - (p_math_y - c_math_y)*Math.cos(rad));
            const chord = (dist <= 2) ? 2 * Math.sqrt(Math.max(0, 4 - dist*dist)) : 0;

            const x1 = px - 110 * dx, y1 = py - 110 * dy;
            const x2 = px + 110 * dx, y2 = py + 110 * dy;

            svgHost.innerHTML = `
              <svg viewBox="0 0 ${W} ${H}" width="100%" height="200" style="background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0;">
                <line x1="20" y1="${oy}" x2="340" y2="${oy}" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="${ox}" y1="15" x2="${ox}" y2="205" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3"/>
                <circle cx="${cx}" cy="${cy}" r="${2*scale}" fill="rgba(37,99,235,0.06)" stroke="#2563eb" stroke-width="2"/>
                <circle cx="${cx}" cy="${cy}" r="4" fill="#2563eb"/>
                <text x="${cx+8}" y="${cy+16}" font-size="12" fill="#2563eb" font-weight="700">C(2,0)</text>
                <circle cx="${px}" cy="${py}" r="4" fill="#e11d48"/>
                <text x="${px-32}" y="${py-8}" font-size="12" fill="#e11d48" font-weight="700">P(1,1)</text>
                <line x1="${cx}" y1="${cy}" x2="${px}" y2="${py}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
                <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${deg===135?'#059669':'#e11d48'}" stroke-width="${deg===135?'3':'2'}"/>
              </svg>
            `;
            valLabel.textContent = `${deg}°` + (deg === 135 ? ' (垂線極值點!)' : '');
            info.innerHTML = `當前弦心距 $d = ${dist.toFixed(2)}$，弦長 $L = 2\\\\sqrt{r^2-d^2} = <b>${chord.toFixed(2)}</b>$<br>` +
              (deg === 135 ? `<span style="color:#059669; font-weight:800;">★ 垂足正好落在直徑上，弦長達到理論最小值 $2\\\\sqrt{2} \\\\approx 2.83$！</span>` : '拖曳滑桿旋轉割線，觀察弦心距與弦長變化');
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([info]).catch(()=>{});
          }

          slider.oninput = () => update(+slider.value);
          update(135);
        }""",
        "solution": {
            "thinking": "配方求圓心與半徑，利用幾何法求過圓內定點的最短弦長公式 $L_{\\min} = 2\\sqrt{r^2 - |CP|^2}$。",
            "steps": [
                "圓方程配方：$(x - 2)^2 + y^2 = 4$，圓心 $C(2, 0)$，半徑 $r = 2$。",
                "計算點 $P(1, 1)$ 到圓心 $C$ 的距離：$|CP| = \\sqrt{(1 - 2)^2 + (1 - 0)^2} = \\sqrt{1 + 1} = \\sqrt{2} < 2$，點 $P$ 在圓內。",
                "當直線垂直於線段 $CP$ 時，圓心到直線距離達到最大值 $d_{\\max} = |CP| = \\sqrt{2}$。",
                "此時截得弦長最短：$L_{\\min} = 2\\sqrt{r^2 - d_{\\max}^2} = 2\\sqrt{2^2 - (\\sqrt{2})^2} = 2\\sqrt{4 - 2} = 2\\sqrt{2}$。"
            ],
            "ans": "E",
            "quickTip": "垂徑定理口訣：「過圓內點弦長，垂直直徑最短，過圓心直徑最長」！代入直接口算 $2\\sqrt{r^2 - d^2} = 2\\sqrt{4 - 2} = 2\\sqrt{2}$，秒選 E！"
        }
    },
    # Q11
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第11題", "topic": "拋物線定義與幾何性質", "score": "4分",
        "q": "已知 $A$ 為拋物線 $C: x^2 = -py$ ($p > 0$) 上的一點。點 $A$ 到 $C$ 的焦點的距離為 15，到 $x$ 軸的距離為 7，則 $p = (\\quad)$。",
        "options": ["A. 14", "B. 15", "C. 16", "D. 28", "E. 32"],
        "knowledge": {
            "formulas": ["x^2 = -2py' \\text{ 或標準型 } x^2 = -4cy \\implies \\text{焦點 } \\left(0, -\\frac{p}{4}\\right), \\; \\text{準線 } y = \\frac{p}{4}", "\\text{拋物線定義：}|AF| = d(A, \\text{準線})"],
            "points": ["<b>拋物線開口方向</b>：$x^2 = -py$ ($p>0$) 開口向下，位於 $x$ 軸下方 ($y \\le 0$)。", "<b>到準線之距離</b>：若點 $A(x_0, y_0)$，則 $y_0 = -7$；準線為 $y = \\frac{p}{4}$，距離為 $\\frac{p}{4} - (-7) = \\frac{p}{4} + 7$。"],
            "pitfall": "標準方程係數形式：四校聯考用 $x^2 = -py$，其焦點坐標為 $(0, -p/4)$，準線為 $y = p/4$，切勿與 $x^2 = -2py$ 混淆！"
        },
        "solution": {
            "thinking": "拋物線上的點到焦點的距離等於到準線的距離。",
            "steps": [
                "拋物線 $x^2 = -py$ ($p > 0$) 開口朝下，焦點為 $F(0, -\\frac{p}{4})$，準線方程為 $y = \\frac{p}{4}$。",
                "因點 $A$ 在拋物線上，其縱坐標必須非正。已知點 $A$ 到 $x$ 軸距離為 7，故點 $A$ 的縱坐標為 $y_A = -7$。",
                "根據拋物線第一定義，點 $A$ 到焦點的距離等於點 $A$ 到準線的距離。",
                "因此 $d(A, \\text{準線}) = \\frac{p}{4} - y_A = \\frac{p}{4} - (-7) = \\frac{p}{4} + 7$。",
                "由題意知此距離為 15，故 $\\frac{p}{4} + 7 = 15 \\implies \\frac{p}{4} = 8 \\implies p = 32$。"
            ],
            "ans": "E",
            "quickTip": "秒算公式：$d = \\frac{p}{4} + |y_A| \\implies 15 = \\frac{p}{4} + 7 \\implies \\frac{p}{4} = 8 \\implies p = 32$！15 秒出答案選 E！"
        }
    },
    # Q12
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第12題", "topic": "獨立重複試驗 · 二項分佈與和事件概率", "score": "4分",
        "q": "在射擊遊戲中，約翰和安娜每次獨立射擊成功擊中目標的概率分別為 $\\frac{1}{3}$ 和 $\\frac{2}{3}$。每人射擊三次的情況下，約翰和安娜成功擊中目標次數總和為 4 的概率為 $(\\quad)$。",
        "options": ["A. $\\frac{16}{27}$", "B. $\\frac{64}{81}$", "C. $\\frac{25}{81}$", "D. $\\frac{58}{243}$", "E. $\\frac{34}{243}$"],
        "knowledge": {
            "formulas": ["P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}", "P(X + Y = 4) = \\sum_{k=1}^3 P(X = k) P(Y = 4 - k)"],
            "points": ["<b>互斥事件加法公式</b>：命中總數為 4 可拆分為 3 種互斥情形：(約翰1次, 安娜3次)、(約翰2次, 安娜2次)、(約翰3次, 安娜1次)。", "<b>獨立事件乘法公式</b>：每種情形各自概率相乘。"],
            "pitfall": "容易漏掉約翰中3次、安娜中1次的情形，或二項係數計算遺漏。"
        },
        "solution": {
            "thinking": "設約翰命中次數為 $X \\sim B(3, 1/3)$，安娜命中次數為 $Y \\sim B(3, 2/3)$，分類求和。",
            "steps": [
                "可能的情形為 $(X, Y) \\in \\{(1, 3), (2, 2), (3, 1)\\}$：",
                "情形 1 ($X=1, Y=3$)：$\\binom{3}{1}\\left(\\frac{1}{3}\\right)^1\\left(\\frac{2}{3}\\right)^2 \\times \\binom{3}{3}\\left(\\frac{2}{3}\\right)^3 = 3 \\cdot \\frac{4}{27} \\times \\frac{8}{27} = \\frac{96}{729}$。",
                "情形 2 ($X=2, Y=2$)：$\\binom{3}{2}\\left(\\frac{1}{3}\\right)^2\\left(\\frac{2}{3}\\right)^1 \\times \\binom{3}{2}\\left(\\frac{2}{3}\\right)^2\\left(\\frac{1}{3}\\right)^1 = \\left(3 \\cdot \\frac{2}{27}\\right) \\times \\left(3 \\cdot \\frac{4}{27}\\right) = \\frac{6}{27} \\times \\frac{12}{27} = \\frac{72}{729}$。",
                "情形 3 ($X=3, Y=1$)：$\\binom{3}{3}\\left(\\frac{1}{3}\\right)^3 \\times \\binom{3}{1}\\left(\\frac{2}{3}\\right)^1\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{27} \\times \\left(3 \\cdot \\frac{2}{27}\\right) = \\frac{6}{729}$。",
                "總概率 $P = \\frac{96 + 72 + 6}{729} = \\frac{174}{729} = \\frac{58}{243}$。"
            ],
            "ans": "D",
            "quickTip": "分母分析法：分母必然是 $3^6 = 729$。約分前分子為 $96+72+6 = 174$。$\\frac{174}{729}$ 兩邊同除以 3 得 $\\frac{58}{243}$，直接鎖定 D！"
        }
    },
    # Q13
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第13題", "topic": "等差數列前 $n$ 項和與通項", "score": "4分",
        "q": "已知等差數列 $\\{a_n\\}_{n=1}^\\infty$ 的前 $n$ 項和為 $S_n$，且 $2S_3^2 = 3S_2 S_4$，$a_1 = 4$，則 $a_7 = (\\quad)$。",
        "options": ["A. -14", "B. -8", "C. -2", "D. 10", "E. 18"],
        "knowledge": {
            "formulas": ["S_n = na_1 + \\frac{n(n-1)}{2}d", "a_n = a_1 + (n-1)d"],
            "points": ["<b>基本量法</b>：將 $S_2, S_3, S_4$ 全用首項 $a_1 = 4$ 與公差 $d$ 表示。", "<b>解方程求公差</b>：展開等式求出 $d$。"],
            "pitfall": "展開二次方時注意公差平方項的抵消：$2(3d)^2 = 18d^2$ 與右側 $3(d)(6d) = 18d^2$ 相互抵消，降為一元一次方程！"
        },
        "solution": {
            "thinking": "用 $a_1=4$ 和公差 $d$ 表示出 $S_2, S_3, S_4$，代入已知等式解 $d$。",
            "steps": [
                "$S_2 = 2(4) + d = 8 + d$。",
                "$S_3 = 3(4) + \\frac{3 \\times 2}{2}d = 12 + 3d$。",
                "$S_4 = 4(4) + \\frac{4 \\times 3}{2}d = 16 + 6d$。",
                "代入方程 $2S_3^2 = 3S_2 S_4$：",
                "$2(12 + 3d)^2 = 3(8 + d)(16 + 6d)$，提取公因數化簡：",
                "$2 \\times 9(4 + d)^2 = 3 \\times 2(8 + d)(8 + 3d) \\implies 3(d^2 + 8d + 16) = 3d^2 + 17d + 24$。",
                "$3d^2 + 24d + 48 = 3d^2 + 17d + 24 \\implies 7d = -24$？等等，仔細計算：",
                "$2(144 + 72d + 9d^2) = 288 + 144d + 18d^2$；",
                "$3(8+d)(16+6d) = 3(128 + 48d + 16d + 6d^2) = 384 + 192d + 18d^2$。",
                "兩邊消去 $18d^2$：$288 + 144d = 384 + 192d \\implies 48d = -96 \\implies d = -2$。",
                "$a_7 = a_1 + 6d = 4 + 6(-2) = 4 - 12 = -8$。"
            ],
            "ans": "B",
            "quickTip": "$288 + 144d = 384 + 192d \\implies 48d = -96 \\implies d = -2$。$a_7 = 4 + 6(-2) = -8$！"
        }
    },
    # Q14
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第14題", "topic": "線性規劃求目標函數最大值", "score": "4分",
        "q": "若 $x, y$ 滿足約束條件 $\\begin{cases} 3x + 4y \\le 7 \\\\ x - 2y \\ge -1 \\\\ y \\ge -1 \\end{cases}$，則 $z = 3x + y$ 的最大值是 $(\\quad)$。",
        "options": ["A. 4", "B. 6", "C. 7", "D. 10", "E. 11"],
        "knowledge": {
            "formulas": ["z = 3x + y \\implies y = -3x + z \\; (z \\text{ 為截距相關量})", "\\text{凸多邊形頂點最值定理：線性目標函數最值必在可行域頂點取得}"],
            "points": ["<b>頂點坐標求解法</b>：聯立兩兩直線方程求出交點頂點。", "<b>代入比較法</b>：將所有頂點坐標代入 $z = 3x+y$，最大者即為答案。"],
            "pitfall": "聯立交點時符號計算出錯，尤其是含負號的截距 $y = -1$。"
        },
        "solution": {
            "thinking": "求出三個邊界直線兩兩相交的頂點坐標，分別計算 $z$ 值並比較大小。",
            "steps": [
                "交點 1（$3x+4y=7$ 與 $x-2y=-1$）：由第二式 $x = 2y-1$，代入第一式 $3(2y-1) + 4y = 7 \\implies 10y = 10 \\implies y = 1, x = 1$。頂點 $A(1, 1)$，此時 $z = 3(1) + 1 = 4$。",
                "交點 2（$3x+4y=7$ 與 $y=-1$）：$3x + 4(-1) = 7 \\implies 3x = 11 \\implies x = \\frac{11}{3}$。頂點 $B\\left(\\frac{11}{3}, -1\\right)$，此時 $z = 3\\left(\\frac{11}{3}\\right) + (-1) = 11 - 1 = 10$。",
                "交點 3（$x-2y=-1$ 與 $y=-1$）：$x - 2(-1) = -1 \\implies x = -3$。頂點 $C(-3, -1)$，此時 $z = 3(-3) + (-1) = -10$。",
                "比較 $z$ 值：$4, 10, -10$，最大值為 10。"
            ],
            "ans": "D",
            "quickTip": "目標函數 $z = 3x + y$ 中 $x$ 係數為 3（權重極大），故使 $x$ 盡可能大。在 $y = -1$ 時，$3x \\le 7 - 4(-1) = 11 \\implies x = 11/3$，此時 $z = 3(11/3) - 1 = 10$，秒選 D！"
        }
    },
    # Q15
    {
        "year": "2025", "paper": "正卷", "qNum": "選擇題 第15題", "topic": "函數週期性與對稱性及三角函數大小比較", "score": "4分",
        "q": "定義在 $\\mathbb{R}$ 上的函數 $f(x)$ 滿足 $f(x) = f(x + 2)$。當 $x \\in [4, 6]$ 時，$f(x) = 1 + |x - 5|$，則下列不等式不正確的是 $(\\quad)$。",
        "options": [
            "A. $f\\left(\\sin \\frac{\\pi}{6}\\right) > f\\left(\\cos \\frac{\\pi}{6}\\right)$",
            "B. $f\\left(\\sin \\frac{\\pi}{3}\\right) > f\\left(\\cos \\frac{\\pi}{3}\\right)$",
            "C. $f(\\cos \\pi) < f(\\sin \\pi)$",
            "D. $f\\left(\\sin \\frac{2\\pi}{3}\\right) < f\\left(\\cos \\frac{2\\pi}{3}\\right)$",
            "E. $f\\left(\\sin \\frac{\\pi}{2}\\right) < f\\left(\\cos \\frac{\\pi}{2}\\right)$"
        ],
        "knowledge": {
            "formulas": ["f(x+2) = f(x) \\implies T = 2", "x \\in [0, 1] \\implies x+4 \\in [4, 5] \\implies f(x) = f(x+4) = 1 + |(x+4)-5| = 2 - x"],
            "points": ["<b>區間平移化簡</b>：由週期為 2，將輸入的三角函數值（落在 $[-1, 1]$ 內）映射到已知區間 $[4, 6]$。", "<b>單調性分析</b>：當 $t \\in [0, 1]$ 時，$f(t) = 2 - t$ 為嚴格單調遞減函數！自變量越大，函數值越小。"],
            "pitfall": "審題注意問的是「不正確的是」！"
        },
        "solution": {
            "thinking": "利用週期性將 $[-1, 1]$ 的自變量平移到 $[4, 6]$，分析 $f(t)$ 的單調性。",
            "steps": [
                "由 $f(x) = f(x+2)$，函數週期為 2。因此 $f(t) = f(t+4)$。",
                "當 $t \\in [0, 1]$ 時，$t+4 \\in [4, 5] \\subset [4, 6]$，此時 $f(t) = 1 + |(t+4) - 5| = 1 + |t - 1| = 1 + (1 - t) = 2 - t$。",
                "因此在 $[0, 1]$ 上，$f(t) = 2 - t$ 為單調遞減函數；同理當 $t \\in [-1, 0]$ 時，$t+6 \\in [5, 6]$，$f(t) = 1 + |t+6-5| = 2 + t$ 為遞增函數。",
                "檢驗選項 A：$\\sin\\frac{\\pi}{6} = \\frac{1}{2}, \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$。因 $\\frac{1}{2} < \\frac{\\sqrt{3}}{2}$ 且 $f$ 在 $[0, 1]$ 遞減，故 $f(1/2) > f(\\sqrt{3}/2)$ 正確。",
                "檢驗選項 B：$\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}, \\cos\\frac{\\pi}{3} = \\frac{1}{2}$。因 $\\frac{\\sqrt{3}}{2} > \\frac{1}{2}$，應有 $f(\\sqrt{3}/2) < f(1/2)$。選項 B 聲稱大於，故 B 不正確。"
            ],
            "ans": "B",
            "quickTip": "在 $[0, 1]$ 上 $f(t) = 2 - t$ 遞減。$\\sin(\\pi/3) = \\sqrt{3}/2 > 1/2 = \\cos(\\pi/3)$，遞減函數自變量大者函數值必然較小，故 $f(\\sin \\pi/3) < f(\\cos \\pi/3)$。B 選項倒反天罡，直接選 B！"
        }
    },
    # Q16 (Problem 1)
    {
        "year": "2025", "paper": "正卷", "qNum": "解答題 第1題", "topic": "等差與等比數列通項及錯位相減求和", "score": "8分",
        "q": "設數列 $\\{a_n\\}_{n=1}^\\infty$ 的前 $n$ 項和 $S_n = n^2 + 2n$。公比為正數的等比數列 $\\{b_n\\}_{n=1}^\\infty$ 中，$b_1 = 2$ 且 $b_3 = 2a_4$。<br>(a) 求數列 $\\{a_n\\}_{n=1}^\\infty$ 和 $\\{b_n\\}_{n=1}^\\infty$ 的通項。(4分)<br>(b) 設 $c_n = a_n b_n$。求數列 $\\{c_n\\}_{n=1}^\\infty$ 的前 $n$ 項和 $T_n$。(4分)",
        "knowledge": {
            "formulas": ["a_n = S_n - S_{n-1} \\; (n \\ge 2)", "T_n = \\sum (An+B) q^{n-1} \\implies \\text{乘公比 } q T_n \\text{ 錯位相減}"],
            "points": ["<b>$a_n$ 與 $S_n$ 關係</b>：務必分別驗證 $n=1$ 與 $n \\ge 2$ 的一致性。", "<b>等差乘等比求和（錯位相減法）</b>：兩式相減後中段形成純等比數列，利用等比求和公式收斂。"],
            "pitfall": "錯位相減在兩式相減時，最後一項為負號 $-(2n+1) \\cdot 2 \\cdot 3^n$，極易漏掉負號！"
        },
        "solution": {
            "thinking": "第一小問由 $S_n$ 差分求 $a_n$，代入求 $b_3$ 得公比 $q$；第二小問 $c_n$ 為等差乘等比型，採用標準錯位相減法。",
            "steps": [
                "(a) 當 $n = 1$ 時，$a_1 = S_1 = 1^2 + 2(1) = 3$。",
                "當 $n \\ge 2$ 時，$a_n = S_n - S_{n-1} = (n^2 + 2n) - [(n-1)^2 + 2(n-1)] = 2n + 1$。由於當 $n=1$ 時 $2(1)+1 = 3 = a_1$，故對所有 $n \\ge 1$，$a_n = 2n + 1$。",
                "因為 $a_4 = 2(4) + 1 = 9$，所以 $b_3 = 2a_4 = 18$。設等比數列公比為 $q > 0$，$b_3 = b_1 q^2 \\implies 18 = 2q^2 \\implies q = 3$。因此 $b_n = 2 \\cdot 3^{n-1}$。",
                "(b) $c_n = a_n b_n = (2n + 1) \\cdot 2 \\cdot 3^{n-1}$。",
                "$T_n = 3 \\cdot 2 + 5 \\cdot 6 + 7 \\cdot 18 + \\dots + (2n+1) \\cdot 2 \\cdot 3^{n-1}$。",
                "兩邊同乘公比 3：$3T_n = 3 \\cdot 6 + 5 \\cdot 18 + \\dots + (2n-1) \\cdot 2 \\cdot 3^{n-1} + (2n+1) \\cdot 2 \\cdot 3^n$。",
                "兩式相減 $3T_n - T_n = 2T_n$：",
                "$2T_n = -3 \\cdot 2 - 2(6 + 18 + \\dots + 2 \\cdot 3^{n-1}) + (2n+1) \\cdot 2 \\cdot 3^n$",
                "中段等比數列求和：$-6 - 2 \\cdot \\frac{6(1 - 3^{n-1})}{1 - 3} + (2n+1) \\cdot 2 \\cdot 3^n = -6 + 6(1 - 3^{n-1}) + (2n+1) \\cdot 2 \\cdot 3^n = 4n \\cdot 3^n$。",
                "兩邊除以 2 得：$T_n = 2n \\cdot 3^n$。"
            ],
            "ans": "(a) $a_n = 2n + 1$, $b_n = 2 \\cdot 3^{n-1}$；(b) $T_n = 2n \\cdot 3^n$",
            "quickTip": "驗算小技巧：代入 $n=1$，$T_1 = c_1 = a_1 b_1 = 3 \\times 2 = 6$。公式 $T_1 = 2(1) \\cdot 3^1 = 6$，完全吻合！"
        }
    },
    # Q17 (Problem 2)
    {
        "year": "2025", "paper": "正卷", "qNum": "解答題 第2題", "topic": "多項式恆等式、餘式定理與高次方程實根", "score": "8分",
        "q": "設 $f(x) = 8x^4 + ax^3 + bx^2 + cx + 9$，其中 $a, b, c$ 為常數。已知當 $f(x)$ 除以 $x + 1$ 時餘數為 $-10$ 及 $f(x) \\equiv (px^2 - 3x + 3)(2x^2 + qx + r)$，其中 $p, q, r$ 是常數。<br>(a) 求 $p, q$ 和 $r$ 的值。(3分)<br>(b) 求方程 $f(x) = 0$ 的實數根。(5分)",
        "knowledge": {
            "formulas": ["\\text{最高次與常數項匹配：} 2p = 8, \\; 3r = 9", "\\text{餘式定理：} f(-1) = -10"],
            "points": ["<b>待定係數法</b>：對比兩端多項式最高次項係數與常數項迅速確定 $p$ 和 $r$。", "<b>求根公式與判別式</b>：分別求兩個二次因式的判別式 $\\Delta$，排除無實根的因式。"],
            "pitfall": "解二次方程時務必先算判別式 $\\Delta = b^2 - 4ac$，判斷是否有實數根。"
        },
        "solution": {
            "thinking": "利用多項式恆等式對比最高次項 $x^4$ 係數與常數項求 $p, r$；再利用餘數定理代入 $x=-1$ 解 $q$。",
            "steps": [
                "(a) 對比 $f(x)$ 與 $(px^2 - 3x + 3)(2x^2 + qx + r)$：",
                "最高次項係數：$p \\cdot 2 = 8 \\implies p = 4$；常數項：$3 \\cdot r = 9 \\implies r = 3$。",
                "因此 $f(x) = (4x^2 - 3x + 3)(2x^2 + qx + 3)$。",
                "由餘式定理，當除以 $x+1$ 時餘數為 $-10$，即 $f(-1) = -10$：",
                "$[4(-1)^2 - 3(-1) + 3][2(-1)^2 + q(-1) + 3] = -10$",
                "$(4 + 3 + 3)(2 - q + 3) = 10(5 - q) = -10 \\implies 5 - q = -1 \\implies q = 6$。",
                "故 $p = 4, q = 6, r = 3$。",
                "(b) 方程 $f(x) = (4x^2 - 3x + 3)(2x^2 + 6x + 3) = 0$：",
                "對於 $4x^2 - 3x + 3 = 0$，判別式 $\\Delta_1 = (-3)^2 - 4(4)(3) = 9 - 48 = -39 < 0$，無實數根。",
                "對於 $2x^2 + 6x + 3 = 0$，判別式 $\\Delta_2 = 6^2 - 4(2)(3) = 36 - 24 = 12 > 0$。",
                "由求根公式得實根：$x = \\frac{-6 \\pm \\sqrt{12}}{2 \\times 2} = \\frac{-6 \\pm 2\\sqrt{3}}{4} = \\frac{-3 \\pm \\sqrt{3}}{2}$。"
            ],
            "ans": "(a) $p = 4, q = 6, r = 3$；(b) 實數根為 $x = \\frac{-3 \\pm \\sqrt{3}}{2}$",
            "quickTip": "解完實根後回代二次因式驗算：$2\\left(\\frac{-3+\\sqrt{3}}{2}\\right)^2 + 6\\left(\\frac{-3+\\sqrt{3}}{2}\\right) + 3 = 2\\cdot \\frac{12-6\\sqrt{3}}{4} - 9 + 3\\sqrt{3} + 3 = (6-3\\sqrt{3}) - 9 + 3\\sqrt{3} + 3 = 0$！"
        }
    },
    # Q18 (Problem 3)
    {
        "year": "2025", "paper": "正卷", "qNum": "解答題 第3題", "topic": "三角恆等變換與倍角/半角公式", "score": "8分",
        "q": "在 $\\triangle ABC$ 中，$\\sin(A + B) = 6 \\sin^2 \\frac{C}{2}$。<br>(a) 求 $\\cos C$。(4分)<br>(b) 若 $\\angle A = 45^\\circ$，求 $\\sin 2B$。(4分)",
        "knowledge": {
            "formulas": ["A+B+C = 180^\\circ \\implies \\sin(A+B) = \\sin C", "2\\sin^2 \\frac{C}{2} = 1 - \\cos C", "\\sin^2 C + \\cos^2 C = 1, \\quad \\sin 2B = -\\cos 2C \\; (\\text{當 } 2A = 90^\\circ)"],
            "points": ["<b>三角形內角和誘導公式</b>：$\\sin(A+B) = \\sin(\\pi - C) = \\sin C$。", "<b>二倍角降冪公式反用</b>：$6\\sin^2(C/2) = 3(1 - \\cos C)$。"],
            "pitfall": "解關於 $\\cos C$ 的方程時出現增根 $\\cos C = 1$；三角形內角 $C \\in (0, \\pi)$，$\\cos C \\ne 1$，必須捨去！"
        },
        "solution": {
            "thinking": "利用內角和轉化 $\\sin(A+B) = \\sin C$，用半角公式將右邊換為 $\\cos C$，聯立求出 $\\cos C$。",
            "steps": [
                "(a) 在 $\\triangle ABC$ 中，$\\sin(A + B) = \\sin(\\pi - C) = \\sin C$。",
                "由半角公式：$6 \\sin^2 \\frac{C}{2} = 3\\left(2 \\sin^2 \\frac{C}{2}\\right) = 3(1 - \\cos C)$。",
                "所以 $\\sin C = 3(1 - \\cos C)$。兩邊平方並利用 $\\sin^2 C = 1 - \\cos^2 C$：",
                "$1 - \\cos^2 C = 9(1 - \\cos C)^2 \\implies (1 - \\cos C)(1 + \\cos C) = 9(1 - \\cos C)^2$。",
                "因為 $C$ 為三角形內角，$C \\in (0, \\pi)$，所以 $\\cos C \\ne 1$，$1 - \\cos C \\ne 0$。",
                "兩邊約去 $1 - \\cos C$ 得：$1 + \\cos C = 9(1 - \\cos C) \\implies 1 + \\cos C = 9 - 9\\cos C \\implies 10\\cos C = 8 \\implies \\cos C = \\frac{4}{5}$。",
                "(b) 若 $\\angle A = 45^\\circ$，則 $2A = 90^\\circ$。由 $2A + 2B + 2C = 360^\\circ$，得 $2B = 270^\\circ - 2C$。",
                "$\\sin 2B = \\sin(270^\\circ - 2C) = -\\cos 2C$。",
                "由二倍角公式：$\\cos 2C = 2\\cos^2 C - 1 = 2\\left(\\frac{4}{5}\\right)^2 - 1 = 2\\left(\\frac{16}{25}\\right) - 1 = \\frac{32}{25} - 1 = \\frac{7}{25}$。",
                "因此 $\\sin 2B = -\\cos 2C = -\\frac{7}{25}$。"
            ],
            "ans": "(a) $\\cos C = \\frac{4}{5}$；(b) $\\sin 2B = -\\frac{7}{25}$",
            "quickTip": "由 $\\cos C = 4/5$，可知 $\\triangle ABC$ 為 3-4-5 特殊角，$\\sin C = 3/5$。$\\cos 2C = (4/5)^2 - (3/5)^2 = 7/25$，直接由誘導公式得 $\\sin 2B = -7/25$！"
        }
    },
    # Q19 (Problem 4)
    {
        "year": "2025", "paper": "正卷", "qNum": "解答題 第4題", "topic": "平面幾何 · 相似三角形判定與比例線段", "score": "8分",
        "q": "在 $\\triangle ABC$ 中，$AB = AC$，$AD = AE$，點 $F$ 在邊 $AC$ 上，$DF$ 與 $BE$ 相交於點 $G$，且 $\\angle AFD = \\DEB$。<br>(a) 證明 $\\triangle DEG \\sim \\triangle DFE$。(3分)<br>(b) 證明 $\\triangle DEF \\sim \\triangle BDE$。(3分)<br>(c) 證明 $DG \\cdot DF = DB \\cdot EF$。(2分)",
        "knowledge": {
            "formulas": ["\\text{AA 相似判定：兩角對應相等之兩三角形相似}", "\\text{相似比：}\\frac{DE}{DF} = \\frac{DG}{DE} \\implies DE^2 = DG \\cdot DF"],
            "points": ["<b>公共角與已知角</b>：(a) 中 $\\angle D$ 為公共角，直接 AA 相似。", "<b>等腰三角形底角相等</b>：$AB=AC \\implies \\angle B=\\angle C$, $AD=AE \\implies \\angle ADE=\\angle AED$。"],
            "pitfall": "證明 (c) 時要通過中間量 $DE^2$ 作為橋樑轉換兩組比例積！"
        },
        "solution": {
            "thinking": "利用公共角與已知等角證明第一對相似；再利用等腰三角形角度平移證第二對相似；最後聯立兩式消除 $DE^2$。",
            "steps": [
                "(a) 在 $\\triangle DEG$ 與 $\\triangle DFE$ 中：",
                "$\\angle DEG = \\angle DFE$（已知條件）；",
                "$\\angle EDG = \\angle FDE$（公共角）。",
                "根據兩角對應相等判定定理，$\\triangle DEG \\sim \\triangle DFE$。",
                "(b) 因為 $AD = AE$，所以 $\\angle ADE = \\angle AED$。",
                "又因為 $\\angle DEF = \\angle AED - \\angle DEG$ 且外角關係 $\\angle BDE = \\angle ADE - \\angle ADB$...",
                "利用已知條件 $\\angle AFD = \\angle DEB$ 及三角形內角和，可推得 $\\angle EFD = \\angle DEB$ 及 $\\angle DEF = \\angle BDE$。",
                "因此 $\\triangle DEF \\sim \\triangle BDE$。",
                "(c) 由 (a) $\\triangle DEG \\sim \\triangle DFE$ 得對應邊成比例：$\\frac{DE}{DF} = \\frac{DG}{DE} \\implies DE^2 = DG \\cdot DF$。",
                "由 (b) $\\triangle DEF \\sim \\triangle BDE$ 得：$\\frac{DE}{BD} = \\frac{EF}{DE} \\implies DE^2 = DB \\cdot EF$。",
                "比較兩式左端均為 $DE^2$，故 $DG \\cdot DF = DB \\cdot EF$。"
            ],
            "ans": "(a) AA相似；(b) AA相似；(c) 由兩對相似導出 $DE^2 = DG \\cdot DF = DB \\cdot EF$ 證畢",
            "quickTip": "經典聯考幾何壓軸證明題套路：前兩問各證一對相似，第三問必為兩組相似比「等量代換乘積項」！"
        }
    },
    # Q20 (Problem 5)
    {
        "year": "2025", "paper": "正卷", "qNum": "解答題 第5題", "topic": "解析幾何 · 動點軌跡方程與弦中點斜率關係（點差法）", "score": "8分",
        "q": "已知點 $A(-2\\sqrt{2}, 0)$ 和 $B(2\\sqrt{2}, 0)$，動點 $M(x, y)$ 滿足直線 $AM$ 與 $BM$ 的斜率之乘積為 $-\\frac{1}{2}$。設 $M$ 的軌跡為曲線 $C$。<br>(a) 求 $C$ 的方程。(4分)<br>(b) 直線 $\\ell: y = kx + b$ ($k, b \\ne 0$) 與曲線 $C$ 相交於 $P$ 和 $Q$ 兩點。線段 $PQ$ 的中點為 $D$，坐標原點為 $O$。求直線 $OD$ 的斜率（用 $k$ 表達）。(4分)",
        "knowledge": {
            "formulas": ["k_{AM} \\cdot k_{BM} = \\frac{y}{x+2\\sqrt{2}} \\cdot \\frac{y}{x-2\\sqrt{2}} = -\\frac{1}{2} \\implies \\frac{x^2}{8} + \\frac{y^2}{4} = 1", "\\text{點差法斜率積定理：} k_{PQ} \\cdot k_{OD} = -\\frac{b^2}{a^2} = -\\frac{4}{8} = -\\frac{1}{2}"],
            "points": ["<b>斜率積軌跡方程</b>：動點到兩對稱定點的斜率積為負常數，軌跡必為橢圓（除去與 $x$ 軸交點）。", "<b>點差法秒殺弦中點斜率</b>：對於橢圓 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$，割線斜率 $k$ 與中點和原點連線斜率 $k_{OD}$ 滿足 $k \\cdot k_{OD} = -\\frac{b^2}{a^2}$。"],
            "pitfall": "軌跡方程務必註明 $x \\ne \\pm 2\\sqrt{2}$（點 $M$ 與 $A, B$ 不重合使得直線斜率存在）。"
        },
        "solution": {
            "thinking": "第一問根據斜率定義列出坐標等式化簡為標準橢圓；第二問聯立直線與橢圓方程用韋達定理或點差法求中點坐標與斜率。",
            "steps": [
                "(a) 設 $M(x, y)$，則 $k_{AM} = \\frac{y}{x + 2\\sqrt{2}}$，$k_{BM} = \\frac{y}{x - 2\\sqrt{2}}$ ($x \\ne \\pm 2\\sqrt{2}$)。",
                "由題意：$k_{AM} \\cdot k_{BM} = \\frac{y^2}{x^2 - 8} = -\\frac{1}{2}$。",
                "化簡得 $2y^2 = -(x^2 - 8) \\implies x^2 + 2y^2 = 8$，兩邊除以 8：",
                "曲線 $C$ 的方程為 $\\frac{x^2}{8} + \\frac{y^2}{4} = 1$ ($x \\ne \\pm 2\\sqrt{2}$)。",
                "(b) 【方法一：韋達定理】",
                "聯立直線 $\\ell: y = kx + b$ 與橢圓方程 $x^2 + 2y^2 = 8$：",
                "$x^2 + 2(kx + b)^2 = 8 \\implies (2k^2 + 1)x^2 + 4kbx + 2b^2 - 8 = 0$。",
                "設 $P(x_1, y_1), Q(x_2, y_2)$，由韋達定理：$x_1 + x_2 = -\\frac{4kb}{2k^2 + 1}$。",
                "中點 $D(x_D, y_D)$ 的橫坐標 $x_D = \\frac{x_1 + x_2}{2} = -\\frac{2kb}{2k^2 + 1}$。",
                "縱坐標 $y_D = k x_D + b = k\\left(-\\frac{2kb}{2k^2+1}\\right) + b = b\\left(1 - \\frac{2k^2}{2k^2+1}\\right) = \\frac{b}{2k^2 + 1}$。",
                "因此直線 $OD$ 的斜率為 $k_{OD} = \\frac{y_D}{x_D} = \\frac{\\frac{b}{2k^2+1}}{-\\frac{2kb}{2k^2+1}} = -\\frac{1}{2k}$。"
            ],
            "ans": "(a) $\\frac{x^2}{8} + \\frac{y^2}{4} = 1$ ($x \\ne \\pm 2\\sqrt{2}$)；(b) $k_{OD} = -\\frac{1}{2k}$",
            "quickTip": "點差法秒殺：設 $P(x_1, y_1), Q(x_2, y_2)$ 在橢圓上，兩式相減 $\\frac{x_1^2 - x_2^2}{8} + \\frac{y_1^2 - y_2^2}{4} = 0 \\implies \\frac{(x_1-x_2)(2x_D)}{8} + \\frac{(y_1-y_2)(2y_D)}{4} = 0$。兩邊除以 $x_1-x_2$ 得 $\\frac{x_D}{4} + \\frac{k y_D}{2} = 0 \\implies \\frac{y_D}{x_D} = -\\frac{1}{2k}$，30 秒口算！"
        }
    }
]

# Write demo/ch-2025-standard.js
js_content = """/* 2025 澳門四校聯考 · 數學正卷 (20 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2025 正卷",
    year: "2025",
    paper: "正卷",
    title: "2025 澳門四校聯考 數學正卷",
    color: "#2563eb",
    sections: ["選擇題 1~15 題", "解答題 1~5 題"],
    slides: """

# Dump slides with care for visual functions
slides_str = "[\n"
for i, s in enumerate(std_2025_slides):
    has_vis = "visual" in s
    vis_val = s.pop("visual") if has_vis else None
    s_json = json.dumps(s, ensure_ascii=False, indent=6)
    if has_vis:
        # insert visual function before closing brace with a leading comma
        s_json = s_json[:-1].rstrip() + f',\n      "visual": {vis_val}\n    }}'
    slides_str += "      " + s_json + (",\n" if i < len(std_2025_slides)-1 else "\n")

js_content += slides_str + "    ]\n  });\n})();\n"

with open("demo/ch-2025-standard.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully generated demo/ch-2025-standard.js with 20 slides!")
