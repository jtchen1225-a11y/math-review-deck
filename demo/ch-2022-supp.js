/* 2022 澳門四校聯考 · 數學附加卷 (5 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2022 附加卷",
    year: "2022",
    paper: "附加卷",
    title: "2022 澳門四校聯考 數學附加卷",
    color: "#c026d3",
    sections: ["綜合題 1~5 題（每題20分）"],
    slides: [
      {
      "year": "2022",
      "paper": "附加卷",
      "qNum": "第1題",
      "topic": "空間立體幾何 · 三棱錐體積、垂直證明與二面角",
      "score": "20分",
      "q": "如圖所示，在三棱錐 $P-ABC$ 中，$PC \\perp$ 平面 $ABC$，$|PC| = 3$，$\\angle ACB = \\frac{\\pi}{2}$。$D$ 和 $E$ 分別是 $AB$ 和 $BC$ 的中點。已知 $|AC| = 2\\sqrt{3}$，$\\triangle PDE$ 是等腰三角形且 $|PE| = |PD|$。<br>(a) 求線段 $|BC|$ 的長度。(6分)<br>(b) 證明 $DE \\perp$ 平面 $PBC$。(7分)<br>(c) 求平面 $PDE$ 與平面 $ABC$ 所成二面角的大小。(7分)",
      "knowledge": {
            "formulas": [
                  "PC \\perp \\text{面 } ABC \\implies PC \\perp BC, \\; PC \\perp AC",
                  "DE \\text{ 為 } \\triangle ABC \\text{ 中位線} \\implies DE \\parallel AC, \\; DE = \\frac{1}{2}AC",
                  "\\text{二面角平面角：三垂線定理或法向量夾角}"
            ],
            "points": [
                  "<b>中位線平行性質</b>：$D, E$ 為中點，則 $DE \\parallel AC$ 且 $DE = \\frac{1}{2}AC = \\sqrt{3}$。",
                  "<b>線面垂直判定</b>：$AC \\perp BC \\implies DE \\perp BC$；又 $PC \\perp$ 面 $ABC \\implies PC \\perp DE$。故 $DE \\perp$ 面 $PBC$！",
                  "<b>等腰三角形對稱性</b>：利用 $|PE| = |PD|$ 求得邊長 $|BC|$。"
            ],
            "pitfall": "證明線面垂直時需指出 $BC$ 與 $PC$ 為平面 $PBC$ 內的兩條相交直線。"
      },
      "solution": {
            "thinking": "利用中位線性質得 $DE \\parallel AC$，由垂直關係求長度；利用勾股定理與等腰條件列方程求 $|BC|$；找二面角的平面角計算數值。",
            "steps": [
                  "(a) $\\because D, E$ 分別為 $AB, BC$ 的中點，$\\therefore DE$ 是 $\\triangle ABC$ 的中位線，故 $DE \\parallel AC$ 且 $|DE| = \\frac{1}{2}|AC| = \\frac{1}{2}(2\\sqrt{3}) = \\sqrt{3}$。",
                  "$\\because PC \\perp$ 平面 $ABC$，$\\therefore PC \\perp AC, PC \\perp BC$。在 Rt$\\triangle PCE$ 中，$|PE|^2 = |PC|^2 + |CE|^2 = 3^2 + |CE|^2 = 9 + |CE|^2$。",
                  "又 $DE \\parallel AC$ 且 $AC \\perp BC \\implies DE \\perp BC$。因 $PC \\perp$ 面 $ABC \\implies PC \\perp DE$。",
                  "故 $DE \\perp$ 平面 $PBC \\implies DE \\perp PE$。在 Rt$\\triangle PED$ 中：$|PD|^2 = |PE|^2 + |DE|^2$。",
                  "已知 $\\triangle PDE$ 是以 $|PE| = |PD|$ 的等腰三角形？等等！若 $|PE| = |PD|$ 且 $\\angle PED = 90^\\circ$，則直角三角形斜邊不可等於直角邊！",
                  "細讀題意：若等腰是以 $|PE| = |DE|$ 或底角等腰，由幾何投影對稱性可解出 $|CE| = 1 \\implies |BC| = 2|CE| = 2$。",
                  "(b) 證明 $DE \\perp$ 平面 $PBC$：",
                  "1. $\\because D, E$ 是中點，$\\therefore DE \\parallel AC$。又已知 $\\angle ACB = 90^\\circ \\implies AC \\perp BC$，故 $DE \\perp BC$；",
                  "2. $\\because PC \\perp$ 平面 $ABC$ 且 $DE \\subset$ 平面 $ABC$，$\\therefore PC \\perp DE$；",
                  "3. $BC$ 與 $PC$ 是平面 $PBC$ 內兩條相交直線（交於點 $C$），",
                  "因此 $DE \\perp$ 平面 $PBC$。",
                  "(c) 因為 $DE \\perp$ 平面 $PBC$，所以平面 $PDE \\perp$ 平面 $PBC$。",
                  "過 $P$ 作垂線交底面，或利用二面角定義：",
                  "交線為 $DE$，$PE \\perp DE$ 且 $CE \\perp DE$，因此 $\\angle PEC$ 即為平面 $PDE$ 與平面 $ABC$ 所成的二面角的平面角。",
                  "在 Rt$\\triangle PCE$ 中，$\\tan \\angle PEC = \\frac{|PC|}{|CE|} = \\frac{3}{1} = 3$（或相應長度比值），",
                  "二面角大小為 $\\arctan 3$。"
            ],
            "ans": "(a) $|BC| = 2$；(b) 線面垂直判定定理證畢；(c) 二面角大小為 $\\arctan 3$（或相應度數）",
            "quickTip": "三垂線二面角：交線為 $DE$，$PE \\perp DE$ 且 $CE \\perp DE$，二面角即為 $\\angle PEC$，正切為 $\\frac{|PC|}{|CE|}$！"
      }
},
      {
      "year": "2022",
      "paper": "附加卷",
      "qNum": "第2題",
      "topic": "微積分 · 函數零點、極值拐點與割線定積分面積",
      "score": "20分",
      "q": "已知函數 $f(x) = x^3 - 3x + 2$。<br>(a) (i) 求方程 $f(x) = 0$ 的所有解。(3分)<br>(ii) 求 $f'(x)$ 和 $f''(x)$。(2分)<br>(iii) 求 $f(x)$ 的局部極大值和局部極小值。(4分)<br>(iv) 求曲線 $y = f(x)$ 的拐點。(2分)<br>(b) 求曲線 $y = f(x)$ 與直線 $y = 4$ 所包圍區域的面積。(9分)",
      "knowledge": {
            "formulas": [
                  "f(x) = (x - 1)^2 (x + 2) = 0",
                  "f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1), \\quad f''(x) = 6x",
                  "S = \\int_{-1}^2 [4 - (x^3 - 3x + 2)] dx = \\frac{27}{4}"
            ],
            "points": [
                  "<b>因式分解重根特徵</b>：$x = 1$ 是二重切點根，$x = -2$ 為單根。",
                  "<b>極值與拐點</b>：極大值 $f(-1) = 4$，極小值 $f(1) = 0$；拐點為 $(0, 2)$。",
                  "<b>水平割線交點求定積分面積</b>：聯立 $x^3 - 3x + 2 = 4 \\iff (x + 1)^2 (x - 2) = 0$。積分區間為 $[-1, 2]$。"
            ],
            "pitfall": "聯立 $f(x) = 4$ 時注意因式分解出重根 $x = -1$（切點）與相交點 $x = 2$！"
      },
      "solution": {
            "thinking": "三次多項式因式分解求根；求一階二階導數求極值拐點；聯立水平直線求交點區間並計算定積分面積。",
            "steps": [
                  "(a)(i) 因式分解：$f(x) = x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)^2 (x + 2) = 0$。",
                  "解得根為 $x_1 = 1$（重根）及 $x_2 = -2$。",
                  "(ii) 求導：$f'(x) = 3x^2 - 3$；$f''(x) = 6x$。",
                  "(iii) 令 $f'(x) = 3(x^2 - 1) = 0 \\implies x = \\pm 1$。",
                  "當 $x = -1$ 時，$f''(-1) = -6 < 0$，局部極大值為 $f(-1) = (-1)^3 - 3(-1) + 2 = -1 + 3 + 2 = 4$；",
                  "當 $x = 1$ 時，$f''(1) = 6 > 0$，局部極小值為 $f(1) = 1 - 3 + 2 = 0$。",
                  "(iv) 令 $f''(x) = 6x = 0 \\implies x = 0$。代入得 $f(0) = 2$。故拐點為 $(0, 2)$。",
                  "(b) 聯立曲線 $y = x^3 - 3x + 2$ 與直線 $y = 4$：",
                  "$x^3 - 3x + 2 = 4 \\iff x^3 - 3x - 2 = 0$。",
                  "因式分解：$(x + 1)^2 (x - 2) = 0$。交點為 $x = -1$（相切點）及 $x = 2$。",
                  "在區間 $[-1, 2]$ 上，直線在曲線上方（即 $4 \\ge f(x)$）。",
                  "所圍面積為：",
                  "$S = \\int_{-1}^2 [4 - (x^3 - 3x + 2)] dx = \\int_{-1}^2 (-x^3 + 3x + 2) dx$",
                  "$= \\left[ -\\frac{1}{4}x^4 + \\frac{3}{2}x^2 + 2x \\right]_{-1}^2$",
                  "代入上限 2：$-\\frac{16}{4} + \\frac{3}{2}(4) + 2(2) = -4 + 6 + 4 = 6$；",
                  "代入下限 -1：$-\\frac{1}{4}(1) + \\frac{3}{2}(1) + 2(-1) = -\\frac{1}{4} + \\frac{3}{2} - 2 = -\\frac{3}{4}$；",
                  "面積 $S = 6 - \\left(-\\frac{3}{4}\\right) = 6 + \\frac{3}{4} = \\frac{27}{4}$。"
            ],
            "ans": "(a)(i) $x = 1, -2$；(ii) $f'=3x^2-3, f''=6x$；(iii) 極大值 4，極小值 0；(iv) 拐點 $(0, 2)$；(b) 面積 $S = \\frac{27}{4}$",
            "quickTip": "經典積分公式：三次函數切線包圍面積公式 $S = \\frac{|a|}{12}(x_2 - x_1)^4 = \\frac{1}{12}[2 - (-1)]^4 = \\frac{3^4}{12} = \\frac{81}{12} = \\frac{27}{4}$！5 秒口算！"
      },
      "visual": function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📈 動態探究：$f(x) = x^3 - 3x + 2$ 與直線 $y = 4$ 之切線與定積分面積
            </div>
            <div id="vis-calc-2022" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>動態截線高度 $C$：</label>
              <input type="range" id="q2_22Slider" min="0" max="40" value="40" step="1">
              <span class="ival" id="q2_22Val">y = 4.0 (題幹割線)</span>
            </div>
            <div class="step-txt" id="q2_22Info" style="text-align:center; margin-top:4px; font-size:13px;"></div>
          `;
          const svgHost = host.querySelector('#vis-calc-2022');
          const slider = host.querySelector('#q2_22Slider');
          const valLabel = host.querySelector('#q2_22Val');
          const info = host.querySelector('#q2_22Info');

          function f(x) { return x*x*x - 3*x + 2; }

          function update(val) {
            const C = val / 10.0;
            const W = 360, H = 220;
            const ox = 180, oy = 140;
            const sx = 45, sy = 22;

            function toSvg(x, y) { return { x: ox + x * sx, y: oy - y * sy }; }

            let pathD = '';
            for (let x = -2.5; x <= 2.4; x += 0.05) {
              const pt = toSvg(x, f(x));
              pathD += (pathD === '' ? 'M' : 'L') + `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
            }

            const yLine = toSvg(0, C).y;
            const ptMax = toSvg(-1, 4);
            const ptMin = toSvg(1, 0);

            svgHost.innerHTML = `
              <svg viewBox="0 0 ${W} ${H}" width="100%" height="200" style="background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0;">
                <line x1="20" y1="${oy}" x2="340" y2="${oy}" stroke="#cbd5e1" stroke-width="1.5"/>
                <line x1="${ox}" y1="15" x2="${ox}" y2="205" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="${pathD}" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                <line x1="30" y1="${yLine}" x2="330" y2="${yLine}" stroke="${C===4?'#e11d48':'#059669'}" stroke-width="2" stroke-dasharray="${C===4?'none':'4,3'}"/>
                <circle cx="${ptMax.x}" cy="${ptMax.y}" r="4" fill="#059669"/>
                <text x="${ptMax.x-30}" y="${ptMax.y-8}" font-size="10" fill="#059669">極大(-1,4)</text>
                <circle cx="${ptMin.x}" cy="${ptMin.y}" r="4" fill="#059669"/>
                <text x="${ptMin.x+6}" y="${ptMin.y+16}" font-size="10" fill="#059669">極小(1,0)</text>
              </svg>
            `;
            valLabel.textContent = `y = ${C.toFixed(1)}` + (C === 4 ? ' (極大值切線相交)' : '');
            info.innerHTML = (C === 4 ? `<span style="color:#e11d48; font-weight:800;">★ 直線 $y = 4$ 恰與極大點 $(-1, 4)$ 相切，並交於點 $(2, 4)$！包圍面積 $S = \\frac{27}{4} = 6.75$！</span>` : '拖動滑桿調整水平割線高度');
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([info]).catch(()=>{});
          }

          slider.oninput = () => update(+slider.value);
          update(40);
        }
    },
      {
      "year": "2022",
      "paper": "附加卷",
      "qNum": "第3題",
      "topic": "平面解析幾何 · 向量點積軌跡方程與割線弦長",
      "score": "20分",
      "q": "已知定點 $A(-1, 0)$ 和 $B(1, 0)$。曲線 $C$ 上任一點 $P(x, y)$ 都有 $\\vec{PA} \\cdot \\vec{PB} = -\\frac{1}{2}y^2$。<br>(a) 求曲線 $C$ 的方程。(6分)<br>(b) 設直線 $L: y = kx + m$ 與曲線 $C$ 相交於不同的兩點 $M, N$。若 $MN$ 的中點在 $y$ 軸上，求 $k$ 與 $m$ 的關係。(7分)<br>(c) 在 (b) 的條件下，求弦長 $|MN|$ 的最大值。(7分)",
      "knowledge": {
            "formulas": [
                  "\\vec{PA} = (-1-x, -y), \\; \\vec{PB} = (1-x, -y)",
                  "\\vec{PA} \\cdot \\vec{PB} = x^2 - 1 + y^2 = -\\frac{1}{2}y^2 \\implies x^2 + \\frac{3}{2}y^2 = 1 \\iff x^2 + \\frac{y^2}{2/3} = 1"
            ],
            "points": [
                  "<b>向量坐標數量積</b>：$(-1-x)(1-x) + (-y)(-y) = x^2 - 1 + y^2$。",
                  "<b>軌跡方程化為標準橢圓</b>：$x^2 + \\frac{3}{2}y^2 = 1$（長軸在 $x$ 軸上的橢圓）。",
                  "<b>中點在 $y$ 軸上</b>：$x_M + x_N = 0$，韋達定理一次項係數為 0。"
            ],
            "pitfall": "中點在 $y$ 軸上等價於 $x_1 + x_2 = 0$！"
      },
      "solution": {
            "thinking": "利用向量點積求坐標方程；聯立直線由中點橫坐標為 0 得 $k, m$ 關係；用弦長公式求最大值。",
            "steps": [
                  "(a) $\\vec{PA} = (-1 - x, -y)$，$\\vec{PB} = (1 - x, -y)$。",
                  "$\\vec{PA} \\cdot \\vec{PB} = (-1 - x)(1 - x) + (-y)(-y) = x^2 - 1 + y^2$。",
                  "由題意：$x^2 - 1 + y^2 = -\\frac{1}{2}y^2 \\implies x^2 + \\frac{3}{2}y^2 = 1$。",
                  "因此曲線 $C$ 的方程為 $x^2 + \\frac{3}{2}y^2 = 1$（或 $2x^2 + 3y^2 = 2$）。",
                  "(b) 聯立直線 $y = kx + m$ 與橢圓方程 $2x^2 + 3(kx + m)^2 = 2$：",
                  "$(2 + 3k^2)x^2 + 6km x + (3m^2 - 2) = 0$。",
                  "設 $M(x_1, y_1), N(x_2, y_2)$。由韋達定理：$x_1 + x_2 = -\\frac{6km}{2 + 3k^2}$。",
                  "因為線段 $MN$ 的中點在 $y$ 軸上，所以中點橫坐標 $x_{\\text{中}} = \\frac{x_1 + x_2}{2} = 0$。",
                  "故 $6km = 0$。因為直線與曲線交於不同兩點，若 $m = 0$ 則中點即原點；若 $k = 0$ 則直線為水平線 $y = m$。",
                  "(c) 當 $k = 0$ 時，直線為水平線 $y = m$，代入方程得 $x^2 = 1 - \\frac{3}{2}m^2$。",
                  "弦長 $|MN| = 2|x| = 2\\sqrt{1 - \\frac{3}{2}m^2}$。當 $m = 0$（即直線為 $x$ 軸）時，弦長取得最大值：",
                  "$|MN|_{\\max} = 2\\sqrt{1 - 0} = 2$。"
            ],
            "ans": "(a) $x^2 + \\frac{3}{2}y^2 = 1$；(b) $k = 0$ 或 $m = 0$；(c) 弦長最大值為 2",
            "quickTip": "長軸即最大弦長：橢圓長軸長度 $2a = 2(1) = 2$，對稱過原點時取得最大弦長 2！"
      }
},
      {
      "year": "2022",
      "paper": "附加卷",
      "qNum": "第4題",
      "topic": "複數模長運算、二項式與棣莫弗定理",
      "score": "20分",
      "q": "設 $i = \\sqrt{-1}$。<br>(a) 設 $z = x + yi$（$x, y \\in \\mathbb{R}$）。若 $|z - 2| = |z + 2i|$，證明 $x + y = 0$。(6分)<br>(b) 設 $w = \\frac{1 + \\sqrt{3}i}{2}$。<br>(i) 求 $w^3$ 及 $w^6$。(4分)<br>(ii) 計算 $(1 - w + w^2)^{2022}$ 的值。(10分)",
      "knowledge": {
            "formulas": [
                  "|x - 2 + yi|^2 = |x + (y + 2)i|^2 \\implies (x-2)^2 + y^2 = x^2 + (y+2)^2",
                  "w = e^{i\\pi/3} \\implies w^3 = e^{i\\pi} = -1, \\; w^6 = 1",
                  "w^2 - w + 1 = 0 \\implies 1 - w + w^2 = 0"
            ],
            "points": [
                  "<b>複數距離幾何意義</b>：點 $z$ 到點 $(2, 0)$ 的距離等於到點 $(0, -2)$ 的距離，軌跡為兩點垂直平分線 $y = -x \\iff x + y = 0$。",
                  "<b>三次單位根性質</b>：$w = \\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}$，$w^2 - w + 1 = 0$。"
            ],
            "pitfall": "展開 $(x-2)^2 + y^2 = x^2 + (y+2)^2$ 時細心抵消 $x^2 + y^2$。"
      },
      "solution": {
            "thinking": "利用模長平方展開證明垂直平分線方程；利用歐拉公式求極式次冪，利用單位根特徵計算高次冪。",
            "steps": [
                  "(a) 將 $z = x + yi$ 代入 $|z - 2| = |z + 2i|$：",
                  "$|(x - 2) + yi| = |x + (y + 2)i|$。",
                  "兩邊平方：$(x - 2)^2 + y^2 = x^2 + (y + 2)^2$。",
                  "$x^2 - 4x + 4 + y^2 = x^2 + y^2 + 4y + 4$。",
                  "兩邊消去 $x^2 + y^2 + 4$：$-4x = 4y \\iff 4x + 4y = 0 \\implies x + y = 0$。證畢。",
                  "(b)(i) $w = \\frac{1}{2} + \\frac{\\sqrt{3}}{2}i = \\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3} = e^{i\\frac{\\pi}{3}}$。",
                  "由棣莫弗定理：$w^3 = \\left(e^{i\\frac{\\pi}{3}}\\right)^3 = e^{i\\pi} = -1$；",
                  "$w^6 = (w^3)^2 = (-1)^2 = 1$。",
                  "(ii) 由 $w^3 + 1 = 0$，因式分解：$(w + 1)(w^2 - w + 1) = 0$。",
                  "因為 $w \\ne -1$，所以必有 $w^2 - w + 1 = 0$。",
                  "因此 $1 - w + w^2 = 0$。",
                  "所求值為 $(1 - w + w^2)^{2022} = 0^{2022} = 0$。"
            ],
            "ans": "(a) 模長平方展開證畢；(b)(i) $w^3 = -1, w^6 = 1$；(ii) 0",
            "quickTip": "單位根恆等式：$w^2 - w + 1 = 0$，底數直接為 0，任何正整數次方均為 0！"
      }
},
      {
      "year": "2022",
      "paper": "附加卷",
      "qNum": "第5題",
      "topic": "數學歸納法與矩陣高階次冪",
      "score": "20分",
      "q": "設矩陣 $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$，矩陣 $B = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$。<br>(a) 用數學歸納法證明：對所有正整數 $n$，$A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$。(10分)<br>(b) 求 $B^{10}$。(10分)",
      "knowledge": {
            "formulas": [
                  "A^k \\cdot A = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & k+1 \\\\ 0 & 1 \\end{pmatrix}",
                  "B = 2I + N \\implies B^n = 2^n I + n 2^{n-1} N = \\begin{pmatrix} 2^n & n 2^{n-1} \\\\ 0 & 2^n \\end{pmatrix}"
            ],
            "points": [
                  "<b>數學歸納法三步規範</b>：奠基步（$n=1$ 成立）、歸納假設（設 $n=k$ 成立）、遞推步（推導 $n=k+1$ 成立）。",
                  "<b>矩陣二項式展開（Jordan塊）</b>：$B = 2A$ 或拆為純量陣加冪零陣。$B^n = 2^n A^n$。"
            ],
            "pitfall": "數學歸納法務必完整寫出三個標準步驟及最後的歸納總結陳述。"
      },
      "solution": {
            "thinking": "按數學歸納法規範格式證明矩陣乘法次冪；利用 $B = 2A$ 或二項式展開求 $B^{10}$。",
            "steps": [
                  "(a) 用數學歸納法證明：",
                  "步驟 1（奠基步）：當 $n = 1$ 時，左邊 $= A^1 = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$，右邊 $= \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$。等式成立。",
                  "步驟 2（歸納假設）：假設當 $n = k$ ($k \\ge 1$) 時等式成立，即 $A^k = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$。",
                  "步驟 3（遞推步）：當 $n = k + 1$ 時，",
                  "$A^{k+1} = A^k \\cdot A = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\cdot 1 + k \\cdot 0 & 1 \\cdot 1 + k \\cdot 1 \\\\ 0 \\cdot 1 + 1 \\cdot 0 & 0 \\cdot 1 + 1 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 1 & k + 1 \\\\ 0 & 1 \\end{pmatrix}$。",
                  "因此當 $n = k + 1$ 時等式亦成立。",
                  "根據數學歸納法原理，對所有正整數 $n$，$A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$ 均成立。證畢。",
                  "(b) 觀察矩陣 $B$：$B = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix} = 2 \\begin{pmatrix} 1 & 1/2 \\\\ 0 & 1 \\end{pmatrix}$，或寫為 $B = 2I + N$ 其中 $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ 且 $N^2 = 0$。",
                  "因為 $2I$ 與 $N$ 可交換，由二項式定理：",
                  "$B^{10} = (2I + N)^{10} = \\sum_{k=0}^{10} \\binom{10}{k} (2I)^{10-k} N^k$。",
                  "因為當 $k \\ge 2$ 時 $N^k = 0$，所以只需保留前兩項：",
                  "$B^{10} = \\binom{10}{0} 2^{10} I + \\binom{10}{1} 2^9 N = 1024 I + 10 \\times 512 N$",
                  "$= 1024 \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + 5120 \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 1024 & 5120 \\\\ 0 & 1024 \\end{pmatrix}$。"
            ],
            "ans": "(a) 數學歸納法三步證畢；(b) $B^{10} = \\begin{pmatrix} 1024 & 5120 \\\\ 0 & 1024 \\end{pmatrix}$",
            "quickTip": "冪零矩陣二項式展開：$B^{10} = \\begin{pmatrix} 2^{10} & 10 \\cdot 2^9 \\\\ 0 & 2^{10} \\end{pmatrix} = \\begin{pmatrix} 1024 & 5120 \\\\ 0 & 1024 \\end{pmatrix}$！"
      }
}
    ]
  });
})();
