/* ============ 範例章：示範五種頁型 ============
   把這個檔案複製成 ch1.js 就能直接跑，用來當作寫作範本。
   節次：1-1 靜態圖與公式卡、1-2 互動與步驟器
   對應課綱代碼：（實際使用時請填）
   課綱邊界：（實際使用時請填「本章刻意不放」的內容）
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#2563eb';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  // 標準 SVG 包裝：一定要用這個，圖才會自適應欄寬
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }
  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 15}" font-weight="${o.fw || 800}" fill="${o.c || '#172033'}">${s}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 12}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#dce3ee'}" stroke-width="${o.sw || 1.8}"/>`;

  // ✗ 錯 / ✓ 對　對照列（HTML；易錯頁用表格比硬塞 SVG 好）
  function xoRows(rows) {
    return `<div style="width:97%;margin:0 auto;display:flex;flex-direction:column;gap:9px">` +
      rows.map(r => `<div style="display:flex;gap:8px;align-items:stretch">
        <div style="flex:1;background:#fdeef2;border:1.5px solid #f3c4d0;border-radius:12px;padding:8px 11px">
          <div style="font-size:11.5px;font-weight:900;color:${RED};margin-bottom:3px">✗ 常見錯誤</div>
          <div style="font-size:14px;color:#172033;line-height:1.6">${r.bad}</div></div>
        <div style="flex:1;background:#eef7f2;border:1.5px solid #bfe0d1;border-radius:12px;padding:8px 11px">
          <div style="font-size:11.5px;font-weight:900;color:${GRN};margin-bottom:3px">✓ 正確寫法</div>
          <div style="font-size:14px;color:#172033;line-height:1.6">${r.good}</div></div>
      </div>`).join('') + `</div>`;
  }

  window.DECK.push({
    ch: 1,
    title: '範例章',
    color: C,
    sections: ['1-1 靜態圖與公式卡', '1-2 互動與步驟器'],
    slides: [

      /* ---------- 頁型 A：公式卡（沒有幾何圖時用，不要留白） ---------- */
      {
        sec: '1-1', secName: '靜態圖與公式卡',
        title: '頁型 A：用 SV.fbox 排公式卡',
        points: [
          '沒有幾何圖可畫時，用 <b>SV.fbox</b> 排出對照式的公式卡。',
          '每一列可以有 <b>label</b>（小標）、<b>tex</b>（數學）、<b>note</b>（灰字說明）。',
          '⚠️ <b>tex 裡不要寫 $$</b>，引擎會自動包。'
        ],
        formula: { label: '交叉相乘', tex: 'a:b=c:d\\;\\Longleftrightarrow\\;ad=bc' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '比例式', tex: 'a:b=c:d', color: C, fill: '#eef4ff', border: C, size: 20 },
            { label: '交叉相乘', tex: 'a\\times d=b\\times c', color: GRN, border: '#cfe8dd', size: 18,
              note: '外項相乘＝內項相乘' }
          ]);
        },
        caption: '公式卡是視覺欄的保底選項——<b>絕不要讓右欄只有一行字</b>。',
        example: {
          q: '若 \\(3:5=x:20\\)，求 \\(x\\)。',
          steps: ['交叉相乘：\\(5x=3\\times20=60\\)。', '\\(x=12\\)。'],
          ans: '\\(x=12\\)'
        }
      },

      /* ---------- 頁型 B：靜態幾何圖 ---------- */
      {
        sec: '1-1', secName: '靜態圖與公式卡',
        title: '頁型 B：用 SV 幾何工具畫靜態圖',
        points: [
          '<b>SV.poly</b> 畫多邊形、<b>SV.angle</b> 畫角弧、<b>SV.ticks</b> 標等長邊。',
          '角度用<b>數學角度</b>（逆時針為正、0° 指向右）。',
          'viewBox 寬高比 <b>≥1.35</b>、高度 ≤320，否則會被自動縮小。'
        ],
        formula: { label: '內角和', tex: '\\angle A+\\angle B+\\angle C=180^\\circ' },
        visual: (h) => {
          const A = [220, 60], B = [60, 250], Cc = [380, 250];
          let s = SV.poly([A, B, Cc], 'rgba(37,99,235,0.06)', C, 2.6);
          s += SV.angle(B[0], B[1], 34, 0, 50, RED, '∠B');
          s += SV.angle(Cc[0], Cc[1], 34, 130, 180, GRN, '∠C');
          s += SV.ticks(A[0], A[1], B[0], B[1], 1, VIO);
          s += SV.ticks(A[0], A[1], Cc[0], Cc[1], 1, VIO);
          s += SV.dot(A[0], A[1], '#172033') + SV.vlabel(A[0] - 6, A[1] - 10, 'A');
          s += SV.dot(B[0], B[1], '#172033') + SV.vlabel(B[0] - 18, B[1] + 12, 'B');
          s += SV.dot(Cc[0], Cc[1], '#172033') + SV.vlabel(Cc[0] + 8, Cc[1] + 12, 'C');
          h.innerHTML = svg('0 0 440 290', s);
        },
        caption: '紫色刻度表示 \\(\\overline{AB}=\\overline{AC}\\)，所以這是等腰三角形。',
        example: {
          q: '等腰三角形頂角 \\(50^\\circ\\)，兩底角各幾度？',
          steps: ['兩底角相等，設各為 \\(x\\)。', '\\(50+2x=180\\Rightarrow x=65\\)。'],
          ans: '各 \\(65^\\circ\\)'
        }
      },

      /* ---------- 頁型 C：滑桿互動 ---------- */
      {
        sec: '1-2', secName: '互動與步驟器',
        title: '頁型 C：滑桿互動（本框架的核心價值）',
        points: [
          '控制列 class 必須是 <b>ictrl</b>，數值 span 必須是 <b>ival</b>。',
          '只能用 <b>h.querySelector</b>，禁用 document.getElementById。',
          '最後一定要先呼叫一次 <b>draw()</b>，否則初次進頁是空的。'
        ],
        formula: { label: '面積', tex: 'S=\\text{長}\\times\\text{寬}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl"><label>寬 w ＝ <span class="ival" id="wv">6</span></label>
            <input type="range" id="ws" min="2" max="14" step="1" value="6"></div></div>`;
          const draw = () => {
            const w = +h.querySelector('#ws').value;
            h.querySelector('#wv').textContent = w;
            const L = 16 - w, area = L * w;      // 周長固定 32
            const sc = 11, ox = 220 - w * sc / 2, oy = 150 - L * sc / 2;
            const best = (w === 8);
            let s = TX(220, 22, '周長固定 32 ⇒ 長 ＋ 寬 永遠是 16', { fs: 13.5, c: C, anchor: 'middle' });
            s += BOX(ox, oy, w * sc, L * sc, {
              fill: best ? 'rgba(5,150,105,.12)' : 'rgba(37,99,235,.10)',
              stroke: best ? GRN : C, sw: 2.4, r: 4
            });
            s += TX(220, oy - 8, `長 ＝ ${L}`, { fs: 13, c: best ? GRN : C, anchor: 'middle' });
            s += TX(ox - 10, 150 + 5, `${w}`, { fs: 13, c: VIO, anchor: 'end' });
            s += BOX(24, 232, 392, 46, { fill: best ? '#eef7f2' : '#f6f8fc', stroke: best ? '#bfe0d1' : '#dce3ee' });
            s += TX(220, 262, best ? `面積 ${area} ★ 正方形時面積最大` : `面積 ＝ ${L} × ${w} ＝ ${area}`,
              { fs: 15, c: best ? GRN : '#172033', anchor: 'middle' });
            h.querySelector('#fig').innerHTML = svg('0 0 440 290', s);
          };
          h.querySelector('#ws').oninput = draw;
          draw();
        },
        caption: '好的互動要能<b>回答一個問題</b>：哪個寬度讓面積最大？',
        example: {
          q: '周長 \\(32\\) 的長方形，面積最大是多少？',
          steps: ['長 ＋ 寬 \\(=16\\)。', '兩數和固定時，相等（即正方形）乘積最大：\\(8\\times8\\)。'],
          ans: '\\(64\\)'
        }
      },

      /* ---------- 頁型 D：步驟滑桿（推理／作圖／多步驟計算） ---------- */
      {
        sec: '1-2', secName: '互動與步驟器',
        title: '頁型 D：SV.stepper 逐步展開推理',
        points: [
          '傳入 <b>[{ t: 說明, d: k => SVG片段 }]</b>，滑桿就會逐步展開。',
          '<b>k</b> 是該步驟內 0~1 的進度，可做連續動畫。',
          '<b>opt.acc=false</b> 表示每一步自己畫完整場景（預設會疊加）。'
        ],
        formula: { label: '去括號', tex: '-(a-b)=-a+b' },
        visual: (h) => {
          const card = (x, txt, col) =>
            BOX(x, 96, 84, 56, { fill: col + '1a', stroke: col, sw: 2.2, r: 12 }) +
            TX(x + 42, 130, txt, { fs: 18, c: col, anchor: 'middle' });
          SV.stepper(h, '0 0 440 290', [
            {
              t: '原式：括號前有一個<b>減號</b>在等著',
              d: () => card(40, '5x', BLU) + card(136, '+3', BLU) +
                       TX(240, 130, '−(', { fs: 20, c: RED, anchor: 'middle' }) +
                       card(256, '2x', VIO) + card(352, '−4', VIO)
            },
            {
              t: '減號分配到<b>第一項</b>：2x 變成 −2x',
              d: () => card(40, '5x', BLU) + card(136, '+3', BLU) +
                       card(256, '−2x', RED) + card(352, '−4', VIO)
            },
            {
              t: '減號也要分配到<b>第二項</b>：−4 變成 +4（最常漏這裡）',
              d: () => card(40, '5x', BLU) + card(136, '+3', BLU) +
                       card(256, '−2x', RED) + card(352, '+4', RED) +
                       TX(220, 200, '兩項都要變號！', { fs: 15, c: RED, anchor: 'middle' })
            },
            {
              t: '合併同類項',
              d: () => TX(220, 130, '3x + 7', { fs: 30, c: GRN, anchor: 'middle' })
            }
          ], { acc: false });
        },
        caption: '把「哪一步最容易錯」用顏色標出來，比寫十句話有用。',
        example: {
          q: '化簡 \\((5x+3)-(2x-4)\\)。',
          steps: ['去括號：\\(5x+3-2x+4\\)（兩項都變號）。', '合併：\\(3x+7\\)。'],
          ans: '\\(3x+7\\)'
        }
      },

      /* ---------- 頁型 E：易錯對照（每節結尾放一頁） ---------- */
      {
        sec: '1-2', secName: '互動與步驟器',
        title: '頁型 E：每節結尾放一頁「最常錯的幾件事」',
        points: [
          '用 <b>✗／✓ 對照表</b>，學生最愛看這一頁。',
          '這種頁面用 <b>HTML 表格</b>就好，不必硬塞 SVG。',
          '放大功能會把 HTML 內容<b>連字級一起等比放大</b>，投影很清楚。'
        ],
        visual: (h) => {
          h.innerHTML = xoRows([
            { bad: '\\(-(x+2)=-x+2\\)', good: '\\(-(x+2)=-x-2\\)' },
            { bad: '\\((-2)^4=-16\\)', good: '\\((-2)^4=16\\)' },
            { bad: '代入 \\(x=-3\\)：\\(2x=2-3\\)', good: '\\(2\\times(-3)=-6\\)（代負數要加括號）' }
          ]);
          MJ(h);   // 內容含 MathJax，更新後要重排
        },
        caption: '三個坑：<b>括號沒逐項變號</b>、<b>次方的括號</b>、<b>代負數沒加括號</b>。',
        example: {
          q: '化簡 \\(3-(2x-5)\\)。',
          steps: ['括號內每一項都變號：\\(3-2x+5\\)。', '合併常數：\\(8-2x\\)。'],
          ans: '\\(8-2x\\)'
        }
      }

    ]
  });
})();
