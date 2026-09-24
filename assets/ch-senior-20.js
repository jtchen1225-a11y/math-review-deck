/* 2026 高三理組數學思維本 — 專題二十 複數 (4 題) - 支援 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "專題二十 複數",
  "year": "2026",
  "paper": "專題二十",
  "title": "專題二十 複數的代數形式與四則運算、共軛複數、棣美弗定理與複平面幾何",
  "color": "#a855f7",
  "sections": [
    "實係數方程虛根成對定理與待定係數求和",
    "複數極式平方根求解與象限判斷",
    "三次方程韋達定理與共軛複數聯立",
    "棣美弗定理與單位根極式求解",
    "複平面單位根正多邊形面積幾何法"
  ],
  "slides": [
    {
      "year": "2026",
      "paper": "專題二十",
      "qNum": "單選題 第1題",
      "topic": "實係數方程之虛根成對定理與待定係數求和",
      "score": "4分",
      "q": "設 $a, b$ 為實數，且多項式 $f(x) = x^4 + x^3 - ax^2 - 3x + b$。若方程式 $f(x) = 0$ 有一根為 $2 - i$，則 $a + b$ 之值為 $(\\quad)$。",
      "options": [
        "A. 27",
        "B. 33",
        "C. 37",
        "D. 43",
        "E. 47"
      ],
      "knowledge": {
        "formulas": [
          "(x - (2 - i))(x - (2 + i)) = (x - 2)^2 + 1 = x^2 - 4x + 5",
          "\\text{實係數方程虛根成對定理}：f(z) = 0 \\implies f(\\bar{z}) = 0"
        ],
        "points": [
          "<b>虛根成對定理</b>：實係數多項式若有虛根 $2-i$，則其共軛複數 $2+i$ 亦必為根，因此多項式必含有實係數二次因式 $x^2 - 4x + 5$。"
        ]
      },
      "solution": {
        "thinking": "利用虛根成對求出二次因式 $x^2 - 4x + 5$，設商式為 $x^2 + 5x + c$ 展開比對一次項與二次項係數求解 $a$ 與 $b$。",
        "steps": [
          "第一步：因多項式係數均為實數，虛根必成對出現。已知 $2 - i$ 為方程之根，故共軛複數 $2 + i$ 亦必為根。",
          "第二步：構造二次實係數因式：$(x - (2 - i))(x - (2 + i)) = (x - 2)^2 - i^2 = x^2 - 4x + 4 - (-1) = x^2 - 4x + 5$。",
          "第三步：設商式為 $x^2 + 5x + c$（注意 $x^3$ 係數為 $5 - 4 = 1$，與原多項式 $+x^3$ 吻合）：<br>$(x^2 - 4x + 5)(x^2 + 5x + c) = x^4 + x^3 + (c - 15)x^2 + (25 - 4c)x + 5c$。",
          "第四步：比對一次項係數：$25 - 4c = -3 \\implies 4c = 28 \\implies c = 7$。",
          "第五步：比對二次項係數：$-a = c - 15 = 7 - 15 = -8 \\implies a = 8$。",
          "第六步：比對常數項：$b = 5c = 5(7) = 35$。",
          "第七步：計算所求之和：$a + b = 8 + 35 = 43$。"
        ],
        "ans": "D",
        "trick": "因式展開比較係數：$25 - 4c = -3 \\implies c = 7$；$a = 15 - 7 = 8$，$b = 35$；$a + b = 43$，秒選 D！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>D</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二十",
      "qNum": "單選題 第2題",
      "topic": "複數平方根求解與象限判斷",
      "score": "4分",
      "q": "設複數 $z$ 為 $-1 - \\sqrt{3}i$ 的一個平方根且其實部是負數，則 $z$ 的虛部為 $(\\quad)$。",
      "options": [
        "A. $\\frac{\\sqrt{6}}{2}$",
        "B. $-\\frac{\\sqrt{6}}{2}$",
        "C. 0",
        "D. $\\frac{\\sqrt{2}}{2}$",
        "E. $-\\frac{\\sqrt{2}}{2}$"
      ],
      "knowledge": {
        "formulas": [
          "z = r e^{i\\theta} \\implies \\sqrt{z} = \\pm \\sqrt{r} e^{i\\theta/2}",
          "-1 - \\sqrt{3}i = 2\\left(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}\\right)"
        ],
        "points": [
          "<b>極式開方原理</b>：模長開算術平方根，輻角減半；實部負數條件鎖定唯一平方根。"
        ]
      },
      "solution": {
        "thinking": "將 $-1 - \\sqrt{3}i$ 化為極式求出兩個平方根，根據實部為負選取相應根並提取虛部。",
        "steps": [
          "第一步：求複數的模與輻角：模長 $r = \\sqrt{(-1)^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$。<br>主輻角為 $\\theta = 240^\\circ = \\frac{4\\pi}{3}$。",
          "第二步：開平方根：模長為 $\\sqrt{2}$，輻角為 $\\frac{4\\pi/3}{2} = \\frac{2\\pi}{3}$ 及 $\\frac{2\\pi}{3} + \\pi = \\frac{5\\pi}{3}$。",
          "第三步：兩根分別為：<br>$z_1 = \\sqrt{2}\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right) = \\sqrt{2}\\left(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right) = -\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{6}}{2}i$；<br>$z_2 = -z_1 = \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{6}}{2}i$。",
          "第四步：題目要求「實部是負數」，故選取 $z_1 = -\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{6}}{2}i$。",
          "第五步：此時 $z$ 的虛部為 $\\frac{\\sqrt{6}}{2}$。"
        ],
        "ans": "A",
        "trick": "半角公式：$\\cos 120^\\circ = -1/2$，實部 $-\\sqrt{2}/2 < 0$；$\\sin 120^\\circ = \\sqrt{3}/2$，虛部 $\\sqrt{2}\\times\\sqrt{3}/2 = \\sqrt{6}/2$，直接選 A。",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>A</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二十",
      "qNum": "解答題 第3題",
      "topic": "三次多項式方程之複數根與韋達定理",
      "score": "10分",
      "q": "設 $a, b, p$ 為實數，$i^2 = -1$。若 $a + i$ 與 $2 + bi$ 為方程式 $x^3 + px + 20 = 0$ 的兩根。<br>(1) 求 $a, b$ 之值；<br>(2) 求 $p$ 之值；<br>(3) 求方程式的所有根。",
      "options": [],
      "knowledge": {
        "formulas": [
          "x_1 + x_2 + x_3 = 0 \\quad (x^2 \\text{ 係數為 0})",
          "x_1 x_2 x_3 = -20 \\quad (\\text{韋達定理})"
        ],
        "points": [
          "<b>實係數三次方程根的結構</b>：必定有一個實根及一對共軛虛根。因此 $a+i$ 與 $2+bi$ 必須互為共軛複數！"
        ]
      },
      "solution": {
        "thinking": "由實係數方程虛根成對定理立即鎖定 $a+i$ 與 $2+bi$ 互為共軛，再利用三次方程韋達定理求實根與一次項係數 $p$。",
        "steps": [
          "第一步 (1)：因方程式 $x^3 + px + 20 = 0$ 的係數均為實數，非實數虛根必定成對共軛出現。",
          "第二步：已知 $a + i$ 是一虛根，故其共軛複數 $a - i$ 必為另一根。而已知另一根為 $2 + bi$，故必有：$2 + bi = a - i \\implies a = 2, \\quad b = -1$。",
          "第三步 (2)：設第三個根為實數 $r$。根據三次方程韋達定理：<br>三個根之和等於二次項係數的相反數：$(2 + i) + (2 - i) + r = 0 \\implies 4 + r = 0 \\implies r = -4$。",
          "第四步：檢驗常數項：三個根之積為 $(2 + i)(2 - i)(-4) = (4 + 1)(-4) = 5(-4) = -20$，與 $-(-20)$ 吻合。",
          "第五步：由韋達定理求兩兩乘積之和 $p$：<br>$p = (2 + i)(2 - i) + (2 + i)(-4) + (2 - i)(-4) = 5 - 4[(2 + i) + (2 - i)] = 5 - 4(4) = 5 - 16 = -11$。",
          "第六步 (3)：綜上所述，方程式的三個根分別為：$x_1 = 2 + i$，$x_2 = 2 - i$，$x_3 = -4$。"
        ],
        "ans": "(1) $a = 2, b = -1$；(2) $p = -11$；(3) 所有根為 $2 + i, 2 - i, -4$",
        "trick": "秒殺邏輯：共軛直接對齊 $a=2, b=-1$；二階和為 0 即 $4 + r = 0 \\implies r = -4$；$p = 5 - 16 = -11$！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>(1)$a=2,b=−1$；(2)$p=−11$；(3)所有根為$2+i,2−i,−4</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "2026",
      "paper": "專題二十",
      "qNum": "解答題 第13題",
      "topic": "虛數單位立方根的幾何意義與三角形面積",
      "score": "8分",
      "q": "[四校真題] 關於虛數單位 $i$ 的三次方根：<br>(1) 求虛數 $i$ 的 3 個三次方根（以代數形式表示）；<br>(2) 在複數平面上，求以虛數 $i$ 的 3 個三次方根為頂點的三角形的面積。",
      "options": [],
      "knowledge": {
        "formulas": [
          "i = e^{i\\pi/2}",
          "z_k = e^{i(\\frac{\\pi}{6} + \\frac{2k\\pi}{3})} \\quad (k=0,1,2)",
          "S = \\frac{3\\sqrt{3}}{4} R^2"
        ],
        "points": [
          "<b>單位根正多邊形幾何性質</b>：任意複數的 $n$ 個 $n$ 次方根在複平面上均勻分佈在以原點為中心、半徑為 $\\sqrt[n]{r}$ 的圓周上，構成正 $n$ 邊形。"
        ]
      },
      "solution": {
        "thinking": "將 $i$ 寫為歐拉極式利用棣美弗定理求三次方根，由對稱性知其頂點構成外接圓半徑為 1 的正三角形，直接套用正多邊形面積公式。",
        "steps": [
          "第一步 (1)：將 $i$ 化為極式：$i = \\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2} = e^{i\\pi/2}$。",
          "第二步：設 $z^3 = i$，由棣美弗定理：$z_k = \\cos\\left(\\frac{\\pi/2 + 2k\\pi}{3}\\right) + i\\sin\\left(\\frac{\\pi/2 + 2k\\pi}{3}\\right)$，其中 $k = 0, 1, 2$。",
          "第三步：代入 $k$ 值：<br>當 $k = 0$ 時，$z_0 = \\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2} + \\frac{1}{2}i$；<br>當 $k = 1$ 時，$z_1 = \\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i$；<br>當 $k = 2$ 時，$z_2 = \\cos\\frac{9\\pi}{6} + i\\sin\\frac{9\\pi}{6} = \\cos\\frac{3\\pi}{2} + i\\sin\\frac{3\\pi}{2} = -i$。",
          "第四步 (2)：幾何圖形分析：3 個根在複平面上對應的點分別為 $A\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$，$B\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$，$C(0, -1)$。<br>它們都落在單位圓 $|z| = 1$ 上，且圓心角均為 $\\frac{2\\pi}{3} = 120^\\circ$，因此 $\\triangle ABC$ 是正三角形，外接圓半徑 $R = 1$。",
          "第五步：計算正三角形面積：$S = 3 \\times \\left(\\frac{1}{2} R^2 \\sin 120^\\circ\\right) = \\frac{3}{2} \\times 1^2 \\times \\frac{\\sqrt{3}}{2} = \\frac{3\\sqrt{3}}{4}$。"
        ],
        "ans": "(1) $\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i$、$-\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i$、$-i$；(2) 面積為 $\\frac{3\\sqrt{3}}{4}$",
        "trick": "正三角形面積公式：外接圓半徑為 1，面積直接等於 $\\frac{3\\sqrt{3}}{4} R^2 = \\frac{3\\sqrt{3}}{4}$，口算秒得！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"><m:r><m:t>(1)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>i$、$−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>+</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f><m:r><m:t>i$、$−i$；(2)面積為$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>3</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad></m:num><m:den><m:r><m:t>4</m:t></m:r></m:den></m:f></m:oMath>"
      }
    }
  ]
});
})();
