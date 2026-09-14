# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ==========================================
# 2025 澳門四校聯考 · 數學附加卷 (5 題)
# ==========================================
sup_2025_slides = [
    # Q1
    {
        "year": "2025", "paper": "附加卷", "qNum": "第1題", "topic": "空間立體幾何 · 四棱錐體積、二面角與表面積", "score": "20分",
        "q": "在四棱錐 $V-ABCD$ 中，底面 $ABCD$ 是邊長為 $a$ 的正方形。$\\triangle VAD$ 是正三角形，且平面 $VAD$ 垂直於底面 $ABCD$。<br>(a) 設 $M$ 為 $AD$ 的中點，求線段 $VM$（用 $a$ 表示）。(2分)<br>(b) 求四棱錐 $V-ABCD$ 的體積。(4分)<br>(c) 設 $x$ 為平面 $VAD$ 與平面 $VDB$ 的二面角，求 $\\tan x$。(7分)<br>(d) 求四棱錐 $V-ABCD$ 的表面積。(7分)",
        "knowledge": {
            "formulas": ["V = \\frac{1}{3} S_{\\text{底}} h = \\frac{1}{3} a^2 VM", "\\text{面面垂直性質定理：} \\alpha \\perp \\beta, \\; l \\subset \\alpha, \\; l \\perp (\\alpha \\cap \\beta) \\implies l \\perp \\beta", "\\text{二面角求法：三垂線定理或二面角平面角定義}"],
            "points": ["<b>高之求法</b>：$\\triangle VAD$ 為正三角形，中線 $VM \\perp AD$。因面 $VAD \\perp$ 面 $ABCD$，故 $VM \\perp$ 底面 $ABCD$，$VM$ 即為錐體之高！", "<b>二面角構造</b>：取 $VD$ 中點 $P$，連 $AP, BP$，證明 $AP \\perp VD, BP \\perp VD$，則 $\\angle APB = x$ 即為二面角之平面角。"],
            "pitfall": "(d) 小問表面積計算時，千萬不要漏掉底面正方形 $ABCD$ 的面積 $a^2$！"
        },
        "solution": {
            "thinking": "利用正三角形幾何性質求高 $VM$ 與體積；取 $VD$ 中點構造二面角的平面角；逐面計算四個側面與底面的面積總和。",
            "steps": [
                "(a) $\\because \\triangle VAD$ 為邊長為 $a$ 的正三角形，$M$ 為 $AD$ 中點，$\\therefore VM \\perp AD$ 且 $VM = a \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}a$。",
                "(b) $\\because$ 平面 $VAD \\perp$ 底面 $ABCD$ 且交線為 $AD$，$VM \\perp AD$，$\\therefore VM \\perp$ 底面 $ABCD$，即 $VM$ 為四棱錐的高。體積 $V = \\frac{1}{3} S_{ABCD} \\cdot VM = \\frac{1}{3} \\cdot a^2 \\cdot \\frac{\\sqrt{3}}{2}a = \\frac{\\sqrt{3}}{6}a^3$。",
                "(c) 設 $P$ 為 $VD$ 的中點，連接 $AP, BP$。$\\because \\triangle VAD$ 為正三角形，$\\therefore AP \\perp VD$ 且 $AP = \\frac{\\sqrt{3}}{2}a$。",
                "又 $AB \\perp AD$ 且 $AB \\perp VM \\implies AB \\perp$ 平面 $VAD \\implies AB \\perp AP, AB \\perp AV$。在 Rt$\\triangle VAB$ 中，$VB = \\sqrt{VA^2 + AB^2} = \\sqrt{a^2 + a^2} = \\sqrt{2}a$。",
                "在正方形 $ABCD$ 中，$BD = \\sqrt{2}a$。故在 $\\triangle VBD$ 中，$VB = BD = \\sqrt{2}a$ 為等腰三角形，$P$ 為底邊 $VD$ 中點 $\\implies BP \\perp VD$。",
                "因此 $\\angle APB = x$ 即為二面角之平面角。在 Rt$\\triangle PAB$ 中，$\\tan x = \\frac{AB}{AP} = \\frac{a}{\\frac{\\sqrt{3}}{2}a} = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$。",
                "(d) 四個側面與底面面積：",
                "1. 底面 $S_{ABCD} = a^2$；2. $S_{\\triangle VAD} = \\frac{\\sqrt{3}}{4}a^2$；",
                "3. Rt$\\triangle VAB$ 與 Rt$\\triangle VDC$ 全等，面積各自為 $\\frac{1}{2} a^2$，兩者之和為 $a^2$；",
                "4. $\\triangle VBC$ 中，三邊為 $VB = VC = \\sqrt{2}a, BC = a$，高為 $\\sqrt{(\\sqrt{2}a)^2 - (a/2)^2} = \\frac{\\sqrt{7}}{2}a$，面積為 $\\frac{1}{2} \\cdot a \\cdot \\frac{\\sqrt{7}}{2}a = \\frac{\\sqrt{7}}{4}a^2$。",
                "表面積總和 $S = a^2 + \\frac{\\sqrt{3}}{4}a^2 + a^2 + \\frac{\\sqrt{7}}{4}a^2 = 2a^2 + \\frac{\\sqrt{3}+\\sqrt{7}}{4}a^2 = \\frac{8 + \\sqrt{3} + \\sqrt{7}}{4}a^2$。"
            ],
            "ans": "(a) $VM = \\frac{\\sqrt{3}}{2}a$；(b) $V = \\frac{\\sqrt{3}}{6}a^3$；(c) $\\tan x = \\frac{2\\sqrt{3}}{3}$；(d) $S = \\frac{8+\\sqrt{3}+\\sqrt{7}}{4}a^2$",
            "quickTip": "建立空間直角坐標系：以 $M$ 為原點，$MD$ 為 $x$ 軸，$MN \\parallel AB$ 為 $y$ 軸，$MV$ 為 $z$ 軸。法向量 $\\vec{n}_1 = (0, 1, 0)$，求面 $VDB$ 法向量 $\\vec{n}_2$ 後點積直接求二面角餘弦與正切！"
        }
    },
    # Q2 with VISUAL SLIDER!
    {
        "year": "2025", "paper": "附加卷", "qNum": "第2題", "topic": "微積分 · 函數導數、極值拐點、動態切線與定積分面積", "score": "20分",
        "q": "設 $f(x) = x^3 + 3x^2 - 4$。<br>(a) (i) 求 $f(x) = 0$ 的根。(2分)<br>(ii) 求 $f'(x)$ 和 $f''(x)$。(2分)<br>(iii) 求 $f(x)$ 的局部極大值和局部極小值。(4分)<br>(iv) 求曲線 $y = f(x)$ 的拐點。(1分)<br>(v) 繪出曲線 $y = f(x)$ 的圖像（$-3 \\le x \\le 1.2$）。(3分)<br>(b) 求由曲線 $y = x^3 + 3x^2 - 4$ 及曲線 $y = x^3 - 3x + 2$ 所包圍的區域的面積。(8分)",
        "knowledge": {
            "formulas": ["f'(x) = 3x^2 + 6x, \\quad f''(x) = 6x + 6", "S = \\int_a^b [y_{\\text{上}} - y_{\\text{下}}] dx = \\int_{-2}^1 [(-3x^2 - 3x + 6)] dx = \\frac{27}{2}"],
            "points": ["<b>因式分解求零點</b>：$x^3 + 3x^2 - 4 = (x-1)(x+2)^2 = 0$。", "<b>一階導數判別極值</b>：令 $f'(x) = 0$ 得駐點 $x = -2, 0$。$f''(-2) = -6 < 0$（極大值 0），$f''(0) = 6 > 0$（極小值 -4）。", "<b>二階導數求拐點</b>：令 $f''(x) = 0 \\implies x = -1$，拐點坐標為 $(-1, -2)$。"],
            "pitfall": "(b) 問兩曲線包圍面積：務必先聯立方程找出交點積分區間 $[-2, 1]$，並判斷哪條曲線在上哪條在下！"
        },
        "visual": """function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📈 動態探究：$f(x) = x^3 + 3x^2 - 4$ 的切線動態滑動與定積分區域
            </div>
            <div id="vis-calc-q2" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>切點橫坐標 $x_0$：</label>
              <input type="range" id="q2Slider" min="-30" max="12" value="-10" step="1">
              <span class="ival" id="q2XVal">-1.0 (拐點)</span>
            </div>
            <div class="step-txt" id="q2Info" style="text-align:center; margin-top:4px; font-size:13px;"></div>
          `;
          const svgHost = host.querySelector('#vis-calc-q2');
          const slider = host.querySelector('#q2Slider');
          const valLabel = host.querySelector('#q2XVal');
          const info = host.querySelector('#q2Info');

          function f(x) { return x*x*x + 3*x*x - 4; }
          function df(x) { return 3*x*x + 6*x; }

          function update(val) {
            const x0 = val / 10.0;
            const y0 = f(x0);
            const m = df(x0);

            const W = 360, H = 220;
            const ox = 200, oy = 110;
            const sx = 45, sy = 16; // scales

            function toSvg(x, y) { return { x: ox + x * sx, y: oy - y * sy }; }

            // Curve points
            let pathD = '';
            for (let x = -3.2; x <= 1.3; x += 0.05) {
              const pt = toSvg(x, f(x));
              pathD += (pathD === '' ? 'M' : 'L') + `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
            }

            // Tangent line endpoints
            const ptA = toSvg(x0 - 1.2, y0 - 1.2 * m);
            const ptB = toSvg(x0 + 1.2, y0 + 1.2 * m);
            const pt0 = toSvg(x0, y0);
            const maxPt = toSvg(-2, 0);
            const minPt = toSvg(0, -4);
            const infPt = toSvg(-1, -2);

            svgHost.innerHTML = `
              <svg viewBox="0 0 ${W} ${H}" width="100%" height="200" style="background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0;">
                <line x1="20" y1="${oy}" x2="340" y2="${oy}" stroke="#cbd5e1" stroke-width="1.5"/>
                <line x1="${ox}" y1="15" x2="${ox}" y2="205" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="${pathD}" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                <line x1="${ptA.x}" y1="${ptA.y}" x2="${ptB.x}" y2="${ptB.y}" stroke="#e11d48" stroke-width="2"/>
                <circle cx="${pt0.x}" cy="${pt0.y}" r="4.5" fill="#e11d48"/>
                <circle cx="${maxPt.x}" cy="${maxPt.y}" r="3" fill="#059669"/>
                <text x="${maxPt.x-28}" y="${maxPt.y-8}" font-size="10" fill="#059669">極大(-2,0)</text>
                <circle cx="${minPt.x}" cy="${minPt.y}" r="3" fill="#059669"/>
                <text x="${minPt.x+8}" y="${minPt.y+4}" font-size="10" fill="#059669">極小(0,-4)</text>
                <circle cx="${infPt.x}" cy="${infPt.y}" r="3" fill="#7c3aed"/>
                <text x="${infPt.x+8}" y="${infPt.y}" font-size="10" fill="#7c3aed">拐點(-1,-2)</text>
              </svg>
            `;
            valLabel.textContent = `x = ${x0.toFixed(1)}` + (x0 === -1 ? ' (拐點)' : x0 === -2 ? ' (極大值)' : x0 === 0 ? ' (極小值)' : '');
            info.innerHTML = `切點 $(x_0, y_0) = (${x0.toFixed(1)}, ${y0.toFixed(2)})$，即時切線斜率 $f'(x_0) = <b>${m.toFixed(2)}</b>$<br>` +
              (Math.abs(m) < 0.05 ? `<span style="color:#059669; font-weight:800;">★ 導函數為 0：水平切線，對應極值點！</span>` :
               x0 === -1 ? `<span style="color:#7c3aed; font-weight:800;">★ 拐點處凹凸性反轉，二階導數 $f''(-1) = 0$！</span>` :
               '拖曳滑桿觀察沿曲線切線斜率與極值演變');
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([info]).catch(()=>{});
          }

          slider.oninput = () => update(+slider.value);
          update(-10);
        }""",
        "solution": {
            "thinking": "標準微積分大題：因式分解零點、求導找駐點與二階導求拐點；第二問求聯立交點求定積分得面積。",
            "steps": [
                "(a)(i) $f(x) = x^3 + 3x^2 - 4 = (x - 1)(x^2 + 4x + 4) = (x - 1)(x + 2)^2 = 0$，解得根為 $x_1 = 1, x_2 = -2$。",
                "(ii) $f'(x) = 3x^2 + 6x$；$f''(x) = 6x + 6$。",
                "(iii) 令 $f'(x) = 3x(x + 2) = 0$，駐點為 $x = -2$ 及 $x = 0$。",
                "當 $x < -2$ 時 $f'(x) > 0$；$-2 < x < 0$ 時 $f'(x) < 0$；$x > 0$ 時 $f'(x) > 0$。",
                "故局部極大值為 $f(-2) = (-2)^3 + 3(-2)^2 - 4 = 0$；局部極小值為 $f(0) = -4$。",
                "(iv) 令 $f''(x) = 6x + 6 = 0 \\implies x = -1$。代入得 $f(-1) = -1 + 3 - 4 = -2$。故拐點為 $(-1, -2)$。",
                "(v) 根據駐點 $(-2, 0)$、極小點 $(0, -4)$、零點 $(1, 0)$ 及拐點 $(-1, -2)$ 繪出光滑單調區間圖像。",
                "(b) 聯立兩曲線：$x^3 + 3x^2 - 4 = x^3 - 3x + 2 \\iff 3x^2 + 3x - 6 = 0 \\iff 3(x + 2)(x - 1) = 0$。交點為 $x = -2$ 及 $x = 1$。",
                "在區間 $[-2, 1]$ 上，取 $x = 0$ 檢驗：$0^3 - 3(0) + 2 = 2 > 0^3 + 3(0)^2 - 4 = -4$，故上曲線為 $y_1 = x^3 - 3x + 2$。",
                "面積 $S = \\int_{-2}^1 [(x^3 - 3x + 2) - (x^3 + 3x^2 - 4)] dx = \\int_{-2}^1 (-3x^2 - 3x + 6) dx$。",
                "求原函數：$\\left[ -x^3 - \\frac{3}{2}x^2 + 6x \\right]_{-2}^1 = \\left( -1 - \\frac{3}{2} + 6 \\right) - \\left( -(-8) - \\frac{3}{2}(4) + 6(-2) \\right)$",
                "$= \\frac{7}{2} - (8 - 6 - 12) = \\frac{7}{2} - (-10) = \\frac{7}{2} + 10 = \\frac{27}{2}$。"
            ],
            "ans": "(a)(i) $x = 1, -2$；(ii) $f'=3x^2+6x, f''=6x+6$；(iii) 極大值 0，極小值 -4；(iv) 拐點 $(-1, -2)$；(b) 面積 $S = \\frac{27}{2}$",
            "quickTip": "拋物線拱形求積阿基米德公式：兩曲線之差為二次函數 $\\Delta y = -3(x+2)(x-1)$，包圍面積為 $S = \\frac{|a|}{6}(x_2 - x_1)^3 = \\frac{3}{6}(1 - (-2))^3 = \\frac{1}{2} \\times 27 = \\frac{27}{2}$！10 秒完成定積分驗算！"
        }
    },
    # Q3
    {
        "year": "2025", "paper": "附加卷", "qNum": "第3題", "topic": "解析幾何 · 橢圓標準方程、焦點與切線參數求解", "score": "20分",
        "q": "設橢圓 $E: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$) 的右焦點為 $F_1$，經過焦點 $F_1$ 和點 $P(2, 1)$ 的直線 $F_1P$ 與橢圓 $E$ 相交於 $A$ 和 $B$ 兩點，已知 $A(0, -1)$。<br>(a) 求直線 $F_1P$ 的方程。(4分)<br>(b) 求橢圓 $E$ 的兩個焦點 $F_1$ 和 $F_2$ 的坐標。(4分)<br>(c) 求橢圓 $E$ 方程中 $a, b$ 的值。(6分)<br>(d) 設直線 $l$ 與直線 $F_1P$ 平行，且與 $y$ 軸交於點 $(0, m)$。求直線 $l$ 與橢圓 $E$ 相切時 $m$ 的值。(6分)",
        "knowledge": {
            "formulas": ["k = \\frac{y_2 - y_1}{x_2 - x_1}, \\quad a^2 = b^2 + c^2", "\\text{直線與橢圓相切：聯立二次方程判別式 } \\Delta = 0"],
            "points": ["<b>焦點在軸上</b>：右焦點 $F_1(c, 0)$ 必然在 $x$ 軸上，故直線 $F_1P$ 與 $x$ 軸的交點即為 $F_1$。", "<b>頂點與常數關係</b>：點 $A(0, -1)$ 在橢圓上，直接得出 $b = 1$。"],
            "pitfall": "(d) 切線有兩條（對稱於中心），求得 $m^2 = 3$ 務必寫出 $m = \\pm \\sqrt{3}$ 兩個值！"
        },
        "solution": {
            "thinking": "由兩點求直線方程，令 $y=0$ 解出焦點坐標；代入橢圓求 $a,b$；設切線方程聯立橢圓令判別式為 0 解 $m$。",
            "steps": [
                "(a) 直線 $F_1P$ 過點 $A(0, -1)$ 和點 $P(2, 1)$。斜率 $k = \\frac{1 - (-1)}{2 - 0} = \\frac{2}{2} = 1$。由點斜式得方程：$y = x - 1$。",
                "(b) 因為 $F_1$ 是橢圓的右焦點，故 $F_1$ 落在 $x$ 軸正半軸上，即 $F_1(c, 0)$。令 $y = 0$ 代入直線方程 $0 = x - 1 \\implies x = 1$。所以右焦點為 $F_1(1, 0)$，由對稱性得左焦點為 $F_2(-1, 0)$，且 $c = 1$。",
                "(c) 點 $A(0, -1)$ 在橢圓 $E$ 上，代入方程得 $\\frac{0^2}{a^2} + \\frac{(-1)^2}{b^2} = 1 \\implies b^2 = 1 \\implies b = 1$（$b > 0$）。又 $a^2 = b^2 + c^2 = 1^2 + 1^2 = 2$，因為 $a > 0$，所以 $a = \\sqrt{2}$。因此 $a = \\sqrt{2}, b = 1$。",
                "(d) 直線 $l$ 與 $F_1P$ 平行，故其斜率為 1。又交 $y$ 軸於 $(0, m)$，直線方程為 $l: y = x + m$。橢圓方程為 $x^2 + 2y^2 = 2$。",
                "聯立消去 $y$：$x^2 + 2(x + m)^2 = 2 \\implies x^2 + 2(x^2 + 2mx + m^2) = 2 \\implies 3x^2 + 4mx + 2m^2 - 2 = 0$。",
                "直線 $l$ 與橢圓相切，判別式 $\\Delta = 0$：",
                "$\\Delta = (4m)^2 - 4(3)(2m^2 - 2) = 16m^2 - 24m^2 + 24 = -8m^2 + 24 = 0$",
                "$\\implies 8m^2 = 24 \\implies m^2 = 3 \\implies m = \\pm \\sqrt{3}$。"
            ],
            "ans": "(a) $y = x - 1$；(b) $F_1(1, 0), F_2(-1, 0)$；(c) $a = \\sqrt{2}, b = 1$；(d) $m = \\pm \\sqrt{3}$",
            "quickTip": "橢圓切線公式秒殺：斜率為 $k$ 的橢圓切線方程為 $y = kx \\pm \\sqrt{a^2 k^2 + b^2}$。此處 $k=1, a^2=2, b^2=1$，直接得 $m = \\pm \\sqrt{2(1)^2 + 1} = \\pm \\sqrt{3}$！5 秒口算！"
        }
    },
    # Q4 with VISUAL SLIDER!
    {
        "year": "2025", "paper": "附加卷", "qNum": "第4題", "topic": "複數與三角學 · 單位根、棣莫弗定理與三角和式求解", "score": "20分",
        "q": "設 $i = \\sqrt{-1}$。<br>(a) 設 $z = a + bi$，其中 $a, b$ 為實數，且滿足 $b \\ne 0$ 及 $z^3 = 8$，求 $z$。(4分)<br>(b) 對 (a) 中所得 $z$，求 $z^{2024}$。(4分)<br>(c) 設 $w = \\cos \\theta + i \\sin \\theta$，其中 $0 < \\theta < 2\\pi$ 且 $\\theta \\ne \\pi$。對任意正偶數 $n$，證明：$$1 + w + w^2 + w^3 + \\dots + w^n = w^{\\frac{n}{2}} \\frac{\\sin \\frac{(n+1)\\theta}{2}}{\\sin \\frac{\\theta}{2}}$$(4分)<br>(d) 求以下方程在 $0 < \\theta < 2\\pi$ 內的所有實根：$$\\sin \\theta + \\sin 2\\theta + \\sin 3\\theta + \\sin 4\\theta + \\sin 5\\theta + \\sin 6\\theta = 0$$(8分)",
        "knowledge": {
            "formulas": ["z^3 = 8 \\implies z = 2\\left(\\cos\\frac{2k\\pi}{3} + i\\sin\\frac{2k\\pi}{3}\\right)", "1 - e^{i\\alpha} = -2i e^{i\\alpha/2} \\sin\\frac{\\alpha}{2}", "\\sum_{k=1}^6 \\sin(k\\theta) = \\frac{\\sin\\frac{7\\theta}{2} \\sin 3\\theta}{\\sin\\frac{\\theta}{2}} = 0"],
            "points": ["<b>複數立方根</b>：8 的三個立方根為 $2, -1 + \\sqrt{3}i, -1 - \\sqrt{3}i$。由 $b \\ne 0$ 排除實數根 2。", "<b>等比級數求和引理</b>：利用歐拉公式提出半角因子，化為實數正弦之比。", "<b>三角積化和差/虛部提取</b>：將三角和視為複數幾何級數之虛部求解。"],
            "pitfall": "方程實根需在 $(0, 2\\pi)$ 內，注意排除分母為 0 的點 $\\theta = \\pi$！"
        },
        "visual": """function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              🔮 動態探究：$z^3 = 8$ 之根在複平面（Argand 圖）與旋轉對稱
            </div>
            <div id="vis-cplx-q4" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>相位角 $\\\\theta$ 旋轉：</label>
              <input type="range" id="q4Slider" min="0" max="360" value="120" step="5">
              <span class="ival" id="q4AngleVal">120° (-1 + √3i)</span>
            </div>
            <div class="step-txt" id="q4Info" style="text-align:center; margin-top:4px; font-size:13px;"></div>
          `;
          const svgHost = host.querySelector('#vis-cplx-q4');
          const slider = host.querySelector('#q4Slider');
          const valLabel = host.querySelector('#q4AngleVal');
          const info = host.querySelector('#q4Info');

          function update(deg) {
            const rad = deg * Math.PI / 180;
            const W = 360, H = 220;
            const ox = 180, oy = 110, R = 75; // radius for |z| = 2

            const roots = [0, 120, 240];
            const rPts = roots.map(ang => {
              const a = ang * Math.PI / 180;
              return { x: ox + R * Math.cos(a), y: oy - R * Math.sin(a), ang };
            });

            const curX = ox + R * Math.cos(rad);
            const curY = oy - R * Math.sin(rad);

            svgHost.innerHTML = `
              <svg viewBox="0 0 ${W} ${H}" width="100%" height="200" style="background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0;">
                <line x1="20" y1="${oy}" x2="340" y2="${oy}" stroke="#cbd5e1" stroke-width="1.5"/>
                <line x1="${ox}" y1="15" x2="${ox}" y2="205" stroke="#cbd5e1" stroke-width="1.5"/>
                <circle cx="${ox}" cy="${oy}" r="${R}" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/>
                <polygon points="${rPts[0].x},${rPts[0].y} ${rPts[1].x},${rPts[1].y} ${rPts[2].x},${rPts[2].y}" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="1.5"/>
                ${rPts.map((p, idx) => `<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#7c3aed"/><text x="${p.x+6}" y="${p.y-6}" font-size="11" fill="#7c3aed" font-weight="700">z${idx+1}</text>`).join('')}
                <line x1="${ox}" y1="${oy}" x2="${curX}" y2="${curY}" stroke="#e11d48" stroke-width="2.5"/>
                <circle cx="${curX}" cy="${curY}" r="5" fill="#e11d48"/>
              </svg>
            `;
            valLabel.textContent = `${deg}°` + (deg === 120 ? ' (-1 + √3i)' : deg === 240 ? ' (-1 - √3i)' : deg === 0 ? ' (實根 2, 捨去)' : '');
            info.innerHTML = `當前向量：$z = 2(\\\\cos ${deg}^\\\\circ + i\\\\sin ${deg}^\\\\circ)$，模長 $|z| = 2$<br>` +
              (deg === 120 || deg === 240 ? `<span style="color:#7c3aed; font-weight:800;">★ 命中方程 $z^3 = 8$ 的非實數根！三根在複平面構成正三角形！</span>` :
               '拖動滑桿旋轉複數向量，觀察三個立方根的 $120^\\circ$ 旋轉對稱性');
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([info]).catch(()=>{});
          }

          slider.oninput = () => update(+slider.value);
          update(120);
        }""",
        "solution": {
            "thinking": "利用棣莫弗極式求 $z^3=8$ 的虛根；利用等比數列求和與半角技巧證明三角恆等式；將三角和式視為幾何級數虛部解出所有角。",
            "steps": [
                "(a) 方程 $z^3 = 8$。設 $z = r(\\cos\\phi + i\\sin\\phi)$，則 $r^3 = 8 \\implies r = 2$，$3\\phi = 2k\\pi \\implies \\phi = \\frac{2k\\pi}{3}$ ($k = 0, 1, 2$)。",
                "當 $k = 0$ 時 $z = 2$（$b = 0$，捨去）。",
                "當 $k = 1$ 時 $z = 2\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right) = 2\\left(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right) = -1 + \\sqrt{3}i$。",
                "當 $k = 2$ 時 $z = 2\\left(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}\\right) = 2\\left(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i\\right) = -1 - \\sqrt{3}i$。",
                "故 $z = -1 \\pm \\sqrt{3}i$。",
                "(b) 令 $\\omega = -\\frac{1}{2} \\pm \\frac{\\sqrt{3}}{2}i$，則 $z = 2\\omega$，且 $\\omega^3 = 1$。",
                "因 $2024 = 3 \\times 674 + 2$，故 $\\omega^{2024} = (\\omega^3)^{674} \\cdot \\omega^2 = \\omega^2$。",
                "由 $\\omega^2 + \\omega + 1 = 0 \\implies \\omega^2 = -1 - \\omega = -\\frac{1}{2} \\mp \\frac{\\sqrt{3}}{2}i$。",
                "$z^{2024} = 2^{2024} \\omega^2 = 2^{2024}\\left(-\\frac{1}{2} \\mp \\frac{\\sqrt{3}}{2}i\\right) = 2^{2023}(-1 \\mp \\sqrt{3}i)$。",
                "(c) 公比為 $w$ 的等比級數：$1 + w + w^2 + \\dots + w^n = \\frac{1 - w^{n+1}}{1 - w}$。",
                "將 $w = e^{i\\theta}$ 代入：分子 $1 - e^{i(n+1)\\theta} = e^{i\\frac{(n+1)\\theta}{2}}\\left(e^{-i\\frac{(n+1)\\theta}{2}} - e^{i\\frac{(n+1)\\theta}{2}}\\right) = -2i e^{i\\frac{(n+1)\\theta}{2}} \\sin\\frac{(n+1)\\theta}{2}$。",
                "分母 $1 - e^{i\\theta} = e^{i\\frac{\\theta}{2}}\\left(e^{-i\\frac{\\theta}{2}} - e^{i\\frac{\\theta}{2}}\\right) = -2i e^{i\\frac{\\theta}{2}} \\sin\\frac{\\theta}{2}$。",
                "相除得：$\\frac{-2i e^{i(n+1)\\theta/2} \\sin\\frac{(n+1)\\theta}{2}}{-2i e^{i\\theta/2} \\sin\\frac{\\theta}{2}} = e^{i\\frac{n\\theta}{2}} \\frac{\\sin\\frac{(n+1)\\theta}{2}}{\\sin\\frac{\\theta}{2}} = w^{\\frac{n}{2}} \\frac{\\sin\\frac{(n+1)\\theta}{2}}{\\sin\\frac{\\theta}{2}}$。證畢。",
                "(d) 取 $n = 6$（正偶數），由 (c)：$1 + w + \\dots + w^6 = w^3 \\frac{\\sin\\frac{7\\theta}{2}}{\\sin\\frac{\\theta}{2}}$。",
                "兩邊取虛部：左邊虛部為 $\\sin\\theta + \\sin 2\\theta + \\dots + \\sin 6\\theta$；右邊為 $\\text{Im}\\left((\\cos 3\\theta + i\\sin 3\\theta) \\frac{\\sin(7\\theta/2)}{\\sin(\\theta/2)}\\right) = \\sin 3\\theta \\frac{\\sin\\frac{7\\theta}{2}}{\\sin\\frac{\\theta}{2}}$。",
                "故原方程等價於 $\\frac{\\sin 3\\theta \\sin\\frac{7\\theta}{2}}{\\sin\\frac{\\theta}{2}} = 0$。",
                "1. 由 $\\sin 3\\theta = 0 \\implies 3\\theta = k\\pi \\implies \\theta = \\frac{k\\pi}{3}$ ($k = 1, 2, 4, 5$，扣除 $\\theta = \\pi$)；",
                "2. 由 $\\sin\\frac{7\\theta}{2} = 0 \\implies \\frac{7\\theta}{2} = m\\pi \\implies \\theta = \\frac{2m\\pi}{7}$ ($m = 1, 2, 3, 4, 5, 6$)。",
                "合併並排除重合點，$(0, 2\\pi)$ 內的所有實根為：$\\theta \\in \\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\} \\cup \\left\\{\\frac{2\\pi}{7}, \\frac{4\\pi}{7}, \\frac{6\\pi}{7}, \\frac{8\\pi}{7}, \\frac{10\\pi}{7}, \\frac{12\\pi}{7}\\right\\}$。"
            ],
            "ans": "(a) $z = -1 \\pm \\sqrt{3}i$；(b) $z^{2024} = 2^{2023}(-1 \\mp \\sqrt{3}i)$；(c) 歐拉半角因式分解法證畢；(d) $\\theta = \\frac{k\\pi}{3} (k=1,2,4,5)$ 或 $\\frac{2m\\pi}{7} (m=1..6)$",
            "quickTip": "經典三角和公式 $\\sum_{k=1}^n \\sin(k\\theta) = \\frac{\\sin\\frac{(n+1)\\theta}{2} \\sin\\frac{n\\theta}{2}}{\\sin\\frac{\\theta}{2}}$，代入 $n=6$ 直接得 $\\frac{\\sin(7\\theta/2)\\sin(3\\theta)}{\\sin(\\theta/2)} = 0$，立得兩組根！"
        }
    },
    # Q5
    {
        "year": "2025", "paper": "附加卷", "qNum": "第5題", "topic": "線性代數 · 矩陣行列式因式分解與線性方程組解的判定", "score": "20分",
        "q": "設矩陣 $C = \\begin{pmatrix} a+b & b+c & c+a \\\\ a-b & b-c & c-a \\\\ b & a & c \\end{pmatrix}$。<br>(a) (i) 求行列式 $|C|$。(4分)<br>(ii) 求方程 $|C| = 0$ 的所有實數解組 $(a, b, c)$。(4分)<br>(b) 設 $k, p$ 和 $q$ 為常數，及 $(E)$ 是以 $x, y$ 和 $z$ 為未知量的方程組：$$(E): \\begin{cases} kx + 2y - z = p \\\\ ky + z = q \\\\ kx + 3y = 6 \\end{cases}$$<br>(i) 求 $k$ 的取值範圍，使得 $(E)$ 有唯一解。(4分)<br>(ii) 當 $(E)$ 有多於一個解時，求 $p$ 和 $q$ 的關係，並寫出方程 $(E)$ 的解。(8分)",
        "knowledge": {
            "formulas": ["|C| = -(a+b+c)[(a-b)^2 + (b-c)^2 + (a-c)^2]", "D = \\det \\begin{pmatrix} k & 2 & -1 \\\\ 0 & k & 1 \\\\ k & 3 & 0 \\end{pmatrix} = k(k-1)", "\\text{克萊姆法則：} D \\ne 0 \\iff \\text{方程組有唯一解}"],
            "points": ["<b>行列式初等行變換技巧</b>：行相加消元提公因式 $(a+b+c)$。", "<b>實數平方和恆正性</b>：$(a-b)^2 + (b-c)^2 + (a-c)^2 = 0 \\iff a = b = c$。", "<b>增廣矩陣秩判定方程組解</b>：當係數行列式 $D = 0$ 時，討論無窮解之相容條件。"],
            "pitfall": "(b)(ii) 寫方程組解時必須引入自由參數（如設 $y = t$ 或 $z = t$），以參數形式表達通解！"
        },
        "solution": {
            "thinking": "利用行列式性質初等變換因式分解 $|C|$；分析實數為 0 的條件；利用係數行列式判斷線性方程組唯一解，高斯消元求無窮多解的相容性與參數通解。",
            "steps": [
                "(a)(i) 計算行列式 $|C|$：",
                "將第 1 行加上第 2 行：$R_1 + R_2 = (2a, 2b, 2c) = 2(a, b, c)$。",
                "提出公因子 2 後進行列運算化簡，可因式分解為：$|C| = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = \\frac{1}{2}(a + b + c)[(a - b)^2 + (b - c)^2 + (a - c)^2]$。",
                "(ii) $|C| = 0 \\iff a + b + c = 0$ 或 $(a - b)^2 + (b - c)^2 + (a - c)^2 = 0$。",
                "由實數平方性質，第二個因式為 0 當且僅當 $a = b = c$。",
                "因此所有實數解組為：$(a, b, c) = (r, s, -r-s)$（其中 $r, s \\in \\mathbb{R}$）或 $(a, b, c) = (t, t, t)$（其中 $t \\in \\mathbb{R}$）。",
                "(b)(i) 方程組 $(E)$ 的係數矩陣行列式：",
                "$D = \\begin{vmatrix} k & 2 & -1 \\\\ 0 & k & 1 \\\\ k & 3 & 0 \\end{vmatrix}$。按第 3 列展開：$-1(0 - k^2) - 1(3k - 2k) = k^2 - k = k(k - 1)$。",
                "由克萊姆法則，$(E)$ 有唯一解當且僅當 $D \\ne 0$，即 $k(k - 1) \\ne 0 \\iff k \\ne 0$ 且 $k \\ne 1$。",
                "(ii) 當方程組有多於一個解時，必須 $D = 0$，即 $k = 0$ 或 $k = 1$。",
                "情形 1：$k = 0$ 時，方程組變為 $\\begin{cases} 2y - z = p \\\\ z = q \\\\ 3y = 6 \\end{cases}$。由第 3 式得 $y = 2$；代入第 2 式得 $z = q$；代入第 1 式得 $2(2) - q = p \\implies p + q = 4$。此時 $x$ 為任意實數 $t$。解為 $(x, y, z) = (t, 2, q)$ ($t \\in \\mathbb{R}$)。",
                "情形 2：$k = 1$ 時，方程組變為 $\\begin{cases} x + 2y - z = p \\\\ y + z = q \\\\ x + 3y = 6 \\end{cases}$。第 1 式加上第 2 式得 $x + 3y = p + q$。與第 3 式 $x + 3y = 6$ 對比，相容條件為 $p + q = 6$。此時設 $z = t$，則 $y = q - t, x = 6 - 3(q - t) = 6 - 3q + 3t$。解為 $(x, y, z) = (6 - 3q + 3t, q - t, t)$ ($t \\in \\mathbb{R}$)。"
            ],
            "ans": "(a)(i) $|C| = \\frac{1}{2}(a+b+c)[(a-b)^2+(b-c)^2+(c-a)^2]$；(ii) $a+b+c=0$ 或 $a=b=c$；(b)(i) $k \\ne 0$ 且 $k \\ne 1$；(b)(ii) 若 $k=0$ 則 $p+q=4$，解為 $(t, 2, q)$；若 $k=1$ 則 $p+q=6$，解為 $(6-3q+3t, q-t, t)$",
            "quickTip": "經典代數恆等式：$a^3+b^3+c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$，見到輪換對稱行列式直接聯想因式分解！"
        }
    }
]

# Write demo/ch-2025-supp.js
js_content = """/* 2025 澳門四校聯考 · 數學附加卷 (5 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2025 附加卷",
    year: "2025",
    paper: "附加卷",
    title: "2025 澳門四校聯考 數學附加卷",
    color: "#7c3aed",
    sections: ["綜合題 1~5 題（每題20分）"],
    slides: """

slides_str = "[\n"
for i, s in enumerate(sup_2025_slides):
    has_vis = "visual" in s
    vis_val = s.pop("visual") if has_vis else None
    s_json = json.dumps(s, ensure_ascii=False, indent=6)
    if has_vis:
        s_json = s_json[:-1].rstrip() + f',\n      "visual": {vis_val}\n    }}'
    slides_str += "      " + s_json + (",\n" if i < len(sup_2025_slides)-1 else "\n")

js_content += slides_str + "    ]\n  });\n})();\n"

with open("demo/ch-2025-supp.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully generated demo/ch-2025-supp.js with 5 slides!")
