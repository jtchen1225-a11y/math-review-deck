/* ============================================================
   svg.js — 澳門四校聯考複習 (JAE) SVG 動態圖形與幾何工具庫
   座標採「數學慣例」：y 向上為正；工具內部自動轉換為螢幕像素坐標。
   支援：平面解析幾何（直線/圓/圓錐曲線）、三角函數幾何圖、微積分動態切線、複數 Argand 平面向量等。
   ============================================================ */
const SV = (() => {
  const RAD = Math.PI / 180;

  // 極坐標 → 螢幕坐標（y 向下）；deg 為數學角度（逆時針為正，0° 指向正右）
  const pt = (cx, cy, r, deg) => [cx + r * Math.cos(deg * RAD), cy - r * Math.sin(deg * RAD)];

  // 兩點連線角度（數學角度 0~360）
  const angleOf = (cx, cy, x, y) => {
    let d = Math.atan2(-(y - cy), x - cx) / RAD;
    return (d + 360) % 360;
  };

  // 取樣折線畫角弧
  const arcPoints = (cx, cy, r, d0, d1, steps = 40) => {
    if (d1 < d0) d1 += 360;
    let s = '';
    for (let i = 0; i <= steps; i++) {
      const d = d0 + (d1 - d0) * (i / steps);
      const [x, y] = pt(cx, cy, r, d);
      s += `${x.toFixed(1)},${y.toFixed(1)} `;
    }
    return s.trim();
  };

  // 角弧 + 角度標記文字
  const angle = (cx, cy, r, d0, d1, color, label, opt = {}) => {
    const pts = arcPoints(cx, cy, r, d0, d1);
    let dm = (d0 + ((d1 < d0 ? d1 + 360 : d1) - d0) / 2);
    const lr = r + (opt.lr || 20);
    const [lx, ly] = pt(cx, cy, lr, dm);
    let out = `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="${opt.w || 2.2}"/>`;
    if (opt.fill) {
      const [x0, y0] = pt(cx, cy, r, d0);
      const [x1, y1] = pt(cx, cy, r, d1);
      out = `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 0 0 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${color}" opacity="0.14"/>` + out;
    }
    if (label) out += `<text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" text-anchor="middle" font-size="${opt.fs || 15}" font-weight="700" fill="${color}">${label}</text>`;
    return out;
  };

  // 直角小方框
  const rightAngle = (cx, cy, d0, d1, size = 13, color = '#64748b') => {
    const [ax, ay] = pt(cx, cy, size, d0);
    const [bx, by] = pt(cx, cy, size, d1);
    const dx = (ax - cx) + (bx - cx), dy = (ay - cy) + (by - cy);
    return `<path d="M${ax.toFixed(1)},${ay.toFixed(1)} L${(cx + dx).toFixed(1)},${(cy + dy).toFixed(1)} L${bx.toFixed(1)},${by.toFixed(1)}" fill="none" stroke="${color}" stroke-width="1.8"/>`;
  };

  // 邊上等長刻度記號
  const ticks = (x1, y1, x2, y2, n = 1, color = '#e11d48', len = 7) => {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const ang = Math.atan2(y2 - y1, x2 - x1);
    const nx = Math.cos(ang + Math.PI / 2), ny = Math.sin(ang + Math.PI / 2);
    const tx = Math.cos(ang), ty = Math.sin(ang);
    let out = '';
    const gap = 5;
    const start = -(n - 1) * gap / 2;
    for (let i = 0; i < n; i++) {
      const off = start + i * gap;
      const bx = mx + tx * off, by = my + ty * off;
      out += `<line x1="${(bx - nx * len).toFixed(1)}" y1="${(by - ny * len).toFixed(1)}" x2="${(bx + nx * len).toFixed(1)}" y2="${(by + ny * len).toFixed(1)}" stroke="${color}" stroke-width="2.2"/>`;
    }
    return out;
  };

  // 端點小圓點
  const dot = (x, y, color = '#1e293b', r = 4.5) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;

  // 頂點 / 文字標籤
  const vlabel = (x, y, text, color = '#1e293b', fs = 15, opt = {}) =>
    `<text x="${x}" y="${y}" font-size="${fs}" ${opt.anchor ? `text-anchor="${opt.anchor}"` : ''} font-weight="${opt.fw || 700}" fill="${color}">${text}</text>`;

  // 線段
  const seg = (x1, y1, x2, y2, color = '#1e293b', w = 2.4, dash = '') =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;

  // 多邊形
  const poly = (points, fill = 'rgba(37,99,235,0.08)', stroke = '#2563eb', w = 2.4) =>
    `<polygon points="${points.map(p => p.join(',')).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linejoin="round"/>`;

  // 箭頭定義
  const arrowDefs = (color = '#2563eb', id = 'arrow') =>
    `<defs><marker id="${id}" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="${color}"/></marker></defs>`;

  // 坐標平面
  const plane = (opt = {}) => {
    const { x0 = 45, y0 = 25, w = 350, h = 230, xmin = -5, xmax = 5, ymin = -4, ymax = 4, step = 1, xLabel = 'x', yLabel = 'y', isComplex = false } = opt;
    const sx = w / (xmax - xmin), sy = h / (ymax - ymin);
    const X = mx => x0 + (mx - xmin) * sx;
    const Y = my => y0 + (ymax - my) * sy;
    let g = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="#fff" stroke="none"/>`;
    // 格線
    for (let x = Math.ceil(xmin); x <= xmax; x += step) {
      const px = X(x);
      g += `<line x1="${px}" y1="${y0}" x2="${px}" y2="${y0 + h}" stroke="${x === 0 ? '#b0bccf' : '#f1f5f9'}" stroke-width="${x === 0 ? 0 : 1}"/>`;
    }
    for (let y = Math.ceil(ymin); y <= ymax; y += step) {
      const py = Y(y);
      g += `<line x1="${x0}" y1="${py}" x2="${x0 + w}" y2="${py}" stroke="${y === 0 ? '#b0bccf' : '#f1f5f9'}" stroke-width="${y === 0 ? 0 : 1}"/>`;
    }
    // 軸
    const y0pos = Math.max(y0, Math.min(y0 + h, Y(0)));
    const x0pos = Math.max(x0, Math.min(x0 + w, X(0)));
    g += `<line x1="${x0}" y1="${y0pos}" x2="${x0 + w}" y2="${y0pos}" stroke="#475569" stroke-width="2" marker-end="url(#axArrow)"/>`;
    g += `<line x1="${x0pos}" y1="${y0 + h}" x2="${x0pos}" y2="${y0}" stroke="#475569" stroke-width="2" marker-end="url(#axArrow)"/>`;
    
    // 標籤
    const xl = isComplex ? 'Re' : xLabel;
    const yl = isComplex ? 'Im' : yLabel;
    g += `<text x="${x0 + w - 4}" y="${y0pos - 7}" text-anchor="end" font-weight="700" font-size="14" fill="#334155">${xl}</text>`;
    g += `<text x="${x0pos + 8}" y="${y0 + 14}" font-weight="700" font-size="14" fill="#334155">${yl}</text>`;

    // 刻度
    for (let x = Math.ceil(xmin); x <= xmax; x += step) {
      if (x === 0) continue;
      g += `<text x="${X(x)}" y="${Math.min(y0 + h - 4, y0pos + 14)}" text-anchor="middle" font-size="11" fill="#94a3b8">${x}</text>`;
    }
    for (let y = Math.ceil(ymin); y <= ymax; y += step) {
      if (y === 0) continue;
      const yTxt = isComplex ? (y === 1 ? 'i' : (y === -1 ? '-i' : `${y}i`)) : `${y}`;
      g += `<text x="${Math.max(x0 + 8, x0pos - 6)}" y="${Y(y) + 4}" text-anchor="end" font-size="11" fill="#94a3b8">${yTxt}</text>`;
    }
    g += `<text x="${x0pos - 7}" y="${y0pos + 14}" text-anchor="end" font-size="11" fill="#94a3b8">O</text>`;
    return {
      svg: g, X, Y, xmin, xmax, ymin, ymax, w, h, x0, y0,
      defs: `<defs><marker id="axArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>`
    };
  };

  // 複數平面 (Argand)
  const complexPlane = (opt = {}) => plane(Object.assign({ isComplex: true }, opt));

  // 繪製連續數學函數曲線
  const func = (P, fn, domain = null, opt = {}) => {
    const xstart = domain ? domain[0] : P.xmin;
    const xend = domain ? domain[1] : P.xmax;
    const steps = opt.steps || 120;
    const dx = (xend - xstart) / steps;
    const color = opt.color || '#2563eb';
    const width = opt.w || 2.4;
    const dash = opt.dash || '';
    
    let paths = [];
    let cur = [];
    for (let i = 0; i <= steps; i++) {
      const mx = xstart + i * dx;
      let my;
      try { my = fn(mx); } catch (e) { my = NaN; }
      if (isNaN(my) || !isFinite(my) || my < P.ymin - 10 || my > P.ymax + 10) {
        if (cur.length > 1) paths.push(cur);
        cur = [];
      } else {
        cur.push([P.X(mx).toFixed(1), P.Y(my).toFixed(1)]);
      }
    }
    if (cur.length > 1) paths.push(cur);

    return paths.map(pts => 
      `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linecap="round" stroke-linejoin="round"/>`
    ).join('');
  };

  // 向量箭頭
  const vector = (P, mx0, my0, mx1, my1, color = '#2563eb', label = '', opt = {}) => {
    const x0 = P.X(mx0), y0 = P.Y(my0);
    const x1 = P.X(mx1), y1 = P.Y(my1);
    const markerId = 'vArr_' + color.replace('#', '');
    const def = `<defs><marker id="${markerId}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${color}"/></marker></defs>`;
    let s = def + `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="${color}" stroke-width="${opt.w || 2.4}" marker-end="url(#${markerId})" stroke-linecap="round"/>`;
    s += dot(x1, y1, color, 4);
    if (label) {
      const lx = (x0 + x1) / 2 + (opt.lx || 10);
      const ly = (y0 + y1) / 2 + (opt.ly || -8);
      s += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-weight="700" font-size="${opt.fs || 14}" fill="${color}">${label}</text>`;
    }
    return s;
  };

  // 圓形 (坐標平面內以數學坐標呈現)
  const circle = (P, mcx, mcy, mr, opt = {}) => {
    const cx = P.X(mcx), cy = P.Y(mcy);
    const rx = Math.abs(P.X(mcx + mr) - cx);
    const color = opt.color || '#2563eb';
    const fill = opt.fill || 'none';
    const dash = opt.dash || '';
    return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${rx.toFixed(1)}" fill="${fill}" stroke="${color}" stroke-width="${opt.w || 2.2}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
  };

  // 橢圓 (坐標平面內 x^2/a^2 + y^2/b^2 = 1)
  const ellipse = (P, mcx, mcy, ma, mb, opt = {}) => {
    const cx = P.X(mcx), cy = P.Y(mcy);
    const rx = Math.abs(P.X(mcx + ma) - cx);
    const ry = Math.abs(P.Y(mcy + mb) - cy);
    const color = opt.color || '#2563eb';
    const fill = opt.fill || 'none';
    return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${fill}" stroke="${color}" stroke-width="${opt.w || 2.2}"/>`;
  };

  // 割線
  const secant = (P, fn, x1, x2, opt = {}) => {
    const y1 = fn(x1), y2 = fn(x2);
    const slope = (y2 - y1) / (x2 - x1);
    const color = opt.color || '#e11d48';
    const lx1 = P.xmin, ly1 = y1 + slope * (lx1 - x1);
    const lx2 = P.xmax, ly2 = y1 + slope * (lx2 - x1);
    
    let s = `<line x1="${P.X(lx1).toFixed(1)}" y1="${P.Y(ly1).toFixed(1)}" x2="${P.X(lx2).toFixed(1)}" y2="${P.Y(ly2).toFixed(1)}" stroke="${color}" stroke-width="${opt.w || 2}" stroke-dasharray="${opt.dash || '5 4'}"/>`;
    s += dot(P.X(x1), P.Y(y1), color, 4.5);
    s += dot(P.X(x2), P.Y(y2), color, 4.5);
    if (opt.label1 !== false) s += vlabel(P.X(x1) - 14, P.Y(y1) - 8, opt.label1 || 'P', color, 14);
    if (opt.label2 !== false) s += vlabel(P.X(x2) + 8, P.Y(y2) - 8, opt.label2 || 'Q', color, 14);
    return { svg: s, slope, x1, y1, x2, y2 };
  };

  // 切線
  const tangent = (P, fn, dfn, x0, opt = {}) => {
    const y0 = fn(x0);
    const k = typeof dfn === 'function' ? dfn(x0) : +dfn;
    const color = opt.color || '#059669';
    const lx1 = P.xmin, ly1 = y0 + k * (lx1 - x0);
    const lx2 = P.xmax, ly2 = y0 + k * (lx2 - x0);
    
    let s = `<line x1="${P.X(lx1).toFixed(1)}" y1="${P.Y(ly1).toFixed(1)}" x2="${P.X(lx2).toFixed(1)}" y2="${P.Y(ly2).toFixed(1)}" stroke="${color}" stroke-width="${opt.w || 2.4}"/>`;
    s += dot(P.X(x0), P.Y(y0), color, 5);
    if (opt.label !== false) s += vlabel(P.X(x0) + 8, P.Y(y0) - 8, opt.label || 'T', color, 14);
    return { svg: s, slope: k, x0, y0 };
  };

  // 差商三角形
  const diffTriangle = (P, x0, y0, dx, dy, opt = {}) => {
    const px0 = P.X(x0), py0 = P.Y(y0);
    const px1 = P.X(x0 + dx), py1 = P.Y(y0 + dy);
    const color = opt.color || '#d97706';
    let s = '';
    s += `<line x1="${px0}" y1="${py0}" x2="${px1}" y2="${py0}" stroke="${color}" stroke-width="1.8" stroke-dasharray="3 3"/>`;
    s += `<line x1="${px1}" y1="${py0}" x2="${px1}" y2="${py1}" stroke="${color}" stroke-width="1.8" stroke-dasharray="3 3"/>`;
    s += `<text x="${(px0 + px1) / 2}" y="${py0 + 14}" text-anchor="middle" font-size="12" font-weight="700" fill="${color}">Δx=${dx > 0 ? '+' : ''}${dx.toFixed(2)}</text>`;
    s += `<text x="${px1 + 6}" y="${(py0 + py1) / 2}" font-size="12" font-weight="700" fill="${color}">Δy=${dy > 0 ? '+' : ''}${dy.toFixed(2)}</text>`;
    return s;
  };

  // --- 高階直覺繪圖 API（支援直接傳入像素坐標）---
  const point = (x, y, opt = {}) => {
    const color = opt.color || '#1e293b';
    const size = opt.size || 4;
    let s = `<circle cx="${x}" cy="${y}" r="${size}" fill="${color}"/>`;
    if (opt.label) {
      let tx = x, ty = y - size - 4, anchor = 'middle';
      if (opt.labelPos === 't') { ty = y - size - 4; }
      else if (opt.labelPos === 'b') { ty = y + size + 14; }
      else if (opt.labelPos === 'tl') { tx = x - size - 4; ty = y - size - 2; anchor = 'end'; }
      else if (opt.labelPos === 'tr') { tx = x + size + 4; ty = y - size - 2; anchor = 'start'; }
      else if (opt.labelPos === 'bl') { tx = x - size - 4; ty = y + size + 12; anchor = 'end'; }
      else if (opt.labelPos === 'br') { tx = x + size + 4; ty = y + size + 12; anchor = 'start'; }
      s += `<text x="${tx}" y="${ty}" text-anchor="${anchor}" font-size="${opt.fontSize || 12}" font-weight="700" fill="${color}">${opt.label}</text>`;
    }
    return s;
  };

  const segment = (x1, y1, x2, y2, opt = {}) => {
    const color = opt.color || '#1e293b';
    const w = opt.strokeWidth || opt.w || 2;
    const dash = opt.strokeDash || opt.dash || '';
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;
  };

  const line = segment;

  const circleNative = (a1, a2, a3, a4 = {}, a5 = {}) => {
    if (typeof a1 === 'object' && a1.X) {
      const P = a1, mcx = a2, mcy = a3, mr = a4, opt = a5;
      const cx = P.X(mcx), cy = P.Y(mcy);
      const rx = Math.abs(P.X(mcx + mr) - cx);
      const color = opt.stroke || opt.color || '#2563eb';
      const fill = opt.fill || 'none';
      const dash = opt.strokeDash || opt.dash || '';
      const w = opt.strokeWidth || opt.w || 2;
      return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${rx.toFixed(1)}" fill="${fill}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
    }
    const cx = a1, cy = a2, r = a3, opt = a4;
    const color = opt.stroke || opt.color || '#2563eb';
    const fill = opt.fill || 'none';
    const dash = opt.strokeDash || opt.dash || '';
    const w = opt.strokeWidth || opt.w || 2;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
  };

  const text = (x, y, str, opt = {}) => {
    const color = opt.color || '#1e293b';
    const fs = opt.fontSize || 13;
    const anchor = opt.align || opt.anchor || 'start';
    const fw = opt.bold ? '800' : (opt.fw || '500');
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${fs}" font-weight="${fw}" fill="${color}">${str}</text>`;
  };

  const axes = (W, H, ox, oy, opt = {}) => {
    const stroke = opt.stroke || '#cbd5e1';
    const labelColor = opt.labelColor || '#94a3b8';
    let s = `<defs><marker id="axArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${stroke}"/></marker></defs>`;
    s += `<line x1="15" y1="${oy}" x2="${W - 15}" y2="${oy}" stroke="${stroke}" stroke-width="1.5" marker-end="url(#axArr)"/>`;
    s += `<line x1="${ox}" y1="${H - 15}" x2="${ox}" y2="15" stroke="${stroke}" stroke-width="1.5" marker-end="url(#axArr)"/>`;
    s += `<text x="${W - 10}" y="${oy - 6}" font-size="11" font-weight="700" fill="${labelColor}" text-anchor="end">x</text>`;
    s += `<text x="${ox + 6}" y="14" font-size="11" font-weight="700" fill="${labelColor}">y</text>`;
    return s;
  };

  const complexPlaneAxes = (W, H, ox, oy, opt = {}) => {
    const stroke = opt.stroke || '#cbd5e1';
    const labelColor = opt.labelColor || '#94a3b8';
    let s = `<defs><marker id="cplxArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${stroke}"/></marker></defs>`;
    s += `<line x1="15" y1="${oy}" x2="${W - 15}" y2="${oy}" stroke="${stroke}" stroke-width="1.5" marker-end="url(#cplxArr)"/>`;
    s += `<line x1="${ox}" y1="${H - 15}" x2="${ox}" y2="15" stroke="${stroke}" stroke-width="1.5" marker-end="url(#cplxArr)"/>`;
    s += `<text x="${W - 10}" y="${oy - 6}" font-size="11" font-weight="700" fill="${labelColor}" text-anchor="end">Re</text>`;
    s += `<text x="${ox + 6}" y="14" font-size="11" font-weight="700" fill="${labelColor}">Im</text>`;
    return s;
  };

  const vectorNative = (a1, a2, a3, a4, opt = {}) => {
    if (typeof a1 === 'object' && a1.X) {
      return vector(a1, a2, a3, a4, opt);
    }
    const x1 = a1, y1 = a2, x2 = a3, y2 = a4;
    const color = opt.color || '#2563eb';
    const w = opt.strokeWidth || 2;
    const markerId = 'vArr_' + color.replace(/[^a-zA-Z0-9]/g, '');
    let s = `<defs><marker id="${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${color}"/></marker></defs>`;
    s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" marker-end="url(#${markerId})" stroke-linecap="round"/>`;
    return s;
  };

  const funcNative = (a1, a2, a3, a4 = {}) => {
    if (typeof a1 === 'object' && a1.X) {
      return func(a1, a2, a3, a4);
    }
    const fn = a1, xmin = a2, xmax = a3, opt = a4;
    const ox = opt.ox || 180, oy = opt.oy || 110;
    const kx = opt.kx || 25, ky = opt.ky || 25;
    const samples = opt.samples || 80;
    const color = opt.color || '#2563eb';
    const w = opt.strokeWidth || 2;
    const dash = opt.strokeDash || '';

    const pts = [];
    const dx = (xmax - xmin) / samples;
    for (let i = 0; i <= samples; i++) {
      const x = xmin + i * dx;
      let y;
      try { y = fn(x); } catch (e) { y = NaN; }
      if (isFinite(y) && !isNaN(y)) {
        pts.push(`${(ox + x * kx).toFixed(1)},${(oy - y * ky).toFixed(1)}`);
      }
    }
    return `<polyline points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linecap="round" stroke-linejoin="round"/>`;
  };

  const tangentNative = (a1, a2, a3, a4, a5) => {
    if (typeof a1 === 'object' && a1.X) {
      return tangent(a1, a2, a3, a4, a5);
    }
    const fn = a1, x0 = a2, opt = a3 || {};
    const ox = opt.ox || 180, oy = opt.oy || 110;
    const kx = opt.kx || 25, ky = opt.ky || 25;
    const color = opt.color || '#7c3aed';
    const w = opt.strokeWidth || 1.8;
    const dash = opt.strokeDash || '';
    const len = opt.len || 100;

    const y0 = fn(x0);
    const eps = 0.0001;
    const slope = (fn(x0 + eps) - fn(x0 - eps)) / (2 * eps);

    const px0 = ox + x0 * kx, py0 = oy - y0 * ky;
    const scrSlope = - slope * (ky / kx);
    const angle = Math.atan(scrSlope);
    const dx = len * Math.cos(angle);
    const dy = len * Math.sin(angle);

    return `<line x1="${(px0 - dx).toFixed(1)}" y1="${(py0 - dy).toFixed(1)}" x2="${(px0 + dx).toFixed(1)}" y2="${(py0 + dy).toFixed(1)}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
  };

  // MathJax 公式卡
  const fbox = (rows, opt = {}) => {
    return `<div style="width:100%;display:flex;flex-direction:column;gap:${opt.gap || 12}px;align-items:center;justify-content:center">` +
      rows.map(r => {
        const ac = r.color || '#2563eb';
        return `<div style="width:${r.w || opt.w || '92%'};background:${r.fill || '#fff'};border:1.5px solid ${r.border || '#e2e8f0'};border-radius:12px;padding:${r.pad || '10px 14px'};text-align:center;box-shadow:0 3px 12px rgba(15,23,42,.05)">` +
          (r.label ? `<div style="font-size:12px;font-weight:900;letter-spacing:.04em;color:${ac};margin-bottom:3px">${r.label}</div>` : '') +
          `<div style="font-size:${r.size || 16.5}px;color:#1e293b">\\(${r.tex}\\)</div>` +
          (r.note ? `<div style="font-size:12.5px;color:#64748b;margin-top:4px">${r.note}</div>` : '') +
          `</div>`;
      }).join('') + `</div>`;
  };

  // 步驟講解器
  const stepper = (h, vb, steps, opt = {}) => {
    const acc = opt.acc !== false;
    const N = steps.length;
    h.innerHTML = `<div style="width:100%;text-align:center">
      <svg viewBox="${vb}" style="max-width:100%"><g class="stepg"></g></svg>
      <div class="ictrl">
        <div class="step-txt"></div>
        <label>步驟 <span class="ival stepv">1</span> / ${N}　<span class="step-hint">→ 拖滑桿逐步推導</span></label>
        <input class="steps-r" type="range" min="0" max="${N}" step="0.01" value="1">
      </div></div>`;
    const g = h.querySelector('.stepg'), txt = h.querySelector('.step-txt'),
      vEl = h.querySelector('.stepv'), sl = h.querySelector('.steps-r');
    const draw = () => {
      const v = +sl.value;
      const i = Math.max(0, Math.min(N - 1, Math.ceil(v) - 1));
      const k = Math.max(0, Math.min(1, v - i));
      vEl.textContent = i + 1;
      txt.innerHTML = `<b>步驟 ${i + 1}</b>｜${steps[i].t || ''}`;
      let s = '';
      if (acc) for (let j = 0; j < i; j++) { if (steps[j].d) s += steps[j].d(1); }
      if (steps[i].d) s += steps[i].d(k);
      g.innerHTML = s;
    };
    sl.oninput = draw; draw();
  };

  return {
    pt, angleOf, arcPoints, angle, rightAngle, ticks, dot, vlabel, seg, poly,
    arrowDefs, plane, complexPlane: complexPlaneAxes, func: funcNative, vector: vectorNative,
    circle: circleNative, ellipse, secant, tangent: tangentNative, diffTriangle, fbox, stepper, RAD,
    point, segment, line, text, axes
  };
})();

// 全域導出
if (typeof window !== 'undefined') {
  window.SVG = window.SV = SV;
  window.MJ = (el) => {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise(el ? [el] : undefined).catch(() => {});
    }
  };
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SV;
}
