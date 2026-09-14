/* ============================================================
   ch-jae-example.js — 澳門四校聯考（JAE）歷屆試卷互動複習模組
   試題組織架構：按年份與卷別嚴格排序（2024 正卷、2024 附加卷、2023 正卷、2023 附加卷...）
   解答初始狀態：翻到每題預設隱藏，按 A 鍵或點擊按鈕揭曉解答，方便課堂提問
   ============================================================ */
(function () {
  const DECK = window.DECK = window.DECK || [];

  // ========================== 【2024 正卷】 ==========================
  DECK.push({
    ch: "2024 正卷",
    year: "2024",
    paper: "正卷",
    title: "2024 澳門四校聯考 數學正卷精選",
    color: "#2563eb",
    sections: [
      "選擇題 第7題 · 三角函數與正弦定理",
      "選擇題 第11題 · 解析幾何直線與圓相交弦長",
      "解答題 第1題 · 等差與等比數列綜合求和"
    ],
    slides: [
      // ---------- 2024 正卷 Q7 ----------
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
            "<b>正弦定理核心</b>：三角形任一邊與其對角正弦之比，恆等於外接圓直徑 $2R$。",
            "<b>聯考思維導向</b>：題幹出現「外接圓半徑 $R$」或「外接圓直徑 $2R$」，第一反應直覺聯想正弦定理。",
            "<b>常考變式</b>：外接圓面積 $S = \\pi R^2 = \\pi \\left(\\frac{a}{2\\sin A}\\right)^2$。"
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
            const cx = 180, cy = 115, R = 75;
            const radB = (240 * Math.PI) / 180;
            const radC = (300 * Math.PI) / 180;
            const bx = cx + R * Math.cos(radB);
            const by = cy + R * Math.sin(radB);
            const cxPt = cx + R * Math.cos(radC);
            const cyPt = cy + R * Math.sin(radC);

            const radA = ((-posDeg) * Math.PI) / 180;
            const ax = cx + R * Math.cos(radA);
            const ay = cy + R * Math.sin(radA);

            valLabel.textContent = posDeg + '°';

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            s += SVG.circle(cx, cy, R, { stroke: '#94a3b8', strokeWidth: 1.5, strokeDash: '4,3', fill: 'none' });
            s += SVG.point(cx, cy, { color: '#64748b', size: 3, label: 'O (圓心)', labelPos: 'b' });
            s += `<polygon points="${ax},${ay} ${bx},${by} ${cxPt},${cyPt}" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2" />`;
            s += SVG.segment(bx, by, cxPt, cyPt, { color: '#e11d48', strokeWidth: 2.5 });
            s += SVG.text((bx + cxPt) / 2, by + 16, 'a = 4', { color: '#e11d48', fontSize: 13, bold: true, align: 'center' });
            s += SVG.point(ax, ay, { color: '#2563eb', size: 5, label: 'A (30°)', labelPos: 't' });
            s += SVG.point(bx, by, { color: '#1e293b', size: 4, label: 'B', labelPos: 'bl' });
            s += SVG.point(cxPt, cyPt, { color: '#1e293b', size: 4, label: 'C', labelPos: 'br' });
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
          quickTip: "特殊角 $30^\\circ$ 正弦值為 $0.5$。直徑等於邊長除以 $0.5$（即邊長乘 $2$），$4 \\times 2 = 8$ 秒答選 (C)！"
        }
      },

      // ---------- 2024 正卷 Q11 ----------
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
            "<b>幾何法 vs 代數法</b>：求圓與直線弦長問題，優先採用「點到直線距離公式（幾何法）」，嚴禁聯立方程展開判別式。"
          ],
          pitfall: "去絕對值符號時必有正負雙解：$|k| = 15 \\implies k = \\pm 15$，切勿忽略負根。"
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
            const ox = 180, oy = 110, scale = 14;
            const rPx = 5 * scale;
            const d = Math.abs(k) / 5;
            const isIntersect = d <= 5;
            const halfChord = isIntersect ? Math.sqrt(25 - d * d) : 0;
            const chordLen = 2 * halfChord;

            infoEl.innerHTML = `弦心距 $d = \\frac{|${k}|}{5} = ${d.toFixed(1)}$，弦長 $|AB| = 2\\sqrt{25 - ${d.toFixed(1)}^2} = <b>${chordLen.toFixed(2)}</b> ${Math.abs(k) === 15 ? '🎯 (剛好為 8！)' : ''}`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([infoEl]).catch(() => {});

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            s += SVG.axes(W, H, ox, oy, { stroke: '#cbd5e1', labelColor: '#94a3b8' });
            s += SVG.circle(ox, oy, rPx, { stroke: '#2563eb', strokeWidth: 2, fill: 'rgba(37,99,235,0.05)' });
            s += SVG.point(ox, oy, { color: '#1e293b', size: 3.5, label: 'O(0,0)', labelPos: 'bl' });

            const x1 = -12, y1 = (3 * x1 + k) / 4;
            const x2 = 12, y2 = (3 * x2 + k) / 4;
            s += SVG.line(ox + x1 * scale, oy - y1 * scale, ox + x2 * scale, oy - y2 * scale, {
              color: Math.abs(k) === 15 ? '#059669' : '#e11d48', strokeWidth: 2
            });

            const fx = -3 * k / 25, fy = 4 * k / 25;
            s += SVG.segment(ox, oy, ox + fx * scale, oy - fy * scale, { color: '#7c3aed', strokeWidth: 1.5, strokeDash: '3,3' });

            if (isIntersect && halfChord > 0.1) {
              const ax = fx + halfChord * (4 / 5), ay = fy + halfChord * (3 / 5);
              const bx = fx - halfChord * (4 / 5), by = fy - halfChord * (3 / 5);
              s += SVG.segment(ox + ax * scale, oy - ay * scale, ox + bx * scale, oy - by * scale, { color: '#059669', strokeWidth: 3.5 });
              s += SVG.point(ox + ax * scale, oy - ay * scale, { color: '#059669', size: 4, label: 'A', labelPos: 'tr' });
              s += SVG.point(ox + bx * scale, oy - by * scale, { color: '#059669', size: 4, label: 'B', labelPos: 'bl' });
            }
            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "利用幾何弦心距三角形求解：半徑 $r=5$，半弦長為 4，勾股定理得弦心距 $d=3$，代入點到直線距離公式反解 $k$。",
          steps: [
            "由圓方程 $C: x^2 + y^2 = 25$ 得圓心 $O(0,0)$，半徑 $r = 5$。",
            "已知截得的弦長 $|AB| = 8$，則半弦長為 $\\frac{|AB|}{2} = 4$。",
            "由勾股定理，圓心到直線距離（弦心距）為：$$d = \\sqrt{5^2 - 4^2} = \\sqrt{9} = 3$$",
            "由點到直線距離公式得：$$d = \\frac{|3(0) - 4(0) + k|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|k|}{5}$$",
            "令 $\\frac{|k|}{5} = 3$，解得 $|k| = 15 \\implies k = \\pm 15$。"
          ],
          ans: "(B)",
          quickTip: "勾股神數秒殺：直角三角形 3-4-5！半徑 5、半弦長 4，弦心距必為 3。直線係數平方和為 25，分母為 5，故 $|k| = 3 \\times 5 = 15$。"
        }
      },

      // ---------- 2024 正卷 解答題 Q1 ----------
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
            "a_3^2 = a_1 \\cdot a_9 \\quad (\\text{等比中項性質})",
            "S_n = \\frac{b_1(1 - q^n)}{1 - q} = \\frac{b_1(q^n - 1)}{q - 1}"
          ],
          points: [
            "<b>等比中項列方程</b>：三項成等比，中間項平方等於前後兩項乘積 $a_3^2 = a_1 a_9$。",
            "<b>非零條件檢驗</b>：題幹明確給出 $d \\ne 0$，因式分解 $4d(d - 1) = 0$ 必須寫出捨去 $d = 0$。",
            "<b>指數型求和轉化</b>：若 $a_n$ 是等差數列，則 $b_n = 2^{a_n}$ 必然構成等比數列。"
          ],
          pitfall: "第 (2) 問求和套用公式時，首項 $b_1 = 2^1 = 2$，切勿將首項誤寫成 $1$。"
        },
        solution: {
          thinking: "第 (1) 問由等差數列通項公式與等比中項求解 $d$；第 (2) 問識別出 $\\{b_n\\}$ 為等比數列，直接套用前 $n$ 項和公式。",
          steps: [
            "<b>(1) 解：</b>",
            "由等差數列通項公式得：$a_3 = 1 + 2d$，$a_9 = 1 + 8d$。",
            "因為 $a_1, a_3, a_9$ 成等比數列，故 $a_3^2 = a_1 \\cdot a_9$：",
            "$$(1 + 2d)^2 = 1 \\cdot (1 + 8d) \\implies 1 + 4d + 4d^2 = 1 + 8d$$",
            "化簡得 $4d^2 - 4d = 0 \\implies 4d(d - 1) = 0$。因 $d \\ne 0$，解得 $d = 1$。",
            "所以通項公式為：$a_n = 1 + (n - 1) \\times 1 = n$。",
            "<b>(2) 解：</b>",
            "由 (1) 得 $b_n = 2^{a_n} = 2^n$。數列 $\\{b_n\\}$ 是以 $b_1 = 2$ 為首項，公比 $q = 2$ 的等比數列。",
            "前 $n$ 項和為：$$S_n = \\frac{2(1 - 2^n)}{1 - 2} = 2(2^n - 1) = 2^{n+1} - 2$$"
          ],
          ans: "(1) d = 1, a_n = n; (2) S_n = 2^{n+1} - 2",
          quickTip: "踩點給分原則：等比中項公式 2 分、因式分解得公差 2 分、通項 1 分、識別等比數列 2 分、求和化簡 3 分。"
        }
      }
    ]
  });

  // ========================== 【2024 附加卷】 ==========================
  DECK.push({
    ch: "2024 附加卷",
    year: "2024",
    paper: "附加卷",
    title: "2024 澳門四校聯考 數學附加卷精選",
    color: "#7c3aed",
    sections: [
      "解答題 第2題 · 微積分切線與三次函數極值",
      "解答題 第4題 · 複數棣美弗定理與旋轉"
    ],
    slides: [
      // ---------- 2024 附加卷 Q2 ----------
      {
        year: "2024",
        paper: "附加卷",
        qNum: "解答題 第2題",
        topic: "微積分 · 導函數、切線方程式與極值單調性",
        score: "20分",
        q: "設函數 $f(x) = \\frac{1}{3}x^3 - x^2 - 3x + 1$。<br>(1) 求曲線 $y = f(x)$ 在點 $(0, 1)$ 處的切線方程式；<br>(2) 求函數 $f(x)$ 的單調區間以及極大值與極小值。",
        knowledge: {
          formulas: [
            "k = f'(x_0), \\quad y - y_0 = f'(x_0)(x - x_0)",
            "f'(x) > 0 \\implies \\text{單調遞增}, \\quad f'(x) < 0 \\implies \\text{單調遞減}"
          ],
          points: [
            "<b>切線斜率</b>：曲線在 $x_0$ 處切線斜率恰等於一階導數值 $f'(x_0)$。",
            "<b>極值判定規範</b>：1. 求導；2. 找駐點；3. 列一階導數正負號表格分析增減區間。"
          ],
          pitfall: "極值是「函數值 $y$」，而非自變量 $x$！請作答「當 $x = -1$ 時取得極大值 $\\frac{8}{3}$」。"
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

            infoEl.innerHTML = `切點 $(x_0, y_0) = (${x0.toFixed(1)}, ${y0.toFixed(2)})$，斜率 $f'(x_0) = <b>${slope.toFixed(2)}</b>$ ${x0 === 0 ? '🎯 (題目所求切點！)' : ''}`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([infoEl]).catch(() => {});

            const W = 360, H = 220;
            const ox = 150, oy = 110, kx = 28, ky = 8;

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            s += SVG.axes(W, H, ox, oy, { stroke: '#cbd5e1', labelColor: '#94a3b8' });
            s += SVG.func(f, -3.2, 5.0, { ox: ox, oy: oy, kx: kx, ky: ky, color: '#2563eb', strokeWidth: 2.2 });
            s += SVG.point(ox + (-1) * kx, oy - (8 / 3) * ky, { color: '#059669', size: 4, label: '極大(-1, 2.67)', labelPos: 't' });
            s += SVG.point(ox + 3 * kx, oy - (-8) * ky, { color: '#e11d48', size: 4, label: '極小(3, -8)', labelPos: 'b' });
            s += SVG.tangent(f, x0, { ox: ox, oy: oy, kx: kx, ky: ky, color: '#7c3aed', strokeWidth: 1.8, strokeDash: '4,2', len: 120 });
            s += SVG.point(ox + x0 * kx, oy - y0 * ky, { color: '#7c3aed', size: 4.5, label: `P(${x0.toFixed(1)})`, labelPos: 'tl' });
            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "第 (1) 問求導數代入切點坐標求斜率，寫出點斜式；第 (2) 問求導函數駐點，透過一階導數符號表給出單調區間與極值。",
          steps: [
            "<b>(1) 解：</b>",
            "對函數求導得：$f'(x) = x^2 - 2x - 3$。",
            "在 $x = 0$ 處，切線斜率 $k = f'(0) = -3$。切線方程為：$y - 1 = -3(x - 0) \\implies 3x + y - 1 = 0$。",
            "<b>(2) 解：</b>",
            "令 $f'(x) = (x - 3)(x + 1) = 0$，得駐點 $x_1 = -1, x_2 = 3$。",
            "• 當 $x < -1$ 或 $x > 3$ 時，$f'(x) > 0$（遞增）；",
            "• 當 $-1 < x < 3$ 時，$f'(x) < 0$（遞減）。",
            "單調遞增區間為 $(-\\infty, -1)$ 與 $(3, +\\infty)$；單調遞減區間為 $(-1, 3)$。",
            "極大值為 $f(-1) = \\frac{8}{3}$；極小值為 $f(3) = -8$。"
          ],
          ans: "(1) 3x + y - 1 = 0; (2) 遞增區間: (-\\infty, -1), (3, +\\infty); 遞減區間: (-1, 3); 極大值 8/3, 極小值 -8",
          quickTip: "單調區間若寫聯集符號「$\\cup$」在四校聯考嚴格閱卷中常被扣 1 分，請務必用「和」或「逗號」分開書寫！"
        }
      },

      // ---------- 2024 附加卷 Q4 ----------
      {
        year: "2024",
        paper: "附加卷",
        qNum: "解答題 第4題",
        topic: "複數 · 棣美弗定理 (De Moivre) 與複平面旋轉",
        score: "20分",
        q: "已知複數 $z = \\sqrt{3} + i$。<br>(1) 求複數 $z$ 的模長 $|z|$ 及主輻角 $\\text{Arg}(z)$，並寫出其三角形式；<br>(2) 利用棣美弗定理計算 $z^6$ 的值；<br>(3) 若複數 $w = 2\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$，求 $\\frac{z}{w}$ 的代數形式 $a + bi$。",
        knowledge: {
          formulas: [
            "z = r(\\cos \\theta + i\\sin \\theta), \\quad r = \\sqrt{a^2 + b^2}",
            "z^n = r^n (\\cos n\\theta + i\\sin n\\theta) \\quad (\\text{棣美弗定理})",
            "\\frac{z_1}{z_2} = \\frac{r_1}{r_2}[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)]"
          ],
          points: [
            "<b>棣美弗幾何本質</b>：模長做 $n$ 次乘方，輻角做 $n$ 倍旋轉。",
            "<b>主輻角約定</b>：四校聯考附加卷主輻角 $\\text{Arg}(z) \\in (-\\pi, \\pi]$ 或 $[0, 2\\pi)$。",
            "<b>除法旋轉</b>：兩複數相除，模長相除、輻角相減。"
          ],
          pitfall: "第 (3) 問求代數形式 $a + bi$，最後一步必須化簡為精確根式，切忌停留在三角函數形式。"
        },
        visual: function (host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：棣美弗定理 $z^n = r^n(\\cos n\\theta + i\\sin n\\theta)$ 步進旋轉
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
            const thetaDeg = n * 30;
            const rN = Math.pow(2, n);
            infoEl.innerHTML = `當 $n = ${n}$ 時：輻角 $\\theta = ${thetaDeg}^\\circ$，模長 $2^{${n}} = ${rN}$ ${n === 6 ? '🎯 (旋轉落在負實軸上，即 $z^6 = -64$！)' : ''}`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([infoEl]).catch(() => {});

            const W = 360, H = 220;
            const ox = 180, oy = 110;

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            s += SVG.complexPlane(W, H, ox, oy, { stroke: '#cbd5e1', labelColor: '#94a3b8' });
            for (let i = 1; i <= n; i++) {
              const deg = i * 30;
              const rad = (deg * Math.PI) / 180;
              const ri = 25 + i * 10;
              const px = ox + ri * Math.cos(rad);
              const py = oy - ri * Math.sin(rad);
              const isCurrent = i === n;
              s += SVG.vector(ox, oy, px, py, { color: isCurrent ? '#7c3aed' : '#94a3b8', strokeWidth: isCurrent ? 2.5 : 1.2 });
              s += SVG.point(px, py, { color: isCurrent ? '#7c3aed' : '#64748b', size: isCurrent ? 5 : 3, label: `z^${i}`, labelPos: 't' });
            }
            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "第 (1) 問算模與輻角；第 (2) 問代入棣美弗定理；第 (3) 問利用複數除法三角形式運算，最後化簡為根式代數形式。",
          steps: [
            "<b>(1) 解：</b>",
            "模長 $|z| = \\sqrt{(\\sqrt{3})^2 + 1^2} = 2$。因 $z$ 在第一象限，$\\tan\\theta = \\frac{1}{\\sqrt{3}} \\implies \\text{Arg}(z) = \\frac{\\pi}{6}$。",
            "三角形式為：$z = 2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$。",
            "<b>(2) 解：</b>",
            "由棣美弗定理：$$z^6 = 2^6 \\left[\\cos\\left(6 \\times \\frac{\\pi}{6}\\right) + i\\sin\\left(6 \\times \\frac{\\pi}{6}\\right)\\right] = 64(\\cos\\pi + i\\sin\\pi) = -64$$",
            "<b>(3) 解：</b>",
            "$$\\frac{z}{w} = \\frac{2}{2}\\left[\\cos\\left(\\frac{\\pi}{6} - \\frac{\\pi}{4}\\right) + i\\sin\\left(\\frac{\\pi}{6} - \\frac{\\pi}{4}\\right)\\right] = \\cos\\left(-\\frac{\\pi}{12}\\right) + i\\sin\\left(-\\frac{\\pi}{12}\\right)$$",
            "由差角公式得：$$\\frac{z}{w} = \\frac{\\sqrt{6} + \\sqrt{2}}{4} - \\frac{\\sqrt{6} - \\sqrt{2}}{4}i$$"
          ],
          ans: "(1) 2(\\cos(\\pi/6)+i\\sin(\\pi/6)); (2) -64; (3) (\\sqrt{6}+\\sqrt{2})/4 - ((\\sqrt{6}-\\sqrt{2})/4)i",
          quickTip: "代數檢驗法：直接有理化分母 $\\frac{\\sqrt{3}+i}{\\sqrt{2}+\\sqrt{2}i} = \\frac{(\\sqrt{3}+i)(\\sqrt{2}-\\sqrt{2}i)}{4} = \\frac{(\\sqrt{6}+\\sqrt{2})+(\\sqrt{2}-\\sqrt{6})i}{4}$ 迅速核驗。"
        }
      }
    ]
  });

  // ========================== 【2023 正卷】 ==========================
  DECK.push({
    ch: "2023 正卷",
    year: "2023",
    paper: "正卷",
    title: "2023 澳門四校聯考 數學正卷精選",
    color: "#059669",
    sections: [
      "選擇題 第5題 · 對數方程與真數定義域",
      "選擇題 第9題 · 二次函數閉區間極值"
    ],
    slides: [
      // ---------- 2023 正卷 Q5 ----------
      {
        year: "2023",
        paper: "正卷",
        qNum: "選擇題 第5題",
        topic: "指數與對數 · 對數方程與定義域陷阱",
        score: "4分",
        q: "方程式 $\\log_2(x - 1) + \\log_2(x + 1) = 3$ 的實數解為？",
        options: [
          "(A) 2",
          "(B) 3",
          "(C) $\\pm 3$",
          "(D) 4"
        ],
        knowledge: {
          formulas: [
            "\\log_a u + \\log_a v = \\log_a(uv) \\quad (a > 0, a \\ne 1, u > 0, v > 0)",
            "\\log_a N = b \\iff N = a^b"
          ],
          points: [
            "<b>對數運算法則</b>：同底對數相加，真數相乘 $\\log_2[(x-1)(x+1)] = 3$。",
            "<b>定義域優先法則</b>：對數方程求解前必須先寫出真數大於 0 的定義域限制！"
          ],
          pitfall: "真數必須嚴格大於 0：$x - 1 > 0 \\implies x > 1$。解方程得 $x^2 = 9 \\implies x = \\pm 3$，若選 (C) 則落入負根陷阱！"
        },
        solution: {
          thinking: "先寫出真數大於 0 的約束條件，再利用對數乘法性質化為代數二次方程求解，最後檢驗根是否在定義域內。",
          steps: [
            "原方程有意義，必須滿足真數大於零：",
            "$$\\begin{cases} x - 1 > 0 \\implies x > 1 \\\\ x + 1 > 0 \\implies x > -1 \\end{cases} \\implies x > 1$$",
            "由對數性質化簡原方程：",
            "$$\\log_2[(x - 1)(x + 1)] = 3 \\implies (x - 1)(x + 1) = 2^3$$",
            "$$x^2 - 1 = 8 \\implies x^2 = 9 \\implies x = \\pm 3$$",
            "結合定義域 $x > 1$，捨去負根 $x = -3$，故唯一實數解為 $x = 3$。"
          ],
          ans: "(B)",
          quickTip: "代入排除法：直接代入選項！(A) $x=2 \\implies \\log_2 1 + \\log_2 3 = \\log_2 3 \\ne 3$；(B) $x=3 \\implies \\log_2 2 + \\log_2 4 = 1 + 2 = 3$ 吻合！選項 (C) 包含負數直接排除。"
        }
      },

      // ---------- 2023 正卷 Q9 ----------
      {
        year: "2023",
        paper: "正卷",
        qNum: "選擇題 第9題",
        topic: "函數 · 二次函數在閉區間上的最值",
        score: "4分",
        q: "已知二次函數 $f(x) = -x^2 + 4x + c$ 在閉區間 $[0, 3]$ 上的最大值為 $7$，則常數 $c$ 之值為？",
        options: [
          "(A) 1",
          "(B) 2",
          "(C) 3",
          "(D) 4"
        ],
        knowledge: {
          formulas: [
            "f(x) = a(x - h)^2 + k \\quad (\\text{頂點式配方法})",
            "x = -\\frac{b}{2a} \\quad (\\text{拋物線對稱軸})"
          ],
          points: [
            "<b>配方定位頂點</b>：$f(x) = -(x - 2)^2 + c + 4$，頂點為 $(2, c + 4)$，對稱軸為 $x = 2$。",
            "<b>區間最值位置判定</b>：因開口向下且對稱軸 $x = 2 \\in [0, 3]$，最大值必然在頂點處取得，即 $f(2) = c + 4 = 7$。"
          ],
          pitfall: "若對稱軸不在給定區間內，最大值會在區間端點取得；本題務必先確認對稱軸是否在 $[0, 3]$ 內！"
        },
        visual: function (host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📐 動態探究：滑動常數 $c$ 觀察拋物線在 $[0, 3]$ 區間之頂點最大值
            </div>
            <div id="vis-quad-svg" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>常數 $c$：</label>
              <input type="range" id="quadSlider" min="0" max="6" value="3" step="0.5">
              <span class="ival" id="quadVal">3.0</span>
            </div>
            <div class="step-txt" id="quadInfo" style="text-align:center; margin-top:4px;"></div>
          `;

          const svgHost = host.querySelector('#vis-quad-svg');
          const slider = host.querySelector('#quadSlider');
          const valLabel = host.querySelector('#quadVal');
          const infoEl = host.querySelector('#quadInfo');

          function draw(c) {
            valLabel.textContent = c.toFixed(1);
            const maxVal = c + 4;
            infoEl.innerHTML = `頂點坐標 $(2, ${maxVal.toFixed(1)})$，區間最大值 $f(2) = c + 4 = <b>${maxVal.toFixed(1)}</b>$ ${c === 3 ? '🎯 (最大值剛好為 7，得 c = 3！)' : ''}`;
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([infoEl]).catch(() => {});

            const W = 360, H = 220;
            const ox = 110, oy = 160, kx = 32, ky = 14;

            let s = `<svg viewBox="0 0 ${W} ${H}">`;
            s += SVG.axes(W, H, ox, oy, { stroke: '#cbd5e1', labelColor: '#94a3b8' });

            // 區間 [0, 3] 陰影高亮
            const segX0 = ox, segX3 = ox + 3 * kx;
            s += `<rect x="${segX0}" y="20" width="${segX3 - segX0}" height="150" fill="rgba(5,150,105,0.06)" stroke="none"/>`;
            s += SVG.line(segX0, 20, segX0, 170, { color: '#94a3b8', strokeDash: '2,2', strokeWidth: 1 });
            s += SVG.line(segX3, 20, segX3, 170, { color: '#94a3b8', strokeDash: '2,2', strokeWidth: 1 });

            // 拋物線
            const fn = x => - x * x + 4 * x + c;
            s += SVG.func(fn, -0.5, 4.2, { ox: ox, oy: oy, kx: kx, ky: ky, color: c === 3 ? '#059669' : '#2563eb', strokeWidth: 2 });

            // 頂點
            const vtxX = ox + 2 * kx, vtxY = oy - maxVal * ky;
            s += SVG.point(vtxX, vtxY, { color: '#e11d48', size: 4.5, label: `頂點(2, ${maxVal.toFixed(1)})`, labelPos: 't' });

            s += `</svg>`;
            svgHost.innerHTML = s;
          }

          slider.oninput = () => draw(+slider.value);
          draw(+slider.value);
        },
        solution: {
          thinking: "對二次函數進行配方找出對稱軸與頂點，確認對稱軸落在區間 $[0, 3]$ 內，因此最大值在頂點處取得，令其等於 7 解出 $c$。",
          steps: [
            "將二次函數 $f(x) = -x^2 + 4x + c$ 配方：",
            "$$f(x) = -(x^2 - 4x) + c = -(x - 2)^2 + 4 + c$$",
            "該拋物線開口向下，對稱軸為直線 $x = 2$。",
            "因為對稱軸 $x = 2$ 落在區間 $[0, 3]$ 內部，所以當 $x = 2$ 時，$f(x)$ 取得最大值：",
            "$$\\max f(x) = f(2) = -(2 - 2)^2 + 4 + c = c + 4$$",
            "已知最大值為 $7$，令 $c + 4 = 7$，解得 $c = 3$。"
          ],
          ans: "(C)",
          quickTip: "秒殺思路：對稱軸公式 $x = -\\frac{b}{2a} = -\\frac{4}{-2} = 2$。在區間內開口向下，頂點必為最大值！直接代入 $f(2) = -4 + 8 + c = 4 + c = 7 \\implies c = 3$。"
        }
      }
    ]
  });

  // ========================== 【2023 附加卷】 ==========================
  DECK.push({
    ch: "2023 附加卷",
    year: "2023",
    paper: "附加卷",
    title: "2023 澳門四校聯考 數學附加卷精選",
    color: "#d97706",
    sections: [
      "解答題 第1題 · 數學歸納法證明求和公式",
      "解答題 第3題 · 三維空間向量數量積與夾角"
    ],
    slides: [
      // ---------- 2023 附加卷 Q1 ----------
      {
        year: "2023",
        paper: "附加卷",
        qNum: "解答題 第1題",
        topic: "數學歸納法 · 平方和公式規範證明",
        score: "20分",
        q: "用數學歸納法證明：對所有正整數 $n$，恆有：<br>$$1^2 + 2^2 + 3^2 + \\dots + n^2 = \\frac{n(n + 1)(2n + 1)}{6}$$",
        knowledge: {
          formulas: [
            "P(1) \\text{ 成立} \\quad (\\text{奠基步驟})",
            "\\text{假設 } P(k) \\text{ 成立} \\implies \\text{證明 } P(k+1) \\text{ 成立} \\quad (\\text{歸納遞推})"
          ],
          points: [
            "<b>數學歸納法評分結構</b>：",
            "1. 驗證 $n=1$ 奠基（左邊＝右邊＝1）；",
            "2. 清楚寫出「假設當 $n=k$ 時命題成立」；",
            "3. 考察 $n=k+1$ 時，<b>必須嚴格利用歸納假設</b>代換前 $k$ 項；",
            "4. 提取公因式 $\\frac{k+1}{6}$ 整理出目標形式，最後下結論。"
          ],
          pitfall: "在 $n=k+1$ 步驟中如果沒有使用 $n=k$ 的假設，直接用其他代數方法推導，四校聯考閱卷將判定為 0 分！"
        },
        solution: {
          thinking: "標準數學歸納法三部曲：先驗證基礎 $n=1$，設 $n=k$ 成立，再推導 $n=k+1$ 的等式左邊，利用歸納假設化簡並提取公因式 $(k+1)$。",
          steps: [
            "<b>證明：</b>",
            "<b>第一步（奠基）：</b>當 $n = 1$ 時，",
            "左邊 $= 1^2 = 1$；右邊 $= \\frac{1(1 + 1)(2 \\times 1 + 1)}{6} = \\frac{1 \\times 2 \\times 3}{6} = 1$。",
            "左邊 $=$ 右邊，等式成立。",
            "<b>第二步（歸納）：</b>假設當 $n = k$ ($k \\ge 1, k \\in \\mathbb{N}^*$) 時等式成立，即：",
            "$$1^2 + 2^2 + 3^2 + \\dots + k^2 = \\frac{k(k + 1)(2k + 1)}{6}$$",
            "當 $n = k + 1$ 時，等式左邊為：",
            "$$1^2 + 2^2 + \\dots + k^2 + (k + 1)^2 = \\frac{k(k + 1)(2k + 1)}{6} + (k + 1)^2$$",
            "$$= (k + 1) \\left[ \\frac{k(2k + 1)}{6} + (k + 1) \\right] = (k + 1) \\left[ \\frac{2k^2 + k + 6k + 6}{6} \\right]$$",
            "$$= \\frac{(k + 1)(2k^2 + 7k + 6)}{6} = \\frac{(k + 1)(k + 2)(2k + 3)}{6}$$",
            "$$= \\frac{(k + 1)[(k + 1) + 1][2(k + 1) + 1]}{6} = \\text{右邊}$$",
            "因此，當 $n = k + 1$ 時等式亦成立。",
            "<b>結論：</b>由數學歸納法可知，對所有正整數 $n$，等式恆成立。"
          ],
          ans: "命題得證（見詳細踩點步驟）",
          quickTip: "數歸踩點提分要領：目標是湊出包含 $(k+1)$ 的右式。通分時直接提出公因式 $(k+1)$，切忌把整個分子全部展開成三次多項式，避免因式分解出錯。"
        }
      },

      // ---------- 2023 附加卷 Q3 ----------
      {
        year: "2023",
        paper: "附加卷",
        qNum: "解答題 第3題",
        topic: "向量與幾何 · 三維空間向量數量積與夾角",
        score: "20分",
        q: "在空間直角坐標系中，已知三點 $A(1, 0, 2)$，$B(2, 1, 0)$，$C(0, 2, 1)$。<br>(1) 求向量 $\\vec{AB}$ 與 $\\vec{AC}$ 的坐標表示；<br>(2) 求向量 $\\vec{AB}$ 與 $\\vec{AC}$ 的數量積 $\\vec{AB} \\cdot \\vec{AC}$；<br>(3) 求 $\\cos\\angle BAC$ 的值。",
        knowledge: {
          formulas: [
            "\\vec{AB} = (x_B - x_A, y_B - y_A, z_B - z_A)",
            "\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2",
            "\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|}"
          ],
          points: [
            "<b>向量坐標化</b>：終點坐標減去起點坐標。",
            "<b>夾角餘弦公式</b>：數量積除以兩向量模長的乘積。"
          ],
          pitfall: "計算模長時不要漏開根號：$|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$。"
        },
        solution: {
          thinking: "第 (1) 問終點減起點；第 (2) 問對應分量乘積相加；第 (3) 問代入空間向量夾角餘弦公式。",
          steps: [
            "<b>(1) 解：</b>",
            "$$\\vec{AB} = (2 - 1, 1 - 0, 0 - 2) = (1, 1, -2)$$",
            "$$\\vec{AC} = (0 - 1, 2 - 0, 1 - 2) = (-1, 2, -1)$$",
            "<b>(2) 解：</b>",
            "$$\\vec{AB} \\cdot \\vec{AC} = 1(-1) + 1(2) + (-2)(-1) = -1 + 2 + 2 = 3$$",
            "<b>(3) 解：</b>",
            "分別計算向量模長：",
            "$$|\\vec{AB}| = \\sqrt{1^2 + 1^2 + (-2)^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6}$$",
            "$$|\\vec{AC}| = \\sqrt{(-1)^2 + 2^2 + (-1)^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}$$",
            "由夾角餘弦公式：",
            "$$\\cos\\angle BAC = \\frac{\\vec{AB} \\cdot \\vec{AC}}{|\\vec{AB}| |\\vec{AC}|} = \\frac{3}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2}$$"
          ],
          ans: "(1) \\vec{AB}=(1,1,-2), \\vec{AC}=(-1,2,-1); (2) \\vec{AB}\\cdot\\vec{AC}=3; (3) \\cos\\angle BAC = 1/2",
          quickTip: "幾何意義拓展：$\\cos\\angle BAC = \\frac{1}{2} \\implies \\angle BAC = 60^\\circ$！且兩向量模長相等，$\\triangle ABC$ 恰好為正三角形。"
        }
      }
    ]
  });
})();
