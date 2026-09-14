# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ==========================================
# 2021 澳門四校聯考 · 數學附加卷 (5 題)
# ==========================================
sup_2021_slides = [
    # Q1
    {
        "year": "2021", "paper": "附加卷", "qNum": "第1題", "topic": "立體幾何 · 梯形錐體積、點面距離與線面平行垂直證明", "score": "20分",
        "q": "如圖所示，$ABCD$ 為直角梯形，$PA \\perp$ 平面 $ABCD$，$\\angle DAB = \\angle ABC = \\frac{\\pi}{2}$，$|AD| = 1$，$|PA| = |AB| = |BC| = 2$。設 $M$ 為線段 $PC$ 的中點。<br>(a) (i) 求三角形 $PBD$ 的面積。(6分)<br>(ii) 求三棱錐 $P-ABD$ 的體積，從而求點 $A$ 至平面 $PBD$ 的距離。(4分)<br>(b) 證明：<br>(i) $CB \\perp$ 平面 $PAB$。(3分)<br>(ii) $DM$ 與平面 $PAB$ 平行。[提示：設 $N$ 為 $PB$ 的中點，證明 $ADMN$ 是一長方形。](7分)",
        "knowledge": {
            "formulas": ["V = \\frac{1}{3} S_{\\text{底}} h", "|PD| = \\sqrt{|PA|^2 + |AD|^2} = \\sqrt{5}, \\; |BD| = \\sqrt{|AB|^2 + |AD|^2} = \\sqrt{5}, \\; |PB| = 2\\sqrt{2}", "d = \\frac{3V}{S_{\\triangle PBD}} = \\frac{3(2/3)}{\\sqrt{6}} = \\frac{\\sqrt{6}}{3}"],
            "points": ["<b>等腰三角形求面積</b>：$\\triangle PBD$ 中 $|PD| = |BD| = \\sqrt{5}$，底邊 $|PB| = 2\\sqrt{2}$，高 $h = \\sqrt{5 - 2} = \\sqrt{3}$，面積 $S = \\sqrt{6}$。", "<b>等體積法求點面距離</b>：$V_{P-ABD} = V_{A-PBD} \\implies \\frac{1}{3} |PA| S_{\\triangle ABD} = \\frac{1}{3} d S_{\\triangle PBD}$。", "<b>矩形輔助線判定線面平行</b>：取 $PB$ 中點 $N$，中位線 $MN \\parallel BC \\parallel AD$ 且 $|MN| = |AD| = 1$；再由線面垂直得 $AD \\perp AN$，故 $ADMN$ 為矩形，進而 $DM \\parallel AN \\parallel$ 平面 $PAB$！"],
            "pitfall": "證明線面平行時，必須明確指出直線 $AN \\subset$ 平面 $PAB$ 且直線 $DM \\not\\subset$ 平面 $PAB$。"
        },
        "solution": {
            "thinking": "(a) 用勾股定理計算三角形邊長與面積，再用等體積法求點到面的距離；(b) 利用線面垂直判定定理證明，並構造中點矩形證明線線平行進而證得線面平行。",
            "steps": [
                "(a) (i) 在 Rt$\\triangle PAD$ 與 Rt$\\triangle DAB$ 中：",
                "$$|PD| = \\sqrt{|PA|^2 + |AD|^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5} $$",
                "$$|BD| = \\sqrt{|AB|^2 + |AD|^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5} $$",
                "在 Rt$\\triangle PAB$ 中：$|PB| = \\sqrt{|PA|^2 + |AB|^2} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$。",
                "因此 $\\triangle PBD$ 是以 $|PD| = |BD| = \\sqrt{5}$ 的等腰三角形。",
                "以 $PB$ 為底，底邊上的高為：",
                "$$h = \\sqrt{|PD|^2 - \\left(\\frac{|PB|}{2}\\right)^2} = \\sqrt{5 - (\\sqrt{2})^2} = \\sqrt{3} $$",
                "所以 $\\triangle PBD$ 的面積為：",
                "$$S_{\\triangle PBD} = \\frac{1}{2} |PB| \\cdot h = \\frac{1}{2} (2\\sqrt{2})(\\sqrt{3}) = \\sqrt{6} $$",
                "(a) (ii) 三棱錐 $P-ABD$ 的底面是 Rt$\\triangle ABD$，高為 $|PA| = 2$：",
                "$$S_{\\triangle ABD} = \\frac{1}{2} |AB| \\cdot |AD| = \\frac{1}{2} \\times 2 \\times 1 = 1 $$",
                "體積為：",
                "$$V_{P-ABD} = \\frac{1}{3} |PA| \\cdot S_{\\triangle ABD} = \\frac{1}{3} \\times 2 \\times 1 = \\frac{2}{3} $$",
                "設點 $A$ 至平面 $PBD$ 的距離為 $d$，由等體積法 $V_{A-PBD} = V_{P-ABD}$：",
                "$$\\frac{1}{3} d \\cdot S_{\\triangle PBD} = \\frac{2}{3} \\implies d \\sqrt{6} = 2 \\implies d = \\frac{2}{\\sqrt{6}} = \\frac{\\sqrt{6}}{3} $$",
                "(b) (i) $\\because PA \\perp$ 平面 $ABCD$ 且 $CB \\subset$ 平面 $ABCD$，$\\therefore PA \\perp CB$。",
                "又已知梯形中 $\\angle ABC = 90^\\circ \\implies AB \\perp CB$。",
                "因為 $PA$ 與 $AB$ 是平面 $PAB$ 內相交於點 $A$ 的兩條直線，",
                "因此 $CB \\perp$ 平面 $PAB$。",
                "(b) (ii) 設 $N$ 為 $PB$ 的中點。在 $\\triangle PBC$ 中，$M, N$ 分別為 $PC, PB$ 的中點，",
                "由中位線定理：$MN \\parallel BC$ 且 $|MN| = \\frac{1}{2}|BC| = \\frac{1}{2}(2) = 1$。",
                "在梯形 $ABCD$ 中，$AD \\parallel BC$ 且 $|AD| = 1$。",
                "因此 $MN \\parallel AD$ 且 $|MN| = |AD| = 1$，故四邊形 $ADMN$ 是平行四邊形。",
                "由 (b)(i)，$CB \\perp$ 平面 $PAB$，又 $AD \\parallel BC$，故 $AD \\perp$ 平面 $PAB$。",
                "因 $AN \\subset$ 平面 $PAB$，故 $AD \\perp AN$，即 $\\angle DAN = 90^\\circ$。",
                "有一個角為直角的平行四邊形是長方形，因此 $ADMN$ 是一長方形。",
                "從而有 $DM \\parallel AN$。",
                "因為 $AN \\subset$ 平面 $PAB$ 且 $DM \\not\\subset$ 平面 $PAB$，",
                "所以 $DM$ 與平面 $PAB$ 平行。"
            ],
            "ans": "(a)(i) $S = \\sqrt{6}$；(ii) 體積為 $\\frac{2}{3}$，距離 $d = \\frac{\\sqrt{6}}{3}$；(b) 幾何判定定理證畢",
            "quickTip": "等體積法秒求點面距：$d = \\frac{3V}{S} = \\frac{2}{\\sqrt{6}} = \\frac{\\sqrt{6}}{3}$！中點構造矩形 $ADMN$ 秒證線面平行！"
        }
    },
    # Q2 (with dynamic visual!)
    {
        "year": "2021", "paper": "附加卷", "qNum": "第2題", "topic": "微積分 · 三次函數極值拐點、圖像變換與兩曲線圍成面積", "score": "20分",
        "q": "(a) 設 $f(x) = 2x^3 - 9x^2 + 12x - 5$。<br>(i) 求 $f'(x)$ 及 $f''(x)$。(2分)<br>(ii) 求 $f(x)$ 的局部極大值和局部極小值。(4分)<br>(iii) 求曲線 $y = f(x)$ 的拐點。(2分)<br>(iv) 繪出曲線 $y = f(x)$，$-1 \\le x \\le 3$。(3分)<br>(v) 繪出曲線 $y = f(|x|) - 1$，$-1 \\le x \\le 3$。(1分)<br>(b) 求由曲線 $y = -x^2 + 3x$ 及曲線 $y = 2x^3 - x^2 - 5x$ 所包圍的區域的面積。(8分)",
        "knowledge": {
            "formulas": ["f'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)", "f''(x) = 12x - 18 = 6(2x - 3)", "S = \\int_{-2}^0 (2x^3 - 8x)dx + \\int_0^2 (8x - 2x^3)dx = 8 + 8 = 16"],
            "points": ["<b>一階導數判別極值</b>：駐點 $x = 1$（極大值 $f(1) = 0$）與 $x = 2$（極小值 $f(2) = -1$）。", "<b>二階導數判別拐點</b>：$f''(x) = 0 \\implies x = 3/2$，拐點為 $(3/2, -1/2)$。", "<b>絕對值圖像對稱變換</b>：$f(|x|)$ 保留 $y$ 軸右側並對稱翻折到左側，再整體向下平移 1 單位。", "<b>兩曲線交點與分段積分</b>：聯立得交點 $x = -2, 0, 2$；在 $[-2, 0]$ 上三次曲線在上，在 $[0, 2]$ 上拋物線在上，面積對稱各為 8，總面積 16。"],
            "pitfall": "兩曲線相交在 $x = -2, 0, 2$，定積分必須分兩段計算，否則正負抵消算成 0！"
        },
        "visual": """function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📈 動態探究：$f(x) = 2x^3 - 9x^2 + 12x - 5$ 導數極值與切線軌跡
            </div>
            <div id="vis-calc-2021" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>切點位置 $x_0$: <span id="lbl-x0-2021" style="font-weight:bold; color:var(--primary);">1.0</span></label>
              <input type="range" id="rng-x0-2021" min="0" max="3" step="0.1" value="1.0" style="width:100%;">
            </div>
          `;
          function render(x0) {
            const el = host.querySelector('#vis-calc-2021');
            if (!el) return;
            const W = 360, H = 210;
            const ox = 70, oy = 110;
            const kx = 80, ky = 40;

            function f(x) { return 2*x*x*x - 9*x*x + 12*x - 5; }
            function df(x) { return 6*x*x - 18*x + 12; }

            let pts = [];
            for (let px = -0.5; px <= 3.2; px += 0.05) {
              pts.push(`${ox + px*kx},${oy - f(px)*ky}`);
            }

            let y0 = f(x0);
            let slope = df(x0);
            let tx1 = x0 - 0.7, ty1 = y0 - slope * 0.7;
            let tx2 = x0 + 0.7, ty2 = y0 + slope * 0.7;

            el.innerHTML = `
              <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="background:#fff; border:1px solid #ddd; border-radius:8px;">
                <!-- Axes -->
                <line x1="20" y1="${oy}" x2="${W-10}" y2="${oy}" stroke="#333" stroke-width="1.5"/>
                <line x1="${ox}" y1="10" x2="${ox}" y2="${H-10}" stroke="#333" stroke-width="1.5"/>
                <text x="${W-15}" y="${oy+14}" font-size="11" fill="#333">x</text>
                <text x="${ox-12}" y="18" font-size="11" fill="#333">y</text>

                <!-- Key points ticks -->
                <text x="${ox+1*kx-3}" y="${oy+14}" font-size="10" fill="#666">1</text>
                <text x="${ox+2*kx-3}" y="${oy+14}" font-size="10" fill="#666">2</text>
                <line x1="${ox+1*kx}" y1="${oy-2}" x2="${ox+1*kx}" y2="${oy+2}" stroke="#666"/>
                <line x1="${ox+2*kx}" y1="${oy-2}" x2="${ox+2*kx}" y2="${oy+2}" stroke="#666"/>

                <!-- Curve f(x) -->
                <polyline points="${pts.join(' ')}" fill="none" stroke="#2563eb" stroke-width="2.5"/>

                <!-- Extrema points -->
                <circle cx="${ox+1*kx}" cy="${oy - 0*ky}" r="3.5" fill="#16a34a"/>
                <text x="${ox+1*kx-16}" y="${oy-10}" font-size="10" fill="#16a34a" font-weight="bold">極大(1,0)</text>

                <circle cx="${ox+2*kx}" cy="${oy - (-1)*ky}" r="3.5" fill="#dc2626"/>
                <text x="${ox+2*kx-10}" y="${oy - (-1)*ky + 16}" font-size="10" fill="#dc2626" font-weight="bold">極小(2,-1)</text>

                <!-- Inflection point -->
                <circle cx="${ox+1.5*kx}" cy="${oy - (-0.5)*ky}" r="3" fill="#8b5cf6"/>
                <text x="${ox+1.5*kx+6}" y="${oy - (-0.5)*ky+4}" font-size="9" fill="#8b5cf6">拐點(1.5,-0.5)</text>

                <!-- Tangent line at x0 -->
                <line x1="${ox+tx1*kx}" y1="${oy-ty1*ky}" x2="${ox+tx2*kx}" y2="${oy-ty2*ky}" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,2"/>
                <circle cx="${ox+x0*kx}" cy="${oy-y0*ky}" r="4" fill="#ea580c"/>
              </svg>
            `;
          }
          const rng = host.querySelector('#rng-x0-2021');
          const lbl = host.querySelector('#lbl-x0-2021');
          rng.addEventListener('input', (e) => {
            lbl.textContent = parseFloat(e.target.value).toFixed(1);
            render(parseFloat(e.target.value));
          });
          render(1.0);
        }""",
        "solution": {
            "thinking": "(a) 求導判斷單調性與極值，求二階導得拐點，利用絕對值變換畫圖；(b) 聯立求出交點坐標，判斷兩曲線上下的相對位置，分兩段定積分求面積。",
            "steps": [
                "(a) (i) 求導：",
                "$$f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2) $$",
                "$$f''(x) = 12x - 18 = 6(2x - 3) $$",
                "(a) (ii) 令 $f'(x) = 0$，得駐點 $x = 1$ 或 $x = 2$：",
                "當 $x < 1$ 時，$f'(x) > 0$，$f(x)$ 單調遞增；",
                "當 $1 < x < 2$ 時，$f'(x) < 0$，$f(x)$ 單調遞減；",
                "當 $x > 2$ 時，$f'(x) > 0$，$f(x)$ 單調遞增。",
                "因此：",
                "局部極大值為 $f(1) = 2(1)^3 - 9(1)^2 + 12(1) - 5 = 0$；",
                "局部極小值為 $f(2) = 2(8) - 9(4) + 12(2) - 5 = 16 - 36 + 24 - 5 = -1$。",
                "(a) (iii) 令 $f''(x) = 0 \\implies 12x - 18 = 0 \\implies x = \\frac{3}{2}$。",
                "當 $x < \\frac{3}{2}$ 時 $f''(x) < 0$（凸/凹向下），當 $x > \\frac{3}{2}$ 時 $f''(x) > 0$（凹/凹向上），",
                "對應函數值 $f(3/2) = 2(27/8) - 9(9/4) + 12(3/2) - 5 = -\\frac{1}{2}$。",
                "故曲線的拐點為 $\\left(\\frac{3}{2}, -\\frac{1}{2}\\right)$。",
                "(a) (iv) 描點作圖：$f(-1) = -28$，$f(0) = -5$，$f(1) = 0$，$f(2) = -1$，$f(3) = 4$。曲線平滑連接極值點與拐點。",
                "(a) (v) $y = f(|x|) - 1$：將 $x \\ge 0$ 圖像沿 $y$ 軸對稱翻折至左側，再將整體圖像向下平移 1 單位。極值點變為 $(\\pm 1, -1)$，拐點變為 $(\\pm 1.5, -1.5)$，在 $x=0$ 處為尖點 $(0, -6)$。",
                "(b) 聯立兩曲線方程求交點：",
                "$$-x^2 + 3x = 2x^3 - x^2 - 5x \\iff 2x^3 - 8x = 0 \\iff 2x(x^2 - 4) = 0 $$",
                "解得交點橫坐標為 $x = -2, \\; x = 0, \\; x = 2$。",
                "分析區間上下位置：",
                "1. 當 $-2 < x < 0$ 時，三次曲線在上方：$y_1 - y_2 = 2x^3 - 8x$；",
                "2. 當 $0 < x < 2$ 時，拋物線在上方：$y_2 - y_1 = 8x - 2x^3$。",
                "所求面積為分段定積分：",
                "$$S = \\int_{-2}^0 (2x^3 - 8x)dx + \\int_0^2 (8x - 2x^3)dx $$",
                "$$= \\left[\\frac{x^4}{2} - 4x^2\\right]_{-2}^0 + \\left[4x^2 - \\frac{x^4}{2}\\right]_0^2 $$",
                "$$= [0 - (8 - 16)] + [(16 - 8) - 0] = 8 + 8 = 16 $$"
            ],
            "ans": "(a)(i) $f'(x) = 6x^2-18x+12, f''(x) = 12x-18$；(ii) 極大值 0，極小值 $-1$；(iii) 拐點 $(3/2, -1/2)$；(b) 面積為 16",
            "quickTip": "對稱交點 $[-2, 0]$ 與 $[0, 2]$ 面積完全對稱，各為 8，總面積直接 $8 \\times 2 = 16$！"
        }
    },
    # Q3 (with dynamic visual!)
    {
        "year": "2021", "paper": "附加卷", "qNum": "第3題", "topic": "解析幾何 · 拋物線切線、交點坐標與垂直切線軌跡（準線定理）", "score": "20分",
        "q": "已知拋物線 $P: x^2 = 8y$。<br>(a) 若直線 $L: y = mx + c$ 與拋物線 $P$ 相切，證明 $c = -2m^2$。(4分)<br>(b) 設 $L_1$ 及 $L_2$ 為拋物線 $P$ 的兩條不同的切線，其斜率分別為 $m_1$ 及 $m_2$，且相交於點 $A(h, k)$。<br>(i) 求點 $A$，答案以 $m_1$ 及 $m_2$ 表示。(6分)<br>(ii) 若 $L_1$ 及 $L_2$ 的夾角為 $\\frac{\\pi}{2}$，求點 $A$ 的軌跡。(5分)<br>(iii) 若 $L_1$ 及 $L_2$ 的夾角為 $\\frac{\\pi}{4}$ 及 $m_1 = 2$，求點 $A$。(5分)",
        "knowledge": {
            "formulas": ["x^2 = 8(mx + c) \\implies x^2 - 8mx - 8c = 0", "\\Delta = 64m^2 + 32c = 0 \\implies c = -2m^2", "A(h, k) = (2(m_1 + m_2), 2m_1 m_2)", "L_1 \\perp L_2 \\iff m_1 m_2 = -1 \\implies k = -2 \\text{ (準線)}", "\\tan \\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|"],
            "points": ["<b>切線判別式法</b>：方程聯立重根條件 $\\Delta = 0$ 得切線截距 $c = -2m^2$。", "<b>切線交點</b>：由兩切線方程相減求交點 $h = 2(m_1 + m_2), k = 2m_1 m_2$。", "<b>拋物線正交切線定理</b>：夾角為 $90^\\circ$ 則 $m_1 m_2 = -1$，縱坐標恆為 $k = -2$，此即拋物線的<b>準線</b>！", "<b>到角公式求斜率</b>：利用 $\\tan \\frac{\\pi}{4} = 1$ 解出 $m_2 = -3$ 或 $1/3$。"],
            "pitfall": "證明軌跡時，需指出 $h = 2(m_1 - 1/m_1)$ 可以取到全體實數，因此軌跡為整條直線 $y = -2$。"
        },
        "visual": """function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📈 動態探究：拋物線正交切線交點軌跡（準線定理：$y = -2$）
            </div>
            <div id="vis-para-2021" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>切線 $L_1$ 斜率 $m_1$: <span id="lbl-m1-2021" style="font-weight:bold; color:var(--primary);">1.5</span></label>
              <input type="range" id="rng-m1-2021" min="0.4" max="3.0" step="0.1" value="1.5" style="width:100%;">
            </div>
          `;
          function render(m1) {
            const el = host.querySelector('#vis-para-2021');
            if (!el) return;
            const W = 360, H = 220;
            const ox = 180, oy = 140;
            const k = 14; // 1 unit = 14 px

            let m2 = -1 / m1;
            let h = 2 * (m1 + m2);
            let kval = -2;

            // Parabola points: y = x^2 / 8
            let pts = [];
            for (let x = -10; x <= 10; x += 0.5) {
              let y = (x * x) / 8;
              pts.push(`${ox + x*k},${oy - y*k}`);
            }

            // Tangent lines from x = -12 to 12
            let l1_x1 = -10, l1_y1 = m1 * l1_x1 - 2 * m1 * m1;
            let l1_x2 = 10, l1_y2 = m1 * l1_x2 - 2 * m1 * m1;

            let l2_x1 = -10, l2_y1 = m2 * l2_x1 - 2 * m2 * m2;
            let l2_x2 = 10, l2_y2 = m2 * l2_x2 - 2 * m2 * m2;

            el.innerHTML = `
              <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="background:#fff; border:1px solid #ddd; border-radius:8px;">
                <!-- Axes -->
                <line x1="20" y1="${oy}" x2="${W-20}" y2="${oy}" stroke="#999" stroke-width="1"/>
                <line x1="${ox}" y1="10" x2="${ox}" y2="${H-10}" stroke="#999" stroke-width="1"/>
                <text x="${W-25}" y="${oy-6}" font-size="11" fill="#666">x</text>
                <text x="${ox+6}" y="20" font-size="11" fill="#666">y</text>

                <!-- Directrix y = -2 -->
                <line x1="20" y1="${oy - kval*k}" x2="${W-20}" y2="${oy - kval*k}" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
                <text x="25" y="${oy - kval*k - 4}" font-size="10" fill="#dc2626" font-weight="bold">準線 y = -2 (軌跡)</text>

                <!-- Parabola x^2 = 8y -->
                <polyline points="${pts.join(' ')}" fill="none" stroke="#2563eb" stroke-width="2.5"/>

                <!-- Tangent 1 -->
                <line x1="${ox + l1_x1*k}" y1="${oy - l1_y1*k}" x2="${ox + l1_x2*k}" y2="${oy - l1_y2*k}" stroke="#059669" stroke-width="1.8"/>

                <!-- Tangent 2 -->
                <line x1="${ox + l2_x1*k}" y1="${oy - l2_y1*k}" x2="${ox + l2_x2*k}" y2="${oy - l2_y2*k}" stroke="#059669" stroke-width="1.8"/>

                <!-- Intersection point A -->
                <circle cx="${ox + h*k}" cy="${oy - kval*k}" r="5" fill="#ea580c"/>
                <text x="${ox + h*k + 6}" y="${oy - kval*k + 16}" font-size="11" fill="#ea580c" font-weight="bold">A(${h.toFixed(1)}, -2)</text>
              </svg>
            `;
          }
          const rng = host.querySelector('#rng-m1-2021');
          const lbl = host.querySelector('#lbl-m1-2021');
          rng.addEventListener('input', (e) => {
            lbl.textContent = parseFloat(e.target.value).toFixed(1);
            render(parseFloat(e.target.value));
          });
          render(1.5);
        }""",
        "solution": {
            "thinking": "(a) 聯立直線與拋物線方程，由判別式等於 0 證明 $c = -2m^2$；(b)(i) 聯立兩條切線方程求交點坐標；(ii) 由垂直條件 $m_1 m_2 = -1$ 確定縱坐標，分析橫坐標的值域得出軌跡為整條準線；(iii) 用兩直線夾角公式代入 $m_1 = 2$ 解出 $m_2$，計算 $A$ 坐標。",
            "steps": [
                "(a) 將直線 $y = mx + c$ 代入拋物線方程 $x^2 = 8y$：",
                "$$x^2 = 8(mx + c) \\iff x^2 - 8mx - 8c = 0 $$",
                "因為直線與拋物線相切，該方程有唯一重根，其判別式為 0：",
                "$$\\Delta = (-8m)^2 - 4(1)(-8c) = 64m^2 + 32c = 0 $$",
                "$$32c = -64m^2 \\implies c = -2m^2 $$",
                "(b) (i) 設兩條切線方程分別為：",
                "$$L_1: y = m_1 x - 2m_1^2, \\quad L_2: y = m_2 x - 2m_2^2 $$",
                "點 $A(h, k)$ 是兩切線的交點，代入得：",
                "$$\\begin{cases} k = m_1 h - 2m_1^2 \\\\ k = m_2 h - 2m_2^2 \\end{cases} $$",
                "兩式相減：",
                "$$(m_1 - m_2)h - 2(m_1^2 - m_2^2) = 0 $$",
                "因兩直線不同（$m_1 \\ne m_2$），兩邊同除以 $(m_1 - m_2)$：",
                "$$h - 2(m_1 + m_2) = 0 \\implies h = 2(m_1 + m_2) $$",
                "將 $h$ 代回 $k$ 的表達式：",
                "$$k = m_1 [2(m_1 + m_2)] - 2m_1^2 = 2m_1^2 + 2m_1 m_2 - 2m_1^2 = 2m_1 m_2 $$",
                "因此點 $A$ 的坐標為 $(2(m_1 + m_2), 2m_1 m_2)$。",
                "(b) (ii) 若 $L_1 \\perp L_2$，則 $m_1 m_2 = -1$。",
                "代入點 $A$ 的縱坐標：$k = 2m_1 m_2 = 2(-1) = -2$。",
                "此時 $m_2 = -\\frac{1}{m_1}$，橫坐標 $h = 2\\left(m_1 - \\frac{1}{m_1}\\right)$。",
                "考慮以 $m_1$ 為未知數的方程：$2m_1^2 - h m_1 - 2 = 0$。",
                "其判別式 $\\Delta = (-h)^2 - 4(2)(-2) = h^2 + 16 > 0$，對任何實數 $h$ 恆有實數解 $m_1$。",
                "因此 $h$ 可取到全體實數，點 $A$ 的軌跡是直線 $y = -2$（恰為拋物線的準線）。",
                "(b) (iii) 兩直線夾角為 $\\frac{\\pi}{4}$，由夾角正切公式：",
                "$$\\tan \\frac{\\pi}{4} = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| = 1 $$",
                "代入 $m_1 = 2$：",
                "$$\\left|\\frac{2 - m_2}{1 + 2m_2}\\right| = 1 \\iff 2 - m_2 = \\pm(1 + 2m_2) $$",
                "1. 若 $2 - m_2 = 1 + 2m_2 \\implies 3m_2 = 1 \\implies m_2 = \\frac{1}{3}$：",
                "$$h = 2\\left(2 + \\frac{1}{3}\\right) = \\frac{14}{3}, \\quad k = 2(2)\\left(\\frac{1}{3}\\right) = \\frac{4}{3} \\implies A\\left(\\frac{14}{3}, \\frac{4}{3}\\right) $$",
                "2. 若 $2 - m_2 = -(1 + 2m_2) \\implies 2 - m_2 = -1 - 2m_2 \\implies m_2 = -3$：",
                "$$h = 2(2 - 3) = -2, \\quad k = 2(2)(-3) = -12 \\implies A(-2, -12) $$",
                "故點 $A$ 為 $\\left(\\frac{14}{3}, \\frac{4}{3}\\right)$ 或 $(-2, -12)$。"
            ],
            "ans": "(a) 判別式證畢；(b)(i) $A = (2(m_1+m_2), 2m_1m_2)$；(ii) 直線 $y = -2$；(iii) $\\left(\\frac{14}{3}, \\frac{4}{3}\\right)$ 或 $(-2, -12)$",
            "quickTip": "拋物線垂直切線交點必在準線上！$x^2 = 2py \\implies p = 4$，準線 $y = -p/2 = -2$ 秒殺！"
        }
    },
    # Q4
    {
        "year": "2021", "paper": "附加卷", "qNum": "第4題", "topic": "三角恆等式與數學歸納法 · 和差化積與三角級數求和方程求解", "score": "20分",
        "q": "(a) 已知恆等式 $\\sin(X + Y) = \\sin X\\cos Y + \\cos X\\sin Y$，證明恆等式：<br>$$\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2} $$(2分)<br>(b) 設 $A + B + C = \\pi$，證明 $\\sin A + \\sin B + \\sin C = 4\\cos\\frac{A}{2}\\cos\\frac{B}{2}\\cos\\frac{C}{2}$。(7分)<br>(c) (i) 用數學歸納法，證明對任意正整數 $n$：<br>$$2\\sin x [\\cos x + \\cos 3x + \\dots + \\cos(2n-1)x] = \\sin 2nx $$(7分)<br>(ii) 用 (i) 的結果，解 $\\cos x + \\cos 3x + \\cos 5x = 0$，其中 $0 \\le x \\le 2\\pi$。(4分)",
        "knowledge": {
            "formulas": ["\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}", "2\\sin x \\cos(2k+1)x = \\sin(2k+2)x - \\sin 2kx", "\\sin 6x = 0 \\iff 6x = k\\pi \\iff x = \\frac{k\\pi}{6}"],
            "points": ["<b>和差化積推導</b>：令 $X = \\frac{A+B}{2}, Y = \\frac{A-B}{2}$，展開相加即證。", "<b>三角形三角恆等式</b>：前兩項和差化積，第三項用二倍角 $\\sin C = 2\\sin\\frac{C}{2}\\cos\\frac{C}{2}$，提取公因式 $\\cos\\frac{C}{2}$ 再次化積。", "<b>數學歸納法裂項推導</b>：歸納步驟中 $2\\sin x \\cos(2k+1)x = \\sin 2(k+1)x - \\sin 2kx$，與前項 $\\sin 2kx$ 抵消。", "<b>方程轉化與增根排除</b>：原方程等價於 $\\sin 6x = 0$ 且 $\\sin x \\ne 0$。排除 $x = 0, \\pi, 2\\pi$。"],
            "pitfall": "解方程時切記排除使 $\\sin x = 0$ 的點（$x = 0, \\pi, 2\\pi$），因為在這些點 $\\cos x + \\cos 3x + \\cos 5x = 3 \\ne 0$！"
        },
        "solution": {
            "thinking": "(a) 換元展開相加；(b) 兩兩配對和差化積並提取公因式；(c)(i) 數學歸納法標準步驟；(ii) 取 $n=3$，方程化為 $\\sin 6x = 0$ 且 $\\sin x \\ne 0$ 求解。",
            "steps": [
                "(a) 設 $X = \\frac{A + B}{2}, \\; Y = \\frac{A - B}{2}$，則 $X + Y = A, \\; X - Y = B$。",
                "$$\\sin A = \\sin(X + Y) = \\sin X \\cos Y + \\cos X \\sin Y $$",
                "$$\\sin B = \\sin(X - Y) = \\sin X \\cos(-Y) + \\cos X \\sin(-Y) = \\sin X \\cos Y - \\cos X \\sin Y $$",
                "兩式相加得：",
                "$$\\sin A + \\sin B = 2\\sin X \\cos Y = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2} $$",
                "(b) 由 (a) 及 $A + B = \\pi - C$：",
                "$$\\sin A + \\sin B + \\sin C = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2} + 2\\sin\\frac{C}{2}\\cos\\frac{C}{2} $$",
                "$\\because \\sin\\frac{A+B}{2} = \\sin\\left(\\frac{\\pi}{2} - \\frac{C}{2}\\right) = \\cos\\frac{C}{2}$，代入並提公因式：",
                "$$= 2\\cos\\frac{C}{2}\\left(\\cos\\frac{A-B}{2} + \\sin\\frac{C}{2}\\right) $$",
                "又 $\\sin\\frac{C}{2} = \\cos\\frac{A+B}{2}$，括號內再次使用和差化積：",
                "$$\\cos\\frac{A-B}{2} + \\cos\\frac{A+B}{2} = 2\\cos\\frac{A}{2}\\cos\\frac{B}{2} $$",
                "因此：",
                "$$\\sin A + \\sin B + \\sin C = 2\\cos\\frac{C}{2} \\left(2\\cos\\frac{A}{2}\\cos\\frac{B}{2}\\right) = 4\\cos\\frac{A}{2}\\cos\\frac{B}{2}\\cos\\frac{C}{2} $$",
                "(c) (i) 設命題 $P(n)$ 為 $2\\sin x [\\cos x + \\cos 3x + \\dots + \\cos(2n-1)x] = \\sin 2nx$。",
                "1. 當 $n = 1$ 時，左邊 $= 2\\sin x \\cos x = \\sin 2x = $ 右邊，命題成立。",
                "2. 假設當 $n = k$ 時命題成立，即 $2\\sin x \\sum_{i=1}^k \\cos(2i-1)x = \\sin 2kx$。",
                "當 $n = k + 1$ 時：",
                "$$\\text{左邊} = \\sin 2kx + 2\\sin x \\cos(2k + 1)x $$",
                "由積化和差：$2\\sin x \\cos(2k + 1)x = \\sin(2k + 2)x - \\sin 2kx$。",
                "$$\\text{左邊} = \\sin 2kx + [\\sin 2(k + 1)x - \\sin 2kx] = \\sin 2(k + 1)x = \\text{右邊} $$",
                "故當 $n = k + 1$ 時命題亦成立。由數學歸納法，對所有正整數 $n$ 命題均成立。",
                "(c) (ii) 在 (c)(i) 的等式中取 $n = 3$：",
                "$$2\\sin x (\\cos x + \\cos 3x + \\cos 5x) = \\sin 6x $$",
                "當 $x = 0, \\pi, 2\\pi$ 時，$\\cos x + \\cos 3x + \\cos 5x = 1 + 1 + 1 = 3 \\ne 0$（或 $-3 \\ne 0$）。",
                "因此在 $[0, 2\\pi]$ 上，$\\cos x + \\cos 3x + \\cos 5x = 0 \\iff \\sin 6x = 0$ 且 $x \\ne 0, \\pi, 2\\pi$。",
                "解 $\\sin 6x = 0 \\implies 6x = k\\pi \\implies x = \\frac{k\\pi}{6}$ ($k \\in \\mathbb{Z}$)。",
                "在 $[0, 2\\pi]$ 內，排除 $k = 0, 6, 12$：",
                "$$x = \\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\frac{2\\pi}{3}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{4\\pi}{3}, \\frac{3\\pi}{2}, \\frac{5\\pi}{3}, \\frac{11\\pi}{6} $$"
            ],
            "ans": "(a)(b)(c)(i) 恆等式與歸納法證畢；(c)(ii) $x = \\frac{k\\pi}{6}$ ($k \\in \\{1, 2, 3, 4, 5, 7, 8, 9, 10, 11\\}$)",
            "quickTip": "積化和差誘導公式 $2\\sin x (\\cos x + \\cos 3x + \\cos 5x) = \\sin 6x$。解 $\\sin 6x = 0$ 扣除 $\\sin x = 0$ 的點即可！"
        }
    },
    # Q5
    {
        "year": "2021", "paper": "附加卷", "qNum": "第5題", "topic": "高等代數 · 三階行列式因式分解與線性方程組多解條件", "score": "20分",
        "q": "(a) 因式分解行列式：<br>$$\\begin{vmatrix} a & a^2 + 1 & bc \\\\ b & b^2 + 1 & ac \\\\ c & c^2 + 1 & ab \\end{vmatrix} $$(8分)<br>(b) 已知以 $x, y, z$ 為未知量的方程組：<br>$$(E): \\begin{cases} kx + y - z = p \\\\ x + ky + z = q \\\\ -x + y + kz = r \\end{cases} $$其中 $k, p, q, r$ 為常數。<br>(i) 求 $k$ 的取值範圍，使得 $(E)$ 有唯一解。(4分)<br>(ii) 設 $k = 2$，且 $(E)$ 有多於一個解。求 $p, q, r$ 的關係，並於 $p = 5, q = 1, r = -4$ 時，解方程組 $(E)$。(8分)",
        "knowledge": {
            "formulas": ["|A| = (a-b)(b-c)(c-a)(ab + bc + ca - 1)", "|A_{(E)}| = (k + 1)^2(k - 2)", "\\text{唯一解} \\iff |A| \\ne 0 \\iff k \\ne -1 \\text{ 且 } k \\ne 2"],
            "points": ["<b>行列式初等變換</b>：行差化簡提取公因式 $(b - a)$ 與 $(c - a)$，再進一步提取 $(c - b)$ 展開降階。", "<b>克萊姆法則（唯一解條件）</b>：係數行列式 $\\Delta = (k + 1)^2(k - 2) \\ne 0$。", "<b>無窮解相容性條件</b>：當 $k = 2$ 時，方程 (1) 減方程 (2) 得 $x - y - 2z = p - q$；而方程 (3) 為 $-x + y + 2z = r \\iff x - y - 2z = -r$。相容條件為 $p - q = -r \\iff p - q + r = 0$。", "<b>自由變元參數解</b>：引入參數 $t$ 表示通解。"],
            "pitfall": "因式分解行列式時，注意輪換對稱式符號一致性 $(a-b)(b-c)(c-a)$。"
        },
        "solution": {
            "thinking": "(a) 利用行列式性質行變換提取 $(b-a)$ 與 $(c-a)$，進一步因式分解；(b)(i) 計算係數行列式並令其不等於 0；(ii) 代入 $k=2$，利用高斯消元法尋找相容性條件，代入數值用參數表示通解。",
            "steps": [
                "(a) 記原行列式為 $D$。作行變換 $R_2 - R_1 \\to R_2$ 及 $R_3 - R_1 \\to R_3$：",
                "$$D = \\begin{vmatrix} a & a^2 + 1 & bc \\\\ b - a & b^2 - a^2 & c(a - b) \\\\ c - a & c^2 - a^2 & b(a - c) \\end{vmatrix} $$",
                "第二行提取 $(b - a)$，第三行提取 $(c - a)$：",
                "$$D = (b - a)(c - a) \\begin{vmatrix} a & a^2 + 1 & bc \\\\ 1 & b + a & -c \\\\ 1 & c + a & -b \\end{vmatrix} $$",
                "作行變換 $R_3 - R_2 \\to R_3$：",
                "$$= (b - a)(c - a) \\begin{vmatrix} a & a^2 + 1 & bc \\\\ 1 & b + a & -c \\\\ 0 & c - b & c - b \\end{vmatrix} $$",
                "第三行提取 $(c - b)$：",
                "$$= (b - a)(c - a)(c - b) \\begin{vmatrix} a & a^2 + 1 & bc \\\\ 1 & b + a & -c \\\\ 0 & 1 & 1 \\end{vmatrix} $$",
                "作列變換 $C_2 - C_3 \\to C_2$：",
                "$$= (a - b)(b - c)(c - a) \\begin{vmatrix} a & a^2 + 1 - bc & bc \\\\ 1 & a + b + c & -c \\\\ 0 & 0 & 1 \\end{vmatrix} $$",
                "按第三行展開：",
                "$$= (a - b)(b - c)(c - a) [a(a + b + c) - (a^2 + 1 - bc)] $$",
                "$$= (a - b)(b - c)(c - a)(ab + bc + ca - 1) $$",
                "(b) (i) 方程組 $(E)$ 有唯一解的充要條件是係數行列式不為 0：",
                "$$|A| = \\begin{vmatrix} k & 1 & -1 \\\\ 1 & k & 1 \\\\ -1 & 1 & k \\end{vmatrix} $$",
                "計算行列式：",
                "$$|A| = k(k^2 - 1) - 1(k + 1) - 1(1 + k) = k(k-1)(k+1) - 2(k+1) = (k+1)[k(k-1) - 2] $$",
                "$$= (k+1)(k^2 - k - 2) = (k+1)^2(k-2) $$",
                "因此唯一解條件為 $(k+1)^2(k-2) \\ne 0$，即 $k \\ne -1$ 且 $k \\ne 2$。",
                "(b) (ii) 當 $k = 2$ 時，方程組為：",
                "$$\\begin{cases} 2x + y - z = p & (1) \\\\ x + 2y + z = q & (2) \\\\ -x + y + 2z = r & (3) \\end{cases} $$",
                "(1) 式減 (2) 式得：$x - y - 2z = p - q$。",
                "(3) 式乘以 $-1$ 得：$x - y - 2z = -r$。",
                "要使方程組相容（有多於一個解），必有：",
                "$$p - q = -r \\iff p - q + r = 0 $$",
                "當 $p = 5, q = 1, r = -4$ 時，恰滿足 $5 - 1 + (-4) = 0$。",
                "此時聯立 (1) 與 (2)：",
                "$$\\begin{cases} 2x + y = 5 + z \\\\ x + 2y = 1 - z \\end{cases} $$",
                "令 $z = t$（$t$ 為任意實數）。",
                "解二元一次方程組得：$x = 3 + t, \\; y = -1 - t, \\; z = t$。"
            ],
            "ans": "(a) $(a-b)(b-c)(c-a)(ab+bc+ca-1)$；(b)(i) $k \\ne -1$ 且 $k \\ne 2$；(ii) 關係為 $p - q + r = 0$，解為 $(3+t, -1-t, t)$",
            "quickTip": "係數行列式 $|A| = (k+1)^2(k-2) \\ne 0$；$k=2$ 時消元比對係數直接得到相容條件 $p - q + r = 0$！"
        }
    }
]

# Write demo/ch-2021-supp.js
js_content = """/* 2021 澳門四校聯考 · 數學附加卷 (5 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2021 附加卷",
    year: "2021",
    paper: "附加卷",
    title: "2021 澳門四校聯考 數學附加卷",
    color: "#7c3aed",
    sections: ["綜合題 1~5 題（每題20分）"],
    slides: """

slides_str = "[\n"
for i, s in enumerate(sup_2021_slides):
    has_vis = "visual" in s
    vis_val = s.pop("visual") if has_vis else None
    s_json = json.dumps(s, ensure_ascii=False, indent=6)
    if has_vis:
        s_json = s_json[:-1].rstrip() + f',\n      "visual": {vis_val}\n    }}'
    slides_str += "      " + s_json + (",\n" if i < len(sup_2021_slides)-1 else "\n")

js_content += slides_str + "    ]\n  });\n})();\n"

with open("demo/ch-2021-supp.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated demo/ch-2021-supp.js with {len(sup_2021_slides)} slides!")
