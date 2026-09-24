# -*- coding: utf-8 -*-
"""
scripts/gen_ch12_inequalities.py
專題十二：不等式解法、分式不等式與均值不等式 (Book P27-28, PDF P25-26, 6 slides)
"""

import json

slides = [
    {
        "year": "2026",
        "paper": "專題十二",
        "qNum": "單選題 第11題",
        "topic": "分式不等式的轉化與求解",
        "score": "4分",
        "q": "不等式 $\\frac{x+2}{x+4} < 1$ 的解集為 $(\\quad)$。",
        "options": [
            "A. $\\{x \\mid x < 1\\}$",
            "B. $\\{x \\mid -6 < x < 1\\}$",
            "C. $\\{x \\mid x < 4\\}$",
            "D. $\\{x \\mid x > -4\\}$"
        ],
        "knowledge": {
            "formulas": [
                "\\frac{A}{B} < 0 \\iff AB < 0"
            ],
            "points": [
                "<b>分式不等式移項通分原則</b>：嚴禁直接跨式交叉相乘（因分母正負未知），必須移項至一邊，通分化為 $\\frac{P(x)}{Q(x)} < 0$ 後轉為整式乘積。"
            ]
        },
        "solution": {
            "thinking": "將 1 移至左邊通分，注意分子化簡後的符號，再判定分母正負求出解集。",
            "steps": [
                "第一步：移項通分：$\\frac{x + 2}{x + 4} - 1 < 0$。",
                "第二步：通分化簡分子：$\\frac{(x + 2) - (x + 4)}{x + 4} < 0 \\implies \\frac{-2}{x + 4} < 0$。",
                "第三步：兩邊同乘以 $-1$（或由分子 $-2 < 0$ 知名分母必為正）：$x + 4 > 0$。",
                "第四步：解得 $x > -4$。",
                "第五步：因此不等式的解集為 $\\{x \\mid x > -4\\}$。"
            ],
            "ans": "D",
            "trick": "極速判斷：代入 $x=0$，$\\frac{2}{4} = 0.5 < 1$ 成立，故 $x=0$ 在解集內；代入 $x=-5$，$\\frac{-3}{-1} = 3 < 1$ 不成立，排除 A、B、C，秒選 D！"
        }
    },
    {
        "year": "2026",
        "paper": "專題十二",
        "qNum": "單選題 第12題",
        "topic": "絕對值不等式與指數不等式求交集",
        "score": "4分",
        "q": "設集合 $A = \\{x \\mid |x - 1| < 1\\}$，$B = \\{x \\mid 2^x < 2\\}$，則 $A \\cap B = (\\quad)$。",
        "options": [
            "A. $\\{x \\mid 0 < x < 1\\}$",
            "B. $\\{x \\mid 0 < x < 2\\}$",
            "C. $\\{x \\mid x < 2\\}$",
            "D. $\\emptyset$"
        ],
        "knowledge": {
            "formulas": [
                "|x - a| < r \\iff a - r < x < a + r",
                "2^x < 2^1 \\iff x < 1"
            ],
            "points": [
                "<b>絕對值不等式去絕對值</b>：小於夾中間，大於取兩邊。",
                "底數 $2 > 1$，指數單調遞增保持不等號方向。"
            ]
        },
        "solution": {
            "thinking": "分別求出集合 $A$ 和 $B$ 的開區間，再取公共交集。",
            "steps": [
                "第一步：解絕對值不等式 $|x - 1| < 1$：$-1 < x - 1 < 1 \\implies 0 < x < 2$，即 $A = (0, 2)$。",
                "第二步：解指數不等式 $2^x < 2 = 2^1$：因底數 $2 > 1$，得 $x < 1$，即 $B = (-\\infty, 1)$。",
                "第三步：求交集：$A \\cap B = (0, 2) \\cap (-\\infty, 1) = (0, 1)$，即 $\\{x \\mid 0 < x < 1\\}$。"
            ],
            "ans": "A",
            "trick": "數軸取公共部分：$(0, 2)$ 截斷在 $x < 1$，即得 $(0, 1)$，選 A。"
        }
    },
    {
        "year": "2026",
        "paper": "專題十二",
        "qNum": "解答題 第13題",
        "topic": "基本均值不等式之規範代數證明",
        "score": "8分",
        "q": "設 $x$ 及 $y$ 為正實數。<br>(a) 證明：$\\frac{x + y}{2} \\ge \\sqrt{xy}$，且等式成立當且僅當 $x = y$；<br>(b) 利用 (a) 的結果，若 $x + y = 12$，求 $xy$ 的最大值及此時 $x, y$ 的值。",
        "options": [],
        "knowledge": {
            "formulas": [
                "(\\sqrt{x} - \\sqrt{y})^2 \\ge 0 \\iff x - 2\\sqrt{xy} + y \\ge 0",
                "xy \\le \\left(\\frac{x+y}{2}\\right)^2"
            ],
            "points": [
                "<b>均值不等式三要素</b>：「一正、二定、三相等」。正數前提保證根號有意義，和為定值積取最大，等號成立在兩數相等時。"
            ]
        },
        "solution": {
            "thinking": "利用完全平方差非負性作差法證明基本不等式，第二問直接套用積的最值公式。",
            "steps": [
                "第一步 (a) 作差法：$\\frac{x + y}{2} - \\sqrt{xy} = \\frac{x - 2\\sqrt{xy} + y}{2}$。",
                "第二步：因 $x > 0, y > 0$，可將分子改寫為完全平方式：$\\frac{(\\sqrt{x} - \\sqrt{y})^2}{2}$。",
                "第三步：實數平方恆非負，故 $(\\sqrt{x} - \\sqrt{y})^2 \\ge 0$，因此 $\\frac{x + y}{2} - \\sqrt{xy} \\ge 0 \\implies \\frac{x + y}{2} \\ge \\sqrt{xy}$。",
                "第四步：等號成立條件：當且僅當 $\\sqrt{x} - \\sqrt{y} = 0 \\iff \\sqrt{x} = \\sqrt{y} \\iff x = y$。",
                "第五步 (b)：已知 $x + y = 12$。由均值不等式：$\\sqrt{xy} \\le \\frac{x + y}{2} = \\frac{12}{2} = 6$。",
                "第六步：兩邊平方得 $xy \\le 6^2 = 36$。等號成立於 $x = y = \\frac{12}{2} = 6$ 時。故 $xy$ 的最大值為 36。"
            ],
            "ans": "(a) 詳見規範證明；(b) 最大值為 36，此時 $x = y = 6$",
            "trick": "定和求積口算：$12/2 = 6$，$6^2 = 36$，最大值秒得 36！"
        }
    }
]

deck_obj = {
    "ch": "專題十二 不等式解法與性質",
    "year": "2026",
    "paper": "專題十二",
    "title": "專題十二 不等式的性質、分式不等式、絕對值不等式與均值不等式",
    "color": "#ec4899",
    "sections": [
        "分式不等式之移項通分與符號判定",
        "絕對值不等式雙向求解",
        "指數不等式與複合交集運算",
        "基本均值不等式之規範作差證明",
        "均值不等式求最值（一正二定三相等）"
    ],
    "slides": slides
}

output_js = f"/* 2026 高三理組數學思維本 — 專題十二 不等式解法與性質 ({len(slides)} 題) */\n(function() {{\n  const DECK = window.DECK = window.DECK || [];\n  DECK.push({json.dumps(deck_obj, ensure_ascii=False, indent=2)});\n}})();\n"

with open("demo/ch-senior-12.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print(f"Generated demo/ch-senior-12.js with {len(slides)} slides.")
