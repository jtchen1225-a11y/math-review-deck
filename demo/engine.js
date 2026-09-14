/* ============================================================
   engine.js — 簡報導覽與渲染引擎
   讀取 window.DECK（各章 push 進來），攤平成投影片序列。
   ============================================================ */
(function () {
  const DECK = window.DECK || [];

  // 攤平：每章先放一張章名分隔頁，再放內容頁
  const flat = [];
  DECK.forEach((chap, ci) => {
    flat.push({
      type: 'divider',
      ch: chap.ch,
      color: chap.color,
      title: chap.title,
      sections: chap.sections,
      year: chap.year,
      paper: chap.paper
    });
    chap.slides.forEach(s => flat.push(Object.assign({
      type: 'slide',
      ch: chap.ch,
      color: chap.color,
      year: s.year || chap.year,
      paper: s.paper || chap.paper
    }, s)));
  });

  let idx = 0;
  let subStep = 0; // 0: 題目審題, 1: 核心考點&公式, 2: 規範步驟與解答

  // ---- MathJax 排版（載入前先重試，載入後自動補排版）----
  function typeset(el, tries = 0) {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([el]).catch(() => {});
    } else if (tries < 60) {
      setTimeout(() => typeset(el, tries + 1), 200);
    }
  }

  // ---- 自動縮放：讓整頁內容在「不捲動」的前提下盡量放大 ----
  // 量測內容自然高度，超過欄位可視高度時才等比縮小（下限 0.5，保留字級）。
  function fitEl(box, content) {
    if (!box || !content) return;
    content.style.transform = 'none';
    const avail = box.clientHeight;
    const need = content.scrollHeight;
    // 留 6px 安全邊界，吸收縮放後的次像素捨入，避免滑桿底緣被裁掉一絲
    if (avail > 0 && need > avail + 1) {
      content.style.transform = 'scale(' + Math.max(0.5, (avail - 6) / need) + ')';
    }
  }
  function fitSlide() {
    if (!slideEl || slideEl.classList.contains('divider')) return;
    const info = slideEl.querySelector('.slide-info');
    if (info) fitEl(info, info.querySelector('.col-fit'));
    const vis = slideEl.querySelector('.slide-visual');
    if (vis) {
      const solWrapper = vis.querySelector('.jae-sol-wrapper');
      if (solWrapper) {
        fitEl(vis, solWrapper);
      } else {
        const host = vis.querySelector('.visual-host');
        if (host) fitEl(host, host);
      }
    }
  }
  // MathJax 排版完成後才量高縮放（公式高度需排版後才確定）
  function typesetAndFit(el, tries = 0) {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([el]).then(fitSlide).catch(fitSlide);
    } else if (tries < 60) {
      setTimeout(() => typesetAndFit(el, tries + 1), 200);
    } else { fitSlide(); }
  }

  /* ========== 範例／圖解「放大成整頁」（方便用畫筆講解）========== */
  let zoomHost = null, zoomHostParent = null;   // 圖解模式被移入放大層的 host 及其原父節點
  function ensureZoom() {
    if (document.getElementById('zoomModal')) return;
    const m = document.createElement('div');
    m.id = 'zoomModal'; m.className = 'zoom-modal hidden';
    m.innerHTML = `<div class="zoom-body" id="zoomBody"></div>`;
    document.body.appendChild(m);
    const bar = document.createElement('div');
    bar.id = 'zoomBar'; bar.className = 'zoom-bar hidden';
    bar.innerHTML = `<div class="zoom-badge" id="zoomBadge"></div>
      <button class="zoom-btn" id="zoomSol">顯示解答</button>
      <button class="zoom-btn zoom-x" id="zoomClose">✕ 關閉</button>`;
    document.body.appendChild(bar);
    bar.querySelector('#zoomClose').onclick = closeZoom;
    bar.querySelector('#zoomSol').onclick = () => {
      const box = document.getElementById('zoomSolBox'); if (!box) return;
      box.classList.toggle('show');
      bar.querySelector('#zoomSol').textContent = box.classList.contains('show') ? '收起解答' : '顯示解答';
      typeset(box);
    };
  }
  function showZoom(s, badgeTail) {
    ensureZoom();
    const chLabel = typeof s.ch === 'number' || /^\d+$/.test(s.ch) ? `第 ${s.ch} 章` : s.ch;
    const secLabel = s.qNum || s.sec || '';
    const titleLabel = s.topic || s.secName || s.title || '';
    document.getElementById('zoomBadge').innerHTML = `${chLabel} · ${secLabel} ${titleLabel}　${badgeTail}`;
    document.getElementById('zoomModal').style.setProperty('--ct', s.color);
    document.getElementById('zoomBar').style.setProperty('--ct', s.color);
    document.getElementById('zoomModal').classList.remove('hidden');
    document.getElementById('zoomBar').classList.remove('hidden');
  }
  function openExampleModal(s) {
    ensureZoom();
    document.getElementById('zoomSol').style.display = '';
    document.getElementById('zoomSol').textContent = '顯示解答';
    document.getElementById('zoomBody').innerHTML =
      `<div class="zoom-q">${s.example.q}</div>
       <div class="zoom-sol" id="zoomSolBox">
         ${s.example.steps ? `<ol>${s.example.steps.map(t => `<li>${t}</li>`).join('')}</ol>` : ''}
         ${s.example.ans ? `<div class="zoom-ans">答：${s.example.ans}</div>` : ''}
       </div>`;
    showZoom(s, '範例');
    typeset(document.getElementById('zoomBody'));
  }
  function openJaeModal(s) {
    ensureZoom();
    document.getElementById('zoomSol').style.display = 'none';
    let optHtml = '';
    if (s.options && s.options.length) {
      optHtml = `<div class="zoom-options ${s.options.length > 4 ? 'grid-opt-5' : ''}">${s.options.map(o => `<div class="zoom-opt-item">${o}</div>`).join('')}</div>`;
    }
    document.getElementById('zoomBody').innerHTML =
      `<div class="zoom-q-full">
        <div class="zoom-q-badge">${s.year ? s.year + '年 ' : ''}${s.paper || ''} · ${s.qNum || s.sec || ''} ${s.topic ? '· ' + s.topic : ''} ${s.score ? `(${s.score})` : ''}</div>
        <div class="zoom-q-text">${s.q}</div>
        ${optHtml}
       </div>`;
    showZoom(s, '試題題幹放大');
    typeset(document.getElementById('zoomBody'));
  }
  function openKpModal(s) {
    ensureZoom();
    document.getElementById('zoomSol').style.display = 'none';
    const kn = s.knowledge;
    if (!kn) return;
    let formHtml = '';
    if (kn.formulas && kn.formulas.length) {
      formHtml = `<div class="zoom-kn-box">
        <div class="zoom-kn-subtitle">📐 必背核心公式與定理</div>
        <div class="zoom-kn-formulas">${kn.formulas.map(f => `<div class="zoom-formula-card">$$${f}$$</div>`).join('')}</div>
      </div>`;
    }
    let pointsHtml = '';
    if (kn.points && kn.points.length) {
      pointsHtml = `<div class="zoom-kn-box">
        <div class="zoom-kn-subtitle">🎯 聯考破題切入點</div>
        <ul class="zoom-kn-list">${kn.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
      </div>`;
    }
    let pitHtml = '';
    if (kn.pitfall) {
      pitHtml = `<div class="zoom-kn-pitfall-box">
        <div class="zoom-pit-head">⚠️ 考生常見易錯盲區</div>
        <div class="zoom-pit-body">${kn.pitfall}</div>
      </div>`;
    }
    document.getElementById('zoomBody').innerHTML =
      `<div class="zoom-kp-full">
        <div class="zoom-kp-badge">${s.year ? s.year + '年 ' : ''}${s.paper || ''} · ${s.qNum || s.sec || ''} 【核心知識點 & 必背公式】</div>
        ${s.topic ? `<div class="zoom-kp-topic"><b>考查考點：</b>${s.topic}</div>` : ''}
        ${formHtml}
        ${pointsHtml}
        ${pitHtml}
      </div>`;
    showZoom(s, '核心考點放大');
    typeset(document.getElementById('zoomBody'));
  }
  function openSolModal(s) {
    ensureZoom();
    document.getElementById('zoomSol').style.display = 'none';
    const stepsHtml = (s.solution && s.solution.steps && s.solution.steps.length)
      ? `<ol class="zoom-steps">${s.solution.steps.map(t => `<li>${t}</li>`).join('')}</ol>`
      : '';
    document.getElementById('zoomBody').innerHTML =
      `<div class="zoom-sol-full">
         <div class="zoom-sol-badge">${s.year ? s.year + '年 ' : ''}${s.paper || ''} · ${s.qNum || s.sec || ''} 【解題思維與規範步驟】</div>
         ${s.solution && s.solution.thinking ? `<div class="zoom-thinking"><b>【解題思路】：</b>${Array.isArray(s.solution.thinking) ? s.solution.thinking.join('<br>') : s.solution.thinking}</div>` : ''}
         ${stepsHtml}
         ${s.solution && s.solution.ans ? `<div class="zoom-ans">參考答案：${s.solution.ans}</div>` : ''}
         ${s.solution && s.solution.quickTip ? `<div class="zoom-quick-tip">⚡ <b>聯考速解訣竅：</b>${s.solution.quickTip}</div>` : ''}
       </div>`;
    showZoom(s, '規範解答放大');
    typeset(document.getElementById('zoomBody'));
  }
  // 放大層：把 host 內容等比放大到填滿整頁
  // 繪圖 SVG 有 viewBox，寬度撐滿就會連同裡面的字一起放大，不必特別處理；
  // 但「重點整理／易錯對照」這類 HTML 內容（fbox 公式卡、表格）字級是固定 px，
  // 框會被撐大、字卻還是原來大小 → 必須用 transform 等比放大整塊。
  function fitZoomHost() {
    const host = zoomHost;
    if (!host) return;
    const body = document.getElementById('zoomBody');
    if (!body) return;
    const isDrawing = !!host.querySelector('svg:not(mjx-container svg)');
    if (isDrawing) { host.style.width = ''; host.style.transform = 'none'; return; }
    // 以「原本在投影片視覺欄的寬度」當基準寬度，再整塊等比放大，維持原有版面比例
    const baseW = +host.dataset.zoomBase || 460;
    host.style.width = baseW + 'px';
    host.style.margin = '0 auto';
    host.style.transformOrigin = 'top center';
    host.style.transform = 'none';
    // .zoom-body > .visual-host 預設 flex:1 會撐滿整個放大層高度，
    // 那樣量到的是「容器高」而不是「內容自然高」，算出來的倍率永遠是 1；
    // 先解除彈性伸展改為 height:auto，才量得到真正需要的高度。
    host.style.flex = 'none';
    host.style.height = 'auto';
    const needH = host.scrollHeight;
    if (!needH) return;
    const k = Math.max(1, Math.min(body.clientWidth / baseW, body.clientHeight / needH, 3.4));
    host.style.transform = 'scale(' + k.toFixed(4) + ')';
  }
  function openVisualModal(s, host) {
    ensureZoom();
    document.getElementById('zoomSol').style.display = 'none';   // 圖解不需要「顯示解答」
    const body = document.getElementById('zoomBody');
    body.innerHTML = '';
    zoomHost = host; zoomHostParent = host.parentNode;
    host.dataset.zoomBase = Math.round(host.getBoundingClientRect().width) || 460;
    host.style.transform = 'none';   // 取消縮圖時的縮放，放大層用滿版
    body.appendChild(host);
    showZoom(s, '圖解');
    // MathJax 排版完才量得到真實高度，排版後再算放大倍率
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([body]).then(fitZoomHost).catch(fitZoomHost);
    } else { typeset(body); setTimeout(fitZoomHost, 300); }
  }
  function closeZoom() {
    const m = document.getElementById('zoomModal');
    if (!m || m.classList.contains('hidden')) return;
    if (zoomHost && zoomHostParent) {
      // 還原放大層加上的行內樣式，否則回到投影片會殘留寬度與縮放
      zoomHost.style.width = ''; zoomHost.style.margin = '';
      zoomHost.style.flex = ''; zoomHost.style.height = '';
      zoomHost.style.transform = ''; zoomHost.style.transformOrigin = '';
      delete zoomHost.dataset.zoomBase;
      zoomHostParent.insertBefore(zoomHost, zoomHostParent.firstChild);   // 把圖放回原視覺欄
      zoomHost = null; zoomHostParent = null;
    }
    document.getElementById('zoomBody').innerHTML = '';
    m.classList.add('hidden');
    document.getElementById('zoomBar').classList.add('hidden');
    if (typeof clearPen === 'function') clearPen();   // 清掉講解時的筆跡
    fitSlide();
  }

  // ---- DOM ----
  const $ = id => document.getElementById(id);
  const slideEl = $('slide');
  const crumbEl = $('crumb');
  const tocEl = $('toc');
  const progFill = $('progressFill');
  const progText = $('progressText');
  const prevBtn = $('prevBtn');
  const nextBtn = $('nextBtn');

  // ---- 封面章節卡 ----
  (function buildCover() {
    const host = $('coverChapters');
    if (!host) return;
    DECK.forEach(c => {
      const card = document.createElement('div');
      card.className = 'cover-card';
      card.style.setProperty('--ct', c.color);
      const chLabel = typeof c.ch === 'number' || /^\d+$/.test(c.ch) ? `第 ${c.ch} 章` : c.ch;
      card.innerHTML = `<div class="cc-num">${chLabel}</div>
        <div class="cc-title">${c.title}</div>
        <div class="cc-list">${c.sections ? c.sections.join('　') : ''}</div>`;
      host.appendChild(card);
    });
  })();

  // ---- 目錄 ----
  function buildTOC() {
    if (!tocEl) return;
    tocEl.innerHTML = '';
    DECK.forEach(chap => {
      const wrap = document.createElement('div');
      wrap.className = 'toc-chapter open';
      wrap.style.setProperty('--ct', chap.color);
      const head = document.createElement('div');
      head.className = 'toc-chead';
      const chLabel = typeof chap.ch === 'number' || /^\d+$/.test(chap.ch) ? `第 ${chap.ch} 章` : chap.ch;
      head.innerHTML = `<span class="toc-dot"></span>${chLabel}　${chap.title}`;
      head.onclick = () => wrap.classList.toggle('open');
      wrap.appendChild(head);
      const items = document.createElement('div');
      items.className = 'toc-items';
      flat.forEach((s, i) => {
        if (s.type !== 'slide' || s.ch !== chap.ch) return;
        const b = document.createElement('button');
        b.className = 'toc-item';
        b.dataset.i = i;
        const secLabel = s.qNum || s.sec || '';
        const titleLabel = s.topic || s.title || (s.q ? (s.q.replace(/<[^>]+>/g, '').substring(0, 16) + '...') : '');
        b.innerHTML = `<span class="ti-sec">${secLabel}</span>${titleLabel}`;
        b.onclick = () => { go(i, 0); if (window.innerWidth <= 1080) tocEl.classList.remove('open'); };
        items.appendChild(b);
      });
      wrap.appendChild(items);
      tocEl.appendChild(wrap);
    });
  }

  function markTOC() {
    tocEl.querySelectorAll('.toc-item').forEach(b => {
      b.classList.toggle('active', +b.dataset.i === idx);
    });
  }

  // ---- 渲染單頁 ----
  function render() {
    const s = flat[idx];
    slideEl.style.setProperty('--ct', s.color);

    if (s.type === 'divider') {
      slideEl.className = 'slide divider';
      const chLabel = typeof s.ch === 'number' || /^\d+$/.test(s.ch) ? `第 ${s.ch} 章` : s.ch;
      slideEl.innerHTML = `
        <div>
          <div class="dv-num">${chLabel}</div>
          <div class="dv-title">${s.title}</div>
          <div class="dv-list">${(s.sections || []).map(x => `<span class="dv-chip">${x}</span>`).join('')}</div>
        </div>`;
      crumbEl.innerHTML = `${chLabel}　<b>${s.title}</b>`;
    } else if (s.q) {
      // ===== 澳門四校聯考（JAE）試題專屬版面 =====
      // 一頁一題：左上題目，左下核心知識點&必背公式，右側解題思維與規範步驟
      slideEl.className = 'slide jae-slide';

      // 左欄：左上題目卡片 + 左下核心知識點卡片（分開兩個獨立區域）
      const info = document.createElement('div');
      info.className = 'slide-info jae-problem-col';

      let html = `
        <div class="jae-header">
          <span class="jae-badge">${s.year ? s.year + '年 ' : ''}${s.paper || ''} · ${s.qNum || s.sec || ''}</span>
          ${s.topic ? `<span class="jae-topic-tag">${s.topic}</span>` : ''}
          ${s.score ? `<span class="jae-score-tag">${s.score}</span>` : ''}
          <div class="jae-flow-steps" id="jaeFlowSteps">
            <button class="flow-step-btn active" data-step="0" title="階段一：審題閱讀">① 審題閱讀</button>
            <span class="flow-arrow">→</span>
            <button class="flow-step-btn" data-step="1" title="階段二：核心考點與必背公式">② 核心考點&公式</button>
            <span class="flow-arrow">→</span>
            <button class="flow-step-btn" data-step="2" title="階段三：解題思維與規範步驟">③ 規範解答與速解</button>
          </div>
        </div>

        <!-- 區域 1 (左上)：題目題幹與選項 -->
        <div class="jae-q-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-size:13px; font-weight:800; color:var(--ink);">📝 試題題幹與選項</span>
            <button class="jae-q-zoom" title="全螢幕放大題目題幹與選項">🔍 放大題目</button>
          </div>
          <div class="jae-q-text">${s.q}</div>
          ${s.options && s.options.length ? `
            <div class="jae-options-grid ${s.options.length > 4 ? 'grid-opt-5' : ''}">
              ${s.options.map(opt => `<div class="jae-opt-item">${opt}</div>`).join('')}
            </div>
          ` : ''}
        </div>

        <!-- 區域 2 (左下)：核心知識點 & 必背公式（獨立卡片，支援放大） -->
        ${s.knowledge ? `
          <div class="jae-kp-card" id="jaeKpCard">
            <div class="jae-kp-header">
              <div class="jae-kp-title"><span class="jae-kp-icon">🎯</span> 核心知識點 & 必背公式</div>
              <div class="jae-kp-actions">
                <button class="jae-kp-zoom" title="全螢幕放大核心考點與必背公式，方便黑板講解">🔍 放大知識點</button>
                <button class="jae-kp-toggle-btn" title="快捷鍵：K">
                  <span class="btn-text">揭曉考點</span>
                  <span class="btn-key">K</span>
                </button>
              </div>
            </div>

            <!-- 預設隱藏時顯示的思考提示卡 -->
            <div class="jae-kp-prompt" id="jaeKpPrompt">
              <span>💡 <b>思考引導：</b>本題涉及哪些核心公式與切入點？按下一步或 [K] 鍵揭曉</span>
            </div>

            <!-- 展開後呈現公式、重點與易錯警示 -->
            <div class="jae-kp-content" id="jaeKpContent">
              ${s.knowledge.formulas && s.knowledge.formulas.length ? `
                <div class="jae-kn-formulas">
                  ${s.knowledge.formulas.map(f => `<div class="jae-formula-item">$$${f}$$</div>`).join('')}
                </div>
              ` : ''}
              ${s.knowledge.points && s.knowledge.points.length ? `
                <ul class="jae-kn-points">
                  ${s.knowledge.points.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
              ` : ''}
              ${s.knowledge.pitfall ? `
                <div class="jae-kn-pitfall">
                  <span class="pitfall-badge">⚠️ 易錯警示</span> ${s.knowledge.pitfall}
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
      `;

      info.innerHTML = '<div class="col-fit">' + html + '</div>';

      // 右欄：動態圖解（如有）+ 解題步驟與解答
      const vis = document.createElement('div');
      vis.className = 'slide-visual jae-sol-col' + (s.visual ? ' has-visual' : ' no-visual');

      let solHtml = `<div class="col-fit jae-sol-wrapper">`;

      if (s.visual) {
        solHtml += `
          <div class="jae-vis-container">
            <div class="visual-host jae-vis-host"></div>
            ${s.caption ? `<div class="visual-caption">${s.caption}</div>` : ''}
            <button class="vis-zoom" title="放大圖解成整頁，方便用畫筆講解">🔍 放大圖解</button>
          </div>
        `;
      }

      // 區域 3：解答卡片（翻到某一題時預設隱藏，按下一步或 A 鍵才揭曉，方便課堂提問）
      const hasSteps = s.solution && ((s.solution.steps && s.solution.steps.length) || s.solution.thinking || s.solution.ans);
      solHtml += `
        <div class="jae-sol-card" id="jaeSolCard">
          <div class="jae-sol-header">
            <div class="jae-sol-title">💡 解題思維與規範步驟</div>
            ${hasSteps ? `
              <div class="jae-sol-actions">
                <button class="jae-sol-zoom" title="放大解答與評分標準至全黑板，方便用畫筆講解">🔍 放大解答</button>
                <button class="jae-sol-toggle-btn" title="快捷鍵：A">
                  <span class="btn-text">揭曉解答</span>
                  <span class="btn-key">A</span>
                </button>
              </div>
            ` : ''}
          </div>
          
          <!-- 課堂提問思考提示卡（預設隱藏解答時呈現） -->
          <div class="jae-sol-prompt" id="jaeSolPrompt">
            <div class="prompt-icon">🎯</div>
            <div class="prompt-title">課堂思考與提問環節</div>
            <div class="prompt-sub">請學生先觀察左欄條件與知識點，構思解題步驟<br>按下鍵盤 <kbd>A</kbd> 或按下一步揭曉規範解答與秒殺訣竅</div>
          </div>

          <div class="jae-sol-content" id="jaeSolContent">
            ${s.solution && s.solution.thinking ? `
              <div class="jae-sol-thinking">
                <div class="thinking-label">【解題思路】</div>
                <div>${Array.isArray(s.solution.thinking) ? s.solution.thinking.join('<br>') : s.solution.thinking}</div>
              </div>
            ` : ''}
            ${s.solution && s.solution.steps && s.solution.steps.length ? `
              <div class="jae-sol-steps">
                <ol>
                  ${s.solution.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
              </div>
            ` : ''}
            ${s.solution && s.solution.ans ? `
              <div class="jae-ans-row">
                <span class="jae-ans-badge">參考答案</span>
                <span class="jae-ans-value">${s.solution.ans}</span>
              </div>
            ` : ''}
            ${s.solution && s.solution.quickTip ? `
              <div class="jae-quick-tip">
                <span class="tip-badge">⚡ 聯考速解訣竅</span> ${s.solution.quickTip}
              </div>
            ` : ''}
          </div>
        </div>
      </div>`;

      vis.innerHTML = solHtml;

      slideEl.innerHTML = '';
      slideEl.appendChild(info);
      slideEl.appendChild(vis);

      // 掛載視覺動態函式或 HTML
      if (s.visual) {
        const host = vis.querySelector('.visual-host');
        if (typeof s.visual === 'function') {
          try { s.visual(host); } catch (e) { host.innerHTML = '<p style="color:#e11d48">視覺載入失敗</p>'; console.error(e); }
        } else {
          host.innerHTML = s.visual || '';
        }
        const vz = vis.querySelector('.vis-zoom');
        if (vz) vz.onclick = () => openVisualModal(s, host);
      }

      // 試題放大按鈕
      const qz = info.querySelector('.jae-q-zoom');
      if (qz) qz.onclick = () => openJaeModal(s);

      // 知識點放大按鈕
      const kpZoom = info.querySelector('.jae-kp-zoom');
      if (kpZoom) kpZoom.onclick = () => openKpModal(s);

      // 解答放大按鈕
      const solZoom = vis.querySelector('.jae-sol-zoom');
      if (solZoom) solZoom.onclick = () => openSolModal(s);

      // 知識點展開/收起互動
      const kpBtn = info.querySelector('.jae-kp-toggle-btn');
      const kpPrompt = info.querySelector('#jaeKpPrompt');
      if (kpBtn) {
        kpBtn.onclick = () => {
          if (subStep === 0) applySubStep(1);
          else if (subStep === 1) applySubStep(0);
          else {
            const kc = info.querySelector('#jaeKpContent');
            if (kc) {
              kc.classList.toggle('show');
              const isShow = kc.classList.contains('show');
              kpBtn.querySelector('.btn-text').textContent = isShow ? '收起考點' : '揭曉考點';
              if (kpPrompt) kpPrompt.style.display = isShow ? 'none' : 'flex';
              if (isShow) typeset(kc);
              fitSlide();
            }
          }
        };
      }
      if (kpPrompt) {
        kpPrompt.onclick = () => applySubStep(1);
      }

      // 解答展開/收起互動
      const solBtn = vis.querySelector('.jae-sol-toggle-btn');
      const solPrompt = vis.querySelector('#jaeSolPrompt');
      if (solBtn) {
        solBtn.onclick = () => {
          if (subStep < 2) applySubStep(2);
          else applySubStep(1);
        };
      }
      if (solPrompt) {
        solPrompt.onclick = () => applySubStep(2);
      }

      // 頂部動線步驟按鈕直接點擊
      info.querySelectorAll('.flow-step-btn').forEach(btn => {
        btn.onclick = () => applySubStep(+btn.dataset.step);
      });

      // 依當前 subStep 初始化 UI 顯隱狀態
      applySubStep(subStep);

      const chLabel = typeof s.ch === 'number' || /^\d+$/.test(s.ch) ? `第 ${s.ch} 章` : s.ch;
      crumbEl.innerHTML = `<b>${chLabel}</b> · ${s.qNum || s.sec || ''} <b>${s.topic || s.title || ''}</b>`;
    } else {
      slideEl.className = 'slide';
      // 左：概念欄
      const info = document.createElement('div');
      info.className = 'slide-info';
      let html = `<div class="badge">第 ${s.ch} 章 · ${s.sec} ${s.secName || ''}</div>
        <h2 class="slide-title">${s.title}</h2>`;
      if (s.formula) {
        html += `<div class="formula">${s.formula.label ? `<div class="formula-label">${s.formula.label}</div>` : ''}$$${s.formula.tex}$$</div>`;
      }
      if (s.points && s.points.length) {
        html += `<ul class="points">${s.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
      }
      if (s.example) {
        html += `<div class="example">
          <div class="ex-head">範例<button class="ex-zoom" title="放大成整頁，方便用畫筆講解">🔍 放大</button></div>
          <div class="ex-q">${s.example.q}</div>
          <button class="ex-toggle">顯示解答</button>
          <div class="ex-sol">
            ${s.example.steps ? `<ol>${s.example.steps.map(t => `<li>${t}</li>`).join('')}</ol>` : ''}
            ${s.example.ans ? `<div class="ex-ans">答：${s.example.ans}</div>` : ''}
          </div>
        </div>`;
      }
      info.innerHTML = '<div class="col-fit">' + html + '</div>';

      // 右：視覺欄
      const vis = document.createElement('div');
      vis.className = 'slide-visual';
      const host = document.createElement('div');
      host.className = 'visual-host';
      vis.appendChild(host);
      if (s.caption) {
        const cap = document.createElement('div');
        cap.className = 'visual-caption';
        cap.innerHTML = s.caption;
        vis.appendChild(cap);
      }
      // 圖解「放大成整頁」按鈕（浮在視覺欄右上角）
      const visZoom = document.createElement('button');
      visZoom.className = 'vis-zoom';
      visZoom.title = '放大成整頁，方便用畫筆講解';
      visZoom.textContent = '🔍 放大';
      visZoom.onclick = () => openVisualModal(s, host);
      vis.appendChild(visZoom);

      slideEl.innerHTML = '';
      slideEl.appendChild(info);
      slideEl.appendChild(vis);

      // 視覺內容：字串 or 函式
      if (typeof s.visual === 'function') {
        try { s.visual(host); } catch (e) { host.innerHTML = '<p style="color:#e11d48">視覺載入失敗</p>'; console.error(e); }
      } else {
        host.innerHTML = s.visual || '';
      }

      // 範例展開
      const tog = info.querySelector('.ex-toggle');
      if (tog) {
        const sol = info.querySelector('.ex-sol');
        tog.onclick = () => {
          sol.classList.toggle('show');
          tog.textContent = sol.classList.contains('show') ? '收起解答' : '顯示解答';
          // 展開/收起解答會改變概念欄高度 → 排版後重新縮放
          if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([sol]).then(fitSlide).catch(fitSlide);
          else fitSlide();
        };
      }
      // 範例「放大成整頁」按鈕
      const exZoom = info.querySelector('.ex-zoom');
      if (exZoom) exZoom.onclick = () => openExampleModal(s);

      crumbEl.innerHTML = `第 ${s.ch} 章 · ${s.sec} <b>${s.title}</b>`;
    }

    // 進度
    progFill.style.width = ((idx + 1) / flat.length * 100) + '%';
    progText.textContent = `${idx + 1} / ${flat.length}`;
    updateNavButtons();
    markTOC();

    // MathJax（若尚未載入完成，typeset 會自動重試補上）；排版後自動縮放使整頁免捲動
    typesetAndFit(slideEl);
    slideEl.scrollTop = 0;
    if (typeof clearPen === 'function') clearPen(); // 換頁清除筆跡
  }

  function updateNavButtons() {
    const s = flat[idx];
    if (!s) return;

    if (s.type === 'divider') {
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === flat.length - 1;
      prevBtn.textContent = '‹ 上一頁';
      nextBtn.textContent = '開始本卷 ›';
      return;
    }

    if (s.q) {
      prevBtn.disabled = (idx === 0 && subStep === 0);
      nextBtn.disabled = (idx === flat.length - 1 && subStep === 2);

      if (subStep === 0) {
        nextBtn.textContent = '下一步：核心考點 ›';
        prevBtn.textContent = idx === 0 ? '‹ 上一頁' : '‹ 上一題';
      } else if (subStep === 1) {
        nextBtn.textContent = '下一步：規範解答 ›';
        prevBtn.textContent = '‹ 上一步';
      } else {
        nextBtn.textContent = idx === flat.length - 1 ? '結束複習' : '下一題 ›';
        prevBtn.textContent = '‹ 上一步';
      }
    } else {
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === flat.length - 1;
      prevBtn.textContent = '‹ 上一頁';
      nextBtn.textContent = idx === flat.length - 1 ? '結束' : '下一頁 ›';
    }
  }

  function applySubStep(step) {
    const s = flat[idx];
    if (!s || s.type !== 'slide' || !s.q) return;

    subStep = Math.max(0, Math.min(2, step));

    // 1. 更新頂部動線按鈕 (① 審題閱讀 -> ② 核心考點&公式 -> ③ 規範解答與速解)
    slideEl.querySelectorAll('.flow-step-btn').forEach(btn => {
      const bStep = +btn.dataset.step;
      btn.classList.toggle('active', bStep === subStep);
      btn.classList.toggle('done', bStep < subStep);
    });

    // 2. 區域 2 (左下)：核心知識點 & 必背公式
    const kpContent = slideEl.querySelector('#jaeKpContent');
    const kpPrompt = slideEl.querySelector('#jaeKpPrompt');
    const kpBtn = slideEl.querySelector('.jae-kp-toggle-btn');
    if (kpContent) {
      const showKp = subStep >= 1;
      kpContent.classList.toggle('show', showKp);
      if (kpPrompt) kpPrompt.style.display = showKp ? 'none' : 'flex';
      if (kpBtn) {
        const btnText = kpBtn.querySelector('.btn-text');
        if (btnText) btnText.textContent = showKp ? '收起考點' : '揭曉考點';
      }
      if (showKp) typeset(kpContent);
    }

    // 3. 區域 3 (右側)：解題思維與規範步驟
    const solContent = slideEl.querySelector('#jaeSolContent');
    const solPrompt = slideEl.querySelector('#jaeSolPrompt');
    const solBtn = slideEl.querySelector('.jae-sol-toggle-btn');
    if (solContent) {
      const showSol = subStep >= 2;
      solContent.classList.toggle('show', showSol);
      if (solPrompt) solPrompt.style.display = showSol ? 'none' : 'flex';
      if (solBtn) {
        const btnText = solBtn.querySelector('.btn-text');
        if (btnText) btnText.textContent = showSol ? '收起解答' : '揭曉解答';
      }
      if (showSol) typeset(solContent);
    }

    // 4. 更新導航按鈕文字與狀態
    updateNavButtons();

    // 5. 重新自適應縮放，確保全螢幕不產生垂直捲軸
    fitSlide();
  }

  function go(i, initialSubStep = 0) {
    closeZoom();
    idx = Math.max(0, Math.min(flat.length - 1, i));
    subStep = initialSubStep;
    render();
  }
  function next() {
    const s = flat[idx];
    if (s && s.type === 'slide' && s.q && subStep < 2) {
      applySubStep(subStep + 1);
      return;
    }
    if (idx < flat.length - 1) go(idx + 1, 0);
  }
  function prev() {
    const s = flat[idx];
    if (s && s.type === 'slide' && s.q && subStep > 0) {
      applySubStep(subStep - 1);
      return;
    }
    if (idx > 0) {
      const prevS = flat[idx - 1];
      go(idx - 1, (prevS && prevS.type === 'slide' && prevS.q) ? 2 : 0);
    }
  }

  // ---- 事件 ----
  const app = $('app');
  function toggleSidebar() {
    if (window.innerWidth > 1080) app.classList.toggle('toc-collapsed');
    else tocEl.classList.toggle('open');
    // 版面寬度改變 → 重新縮放（延一格等 grid 重排完成）
    requestAnimationFrame(fitSlide);
  }
  prevBtn.onclick = prev;
  nextBtn.onclick = next;
  $('tocToggle').onclick = toggleSidebar;
  $('homeBtn').onclick = () => { app.classList.add('hidden'); $('cover').classList.remove('hidden'); };
  $('startBtn').onclick = () => { $('cover').classList.add('hidden'); app.classList.remove('hidden'); fitPen(); go(0, 0); };

  /* ================= 授課教具 ================= */
  const canvas = $('penCanvas'), penCtx = canvas.getContext('2d');
  const laserDot = $('laserDot');
  let laserOn = false, penOn = false, drawing = false, erasing = false, penColor = '#e11d48', lastPt = null;

  // 雷射拖尾：獨立畫布，畫出會隨時間淡出的紅色軌跡（不影響畫筆畫布）
  const laserCanvas = document.createElement('canvas');
  laserCanvas.className = 'laser-canvas';
  document.body.appendChild(laserCanvas);
  const lctx = laserCanvas.getContext('2d');
  let laserPts = [];           // 近期軌跡點 {x, y, t}
  let laserRAF = null;
  const LASER_LIFE = 1600;     // 每段筆跡殘留時間（毫秒）→ 之後淡出消失
  function drawLaserTrail() {
    syncLaserCanvas();
    const now = performance.now();
    laserPts = laserPts.filter(p => now - p.t < LASER_LIFE);
    lctx.clearRect(0, 0, laserCanvas.width, laserCanvas.height);
    for (let i = 1; i < laserPts.length; i++) {
      const a = laserPts[i - 1], b = laserPts[i];
      const alpha = Math.max(0, 1 - (now - b.t) / LASER_LIFE);   // 越新越濃，隨時間淡出
      lctx.strokeStyle = 'rgba(255,42,42,' + (0.6 * alpha).toFixed(3) + ')';
      lctx.lineWidth = 3 + 5 * alpha;
      lctx.beginPath(); lctx.moveTo(a.x, a.y); lctx.lineTo(b.x, b.y); lctx.stroke();
    }
    if (laserOn || laserPts.length > 1) laserRAF = requestAnimationFrame(drawLaserTrail);
    else { lctx.clearRect(0, 0, laserCanvas.width, laserCanvas.height); laserRAF = null; }
  }

  function fitPen() {
    const w = window.innerWidth, h = window.innerHeight, dpr = window.devicePixelRatio || 1;
    if (canvas._w === w && canvas._h === h) return; // 尺寸未變就不重設，避免清掉筆跡
    canvas._w = w; canvas._h = h;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    penCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    penCtx.lineCap = 'round'; penCtx.lineJoin = 'round';
  }
  // 雷射畫布尺寸自我校正（不受 fitPen 的 early-return 影響；尺寸相符時為 no-op）
  function syncLaserCanvas() {
    const w = window.innerWidth, h = window.innerHeight, dpr = window.devicePixelRatio || 1;
    const cw = Math.round(w * dpr), ch = Math.round(h * dpr);
    if (laserCanvas.width === cw && laserCanvas.height === ch) return;
    laserCanvas.width = cw; laserCanvas.height = ch;
    laserCanvas.style.width = w + 'px'; laserCanvas.style.height = h + 'px';
    lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lctx.lineCap = 'round'; lctx.lineJoin = 'round';
  }
  function clearPen() { if (penCtx) penCtx.clearRect(0, 0, canvas.width, canvas.height); }

  function setLaser(on) {
    laserOn = on;
    if (on) setPen(false);
    app.classList.toggle('laser-on', on);
    laserDot.classList.toggle('hidden', !on);
    $('dkLaser').classList.toggle('active', on);
    if (on) { syncLaserCanvas(); if (!laserRAF) laserRAF = requestAnimationFrame(drawLaserTrail); }
    // 關閉時不清點：讓已畫出的拖尾自然淡出後停止
  }
  function setPen(on) {
    penOn = on;
    if (on) setLaser(false);
    app.classList.toggle('pen-on', on);
    canvas.style.pointerEvents = on ? 'auto' : 'none';
    $('dkPen').classList.toggle('active', on);
    $('dkColors').classList.toggle('hidden', !on);
  }

  // 雷射點跟隨 + 記錄拖尾軌跡
  document.addEventListener('mousemove', e => {
    if (laserOn) {
      laserDot.style.left = e.clientX + 'px'; laserDot.style.top = e.clientY + 'px';
      laserPts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (laserPts.length > 600) laserPts.shift();
    }
  });

  // 畫筆繪製（滑鼠＋觸控）
  const ptOf = e => { const t = e.touches ? e.touches[0] : e; return { x: t.clientX, y: t.clientY }; };
  function penStart(e) { if (!penOn) return; drawing = true; lastPt = ptOf(e); e.preventDefault(); }
  function penMove(e) {
    if (!penOn || !drawing) return;
    const p = ptOf(e);
    penCtx.globalCompositeOperation = erasing ? 'destination-out' : 'source-over';
    penCtx.strokeStyle = penColor;
    penCtx.lineWidth = erasing ? 26 : 3.6;
    penCtx.beginPath(); penCtx.moveTo(lastPt.x, lastPt.y); penCtx.lineTo(p.x, p.y); penCtx.stroke();
    lastPt = p; e.preventDefault();
  }
  function penEnd() { drawing = false; }
  canvas.addEventListener('mousedown', penStart);
  canvas.addEventListener('mousemove', penMove);
  window.addEventListener('mouseup', penEnd);
  canvas.addEventListener('touchstart', penStart, { passive: false });
  canvas.addEventListener('touchmove', penMove, { passive: false });
  window.addEventListener('touchend', penEnd);

  // 工具列按鈕
  $('dkSidebar').onclick = toggleSidebar;
  $('dkPrev').onclick = prev;
  $('dkNext').onclick = next;
  $('dkLaser').onclick = () => setLaser(!laserOn);
  $('dkPen').onclick = () => setPen(!penOn);
  $('dkClear').onclick = clearPen;
  $('dkErase').onclick = () => {
    erasing = !erasing;
    $('dkErase').classList.toggle('active', erasing);
    if (erasing && !penOn) setPen(true);
  };
  document.querySelectorAll('.dcolor').forEach(b => {
    b.onclick = () => {
      penColor = b.dataset.c; erasing = false;
      $('dkErase').classList.remove('active');
      document.querySelectorAll('.dcolor').forEach(x => x.classList.toggle('active', x === b));
      if (!penOn) setPen(true);
    };
  });
  $('dkFull').onclick = () => {
    if (!document.fullscreenElement) (document.documentElement.requestFullscreen && document.documentElement.requestFullscreen());
    else document.exitFullscreen();
  };
  window.addEventListener('resize', () => { fitPen(); fitSlide(); fitZoomHost(); });
  // 拖動滑桿／步驟器時，說明文字行數可能改變（例如步驟說明從一行變兩行），
  // 導致視覺欄需要重新量高縮放；用 rAF 去抖，避免拖曳過程重複計算
  let _refitRAF = null;
  slideEl.addEventListener('input', () => {
    if (_refitRAF) return;
    _refitRAF = requestAnimationFrame(() => { _refitRAF = null; fitSlide(); });
  });
  fitPen();

  document.addEventListener('keydown', e => {
    if ($('app').classList.contains('hidden')) {
      if (e.key === 'Enter' || e.key === ' ') { $('startBtn').click(); }
      return;
    }
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') go(0, 0);
    else if (e.key === 'End') go(flat.length - 1, 0);
    else if (e.key === 'Escape') { closeZoom(); setLaser(false); setPen(false); }
    else if (e.key === 'l' || e.key === 'L') setLaser(!laserOn);
    else if (e.key === 'p' || e.key === 'P') setPen(!penOn);
    else if (e.key === 'c' || e.key === 'C') clearPen();
    else if (e.key === 'k' || e.key === 'K') {
      const kpBtn = slideEl.querySelector('.jae-kp-toggle-btn');
      if (kpBtn) { kpBtn.click(); return; }
    }
    else if (e.key === 'a' || e.key === 'A') {
      const jaeBtn = slideEl.querySelector('.jae-sol-toggle-btn');
      if (jaeBtn) { jaeBtn.click(); return; }
      const exTog = slideEl.querySelector('.ex-toggle');
      if (exTog) { exTog.click(); return; }
    }
    else if (e.key === 'q' || e.key === 'Q') {
      const qz = slideEl.querySelector('.jae-q-zoom');
      if (qz) { qz.click(); return; }
    }
  });

  buildTOC();

  // 深連結：#present 直接進入簡報；#p=N 直接跳到第 N 頁
  (function bootFromHash() {
    const hash = location.hash || '';
    const m = hash.match(/#p=(\d+)/);
    if (hash === '#present' || m) {
      $('cover').classList.add('hidden');
      $('app').classList.remove('hidden');
      fitPen();
      go(m ? +m[1] : 0, 0);
    }
  })();
  // 不自動 render，等按「開始複習」；但若直接想看也可預先 render
})();
