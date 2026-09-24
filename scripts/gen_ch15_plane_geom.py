# -*- coding: utf-8 -*-
"""
scripts/gen_ch15_plane_geom.py
專題十五：平面幾何 (Book P36-37, PDF P34-35, 5 slides)
"""

import json

slides = [
    {
        "year": "2026",
        "paper": "專題十五",
        "qNum": "單選題 第1題",
        "topic": "正多邊形內角與外角關係",
        "score": "4分",
        "q": "某正 $n$ 邊形每個內角是每個外角的 3 倍，則邊數 $n = (\\quad)$。",
        "options": [
            "A. 3",
            "B. 5",
            "C. 6",
            "D. 7",
            "E. 8"
        ],
        "knowledge": {
            "formulas": [
                "\\text{內角} + \\text{外角} = 180^\\circ",
                "n = \\frac{360^\\circ}{\\text{外角}}"
            ],
            "points": [
                "<b>多邊形外角和定理</b>：任意多邊形的外角和恆等於 $360^\\circ$。在正多邊形中，每個外角均相等，利用外角求邊數是最簡潔的路徑。"
            ]
        },
        "solution": {
            "thinking": "利用內角與外角互補的關係求出外角的大小，再由外角和 $360^\\circ$ 除以外角求出邊數 $n$。",
            "steps": [
                "第一步：設該正 $n$ 邊形的一個外角為 $\\theta$，則其內角為 $3\\theta$。",
                "第二步：因任意多邊形的相鄰內角與外角互補，有：$\\theta + 3\\theta = 180^\\circ \\implies 4\\theta = 180^\\circ \\implies \\theta = 45^\\circ$。",
                "第三步：正 $n$ 邊形的外角和為 $360^\\circ$，每個外角均為 $45^\\circ$。",
                "第四步：邊數為 $n = \\frac{360^\\circ}{45^\\circ} = 8$。"
            ],
            "ans": "E",
            "trick": "外角是內角的 $1/3$，外角 $= 180^\\circ / (3+1) = 45^\\circ$，$360/45 = 8$，口算選 E！"
        }
    },
    {
        "year": "2026",
        "paper": "專題十五",
        "qNum": "單選題 第2題",
        "topic": "正方形對角線上分點與長度計算",
        "score": "4分",
        "q": "如圖，$ABCD$ 是正方形，而 $E$ 是對角線 $AC$ 上的一點。若 $EA = 2$ 且 $EC = 4$，則線段 $EB$ 的長度為 $(\\quad)$。",
        "options": [
            "A. 3",
            "B. $\\sqrt{3}$",
            "C. $\\sqrt{10}$",
            "D. $\\sqrt{12}$",
            "E. $\\sqrt{20}$"
        ],
        "knowledge": {
            "formulas": [
                "c^2 = a^2 + b^2 - 2ab\\cos C \\quad (\\text{餘弦定理})",
                "AC = \\sqrt{2} \\cdot AB"
            ],
            "points": [
                "正方形對角線平分內角，$\\angle EAB = 45^\\circ$；由對角線長 $AC = 2 + 4 = 6$ 求出正方形邊長 $AB = 3\\sqrt{2}$。"
            ]
        },
        "solution": {
            "thinking": "求出正方形邊長，在 $\\triangle EAB$ 中利用已知兩邊及夾角 $45^\\circ$，套用餘弦定理求出第三邊 $EB$。",
            "steps": [
                "第一步：對角線總長為 $AC = EA + EC = 2 + 4 = 6$。",
                "第二步：正方形邊長為 $AB = \\frac{AC}{\\sqrt{2}} = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$。",
                "第三步：因對角線平分正方形內角，$\\angle EAB = 45^\\circ$。",
                "第四步：在 $\\triangle EAB$ 中應用餘弦定理：<br>$EB^2 = EA^2 + AB^2 - 2(EA)(AB)\\cos 45^\\circ$。",
                "第五步：代入數值：$EB^2 = 2^2 + (3\\sqrt{2})^2 - 2(2)(3\\sqrt{2}) \\cdot \\frac{\\sqrt{2}}{2} = 4 + 18 - 12 = 10$。",
                "第六步：因此 $EB = \\sqrt{10}$。"
            ],
            "ans": "C",
            "trick": "直角坐標法：以對角線交點 $O$ 為原點，$AC$ 在 $x$ 軸上。$O$ 是 $AC$ 中點，$OA=3, OC=3$。$E$ 距離 $O$ 為 $3-2=1$，故 $E(1, 0)$；$B$ 在 $y$ 軸上，$OB = 3$，故 $B(0, 3)$。兩點距離 $EB = \\sqrt{1^2 + 3^2} = \\sqrt{10}$！秒殺！"
        }
    }
]

deck_obj = {
    "ch": "專題十五 平面幾何",
    "year": "2026",
    "paper": "專題十五",
    "title": "專題十五 平面幾何 — 正多邊形角度定理、正方形對角線性質與幾何長度計算",
    "color": "#14b8a6",
    "sections": [
        "正多邊形內外角關係與邊數求解",
        "正方形對角線分點與餘弦定理計算",
        "解析坐標法巧解平面幾何線段長",
        "相似三角形判定與圓周角幾何"
    ],
    "slides": slides
}

output_js = f"/* 2026 高三理組數學思維本 — 專題十五 平面幾何 ({len(slides)} 題) */\n(function() {{\n  const DECK = window.DECK = window.DECK || [];\n  DECK.push({json.dumps(deck_obj, ensure_ascii=False, indent=2)});\n}})();\n"

with open("demo/ch-senior-15.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print(f"Generated demo/ch-senior-15.js with {len(slides)} slides.")
