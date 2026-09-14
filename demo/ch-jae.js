/* ============================================================
   ch-jae-example.js — 澳門四校聯考（正卷與附加卷）真題精選教學模組
   特點：一頁一題、左題右解、題目下方呈現核心知識點、拖滑桿動態探究
   ============================================================ */
(function () {
  const DECK = window.DECK = window.DECK || [];

  // ========================== 第一章：正卷真題精選 ==========================
  DECK.push({
    ch: "2024-正卷",
    title: "澳門四校聯考 數學正卷精選",
    color: "#2563eb",
    sections: ["選擇題 第7題 · 三角函數與正弦定理", "選擇題 第11題 · 解析幾何弦長", "解答題 第1題 · 等差與等比數列"],
    slides: [
      // ---------- 題 1：正弦定理與外接圓 ----------
      {
        year: "2024",
        paper: "正卷",
        qNum: "選擇題 第7題",
        topic: "三角函數 · 正弦定理與外接圓",
        score: "4分",
        q: "在 $\\triangle ABC$ 中，內角 $A, B, C$ 的對邊分別為 $a, b, c$。已知 $A = 30^\\circ$，$a = 4$，則 $\\triangle ABC$ 的外接圓直徑為？",
        options: [
          "(A) 4",
          "(B) 6",
          "(C) 8",
          "(D) 10"
        ],
        knowledge: {
          formulas: [
            "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R"
          ],
          points: [
            "<b>正弦定理核心</b>：三角形任一邊與其對角正弦之比，恆等於該三角形外接圓的直徑 $2R$。",
            "<b>聯考思維導向</b>：題幹中一旦出現「外接圓半徑 $R$」或「外接圓直徑 $2R$」，第一反應直覺聯想正弦定理。",
            "<b>常考變式</b>：求外接圓面積 $S = \\pi R^2 = \\pi \\left(\\frac{a}{2\\sin A}\\right)^2$。"
          ],
          pitfall: "審題注意問的是「直徑 $2R$」還是「半徑 $R$」！每年皆有考生算出 $2R = 8$ 卻手快選成半徑 4。"
        },
        visual: function (host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：圓周角不變定理與正弦定理 $2R = \\frac{a}{\\sin A}$
            </div>
            <div id="vis-trig-svg" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>頂點 $A$ 在圓周上的位置：</label>
              <input type="range" id="trigSlider" min="40" max="140" value="90" step="1">
              <span class="ival" id="trigAngleVal">90°</span>
            </div>
            <div class="step-txt" id="trigInfo" style="text-align:center; margin-top:4px;">
              邊長 $a = 4$，$\\angle A = 30^\\circ$，直徑 $2R = \\frac{4}{\\sin 30^\\circ} = 8$（恆定不變）
            </div>
          `;

          const svgHost = host.querySelector('#vis-trig-svg');
          const slider = host.querySelector('#trigSlider');
          const valLabel = host.querySelector('#trigAngleVal');

          function draw(posDeg) {
            const W = 360, H = 220;
            const cx = 180, cy = 115, R = 75; // 外接圓半徑 75px 代表真實 R=4
            // 底邊 BC 固定，對應圓心角 60 度，圓周角 A = 30 度
            // B 設在 240 度，C 設在 300 度
            const radB = (240 * Math.PI) / 180;
            const radC = (300 * Math.PI) / 180;
            const bx = cx + R * Math.cos(radB);
            const by = cy + R * Math.sin(radB);
            const cxPt = cx + R * Math.cos(radC);
            const cyPt = cy + R * Math.sin(radC);

            // A 點在上方優弧滑動 (從 40 度到 140 度)
            const radA = ((-posDeg) * Math.PI) / 180;
            const ax = cx + R * Math.cos(radA);
            const ay = cy + R * Math.sin(radA);

            valLabel.textContent = posDeg + '°';

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            // 外接圓
            s += SVG.circle(cx, cy, R, { stroke: '#94a3b8', strokeWidth: 1.5, strokeDash: '4,3', fill: 'none' });
            s += SVG.point(cx, cy, { color: '#64748b', size: 3, label: 'O (圓心)', labelPos: 'b' });

            // 三角形 ABC 填色與邊線
            s += `<polygon points="${ax},${ay} ${bx},${by} ${cxPt},${cyPt}" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2" />`;

            // 底邊 a
            s += SVG.segment(bx, by, cxPt, cyPt, { color: '#e11d48', strokeWidth: 2.5 });
            s += SVG.text((bx + cxPt) / 2, by + 16, 'a = 4', { color: '#e11d48', fontSize: 13, bold: true, align: 'center' });

            // 頂點標記
            s += SVG.point(ax, ay, { color: '#2563eb', size: 5, label: 'A (30°)', labelPos: 't' });
            s += SVG.point(bx, by, { color: '#1e293b', size: 4, label: 'B', labelPos: 'bl' });
            s += SVG.point(cxPt, cyPt, { color: '#1e293b', size: 4, label: 'C', labelPos: 'br' });

            // 直徑提示線
            s += SVG.segment(cx - R, cy, cx + R, cy, { color: '#059669', strokeWidth: 1.2, strokeDash: '3,3' });
            s += SVG.text(cx, cy - 8, '直徑 2R = 8', { color: '#059669', fontSize: 11, align: 'center', bold: true });

            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "本題已知三角形一內角 $A$ 及其對邊 $a$，要求外接圓直徑，直接代入正弦定理公式 $\\frac{a}{\\sin A} = 2R$ 即可求得。",
          steps: [
            "由正弦定理可知：$\\frac{a}{\\sin A} = 2R$（其中 $R$ 為 $\\triangle ABC$ 的外接圓半徑，$2R$ 為外接圓直徑）。",
            "將題設 $A = 30^\\circ$ 及 $a = 4$ 代入公式：",
            "$$2R = \\frac{4}{\\sin 30^\\circ} = \\frac{4}{\\frac{1}{2}} = 4 \\times 2 = 8$$",
            "因此，該三角形外接圓的直徑為 $8$。"
          ],
          ans: "(C)",
          quickTip: "聯考速秒法：特殊角 $30^\\circ$ 的正弦值為 $0.5$。直徑等於邊長除以 $0.5$（即邊長乘 $2$），$4 \\times 2 = 8$ 秒答選 (C)！"
        }
      },

      // ---------- 題 2：解析幾何弦長 ----------
      {
        year: "2024",
        paper: "正卷",
        qNum: "選擇題 第11題",
        topic: "解析幾何 · 直線與圓相交之弦長",
        score: "4分",
        q: "若直線 $L: 3x - 4y + k = 0$ 與圓 $C: x^2 + y^2 = 25$ 相交於 $A, B$ 兩點，且截得的弦長 $|AB| = 8$，則常數 $k$ 之值為？",
        options: [
          "(A) $\\pm 10$",
          "(B) $\\pm 15$",
          "(C) $\\pm 20$",
          "(D) $\\pm 25$"
        ],
        knowledge: {
          formulas: [
            "d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}",
            "r^2 = d^2 + \\left(\\frac{|AB|}{2}\\right)^2"
          ],
          points: [
            "<b>弦心距直角三角形</b>：圓心到直線距離 $d$、半徑 $r$、半弦長 $\\frac{L}{2}$ 必滿足勾股定理 $r^2 = d^2 + (L/2)^2$。",
            "<b>幾何法 vs 代數法</b>：四校聯考中求解圓與直線弦長問題，強烈優先採用「點到直線距離公式（幾何法）」，嚴禁聯立方程展開判別式，節省大量運算時間。"
          ],
          pitfall: "去絕對值符號時必有正負雙解：$|k| = 15 \\implies k = \\pm 15$，千萬不要忽略對稱的另一側直線。"
        },
        visual: function (host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：滑動常數 $k$ 觀察弦心距 $d$ 與弦長 $|AB|$ 變化
            </div>
            <div id="vis-chord-svg" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>常數 $k$ 值：</label>
              <input type="range" id="chordSlider" min="-25" max="25" value="15" step="1">
              <span class="ival" id="chordVal">15</span>
            </div>
            <div class="step-txt" id="chordInfo" style="text-align:center; margin-top:4px;"></div>
          `;

          const svgHost = host.querySelector('#vis-chord-svg');
          const slider = host.querySelector('#chordSlider');
          const valLabel = host.querySelector('#chordVal');
          const infoEl = host.querySelector('#chordInfo');

          function draw(k) {
            valLabel.textContent = k;
            const W = 360, H = 220;
            const ox = 180, oy = 110, scale = 14; // 1 單位 = 14px，r=5 => 70px
            const rPx = 5 * scale;

            // 弦心距 d = |k| / 5
            const d = Math.abs(k) / 5;
            const isIntersect = d <= 5;
            const halfChord = isIntersect ? Math.sqrt(25 - d * d) : 0;
            const chordLen = 2 * halfChord;

            infoEl.innerHTML = `弦心距 $d = \\frac{|${k}|}{5} = ${d.toFixed(1)}$，弦長 $|AB| = 2\\sqrt{25 - ${d.toFixed(1)}^2} = <b>${chordLen.toFixed(2)}</b> ${Math.abs(k) === 15 ? '🎯 (剛好為 8！)' : ''}`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([infoEl]).catch(() => {});

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            // 座標軸
            s += SVG.axes(W, H, ox, oy, { stroke: '#cbd5e1', labelColor: '#94a3b8' });

            // 圓 C: x^2 + y^2 = 25
            s += SVG.circle(ox, oy, rPx, { stroke: '#2563eb', strokeWidth: 2, fill: 'rgba(37,99,235,0.05)' });
            s += SVG.point(ox, oy, { color: '#1e293b', size: 3.5, label: 'O(0,0)', labelPos: 'bl' });

            // 直線 3x - 4y + k = 0 => y = (3x + k) / 4
            // 取 x = -12 到 12
            const x1 = -12, y1 = (3 * x1 + k) / 4;
            const x2 = 12, y2 = (3 * x2 + k) / 4;
            const sx1 = ox + x1 * scale, sy1 = oy - y1 * scale;
            const sx2 = ox + x2 * scale, sy2 = oy - y2 * scale;

            s += SVG.line(sx1, sy1, sx2, sy2, { color: Math.abs(k) === 15 ? '#059669' : '#e11d48', strokeWidth: 2 });

            // 弦心距垂足
            // 法向量 (3, -4)，單位法向量 (3/5, -4/5)
            // 垂足坐標: ( -3k/25, 4k/25 )
            const fx = -3 * k / 25, fy = 4 * k / 25;
            const sfx = ox + fx * scale, sfy = oy - fy * scale;
            s += SVG.segment(ox, oy, sfx, sfy, { color: '#7c3aed', strokeWidth: 1.5, strokeDash: '3,3' });

            // 若相交，畫出交點 A, B
            if (isIntersect && halfChord > 0.1) {
              // 直線方向向量: (4, 3)，單位方向向量: (4/5, 3/5)
              const ax = fx + halfChord * (4 / 5);
              const ay = fy + halfChord * (3 / 5);
              const bx = fx - halfChord * (4 / 5);
              const by = fy - halfChord * (3 / 5);
              const sax = ox + ax * scale, say = oy - ay * scale;
              const sbx = ox + bx * scale, sby = oy - by * scale;

              s += SVG.segment(sax, say, sbx, sby, { color: '#059669', strokeWidth: 3.5 });
              s += SVG.point(sax, say, { color: '#059669', size: 4, label: 'A', labelPos: 'tr' });
              s += SVG.point(sbx, sby, { color: '#059669', size: 4, label: 'B', labelPos: 'bl' });
            }

            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "本題若將直線與圓聯立方程運算極其繁瑣。應利用圓的幾何性質：半徑 $r$、弦心距 $d$ 與半弦長構成直角三角形，由勾股定理先求出 $d$，再利用點到直線距離公式反解 $k$。",
          steps: [
            "由圓方程 $C: x^2 + y^2 = 25$ 可知，圓心為 $O(0,0)$，半徑 $r = 5$。",
            "已知截得的弦長 $|AB| = 8$，則半弦長為 $\\frac{|AB|}{2} = \\frac{8}{2} = 4$。",
            "由直角三角形勾股定理，圓心到直線的距離（弦心距）$d$ 為：",
            "$$d = \\sqrt{r^2 - \\left(\\frac{|AB|}{2}\\right)^2} = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = 3$$",
            "由點到直線距離公式，圓心 $(0,0)$ 到直線 $3x - 4y + k = 0$ 的距離為：",
            "$$d = \\frac{|3(0) - 4(0) + k|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|k|}{5}$$",
            "令 $\\frac{|k|}{5} = 3$，解得 $|k| = 15$，即 $k = \\pm 15$。"
          ],
          ans: "(B)",
          quickTip: "勾股神數秒殺：經典直角三角形 3-4-5！半徑 5、半弦長 4，弦心距必為 3。直線係數為 3 與 -4，分母 $\\sqrt{3^2+(-4)^2} = 5$。故分子 $|k| = 3 \\times 5 = 15 \\implies k = \\pm 15$。"
        }
      },

      // ---------- 題 3：等差與等比數列 ----------
      {
        year: "2024",
        paper: "正卷",
        qNum: "解答題 第1題",
        topic: "數列 · 等差數列與等比數列綜合求和",
        score: "10分",
        q: "已知等差數列 $\\{a_n\\}$ 的公差 $d \\ne 0$，$a_1 = 1$，且 $a_1, a_3, a_9$ 恰好成等比數列。<br>(1) 求公差 $d$ 及數列通項公式 $a_n$；<br>(2) 設數列 $b_n = 2^{a_n}$，求數列 $\\{b_n\\}$ 的前 $n$ 項和 $S_n$。",
        knowledge: {
          formulas: [
            "a_n = a_1 + (n - 1)d",
            "b^2 = a \\cdot c \\quad (\\text{等比中項性質})",
            "S_n = \\frac{b_1(1 - q^n)}{1 - q} = \\frac{b_1(q^n - 1)}{q - 1}"
          ],
          points: [
            "<b>等比中項列方程</b>：三項成等比，中間項平方等於前後兩項乘積 $a_3^2 = a_1 a_9$。",
            "<b>非零條件檢驗</b>：題幹明確給出 $d \\ne 0$，因式分解 $4d(d - 1) = 0$ 必須明確寫出捨去 $d = 0$ 的判斷步驟。",
            "<b>指數型求和轉化</b>：若 $a_n$ 是等差數列，則 $b_n = A^{a_n} = A^{a_1 + (n-1)d}$ 必然構成等比數列，首項為 $A^{a_1}$，公比為 $A^d$。"
          ],
          pitfall: "第 (2) 小問求和套用公式時，注意公比 $q = 2$ 且首項 $b_1 = 2^1 = 2$，切勿將首項誤寫成 $1$。"
        },
        solution: {
          thinking: "第 (1) 問利用等差數列通項公式將 $a_3, a_9$ 用首項 $a_1$ 和公差 $d$ 表示，利用等比中項列方程求解 $d$；第 (2) 問代入通項後識別出 $\\{b_n\\}$ 為等比數列，直接套用等比數列前 $n$ 項和公式。",
          steps: [
            "<b>(1) 解：</b>",
            "因為 $\\{a_n\\}$ 是公差為 $d$ 的等差數列，且 $a_1 = 1$，所以：",
            "$$a_3 = a_1 + 2d = 1 + 2d, \\quad a_9 = a_1 + 8d = 1 + 8d$$",
            "又因 $a_1, a_3, a_9$ 成等比數列，由等比中項性質得 $a_3^2 = a_1 \\cdot a_9$：",
            "$$(1 + 2d)^2 = 1 \\cdot (1 + 8d) \\implies 1 + 4d + 4d^2 = 1 + 8d$$",
            "整理得 $4d^2 - 4d = 0 \\implies 4d(d - 1) = 0$。",
            "因題設 $d \\ne 0$，故 $d = 1$。",
            "所以數列 $\\{a_n\\}$ 的通項公式為：$a_n = a_1 + (n - 1)d = 1 + (n - 1) \\times 1 = n$。",
            "<b>(2) 解：</b>",
            "由 (1) 得 $a_n = n$，所以 $b_n = 2^{a_n} = 2^n$。",
            "數列 $\\{b_n\\}$ 是以 $b_1 = 2^1 = 2$ 為首項，公比 $q = 2$ 的等比數列。",
            "則數列 $\\{b_n\\}$ 的前 $n$ 項和 $S_n$ 為：",
            "$$S_n = \\frac{b_1(1 - q^n)}{1 - q} = \\frac{2(1 - 2^n)}{1 - 2} = 2(2^n - 1) = 2^{n+1} - 2$$"
          ],
          ans: "(1) d = 1, a_n = n; (2) S_n = 2^{n+1} - 2",
          quickTip: "答題規範避坑：四校聯考閱卷對解答題採「步驟踩點給分」，等比中項公式 2 分、解出公差 2 分、通項 1 分、識別等比數列 2 分、求和公式化簡 3 分。務必條理分明。"
        }
      }
    ]
  });

  // ========================== 第二章：附加卷真題精選 ==========================
  DECK.push({
    ch: "2024-附加卷",
    title: "澳門四校聯考 數學附加卷精選",
    color: "#7c3aed",
    sections: ["解答題 第2題 · 導數與三次函數切線極值", "解答題 第4題 · 複數棣美弗定理與旋轉"],
    slides: [
      // ---------- 題 4：微積分三次函數 ----------
      {
        year: "2024",
        paper: "附加卷",
        qNum: "解答題 第2題",
        topic: "微積分 · 導函數、切線方程式與極值單調性",
        score: "20分",
        q: "設函數 $f(x) = \\frac{1}{3}x^3 - x^2 - 3x + 1$。<br>(1) 求曲線 $y = f(x)$ 在點 $(0, 1)$ 處的切線方程式；<br>(2) 求函數 $f(x)$ 的單調區間以及極大值與極小值。",
        knowledge: {
          formulas: [
            "k = f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}",
            "y - y_0 = f'(x_0)(x - x_0) \\quad (\\text{點斜式切線方程})",
            "f'(x) > 0 \\implies \\text{單調遞增}, \\quad f'(x) < 0 \\implies \\text{單調遞減}"
          ],
          points: [
            "<b>切線幾何意義</b>：曲線在 $x_0$ 處的切線斜率恰等於導函數在該點的值 $f'(x_0)$。",
            "<b>極值判定規範三部曲</b>：1. 求導 $f'(x)$；2. 令 $f'(x)=0$ 找駐點；3. 列符號判定表（或因式符號分析）確認增減性與極大/極小值。"
          ],
          pitfall: "極值是「函數值 $y$」，而非「坐標點 $(x, y)$」或「自變量 $x$」！若寫「極大值為 $(-1, 8/3)$」會被聯考閱卷扣分，必須清楚作答「當 $x = -1$ 時取得極大值 $\\frac{8}{3}$」。"
        },
        visual: function (host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：滑動切點橫坐標 $x_0$ 觀察切線斜率 $f'(x_0)$ 與極值點
            </div>
            <div id="vis-calc-svg" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>切點 $x_0$：</label>
              <input type="range" id="calcSlider" min="-2.5" max="4.5" value="0" step="0.1">
              <span class="ival" id="calcVal">0.0</span>
            </div>
            <div class="step-txt" id="calcInfo" style="text-align:center; margin-top:4px;"></div>
          `;

          const svgHost = host.querySelector('#vis-calc-svg');
          const slider = host.querySelector('#calcSlider');
          const valLabel = host.querySelector('#calcVal');
          const infoEl = host.querySelector('#calcInfo');

          function f(x) { return (1 / 3) * x * x * x - x * x - 3 * x + 1; }
          function df(x) { return x * x - 2 * x - 3; }

          function draw(x0) {
            valLabel.textContent = x0.toFixed(1);
            const y0 = f(x0);
            const slope = df(x0);

            infoEl.innerHTML = `切點 $(x_0, y_0) = (${x0.toFixed(1)}, ${y0.toFixed(2)})$，斜率 $f'(x_0) = <b>${slope.toFixed(2)}</b>$ ${x0 === 0 ? '🎯 (此處為題目所求切點！)' : ''}`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([infoEl]).catch(() => {});

            const W = 360, H = 220;
            const ox = 150, oy = 110, kx = 28, ky = 8; // 坐標縮放

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            s += SVG.axes(W, H, ox, oy, { stroke: '#cbd5e1', labelColor: '#94a3b8' });

            // 畫三次曲線 f(x)
            s += SVG.func(f, -3.2, 5.0, {
              ox: ox, oy: oy, kx: kx, ky: ky,
              color: '#2563eb', strokeWidth: 2.2, samples: 100
            });

            // 標示兩個極值點：極大點 (-1, 8/3)，極小點 (3, -8)
            const maxPx = ox + (-1) * kx, maxPy = oy - (8 / 3) * ky;
            const minPx = ox + 3 * kx, minPy = oy - (-8) * ky;
            s += SVG.point(maxPx, maxPy, { color: '#059669', size: 4, label: '極大(-1, 2.67)', labelPos: 't' });
            s += SVG.point(minPx, minPy, { color: '#e11d48', size: 4, label: '極小(3, -8)', labelPos: 'b' });

            // 畫當前切點的切線
            s += SVG.tangent(f, x0, {
              ox: ox, oy: oy, kx: kx, ky: ky,
              color: '#7c3aed', strokeWidth: 1.8, strokeDash: '4,2', len: 120
            });
            const curPx = ox + x0 * kx, curPy = oy - y0 * ky;
            s += SVG.point(curPx, curPy, { color: '#7c3aed', size: 4.5, label: `P(${x0.toFixed(1)})`, labelPos: 'tl' });

            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "微積分題型是附加卷每年必出 20 分的大題！第 (1) 問求導數代入切點坐標求斜率，寫出點斜式；第 (2) 問求導函數的零點，透過一階導數符號表嚴格給出單調區間與極值。",
          steps: [
            "<b>(1) 解：</b>",
            "對函數 $f(x) = \\frac{1}{3}x^3 - x^2 - 3x + 1$ 求導：",
            "$$f'(x) = x^2 - 2x - 3$$",
            "當 $x = 0$ 時，切線斜率為 $k = f'(0) = 0^2 - 2(0) - 3 = -3$。",
            "又切點坐標為 $(0, f(0)) = (0, 1)$，由點斜式得切線方程式為：",
            "$$y - 1 = -3(x - 0) \\implies 3x + y - 1 = 0$$",
            "<b>(2) 解：</b>",
            "令 $f'(x) = 0$，即 $x^2 - 2x - 3 = 0$，因式分解得：",
            "$$(x - 3)(x + 1) = 0 \\implies x_1 = -1, \\quad x_2 = 3$$",
            "列表分析 $f'(x)$ 的正負號與 $f(x)$ 的單調性：",
            "• 當 $x < -1$ 時，$f'(x) > 0$，$f(x)$ 單調遞增；",
            "• 當 $-1 < x < 3$ 時，$f'(x) < 0$，$f(x)$ 單調遞減；",
            "• 當 $x > 3$ 時，$f'(x) > 0$，$f(x)$ 單調遞增。",
            "因此，$f(x)$ 的<b>單調遞增區間</b>為 $(-\\infty, -1)$ 與 $(3, +\\infty)$；<b>單調遞減區間</b>為 $(-1, 3)$。",
            "當 $x = -1$ 時，$f(x)$ 取得<b>極大值</b>：",
            "$$f(-1) = \\frac{1}{3}(-1)^3 - (-1)^2 - 3(-1) + 1 = -\\frac{1}{3} - 1 + 3 + 1 = \\frac{8}{3}$$",
            "當 $x = 3$ 時，$f(x)$ 取得<b>極小值</b>：",
            "$$f(3) = \\frac{1}{3}(27) - 9 - 3(3) + 1 = 9 - 9 - 9 + 1 = -8$$"
          ],
          ans: "(1) 3x + y - 1 = 0; (2) 遞增區間: (-\\infty, -1), (3, +\\infty); 遞減區間: (-1, 3); 極大值 8/3, 極小值 -8",
          quickTip: "高分規範細節：單調區間若寫並集符號「$\\cup$」在四校聯考嚴格閱卷中常被扣 1 分，請務必用「和」或「逗號」分開書寫！"
        }
      },

      // ---------- 題 5：複數棣美弗定理 ----------
      {
        year: "2024",
        paper: "附加卷",
        qNum: "解答題 第4題",
        topic: "複數 · 棣美弗定理 (De Moivre) 與複平面旋轉",
        score: "20分",
        q: "已知複數 $z = \\sqrt{3} + i$。<br>(1) 求複數 $z$ 的模長 $|z|$ 及主輻角 $\\text{Arg}(z)$，並寫出其三角形式；<br>(2) 利用棣美弗定理計算 $z^6$ 的值；<br>(3) 若複數 $w = 2\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$，求 $\\frac{z}{w}$ 的代數形式 $a + bi$。",
        knowledge: {
          formulas: [
            "z = r(\\cos \\theta + i\\sin \\theta), \\quad r = \\sqrt{a^2 + b^2}, \\quad \\tan\\theta = \\frac{b}{a}",
            "z^n = [r(\\cos \\theta + i\\sin \\theta)]^n = r^n (\\cos n\\theta + i\\sin n\\theta)",
            "\\frac{z_1}{z_2} = \\frac{r_1}{r_2}[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)]"
          ],
          points: [
            "<b>棣美弗定理本質</b>：複數高次冪在幾何上等於「模長做 $n$ 次乘方，輻角做 $n$ 倍旋轉」。",
            "<b>主輻角範圍</b>：四校聯考附加卷規定主輻角 $\\text{Arg}(z) \\in (-\\pi, \\pi]$ 或 $[0, 2\\pi)$，求輻角時務必確認象限。",
            "<b>商的幾何旋轉</b>：兩複數相除，模長相除、輻角相減（順時針旋轉角度）。"
          ],
          pitfall: "第 (3) 問求代數形式 $a + bi$，最後一步必須化簡為精確根式（如 $\\frac{\\sqrt{6}+\\sqrt{2}}{4}$），切忌停留在三角函數形式。"
        },
        visual: function (host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：棣美弗定理 $z^n = r^n(\\cos n\\theta + i\\sin n\\theta)$ 在複平面的步進旋轉
            </div>
            <div id="vis-cplx-svg" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>冪次 $n$：</label>
              <input type="range" id="cplxSlider" min="1" max="6" value="1" step="1">
              <span class="ival" id="cplxVal">1</span>
            </div>
            <div class="step-txt" id="cplxInfo" style="text-align:center; margin-top:4px;"></div>
          `;

          const svgHost = host.querySelector('#vis-cplx-svg');
          const slider = host.querySelector('#cplxSlider');
          const valLabel = host.querySelector('#cplxVal');
          const infoEl = host.querySelector('#cplxInfo');

          function draw(n) {
            valLabel.textContent = n;
            const thetaDeg = n * 30; // 每個 step 旋轉 30 度 (pi/6)
            const rN = Math.pow(2, n);

            infoEl.innerHTML = `當 $n = ${n}$ 時：輻角 $\\theta = ${n} \\times 30^\\circ = <b>${thetaDeg}^\\circ$</b>，模長 $2^{${n}} = ${rN}$ ${n === 6 ? '🎯 (旋轉剛好落在負實軸上，即 $z^6 = -64$！)' : ''}`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([infoEl]).catch(() => {});

            const W = 360, H = 220;
            const ox = 180, oy = 110;

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            s += SVG.complexPlane(W, H, ox, oy, { stroke: '#cbd5e1', labelColor: '#94a3b8' });

            // 畫出從 1 到 n 各點的軌跡
            for (let i = 1; i <= n; i++) {
              const deg = i * 30;
              const rad = (deg * Math.PI) / 180;
              const ri = 25 + i * 10;
              const px = ox + ri * Math.cos(rad);
              const py = oy - ri * Math.sin(rad);

              const isCurrent = i === n;
              s += SVG.vector(ox, oy, px, py, {
                color: isCurrent ? '#7c3aed' : '#94a3b8',
                strokeWidth: isCurrent ? 2.5 : 1.2
              });
              s += SVG.point(px, py, {
                color: isCurrent ? '#7c3aed' : '#64748b',
                size: isCurrent ? 5 : 3,
                label: `z^${i}`,
                labelPos: 't'
              });
            }

            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "附加卷複數常客題！第 (1) 問計算模長與主輻角；第 (2) 問直接代入棣美弗定理；第 (3) 問利用複數除法三角形式運算，或直接代數分母有理化。",
          steps: [
            "<b>(1) 解：</b>",
            "複數 $z = \\sqrt{3} + i$ 的實部 $a = \\sqrt{3}$，虛部 $b = 1$。",
            "模長 $|z| = r = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = 2$。",
            "因為 $z$ 位於第一象限，$\\cos\\theta = \\frac{\\sqrt{3}}{2}$，$\\sin\\theta = \\frac{1}{2}$，",
            "故主輻角 $\\text{Arg}(z) = \\frac{\\pi}{6}$（即 $30^\\circ$）。",
            "其三角形式為：$z = 2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$。",
            "<b>(2) 解：</b>",
            "由棣美弗定理得：",
            "$$z^6 = \\left[2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)\\right]^6 = 2^6 \\left[\\cos\\left(6 \\times \\frac{\\pi}{6}\\right) + i\\sin\\left(6 \\times \\frac{\\pi}{6}\\right)\\right]$$",
            "$$= 64(\\cos\\pi + i\\sin\\pi) = 64(-1 + 0i) = -64$$",
            "<b>(3) 解：</b>",
            "已知 $w = 2\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$，由複數除法的三角形式：",
            "$$\\frac{z}{w} = \\frac{2}{2}\\left[\\cos\\left(\\frac{\\pi}{6} - \\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{6} - \\frac{\\pi}{4}\\right)\\right] = \\cos\\left(-\\frac{\\pi}{12}\\right) + i\\sin\\left(-\\frac{\\pi}{12}\\right)$$",
            "由三角函數誘導公式與兩角差公式：",
            "$$\\cos\\left(-\\frac{\\pi}{12}\\right) = \\cos\\frac{\\pi}{12} = \\cos(45^\\circ - 30^\\circ) = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$",
            "$$\\sin\\left(-\\frac{\\pi}{12}\\right) = -\\sin\\frac{\\pi}{12} = -\\sin(45^\\circ - 30^\\circ) = -\\frac{\\sqrt{6} - \\sqrt{2}}{4}$$",
            "故代數形式為：$\\frac{z}{w} = \\frac{\\sqrt{6} + \\sqrt{2}}{4} - \\frac{\\sqrt{6} - \\sqrt{2}}{4}i$。"
          ],
          ans: "(1) |z|=2, \\theta=\\pi/6, z=2(\\cos(\\pi/6)+i\\sin(\\pi/6)); (2) -64; (3) (\\sqrt{6}+\\sqrt{2})/4 - ((\\sqrt{6}-\\sqrt{2})/4)i",
          quickTip: "代數檢驗法：$w = \\sqrt{2} + \\sqrt{2}i$。$\\frac{z}{w} = \\frac{\\sqrt{3}+i}{\\sqrt{2}+\\sqrt{2}i} = \\frac{(\\sqrt{3}+i)(\\sqrt{2}-\\sqrt{2}i)}{4} = \\frac{(\\sqrt{6}+\\sqrt{2}) + (\\sqrt{2}-\\sqrt{6})i}{4}$，與三角形式結果完全相符！"
        }
      }
    ]
  });
})();
