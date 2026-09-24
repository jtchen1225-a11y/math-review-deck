# -*- coding: utf-8 -*-
"""
scripts/gen_ch06_vectors.py
專題六：空間向量概念與運算 (Book P9-10, PDF P7-8, 12 slides)
"""

import json

slides = [
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "單選題 第1題",
        "topic": "空間向量的線性運算與模長",
        "score": "4分",
        "q": "已知空間向量 $\\vec{a} = (1, -2, 3)$，$\\vec{b} = (2, 1, -1)$，則向量 $2\\vec{a} - 3\\vec{b}$ 的坐標及其模長分別為 $(\\quad)$。",
        "options": [
            "A. $(-4, -7, 9)$，模長為 $\\sqrt{146}$",
            "B. $(-4, -7, 9)$，模長為 $\\sqrt{126}$",
            "C. $(4, 7, -9)$，模長為 $\\sqrt{146}$",
            "D. $(-4, -1, 3)$，模長為 $\\sqrt{26}$"
        ],
        "knowledge": {
            "formulas": [
                "k\\vec{a} + m\\vec{b} = (kx_1 + mx_2, ky_1 + my_2, kz_1 + mz_2)",
                "|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}"
            ],
            "points": [
                "<b>向量線性運算</b>：按分量對應進行數乘與加減。",
                "<b>向量模長公式</b>：三維空間向量模長為各分量平方和之算術平方根。"
            ]
        },
        "solution": {
            "thinking": "先利用坐標分量計算數乘與差向量 $2\\vec{a} - 3\\vec{b}$，再代入模長公式計算其範數。",
            "steps": [
                "第一步：計算 $2\\vec{a} = (2, -4, 6)$，$3\\vec{b} = (6, 3, -3)$。",
                "第二步：作差得 $2\\vec{a} - 3\\vec{b} = (2-6, -4-3, 6-(-3)) = (-4, -7, 9)$。",
                "第三步：計算模長：$|2\\vec{a} - 3\\vec{b}| = \\sqrt{(-4)^2 + (-7)^2 + 9^2} = \\sqrt{16 + 49 + 81} = \\sqrt{146}$。"
            ],
            "ans": "A",
            "trick": "速算：直接看 $x$ 分量 $2(1) - 3(2) = -4$ 排除 C；$z$ 分量 $2(3) - 3(-1) = 9$，模長 $\\sqrt{16+49+81} = \\sqrt{146}$ 快速選 A。"
        }
    },
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "單選題 第2題",
        "topic": "空間向量數量積與夾角餘弦",
        "score": "4分",
        "q": "已知向量 $\\vec{a} = (1, 1, 0)$，$\\vec{b} = (0, 1, 1)$，則向量 $\\vec{a}$ 與 $\\vec{b}$ 的夾角為 $(\\quad)$。",
        "options": [
            "A. $30^\\circ$",
            "B. $45^\\circ$",
            "C. $60^\\circ$",
            "D. $120^\\circ$"
        ],
        "knowledge": {
            "formulas": [
                "\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}",
                "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2"
            ],
            "points": [
                "<b>向量夾角公式</b>：夾角餘弦值等於數量積除以兩向量模長的乘積。",
                "空間向量夾角取值範圍為 $[0, \\pi]$。"
            ]
        },
        "solution": {
            "thinking": "計算數量積 $\\vec{a} \\cdot \\vec{b}$ 以及兩向量的模長，利用餘弦公式求出角度。",
            "steps": [
                "第一步：計算數量積 $\\vec{a} \\cdot \\vec{b} = 1\\times 0 + 1\\times 1 + 0\\times 1 = 1$。",
                "第二步：計算模長 $|\\vec{a}| = \\sqrt{1^2+1^2+0} = \\sqrt{2}$，$|\\vec{b}| = \\sqrt{0+1^2+1^2} = \\sqrt{2}$。",
                "第三步：$\\cos\\theta = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$，因 $\\theta \\in [0^\\circ, 180^\\circ]$，故 $\\theta = 60^\\circ$。"
            ],
            "ans": "C",
            "trick": "典型基準幾何角：單位立方體相鄰兩面對角線夾角，直接得 $60^\\circ$。"
        }
    },
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "單選題 第7題",
        "topic": "空間向量正交條件與待定係數",
        "score": "4分",
        "q": "已知向量 $\\vec{a} = (-2, x, 2)$，$\\vec{b} = (2, 1, 2)$，$\\vec{c} = (4, -2, 1)$。若 $\\vec{a} \\perp (\\vec{b} - \\vec{c})$，則 $x$ 的值為 $(\\quad)$。",
        "options": [
            "A. -2",
            "B. 2",
            "C. 3",
            "D. -3"
        ],
        "knowledge": {
            "formulas": [
                "\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0",
                "\\vec{b} - \\vec{c} = (x_b - x_c, y_b - y_c, z_b - z_c)"
            ],
            "points": [
                "<b>向量垂直充分必要條件</b>：數量積為 $0$。",
                "展開坐標等式建立一元一次方程求解。"
            ]
        },
        "solution": {
            "thinking": "先求出差向量 $\\vec{b} - \\vec{c}$，再利用 $\\vec{a} \\cdot (\\vec{b} - \\vec{c}) = 0$ 求解未知數 $x$。",
            "steps": [
                "第一步：求差向量 $\\vec{b} - \\vec{c} = (2-4, 1-(-2), 2-1) = (-2, 3, 1)$。",
                "第二步：由垂直條件：$\\vec{a} \\cdot (\\vec{b} - \\vec{c}) = (-2)(-2) + x(3) + 2(1) = 4 + 3x + 2 = 0$。",
                "第三步：解得 $3x + 6 = 0 \\implies x = -2$。"
            ],
            "ans": "A",
            "trick": "心算差向量分量 $(-2, 3, 1)$，與 $(-2, x, 2)$ 內積得 $4 + 3x + 2 = 0 \\implies x = -2$。"
        }
    },
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "單選題 第8題",
        "topic": "向量夾角與未知參數求解",
        "score": "4分",
        "q": "已知向量 $\\vec{a} = (\\sqrt{3}, 0, 1)$，$\\vec{b} = (k, 2, 0)$。若 $\\vec{a}$ 與 $\\vec{b}$ 夾角為 $\\frac{2}{3}\\pi$，則 $k$ 的值為 $(\\quad)$。",
        "options": [
            "A. $-\\sqrt{2}$",
            "B. $\\sqrt{2}$",
            "C. -1",
            "D. 1"
        ],
        "knowledge": {
            "formulas": [
                "\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}",
                "\\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}"
            ],
            "points": [
                "<b>鈍角夾角檢驗</b>：夾角為鈍角時數量積必定小於 0，故分量乘積和為負數。",
                "平方化簡時需特別檢驗符號。"
            ]
        },
        "solution": {
            "thinking": "代入向量夾角餘弦公式，列出關於 $k$ 的無理方程，解出 $k$ 並根據鈍角條件驗根。",
            "steps": [
                "第一步：$|\\vec{a}| = \\sqrt{3 + 0 + 1} = 2$，$|\\vec{b}| = \\sqrt{k^2 + 4}$，$\\vec{a}\\cdot\\vec{b} = \\sqrt{3}k$。",
                "第二步：由 $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2} = \\frac{\\sqrt{3}k}{2\\sqrt{k^2+4}}$，約去分母得 $-\\sqrt{k^2+4} = \\sqrt{3}k$。",
                "第三步：兩邊平方得 $k^2 + 4 = 3k^2 \\implies 2k^2 = 4 \\implies k^2 = 2$。因 $\\sqrt{3}k < 0$，取負根 $k = -\\sqrt{2}$。"
            ],
            "ans": "A",
            "trick": "因 $\\cos(2\\pi/3) < 0$，$\\vec{a}\\cdot\\vec{b} = \\sqrt{3}k < 0$，故 $k$ 必為負數，排除 B、D，代入 $k=-\\sqrt{2}$ 立即吻合。"
        }
    },
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "單選題 第9題",
        "topic": "空間向量基底的判定",
        "score": "4分",
        "q": "若 $\\{\\vec{a}, \\vec{b}, \\vec{c}\\}$ 構成空間向量的一組基底，且 $\\vec{p} = 2\\vec{a} - \\vec{b}$，$\\vec{q} = 2\\vec{b} - \\vec{a}$，$\\vec{r} = \\vec{a} + \\vec{b}$，$\\vec{s} = \\vec{a} + \\vec{b} + \\vec{c}$，則下列可以作為空間一個基底的是 $(\\quad)$。",
        "options": [
            "A. $\\vec{a}, \\vec{p}, \\vec{q}$",
            "B. $\\vec{b}, \\vec{p}, \\vec{q}$",
            "C. $\\vec{r}, \\vec{p}, \\vec{q}$",
            "D. $\\vec{s}, \\vec{p}, \\vec{q}$"
        ],
        "knowledge": {
            "formulas": [
                "\\text{基底充要條件}：\\text{三向量不共面} \\iff c_1\\vec{u} + c_2\\vec{v} + c_3\\vec{w} = \\vec{0} \\implies c_1=c_2=c_3=0"
            ],
            "points": [
                "<b>空間基底定理</b>：空間任意三個不共面的向量都可以作為空間的一個基底。",
                "若三個向量線性相關（共面），則不能作為基底。"
            ]
        },
        "solution": {
            "thinking": "分析各選項中向量的線性相關性。$\\vec{p}$ 和 $\\vec{q}$ 均由 $\\vec{a}, \\vec{b}$ 線性表出，檢驗第三個向量是否引入了獨立的 $\\vec{c}$ 方向。",
            "steps": [
                "第一步：注意 $\\vec{p} + \\vec{q} = (2\\vec{a}-\\vec{b}) + (2\\vec{b}-\\vec{a}) = \\vec{a} + \\vec{b} = \\vec{r}$，故 $\\vec{r}, \\vec{p}, \\vec{q}$ 共面，排除 C。",
                "第二步：$\\vec{p}$ 與 $\\vec{q}$ 是 $\\vec{a}, \\vec{b}$ 所張成平面的向量，因此 $\\vec{a}$（或 $\\vec{b}$）與 $\\vec{p}, \\vec{q}$ 必定共面，排除 A、B。",
                "第三步：$\\vec{s} = \\vec{a} + \\vec{b} + \\vec{c}$ 含有基底向量 $\\vec{c}$，而 $\\vec{p}, \\vec{q}$ 完全落在 $\\vec{a}, \\vec{b}$ 平面內，故 $\\vec{s}, \\vec{p}, \\vec{q}$ 不共面，可作為基底。"
            ],
            "ans": "D",
            "trick": "秒殺法：$\\vec{p}, \\vec{q}$ 都只含 $\\vec{a}, \\vec{b}$，要在三維空間構成基底，第三個向量必須含有 $\\vec{c}$，選項中唯有 $\\vec{s}$ 含有 $\\vec{c}$，秒選 D！"
        }
    },
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "單選題 第10題",
        "topic": "向量共線與垂直的綜合求解",
        "score": "4分",
        "q": "設 $x, y \\in \\mathbb{R}$，向量 $\\vec{a} = (x, 1, 0)$，$\\vec{b} = (2, y, 2)$，$\\vec{c} = (1, -2, 1)$。若 $\\vec{a} \\perp \\vec{b}$ 且 $\\vec{b} // \\vec{c}$，則 $|\\vec{a} + \\vec{b}|$ 的值為 $(\\quad)$。",
        "options": [
            "A. $\\sqrt{14}$",
            "B. $\\sqrt{10}$",
            "C. $\\sqrt{29}$",
            "D. $2\\sqrt{7}$"
        ],
        "knowledge": {
            "formulas": [
                "\\vec{b} // \\vec{c} \\iff \\frac{x_b}{x_c} = \\frac{y_b}{y_c} = \\frac{z_b}{z_c}",
                "\\vec{a} \\perp \\vec{b} \\iff \\vec{a}\\cdot\\vec{b} = 0"
            ],
            "points": [
                "<b>向量平行條件</b>：各分量成比例。",
                "由平行先定 $\\vec{b}$，再由垂直定 $\\vec{a}$，最後求和向量模長。"
            ]
        },
        "solution": {
            "thinking": "由 $\\vec{b} // \\vec{c}$ 可確定比例係數求出 $y$ 及 $\\vec{b}$，再由 $\\vec{a} \\perp \\vec{b}$ 列方程求 $x$，最後求模長。",
            "steps": [
                "第一步：由 $\\vec{b} // \\vec{c}$，有 $\\frac{2}{1} = \\frac{y}{-2} = \\frac{2}{1} \\implies y = -4$，故 $\\vec{b} = (2, -4, 2)$。",
                "第二步：由 $\\vec{a} \\perp \\vec{b}$，得 $\\vec{a}\\cdot\\vec{b} = 2x + 1(-4) + 0(2) = 0 \\implies 2x - 4 = 0 \\implies x = 2$。",
                "第三步：因此 $\\vec{a} = (2, 1, 0)$，和向量 $\\vec{a} + \\vec{b} = (2+2, 1-4, 0+2) = (4, -3, 2)$。",
                "第四步：模長 $|\\vec{a} + \\vec{b}| = \\sqrt{4^2 + (-3)^2 + 2^2} = \\sqrt{16 + 9 + 4} = \\sqrt{29}$。"
            ],
            "ans": "C",
            "trick": "比例常數為 2，$\\vec{b} = 2\\vec{c} = (2, -4, 2)$，垂直得 $2x - 4 = 0 \\implies x = 2$，和向量 $(4, -3, 2)$，模長 $\\sqrt{16+9+4} = \\sqrt{29}$。"
        }
    },
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "單選題 第11題",
        "topic": "對稱點與空間兩點距離",
        "score": "4分",
        "q": "設點 $A(1, 2, 2)$，$B(3, 4, -8)$，$C(1, 2, 3)$。點 $C$ 關於 $xOy$ 坐標面對稱的點為 $D$，則線段 $AB$ 的中點 $P$ 到點 $D$ 的距離為 $(\\quad)$。",
        "options": [
            "A. 2",
            "B. $\\sqrt{70}$",
            "C. $\\sqrt{2}$",
            "D. $\\sqrt{34}$"
        ],
        "knowledge": {
            "formulas": [
                "P_{\\text{中點}} = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)",
                "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}"
            ],
            "points": [
                "<b>坐標平面對稱口訣</b>：關於 $xOy$ 面對稱，橫縱坐標不變，豎坐標變號，即 $(x, y, z) \\to (x, y, -z)$。",
                "中點公式取坐標平均值。"
            ]
        },
        "solution": {
            "thinking": "先寫出對稱點 $D$ 的坐標，再用中點坐標公式求出 $P$ 點，最後套用空間兩點距離公式。",
            "steps": [
                "第一步：點 $C(1, 2, 3)$ 關於 $xOy$ 坐標面對稱，豎坐標取相反數，得 $D(1, 2, -3)$。",
                "第二步：線段 $AB$ 的中點 $P$ 坐標為 $P\\left(\\frac{1+3}{2}, \\frac{2+4}{2}, \\frac{2+(-8)}{2}\\right) = (2, 3, -3)$。",
                "第三步：計算距離 $|PD| = \\sqrt{(2-1)^2 + (3-2)^2 + (-3-(-3))^2} = \\sqrt{1 + 1 + 0} = \\sqrt{2}$。"
            ],
            "ans": "C",
            "trick": "觀察 $P(2, 3, -3)$ 與 $D(1, 2, -3)$ 的 $z$ 坐標完全相同，距離直接等於平面兩點距離 $\\sqrt{1^2 + 1^2} = \\sqrt{2}$！"
        }
    },
    {
        "year": "2026",
        "paper": "專題六",
        "qNum": "解答題 第12題",
        "topic": "空間四點的向量運算與向量積",
        "score": "10分",
        "q": "已知空間四點 $A(1, 2, 0)$，$B(-1, 3, -2)$，$C(0, -1, 1)$，$D(-2, -1, 4)$，試求：<br>(a) $\\vec{AB}$；<br>(b) $\\vec{AC} - 2\\vec{BD}$；<br>(c) $\\vec{AB} \\cdot \\vec{CD}$；<br>(d) $\\vec{AB} \\times \\vec{CD}$。",
        "options": [],
        "knowledge": {
            "formulas": [
                "\\vec{AB} = B - A = (x_2 - x_1, y_2 - y_1, z_2 - z_1)",
                "\\vec{u} \\times \\vec{v} = (y_1 z_2 - z_1 y_2, z_1 x_2 - x_1 z_2, x_1 y_2 - y_1 x_2)"
            ],
            "points": [
                "<b>向量積（外積）的行列式算法</b>：$\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\end{vmatrix}$。",
                "向量積方向垂直於這兩個向量構成的平面，大小表示以兩向量為鄰邊的平行四邊形面積。"
            ]
        },
        "solution": {
            "thinking": "依序求解基本起終點向量、線性組合、數量積以及外積行列式。",
            "steps": [
                "第一步 (a)：$\\vec{AB} = (-1-1, 3-2, -2-0) = (-2, 1, -2)$。",
                "第二步 (b)：$\\vec{AC} = (0-1, -1-2, 1-0) = (-1, -3, 1)$；$\\vec{BD} = (-2-(-1), -1-3, 4-(-2)) = (-1, -4, 6)$；故 $\\vec{AC} - 2\\vec{BD} = (-1 - 2(-1), -3 - 2(-4), 1 - 2(6)) = (1, 5, -11)$。",
                "第三步 (c)：$\\vec{CD} = (-2-0, -1-(-1), 4-1) = (-2, 0, 3)$。數量積 $\\vec{AB} \\cdot \\vec{CD} = (-2)(-2) + 1(0) + (-2)(3) = 4 + 0 - 6 = -2$。",
                "第四步 (d)：外積 $\\vec{AB} \\times \\vec{CD} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -2 & 1 & -2 \\\\ -2 & 0 & 3 \\end{vmatrix} = (1\\times 3 - 0)\\vec{i} - ((-2)\\times 3 - (-2)(-2))\\vec{j} + ((-2)(0) - 1(-2))\\vec{k} = (3, 10, 2)$。"
            ],
            "ans": "(a) $(-2, 1, -2)$；(b) $(1, 5, -11)$；(c) $-2$；(d) $(3, 10, 2)$",
            "trick": "外積行列式注意中間 $j$ 分量要加負號：$-( -6 - 4 ) = 10$。"
        }
    }
]

deck_obj = {
    "ch": "專題六 空間向量概念與運算",
    "year": "2026",
    "paper": "專題六",
    "title": "專題六 空間向量的概念、基本運算、坐標表示與數量積/向量積",
    "color": "#0284c7",
    "sections": [
        "空間向量線性運算與模長",
        "向量數量積與夾角計算",
        "空間向量正交與共線判定",
        "空間坐標系與對稱點",
        "向量積（外積）與行列式運算"
    ],
    "slides": slides
}

output_js = f"/* 2026 高三理組數學思維本 — 專題六 空間向量概念與運算 ({len(slides)} 題) */\n(function() {{\n  const DECK = window.DECK = window.DECK || [];\n  DECK.push({json.dumps(deck_obj, ensure_ascii=False, indent=2)});\n}})();\n"

with open("demo/ch-senior-06.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print(f"Generated demo/ch-senior-06.js with {len(slides)} slides.")
