/* 澳門四校聯考 · 微積分專題 100 分鐘限時練習 — 第四部分 平面圖形面積與澳門四校聯考（JAE）歷屆真題專攻 (大題 01~04 + 加分題 · 滿分 42分) (支援原生 OMML) */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push(
{
  "ch": "第四部分 平面面積與真題專攻",
  "year": "100分鐘專題",
  "paper": "JAE歷屆真題",
  "title": "第四部分 平面圖形面積與澳門四校聯考（JAE）歷屆真題專攻 (大題 01~04 + 加分題 · 滿分 42分)",
  "color": "#b91c1c",
  "sections": [
    "大題 4.1 · 拋物線與直線圍成區域面積（經典保送題）",
    "大題 4.2 · 兩拋物線相交圍成區域面積（2022 JAE 真題）",
    "大題 4.3 · 三次曲線與切線圍成區域面積（2023 JAE 真題）",
    "大題 4.4 · 兩三次曲線相交圍成區域面積（2025 JAE 真題）",
    "加分挑戰題 · 參數雙拋物線與直線分段積分反求參數（2024 JAE 真題）"
  ]
,
  "slides": [
    {
        "year": "100分鐘專題",
        "paper": "JAE歷屆真題",
        "qNum": "大題 4.1",
        "topic": "拋物線與直線圍成平面區域面積",
        "score": "7分",
        "options": [],
        "q": "【經典保送試題 / 聯考高頻題型】\n求拋物線 $y = x^2 - 2x - 3$ 與直線 $y = x + 1$ 所圍成的平面區域的面積。（7分）",
        "knowledge": {
            "formulas": [
                "S = \\int_a^b [y_{\\text{上}}(x) - y_{\\text{下}}(x)] \\, dx",
                "\\text{阿基米德弓形公式：} S = \\frac{1}{6}|a|(x_2 - x_1)^3"
            ],
            "points": [
                "<b>求交點橫坐標</b>：聯立兩曲線方程解二次方程求積分上下限。",
                "<b>判斷上下位置</b>：在積分區間內取測試點判定上曲線減下曲線。",
                "<b>列式與原函數</b>：規範書寫定積分表達式，嚴謹求原函數代入上下限相減。"
            ],
            "pitfall": "上下曲線減錯導致面積出現負數；代入負數下限 $-1$ 時負號容易算錯。"
        },
        "solution": {
            "thinking": "聯立方程求得交點橫坐標 $x = -1, 4$，在此區間內直線在拋物線上方，列出定積分並求解。",
            "steps": [
                "第一步（聯立求交點）：令 $x^2 - 2x - 3 = x + 1 \\implies x^2 - 3x - 4 = 0$，解得 $x_1 = -1$，$x_2 = 4$；",
                "第二步（判斷上下位置）：在 $[-1, 4]$ 內，直線在拋物線上方，即 $y_{\\text{上}} = x + 1$，$y_{\\text{下}} = x^2 - 2x - 3$；",
                "第三步（列定積分式）：$S = \\int_{-1}^4 [(x + 1) - (x^2 - 2x - 3)] \\, dx = \\int_{-1}^4 (-x^2 + 3x + 4) \\, dx$；",
                "第四步（求原函數並計算）：$\\left[ -\\frac{x^3}{3} + \\frac{3x^2}{2} + 4x \\right]_{-1}^4$\n代入上限 4 得 $\\frac{56}{3}$；代入下限 -1 得 $-\\frac{13}{6}$；\n相減得 $S = \\frac{56}{3} - \\left(-\\frac{13}{6}\\right) = \\frac{125}{6}$。"
            ],
            "ans": "$S = \\frac{125}{6}$",
            "quickTip": "阿基米德秒殺公式驗算：$S = \\frac{1}{6} \\cdot 1 \\cdot (4 - (-1))^3 = \\frac{125}{6}$，秒殺核驗！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>S=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>125</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f></m:oMath>"
        },
        "visual": function(host) {
                    host.innerHTML = `
                      <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
                        <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">📐 拋物線與直線交割面積幾何圖解</div>
                        <svg viewBox="-50 -30 260 170" style="width:100%;max-width:320px;height:170px;background:#1e293b;border-radius:8px;">
                          <!-- 坐標軸 -->
                          <line x1="-30" y1="100" x2="190" y2="100" stroke="#475569" stroke-width="1.5" />
                          <line x1="20" y1="130" x2="20" y2="0" stroke="#475569" stroke-width="1.5" />
                          <text x="180" y="112" fill="#94a3b8" font-size="10">x</text>
                          <text x="10" y="12" fill="#94a3b8" font-size="10">y</text>
                          <!-- 著色面積 -->
                          <path d="M 0 100 Q 40 145 80 100 T 120 40 L 0 100 Z" fill="rgba(239, 68, 68, 0.35)" stroke="#ef4444" stroke-width="1.5" />
                          <!-- 直線 y = x + 1 (通過 (-1,0)->(0,100), (4,5)->(120,40)) -->
                          <line x1="-20" y1="110" x2="140" y2="30" stroke="#38bdf8" stroke-width="2" />
                          <!-- 交點標註 -->
                          <circle cx="0" cy="100" r="4" fill="#fbbf24" />
                          <text x="-25" y="95" fill="#fbbf24" font-size="10" font-weight="bold">(-1, 0)</text>
                          <circle cx="120" cy="40" r="4" fill="#fbbf24" />
                          <text x="125" y="42" fill="#fbbf24" font-size="10" font-weight="bold">(4, 5)</text>
                          <text x="45" y="75" fill="#fca5a5" font-weight="bold" font-size="12">S = 125/6</text>
                        </svg>
                        <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">在 $[-1, 4]$ 區間內，藍色直線在上，紅色拋物線在下。</div>
                      </div>`;
                  }
      },
    {
        "year": "100分鐘專題",
        "paper": "JAE歷屆真題",
        "qNum": "大題 4.2",
        "topic": "兩拋物線相交圍成區域面積（2022 JAE）",
        "score": "8分",
        "options": [],
        "q": "【2022 年澳門四校聯考 JM02 附加卷 第 2(b) 題真題】\n求由曲線 $y = x^2 - 8x + 24$ 及曲線 $y = 8x - x^2$ 所包圍的區域的面積。（8分）",
        "knowledge": {
            "formulas": [
                "S = \\int_a^b [y_{\\text{上}}(x) - y_{\\text{下}}(x)] \\, dx",
                "\\text{二次方程根：} 2x^2 - 16x + 24 = 0 \\implies x = 2, 6"
            ],
            "points": [
                "<b>官方評分點</b>：四校聯考評分細則明確規定，必須明確書寫「當 $2 < x < 6$ 時，曲線 $y = 8x - x^2$ 在曲線 $y = x^2 - 8x + 24$ 之上」，此處佔 1 分步驟分！",
                "<b>原函數代限計算</b>：代入上限 6 恰為 0，代入下限 2 為 $-\\frac{64}{3}$，相減得正數面積。"
            ],
            "pitfall": "漏寫上下曲線相對位置論證（扣 1 分）；被積函數未同除以 2（積分式中被積式係數為 $-2$）。"
        },
        "solution": {
            "thinking": "聯立解得交點 $x=2, 6$。開口向下之拋物線在上方，列出定積分求值。",
            "steps": [
                "第一步（聯立求交點）：令 $x^2 - 8x + 24 = 8x - x^2 \\implies 2x^2 - 16x + 24 = 0$，除以 2 得 $x^2 - 8x + 12 = 0 \\implies (x - 2)(x - 6) = 0$，解得 $x = 2$ 或 $x = 6$；",
                "第二步（判斷上下位置）：當 $2 < x < 6$ 時，曲線 $y = 8x - x^2$ 在曲線 $y = x^2 - 8x + 24$ 之上（取 $x=4$ 檢驗：$16 > 8$）；",
                "第三步（列定積分表達式）：$S = \\int_2^6 [(8x - x^2) - (x^2 - 8x + 24)] \\, dx = \\int_2^6 (-2x^2 + 16x - 24) \\, dx$；",
                "第四步（求原函數並計算）：$\\left[ -\\frac{2}{3}x^3 + 8x^2 - 24x \\right]_2^6$\n代入上限 6 得 0；代入下限 2 得 $-\\frac{64}{3}$；\n相減得 $S = 0 - \\left(-\\frac{64}{3}\\right) = \\frac{64}{3}$。"
            ],
            "ans": "$S = \\frac{64}{3}$",
            "quickTip": "阿基米德公式驗算：$S = \\frac{1}{6} \\cdot 2 \\cdot (6 - 2)^3 = \\frac{1}{3} \\cdot 64 = \\frac{64}{3}$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>S=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>64</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f></m:oMath>"
        },
        "visual": function(host) {
                    host.innerHTML = `
                      <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
                        <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">⚡ 2022 JAE 真題：雙拋物線對稱圍合圖解</div>
                        <svg viewBox="0 0 240 160" style="width:100%;max-width:320px;height:160px;background:#1e293b;border-radius:8px;">
                          <!-- 坐標軸 -->
                          <line x1="20" y1="140" x2="220" y2="140" stroke="#475569" stroke-width="1.5" />
                          <line x1="40" y1="150" x2="40" y2="10" stroke="#475569" stroke-width="1.5" />
                          <!-- 兩曲線在 x=2(80) 與 x=6(160) 相交，高度 y=12 (70) -->
                          <!-- 上拋物線頂點 (4, 16) -> (120, 30); 下拋物線頂點 (4, 8) -> (120, 110) -->
                          <path d="M 80 70 Q 120 30 160 70 Q 120 110 80 70 Z" fill="rgba(168, 85, 247, 0.4)" stroke="#a855f7" stroke-width="2" />
                          <circle cx="80" cy="70" r="4" fill="#38bdf8" />
                          <text x="60" y="65" fill="#38bdf8" font-size="10">x=2</text>
                          <circle cx="160" cy="70" r="4" fill="#38bdf8" />
                          <text x="165" y="65" fill="#38bdf8" font-size="10">x=6</text>
                          <text x="105" y="75" fill="#f3e8ff" font-weight="bold" font-size="12">S = 64/3</text>
                        </svg>
                        <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">開口向下曲線 $y=8x-x^2$ 頂點更高，嚴格位於上方。</div>
                      </div>`;
                  }
      },
    {
        "year": "100分鐘專題",
        "paper": "JAE歷屆真題",
        "qNum": "大題 4.3",
        "topic": "三次曲線與切線圍成區域面積（2023 JAE）",
        "score": "9分",
        "options": [],
        "q": "【2023 年澳門四校聯考 JM02 附加卷 第 2(b) 題真題】\n已知直線 $L: y = x + 4$ 是曲線 $C: y = x^3 + 3x^2 + x$ 在點 $A$ 的一條切線。\n(i) 求點 $A$ 的坐標；（4分）\n(ii) 求由直線 $L$ 與曲線 $C$ 所包圍的區域的面積。（5分）",
        "knowledge": {
            "formulas": [
                "y' = 3x^2 + 6x + 1 = k_L = 1",
                "\\text{切點必為方程之二重根：} (x+2)^2 (x-1) = 0"
            ],
            "points": [
                "<b>切點排除</b>：求導得 $x=0$ 或 $-2$。需檢驗點是否在切線上，$(0,0)$ 不在直線上，故切點必為 $A(-2, 2)$。",
                "<b>三次方程因式分解技巧</b>：切點 $x=-2$ 必定為重根，方程必含因式 $(x+2)^2$，直接整除得 $(x-1)$。"
            ],
            "pitfall": "第(i)問漏檢驗點是否在直線上導致多解；第(ii)問三次方程無法因式分解。"
        },
        "solution": {
            "thinking": "利用導數等於切線斜率求切點 $A(-2, 2)$；聯立三次方程解出另一交點 $x=1$，列定積分求解面積。",
            "steps": [
                "(i) 求點 $A$ 坐標：\n    $y' = 3x^2 + 6x + 1$。令 $3x^2 + 6x + 1 = 1 \\implies 3x(x + 2) = 0 \\implies x = 0$ 或 $-2$。\n    檢驗：若 $x=0$，$y=0$，但直線 $y=0+4=4 \\ne 0$，捨去；\n    若 $x=-2$，$y=(-2)^3+3(-2)^2-2 = 2$，直線 $y=-2+4=2$，符合條件。故 $A(-2, 2)$；",
                "(ii) 求包圍區域面積：\n    聯立方程：$x^3 + 3x^2 + x = x + 4 \\implies x^3 + 3x^2 - 4 = 0$。\n    因 $x=-2$ 為切點，$(x+2)^2$ 必為因式，分解得 $(x+2)^2(x - 1) = 0$，交點為 $x = -2, 1$。\n    在 $[-2, 1]$ 內直線在曲線上，所求面積為：\n    $S = \\int_{-2}^1 [(x+4) - (x^3+3x^2+x)] \\, dx = \\int_{-2}^1 (4 - 3x^2 - x^3) \\, dx$\n       $= \\left[ 4x - x^3 - \\frac{x^4}{4} \\right]_{-2}^1 = \\frac{11}{4} - (-4) = \\frac{27}{4}$。"
            ],
            "ans": "(i) $A(-2, 2)$ ； (ii) $S = \\frac{27}{4}$",
            "quickTip": "切點二重根定理秒解三次方程，定積分代入得 $27/4$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>S=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>27</m:t></m:r></m:num><m:den><m:r><m:t>4</m:t></m:r></m:den></m:f></m:oMath>"
        },
        "visual": function(host) {
                    host.innerHTML = `
                      <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
                        <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">📐 2023 JAE 真題：三次曲線與切線圍成面積</div>
                        <svg viewBox="-50 -30 250 170" style="width:100%;max-width:320px;height:170px;background:#1e293b;border-radius:8px;">
                          <line x1="-30" y1="110" x2="180" y2="110" stroke="#475569" stroke-width="1.5" />
                          <line x1="30" y1="130" x2="30" y2="0" stroke="#475569" stroke-width="1.5" />
                          <!-- 直線 y = x + 4. x=-2(0), y=2(90); x=1(90), y=5(60) -->
                          <line x1="-20" y1="100" x2="120" y2="50" stroke="#38bdf8" stroke-width="2" />
                          <!-- 著色面積 -->
                          <path d="M 0 90 Q 40 115 90 60 L 0 90 Z" fill="rgba(251, 191, 36, 0.4)" stroke="#f59e0b" stroke-width="1.5" />
                          <circle cx="0" cy="90" r="4" fill="#f43f5e" />
                          <text x="-35" y="85" fill="#f43f5e" font-size="10" font-weight="bold">切點 A(-2,2)</text>
                          <circle cx="90" cy="60" r="4" fill="#38bdf8" />
                          <text x="95" y="60" fill="#38bdf8" font-size="10">交點 (1,5)</text>
                          <text x="35" y="80" fill="#fef08a" font-weight="bold" font-size="12">S = 27/4</text>
                        </svg>
                        <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">切點 $x=-2$ 處直線與曲線相切，交點 $x=1$ 處相穿。</div>
                      </div>`;
                  }
      },
    {
        "year": "100分鐘專題",
        "paper": "JAE歷屆真題",
        "qNum": "大題 4.4",
        "topic": "兩三次曲線相交圍成區域面積（2025 JAE）",
        "score": "8分",
        "options": [],
        "q": "【2025 年澳門四校聯考 JM02 附加卷 第 2(b) 題真題】\n求由曲線 $y = x^3 + 3x^2 - 4$ 及曲線 $y = x^3 - 3x + 2$ 所包圍的區域的面積。（8分）",
        "knowledge": {
            "formulas": [
                "S = \\int_a^b [y_{\\text{上}}(x) - y_{\\text{下}}(x)] \\, dx",
                "x^3 + 3x^2 - 4 = x^3 - 3x + 2 \\implies 3x^2 + 3x - 6 = 0"
            ],
            "points": [
                "<b>三次項相消降次</b>：兩條三次曲線相減時，$x^3$ 恰好消去，降為一元二次方程！",
                "<b>上下曲線判定</b>：在 $(-2, 1)$ 取測試點 $x=0$，$y_2(0)=2 > y_1(0)=-4$，確定第二條曲線在上。"
            ],
            "pitfall": "代入下限 $-2$ 時符號運算失誤；差式正負號顛倒。"
        },
        "solution": {
            "thinking": "聯立消去 $x^3$ 解出交點 $x = -2, 1$；判定區間內曲線相對上下位置後列定積分求解。",
            "steps": [
                "第一步（聯立求交點）：令 $x^3 + 3x^2 - 4 = x^3 - 3x + 2 \\implies 3x^2 + 3x - 6 = 0$\n同除以 3：$x^2 + x - 2 = 0 \\implies (x + 2)(x - 1) = 0$，解得 $x = -2$ 或 $x = 1$；",
                "第二步（判斷上下位置）：在 $(-2, 1)$ 取 $x=0$，第一條曲線 $y_1=-4$，第二條曲線 $y_2=2$。因 $2 > -4$，曲線 $y = x^3 - 3x + 2$ 位於上方；",
                "第三步（列定積分式）：$S = \\int_{-2}^1 [(x^3 - 3x + 2) - (x^3 + 3x^2 - 4)] \\, dx = \\int_{-2}^1 (-3x^2 - 3x + 6) \\, dx$；",
                "第四步（求原函數並計算）：$\\left[ -x^3 - \\frac{3}{2}x^2 + 6x \\right]_{-2}^1$\n代入上限 1 得 $\\frac{7}{2}$；代入下限 -2 得 $-10$；\n相減得 $S = \\frac{7}{2} - (-10) = \\frac{27}{2}$。"
            ],
            "ans": "$S = \\frac{27}{2}$",
            "quickTip": "三次項相消後相當於求二次函數面積，阿基米德公式：$\\frac{1}{6} \\cdot 3 \\cdot (1 - (-2))^3 = \\frac{27}{2}$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>S=</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>27</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f></m:oMath>"
        },
        "visual": function(host) {
                    host.innerHTML = `
                      <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
                        <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">⚡ 2025 JAE 最新真題：兩三次曲線圍合區域</div>
                        <svg viewBox="-40 -20 240 150" style="width:100%;max-width:320px;height:150px;background:#1e293b;border-radius:8px;">
                          <line x1="-20" y1="80" x2="180" y2="80" stroke="#475569" stroke-width="1.5" />
                          <line x1="40" y1="130" x2="40" y2="10" stroke="#475569" stroke-width="1.5" />
                          <!-- 交點 x=-2(10), y=0(80); x=1(100), y=0(80) -->
                          <path d="M 10 80 Q 55 20 100 80 Q 55 120 10 80 Z" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" stroke-width="2" />
                          <circle cx="10" cy="80" r="4" fill="#38bdf8" />
                          <text x="-5" y="95" fill="#38bdf8" font-size="10">x=-2</text>
                          <circle cx="100" cy="80" r="4" fill="#38bdf8" />
                          <text x="105" y="95" fill="#38bdf8" font-size="10">x=1</text>
                          <text x="45" y="75" fill="#a7f3d0" font-weight="bold" font-size="12">S = 27/2</text>
                        </svg>
                        <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">兩曲線在 $x=-2$ 與 $x=1$ 兩處相交，圍成葉狀區域。</div>
                      </div>`;
                  }
      },
    {
        "year": "100分鐘專題",
        "paper": "JAE歷屆真題",
        "qNum": "加分挑戰題",
        "topic": "參數雙拋物線與直線分段積分反求參數（2024 JAE）",
        "score": "10分",
        "options": [],
        "q": "★【加分挑戰題（拔尖衝刺・選做）】\n【2024 年澳門四校聯考 JM02 附加卷 第 2(b) 題真題】\n設 $k$ 是正常數。若在第一象限中，由直線 $y = x$ 及兩條曲線 $y = \\frac{x^2}{k}$ 和 $y = \\frac{x^2}{2k}$ 所包圍的區域的面積是 1，求 $k$ 的值。（10分）",
        "knowledge": {
            "formulas": [
                "S = \\int_0^k \\left(\\frac{x^2}{k} - \\frac{x^2}{2k}\\right) dx + \\int_k^{2k} \\left(x - \\frac{x^2}{2k}\\right) dx",
                "S = \\frac{k^2}{2} = 1 \\implies k = \\sqrt{2}"
            ],
            "points": [
                "<b>分段積分必然性</b>：在第一象限中，上方曲線在 $x=k$ 處由 $y = \\frac{x^2}{k}$ 轉變為直線 $y = x$，必須在 $x=k$ 處拆分為兩段積分！",
                "<b>參數反求</b>：積分結果表示為含 $k$ 的代數式 $\\frac{k^2}{2}$，令其等於 1 解出 $k$。"
            ],
            "pitfall": "未分段直接拿直線減拋物線（或兩拋物線相減）積分到底，導致全題失分！"
        },
        "solution": {
            "thinking": "求直線與兩拋物線交點 $x=k, 2k$。分析區域上邊界在 $x=k$ 處發生切換，進行分段積分，令面積等於 1 求 $k$。",
            "steps": [
                "第一步（求交點橫坐標）：\n解 $x = \\frac{x^2}{k} \\implies x = k$；解 $x = \\frac{x^2}{2k} \\implies x = 2k$；",
                "第二步（分析區域分段）：\n• 當 $0 \\le x \\le k$ 時，上邊界為 $y = \\frac{x^2}{k}$，下邊界為 $y = \\frac{x^2}{2k}$；\n• 當 $k \\le x \\le 2k$ 時，上邊界為 $y = x$，下邊界為 $y = \\frac{x^2}{2k}$；",
                "第三步（分段定積分求面積）：\n$S = \\int_0^k \\left( \\frac{x^2}{k} - \\frac{x^2}{2k} \\right) dx + \\int_k^{2k} \\left( x - \\frac{x^2}{2k} \\right) dx$\n   $= \\int_0^k \\frac{x^2}{2k} dx + \\left[ \\frac{x^2}{2} - \\frac{x^3}{6k} \\right]_k^{2k} = \\frac{k^2}{6} + \\frac{k^2}{3} = \\frac{k^2}{2}$；",
                "第四步（求解參數 $k$）：\n已知 $S = 1$，故 $\\frac{k^2}{2} = 1 \\implies k^2 = 2$。\n因 $k > 0$，解得 $k = \\sqrt{2}$。"
            ],
            "ans": "$k = \\sqrt{2}$",
            "quickTip": "分段積分求得面積表達式為 $S = \\frac{k^2}{2}$，令其為 1 直接得 $k = \\sqrt{2}$！",
            "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>k=</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>2</m:t></m:r></m:e></m:rad></m:oMath>"
        },
        "visual": function(host) {
                    host.innerHTML = `
                      <div style="background:#0f172a;border-radius:12px;padding:16px;">
                        <div style="color:#93c5fd;font-weight:600;font-size:13px;text-align:center;margin-bottom:8px;">★ 2024 JAE 拔尖題：動態參數 k 與分段面積探究</div>
                        <div style="display:flex;justify-content:center;align-items:center;gap:10px;margin-bottom:10px;">
                          <label style="color:#f8fafc;font-size:12px;">參數 k：</label>
                          <input type="range" id="kSlider" min="0.8" max="2.0" step="0.05" value="1.41" style="width:140px;accent-color:#38bdf8;">
                          <span id="kVal" style="color:#38bdf8;font-weight:bold;font-size:13px;width:50px;">k=1.41</span>
                        </div>
                        <div id="kStateBox" style="text-align:center;padding:6px;border-radius:6px;background:#064e3b;color:#a7f3d0;font-size:12px;font-weight:600;">
                          當 k = 1.41 (√2) 時：分段總面積 S = k²/2 = 1.000 （完全契合題目條件 ✓）
                        </div>
                      </div>`;
                    const sl = host.querySelector('#kSlider');
                    const valText = host.querySelector('#kVal');
                    const box = host.querySelector('#kStateBox');
                    sl.oninput = () => {
                      const k = parseFloat(sl.value);
                      valText.textContent = 'k=' + k.toFixed(2);
                      const s = (k * k / 2).toFixed(3);
                      if (Math.abs(k - 1.414) < 0.06) {
                        box.style.background = '#064e3b'; box.style.color = '#a7f3d0';
                        box.textContent = `當 k = ${k.toFixed(2)} (√2) 時：總面積 S = ${s} （完全契合題目條件 ✓）`;
                      } else {
                        box.style.background = '#1e293b'; box.style.color = '#93c5fd';
                        box.textContent = `當 k = ${k.toFixed(2)} 時：總面積 S = ${s} (≠ 1)`;
                      }
                    };
                  }
      }
  ]
});
})();
