# -*- coding: utf-8 -*-
"""
Ch 06: 專題六 空間向量的概念與運算 (6 題單選)
涵蓋：對稱點坐標 1、四點共面條件 2、垂直與平行模長 3、共線向量參數 4、四面體中點向量分解 5、鈍角夾角條件 6
"""

def get_ch06_slides():
    slides = [
        # 1
        {
            "year": "2026", "paper": "專題六", "qNum": "單選題 第1題",
            "topic": "空間直角坐標系 — 關於坐標軸對稱點", "score": "4分",
            "q": "點 $P(2, 3, 1)$ 關於 $z$ 軸的對稱點 $P'$ 坐標為 $(\\quad)$。",
            "options": [
                "A. $P'(-2, 3, 1)$",
                "B. $P'(2, -3, 1)$",
                "C. $P'(-2, 3, -1)$",
                "D. $P'(-2, -3, 1)$"
            ],
            "knowledge": {
                "formulas": [
                    "\\text{關於 } z \\text{ 軸對稱：} (x, y, z) \\to (-x, -y, z)",
                    "\\text{關於 } xOy \\text{ 平面對稱：} (x, y, z) \\to (x, y, -z)",
                    "\\text{關於原點對稱：} (x, y, z) \\to (-x, -y, -z)"
                ],
                "points": ["<b>對稱坐標口訣</b>：「關誰誰不變，其餘全變號」！", "<b>關於 z 軸對稱</b>：$z$ 坐標保持不變，$x, y$ 坐標分別取相反數。"],
                "pitfall": "切勿混淆「關於坐標軸對稱」與「關於坐標平面對稱」。"
            },
            "solution": {
                "thinking": "利用空間直角坐標系的幾何對稱規律，關於哪個軸對稱，該軸坐標不變，其餘兩坐標變為相反數。",
                "steps": [
                    "點 $P(x, y, z)$ 關於 $z$ 軸的對稱點：其 $z$ 坐標不變，投影在 $xOy$ 平面上的點 $(x, y)$ 關於原點對稱變為 $(-x, -y)$。",
                    "故對稱點坐標公式為：$(x, y, z) \\to (-x, -y, z)$。",
                    "已知點 $P(2, 3, 1)$：<br>$x' = -2, \\quad y' = -3, \\quad z' = 1$。",
                    "因此對稱點為 $P'(-2, -3, 1)$。"
                ],
                "ans": "D",
                "quickTip": "口訣：關於 z 軸對稱，只有 z 不變，x, y 取負！$(2, 3, 1) \\to (-2, -3, 1)$，秒選 D！"
            }
        },
        # 2
        {
            "year": "2026", "paper": "專題六", "qNum": "單選題 第2題",
            "topic": "四點共面條件與法向量點乘", "score": "4分",
            "q": "已知點 $A(4, 1, 3)$，$B(2, 3, 1)$，$C(5, 7, -5)$，又點 $P(x, -1, 3)$ 在平面 $ABC$ 內，則 $x$ 的值為 $(\\quad)$。",
            "options": ["A. 14", "B. 13", "C. 12", "D. 11"],
            "knowledge": {
                "formulas": [
                    "\\vec{AP} = \\lambda \\vec{AB} + \\mu \\vec{AC} \\quad (\\text{共面向量定理})",
                    "\\vec{n} = \\vec{AB} \\times \\vec{AC}, \\quad \\vec{AP} \\cdot \\vec{n} = 0"
                ],
                "points": ["<b>向量坐標表示</b>：$\\vec{AB} = (-2, 2, -2)$，$\\vec{AC} = (1, 6, -8)$，$\\vec{AP} = (x-4, -2, 0)$。", "<b>法向量點乘為 0</b>：求出平面法向量後與 $\\vec{AP}$ 做數量積等於 0。"],
                "pitfall": "計算叉乘時符號務必核實：$(-2, 2, -2) \\parallel (1, -1, 1)$。"
            },
            "solution": {
                "thinking": "寫出 $\\vec{AB}, \\vec{AC}, \\vec{AP}$ 的坐標，利用四點共面等價於混合積（三階行列式）為 0，或求法向量點乘求解。",
                "steps": [
                    "求基準向量坐標：<br>$\\vec{AB} = (2-4, 3-1, 1-3) = (-2, 2, -2)$。<br>$\\vec{AC} = (5-4, 7-1, -5-3) = (1, 6, -8)$。<br>$\\vec{AP} = (x-4, -1-1, 3-3) = (x-4, -2, 0)$。",
                    "四點共面等價於以這三個向量為行的三階行列式為 0：<br>$\\begin{vmatrix} x-4 & -2 & 0 \\\\ -2 & 2 & -2 \\\\ 1 & 6 & -8 \\end{vmatrix} = 0$。",
                    "按第一行展開：<br>$(x - 4) \\begin{vmatrix} 2 & -2 \\\\ 6 & -8 \\end{vmatrix} - (-2) \\begin{vmatrix} -2 & -2 \\\\ 1 & -8 \\end{vmatrix} + 0 = 0$。<br>計算二階行列式：<br>$\\begin{vmatrix} 2 & -2 \\\\ 6 & -8 \\end{vmatrix} = 2(-8) - (-2)(6) = -16 + 12 = -4$；<br>$\\begin{vmatrix} -2 & -2 \\\\ 1 & -8 \\end{vmatrix} = (-2)(-8) - (-2)(1) = 16 + 2 = 18$。",
                    "代入方程：<br>$(x - 4)(-4) + 2(18) = 0 \\implies -4x + 16 + 36 = 0$<br>$-4x + 52 = 0 \\implies 4x = 52 \\implies x = 13$。"
                ],
                "ans": "B",
                "quickTip": "三階行列式按有 0 的行展開：$-4(x-4) + 36 = 0 \\implies 4x = 52 \\implies x = 13$！"
            }
        },
        # 3
        {
            "year": "2026", "paper": "專題六", "qNum": "單選題 第3題",
            "topic": "空間向量垂直、平行與模長計算", "score": "4分",
            "q": "設 $x, y \\in \\mathbb{R}$，$\\vec{a} = (x, 1, 1)$，$\\vec{b} = (1, y, 1)$，$\\vec{c} = (2, -4, 2)$，且 $\\vec{a} \\perp \\vec{c}$，$\\vec{b} \\parallel \\vec{c}$，則 $|2\\vec{a} + \\vec{b}| = (\\quad)$。",
            "options": ["A. $2\\sqrt{2}$", "B. $3\\sqrt{2}$", "C. 3", "D. $\\sqrt{10}$"],
            "knowledge": {
                "formulas": [
                    "\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0",
                    "\\vec{u} \\parallel \\vec{v} \\iff \\frac{u_x}{v_x} = \\frac{u_y}{v_y} = \\frac{u_z}{v_z}",
                    "|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}"
                ],
                "points": ["<b>垂直條件列方程</b>：$\\vec{a} \\cdot \\vec{c} = 2x - 4 + 2 = 0 \\implies x = 1$。", "<b>平行條件求比例</b>：$\\frac{1}{2} = \\frac{y}{-4} = \\frac{1}{2} \\implies y = -2$。", "<b>向量線性組合與模長</b>：$2\\vec{a} + \\vec{b} = (3, 0, 3)$。"],
                "pitfall": "向量模長計算：$\\sqrt{3^2 + 0^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$。"
            },
            "solution": {
                "thinking": "由垂直數量積為 0 求 $x$，由平行坐標成比例求 $y$，計算線性組合後的坐標及其模長。",
                "steps": [
                    "由 $\\vec{a} \\perp \\vec{c}$，數量積為 0：<br>$\\vec{a} \\cdot \\vec{c} = x(2) + 1(-4) + 1(2) = 2x - 4 + 2 = 2x - 2 = 0 \\implies 2x = 2 \\implies x = 1$。<br>故 $\\vec{a} = (1, 1, 1)$。",
                    "由 $\\vec{b} \\parallel \\vec{c}$，坐標成比例：<br>$\\frac{1}{2} = \\frac{y}{-4} = \\frac{1}{2} \\implies y = -4 \\times \\frac{1}{2} = -2$。<br>故 $\\vec{b} = (1, -2, 1)$。",
                    "計算向量線性組合 $2\\vec{a} + \\vec{b}$：<br>$2\\vec{a} + \\vec{b} = 2(1, 1, 1) + (1, -2, 1) = (2+1, 2-2, 2+1) = (3, 0, 3)$。",
                    "計算模長：<br>$|2\\vec{a} + \\vec{b}| = \\sqrt{3^2 + 0^2 + 3^2} = \\sqrt{9 + 0 + 9} = \\sqrt{18} = 3\\sqrt{2}$。"
                ],
                "ans": "B",
                "quickTip": "$2x = 2 \\implies x=1$；$y/(-4) = 1/2 \\implies y=-2$；向量為 $(3, 0, 3)$，模長 $\\sqrt{9+9} = 3\\sqrt{2}$，秒選 B！"
            }
        },
        # 4
        {
            "year": "2026", "paper": "專題六", "qNum": "單選題 第4題",
            "topic": "空間共線向量成比例參數求解", "score": "4分",
            "q": "若 $\\vec{a} = \\left(-1, 2, \\frac{1}{2}\\right)$ 與 $\\vec{b} = (2, m, -1)$ 共線，則 $m = (\\quad)$。",
            "options": ["A. 2", "B. -2", "C. 4", "D. -4"],
            "knowledge": {
                "formulas": [
                    "\\vec{b} = k\\vec{a} \\iff \\frac{b_x}{a_x} = \\frac{b_y}{a_y} = \\frac{b_z}{a_z} = k"
                ],
                "points": ["<b>確定共線比例係數</b>：$k = \\frac{2}{-1} = -2$；$k = \\frac{-1}{1/2} = -2$。", "<b>求出未知數</b>：$\\frac{m}{2} = -2 \\implies m = -4$。"],
                "pitfall": "注意正負號：$2/(-1) = -2$，負號別丟。"
            },
            "solution": {
                "thinking": "兩空間非零向量共線，對應坐標成比例，求出比例常數即得 $m$。",
                "steps": [
                    "因為 $\\vec{a}$ 與 $\\vec{b}$ 共線，所以存在非零實數 $k$ 使得 $\\vec{b} = k\\vec{a}$，即：<br>$\\frac{2}{-1} = \\frac{m}{2} = \\frac{-1}{1/2}$。",
                    "計算比例係數：<br>$k = \\frac{2}{-1} = -2$（驗證：$\\frac{-1}{1/2} = -2$）。",
                    "由第二分量：<br>$\\frac{m}{2} = -2 \\implies m = 2 \\times (-2) = -4$。"
                ],
                "ans": "D",
                "quickTip": "觀察 $x$ 坐標從 $-1$ 變為 $2$ 乘了 $-2$，所以 $m = 2 \\times (-2) = -4$。3 秒選 D！"
            }
        },
        # 5
        {
            "year": "2026", "paper": "專題六", "qNum": "單選題 第5題",
            "topic": "四面體空間向量線性分解與中點向量", "score": "4分",
            "q": "四面體 $ABCD$ 中，$G$ 是 $CD$ 的中點，連接 $AG$，則 $\\frac{1}{2}(\\vec{BD} + \\vec{BC}) + \\vec{AB} = (\\quad)$。",
            "options": [
                "A. $\\vec{CG}$",
                "B. $\\vec{AG}$",
                "C. $\\vec{BC}$",
                "D. $\\frac{1}{2}\\vec{BC}$"
            ],
            "knowledge": {
                "formulas": [
                    "\\vec{BG} = \\frac{1}{2}(\\vec{BD} + \\vec{BC}) \\quad (\\text{中點向量公式})",
                    "\\vec{AB} + \\vec{BG} = \\vec{AG} \\quad (\\text{三角形首尾相接法則})"
                ],
                "points": ["<b>平行四邊形/中點向量法則</b>：$G$ 為 $CD$ 中點，以 $B$ 為起點的向量 $\\vec{BD} + \\vec{BC} = 2\\vec{BG}$。", "<b>首尾相接消去中繼點</b>：$\\vec{AB} + \\vec{BG} = \\vec{AG}$。"],
                "pitfall": "向量加法有交換律，$\\frac{1}{2}(\\vec{BD}+\\vec{BC}) + \\vec{AB} = \\vec{BG} + \\vec{AB} = \\vec{AB} + \\vec{BG} = \\vec{AG}$。"
            },
            "solution": {
                "thinking": "利用中點向量關係式將 $\\frac{1}{2}(\\vec{BD}+\\vec{BC})$ 化為 $\\vec{BG}$，再利用向量加法首尾相接法則化簡。",
                "steps": [
                    "在 $\\triangle BCD$ 中，因為 $G$ 是 $CD$ 的中點，由中點向量公式：<br>$\\vec{BG} = \\frac{1}{2}(\\vec{BD} + \\vec{BC})$。",
                    "代入原式：<br>$\\frac{1}{2}(\\vec{BD} + \\vec{BC}) + \\vec{AB} = \\vec{BG} + \\vec{AB}$。",
                    "由向量加法交換律與首尾相接三角形法則：<br>$\\vec{BG} + \\vec{AB} = \\vec{AB} + \\vec{BG} = \\vec{AG}$。"
                ],
                "ans": "B",
                "quickTip": "中點向量即為 $\\vec{BG}$，與 $\\vec{AB}$ 相加就是 $\\vec{AB} + \\vec{BG} = \\vec{AG}$！選 B！"
            }
        },
        # 6
        {
            "year": "2026", "paper": "專題六", "qNum": "單選題 第6題",
            "topic": "空間向量鈍角夾角條件與排除反向共線", "score": "4分",
            "q": "已知 $\\vec{a} = (2, -1, 3)$，$\\vec{b} = (-4, 2, t)$ 的夾角為鈍角，則實數 $t$ 的取值範圍為 $(\\quad)$。",
            "options": [
                "A. $(-\\infty, -6)$",
                "B. $(-\\infty, -6) \\cup \\left(-6, \\frac{10}{3}\\right)$",
                "C. $\\left(\\frac{10}{3}, +\\infty\\right)$",
                "D. $\\left(-\\infty, \\frac{10}{3}\\right)$"
            ],
            "knowledge": {
                "formulas": [
                    "\\vec{a} \\cdot \\vec{b} < 0 \\iff \\cos\\theta < 0",
                    "\\theta = 180^\\circ (\\text{平角}) \\implies \\vec{b} = k\\vec{a} \\quad (k < 0)"
                ],
                "points": ["<b>鈍角核心條件</b>：$\\cos\\theta < 0 \\iff \\vec{a} \\cdot \\vec{b} < 0$。", "<b>致命陷阱：排除反向共線</b>：若兩向量反向共線，夾角為 $180^\\circ$（平角），不是鈍角！必須排除 $\\vec{b} = k\\vec{a}$ ($k < 0$) 的情況。"],
                "pitfall": "極高頻錯題！90% 的學生只算 $\\vec{a} \\cdot \\vec{b} < 0$ 得 $t < 10/3$ 錯選 D，忘記扣除反向共線點 $t = -6$！"
            },
            "solution": {
                "thinking": "鈍角等價於數量積小於 0 且兩向量不能反向共線（排除夾角為 $\\pi$ 的情形）。",
                "steps": [
                    "第一步，數量積小於 0：<br>$\\vec{a} \\cdot \\vec{b} = 2(-4) + (-1)(2) + 3t = -8 - 2 + 3t = 3t - 10$。<br>夾角為鈍角時必有 $\\vec{a} \\cdot \\vec{b} < 0$：<br>$3t - 10 < 0 \\implies t < \\frac{10}{3}$。",
                    "第二步，排除反向共線（夾角為 $180^\\circ$）：<br>設 $\\vec{b} = k\\vec{a}$（其中 $k < 0$）：<br>$\\frac{-4}{2} = \\frac{2}{-1} = \\frac{t}{3} = k \\implies k = -2$。<br>此時 $\\frac{t}{3} = -2 \\implies t = -6$。<br>當 $t = -6$ 時，$\\vec{b} = -2\\vec{a}$，兩向量方向完全相反，夾角為 $180^\\circ$（平角），並非鈍角！故必須排除 $t = -6$。",
                    "綜合以上兩步：<br>$t < \\frac{10}{3}$ 且 $t \\ne -6$，即 $t \\in (-\\infty, -6) \\cup \\left(-6, \\frac{10}{3}\\right)$。"
                ],
                "ans": "B",
                "quickTip": "聯考經典陷阱題！數量積負得 $t < 10/3$；反向共線比值 $-4/2 = -2 \\implies t = -6$ 必須挖掉！直接秒選 B！"
            }
        }
    ]
    return slides
