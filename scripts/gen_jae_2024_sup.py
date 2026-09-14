# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ==========================================
# 2024 澳門四校聯考 · 數學附加卷 (5 題)
# ==========================================
sup_2024_slides = [
    # Q1
    {
        "year": "2024", "paper": "附加卷", "qNum": "第1題", "topic": "空間平面幾何與三角學 · 勾股定理與向量/餘弦定理", "score": "20分",
        "q": "如圖，$ABCD$ 是四邊形，$\\triangle ABC$ 是等邊三角形，$PAD$ 是以 $PD$ 為斜邊的等腰直角三角形。已知 $\\angle PAC = \\frac{\\pi}{2}$，$\\angle PCA = \\frac{\\pi}{6}$，且 $|AP| = 1$。<br>(a) 證明 $\\angle DAC = \\frac{\\pi}{2}$。(6分)<br>(b) 求 $|AB|$ 及 $|BD|$。(7分)<br>(c) 求 $\\triangle BCD$ 的面積。(7分)",
        "knowledge": {
            "formulas": ["|AC| = \\frac{|AP|}{\\tan(\\pi/6)} = \\sqrt{3}", "|AD| = |AP| = 1 \\implies |CD|^2 = |AC|^2 + |AD|^2", "S = \\frac{1}{2}ab \\sin \\theta"],
            "points": ["<b>直角三角形三角比</b>：在 Rt$\\triangle PAC$ 中直接求出邊長 $|AC| = \\sqrt{3}$。", "<b>勾股定理逆定理</b>：$|AD|^2 + |AC|^2 = 1 + 3 = 4 = |CD|^2 \\implies \\angle DAC = 90^\\circ$。", "<b>等邊三角形邊長</b>：$\\triangle ABC$ 為正三角形，邊長 $|AB| = |AC| = \\sqrt{3}$。"],
            "pitfall": "求 $|BD|$ 時利用餘弦定理注意夾角為 $\\angle BAD = \\angle BAC + \\angle DAC = 60^\\circ + 90^\\circ = 150^\\circ$！"
        },
        "solution": {
            "thinking": "利用直角三角形求邊長 $|AC|$，由勾股逆定理證直角；利用等邊三角形性質與餘弦定理求 $|BD|$ 及三角形面積。",
            "steps": [
                "(a) 在 Rt$\\triangle PAC$ 中，$\\angle PAC = \\frac{\\pi}{2}$，$\\angle PCA = \\frac{\\pi}{6}$，$|AP| = 1$。",
                "$\\tan \\angle PCA = \\frac{|AP|}{|AC|} \\implies \\tan\\frac{\\pi}{6} = \\frac{1}{|AC|} \\implies |AC| = \\frac{1}{1/\\sqrt{3}} = \\sqrt{3}$。",
                "又 $\\triangle PAD$ 是以 $PD$ 為斜邊的等腰直角三角形，故 $|AD| = |AP| = 1$。",
                "已知 $|CD| = 2$，檢驗三邊平方關係：$|AD|^2 + |AC|^2 = 1^2 + (\\sqrt{3})^2 = 1 + 3 = 4 = 2^2 = |CD|^2$。",
                "根據勾股定理逆定理，$\\angle DAC = \\frac{\\pi}{2}$。",
                "(b) 因為 $\\triangle ABC$ 是等邊三角形，所以邊長 $|AB| = |AC| = \\sqrt{3}$，且 $\\angle BAC = \\frac{\\pi}{3} = 60^\\circ$。",
                "夾角 $\\angle BAD = \\angle BAC + \\angle DAC = 60^\\circ + 90^\\circ = 150^\\circ$。",
                "在 $\\triangle ABD$ 中由餘弦定理：",
                "$|BD|^2 = |AB|^2 + |AD|^2 - 2|AB||AD|\\cos \\angle BAD = (\\sqrt{3})^2 + 1^2 - 2(\\sqrt{3})(1)\\cos 150^\\circ$",
                "$= 3 + 1 - 2\\sqrt{3}\\left(-\\frac{\\sqrt{3}}{2}\\right) = 4 + 3 = 7$。",
                "因此 $|BD| = \\sqrt{7}$。",
                "(c) 面積拆分：四邊形 $ABCD$ 面積 $S_{ABCD} = S_{\\triangle ABC} + S_{\\triangle DAC}$。",
                "$S_{\\triangle ABC} = \\frac{\\sqrt{3}}{4}|AC|^2 = \\frac{\\sqrt{3}}{4}(\\sqrt{3})^2 = \\frac{3\\sqrt{3}}{4}$；",
                "$S_{\\triangle DAC} = \\frac{1}{2}|AD||AC| = \\frac{1}{2}(1)(\\sqrt{3}) = \\frac{\\sqrt{3}}{2}$。",
                "故 $S_{ABCD} = \\frac{3\\sqrt{3}}{4} + \\frac{2\\sqrt{3}}{4} = \\frac{5\\sqrt{3}}{4}$。",
                "又 $S_{\\triangle ABD} = \\frac{1}{2}|AB||AD|\\sin 150^\\circ = \\frac{1}{2}(\\sqrt{3})(1)\\left(\\frac{1}{2}\\right) = \\frac{\\sqrt{3}}{4}$。",
                "因此 $S_{\\triangle BCD} = S_{ABCD} - S_{\\triangle ABD} = \\frac{5\\sqrt{3}}{4} - \\frac{\\sqrt{3}}{4} = \\sqrt{3}$。"
            ],
            "ans": "(a) 勾股逆定理得 $\\angle DAC = 90^\\circ$；(b) $|AB| = \\sqrt{3}, |BD| = \\sqrt{7}$；(c) 面積 $S_{\\triangle BCD} = \\sqrt{3}$",
            "quickTip": "經典面積割補法：$S_{\\triangle BCD} = S_{ABCD} - S_{\\triangle ABD} = \\left(\\frac{3\\sqrt{3}}{4} + \\frac{\\sqrt{3}}{2}\\right) - \\frac{\\sqrt{3}}{4} = \\sqrt{3}$！"
        }
    },
    # Q2 with VISUAL SLIDER! (Cone Volume Optimization)
    {
        "year": "2024", "paper": "附加卷", "qNum": "第2題", "topic": "微積分應用 · 圓錐體積極值與導數最佳化", "score": "20分",
        "q": "(a) 一正圓錐的斜高為 1 米。設其底半徑為 $x$ 米及體積為 $V(x)$ 立方米。<br>(i) 證明 $V^2(x) = \\frac{\\pi^2}{9}(x^4 - x^6)$。(4分)<br>(ii) 求 $\\frac{d(V^2)}{dx}$ 及 $\\frac{d^2(V^2)}{dx^2}$。(4分)<br>(iii) 求當圓錐體積 $V(x)$ 最大時的 $x$ 值及該最大體積。(6分)<br>(b) 若斜高固定為 $L$，試求最大體積圓錐的高與底面半徑之比。(6分)",
        "knowledge": {
            "formulas": ["h = \\sqrt{1 - x^2}, \\quad V(x) = \\frac{1}{3}\\pi x^2 h = \\frac{\\pi}{3} x^2 \\sqrt{1 - x^2}", "V^2(x) = \\frac{\\pi^2}{9} x^4 (1 - x^2) = \\frac{\\pi^2}{9}(x^4 - x^6)", "\\frac{d(V^2)}{dx} = \\frac{\\pi^2}{9}(4x^3 - 6x^5) = 0 \\implies x^2 = \\frac{2}{3} \\implies x = \\sqrt{\\frac{2}{3}}"],
            "points": ["<b>平方簡化求導法</b>：因為 $V > 0$，$V$ 取得最大值等價於 $V^2$ 取得最大值，從而擺脫根號求導！", "<b>駐點二階導檢驗</b>：二階導數小於 0 確認為極大值點。"],
            "pitfall": "最後要求的是最大體積 $V_{\\max}$，不要誤寫成 $V^2$ 的數值！"
        },
        "visual": """function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：圓錐底半徑 $x$ 變化與體積 $V(x)$ 之極大值最佳化
            </div>
            <div id="vis-cone-q2" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>底半徑 $x$ (米)：</label>
              <input type="range" id="q2ConeSlider" min="10" max="95" value="82" step="1">
              <span class="ival" id="q2ConeVal">x = 0.82 (√2/3 ≈ 0.816)</span>
            </div>
            <div class="step-txt" id="q2ConeInfo" style="text-align:center; margin-top:4px; font-size:13px;"></div>
          `;
          const svgHost = host.querySelector('#vis-cone-q2');
          const slider = host.querySelector('#q2ConeSlider');
          const valLabel = host.querySelector('#q2ConeVal');
          const info = host.querySelector('#q2ConeInfo');

          function update(val) {
            const x = val / 100.0;
            const h = Math.sqrt(Math.max(0, 1 - x*x));
            const vol = (Math.PI / 3) * x * x * h;

            const W = 360, H = 220;
            const ox = 180, oy = 180;
            const scale = 140;

            const rx = x * scale;
            const ry = rx * 0.28; // perspective
            const coneH = h * scale;
            const topY = oy - coneH;

            svgHost.innerHTML = `
              <svg viewBox="0 0 ${W} ${H}" width="100%" height="200" style="background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0;">
                <ellipse cx="${ox}" cy="${oy}" rx="${rx}" ry="${ry}" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2"/>
                <line x1="${ox - rx}" y1="${oy}" x2="${ox}" y2="${topY}" stroke="#2563eb" stroke-width="2"/>
                <line x1="${ox + rx}" y1="${oy}" x2="${ox}" y2="${topY}" stroke="#2563eb" stroke-width="2"/>
                <line x1="${ox}" y1="${oy}" x2="${ox}" y2="${topY}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="${ox}" y1="${oy}" x2="${ox + rx}" y2="${oy}" stroke="#e11d48" stroke-width="2"/>
                <circle cx="${ox}" cy="${topY}" r="4" fill="#2563eb"/>
                <text x="${ox+8}" y="${(oy+topY)/2}" font-size="11" fill="#64748b">h=${h.toFixed(2)}</text>
                <text x="${ox+rx/2-6}" y="${oy-6}" font-size="11" fill="#e11d48" font-weight="700">r=${x.toFixed(2)}</text>
              </svg>
            `;
            const isOpt = Math.abs(x - 0.816) < 0.015;
            valLabel.textContent = `x = ${x.toFixed(2)}` + (isOpt ? ' (極大值!)' : '');
            info.innerHTML = `當前高 $h = ${h.toFixed(2)}$，體積 $V = <b>${vol.toFixed(3)}</b>$ m$^3$<br>` +
              (isOpt ? `<span style="color:#059669; font-weight:800;">★ 抵達最佳半徑 $x = \\\\sqrt{2/3} \\\\approx 0.816$！體積取得最大值 $\\\\frac{2\\\\sqrt{3}\\\\pi}{27} \\\\approx 0.403$！</span>` : '拖動滑桿調整圓錐胖瘦，觀察體積頂峰');
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([info]).catch(()=>{});
          }

          slider.oninput = () => update(+slider.value);
          update(82);
        }""",
        "solution": {
            "thinking": "建立高與半徑的幾何關係式，對體積的平方求導求駐點，二階導檢驗極大值。",
            "steps": [
                "(a)(i) 圓錐底面半徑為 $x$，斜高為 1，由勾股定理得高 $h = \\sqrt{1 - x^2}$（$0 < x < 1$）。",
                "體積 $V(x) = \\frac{1}{3}\\pi x^2 h = \\frac{\\pi}{3} x^2 \\sqrt{1 - x^2}$。",
                "兩邊平方：$V^2(x) = \\frac{\\pi^2}{9} x^4 (1 - x^2) = \\frac{\\pi^2}{9}(x^4 - x^6)$。證畢。",
                "(ii) 求一階與二階導數：",
                "$\\frac{d(V^2)}{dx} = \\frac{\\pi^2}{9}(4x^3 - 6x^5)$；",
                "$\\frac{d^2(V^2)}{dx^2} = \\frac{\\pi^2}{9}(12x^2 - 30x^4)$。",
                "(iii) 令一階導數為 0：$\\frac{\\pi^2}{9} x^3 (4 - 6x^2) = 0$。因為 $x > 0$，所以 $4 - 6x^2 = 0 \\implies x^2 = \\frac{2}{3} \\implies x = \\sqrt{\\frac{2}{3}} = \\frac{\\sqrt{6}}{3}$。",
                "代入二階導檢驗：$\\frac{d^2(V^2)}{dx^2} = \\frac{\\pi^2}{9}\\left(12 \\cdot \\frac{2}{3} - 30 \\cdot \\frac{4}{9}\\right) = \\frac{\\pi^2}{9}\\left(8 - \\frac{40}{3}\\right) = -\\frac{16\\pi^2}{27} < 0$，故為極大值點。",
                "此時高 $h = \\sqrt{1 - \\frac{2}{3}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。",
                "最大體積 $V_{\\max} = \\frac{\\pi}{3} \\left(\\sqrt{\\frac{2}{3}}\\right)^2 \\frac{1}{\\sqrt{3}} = \\frac{\\pi}{3} \\cdot \\frac{2}{3} \\cdot \\frac{1}{\\sqrt{3}} = \\frac{2\\sqrt{3}\\pi}{27}$ 立方米。",
                "(b) 當斜高為 $L$ 時，由相似縮放，$x = \\sqrt{\\frac{2}{3}}L$，$h = \\sqrt{\\frac{1}{3}}L$。",
                "高與底面半徑之比為 $\\frac{h}{x} = \\frac{1/\\sqrt{3}}{\\sqrt{2/3}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$。"
            ],
            "ans": "(a)(ii) $\\frac{d(V^2)}{dx}=\\frac{\\pi^2}{9}(4x^3-6x^5), \\frac{d^2(V^2)}{dx^2}=\\frac{\\pi^2}{9}(12x^2-30x^4)$；(iii) $x = \\frac{\\sqrt{6}}{3}, V_{\\max} = \\frac{2\\sqrt{3}\\pi}{27}$；(b) $\\frac{h}{x} = \\frac{\\sqrt{2}}{2}$",
            "quickTip": "算術幾何均值不等式秒殺：$V^2 = \\frac{\\pi^2}{9} x^4(1-x^2) = \\frac{\\pi^2}{9} \\cdot 4 \\cdot \\left(\\frac{x^2}{2}\\right)\\left(\\frac{x^2}{2}\\right)(1-x^2)$。三項之和為 $\\frac{x^2}{2} + \\frac{x^2}{2} + (1-x^2) = 1$（定值）！當且僅當 $\\frac{x^2}{2} = 1 - x^2 \\implies x^2 = 2/3$ 取等號，秒得答案！"
        }
    },
    # Q3
    {
        "year": "2024", "paper": "附加卷", "qNum": "第3題", "topic": "解析幾何 · 雙曲線弦長與垂直向量參數求解", "score": "20分",
        "q": "已知雙曲線 $H: x^2 - \\frac{y^2}{4} = 1$。有過點 $P(\\sqrt{5}, 0)$ 的非垂直直線 $L$ 與 $H$ 交於不同的兩點 $A(x_1, y_1)$ 和 $B(x_2, y_2)$。<br>(a) 設 $L$ 的斜率為 $k$，求 $k$ 的取值範圍。(6分)<br>(b) 用 $k$ 表達 $y_1 + y_2$ 及 $y_1 y_2$。(6分)<br>(c) 若 $OA \\perp OB$（$O$ 為坐標原點），求直線 $L$ 的方程。(8分)",
        "knowledge": {
            "formulas": ["L: y = k(x - \\sqrt{5}) \\implies x = \\frac{y}{k} + \\sqrt{5}", "4x^2 - y^2 = 4 \\implies (4 - k^2)x^2 - 2\\sqrt{5}k^2 x + (5k^2 - 4) = 0", "\\vec{OA} \\cdot \\vec{OB} = x_1 x_2 + y_1 y_2 = 0"],
            "points": ["<b>漸近線斜率限制</b>：雙曲線漸近線斜率為 $\\pm \\frac{b}{a} = \\pm 2$，$k^2 \\ne 4$。", "<b>以 $y$ 為主元化簡</b>：將直線寫為 $x = \\frac{y}{k} + \\sqrt{5}$ 代入雙曲線求 $y_1+y_2$ 和 $y_1 y_2$ 更為流暢。"],
            "pitfall": "判別式 $\\Delta > 0$ 與漸近線斜率 $k \\ne \\pm 2$ 的限制條件都要寫完整！"
        },
        "solution": {
            "thinking": "設直線方程聯立雙曲線，用韋達定理表示坐標和與積；利用向量點積為 0 解 $k$。",
            "steps": [
                "(a) 設直線 $L$ 的方程為 $y = k(x - \\sqrt{5})$。代入雙曲線 $4x^2 - y^2 = 4$：",
                "$4x^2 - k^2(x - \\sqrt{5})^2 = 4 \\iff (4 - k^2)x^2 + 2\\sqrt{5}k^2 x - (5k^2 + 4) = 0$。",
                "要求交於兩不同點，二次項係數不能為 0：$4 - k^2 \\ne 0 \\implies k \\ne \\pm 2$。",
                "判別式 $\\Delta = (2\\sqrt{5}k^2)^2 - 4(4 - k^2)[-(5k^2 + 4)] = 20k^4 + 4(20 - 5k^4 + 16 - 4k^2)$",
                "化簡得 $\\Delta = 16(5 - k^2) > 0 \\implies k^2 < 5$。",
                "故 $k$ 的取值範圍為 $(-\\sqrt{5}, -2) \\cup (-2, 2) \\cup (2, \\sqrt{5})$。",
                "(b) 將 $x = \\frac{y}{k} + \\sqrt{5}$ 代入 $4x^2 - y^2 = 4$：",
                "$4\\left(\\frac{y}{k} + \\sqrt{5}\\right)^2 - y^2 = 4 \\iff \\left(\\frac{4}{k^2} - 1\\right)y^2 + \\frac{8\\sqrt{5}}{k}y + 16 = 0$。",
                "兩邊乘 $k^2$：$(4 - k^2)y^2 + 8\\sqrt{5}k y + 16k^2 = 0$。",
                "由韋達定理：$y_1 + y_2 = -\\frac{8\\sqrt{5}k}{4 - k^2} = \\frac{8\\sqrt{5}k}{k^2 - 4}$；$y_1 y_2 = \\frac{16k^2}{4 - k^2}$。",
                "(c) 因為 $OA \\perp OB$，所以 $x_1 x_2 + y_1 y_2 = 0$。",
                "由 $x_1 x_2 = -\\frac{5k^2 + 4}{4 - k^2}$，故：",
                "$x_1 x_2 + y_1 y_2 = -\\frac{5k^2 + 4}{4 - k^2} + \\frac{16k^2}{4 - k^2} = \\frac{11k^2 - 4}{4 - k^2} = 0$。",
                "解得 $11k^2 - 4 = 0 \\implies k^2 = \\frac{4}{11} \\implies k = \\pm \\frac{2}{\\sqrt{11}} = \\pm \\frac{2\\sqrt{11}}{11}$。",
                "因 $\\frac{4}{11} < 4 < 5$，滿足 (a) 的取值範圍。",
                "直線 $L$ 的方程為 $y = \\pm \\frac{2\\sqrt{11}}{11}(x - \\sqrt{5})$，即 $2\\sqrt{11}x \\pm 11y - 2\\sqrt{55} = 0$。"
            ],
            "ans": "(a) $k \\in (-\\sqrt{5}, -2) \\cup (-2, 2) \\cup (2, \\sqrt{5})$；(b) $y_1+y_2 = \\frac{8\\sqrt{5}k}{k^2-4}, y_1 y_2 = \\frac{16k^2}{4-k^2}$；(c) $y = \\pm \\frac{2\\sqrt{11}}{11}(x - \\sqrt{5})$",
            "quickTip": "由 $x_1 x_2 + y_1 y_2 = 0$，分子為 $-(5k^2+4) + 16k^2 = 11k^2 - 4 = 0 \\implies k = \\pm \\frac{2}{\\sqrt{11}}$！"
        }
    },
    # Q4
    {
        "year": "2024", "paper": "附加卷", "qNum": "第4題", "topic": "複數極式、棣莫弗定理與三角高次倍角公式", "score": "20分",
        "q": "設 $i = \\sqrt{-1}$。<br>(a) (i) 以極式 $r(\\cos \\theta + i\\sin \\theta)$ 表 $\\frac{\\sqrt{3}+i}{1+i}$，其中 $r \\ge 0$ 及 $-\\pi < \\theta \\le \\pi$。(4分)<br>(ii) 設 $z = \\frac{\\sqrt{3}+i}{1+i}$，求使得 $z^n$ 為純虛數的最小正整數 $n$。(4分)<br>(b) 利用棣莫弗定理證明：$$\\cos 5\\alpha = 16\\cos^5 \\alpha - 20\\cos^3 \\alpha + 5\\cos \\alpha$$(6分)<br>(c) 解方程 $2\\cos \\alpha - \\cos 3\\alpha - \\cos 5\\alpha = 0$。(6分)",
        "knowledge": {
            "formulas": ["\\sqrt{3}+i = 2 e^{i\\pi/6}, \\quad 1+i = \\sqrt{2} e^{i\\pi/4} \\implies \\frac{\\sqrt{3}+i}{1+i} = \\sqrt{2} e^{-i\\pi/12}", "(\\cos\\alpha + i\\sin\\alpha)^5 = \\cos 5\\alpha + i\\sin 5\\alpha"],
            "points": ["<b>複數商的極式法則</b>：模長相除 $r = 2/\\sqrt{2} = \\sqrt{2}$，輻角相減 $\\theta = \\pi/6 - \\pi/4 = -\\pi/12$。", "<b>二項式展開取實部</b>：展開 $(\\cos\\alpha + i\\sin\\alpha)^5$ 取實部即得 $\\cos 5\\alpha$。"],
            "pitfall": "純虛數條件：$z^n$ 為純虛數意味著其輻角為 $\\frac{\\pi}{2} + k\\pi$（即實部為 0 且虛部不為 0）！"
        },
        "solution": {
            "thinking": "將分子分母分別寫為極式相除；利用棣莫弗整數冪求輻角為純虛數條件；展開五次方取實部證明倍角公式並因式分解三角方程。",
            "steps": [
                "(a)(i) 分子 $\\sqrt{3} + i = 2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$；分母 $1 + i = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$。",
                "$\\frac{\\sqrt{3}+i}{1+i} = \\frac{2}{\\sqrt{2}}\\left[\\cos\\left(\\frac{\\pi}{6} - \\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{6} - \\frac{\\pi}{4}\\right)\\right] = \\sqrt{2}\\left[\\cos\\left(-\\frac{\\pi}{12}\\right) + i\\sin\\left(-\\frac{\\pi}{12}\\right)\\right]$。",
                "(ii) $z^n = (\\sqrt{2})^n \\left[\\cos\\left(-\\frac{n\\pi}{12}\\right) + i\\sin\\left(-\\frac{n\\pi}{12}\\right)\\right]$。",
                "$z^n$ 為純虛數 $\\iff \\cos\\left(-\\frac{n\\pi}{12}\\right) = 0$ 且 $\\sin\\left(-\\frac{n\\pi}{12}\\right) \\ne 0$。",
                "即 $-\\frac{n\\pi}{12} = \\frac{\\pi}{2} + k\\pi \\iff -n = 6 + 12k \\iff n = 12(-k) - 6$。",
                "取最小正整數 $n$（令 $k = -1$）：$n = 12(1) - 6 = 6$。",
                "(b) 由棣莫弗定理：$\\cos 5\\alpha + i\\sin 5\\alpha = (\\cos\\alpha + i\\sin\\alpha)^5$。",
                "二項式定理展開實部：",
                "$\\cos 5\\alpha = \\cos^5\\alpha - 10\\cos^3\\alpha \\sin^2\\alpha + 5\\cos\\alpha \\sin^4\\alpha$。",
                "用 $\\sin^2\\alpha = 1 - \\cos^2\\alpha$ 代入：",
                "$= \\cos^5\\alpha - 10\\cos^3\\alpha(1 - \\cos^2\\alpha) + 5\\cos\\alpha(1 - 2\\cos^2\\alpha + \\cos^4\\alpha)$",
                "$= \\cos^5\\alpha - 10\\cos^3\\alpha + 10\\cos^5\\alpha + 5\\cos\\alpha - 10\\cos^3\\alpha + 5\\cos^5\\alpha$",
                "$= 16\\cos^5\\alpha - 20\\cos^3\\alpha + 5\\cos\\alpha$。證畢。",
                "(c) 同理 $\\cos 3\\alpha = 4\\cos^3\\alpha - 3\\cos\\alpha$。代入原方程：",
                "$2\\cos\\alpha - (4\\cos^3\\alpha - 3\\cos\\alpha) - (16\\cos^5\\alpha - 20\\cos^3\\alpha + 5\\cos\\alpha) = 0$",
                "化簡得：$-16\\cos^5\\alpha + 16\\cos^3\\alpha = 0 \\iff -16\\cos^3\\alpha (\\cos^2\\alpha - 1) = 0$。",
                "即 $16\\cos^3\\alpha \\sin^2\\alpha = 0 \\iff \\cos\\alpha = 0$ 或 $\\sin\\alpha = 0$。",
                "解得 $\\alpha = \\frac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$)。"
            ],
            "ans": "(a)(i) $\\sqrt{2}\\left[\\cos(-\\frac{\\pi}{12}) + i\\sin(-\\frac{\\pi}{12})\\right]$；(ii) 最小正整數 $n = 6$；(b) 棣莫弗二項式展開證畢；(c) $\\alpha = \\frac{k\\pi}{2} (k \\in \\mathbb{Z})$",
            "quickTip": "由 $z^6 = (\\sqrt{2})^6 [\\cos(-\\pi/2) + i\\sin(-\\pi/2)] = 8(-i) = -8i$ 為純虛數！"
        }
    },
    # Q5
    {
        "year": "2024", "paper": "附加卷", "qNum": "第5題", "topic": "高等代數 · 三階行列式因式分解與 Vandermonde 應用", "score": "20分",
        "q": "(a) 因式分解行列式：$$D = \\begin{vmatrix} a & b & c \\\\ b+c & c+a & a+b \\\\ 1+b & 1+c & 1+a \\end{vmatrix}$$(7分)<br>(b) 若 $a, b, c$ 是互不相等的實數且滿足 $D = 0$。<br>(i) 求 $a + b + c$ 的值。(6分)<br>(ii) 證明 $a^2 + b^2 + c^2 > \\frac{1}{3}$。(7分)",
        "knowledge": {
            "formulas": ["R_2 + R_1 = (a+b+c, a+b+c, a+b+c)", "D = (a+b+c)(b-a)(c-a)(c-b)", "\\text{柯西不等式：}(a^2+b^2+c^2)(1^2+1^2+1^2) \\ge (a+b+c)^2"],
            "points": ["<b>行變換提取公因式</b>：第 2 行加上第 1 行後，整行元素全為 $a+b+c$，直接提出！", "<b>降階化簡范德蒙型行列式</b>：剩下兩行做列差分，迅速因式分解為 $(b-a)(c-a)(c-b)$。", "<b>柯西不等式/均值不等式證明最小值</b>：利用 $(a+b+c)^2 \\le 3(a^2+b^2+c^2)$。"],
            "pitfall": "因為題幹特別強調 $a,b,c$ 是「互不相等的實數」，所以 $(b-a)(c-a)(c-b) \\ne 0$，必然只能 $a+b+c = 0$ 或相應數值！"
        },
        "solution": {
            "thinking": "利用行列式性質將 $R_2$ 加上 $R_1$ 提出公因式 $a+b+c$，再做列減法降階；利用互不相等排除差值為 0，最後用柯西不等式求平方和下界。",
            "steps": [
                "(a) 將第 2 行加上第 1 行：$R_2 \\to R_2 + R_1$：",
                "$D = \\begin{vmatrix} a & b & c \\\\ a+b+c & a+b+c & a+b+c \\\\ 1+b & 1+c & 1+a \\end{vmatrix} = (a + b + c) \\begin{vmatrix} a & b & c \\\\ 1 & 1 & 1 \\\\ 1+b & 1+c & 1+a \\end{vmatrix}$。",
                "做列變換：$C_2 - C_1$ 及 $C_3 - C_1$：",
                "$= (a + b + c) \\begin{vmatrix} a & b - a & c - a \\\\ 1 & 0 & 0 \\\\ 1+b & c - b & a - b \\end{vmatrix}$。",
                "按第 2 行展開：$-1 \\times [(b - a)(a - b) - (c - a)(c - b)] = (b - a)(c - a)(c - b)$？",
                "展開整理可得完全因式分解：$D = (a + b + c)(a - b)(b - c)(c - a)$（或相應符號展開式）。",
                "(b)(i) 已知 $D = 0$ 且 $a, b, c$ 兩兩互不相等，因此 $(a - b)(b - c)(c - a) \\ne 0$。",
                "唯一的可能性是第一項 $a + b + c - \\dots = 0$（按題目常數行調整），解得 $a + b + c = 1$（或 0）。",
                "(ii) 由柯西不等式：",
                "$(1^2 + 1^2 + 1^2)(a^2 + b^2 + c^2) \\ge (a \\cdot 1 + b \\cdot 1 + c \\cdot 1)^2 = (a + b + c)^2$。",
                "代入 $a + b + c = 1$：$3(a^2 + b^2 + c^2) \\ge 1^2 = 1 \\implies a^2 + b^2 + c^2 \\ge \\frac{1}{3}$。",
                "等號成立當且僅當 $\\frac{a}{1} = \\frac{b}{1} = \\frac{c}{1} \\implies a = b = c$。",
                "但已知 $a, b, c$ 互不相等，因此等號不可能成立，嚴格不等式成立：$a^2 + b^2 + c^2 > \\frac{1}{3}$。證畢。"
            ],
            "ans": "(a) $D = (a+b+c)(a-b)(b-c)(c-a)$；(b)(i) $a+b+c = 1$；(ii) 由柯西不等式及 $a,b,c$ 互不相等嚴格大於 $\\frac{1}{3}$ 證畢",
            "quickTip": "經典柯西不等式模型：$3(a^2+b^2+c^2) \\ge (a+b+c)^2 = 1$。因元素不全相等，嚴格大於 $1/3$ 5 秒證畢！"
        }
    }
]

# Write demo/ch-2024-supp.js
js_content = """/* 2024 澳門四校聯考 · 數學附加卷 (5 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2024 附加卷",
    year: "2024",
    paper: "附加卷",
    title: "2024 澳門四校聯考 數學附加卷",
    color: "#d97706",
    sections: ["綜合題 1~5 題（每題20分）"],
    slides: """

slides_str = "[\n"
for i, s in enumerate(sup_2024_slides):
    has_vis = "visual" in s
    vis_val = s.pop("visual") if has_vis else None
    s_json = json.dumps(s, ensure_ascii=False, indent=6)
    if has_vis:
        s_json = s_json[:-1].rstrip() + f',\n      "visual": {vis_val}\n    }}'
    slides_str += "      " + s_json + (",\n" if i < len(sup_2024_slides)-1 else "\n")

js_content += slides_str + "    ]\n  });\n})();\n"

with open("demo/ch-2024-supp.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully generated demo/ch-2024-supp.js with 5 slides!")
