# -*- coding: utf-8 -*-
"""
專題二：應用空間向量解決立體幾何問題 (21 題)
包括 10 道單選題 + 11 道解答題（含課本原圖配圖）
"""

CHAPTER_DATA = {
    "ch": "專題二 應用空間向量解決立體幾何問題",
    "year": "2026",
    "paper": "空間向量",
    "title": "專題二 應用空間向量解決立體幾何問題",
    "color": "#0ea5e9",
    "sections": [
        "單選題 1~10 題 (異面直線夾角、線面角、點面距、側棱傾角)",
        "解答題 11~21 題 (四棱錐、直三棱柱、多面體線面平行垂直、二面角與幾何證明)"
    ],
    "slides": [
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第1題",
            "topic": "長方體中異面直線所成角的餘弦值",
            "score": "4分",
            "q": "長方體 $ABCD-A'B'C'D'$ 中，$AA' = AB = 4$，$AD = 1$，$E, F, G$ 分別是 $DC, AB, CC'$ 的中點，則異面直線 $A'E$ 與 $GF$ 所成角的餘弦值為 $(\\quad)$。",
            "options": [
                "A. $-\\frac{\\sqrt{15}}{15}$",
                "B. $-\\frac{\\sqrt{21}}{21}$",
                "C. $\\frac{\\sqrt{15}}{15}$",
                "D. $\\frac{\\sqrt{21}}{21}$"
            ],
            "knowledge": {
                "formulas": [
                    "\\cos\\theta = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}||\\vec{v}|} \\in [0, 1]"
                ],
                "points": [
                    "<b>異面直線所成角</b>範圍為 $\\left[0, \\frac{\\pi}{2}\\right]$，其餘弦值恆非負！",
                    "建立空間直角坐標系，直接寫出點坐標與方向向量。"
                ],
                "pitfall": "異面直線的夾角不能為鈍角，故排除負值選項 A, B！"
            },
            "solution": {
                "thinking": "以 $D$ 為坐標原點建立長方體空間直角坐標系，求出向量 $\\vec{A'E}$ 與 $\\vec{GF}$，計算夾角餘弦值。",
                "steps": [
                    "以 $D$ 為原點，$DA, DC, DD'$ 分別為 $x, y, z$ 軸建立坐標系：<br>$D(0, 0, 0), A(1, 0, 0), B(1, 4, 0), C(0, 4, 0), A'(1, 0, 4)$。",
                    "中點坐標：$E(0, 2, 0), F(1, 2, 0), G(0, 4, 2)$。",
                    "向量坐標：<br>$\\vec{A'E} = (0-1, 2-0, 0-4) = (-1, 2, -4)$，模長 $|\\vec{A'E}| = \\sqrt{1 + 4 + 16} = \\sqrt{21}$。<br>$\\vec{GF} = (1-0, 2-4, 0-2) = (1, -2, -2)$，模長 $|\\vec{GF}| = \\sqrt{1 + 4 + 4} = 3$。",
                    "計算數量積：$$\\vec{A'E} \\cdot \\vec{GF} = (-1)(1) + 2(-2) + (-4)(-2) = -1 - 4 + 8 = 3$$",
                    "異面直線夾角餘弦值：$$\\cos\\theta = \\frac{|3|}{3\\sqrt{21}} = \\frac{1}{\\sqrt{21}} = \\frac{\\sqrt{21}}{21}$$"
                ],
                "ans": "D",
                "quickTip": "異面直線角 $\\cos\\theta \\ge 0$ 先排除 A, B！向量點乘為 3，分母為 $3\\sqrt{21}$，約分得 $\\frac{\\sqrt{21}}{21}$，秒選 D！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第2題",
            "topic": "正方體中異面直線夾角餘弦值",
            "score": "4分",
            "q": "正方體 $ABCD-A'B'C'D'$ 的棱長為 2，$E, F, G$ 分別是 $AA', AB, CC'$ 的中點，則直線 $ED$ 與 $FG$ 所成角的餘弦值為 $(\\quad)$。",
            "options": [
                "A. $\\frac{\\sqrt{3}}{3}$",
                "B. $\\frac{\\sqrt{30}}{10}$",
                "C. $\\frac{\\sqrt{3}}{2}$",
                "D. $\\frac{2}{5}$"
            ],
            "knowledge": {
                "formulas": ["\\cos\\theta = \\frac{|\\vec{ED} \\cdot \\vec{FG}|}{|\\vec{ED}||\\vec{FG}|}"]
            },
            "solution": {
                "thinking": "以正方體頂點建立坐標系，寫出各點坐標後直接計算兩向量夾角餘弦值。",
                "steps": [
                    "設 $D(0, 0, 0)$ 為原點，$DA, DC, DD'$ 為坐標軸：<br>$D(0, 0, 0), A(2, 0, 0), B(2, 2, 0), C(0, 2, 0)$。",
                    "各中點坐標：$E(2, 0, 1), F(2, 1, 0), G(0, 2, 1)$。",
                    "求向量：<br>$\\vec{ED} = (0-2, 0-0, 0-1) = (-2, 0, -1)$，$|\\vec{ED}| = \\sqrt{4 + 0 + 1} = \\sqrt{5}$。<br>$\\vec{FG} = (0-2, 2-1, 1-0) = (-2, 1, 1)$，$|\\vec{FG}| = \\sqrt{4 + 1 + 1} = \\sqrt{6}$。",
                    "計算數量積：$\\vec{ED} \\cdot \\vec{FG} = (-2)(-2) + 0(1) + (-1)(1) = 4 - 1 = 3$。",
                    "夾角餘弦值：$$\\cos\\theta = \\frac{|3|}{\\sqrt{5}\\sqrt{6}} = \\frac{3}{\\sqrt{30}} = \\frac{\\sqrt{30}}{10}$$"
                ],
                "ans": "B",
                "quickTip": "數量積 $4 - 1 = 3$，模長 $\\sqrt{5} \\times \\sqrt{6} = \\sqrt{30}$，餘弦值 $3/\\sqrt{30} = \\sqrt{30}/10$，秒選 B！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第3題",
            "topic": "斜三棱柱中異面直線所成角的餘弦值",
            "score": "4分",
            "q": "在三棱柱 $ABC-A'B'C'$ 中，側棱與底面邊長都相等，$A'$ 在底面 $ABC$ 上的射影為 $BC$ 的中點，則異面直線 $AB$ 與 $CC'$ 所成角的餘弦值為 $(\\quad)$。",
            "options": [
                "A. $\\frac{\\sqrt{3}}{4}$",
                "B. $\\frac{\\sqrt{5}}{4}$",
                "C. $\\frac{\\sqrt{7}}{4}$",
                "D. $\\frac{3}{4}$"
            ],
            "knowledge": {
                "formulas": [
                    "\\vec{CC'} = \\vec{AA'}",
                    "\\vec{AB} \\cdot \\vec{AA'} = \\vec{AB} \\cdot (\\vec{AD} + \\vec{DA'})"
                ],
                "points": [
                    "由於 $\\vec{CC'} = \\vec{AA'}$，異面直線 $AB$ 與 $CC'$ 所成角即為直線 $AB$ 與 $AA'$ 所成角。"
                ]
            },
            "solution": {
                "thinking": "利用平行向量平移 $\\vec{CC'} = \\vec{AA'}$，將異面直線角轉化為同一頂點出發的向量夾角，利用向量數量積求解。",
                "steps": [
                    "設三棱柱所有棱長均為 $a$。設 $BC$ 的中點為 $D$，由已知 $A'D \\perp$ 平面 $ABC$。",
                    "因為底面 $\\triangle ABC$ 是邊長為 $a$ 的正三角形，所以 $AD \\perp BC$，$AD = \\frac{\\sqrt{3}}{2}a$，$\\angle DAB = 30^\\circ$。",
                    "因為 $\\vec{CC'} = \\vec{AA'}$，求異面直線 $AB$ 與 $CC'$ 所成角等價於求 $\\vec{AB}$ 與 $\\vec{AA'}$ 的夾角。",
                    "將 $\\vec{AA'}$ 分解為：$\\vec{AA'} = \\vec{AD} + \\vec{DA'}$，其中 $\\vec{DA'} \\perp$ 平面 $ABC$。",
                    "計算數量積：$$\\vec{AB} \\cdot \\vec{AA'} = \\vec{AB} \\cdot (\\vec{AD} + \\vec{DA'}) = \\vec{AB} \\cdot \\vec{AD} + 0 = |\\vec{AB}||\\vec{AD}|\\cos 30^\\circ = a \\cdot \\left(\\frac{\\sqrt{3}}{2}a\\right) \\cdot \\frac{\\sqrt{3}}{2} = \\frac{3}{4}a^2$$",
                    "夾角餘弦值：$$\\cos\\theta = \\frac{\\vec{AB} \\cdot \\vec{AA'}}{|\\vec{AB}||\\vec{AA'}|} = \\frac{\\frac{3}{4}a^2}{a \\cdot a} = \\frac{3}{4}$$"
                ],
                "ans": "D",
                "quickTip": "射影定理解向量點乘：$\\vec{AB}\\cdot\\vec{AA'} = \\vec{AB}\\cdot\\vec{AD} = a \\cdot (\\frac{\\sqrt{3}}{2}a) \\cdot \\frac{\\sqrt{3}}{2} = \\frac{3}{4}a^2$，比值即為 $3/4$！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第4題",
            "topic": "正四棱柱中異面直線夾角",
            "score": "4分",
            "q": "已知正四棱柱 $ABCD-A'B'C'D'$ 中，$AA' = 2AB$，$E$ 為 $AA'$ 中點，則異面直線 $BE$ 與 $CD'$ 所成角的餘弦值為 $(\\quad)$。",
            "options": [
                "A. $\\frac{\\sqrt{10}}{10}$",
                "B. $\\frac{1}{5}$",
                "C. $\\frac{3\\sqrt{10}}{10}$",
                "D. $\\frac{3}{5}$"
            ],
            "knowledge": {
                "formulas": ["\\cos\\theta = \\frac{|\\vec{BE} \\cdot \\vec{CD'}|}{|\\vec{BE}||\\vec{CD'}|}"]
            },
            "solution": {
                "thinking": "設底面邊長為 1，高為 2，建系求出各點坐標及對應向量，利用坐標點乘求餘弦值。",
                "steps": [
                    "設 $AB = 1$，則 $AA' = 2$。以 $D$ 為原點建立空間直角坐標系：<br>$D(0, 0, 0), A(1, 0, 0), B(1, 1, 0), C(0, 1, 0), D'(0, 0, 2)$。",
                    "因為 $E$ 為 $AA'$ 中點，所以 $E(1, 0, 1)$。",
                    "求向量：<br>$\\vec{BE} = (1-1, 0-1, 1-0) = (0, -1, 1)$，$|\\vec{BE}| = \\sqrt{0 + 1 + 1} = \\sqrt{2}$。<br>$\\vec{CD'} = (0-0, 0-1, 2-0) = (0, -1, 2)$，$|\\vec{CD'}| = \\sqrt{0 + 1 + 4} = \\sqrt{5}$。",
                    "數量積：$\\vec{BE} \\cdot \\vec{CD'} = 0(0) + (-1)(-1) + 1(2) = 1 + 2 = 3$。",
                    "夾角餘弦值：$$\\cos\\theta = \\frac{3}{\\sqrt{2}\\sqrt{5}} = \\frac{3}{\\sqrt{10}} = \\frac{3\\sqrt{10}}{10}$$"
                ],
                "ans": "C",
                "quickTip": "坐標差：$\\vec{BE}=(0,-1,1)$，$\\vec{CD'}=(0,-1,2)$，點積 3，模長積 $\\sqrt{10}$，餘弦值 $\\frac{3\\sqrt{10}}{10}$，秒選 C！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第5題",
            "topic": "直三棱柱中異面直線夾角",
            "score": "4分",
            "q": "在直三棱柱 $ABC-A'B'C'$ 中，$CA = CB = CC'$，$AC \\perp BC$，$E, F$ 分別是 $A_1C_1, B_1C_1$ 的中點，則直線 $AE$ 與 $CF$ 所成角的餘弦值等於 $(\\quad)$。",
            "options": [
                "A. $\\frac{4}{5}$",
                "B. $\\frac{12}{13}$",
                "C. $\\frac{3}{5}$",
                "D. $\\frac{5}{13}$"
            ],
            "knowledge": {
                "formulas": ["\\cos\\theta = \\frac{|\\vec{AE} \\cdot \\vec{CF}|}{|\\vec{AE}||\\vec{CF}|}"]
            },
            "solution": {
                "thinking": "以 $C$ 為原點，$CA, CB, CC'$ 為坐標軸建立空間直角坐標系計算。",
                "steps": [
                    "設 $CA = CB = CC' = 2$。以 $C$ 為原點，$CA$ 為 $x$ 軸，$CB$ 為 $y$ 軸，$CC'$ 為 $z$ 軸：<br>$C(0, 0, 0), A(2, 0, 0), B(0, 2, 0), C'(0, 0, 2)$。",
                    "中點坐標：$E(1, 0, 2), F(0, 1, 2)$。",
                    "求向量：<br>$\\vec{AE} = (1-2, 0-0, 2-0) = (-1, 0, 2)$，$|\\vec{AE}| = \\sqrt{1 + 0 + 4} = \\sqrt{5}$。<br>$\\vec{CF} = (0-0, 1-0, 2-0) = (0, 1, 2)$，$|\\vec{CF}| = \\sqrt{0 + 1 + 4} = \\sqrt{5}$。",
                    "數量積：$\\vec{AE} \\cdot \\vec{CF} = (-1)(0) + 0(1) + 2(2) = 4$。",
                    "餘弦值：$$\\cos\\theta = \\frac{4}{\\sqrt{5}\\sqrt{5}} = \\frac{4}{5}$$"
                ],
                "ans": "A",
                "quickTip": "設棱長 2：$\\vec{AE}=(-1,0,2), \\vec{CF}=(0,1,2)$，點積 4，模長均為 $\\sqrt{5}$，餘弦值 $4/5$！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第6題",
            "topic": "正方體中直線與平面所成角的正弦值",
            "score": "4分",
            "q": "正方體 $ABCD-A'B'C'D'$ 中，直線 $BD'$ 與平面 $A'BC'$ 的夾角正弦值為 $(\\quad)$。",
            "options": [
                "A. $\\frac{\\sqrt{3}}{3}$",
                "B. $\\frac{1}{2}$",
                "C. $\\frac{2\\sqrt{2}}{3}$",
                "D. $\\frac{1}{3}$"
            ],
            "knowledge": {
                "formulas": [
                    "\\sin\\theta = \\frac{|\\vec{l} \\cdot \\vec{n}|}{|\\vec{l}||\\vec{n}|}"
                ],
                "points": ["直線與平面夾角正弦值等於直線方向向量與平面法向量夾角的餘弦值絕對值。"]
            },
            "solution": {
                "thinking": "建立坐標系，求出平面 $A'BC'$ 的法向量和體對角線 $\\vec{BD'}$，代入線面角正弦值公式。",
                "steps": [
                    "設正方體棱長為 1，$D$ 為坐標原點：$D(0, 0, 0), B(1, 1, 0), D'(0, 0, 1)$，故 $\\vec{BD'} = (-1, -1, 1)$。",
                    "頂點坐標：$A'(1, 0, 1), C'(0, 1, 1)$。向量 $\\vec{BA'} = (0, -1, 1)$，$\\vec{BC'} = (-1, 0, 1)$。",
                    "求平面 $A'BC'$ 的法向量 $\\vec{n}$：$$\\vec{n} = \\vec{BA'} \\times \\vec{BC'} = (-1, -1, -1) \\sim (1, 1, 1)$$",
                    "計算線面角正弦值：$$\\sin\\theta = \\frac{|\\vec{BD'} \\cdot \\vec{n}|}{|\\vec{BD'}||\\vec{n}|} = \\frac{|(-1)(1) + (-1)(1) + 1(1)|}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{|-1|}{3} = \\frac{1}{3}$$"
                ],
                "ans": "D",
                "quickTip": "法向量 $(1, 1, 1)$ 與方向向量 $(-1, -1, 1)$ 點積絕對值為 1，兩向量模長皆為 $\\sqrt{3}$，正弦值 $1/3$！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第7題",
            "topic": "直三棱柱中直線與側面所成角",
            "score": "4分",
            "q": "在三棱柱 $ABC-A'B'C'$ 中，各棱長相等，側棱垂直於底面，點 $D$ 是側面 $BB'C'C$ 的中心，則 $AD$ 與平面 $BB'C'C$ 所成角的大小是 $(\\quad)$。",
            "options": ["A. $30^\\circ$", "B. $45^\\circ$", "C. $60^\\circ$", "D. $90^\\circ$"],
            "knowledge": {
                "formulas": [
                    "\\tan\\theta = \\frac{\\text{點 } A \\text{ 到側面的距離}}{\\text{射影長度}}"
                ],
                "points": ["取底面邊 $BC$ 的中點 $M$，$AM \\perp$ 側面 $BB'C'C$，$M$ 即為 $A$ 的射影。"]
            },
            "solution": {
                "thinking": "利用幾何投影法，找出點 $A$ 在側面 $BB'C'C$ 上的射影點，構建直角三角形求角。",
                "steps": [
                    "設棱長為 $a$。取底面正三角形 $ABC$ 的邊 $BC$ 中點為 $M$。",
                    "因為底面是正三角形，所以 $AM \\perp BC$；又側棱垂直底面，所以 $AM \\perp BB'$，因此 $AM \\perp$ 平面 $BB'C'C$。",
                    "故 $M$ 是頂點 $A$ 在平面 $BB'C'C$ 上的正射影，$\\angle ADM$ 即為直線 $AD$ 與平面 $BB'C'C$ 所成的角。",
                    "計算長度：$AM = \\frac{\\sqrt{3}}{2}a$。",
                    "在正方形 $BB'C'C$ 中，$D$ 為中心，$M$ 為 $BC$ 中點，故 $DM = \\frac{1}{2}a$ 且 $AM \\perp DM$。",
                    "在 Rt$\\triangle AMD$ 中：$$\\tan\\angle ADM = \\frac{AM}{DM} = \\frac{\\frac{\\sqrt{3}}{2}a}{\\frac{1}{2}a} = \\sqrt{3} \\implies \\angle ADM = 60^\\circ$$"
                ],
                "ans": "C",
                "quickTip": "高為 $AM = \\frac{\\sqrt{3}}{2}a$，底為 $DM = \\frac{1}{2}a$，正切比值為 $\\sqrt{3}$，角為 $60^\\circ$，秒選 C！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第8題",
            "topic": "長方體中體對角線與頂面所成角正弦值",
            "score": "4分",
            "q": "在長方體 $ABCD-A'B'C'D'$ 中，$AB = BC = 2$，$AA' = 1$，則 $AC'$ 與平面 $A'B'C'D'$ 所成角的正弦值為 $(\\quad)$。",
            "options": [
                "A. $\\frac{2\\sqrt{2}}{3}$",
                "B. $\\frac{2}{3}$",
                "C. $\\frac{\\sqrt{2}}{4}$",
                "D. $\\frac{1}{3}$"
            ],
            "knowledge": {
                "formulas": [
                    "\\sin\\theta = \\frac{AA'}{AC'} = \\frac{h}{\\sqrt{a^2 + b^2 + h^2}}"
                ]
            },
            "solution": {
                "thinking": "體對角線與頂面的夾角即為該斜線與其在頂面上射影的夾角，利用直角三角形求正弦值。",
                "steps": [
                    "點 $A$ 在平面 $A'B'C'D'$ 上的正射影為 $A'$，故 $AC'$ 與平面 $A'B'C'D'$ 所成的角為 $\\angle AC'A'$。",
                    "直角邊長：$AA' = 1$。",
                    "體對角線長度：$$AC' = \\sqrt{AB^2 + BC^2 + AA'^2} = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$$",
                    "正弦值：$$\\sin\\angle AC'A' = \\frac{AA'}{AC'} = \\frac{1}{3}$$"
                ],
                "ans": "D",
                "quickTip": "口算題：高為 1，體對角線長為 $\\sqrt{4+4+1} = 3$，正弦比值為 $1/3$！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第9題",
            "topic": "斜三棱柱中體斜線與底面所成角正弦值",
            "score": "4分",
            "q": "已知三棱柱 $ABC-A'B'C'$ 的側棱與底面邊長都相等，$A'$ 在底面 $ABC$ 內的射影為 $\\triangle ABC$ 的中心，則 $AB'$ 與底面 $ABC$ 所成角的正弦值等於 $(\\quad)$。",
            "options": [
                "A. $\\frac{1}{3}$",
                "B. $\\frac{\\sqrt{2}}{3}$",
                "C. $\\frac{\\sqrt{3}}{3}$",
                "D. $\\frac{2}{3}$"
            ],
            "knowledge": {
                "formulas": [
                    "h = \\sqrt{a^2 - R_{\\triangle}^2} = \\frac{\\sqrt{6}}{3}a",
                    "|\\vec{AB'}| = |\\vec{AB} + \\vec{AA'}| = \\sqrt{3}a",
                    "\\sin\\theta = \\frac{h}{|\\vec{AB'}|}"
                ]
            },
            "solution": {
                "thinking": "求出棱柱的高 $h$ 以及線段 $AB'$ 的長度，利用正弦比值公式求解。",
                "steps": [
                    "設邊長為 $a$。設 $A'$ 在底面的射影為 $O$（正三角形中心），則 $AO = \\frac{\\sqrt{3}}{3}a$。",
                    "高 $h = A'O = \\sqrt{AA'^2 - AO^2} = \\sqrt{a^2 - \\frac{1}{3}a^2} = \\frac{\\sqrt{6}}{3}a$。",
                    "因為 $BB' // AA'$，所以 $B'$ 到底面的距離也是 $h = \\frac{\\sqrt{6}}{3}a$。",
                    "求向量 $\\vec{AB'} = \\vec{AB} + \\vec{BB'} = \\vec{AB} + \\vec{AA'}$ 的長度：$$|\\vec{AB'}|^2 = |\\vec{AB}|^2 + |\\vec{AA'}|^2 + 2\\vec{AB}\\cdot\\vec{AA'} = a^2 + a^2 + 2\\left(\\frac{1}{2}a^2\\right) = 3a^2 \\implies |\\vec{AB'}| = \\sqrt{3}a$$",
                    "正弦值：$$\\sin\\theta = \\frac{h}{|\\vec{AB'}|} = \\frac{\\frac{\\sqrt{6}}{3}a}{\\sqrt{3}a} = \\frac{\\sqrt{2}}{3}$$"
                ],
                "ans": "B",
                "quickTip": "高為 $\\frac{\\sqrt{6}}{3}a$，斜邊為 $\\sqrt{3}a$，相除得 $\\frac{\\sqrt{2}}{3}$，秒選 B！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "單選題 第10題",
            "topic": "正四棱柱面面距離與斜線傾角",
            "score": "4分",
            "q": "若正四棱柱 $ABCD-A'B'C'D'$ 的底面邊長為 1，$AB'$ 與底面 $ABCD$ 成 $60^\\circ$ 角，則 $A'C'$ 到底面 $ABCD$ 的距離為 $(\\quad)$。",
            "options": ["A. $\\frac{\\sqrt{3}}{3}$", "B. 1", "C. $\\sqrt{2}$", "D. $\\sqrt{3}$"],
            "knowledge": {
                "formulas": [
                    "h = BB' = AB \\tan 60^\\circ",
                    "d(A'C', \\text{底面}) = AA' = h"
                ]
            },
            "solution": {
                "thinking": "頂面平行於底面，頂面上任意線段到底面的距離即為四棱柱的高，由線面角解直角三角形求高。",
                "steps": [
                    "因為正四棱柱頂面 $A'B'C'D'$ 平行於底面 $ABCD$，所以線段 $A'C'$ 到底面的距離恆等於棱柱的高 $BB'$。",
                    "點 $B'$ 在底面上的正射影為 $B$，故 $AB'$ 與底面所成角為 $\\angle B'AB = 60^\\circ$。",
                    "在 Rt$\\triangle B'BA$ 中，$AB = 1$，所以高：$$BB' = AB \\cdot \\tan 60^\\circ = 1 \\cdot \\sqrt{3} = \\sqrt{3}$$",
                    "故 $A'C'$ 到底面的距離為 $\\sqrt{3}$。"
                ],
                "ans": "D",
                "quickTip": "高 $h = 1 \\times \\tan 60^\\circ = \\sqrt{3}$，秒選 D！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第11題",
            "topic": "線面平行證明與線面角正弦值求解",
            "score": "10分",
            "q": "如圖，已知 $DC \\perp$ 平面 $ABC$，$EB // DC$，$AC = BC = EB = 2DC = 2$，$\\angle ACB = 120^\\circ$，$P, Q$ 分別為 $AE, AB$ 的中點。<br>(a) 證明：$PQ // $ 平面 $ACD$；<br>(b) 求 $AD$ 與平面 $ABE$ 所成角的正弦值。",
            "image": "img/vec_q11.png",
            "knowledge": {
                "formulas": [
                    "PQ // EB // DC \\implies PQ // \\text{平面 } ACD",
                    "\\sin\\theta = \\frac{|\\vec{AD} \\cdot \\vec{n}|}{|\\vec{AD}||\\vec{n}|}"
                ]
            },
            "solution": {
                "thinking": "利用中位線定理證明線線平行進而證明線面平行；建立坐標系求出平面 $ABE$ 的法向量計算線面角。",
                "steps": [
                    "<b>(a) 證明：</b><br>在 $\\triangle ABE$ 中，$P, Q$ 分別是 $AE, AB$ 的中點，由中位線定理得 $PQ // EB$。<br>又已知 $EB // DC$，所以 $PQ // DC$。<br>因為 $DC \\subset$ 平面 $ACD$，且 $PQ \\not\\subset$ 平面 $ACD$，<br>所以 $PQ // $ 平面 $ACD$。",
                    "<b>(b) 求解：</b><br>已知 $DC = 1, EB = 2, AC = BC = 2, DC \\perp$ 平面 $ABC$。<br>取 $AB$ 中點 $Q$，連接 $CQ$。在等腰 $\\triangle ABC$ 中，$CQ \\perp AB$，$CQ = 2\\cos 60^\\circ = 1$，$AB = 2\\sqrt{3}$。<br>以 $C$ 為原點建立空間直角坐標系：$C(0,0,0), D(0,0,1)$，求得平面 $ABE$ 的法向量為 $\\vec{n} = (\\sqrt{3}, 1, \\sqrt{3})$。<br>計算向量 $\\vec{AD}$ 與 $\\vec{n}$ 的點乘與模長，可得：$$\\sin\\theta = \\frac{\\sqrt{21}}{7}$$"
                ],
                "ans": "(a) 見步驟證明；(b) \\frac{\\sqrt{21}}{7}",
                "quickTip": "中位線定理秒殺 (a)；(b) 建系求法向量點積求正弦值。"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第12題",
            "topic": "直三棱柱中異面垂直證明與二面角求解",
            "score": "10分",
            "q": "如圖，在直三棱柱 $ABC-A'B'C'$ 中，$AB = 1$，$AC = AA' = \\sqrt{3}$，$\\angle ABC = 60^\\circ$。<br>(a) 證明：$AB \\perp A'C$；<br>(b) 求二面角 $A-A'C-B$ 的大小。",
            "image": "img/vec_q12.png",
            "knowledge": {
                "formulas": [
                    "AB \\perp AC \\text{ 且 } AB \\perp AA' \\implies AB \\perp \\text{平面 } AA'C'C",
                    "\\cos\\theta = \\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1||\\vec{n}_2|}"
                ]
            },
            "solution": {
                "thinking": "利用正弦定理確定底面三角形為直角三角形，證明線面垂直得出線線垂直；建系求兩平面法向量夾角求二面角。",
                "steps": [
                    "<b>(a) 證明：</b><br>在 $\\triangle ABC$ 中，由正弦定理：$\\frac{AC}{\\sin 60^\\circ} = \\frac{\\sqrt{3}}{\\frac{\\sqrt{3}}{2}} = 2$。<br>$\\sin C = \\frac{AB}{2} = \\frac{1}{2}$。因為 $AC > AB$，所以 $\\angle C = 30^\\circ$。<br>因此 $\\angle BAC = 180^\\circ - 60^\\circ - 30^\\circ = 90^\\circ$，即 $AB \\perp AC$。<br>因為直三棱柱側棱 $AA' \\perp$ 底面 $ABC$，所以 $AA' \\perp AB$。<br>又 $AC \\cap AA' = A$，所以 $AB \\perp$ 平面 $ACC'A'$。<br>因為 $A'C \\subset$ 平面 $ACC'A'$，故 $AB \\perp A'C$。",
                    "<b>(b) 二面角大小：</b><br>以 $A$ 為原點，$AB, AC, AA'$ 分別為 $x, y, z$ 軸建立坐標系：<br>$A(0, 0, 0), B(1, 0, 0), C(0, \\sqrt{3}, 0), A'(0, 0, \\sqrt{3})$。<br>平面 $A'AC$ 即 $yOz$ 面，其法向量可取 $\\vec{n}_1 = (1, 0, 0)$。<br>平面 $A'BC$ 包含向量 $\\vec{BC} = (-1, \\sqrt{3}, 0)$ 和 $\\vec{BA'} = (-1, 0, \\sqrt{3})$，法向量為 $\\vec{n}_2 = (3, \\sqrt{3}, \\sqrt{3})$。<br>$$\\cos\\theta = \\frac{3}{1 \\cdot \\sqrt{9 + 3 + 3}} = \\frac{3}{\\sqrt{15}} = \\frac{\\sqrt{15}}{5}$$<br>或作輔助線過 $A$ 作 $A'C$ 的垂線，求得二面角大小為 $\\arcsin\\left(\\frac{\\sqrt{10}}{5}\\right)$ (即 $\\arccos\\frac{\\sqrt{15}}{5}$)。"
                ],
                "ans": "(a) 見步驟證明；(b) \\arccos\\frac{\\sqrt{15}}{5}",
                "quickTip": "由 $AB=1, AC=\\sqrt{3}, B=60^\\circ$ 必有 $A=90^\\circ$，$AB \\perp$ 側面，秒推 (a)！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第13題",
            "topic": "四棱錐中中點證明與二面角計算",
            "score": "10分",
            "q": "如圖，四棱錐 $S-ABCD$ 中，底面 $ABCD$ 為矩形，$SD \\perp$ 底面 $ABCD$，$AD = \\sqrt{2}$，$DC = SD = 2$，點 $M$ 在側棱 $SC$ 上，$\\angle ABM = 60^\\circ$。<br>(a) 證明：$M$ 是側棱 $SC$ 的中點；<br>(b) 求二面角 $S-AM-B$ 的大小。",
            "image": "img/vec_q13.png",
            "knowledge": {
                "formulas": ["SD \\perp \\text{底面} \\implies \\text{以 } D \\text{ 為原點建立坐標系}"]
            },
            "solution": {
                "thinking": "以 $D$ 為原點建系，設 $M$ 的坐標由參數表示，根據 $\\angle ABM = 60^\\circ$ 解出參數得中點；再求兩半平面法向量夾角得二面角。",
                "steps": [
                    "<b>(a) 證明：</b><br>以 $D$ 為原點，$DA, DC, DS$ 分別為 $x, y, z$ 軸建立坐標系：<br>$D(0, 0, 0), A(\\sqrt{2}, 0, 0), B(\\sqrt{2}, 2, 0), C(0, 2, 0), S(0, 0, 2)$。<br>設 $\\vec{SM} = \\lambda \\vec{SC}$ ($0 \\le \\lambda \\le 1$)，$\\vec{SC} = (0, 2, -2)$，故 $M(0, 2\\lambda, 2 - 2\\lambda)$。<br>$\\vec{BA} = (0, -2, 0)$，$\\vec{BM} = (-\\sqrt{2}, 2\\lambda - 2, 2 - 2\\lambda)$。<br>由 $\\cos 60^\\circ = \\frac{\\vec{BA} \\cdot \\vec{BM}}{|\\vec{BA}||\\vec{BM}|} = \\frac{1}{2}$，解得 $\\lambda = \\frac{1}{2}$，即 $M$ 是 $SC$ 的中點。",
                    "<b>(b) 二面角大小：</b><br>代入 $M(0, 1, 1)$。求平面 $SAM$ 與平面 $ABM$ 的法向量：<br>$\\vec{n}_1 = (\\sqrt{2}, 2, 2)$，$\\vec{n}_2 = (\\sqrt{2}, 0, 1)$。<br>計算夾角餘弦值：$$\\cos\\theta = \\frac{2 + 0 + 2}{\\sqrt{10}\\sqrt{3}} = \\frac{4}{\\sqrt{30}} = \\frac{2\\sqrt{30}}{15}$$<br>由圖形二面角為鈍角或鈍角補角，得二面角大小為 $\\pi - \\arccos\\frac{2\\sqrt{30}}{15}$ (或 $120^\\circ$ 視具體投射角度)。"
                ],
                "ans": "(a) 見步驟證明；(b) \\arccos\\left(-\\frac{2\\sqrt{30}}{15}\\right)",
                "quickTip": "參數法設 $M$ 坐標，利用點積解出 $\\lambda = 1/2$ 證明中點。"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第14題",
            "topic": "四棱錐中線面平行、線面垂直與線面角正切值",
            "score": "10分",
            "q": "如圖，在四棱錐 $P-ABCD$ 中，$PD \\perp$ 平面 $ABCD$，$AD \\perp CD$，$DB$ 平分 $\\angle ADC$，$E$ 為 $PC$ 的中點，$AD = CD = 1$，$DB = 2\\sqrt{2}$。<br>(a) 證明：$PA // $ 平面 $BDE$；<br>(b) 證明：$AC \\perp$ 平面 $PBD$；<br>(c) 求直線 $BC$ 與平面 $PBD$ 所成角的正切值。",
            "image": "img/vec_q14.png",
            "knowledge": {
                "formulas": [
                    "\\text{對角線互相垂直平分} \\implies AC \\perp BD",
                    "\\tan\\theta = \\frac{|\\vec{BC} \\cdot \\vec{n}|}{\\sqrt{|\\vec{BC}|^2|\\vec{n}|^2 - (\\vec{BC} \\cdot \\vec{n})^2}}"
                ]
            },
            "solution": {
                "thinking": "連接 $AC$ 交 $BD$ 於 $O$ 利用中位線證明線面平行；由菱形對角線與高垂直證明線面垂直；求出垂線長度解正切值。",
                "steps": [
                    "<b>(a) 證明：</b><br>設 $AC \\cap BD = O$。因為 $AD = CD = 1, AD \\perp CD$，且 $DB$ 平分 $\\angle ADC$，所以 $DB \\perp AC$ 且 $O$ 為 $AC$ 的中點。<br>在 $\\triangle PAC$ 中，$O, E$ 分別是 $AC, PC$ 的中點，所以 $OE // PA$。<br>又 $OE \\subset$ 平面 $BDE$ 且 $PA \\not\\subset$ 平面 $BDE$，故 $PA // $ 平面 $BDE$。",
                    "<b>(b) 證明：</b><br>因為 $PD \\perp$ 平面 $ABCD$，且 $AC \\subset$ 底面，所以 $PD \\perp AC$。<br>又由 (a) 知 $AC \\perp BD$，且 $PD \\cap BD = D$，<br>因此 $AC \\perp$ 平面 $PBD$。",
                    "<b>(c) 求解：</b><br>因為 $AC \\perp$ 平面 $PBD$，所以 $C$ 在平面 $PBD$ 上的射影為點 $O$。<br>因此 $\\angle CBO$ 即為直線 $BC$ 與平面 $PBD$ 所成的角。<br>在 Rt$\\triangle COD$ 中，$OC = \\frac{\\sqrt{2}}{2}$，$OD = \\frac{\\sqrt{2}}{2}$。<br>由 $DB = 2\\sqrt{2}$ 得 $OB = DB - OD = \\frac{3\\sqrt{2}}{2}$。<br>在 Rt$\\triangle COB$ 中：$$\\tan\\angle CBO = \\frac{OC}{OB} = \\frac{\\frac{\\sqrt{2}}{2}}{\\frac{3\\sqrt{2}}{2}} = \\frac{1}{3}$$"
                ],
                "ans": "(a) 見步驟證明；(b) 見步驟證明；(c) \\frac{1}{3}",
                "quickTip": "由 $AC \\perp$ 平面 $PBD$，射影點就是 $O$！正切值直接等於 $OC / OB = \\frac{\\sqrt{2}/2}{3\\sqrt{2}/2} = 1/3$，口算秒殺！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第15題",
            "topic": "四棱錐二面角與公共部分體積計算",
            "score": "10分",
            "q": "如圖，四棱錐 $F-ABCD$ 的底面 $ABCD$ 是菱形，其對角線 $AC = 2$，$BD = \\sqrt{2}$，$AE, CF$ 都與平面 $ABCD$ 垂直，$AE = 1$，$CF = 2$。<br>(a) 求二面角 $B-AF-D$ 的大小；<br>(b) 求四棱錐 $E-ABCD$ 與四棱錐 $F-ABCD$ 公共部分的體積。",
            "image": "img/vec_q15.png",
            "knowledge": {
                "formulas": [
                    "V = \\frac{1}{3} S_{\\text{底}} h",
                    "\\cos\\theta = \\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1||\\vec{n}_2|}"
                ]
            },
            "solution": {
                "thinking": "以菱形對角線交點為坐標原點建系，求出平面 $ABF$ 與 $ADF$ 的法向量求二面角；利用相似幾何體分割求公共體積。",
                "steps": [
                    "<b>(a) 二面角大小：</b><br>設 $AC \\cap BD = O$ 為坐標原點，$OA$ 為 $x$ 軸，$OB$ 為 $y$ 軸，垂直底面向上為 $z$ 軸：<br>$A(1, 0, 0), C(-1, 0, 0), B(0, \\frac{\\sqrt{2}}{2}, 0), D(0, -\\frac{\\sqrt{2}}{2}, 0), F(-1, 0, 2)$。<br>求得平面 $ABF$ 與平面 $ADF$ 的法向量夾角，計算得二面角 $B-AF-D$ 的大小為 $60^\\circ$ (即 $\\frac{\\pi}{3}$)。",
                    "<b>(b) 公共部分體積：</b><br>四棱錐 $E-ABCD$ 與 $F-ABCD$ 底面均為菱形 $ABCD$，底面積 $S = \\frac{1}{2} \\times 2 \\times \\sqrt{2} = \\sqrt{2}$。<br>兩棱錐交線構成公共稜錐，公共體積為兩個同底四棱錐的交集，求得交集體積為：$$V = \\frac{4\\sqrt{2}}{9}$$"
                ],
                "ans": "(a) 60^\\circ；(b) \\frac{4\\sqrt{2}}{9}",
                "quickTip": "菱形對角線垂直，建系極為對稱；求法向量夾角得 $60^\\circ$。"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第16題",
            "topic": "面面垂直性質、線面平行與線面垂直點到直線距離",
            "score": "10分",
            "q": "如圖，平面 $PAC \\perp$ 平面 $ABC$，$\\triangle ABC$ 是以 $AC$ 為斜邊的等腰直角三角形，$E, F, O$ 分別為 $PA, PB, AC$ 的中點，$AC = 16$，$PA = PC = 10$。<br>(a) 設 $G$ 是 $OC$ 的中點，證明：$FG // $ 平面 $BOE$；<br>(b) 證明：在 $\\triangle ABO$ 內存在一點 $M$，使 $FM \\perp$ 平面 $BOE$，並求點 $M$ 到 $OA, OB$ 的距離。",
            "image": "img/vec_q16.png",
            "knowledge": {
                "formulas": [
                    "PO \\perp AC \\text{ 且面 } PAC \\perp \\text{面 } ABC \\implies PO \\perp \\text{底面}"
                ]
            },
            "solution": {
                "thinking": "以 $O$ 為原點建立空間直角坐標系，由共面向量證明線面平行；求平面 $BOE$ 的法向量求 $M$ 點坐標。",
                "steps": [
                    "<b>(a) 證明：</b><br>以 $O$ 為原點，$OA$ 為 $x$ 軸，$OB$ 為 $y$ 軸，$OP$ 為 $z$ 軸建系：<br>$O(0, 0, 0), A(8, 0, 0), C(-8, 0, 0), B(0, 8, 0)$。<br>由 $PA = 10, OA = 8$ 得 $OP = \\sqrt{100 - 64} = 6$，故 $P(0, 0, 6)$。<br>中點坐標：$E(4, 0, 3), F(0, 4, 3), G(-4, 0, 0)$。<br>$\\vec{FG} = (-4, -4, -3)$。可驗證 $\\vec{FG}$ 與平面 $BOE$ 的法向量垂直，且 $FG \\not\\subset$ 平面 $BOE$，故 $FG // $ 平面 $BOE$。",
                    "<b>(b) 求解：</b><br>平面 $BOE$ 的法向量為 $\\vec{n} = (3, 0, -4)$。<br>設 $M(x_0, y_0, 0) \\in \\triangle ABO$，由 $\\vec{FM} // \\vec{n}$，得 $M$ 到 $OA$ 的距離為 $\\frac{9}{4}$，到 $OB$ 的距離為 $\\frac{15}{4}$。"
                ],
                "ans": "(a) 見步驟證明；(b) 距離分別為 \\frac{9}{4}, \\frac{15}{4}",
                "quickTip": "等腰直角 $AC=16 \\implies OA=OB=8$，$OP=6$（經典 6-8-10 勾股數），建系運算極順！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第17題",
            "topic": "五面體中異面直線夾角、面面垂直證明與二面角餘弦值",
            "score": "10分",
            "q": "如圖，在五面體 $ABCDEF$ 中，$FA \\perp$ 平面 $ABCD$，$AD // BC // FE$，$AB \\perp AD$，$M$ 為 $EC$ 的中點，$AF = AB = BC = FE = \\frac{1}{2}AD$。<br>(a) 求異面直線 $BF$ 與 $DE$ 所成的角的大小；<br>(b) 證明：平面 $AMD \\perp$ 平面 $CDE$；<br>(c) 求二面角 $A-CD-E$ 的餘弦值。",
            "image": "img/vec_q17.png",
            "knowledge": {
                "formulas": [
                    "\\cos\\theta = \\frac{|\\vec{BF} \\cdot \\vec{DE}|}{|\\vec{BF}||\\vec{DE}|}",
                    "\\cos\\alpha = \\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1||\\vec{n}_2|}"
                ]
            },
            "solution": {
                "thinking": "以 $A$ 為原點建系，寫出各頂點坐標，用數量積求解異面直線夾角、法向量內積證明垂直與計算二面角。",
                "steps": [
                    "<b>(a) 異面直線夾角：</b><br>設 $AF = 1$，則 $AB = BC = FE = 1, AD = 2$。<br>以 $A$ 為原點，$AB, AD, AF$ 分別為 $x, y, z$ 軸建立坐標系：<br>$A(0, 0, 0), B(1, 0, 0), D(0, 2, 0), F(0, 0, 1), C(1, 1, 0), E(0, 1, 1)$。<br>$\\vec{BF} = (-1, 0, 1)$，$\\vec{DE} = (0, -1, 1)$。<br>$$\\cos\\theta = \\frac{|(-1)(0) + 0(-1) + 1(1)|}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$$",
                    "<b>(b) 證明平面垂直：</b><br>$M$ 是 $EC$ 中點 $\\implies M(\\frac{1}{2}, 1, \\frac{1}{2})$。<br>求平面 $AMD$ 與平面 $CDE$ 的法向量分別為 $\\vec{n}_1, \\vec{n}_2$。計算得 $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$，故平面 $AMD \\perp$ 平面 $CDE$。",
                    "<b>(c) 二面角餘弦值：</b><br>平面 $ACD$ 法向量為 $(0, 0, 1)$，求平面 $CDE$ 的法向量 $\\vec{n} = (1, 1, 1)$，代入得餘弦值為：$$\\cos\\alpha = \\frac{\\sqrt{6}}{3}$$"
                ],
                "ans": "(a) 60^\\circ；(b) 見步驟證明；(c) \\frac{\\sqrt{6}}{3}",
                "quickTip": "$\\vec{BF}=(-1,0,1), \\vec{DE}=(0,-1,1)$，點積 1，模長積 2，餘弦 1/2，直接秒出 $60^\\circ$！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第18題",
            "topic": "垂直正方形中線面角正弦值求解",
            "score": "10分",
            "q": "如圖，已知兩個正方形 $ABCD$ 和 $DCEF$ 不在同一平面內，$M, N$ 分別為 $AB, DF$ 的中點，若平面 $ABCD \\perp$ 平面 $DCEF$，求直線 $MN$ 與平面 $DCEF$ 所成角的正弦值。",
            "image": "img/vec_q18.png",
            "knowledge": {
                "formulas": [
                    "\\sin\\theta = \\frac{|\\vec{MN} \\cdot \\vec{n}|}{|\\vec{MN}||\\vec{n}|}"
                ]
            },
            "solution": {
                "thinking": "以交線 $CD$ 為坐標軸建立空間直角坐標系，寫出各點坐標後直接代入線面角公式。",
                "steps": [
                    "設正方形邊長為 2。以 $D$ 為原點，$DA$ 為 $x$ 軸，$DC$ 為 $y$ 軸，$DE$ 為 $z$ 軸建立坐標系：<br>$D(0, 0, 0), A(2, 0, 0), B(2, 2, 0), C(0, 2, 0), E(0, 0, 2), F(0, 2, 2)$。",
                    "中點坐標：$M(2, 1, 0), N(0, 1, 1)$。",
                    "向量 $\\vec{MN} = (0-2, 1-1, 1-0) = (-2, 0, 1)$，模長 $|\\vec{MN}| = \\sqrt{4 + 0 + 1} = \\sqrt{5}$。",
                    "因為平面 $ABCD \\perp$ 平面 $DCEF$，且 $DA \\perp DC$，所以 $DA \\perp$ 平面 $DCEF$。<br>平面 $DCEF$ 的法向量可直接取 $\\vec{n} = (1, 0, 0)$。",
                    "計算線面角正弦值：$$\\sin\\theta = \\frac{|\\vec{MN} \\cdot \\vec{n}|}{|\\vec{MN}||\\vec{n}|} = \\frac{|-2|}{\\sqrt{5} \\cdot 1} = \\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}$$"
                ],
                "ans": "\\frac{2\\sqrt{5}}{5}",
                "quickTip": "垂足直接在平面 $DCEF$ 上，$\\vec{MN}$ 的 $x$ 分量為 2，長度為 $\\sqrt{5}$，正弦值直接等於 $2/\\sqrt{5} = \\frac{2\\sqrt{5}}{5}$！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第19題",
            "topic": "三棱錐線面垂直、線面角與直二面角存在性探究",
            "score": "10分",
            "q": "如圖，在三棱錐 $P-ABC$ 中，$PA \\perp$ 底面 $ABC$，$PA = AB$，$\\angle ABC = 60^\\circ$，$\\angle BCA = 90^\\circ$，點 $D, E$ 分別在棱 $PB, PC$ 上，且 $DE // BC$。<br>(a) 求證：$BC \\perp$ 平面 $PAC$；<br>(b) 當 $D$ 為 $PB$ 的中點時，求 $AD$ 與平面 $PAC$ 所成的角的大小；<br>(c) 是否存在點 $E$ 使得二面角 $A-DE-P$ 為直二面角？並說明理由。",
            "image": "img/vec_q19.png",
            "knowledge": {
                "formulas": [
                    "BC \\perp AC \\text{ 且 } BC \\perp PA \\implies BC \\perp \\text{平面 } PAC"
                ]
            },
            "solution": {
                "thinking": "利用線線垂直推導線面垂直；由 $BC \\perp$ 平面 $PAC$ 得出射影線計算線面角；利用二面角為直角建立方程解點 $E$ 的位置。",
                "steps": [
                    "<b>(a) 證明：</b><br>因為 $PA \\perp$ 底面 $ABC$，且 $BC \\subset$ 底面，所以 $PA \\perp BC$。<br>又已知 $\\angle BCA = 90^\\circ$，即 $BC \\perp AC$。<br>且 $PA \\cap AC = A$，所以 $BC \\perp$ 平面 $PAC$。",
                    "<b>(b) 求線面角：</b><br>設 $BC$ 中點或射影：取 $PC$ 中點 $E$。因為 $DE // BC$，且 $BC \\perp$ 平面 $PAC$，所以 $DE \\perp$ 平面 $PAC$。<br>故點 $D$ 在平面 $PAC$ 上的正射影為點 $E$，$\\angle DAE$ 即為直線 $AD$ 與平面 $PAC$ 所成的角。<br>計算得 $\\angle DAE = 30^\\circ$。",
                    "<b>(c) 存在性探究：</b><br>當且僅當點 $E$ 為棱 $PC$ 的中點時，二面角 $A-DE-P$ 為直二面角。此時平面 $ADE \\perp$ 平面 $PDE$。"
                ],
                "ans": "(a) 見步驟證明；(b) 30^\\circ；(c) 存在，當點 E 為 PC 的中點時",
                "quickTip": "由 $DE \\perp$ 平面 $PAC$，射影點就是 $E$！直角三角形直接解出 $30^\\circ$！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第20題",
            "topic": "正三棱柱面面垂直證明與線面角正弦值求解",
            "score": "10分",
            "q": "如圖，正三棱柱 $ABC-A'B'C'$ 中，$AB = \\sqrt{2}AA'$，點 $D$ 是 $A'B'$ 的中點，點 $E$ 在 $A'C'$ 上，且 $DE \\perp AE$。<br>(a) 證明：平面 $ADE \\perp$ 平面 $ACC'A'$；<br>(b) 求直線 $AD$ 和平面 $ABC'$ 所成角的正弦值。",
            "image": "img/vec_q20.png",
            "knowledge": {
                "formulas": [
                    "DE \\perp AE \\text{ 且 } DE \\perp AA' \\implies DE \\perp \\text{平面 } ACC'A'"
                ]
            },
            "solution": {
                "thinking": "利用三棱柱性質證明 $DE$ 垂直於側面，進而證明面面垂直；建系求平面 $ABC'$ 的法向量求線面角。",
                "steps": [
                    "<b>(a) 證明：</b><br>在正三棱柱中，側棱 $AA' \\perp$ 底面 $A'B'C'$。因為 $DE \\subset$ 平面 $A'B'C'$，所以 $AA' \\perp DE$。<br>又已知 $DE \\perp AE$，且 $AA' \\cap AE = A$，<br>所以 $DE \\perp$ 平面 $ACC'A'$。<br>因為 $DE \\subset$ 平面 $ADE$，所以平面 $ADE \\perp$ 平面 $ACC'A'$。",
                    "<b>(b) 求解：</b><br>建立空間直角坐標系，計算直線 $AD$ 的方向向量與平面 $ABC'$ 的法向量點乘，求得正弦值：$$\\sin\\theta = \\frac{\\sqrt{30}}{10}$$"
                ],
                "ans": "(a) 見步驟證明；(b) \\frac{\\sqrt{30}}{10}",
                "quickTip": "由 $DE \\perp AA'$ 和 $DE \\perp AE$ 即刻秒推 $DE \\perp$ 側面，面面垂直立證！"
            }
        },
        {
            "year": "2026",
            "paper": "空間向量",
            "qNum": "解答題 第21題",
            "topic": "直三棱柱中線面垂直推導等腰與二面角求線面角",
            "score": "10分",
            "q": "如圖，直三棱柱 $ABC-A'B'C'$ 中，$AB \\perp AC$，$D, E$ 分別為 $AA', B'C$ 的中點，$DE \\perp$ 平面 $BCC'$。<br>(a) 證明：$AB = AC$；<br>(b) 若二面角 $A-BD-C$ 為 $60^\\circ$，求 $B'C$ 與平面 $BCD$ 所成角的大小。",
            "image": "img/vec_q21.png",
            "knowledge": {
                "formulas": [
                    "DE \\perp \\text{平面 } BCC' \\implies DE \\perp BC \\text{ 且 } DE \\perp BB'"
                ]
            },
            "solution": {
                "thinking": "以 $A$ 為原點建系，$DE \\perp$ 側面列坐標關係證明 $AB = AC$；利用二面角為 $60^\\circ$ 定出高與邊長比例，再求線面角。",
                "steps": [
                    "<b>(a) 證明：</b><br>以 $A$ 為原點，$AB, AC, AA'$ 分別為 $x, y, z$ 軸建立空間直角坐標系：<br>設 $AB = c, AC = b, AA' = 2h$。則 $A(0, 0, 0), B(c, 0, 0), C(0, b, 0), A'(0, 0, 2h), B'(c, 0, 2h)$。<br>中點坐標：$D(0, 0, h), E(\\frac{c}{2}, \\frac{b}{2}, h)$，向量 $\\vec{DE} = (\\frac{c}{2}, \\frac{b}{2}, 0)$。<br>因為 $DE \\perp$ 平面 $BCC'$，所以 $\\vec{DE} \\cdot \\vec{BC} = 0$。<br>$\\vec{BC} = (-c, b, 0)$，點乘得：$$\\frac{c}{2}(-c) + \\frac{b}{2}(b) = 0 \\implies -c^2 + b^2 = 0 \\implies b = c$$故 $AB = AC$。",
                    "<b>(b) 求解：</b><br>由二面角 $A-BD-C$ 為 $60^\\circ$ 求得高 $h$ 與邊長比例，進而求出平面 $BCD$ 的法向量，計算得直線 $B'C$ 與平面 $BCD$ 所成的角大小為 $30^\\circ$ (即 $\\frac{\\pi}{6}$)。"
                ],
                "ans": "(a) 見步驟證明；(b) 30^\\circ",
                "quickTip": "$\\vec{DE} = (c/2, b/2, 0) \\perp (-c, b, 0) \\implies -c^2 + b^2 = 0 \\implies b = c$，等腰立證！"
            }
        }
    ]
}
