# -*- coding: utf-8 -*-
"""
scripts/gen_ch07_solid_geom.py
專題七：立體幾何中的空間向量應用 (Book P10-14, PDF P9-12, 14 slides)
"""

import json

slides = [
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "單選題 第1題",
        "topic": "長方體中異面直線夾角計算",
        "score": "4分",
        "q": "長方體 $ABCD - A'B'C'D'$ 中，$AA' = AB = 4$，$AD = 1$，$E, F, G$ 分別是 $DC, AB, CC'$ 的中點，則異面直線 $A'E$ 與 $GF$ 所成角的餘弦值為 $(\\quad)$。",
        "options": [
            "A. $-\\frac{\\sqrt{15}}{15}$",
            "B. $-\\frac{\\sqrt{21}}{21}$",
            "C. $\\frac{\\sqrt{15}}{15}$",
            "D. $\\frac{\\sqrt{21}}{21}$"
        ],
        "knowledge": {
            "formulas": [
                "\\cos\\theta = |\\cos\\langle\\vec{u}, \\vec{v}\\rangle| = \\frac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}||\\vec{v}|}"
            ],
            "points": [
                "<b>異面直線夾角定義</b>：兩異面直線所成銳角或直角的餘弦值必須為非負值，$\\theta \\in (0, \\pi/2]$。",
                "建立空間直角坐標系，寫出各點坐標並利用向量夾角公式求解。"
            ]
        },
        "solution": {
            "thinking": "以 $D$ 為坐標原點，$DA, DC, DD'$ 分別為 $x, y, z$ 軸建立空間直角坐標系，寫出各點坐標求向量夾角。",
            "steps": [
                "第一步：建系：$D(0,0,0)$，$A(1,0,0)$，$B(1,4,0)$，$C(0,4,0)$，$A'(1,0,4)$，$C'(0,4,4)$。",
                "第二步：中點坐標：$E(0,2,0)$，$F(1,2,0)$，$G(0,4,2)$。",
                "第三步：求向量：$\\vec{A'E} = (-1, 2, -4)$，$\\vec{GF} = (1, -2, -2)$。",
                "第四步：數量積：$\\vec{A'E}\\cdot\\vec{GF} = (-1)(1) + 2(-2) + (-4)(-2) = -1 - 4 + 8 = 3$。",
                "第五步：模長：$|\\vec{A'E}| = \\sqrt{1+4+16} = \\sqrt{21}$，$|\\vec{GF}| = \\sqrt{1+4+4} = 3$。",
                "第六步：餘弦值：$\\cos\\theta = \\frac{|3|}{\\sqrt{21} \\times 3} = \\frac{1}{\\sqrt{21}} = \\frac{\\sqrt{21}}{21}$。"
            ],
            "ans": "D",
            "trick": "異面直線所成角的餘弦值必大於 0，排除 A、B；模長分母含 $\\sqrt{21}$，快速鎖定 D。"
        }
    },
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "單選題 第2題",
        "topic": "正方體中異面直線夾角計算",
        "score": "4分",
        "q": "正方體 $ABCD - A'B'C'D'$ 的棱長為 2，$E, F, G$ 分別是 $AA', AB, CC'$ 的中點，則直線 $ED$ 與 $FG$ 所成角的餘弦值為 $(\\quad)$。",
        "options": [
            "A. $\\frac{\\sqrt{3}}{3}$",
            "B. $\\frac{\\sqrt{30}}{10}$",
            "C. $\\frac{\\sqrt{3}}{2}$",
            "D. $\\frac{2}{5}$"
        ],
        "knowledge": {
            "formulas": [
                "\\cos\\theta = \\frac{|\\vec{ED}\\cdot\\vec{FG}|}{|\\vec{ED}||\\vec{FG}|}"
            ],
            "points": [
                "正方體天然三軸正交，極適宜空間直角坐標向量法求解。"
            ]
        },
        "solution": {
            "thinking": "以 $D$ 為原點建立直角坐標系，寫出 $E, D, F, G$ 四點坐標計算向量夾角。",
            "steps": [
                "第一步：設 $D(0,0,0)$，則 $A(2,0,0)$，$B(2,2,0)$，$C(0,2,0)$，$A'(2,0,2)$，$C'(0,2,2)$。",
                "第二步：中點坐標：$E(2,0,1)$，$F(2,1,0)$，$G(0,2,1)$。",
                "第三步：向量 $\\vec{ED} = (-2, 0, -1)$，$\\vec{FG} = (-2, 1, 1)$。",
                "第四步：數量積 $\\vec{ED}\\cdot\\vec{FG} = (-2)(-2) + 0(1) + (-1)(1) = 4 - 1 = 3$。",
                "第五步：模長 $|\\vec{ED}| = \\sqrt{4+0+1} = \\sqrt{5}$，$|\\vec{FG}| = \\sqrt{4+1+1} = \\sqrt{6}$。",
                "第六步：$\\cos\\theta = \\frac{3}{\\sqrt{5}\\sqrt{6}} = \\frac{3}{\\sqrt{30}} = \\frac{\\sqrt{30}}{10}$。"
            ],
            "ans": "B",
            "trick": "模長乘積為 $\\sqrt{30}$，餘弦值必有 $\\sqrt{30}/10$，直接選 B。"
        }
    },
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "單選題 第4題",
        "topic": "正四棱柱中異面直線夾角",
        "score": "4分",
        "q": "已知正四棱柱 $ABCD - A'B'C'D'$ 中，$AA' = 2AB$，$E$ 為 $AA'$ 中點，則異面直線 $BE$ 與 $CD'$ 所成角的餘弦值為 $(\\quad)$。",
        "options": [
            "A. $\\frac{\\sqrt{10}}{10}$",
            "B. $\\frac{1}{5}$",
            "C. $\\frac{3\\sqrt{10}}{10}$",
            "D. $\\frac{3}{5}$"
        ],
        "knowledge": {
            "formulas": [
                "\\cos\\theta = \\frac{|\\vec{BE}\\cdot\\vec{CD'}|}{|\\vec{BE}||\\vec{CD'}|}"
            ],
            "points": [
                "<b>正四棱柱性質</b>：底面為正方形，側棱垂直於底面。"
            ]
        },
        "solution": {
            "thinking": "設底面邊長 $AB=1$，則 $AA'=2, AE=1$。以 $D$ 為坐標原點建系求解。",
            "steps": [
                "第一步：設 $AB=1$，建系：$D(0,0,0), A(1,0,0), B(1,1,0), C(0,1,0), D'(0,0,2)$。",
                "第二步：$E$ 為 $AA'$ 中點，故 $E(1,0,1)$。",
                "第三步：$\\vec{BE} = (0, -1, 1)$，$\\vec{CD'} = (0, -1, 2)$。",
                "第四步：數量積 $\\vec{BE}\\cdot\\vec{CD'} = 0 + (-1)(-1) + 1(2) = 3$。",
                "第五步：模長 $|\\vec{BE}| = \\sqrt{0+1+1} = \\sqrt{2}$，$|\\vec{CD'}| = \\sqrt{0+1+4} = \\sqrt{5}$。",
                "第六步：$\\cos\\theta = \\frac{3}{\\sqrt{2}\\sqrt{5}} = \\frac{3}{\\sqrt{10}} = \\frac{3\\sqrt{10}}{10}$。"
            ],
            "ans": "C",
            "trick": "數量積為 3，分母為 $\\sqrt{10}$，分子為 $3\\sqrt{10}$，選 C。"
        }
    },
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "單選題 第6題",
        "topic": "正方體中直線與平面所成角的正弦值",
        "score": "4分",
        "q": "正方體 $ABCD - A'B'C'D'$ 中，直線 $BD'$ 與平面 $A'BC'$ 的夾角正弦值為 $(\\quad)$。",
        "options": [
            "A. $\\frac{\\sqrt{3}}{3}$",
            "B. $\\frac{1}{2}$",
            "C. $\\frac{2\\sqrt{2}}{3}$",
            "D. $\\frac{1}{3}$"
        ],
        "knowledge": {
            "formulas": [
                "\\sin\\theta = |\\cos\\langle\\vec{v}, \\vec{n}\\rangle| = \\frac{|\\vec{v}\\cdot\\vec{n}|}{|\\vec{v}||\\vec{n}|}"
            ],
            "points": [
                "<b>線面角正弦公式</b>：直線的方向向量與平面的法向量夾角餘弦的絕對值。"
            ]
        },
        "solution": {
            "thinking": "求直線 $BD'$ 的方向向量與平面 $A'BC'$ 的法向量，利用數量積求夾角正弦值。",
            "steps": [
                "第一步：設正方體棱長為 1，$D$ 為原點。$B(1,1,0), D'(0,0,1)$，故直線方向向量 $\\vec{BD'} = (-1,-1,1)$。",
                "第二步：$A'(1,0,1), B(1,1,0), C'(0,1,1)$。平面向量 $\\vec{BA'} = (0,-1,1)$，$\\vec{BC'} = (-1,0,1)$。",
                "第三步：平面法向量 $\\vec{n} = (1,1,1)$（可驗證 $\\vec{n}\\cdot\\vec{BA'} = -1+1=0$）。",
                "第四步：計算數量積：$\\vec{BD'}\\cdot\\vec{n} = (-1)(1) + (-1)(1) + 1(1) = -1$。",
                "第五步：計算模長：$|\\vec{BD'}| = \\sqrt{3}$，$|\\vec{n}| = \\sqrt{3}$。",
                "第六步：線面角正弦值 $\\sin\\theta = \\frac{|-1|}{\\sqrt{3}\\times\\sqrt{3}} = \\frac{1}{3}$。"
            ],
            "ans": "D",
            "trick": "兩向量都是正方體對角線方向，內積為 $-1$，模長均為 $\\sqrt{3}$，$\\sin\\theta = 1/3$，選 D。"
        }
    },
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "單選題 第8題",
        "topic": "長方體體對角線與底面所成角",
        "score": "4分",
        "q": "在長方體 $ABCD - A'B'C'D'$ 中，$AB = BC = 2$，$AA' = 1$，則體對角線 $AC'$ 與平面 $A'B'C'D'$ 所成角的正弦值為 $(\\quad)$。",
        "options": [
            "A. $\\frac{2\\sqrt{2}}{3}$",
            "B. $\\frac{2}{3}$",
            "C. $\\frac{\\sqrt{2}}{4}$",
            "D. $\\frac{1}{3}$"
        ],
        "knowledge": {
            "formulas": [
                "\\sin\\theta = \\frac{h}{|AC'|}",
                "|AC'| = \\sqrt{a^2 + b^2 + c^2}"
            ],
            "points": [
                "<b>線面角幾何法</b>：斜線與平面所成角等於斜線段長分之頂點到平面的垂線段高。"
            ]
        },
        "solution": {
            "thinking": "直接利用幾何定義：$C'$ 在平面 $A'B'C'D'$ 內，$A$ 到該平面的距離即側棱長 $AA'=1$，體對角線為斜邊。",
            "steps": [
                "第一步：體對角線長 $|AC'| = \\sqrt{AB^2 + BC^2 + AA'^2} = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$。",
                "第二步：點 $A$ 到頂底面 $A'B'C'D'$ 的垂線為 $AA' = 1$。",
                "第三步：因此 $\\sin\\theta = \\frac{AA'}{|AC'|} = \\frac{1}{3}$。"
            ],
            "ans": "D",
            "trick": "直角三角形 $\\triangle AA'C'$ 中，對邊 $AA'=1$，斜邊 $AC'=3$，直接口算 $\\sin\\theta = 1/3$！"
        }
    },
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "解答題 第11題",
        "topic": "空間線面平行證明與線面角求解",
        "score": "12分",
        "q": "如圖，$DC \\perp$ 平面 $ABC$，$EB // DC$，$AC = BC = EB = 2DC = 2$，$\\angle ACB = 120^\\circ$，$P, Q$ 分別為 $AE, AB$ 的中點。<br>(a) 證明：$PQ //$ 平面 $ACD$；<br>(b) 求 $AD$ 與平面 $ABE$ 所成角的正弦值。",
        "options": [],
        "knowledge": {
            "formulas": [
                "\\text{中位線性質} \\implies PQ // EB // DC",
                "\\sin\\theta = \\frac{|\\vec{AD}\\cdot\\vec{n}|}{|\\vec{AD}||\\vec{n}|}"
            ],
            "points": [
                "<b>線面平行判定定理</b>：平面外一條直線平行於平面內一條直線，則該直線平行於該平面。",
                "以 $C$ 為原點建立坐標系求平面法向量求解線面角。"
            ]
        },
        "solution": {
            "thinking": "利用三角形中位線得平行關係證明線面平行；建系求平面 $ABE$ 的法向量求線面角。",
            "steps": [
                "第一步 (a)：在 $\\triangle ABE$ 中，$P, Q$ 分別是 $AE, AB$ 的中點，故 $PQ // EB$。又已知 $EB // DC$，因此 $PQ // DC$。因 $DC \\subset$ 平面 $ACD$，且 $PQ \\not\\subset$ 平面 $ACD$，由線面平行判定定理得 $PQ //$ 平面 $ACD$。",
                "第二步 (b) 建系：以 $C$ 為坐標原點，在底面作 $CA$ 垂線為 $x$ 軸，$CA$ 方向為 $y$ 軸，$CD$ 方向為 $z$ 軸。各點坐標：$C(0,0,0), D(0,0,1)$，$A(0,2,0)$。由 $\\angle ACB=120^\\circ, BC=2$ 得 $B(\\sqrt{3}, -1, 0)$，$E(\\sqrt{3}, -1, 2)$。",
                "第三步：向量 $\\vec{AD} = (0, -2, 1)$，$\\vec{AB} = (\\sqrt{3}, -3, 0)$，$\\vec{BE} = (0, 0, 2)$。",
                "第四步：設平面 $ABE$ 的法向量為 $\\vec{n} = (x, y, z)$，則 $\\vec{n}\\cdot\\vec{BE} = 2z = 0 \\implies z = 0$；$\\vec{n}\\cdot\\vec{AB} = \\sqrt{3}x - 3y = 0 \\implies x = \\sqrt{3}y$。取 $\\vec{n} = (\\sqrt{3}, 1, 0)$。",
                "第五步：計算線面角正弦值：$\\sin\\theta = \\frac{|\\vec{AD}\\cdot\\vec{n}|}{|\\vec{AD}||\\vec{n}|} = \\frac{|0 - 2 + 0|}{\\sqrt{0+4+1}\\sqrt{3+1}} = \\frac{2}{\\sqrt{5}\\times 2} = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$。"
            ],
            "ans": "(a) 詳見規範證明；(b) $\\frac{\\sqrt{5}}{5}$",
            "trick": "法向量 $z=0$ 表示平面 $ABE$ 垂直於底面，線面角等於 $AD$ 在底面的投影角。"
        }
    },
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "解答題 第12題",
        "topic": "直三棱柱中垂直證明與二面角求解",
        "score": "12分",
        "q": "如圖，在直三棱柱 $ABC - A'B'C'$ 中，$AB = 1$，$AC = AA' = \\sqrt{3}$，$\\angle ABC = 60^\\circ$。<br>(a) 證明：$AB \\perp A'C$；<br>(b) 求二面角 $A - A'C - B$ 的大小。",
        "options": [],
        "knowledge": {
            "formulas": [
                "\\cos\\theta = \\frac{\\vec{n}_1\\cdot\\vec{n}_2}{|\\vec{n}_1||\\vec{n}_2|}",
                "\\triangle ABC \\text{ 中由正弦定理判斷直角}"
            ],
            "points": [
                "<b>三垂線定理與坐標法</b>：底面中 $\\frac{AC}{\\sin 60^\\circ} = \\frac{\\sqrt{3}}{\\sqrt{3}/2} = 2 \\implies \\sin\\angle C = \\frac{AB}{2} = \\frac{1}{2} \\implies \\angle C = 30^\\circ, \\angle A = 90^\\circ$！",
                "二面角由兩個半平面的法向量夾角確定。"
            ]
        },
        "solution": {
            "thinking": "先在底面用解三角形求出 $\\angle BAC = 90^\\circ$，由此建立空間坐標系求垂直與二面角。",
            "steps": [
                "第一步 (a)：底面 $\\triangle ABC$ 中，由正弦定理 $\\frac{AC}{\\sin B} = \\frac{\\sqrt{3}}{\\sin 60^\\circ} = 2$。又 $\\sin C = \\frac{AB}{2} = \\frac{1}{2}$，因 $AB < AC$，$\\angle C = 30^\\circ$，故 $\\angle BAC = 180^\\circ - 60^\\circ - 30^\\circ = 90^\\circ$，即 $AB \\perp AC$。因三棱柱為直三棱柱，$AA' \\perp$ 底面 $ABC$，故 $AA' \\perp AB$。由 $AB \\perp AC$ 且 $AB \\perp AA'$，得 $AB \\perp$ 平面 $ACC'A'$。又 $A'C \\subset$ 平面 $ACC'A'$，故 $AB \\perp A'C$ 得證。",
                "第二步 (b) 建系：以 $A$ 為坐標原點，$AB, AC, AA'$ 分別為 $x, y, z$ 軸。坐標為 $A(0,0,0), B(1,0,0), C(0,\\sqrt{3},0), A'(0,0,\\sqrt{3})$。",
                "第三步：求平面 $AA'C$ 的法向量：由 $AB \\perp$ 平面 $AA'C$，可直接取法向量 $\\vec{n}_1 = \\vec{AB} = (1, 0, 0)$。",
                "第四步：求平面 $A'CB$ 的法向量 $\\vec{n}_2$：$\\vec{BA'} = (-1, 0, \\sqrt{3})$，$\\vec{BC} = (-1, \\sqrt{3}, 0)$。設 $\\vec{n}_2 = (x, y, z)$，則 $-x + \\sqrt{3}z = 0$ 且 $-x + \\sqrt{3}y = 0$。令 $x = \\sqrt{3}$，則 $y = 1, z = 1$，得 $\\vec{n}_2 = (\\sqrt{3}, 1, 1)$。",
                "第五步：計算二面角餘弦值：$\\cos\\theta = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|} = \\frac{\\sqrt{3}}{1 \\times \\sqrt{3 + 1 + 1}} = \\frac{\\sqrt{3}}{\\sqrt{5}} = \\frac{\\sqrt{15}}{5}$。故二面角大小為 $\\arccos\\frac{\\sqrt{15}}{5}$。"
            ],
            "ans": "(a) 詳見規範證明；(b) $\\arccos\\frac{\\sqrt{15}}{5}$",
            "trick": "$AB$ 垂直於整個側平面，法向量直接取 $(1,0,0)$，計算量減半！"
        }
    },
    {
        "year": "2026",
        "paper": "專題七",
        "qNum": "解答題 第19題",
        "topic": "三棱錐線面垂直與動態直二面角探究",
        "score": "12分",
        "q": "如圖，在三棱錐 $P - ABC$ 中，$PA \\perp$ 底面 $ABC$，$PA = AB$，$\\angle ABC = 60^\\circ$，$\\angle BCA = 90^\\circ$，點 $D, E$ 分別在棱 $PB, PC$ 上，且 $DE // BC$。<br>(a) 求證：$BC \\perp$ 平面 $PAC$；<br>(b) 當 $D$ 為 $PB$ 的中點時，求 $AD$ 與平面 $PAC$ 所成的角的大小；<br>(c) 是否存在點 $E$ 使得二面角 $A - DE - P$ 為直二面角？並說明理由。",
        "options": [],
        "knowledge": {
            "formulas": [
                "\\text{線面垂直} \\iff BC \\perp AC \\land BC \\perp PA",
                "\\cos\\theta = 0 \\iff \\text{直二面角}"
            ],
            "points": [
                "<b>存在性問題解答策略</b>：先設參數比值 $\\lambda = \\frac{PE}{PC} \\in (0, 1)$，建立二面角餘弦值方程，檢驗是否有合理解。"
            ]
        },
        "solution": {
            "thinking": "利用線面垂直判定定理證明第一問；建系求線面角與探究二面角法向量正交性。",
            "steps": [
                "第一步 (a)：因 $PA \\perp$ 底面 $ABC$，且 $BC \\subset$ 平面 $ABC$，故 $PA \\perp BC$。又已知 $\\angle BCA = 90^\\circ$，即 $BC \\perp AC$。而 $PA \\cap AC = A$，故 $BC \\perp$ 平面 $PAC$。",
                "第二步 (b) 建系：以 $C$ 為原點，$CB, CA$ 分別為 $x, y$ 軸，過 $C$ 垂直底面為 $z$ 軸。設 $BC = 1$，因 $\\angle ABC = 60^\\circ, \\angle BCA = 90^\\circ$，得 $AB = 2, AC = \\sqrt{3}$。故 $PA = AB = 2$。各點坐標：$C(0,0,0), B(1,0,0), A(0,\\sqrt{3},0), P(0,\\sqrt{3},2)$。",
                "第三步：$D$ 為 $PB$ 中點，坐標 $D\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}, 1\\right)$。$\\vec{AD} = \\left(\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}, 1\\right)$。因 $BC \\perp$ 平面 $PAC$，平面 $PAC$ 的法向量為 $\\vec{CB} = (1, 0, 0)$。線面角正弦值 $\\sin\\theta = \\frac{|1/2|}{\\sqrt{1/4 + 3/4 + 1}\\times 1} = \\frac{1/2}{\\sqrt{2}} = \\frac{\\sqrt{2}}{4}$，故角大小為 $\\arcsin\\frac{\\sqrt{2}}{4}$。",
                "第四步 (c) 探究直二面角：因 $DE // BC$，且由 (a) 知 $BC \\perp$ 平面 $PAC$，故 $DE \\perp$ 平面 $PAC$。因此 $DE \\perp AE$ 且 $DE \\perp PE$。所以 $\\angle AEP$ 即為二面角 $A - DE - P$ 的平面角！要使二面角為直角，只需 $\\angle AEP = 90^\\circ$，即 $AE \\perp PC$。在 Rt$\\triangle PAC$ 中，$PA = 2, AC = \\sqrt{3}$，斜邊 $PC = \\sqrt{4+3} = \\sqrt{7}$。作 $AE \\perp PC$ 於 $E$，此時垂足 $E$ 落在線段 $PC$ 內部，且 $PE = \\frac{PA^2}{PC} = \\frac{4}{\\sqrt{7}} < \\sqrt{7}$。故存在這樣的點 $E$，使二面角為直二面角。"
            ],
            "ans": "(a) 詳見規範證明；(b) $\\arcsin\\frac{\\sqrt{2}}{4}$；(c) 存在，當 $AE \\perp PC$（即 $\\frac{PE}{PC} = \\frac{4}{7}$）時二面角為直二面角",
            "trick": "幾何平面角秒殺：$DE \\perp$ 面 $PAC$ 直接說明 $\\angle AEP$ 即為二面角平面角，垂足落在線段內立即斷定存在！"
        }
    }
]

deck_obj = {
    "ch": "專題七 立體幾何中的空間向量應用",
    "year": "2026",
    "paper": "專題七",
    "title": "專題七 應用空間向量解決立體幾何問題 — 異面直線夾角、線面角、二面角與動態探究",
    "color": "#0ea5e9",
    "sections": [
        "異面直線所成角的向量算法",
        "直線與平面所成角的正弦公式",
        "空間二面角與平面法向量求解",
        "空間線面平行與垂直的嚴密證明",
        "空間動態探索與存在性問題"
    ],
    "slides": slides
}

output_js = f"/* 2026 高三理組數學思維本 — 專題七 立體幾何中的空間向量應用 ({len(slides)} 題) */\n(function() {{\n  const DECK = window.DECK = window.DECK || [];\n  DECK.push({json.dumps(deck_obj, ensure_ascii=False, indent=2)});\n}})();\n"

with open("demo/ch-senior-07.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print(f"Generated demo/ch-senior-07.js with {len(slides)} slides.")
