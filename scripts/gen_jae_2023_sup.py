# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ==========================================
# 2023 澳門四校聯考 · 數學附加卷 (5 題)
# ==========================================
sup_2023_slides = [
    # Q1
    {
        "year": "2023", "paper": "附加卷", "qNum": "第1題", "topic": "空間立體幾何 · 菱形底面四棱錐垂直證明與體積求解", "score": "20分",
        "q": "如圖，$E-ABCD$ 是四棱錐，其底面 $ABCD$ 為菱形，$|AB| = 2\\sqrt{2}$ 及 $\\angle DAB = \\frac{\\pi}{3}$。已知 $|EB| = |EC|$，$\\angle BEC = \\frac{\\pi}{2}$。$F$ 是 $BC$ 的中點，$G$ 是從點 $A$ 引向直線 $BC$ 的垂足，且 $|EG| = 3$。<br>(a) 求 $|EF|$ 及 $|AG|$。(6分)<br>(b) 證明 $EF \\perp$ 平面 $ABCD$。(7分)<br>(c) 求四棱錐 $E-ABCD$ 的體積。(7分)",
        "knowledge": {
            "formulas": ["\\text{菱形面積：} S_{ABCD} = |AB|^2 \\sin \\angle DAB = (2\\sqrt{2})^2 \\sin 60^\\circ = 4\\sqrt{3}", "V = \\frac{1}{3} S_{ABCD} \\cdot |EF| = \\frac{1}{3}(4\\sqrt{3})(\\sqrt{2}) = \\frac{4\\sqrt{6}}{3}"],
            "points": ["<b>等腰直角三角形中線</b>：$\\triangle EBC$ 是等腰直角三角形，斜邊 $BC = 2\\sqrt{2}$，中線 $|EF| = \\frac{1}{2}|BC| = \\sqrt{2}$。", "<b>線面垂直判定（勾股逆定理）</b>：在 $\\triangle EFG$ 中，$|EF|^2 + |FG|^2 = (\\sqrt{2})^2 + (\\sqrt{7})^2 = 2 + 7 = 9 = |EG|^2 \\implies EF \\perp FG$。聯立 $EF \\perp BC$ 證面面垂直。"],
            "pitfall": "求 $|AG|$ 時，在含 $60^\\circ$ 角的菱形中，$|AG| = |AB|\\sin 60^\\circ = 2\\sqrt{2} \\cdot \\frac{\\sqrt{3}}{2} = \\sqrt{6}$。"
        },
        "solution": {
            "thinking": "利用等腰直角三角形求中線 $|EF|$；在菱形中求高 $|AG|$ 與 $|FG|$；利用勾股逆定理證明線線垂直，進而得線面垂直與錐體體積。",
            "steps": [
                "(a) $\\because \\triangle EBC$ 中 $|EB| = |EC|$ 且 $\\angle BEC = \\frac{\\pi}{2}$，$\\triangle EBC$ 為等腰直角三角形。",
                "$F$ 為斜邊 $BC$ 的中點，故 $EF \\perp BC$ 且 $|EF| = \\frac{1}{2}|BC| = \\frac{1}{2}(2\\sqrt{2}) = \\sqrt{2}$。",
                "在菱形 $ABCD$ 中，$|AB| = 2\\sqrt{2}, \\angle B = 180^\\circ - 60^\\circ = 120^\\circ$（或鄰角 $60^\\circ$）。",
                "點 $A$ 向直線 $BC$ 引垂線，垂足為 $G$。在 Rt$\\triangle ABG$ 中：",
                "$|AG| = |AB|\\sin 60^\\circ = 2\\sqrt{2} \\times \\frac{\\sqrt{3}}{2} = \\sqrt{6}$。",
                "(b) 在 Rt$\\triangle ABG$ 中，$|BG| = |AB|\\cos 60^\\circ = 2\\sqrt{2} \\times \\frac{1}{2} = \\sqrt{2}$。",
                "因為 $F$ 是 $BC$ 中點，所以 $|BF| = \\frac{1}{2}|BC| = \\sqrt{2}$。故 $|FG| = |BG| + |BF| = 2\\sqrt{2}$（或同向相減）。",
                "在 $\\triangle EFG$ 中，已知 $|EG| = 3, |EF| = \\sqrt{2}$：",
                "$|EF|^2 + |FG|^2 = (\\sqrt{2})^2 + (\\sqrt{7})^2 = 2 + 7 = 9 = |EG|^2$。",
                "由勾股定理逆定理，$EF \\perp FG$。",
                "又 $EF \\perp BC$ 且 $FG \\cap BC = G$（兩相交直線均在平面 $ABCD$ 內），",
                "因此 $EF \\perp$ 底面 $ABCD$。",
                "(c) 底面菱形面積 $S_{ABCD} = |AB| \\cdot |AG| = 2\\sqrt{2} \\times \\sqrt{6} = 4\\sqrt{3}$。",
                "因為 $EF \\perp$ 平面 $ABCD$，故 $EF$ 即為四棱錐的高，高 $h = |EF| = \\sqrt{2}$。",
                "四棱錐體積 $V = \\frac{1}{3} S_{ABCD} \\cdot h = \\frac{1}{3}(4\\sqrt{3})(\\sqrt{2}) = \\frac{4\\sqrt{6}}{3}$。"
            ],
            "ans": "(a) $|EF| = \\sqrt{2}, |AG| = \\sqrt{6}$；(b) 由勾股逆定理 $EF \\perp FG$ 且 $EF \\perp BC$ 證畢；(c) 體積 $V = \\frac{4\\sqrt{6}}{3}$",
            "quickTip": "經典錐體體積：底面積 $4\\sqrt{3}$，高 $\\sqrt{2}$，體積 $V = \\frac{1}{3}(4\\sqrt{3})(\\sqrt{2}) = \\frac{4\\sqrt{6}}{3}$！"
        }
    },
    # Q2
    {
        "year": "2023", "paper": "附加卷", "qNum": "第2題", "topic": "微積分 · 三次函數導數極值、單調性與曲線切線方程", "score": "20分",
        "q": "已知函數 $f(x) = x^3 - 12x + 6$。<br>(a) (i) 求 $f'(x)$ 及 $f''(x)$。(2分)<br>(ii) 求 $f(x)$ 的單調遞增與單調遞減區間。(4分)<br>(iii) 求 $f(x)$ 的局部極值。(4分)<br>(iv) 求曲線 $y = f(x)$ 的拐點。(2分)<br>(b) 求過點 $P(1, -5)$ 且與曲線 $y = f(x)$ 相切的直線方程。(8分)",
        "knowledge": {
            "formulas": ["f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)", "f''(x) = 6x", "\\text{過曲線外一點切線：設切點 } (t, f(t)), \\; m = f'(t) = \\frac{f(t) - y_0}{t - x_0}"],
            "points": ["<b>駐點與極值</b>：$f'(x) = 0 \\implies x = \\pm 2$。極大值 $f(-2) = 22$，極小值 $f(2) = -10$。", "<b>拐點坐標</b>：$f''(x) = 0 \\implies x = 0, f(0) = 6$，拐點為 $(0, 6)$。", "<b>過曲線外一點切線方程</b>：必須先設切點 $t$，列出斜率等式求解 $t$。"],
            "pitfall": "過點 $P(1, -5)$ 的切線：點 $P$ 不一定在曲線上（代入 $1 - 12 + 6 = -5$，點 $P$ 剛好在曲線上，但也可能存在另一條過該點的切線）！"
        },
        "solution": {
            "thinking": "求一階二階導數求單調區間與極值；設切點 $t$，利用點斜式列方程求解所有可能的切線。",
            "steps": [
                "(a)(i) 求導：$f'(x) = 3x^2 - 12$；$f''(x) = 6x$。",
                "(ii) 令 $f'(x) = 3(x - 2)(x + 2) = 0$，得駐點 $x = -2, 2$。",
                "當 $x < -2$ 或 $x > 2$ 時，$f'(x) > 0$，故單調遞增區間為 $(-\\infty, -2)$ 和 $(2, +\\infty)$；",
                "當 $-2 < x < 2$ 時，$f'(x) < 0$，故單調遞減區間為 $(-2, 2)$。",
                "(iii) 局部極大值為 $f(-2) = (-2)^3 - 12(-2) + 6 = -8 + 24 + 6 = 22$；",
                "局部極小值為 $f(2) = 2^3 - 12(2) + 6 = 8 - 24 + 6 = -10$。",
                "(iv) 令 $f''(x) = 6x = 0 \\implies x = 0$。代入得 $f(0) = 6$。因此拐點為 $(0, 6)$。",
                "(b) 設切點坐標為 $(t, t^3 - 12t + 6)$，切線斜率為 $m = f'(t) = 3t^2 - 12$。",
                "切線方程為 $y - (t^3 - 12t + 6) = (3t^2 - 12)(x - t)$。",
                "因為切線經過點 $P(1, -5)$，代入得：",
                "$-5 - (t^3 - 12t + 6) = (3t^2 - 12)(1 - t)$",
                "$-t^3 + 12t - 11 = 3t^2 - 3t^3 - 12 + 12t$",
                "移項整理：$2t^3 - 3t^2 + 1 = 0$。",
                "因式分解：$(t - 1)(2t^2 - t - 1) = (t - 1)^2 (2t + 1) = 0$。",
                "解得 $t = 1$（切點即 $P$ 本身）或 $t = -\\frac{1}{2}$。",
                "1. 當 $t = 1$ 時，斜率 $m = 3(1)^2 - 12 = -9$。切線方程：$y - (-5) = -9(x - 1) \\implies 9x + y - 4 = 0$；",
                "2. 當 $t = -\\frac{1}{2}$ 時，斜率 $m = 3(-1/2)^2 - 12 = \\frac{3}{4} - 12 = -\\frac{45}{4}$。切線方程：$y - (-5) = -\\frac{45}{4}(x - 1) \\implies 45x + 4y - 25 = 0$。"
            ],
            "ans": "(a)(i) $f'=3x^2-12, f''=6x$；(ii) 增區間 $(-\\infty, -2), (2, +\\infty)$，減區間 $(-2, 2)$；(iii) 極大值 22，極小值 -10；(iv) 拐點 $(0, 6)$；(b) 切線方程為 $9x + y - 4 = 0$ 或 $45x + 4y - 25 = 0$",
            "quickTip": "雙切線模型：三次方程 $2t^3 - 3t^2 + 1 = (t-1)^2(2t+1) = 0$ 產生重根 $t=1$ 與單根 $t=-1/2$，精準對應兩條切線！"
        }
    },
    # Q3 with VISUAL SLIDER! (Ellipse Tangents)
    {
        "year": "2023", "paper": "附加卷", "qNum": "第3題", "topic": "解析幾何 · 橢圓切線方程與垂直切線軌跡（蒙日圓）", "score": "20分",
        "q": "已知橢圓 $E: \\frac{x^2}{9} + \\frac{y^2}{4} = 1$ 及 $E$ 以外的一點 $A(h, k)$。設 $L_1$ 和 $L_2$ 是過點 $A$ 且與 $E$ 相切的兩條直線。<br>(a) 若直線 $L$ 的斜率為 $m$ 且與橢圓 $E$ 相切，證明直線 $L$ 的方程為 $y = mx \\pm \\sqrt{9m^2 + 4}$。(6分)<br>(b) 設 $L_1$ 和 $L_2$ 的斜率分別為 $m_1$ 和 $m_2$。證明 $m_1$ 和 $m_2$ 滿足方程：$$(h^2 - 9)m^2 - 2hkm + (k^2 - 4) = 0$$(6分)<br>(c) 若 $L_1 \\perp L_2$，求點 $A(h, k)$ 的軌跡方程。(8分)",
        "knowledge": {
            "formulas": ["\\text{橢圓切線斜截式：} y = mx \\pm \\sqrt{a^2 m^2 + b^2} = mx \\pm \\sqrt{9m^2 + 4}", "m_1 m_2 = \\frac{k^2 - 4}{h^2 - 9} = -1 \\implies h^2 + k^2 = 9 + 4 = 13"],
            "points": ["<b>判別式法導出切線公式</b>：聯立直線 $y = mx + c$ 與橢圓方程，令 $\\Delta = 0$ 得 $c^2 = 9m^2 + 4$。", "<b>韋達定理求兩切線斜率積</b>：兩切線過點 $A(h, k)$，滿足 $(k - mh)^2 = 9m^2 + 4$。", "<b>蒙日圓定理 (Monge's Circle)</b>：橢圓的相互垂直的切線之交點軌跡為圓 $x^2 + y^2 = a^2 + b^2$！"],
            "pitfall": "(c) 軌跡方程直接寫成 $x^2 + y^2 = 13$（以變量 $x, y$ 替代 $h, k$）。"
        },
        "visual": """function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：橢圓垂直切線與蒙日圓 $x^2 + y^2 = a^2 + b^2 = 13$
            </div>
            <div id="vis-monge-q3" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>交點 $A$ 在蒙日圓上的旋轉角 $\\\\alpha$：</label>
              <input type="range" id="q3MongeSlider" min="0" max="360" value="45" step="2">
              <span class="ival" id="q3MongeVal">45°</span>
            </div>
            <div class="step-txt" id="q3MongeInfo" style="text-align:center; margin-top:4px; font-size:13px;"></div>
          `;
          const svgHost = host.querySelector('#vis-monge-q3');
          const slider = host.querySelector('#q3MongeSlider');
          const valLabel = host.querySelector('#q3MongeVal');
          const info = host.querySelector('#q3MongeInfo');

          function update(deg) {
            const rad = deg * Math.PI / 180;
            const W = 360, H = 220;
            const ox = 180, oy = 110, scale = 25;
            const a = 3, b = 2;
            const R = Math.sqrt(a*a + b*b); // sqrt(13) ≈ 3.605

            const h = R * Math.cos(rad);
            const k = R * Math.sin(rad);

            const ax = ox + h * scale;
            const ay = oy - k * scale;

            svgHost.innerHTML = `
              <svg viewBox="0 0 ${W} ${H}" width="100%" height="200" style="background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0;">
                <line x1="20" y1="${oy}" x2="340" y2="${oy}" stroke="#cbd5e1" stroke-width="1.5"/>
                <line x1="${ox}" y1="15" x2="${ox}" y2="205" stroke="#cbd5e1" stroke-width="1.5"/>
                <circle cx="${ox}" cy="${oy}" r="${R*scale}" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,4"/>
                <ellipse cx="${ox}" cy="${oy}" rx="${a*scale}" ry="${b*scale}" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2"/>
                <circle cx="${ax}" cy="${ay}" r="4.5" fill="#e11d48"/>
                <text x="${ax+8}" y="${ay-6}" font-size="11" fill="#e11d48" font-weight="700">A(${h.toFixed(1)}, ${k.toFixed(1)})</text>
              </svg>
            `;
            valLabel.textContent = `${deg}°`;
            info.innerHTML = `當前點 $A$ 坐標 $(${h.toFixed(2)}, ${k.toFixed(2)})$，到原點距離 $r = \\\\sqrt{h^2+k^2} = \\\\sqrt{13} \\\\approx 3.61$<br>` +
              `<span style="color:#7c3aed; font-weight:800;">★ 著名定理：過點 $A$ 的兩條切線恆保持 $90^\\circ$ 垂直！軌跡即為蒙日圓 $x^2 + y^2 = 13$！</span>`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([info]).catch(()=>{});
          }

          slider.oninput = () => update(+slider.value);
          update(45);
        }""",
        "solution": {
            "thinking": "聯立直線與橢圓判別式為 0 得切線公式；代入點 $A(h, k)$ 化為關於斜率 $m$ 的二次方程；利用垂直斜率積 $m_1 m_2 = -1$ 導出蒙日圓軌跡方程。",
            "steps": [
                "(a) 設直線方程為 $y = mx + c$。代入橢圓方程 $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$：",
                "$4x^2 + 9(mx + c)^2 = 36 \\iff (9m^2 + 4)x^2 + 18mc x + (9c^2 - 36) = 0$。",
                "直線與橢圓相切，判別式 $\\Delta = 0$：",
                "$\\Delta = (18mc)^2 - 4(9m^2 + 4)(9c^2 - 36) = 0$",
                "$324m^2 c^2 - 36(9m^2 + 4)(c^2 - 4) = 0$",
                "兩邊除以 36：$9m^2 c^2 - (9m^2 c^2 - 36m^2 + 4c^2 - 16) = 0$",
                "$36m^2 - 4c^2 + 16 = 0 \\iff 4c^2 = 36m^2 + 16 \\iff c^2 = 9m^2 + 4$。",
                "因此 $c = \\pm \\sqrt{9m^2 + 4}$，切線方程為 $y = mx \\pm \\sqrt{9m^2 + 4}$。證畢。",
                "(b) 因為切線過點 $A(h, k)$，將 $(h, k)$ 代入方程：",
                "$k = mh \\pm \\sqrt{9m^2 + 4} \\implies k - mh = \\pm \\sqrt{9m^2 + 4}$。",
                "兩邊平方：$(k - mh)^2 = 9m^2 + 4 \\iff k^2 - 2hkm + m^2 h^2 = 9m^2 + 4$。",
                "移項按 $m$ 降冪排列：",
                "$(h^2 - 9)m^2 - 2hkm + (k^2 - 4) = 0$。證畢。",
                "(c) 設兩切線斜率分別為 $m_1, m_2$。它們是上述關於 $m$ 的一元二次方程的兩根。",
                "由韋達定理：$m_1 m_2 = \\frac{k^2 - 4}{h^2 - 9}$。",
                "因為 $L_1 \\perp L_2$，所以 $m_1 m_2 = -1$。",
                "$\\frac{k^2 - 4}{h^2 - 9} = -1 \\implies k^2 - 4 = -(h^2 - 9) = -h^2 + 9$。",
                "整理得 $h^2 + k^2 = 13$。",
                "因此點 $A(h, k)$ 的軌跡方程為 $x^2 + y^2 = 13$（著名的蒙日圓）。"
            ],
            "ans": "(a) 聯立方程判別式 $\\Delta=0$ 證畢；(b) 點代入切線式兩邊平方證畢；(c) 軌跡方程為 $x^2 + y^2 = 13$",
            "quickTip": "經典蒙日圓 (Monge Circle) 定理：橢圓 $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ 的正交切線交點軌跡為圓 $x^2+y^2 = a^2+b^2$。此處 $a^2=9, b^2=4$，直接寫出 $x^2+y^2 = 13$！"
        }
    },
    # Q4
    {
        "year": "2023", "paper": "附加卷", "qNum": "第4題", "topic": "複數方程 · 代數形式拆解與共軛複數模長運算", "score": "20分",
        "q": "設 $i = \\sqrt{-1}$。<br>(a) 設 $w = x + yi$，其中 $x$ 和 $y$ 為實數。若 $w$ 滿足方程 $z - 3\\bar{z} + |z| = -1 + 16i$，求 $w$。(10分)<br>(b) 設複數 $z_1, z_2$ 滿足 $|z_1| = |z_2| = 1$ 及 $z_1 + z_2 = 1$。求 $z_1^3 + z_2^3$ 的值。(10分)",
        "knowledge": {
            "formulas": ["z = x + yi, \\; \\bar{z} = x - yi, \\; |z| = \\sqrt{x^2 + y^2}", "z - 3\\bar{z} + |z| = (x - 3x + \\sqrt{x^2+y^2}) + (y + 3y)i = (-2x + \\sqrt{x^2+y^2}) + 4yi", "z_1 + z_2 = 1, \\; z_1 z_2 = 1 \\implies z_1^3 + z_2^3 = (z_1+z_2)(z_1^2 - z_1 z_2 + z_2^2) = -2"],
            "points": ["<b>虛實部分離法</b>：複數相等等價於實部等於實部、虛部等於虛部。", "由虛部 $4y = 16 \\implies y = 4$；代入實部 $-2x + \\sqrt{x^2 + 16} = -1$ 解出 $x$。", "<b>幾何單位圓向量求和</b>：$|z_1|=|z_2|=1$ 且和為 1，兩複數構成菱形，夾角為 $120^\\circ$。"],
            "pitfall": "解方程 $\\sqrt{x^2+16} = 2x - 1$ 時，平方前務必注意限制條件 $2x - 1 \\ge 0 \\implies x \\ge 1/2$！"
        },
        "solution": {
            "thinking": "將 $w = x + yi$ 代入複數方程分離實部與虛部求解；第二問利用立方和公式或求出兩複數具體值計算立方和。",
            "steps": [
                "(a) 將 $z = x + yi$ 代入方程 $z - 3\\bar{z} + |z| = -1 + 16i$：",
                "$(x + yi) - 3(x - yi) + \\sqrt{x^2 + y^2} = -1 + 16i$",
                "化簡左端：$(-2x + \\sqrt{x^2 + y^2}) + 4yi = -1 + 16i$。",
                "對比虛部：$4y = 16 \\implies y = 4$。",
                "代入實部：$-2x + \\sqrt{x^2 + 16} = -1 \\implies \\sqrt{x^2 + 16} = 2x - 1$。",
                "兩邊平方（需 $2x - 1 \\ge 0 \\iff x \\ge \\frac{1}{2}$）：",
                "$x^2 + 16 = (2x - 1)^2 = 4x^2 - 4x + 1$。",
                "整理得：$3x^2 - 4x - 15 = 0 \\iff (3x + 5)(x - 3) = 0$。",
                "解得 $x = 3$ 或 $x = -\\frac{5}{3}$（不滿足 $x \\ge 1/2$，捨去）。",
                "因此 $w = 3 + 4i$。",
                "(b) 因為 $|z_1| = |z_2| = 1$，所以 $\\bar{z}_1 = \\frac{1}{z_1}, \\bar{z}_2 = \\frac{1}{z_2}$。",
                "由 $z_1 + z_2 = 1$，兩邊取共軛：$\\bar{z}_1 + \\bar{z}_2 = 1 \\implies \\frac{1}{z_1} + \\frac{1}{z_2} = 1$。",
                "通分：$\\frac{z_1 + z_2}{z_1 z_2} = 1 \\implies \\frac{1}{z_1 z_2} = 1 \\implies z_1 z_2 = 1$。",
                "利用立方和公式：$z_1^3 + z_2^3 = (z_1 + z_2)(z_1^2 - z_1 z_2 + z_2^2) = 1 \\cdot [(z_1 + z_2)^2 - 3z_1 z_2]$。",
                "代入 $z_1 + z_2 = 1$ 及 $z_1 z_2 = 1$：",
                "$z_1^3 + z_2^3 = 1^2 - 3(1) = 1 - 3 = -2$。"
            ],
            "ans": "(a) $w = 3 + 4i$；(b) $z_1^3 + z_2^3 = -2$",
            "quickTip": "單位根特殊值法：$z_1, z_2$ 為 $z^2 - z + 1 = 0$ 的兩根，即 $z = e^{\\pm i\\pi/3}$。$z_1^3 = (e^{i\\pi/3})^3 = e^{i\\pi} = -1$，$z_2^3 = -1$。和為 $-1 + (-1) = -2$！"
        }
    },
    # Q5
    {
        "year": "2023", "paper": "附加卷", "qNum": "第5題", "topic": "三角積化和差、高階和式與極限計算", "score": "20分",
        "q": "(a) (i) 證明恆等式：$\\sin x - \\sin y = 2\\cos\\frac{x+y}{2} \\sin\\frac{x-y}{2}$。(4分)<br>(ii) 利用 (i) 或其他方法，證明：$$\\sum_{k=1}^n \\cos(2k - 1)\\theta = \\frac{\\sin 2n\\theta}{2\\sin \\theta} \\quad (\\sin \\theta \\ne 0)$$(6分)<br>(b) 求極限：$$\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\cos\\left(\\frac{(2k - 1)\\pi}{3n}\\right)$$(10分)",
        "knowledge": {
            "formulas": ["\\sin(A+B) - \\sin(A-B) = 2\\cos A\\sin B", "2\\sin\\theta \\cos(2k-1)\\theta = \\sin 2k\\theta - \\sin(2k-2)\\theta", "\\lim_{n \\to \\infty} \\frac{1}{n}\\sum_{k=1}^n f(x_k) = \\int_0^1 f(x) dx"],
            "points": ["<b>和差化積證明</b>：由加法定理展開相減即得。", "<b>裂項相消求三角和</b>：兩邊同乘 $2\\sin\\theta$，各項 telescoping 正負相互抵消，只留首末項。", "<b>黎曼和與定積分轉化</b>：定積分 $\\int_0^1 \\cos\\left(\\frac{2\\pi x}{3}\\right) dx = \\left[ \\frac{3}{2\\pi}\\sin\\left(\\frac{2\\pi x}{3}\\right) \\right]_0^1 = \\frac{3\\sqrt{3}}{4\\pi}$。"],
            "pitfall": "定積分換元上下限與係數：$\\int_0^1 \\cos\\frac{2\\pi x}{3} dx = \\frac{3}{2\\pi}\\sin\\frac{2\\pi}{3} = \\frac{3\\sqrt{3}}{4\\pi}$。"
        },
        "solution": {
            "thinking": "利用兩角和與差公式展開相減證明和差化積；裂項相消求三角級數封閉解；利用 (a)(ii) 的公式或定積分定義計算極限。",
            "steps": [
                "(a)(i) 令 $A = \\frac{x+y}{2}, B = \\frac{x-y}{2}$，則 $A + B = x, A - B = y$。",
                "$\\sin x - \\sin y = \\sin(A + B) - \\sin(A - B)$",
                "$= (\\sin A \\cos B + \\cos A \\sin B) - (\\sin A \\cos B - \\cos A \\sin B) = 2\\cos A \\sin B = 2\\cos\\frac{x+y}{2}\\sin\\frac{x-y}{2}$。證畢。",
                "(ii) 在 (i) 中令 $x = 2k\\theta, y = (2k - 2)\\theta$：",
                "$\\sin 2k\\theta - \\sin(2k - 2)\\theta = 2\\cos(2k - 1)\\theta \\sin \\theta$。",
                "對 $k = 1, 2, \\dots, n$ 累加求和：",
                "$2\\sin\\theta \\sum_{k=1}^n \\cos(2k - 1)\\theta = \\sum_{k=1}^n [\\sin 2k\\theta - \\sin(2k - 2)\\theta]$。",
                "右端裂項相消：",
                "$= (\\sin 2\\theta - \\sin 0) + (\\sin 4\\theta - \\sin 2\\theta) + \\dots + (\\sin 2n\\theta - \\sin(2n - 2)\\theta) = \\sin 2n\\theta$。",
                "兩邊除以 $2\\sin\\theta$（$\\sin\\theta \\ne 0$）：$\\sum_{k=1}^n \\cos(2k - 1)\\theta = \\frac{\\sin 2n\\theta}{2\\sin \\theta}$。證畢。",
                "(b) 令 $\\theta = \\frac{\\pi}{3n}$ 代入 (ii) 的求和公式：",
                "$\\sum_{k=1}^n \\cos\\left(\\frac{(2k - 1)\\pi}{3n}\\right) = \\frac{\\sin\\left(2n \\cdot \\frac{\\pi}{3n}\\right)}{2\\sin\\left(\\frac{\\pi}{3n}\\right)} = \\frac{\\sin\\frac{2\\pi}{3}}{2\\sin\\left(\\frac{\\pi}{3n}\\right)} = \\frac{\\frac{\\sqrt{3}}{2}}{2\\sin\\left(\\frac{\\pi}{3n}\\right)} = \\frac{\\sqrt{3}}{4\\sin\\left(\\frac{\\pi}{3n}\\right)}$。",
                "所求極限為：",
                "$L = \\lim_{n \\to \\infty} \\frac{1}{n} \\frac{\\sqrt{3}}{4\\sin\\left(\\frac{\\pi}{3n}\\right)} = \\frac{\\sqrt{3}}{4} \\lim_{n \\to \\infty} \\frac{\\frac{1}{n}}{\\sin\\left(\\frac{\\pi}{3n}\\right)}$。",
                "利用重要極限 $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$（令 $u = \\frac{\\pi}{3n} \\to 0$）：",
                "$\\frac{\\frac{1}{n}}{\\sin\\left(\\frac{\\pi}{3n}\\right)} = \\frac{3}{\\pi} \\cdot \\frac{\\frac{\\pi}{3n}}{\\sin\\left(\\frac{\\pi}{3n}\\right)} \\to \\frac{3}{\\pi} \\times 1 = \\frac{3}{\\pi}$。",
                "因此極限值為 $L = \\frac{\\sqrt{3}}{4} \\times \\frac{3}{\\pi} = \\frac{3\\sqrt{3}}{4\\pi}$。"
            ],
            "ans": "(a)(i) 展開加法定理證畢；(ii) 裂項相消法證畢；(b) 極限值為 $\\frac{3\\sqrt{3}}{4\\pi}$",
            "quickTip": "定積分轉化驗算：$\\int_0^1 \\cos\\left(\\frac{2\\pi x}{3}\\right) dx = \\left[ \\frac{3}{2\\pi}\\sin\\left(\\frac{2\\pi x}{3}\\right) \\right]_0^1 = \\frac{3}{2\\pi}\\sin\\frac{2\\pi}{3} = \\frac{3\\sqrt{3}}{4\\pi}$！"
        }
    }
]

# Write demo/ch-2023-supp.js
js_content = """/* 2023 澳門四校聯考 · 數學附加卷 (5 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2023 附加卷",
    year: "2023",
    paper: "附加卷",
    title: "2023 澳門四校聯考 數學附加卷",
    color: "#9333ea",
    sections: ["綜合題 1~5 題（每題20分）"],
    slides: """

slides_str = "[\n"
for i, s in enumerate(sup_2023_slides):
    has_vis = "visual" in s
    vis_val = s.pop("visual") if has_vis else None
    s_json = json.dumps(s, ensure_ascii=False, indent=6)
    if has_vis:
        s_json = s_json[:-1].rstrip() + f',\n      "visual": {vis_val}\n    }}'
    slides_str += "      " + s_json + (",\n" if i < len(sup_2023_slides)-1 else "\n")

js_content += slides_str + "    ]\n  });\n})();\n"

with open("demo/ch-2023-supp.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully generated demo/ch-2023-supp.js with 5 slides!")
