/* 2021 澳門四校聯考 · 數學正卷 (20 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];

  DECK.push({
    ch: "2021 正卷",
    year: "2021",
    paper: "正卷",
    title: "2021 澳門四校聯考 數學正卷",
    color: "#4f46e5",
    sections: ["選擇題 1~15 題", "解答題 1~5 題"],
    slides: [
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第1題",
      "topic": "集合論 · 不等式解集與集合交集元素個數",
      "score": "選擇題",
      "q": "若集合 $P = \\{1, 2, 3, 5, 7, 11\\}$，$Q = \\{x: x^2 - 15x + 36 < 0\\}$，則 $P \\cap Q$ 中元素的個數為<br>A. 2<br>B. 3<br>C. 4<br>D. 5<br>E. 1",
      "knowledge": {
            "formulas": [
                  "x^2 - 15x + 36 < 0 \\iff (x - 3)(x - 12) < 0 \\iff 3 < x < 12",
                  "P \\cap Q = \\{x \\in P : 3 < x < 12\\}"
            ],
            "points": [
                  "<b>一元二次不等式</b>：因式分解 $(x - 3)(x - 12) < 0$，兩根之間為解集 $(3, 12)$。",
                  "<b>交集運算</b>：從集合 $P$ 挑選落在 $(3, 12)$ 內的元素。"
            ],
            "pitfall": "注意開區間不包含端點 3！因此 3 不在交集中。"
      },
      "solution": {
            "thinking": "解一元二次不等式求集合 $Q$ 的範圍，再逐一檢驗集合 $P$ 的元素是否在該開區間內。",
            "steps": [
                  "解不等式 $x^2 - 15x + 36 < 0$：",
                  "因式分解得 $(x - 3)(x - 12) < 0$，解得 $3 < x < 12$。故 $Q = (3, 12)$。",
                  "已知 $P = \\{1, 2, 3, 5, 7, 11\\}$，落在 $(3, 12)$ 內的元素有：",
                  "$5, 7, 11$ 共 3 個（注意 3 不屬於 $Q$）。",
                  "因此 $P \\cap Q = \\{5, 7, 11\\}$，元素個數為 3。"
            ],
            "ans": "B",
            "quickTip": "端點檢驗法：端點 3 不在開區間內，$5, 7, 11$ 三個數秒殺選 B！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第2題",
      "topic": "應用題 · 合作工程問題工作效率計算",
      "score": "選擇題",
      "q": "已知瑪麗和約翰兩人分別要用 4 小時及 3 小時完成某件工作。若他們一起做，需要多少小時才能完成 5 件相同的工作？<br>A. 32/5<br>B. 35/4<br>C. 35/2<br>D. 20/3<br>E. 60/7",
      "knowledge": {
            "formulas": [
                  "\\text{工作效率 } v = \\frac{\\text{工作量}}{\\text{時間}}",
                  "\\text{合作總時間 } T = \\frac{\\text{目標總工作量}}{v_1 + v_2}"
            ],
            "points": [
                  "<b>工作效率</b>：瑪麗效率為 $\\frac{1}{4}$，約翰效率為 $\\frac{1}{3}$。",
                  "<b>合作效率相加</b>：兩人合作效率 $v = \\frac{1}{4} + \\frac{1}{3} = \\frac{7}{12}$ 件/小時。"
            ],
            "pitfall": "題目要求完成「5 件」相同工作，非 1 件，分子為 5！"
      },
      "solution": {
            "thinking": "設一件工作總量為 1，求出兩人的工作效率和，再以 5 件工作量除以合作效率。",
            "steps": [
                  "瑪麗每小時完成工作量的 $\\frac{1}{4}$，約翰每小時完成 $\\frac{1}{3}$。",
                  "兩人合作每小時可完成：$\\frac{1}{4} + \\frac{1}{3} = \\frac{7}{12}$ 件工作。",
                  "完成 5 件工作所需時間為：",
                  "$$t = \\frac{5}{\\frac{7}{12}} = 5 \\times \\frac{12}{7} = \\frac{60}{7} \\text{ 小時} $$"
            ],
            "ans": "E",
            "quickTip": "$$t = \\frac{5}{\\frac{1}{4} + \\frac{1}{3}} = \\frac{5}{\\frac{7}{12}} = \\frac{60}{7}$$ 秒殺選 E！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第3題",
      "topic": "數列 · 等差數列前 $n$ 項和與通項公式",
      "score": "選擇題",
      "q": "有一等差數列前 $n$ 項之總和為 $n^2$，求此數列的第 10 項。<br>A. 19<br>B. 21<br>C. 28<br>D. 31<br>E. 40",
      "knowledge": {
            "formulas": [
                  "a_n = S_n - S_{n-1} \\quad (n \\ge 2)",
                  "a_{10} = S_{10} - S_9"
            ],
            "points": [
                  "<b>差分法求項</b>：數列任意項 $a_n$ 等於前 $n$ 項和減去前 $n-1$ 項和。",
                  "<b>奇數數列性質</b>：連續奇數之和 $1 + 3 + 5 + \\dots + (2n-1) = n^2$，故通項 $a_n = 2n - 1$。"
            ],
            "pitfall": "不用大費周章解聯立求首項公差，直接 $S_{10} - S_9$ 最快且不易出錯！"
      },
      "solution": {
            "thinking": "利用 $a_n = S_n - S_{n-1}$ 直接計算 $S_{10} - S_9$。",
            "steps": [
                  "已知前 $n$ 項和公式為 $S_n = n^2$。",
                  "則第 10 項為：",
                  "$$a_{10} = S_{10} - S_9 = 10^2 - 9^2 = 100 - 81 = 19 $$",
                  "（驗證：$a_n = n^2 - (n-1)^2 = 2n - 1$，故 $a_{10} = 2(10) - 1 = 19$）。"
            ],
            "ans": "A",
            "quickTip": "$10^2 - 9^2 = (10 - 9)(10 + 9) = 19$ 口算 1 秒出答案！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第4題",
      "topic": "代數 · 二次函數恆正條件與判別式",
      "score": "選擇題",
      "q": "若對所有實數 $x$，$y = mx^2 + 6x + 3$ 都為正數，求 $m$ 的取值範圍。<br>A. $0 < m < 3$<br>B. $m > 3$<br>C. $-3 < m < 3$<br>D. $-3 < m < 0$<br>E. 以上皆非",
      "knowledge": {
            "formulas": [
                  "ax^2 + bx + c > 0 \\text{ 恆成立} \\iff a > 0 \\text{ 且 } \\Delta = b^2 - 4ac < 0"
            ],
            "points": [
                  "<b>開口方向</b>：二次項係數需大於 0，即 $m > 0$（拋物線開口向上）。",
                  "<b>與 $x$ 軸無交點</b>：判別式 $\\Delta < 0$，圖像整體在 $x$ 軸上方。"
            ],
            "pitfall": "若 $m = 0$ 則退化為一次函數 $y = 6x + 3$，不可恆為正數；且需同時滿足 $m > 0$ 與 $\\Delta < 0$。"
      },
      "solution": {
            "thinking": "二次函數恆為正數，需二次項係數大於 0 且判別式小於 0。",
            "steps": [
                  "要使 $y = mx^2 + 6x + 3 > 0$ 對所有實數 $x$ 恆成立：",
                  "1. 開口必須向上：$m > 0$；",
                  "2. 圖形與 $x$ 軸無交點，判別式嚴格小於 0：",
                  "$$\\Delta = 6^2 - 4(m)(3) = 36 - 12m < 0 $$",
                  "解得 $12m > 36 \\implies m > 3$。",
                  "綜合兩者：$m > 3$。"
            ],
            "ans": "B",
            "quickTip": "開口向上 $m > 0$，判別式 $36 - 12m < 0 \\implies m > 3$，選 B！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第5題",
      "topic": "方程 · 一元二次方程倒數根變換",
      "score": "選擇題",
      "q": "已知 $-2x^2 + 3x - 7 = 0$ 的根為 $\\alpha$ 和 $\\beta$。下列哪一個方程的根為 $\\frac{1}{\\alpha}$ 和 $\\frac{1}{\\beta}$？<br>A. $x^2 - 3x + 7 = 0$<br>B. $7x^2 - 3x + 2 = 0$<br>C. $7x^2 + 3x + 2 = 0$<br>D. $2x^2 - 3x - 7 = 0$<br>E. 以上皆非",
      "knowledge": {
            "formulas": [
                  "\\text{倒數根變換：將 } x \\text{ 換成 } \\frac{1}{y}",
                  "a\\left(\\frac{1}{y}\\right)^2 + b\\left(\\frac{1}{y}\\right) + c = 0 \\iff cy^2 + by + a = 0"
            ],
            "points": [
                  "<b>倒數根係數逆轉</b>：二次方程的根變為倒數時，係數次序反轉：$ax^2 + bx + c = 0 \\to cx^2 + bx + a = 0$。",
                  "<b>韋達定理驗證</b>：$\\alpha + \\beta = 3/2$，$\\alpha\\beta = 7/2$。$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{3}{7}$，$\\frac{1}{\\alpha\\beta} = \\frac{2}{7}$。"
            ],
            "pitfall": "注意原方程整理為 $2x^2 - 3x + 7 = 0$，首末係數交換後為 $7x^2 - 3x + 2 = 0$。"
      },
      "solution": {
            "thinking": "令 $y = \\frac{1}{x} \\iff x = \\frac{1}{y}$ 代入原方程，整理即可得到以新根為變數的一元二次方程。",
            "steps": [
                  "原方程為 $-2x^2 + 3x - 7 = 0 \\iff 2x^2 - 3x + 7 = 0$。",
                  "設新變數 $y = \\frac{1}{x}$，則 $x = \\frac{1}{y}$，代入原方程：",
                  "$$2\\left(\\frac{1}{y}\\right)^2 - 3\\left(\\frac{1}{y}\\right) + 7 = 0 $$",
                  "兩邊同乘以 $y^2$：",
                  "$$2 - 3y + 7y^2 = 0 \\iff 7y^2 - 3y + 2 = 0 $$",
                  "將變數寫回 $x$，即得方程 $7x^2 - 3x + 2 = 0$。"
            ],
            "ans": "B",
            "quickTip": "倒數根即係數首尾顛倒：$2x^2 - 3x + 7 = 0 \\implies 7x^2 - 3x + 2 = 0$ 秒殺選 B！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第6題",
      "topic": "平面幾何 · 矩形與相交相切圓面積容斥原理",
      "score": "選擇題",
      "q": "右圖中兩個半徑相等的圓與長方形的上、下邊相切。若長方形的長和寬分別為 $7\\text{ cm}$ 及 $4\\text{ cm}$，而兩個圓的相交部份有面積 $3\\text{ cm}^2$，陰影部份面積為多少 $\\text{cm}^2$？<br>A. $31 - 8\\pi$<br>B. $27 - 8\\pi$<br>C. $27 - 4\\pi$<br>D. $21 - 4\\pi$<br>E. 以上皆非",
      "knowledge": {
            "formulas": [
                  "S_{\\text{矩形}} = L \\times W = 7 \\times 4 = 28",
                  "S_{\\text{圓}} = \\pi r^2 = \\pi (2^2) = 4\\pi",
                  "S_{C_1 \\cup C_2} = S_{C_1} + S_{C_2} - S_{C_1 \\cap C_2} = 4\\pi + 4\\pi - 3 = 8\\pi - 3"
            ],
            "points": [
                  "<b>相切定半徑</b>：兩圓與寬度為 $4\\text{ cm}$ 的矩形上下邊相切，直徑即為寬度 $4\\text{ cm}$，半徑 $r = 2\\text{ cm}$。",
                  "<b>容斥原理</b>：兩圓並集面積 $=$ 兩圓面積和 $-$ 重疊部分面積 $= 8\\pi - 3$。",
                  "<b>陰影部分面積</b>：矩形面積減去兩圓並集面積。"
            ],
            "pitfall": "兩圓並集面積是 $8\\pi - 3$，減去時需變號：$28 - (8\\pi - 3) = 31 - 8\\pi$。"
      },
      "solution": {
            "thinking": "由長方形寬度求圓半徑，利用容斥原理求兩圓覆蓋的總面積，再用長方形總面積相減。",
            "steps": [
                  "1. 圓與長方形上下邊相切，寬為 $4\\text{ cm}$，因此圓的直徑為 $4\\text{ cm}$，半徑 $r = 2\\text{ cm}$。",
                  "2. 每個圓的面積為 $S = \\pi (2^2) = 4\\pi\\text{ cm}^2$。",
                  "3. 兩圓相交重疊面積為 $3\\text{ cm}^2$，由容斥原理，兩圓所覆蓋的總面積為：",
                  "$$S_{C_1 \\cup C_2} = S_1 + S_2 - S_{\\text{交}} = 4\\pi + 4\\pi - 3 = 8\\pi - 3 $$",
                  "4. 長方形面積為 $7 \\times 4 = 28\\text{ cm}^2$。",
                  "5. 故長方形內未被兩圓覆蓋的陰影面積為：",
                  "$$S_{\\text{陰影}} = 28 - (8\\pi - 3) = 31 - 8\\pi $$"
            ],
            "ans": "A",
            "quickTip": "長方形面積 28，減去 $(8\\pi - 3)$，得 $28 - 8\\pi + 3 = 31 - 8\\pi$ 秒選 A！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第7題",
      "topic": "指數函數 · 換元法與值域取值範圍",
      "score": "選擇題",
      "q": "若方程式 $9^{-x^2} - 4 \\cdot 3^{-x^2} = k$ 有實數解，下列哪個一定成立？<br>A. $k > 0$<br>B. $-4 \\le k \\le 1$<br>C. $-3 \\le k < 0$<br>D. $0 < k \\le 3$<br>E. 以上皆非",
      "knowledge": {
            "formulas": [
                  "9^{-x^2} = (3^{-x^2})^2",
                  "x \\in \\mathbb{R} \\implies x^2 \\ge 0 \\implies -x^2 \\le 0 \\implies t = 3^{-x^2} \\in (0, 1]"
            ],
            "points": [
                  "<b>換元法降次</b>：令 $t = 3^{-x^2}$，則方程化為 $t^2 - 4t = k$。",
                  "<b>新變數取值範圍</b>：因為 $x^2 \\ge 0$，指數 $-x^2 \\le 0$，故底數為 3 時 $t \\in (0, 1]$！",
                  "<b>二次函數在受限區間之值域</b>：$f(t) = t^2 - 4t = (t - 2)^2 - 4$ 在 $(0, 1]$ 上單調遞減。"
            ],
            "pitfall": "切勿將 $t$ 當成全體正實數 $(0, \\infty)$！因為指數上是 $-x^2 \\le 0$，所以 $t \\le 3^0 = 1$！"
      },
      "solution": {
            "thinking": "換元令 $t = 3^{-x^2}$，求出 $t$ 的受限定義域 $(0, 1]$，再求二次函數在該區間上的值域。",
            "steps": [
                  "對實數 $x$，$x^2 \\ge 0 \\implies -x^2 \\le 0$。",
                  "因此 $t = 3^{-x^2}$ 的取值範圍為 $0 < t \\le 3^0 = 1$，即 $t \\in (0, 1]$。",
                  "原方程化為：$t^2 - 4t = k$。",
                  "考慮函數 $g(t) = t^2 - 4t = (t - 2)^2 - 4$：",
                  "其對稱軸為 $t = 2$。在區間 $(0, 1]$ 上，$g(t)$ 嚴格單調遞減。",
                  "當 $t = 1$（即 $x = 0$）時，取得最小值 $g(1) = 1^2 - 4(1) = -3$；",
                  "當 $t \\to 0^+$（即 $x \\to \\pm\\infty$）時，$g(t) \\to 0$。",
                  "故 $k$ 的取值範圍是 $[-3, 0)$，即 $-3 \\le k < 0$。"
            ],
            "ans": "C",
            "quickTip": "$t = 3^{-x^2} \\in (0, 1]$，$g(t) = t^2 - 4t$ 在 $t=1$ 取最小 $-3$，$t\\to 0$ 趨近 0，值域 $[-3, 0)$ 秒殺選 C！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第8題",
      "topic": "多項式 · 因式定理與未知係數求解",
      "score": "選擇題",
      "q": "設 $f(x) = -16x^3 - mx - m$。若 $f(x)$ 能被 $2x + 1$ 整除，求 $m$ 之值。<br>A. $-1$<br>B. 1<br>C. 2<br>D. 4<br>E. 6",
      "knowledge": {
            "formulas": [
                  "f(x) \\text{ 被 } (ax + b) \\text{ 整除 } \\iff f\\left(-\\frac{b}{a}\\right) = 0"
            ],
            "points": [
                  "<b>因式定理</b>：多項式被 $2x + 1$ 整除，則代入 $x = -\\frac{1}{2}$ 必有 $f\\left(-\\frac{1}{2}\\right) = 0$。",
                  "<b>解一元一次方程</b>：代入後化簡得 $m$ 的一次方程求解。"
            ],
            "pitfall": "計算 $(-1/2)^3 = -1/8$，注意負負得正。"
      },
      "solution": {
            "thinking": "根據因式定理，$f(-1/2) = 0$，代入列出關於 $m$ 的方程。",
            "steps": [
                  "由因式定理，$f(x)$ 被 $2x + 1$ 整除 $\\iff f\\left(-\\frac{1}{2}\\right) = 0$。",
                  "代入 $x = -\\frac{1}{2}$：",
                  "$$f\\left(-\\frac{1}{2}\\right) = -16\\left(-\\frac{1}{2}\\right)^3 - m\\left(-\\frac{1}{2}\\right) - m = 0 $$",
                  "化簡各項：",
                  "$$-16\\left(-\\frac{1}{8}\\right) + \\frac{m}{2} - m = 0 $$",
                  "$$2 - \\frac{m}{2} = 0 \\implies \\frac{m}{2} = 2 \\implies m = 4 $$"
            ],
            "ans": "D",
            "quickTip": "代入 $x = -1/2$：$2 - m/2 = 0 \\implies m = 4$ 秒殺選 D！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第9題",
      "topic": "數論與二項式 · 二項式展開末兩位十位數字",
      "score": "選擇題",
      "q": "$103^{10}$ 的十位數字（右面起計第二個數字；例如 43128 的十位數字是 2）是<br>A. 2<br>B. 3<br>C. 4<br>D. 7<br>E. 以上皆非",
      "knowledge": {
            "formulas": [
                  "(100 + 3)^{10} = \\sum_{k=0}^{10} \\binom{10}{k} 100^{10-k} 3^k",
                  "N \\pmod{100} \\text{ 決定十位與個位數字}"
            ],
            "points": [
                  "<b>二項式展開取模</b>：$103 = 100 + 3$，展開式中包含 $100^2$ 或更高次冪的項皆為 100 的倍數，對後兩位無貢獻。",
                  "<b>高次同餘</b>：只需計算末兩項 $\\binom{10}{1} \\times 100 \\times 3^9 + 3^{10}$ 模 100 的值。"
            ],
            "pitfall": "十位數字是右邊數來第二位，非個位數。"
      },
      "solution": {
            "thinking": "利用二項式定理展開 $(100 + 3)^{10}$，只保留對模 100 有貢獻的項。",
            "steps": [
                  "將 103 拆為 $100 + 3$：",
                  "$$103^{10} = (100 + 3)^{10} = \\binom{10}{10} 3^{10} + \\binom{10}{9} (100)(3^9) + \\dots $$",
                  "其中含有 $100$ 的項：$\\binom{10}{9} \\times 100 \\times 3^9 = 10 \\times 100 \\times 3^9 = 1000 \\times 3^9$，是 1000 的倍數，對後兩位完全無影響！",
                  "因此只需計算 $3^{10} \\pmod{100}$：",
                  "$$3^2 = 9, \\quad 3^4 = 81, \\quad 3^8 = 81^2 = (80 + 1)^2 = 6400 + 160 + 1 \\equiv 61 \\pmod{100} $$",
                  "$$3^{10} = 3^8 \\times 3^2 \\equiv 61 \\times 9 = 549 \\equiv 49 \\pmod{100} $$",
                  "末兩位數字為 49，因此十位數字為 4。"
            ],
            "ans": "C",
            "quickTip": "$103^{10} \\equiv 3^{10} \\pmod{100}$。$3^5 = 243 \\equiv 43$，$(43)^2 = 1849 \\equiv 49$，十位數字為 4，選 C！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第10題",
      "topic": "對數方程 · 換元法解對數聯立方程",
      "score": "選擇題",
      "q": "若 $\\log_4 x = y - 3$ 及 $2(\\log_4 x)^2 = 4 - y$，則 $x =$<br>A. $\\frac{1}{4}$ 或 2<br>B. $\\frac{1}{2}$ 或 4<br>C. $\\frac{7}{2}$ 或 2<br>D. $\\frac{1}{4}$ 或 $\\frac{7}{2}$<br>E. 2 或 4",
      "knowledge": {
            "formulas": [
                  "t = \\log_4 x \\iff x = 4^t",
                  "2t^2 = 4 - (t + 3) \\iff 2t^2 + t - 1 = 0"
            ],
            "points": [
                  "<b>消元法</b>：由第一式得 $y = \\log_4 x + 3$，代入第二式化為關於 $\\log_4 x$ 的一元二次方程。",
                  "<b>對數還原真數</b>：解出 $t$ 後利用 $x = 4^t$ 求真數 $x$。"
            ],
            "pitfall": "$4^{1/2} = \\sqrt{4} = 2$，$4^{-1} = \\frac{1}{4}$，注意不要誤算為乘除。"
      },
      "solution": {
            "thinking": "令 $t = \\log_4 x$，將 $y$ 用 $t$ 表示後代入第二個方程解一元二次方程。",
            "steps": [
                  "令 $t = \\log_4 x$。由第一個方程得：$y = t + 3$。",
                  "代入第二個方程 $2t^2 = 4 - y$：",
                  "$$2t^2 = 4 - (t + 3) = 1 - t $$",
                  "移項整理：",
                  "$$2t^2 + t - 1 = 0 \\iff (2t - 1)(t + 1) = 0 $$",
                  "解得 $t = \\frac{1}{2}$ 或 $t = -1$。",
                  "還原求 $x$：",
                  "當 $t = \\frac{1}{2}$ 時，$x = 4^{1/2} = 2$；",
                  "當 $t = -1$ 時，$x = 4^{-1} = \\frac{1}{4}$。",
                  "故 $x = \\frac{1}{4}$ 或 2。"
            ],
            "ans": "A",
            "quickTip": "令 $t = \\log_4 x$，$2t^2 + t - 1 = 0 \\implies t = 1/2, -1 \\implies x = 2, 1/4$ 秒選 A！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第11題",
      "topic": "三角函數圖像 · 振幅、週期與垂直位移判定",
      "score": "選擇題",
      "q": "圖中所示為 __________ 的圖像。<br>A. $y = 3 + 2\\cos \\frac{x}{2}$<br>B. $y = 3 + 2\\cos 2x$<br>C. $y = 3 + 2\\cos x$<br>D. $y = 1 + 2\\cos \\frac{x}{2}$<br>E. $y = 1 + 2\\cos 2x$",
      "knowledge": {
            "formulas": [
                  "y = d + A\\cos(\\omega x)",
                  "A = \\frac{y_{\\max} - y_{\\min}}{2}, \\quad d = \\frac{y_{\\max} + y_{\\min}}{2}, \\quad T = \\frac{2\\pi}{\\omega}"
            ],
            "points": [
                  "<b>平衡位置（中心線）</b>：$d = \\frac{5 + 1}{2} = 3$。",
                  "<b>振幅</b>：$A = \\frac{5 - 1}{2} = 2$。",
                  "<b>週期特徵</b>：波峰在 $x = 0$，波谷在 $x = \\frac{\\pi}{2}$，半週期為 $\\frac{\\pi}{2}$，故週期 $T = \\pi$，$\\omega = \\frac{2\\pi}{T} = 2$。"
            ],
            "pitfall": "小心週期：波峰到波谷是半個週期！$\\frac{T}{2} = \\frac{\\pi}{2} \\implies T = \\pi \\implies \\omega = 2$。"
      },
      "solution": {
            "thinking": "從圖像讀出最大值、最小值確定中心線與振幅，從波峰到波谷確定週期，進而確定角頻率 $\\omega$。",
            "steps": [
                  "1. 由圖像觀察最大值為 $y_{\\max} = 5$，最小值為 $y_{\\min} = 1$。",
                  "2. 垂直平移中心線為：$d = \\frac{5 + 1}{2} = 3$；振幅為：$A = \\frac{5 - 1}{2} = 2$。",
                  "3. 圖像在 $x = 0$ 處取得最大值 5，說明為標準餘弦函數（無初相）。",
                  "4. 最小值出現在 $x = \\frac{\\pi}{2}$，即半週期為 $\\frac{\\pi}{2}$：",
                  "$$\\frac{T}{2} = \\frac{\\pi}{2} \\implies T = \\pi $$",
                  "5. 由週期公式 $T = \\frac{2\\pi}{\\omega}$ 得：$\\omega = \\frac{2\\pi}{\\pi} = 2$。",
                  "綜合以上，函數解析式為 $y = 3 + 2\\cos 2x$。"
            ],
            "ans": "B",
            "quickTip": "中心線 $y=3$，振幅 2，$\\frac{\\pi}{2}$ 處到底部 $\\implies T = \\pi \\implies 2x$。秒選 B！"
      },
      "visual": function(host) {
          host.innerHTML = `
            <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
              📈 動態探究：三角函數 $y = d + A\cos(\omega x)$ 圖像特徵
            </div>
            <div id="vis-trig-2021" style="width:100%; max-width:380px;"></div>
            <div class="ictrl">
              <label>頻率 $\omega$: <span id="lbl-om" style="font-weight:bold; color:var(--primary);">2</span></label>
              <input type="range" id="rng-om" min="0.5" max="3" step="0.5" value="2" style="width:100%;">
            </div>
          `;
          function render(om) {
            const el = host.querySelector('#vis-trig-2021');
            if (!el) return;
            const W = 360, H = 200;
            const ox = 50, oy = 170;
            const kx = 180 / Math.PI; // 1 rad = 57 px
            const ky = 26; // 1 unit = 26 px
            
            let pts = [];
            for (let px = 0; px <= 280; px += 2) {
              let xVal = px / kx;
              let yVal = 3 + 2 * Math.cos(om * xVal);
              let sy = oy - yVal * ky;
              pts.push(`${ox + px},${sy}`);
            }

            el.innerHTML = `
              <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="background:#fff; border:1px solid #ddd; border-radius:8px;">
                <!-- Grid & Axes -->
                <line x1="${ox}" y1="${oy}" x2="${ox+290}" y2="${oy}" stroke="#333" stroke-width="1.5"/>
                <line x1="${ox}" y1="15" x2="${ox}" y2="${oy+10}" stroke="#333" stroke-width="1.5"/>
                <text x="${ox+295}" y="${oy+4}" font-size="12" fill="#333" font-style="italic">x</text>
                <text x="${ox-4}" y="12" font-size="12" fill="#333" font-style="italic">y</text>
                
                <!-- Y tick marks: 1, 3, 5 -->
                <line x1="${ox-4}" y1="${oy-1*ky}" x2="${ox}" y2="${oy-1*ky}" stroke="#666"/>
                <text x="${ox-14}" y="${oy-1*ky+4}" font-size="11" fill="#666">1</text>
                <line x1="${ox-4}" y1="${oy-3*ky}" x2="${ox}" y2="${oy-3*ky}" stroke="#666"/>
                <text x="${ox-14}" y="${oy-3*ky+4}" font-size="11" fill="#666">3</text>
                <line x1="${ox-4}" y1="${oy-5*ky}" x2="${ox}" y2="${oy-5*ky}" stroke="#666"/>
                <text x="${ox-14}" y="${oy-5*ky+4}" font-size="11" fill="#666">5</text>

                <!-- Midline y = 3 -->
                <line x1="${ox}" y1="${oy-3*ky}" x2="${ox+280}" y2="${oy-3*ky}" stroke="#bbb" stroke-dasharray="4,4"/>

                <!-- X tick: pi/2, pi -->
                <line x1="${ox+0.5*Math.PI*kx}" y1="${oy}" x2="${ox+0.5*Math.PI*kx}" y2="${oy+4}" stroke="#666"/>
                <text x="${ox+0.5*Math.PI*kx-10}" y="${oy+16}" font-size="11" fill="#666">π/2</text>
                <line x1="${ox+Math.PI*kx}" y1="${oy}" x2="${ox+Math.PI*kx}" y2="${oy+4}" stroke="#666"/>
                <text x="${ox+Math.PI*kx-6}" y="${oy+16}" font-size="11" fill="#666">π</text>

                <!-- Trough guide for omega = 2 -->
                <line x1="${ox+0.5*Math.PI*kx}" y1="${oy}" x2="${ox+0.5*Math.PI*kx}" y2="${oy-1*ky}" stroke="#e74c3c" stroke-dasharray="2,2"/>
                <line x1="${ox}" y1="${oy-1*ky}" x2="${ox+0.5*Math.PI*kx}" y2="${oy-1*ky}" stroke="#e74c3c" stroke-dasharray="2,2"/>
                <circle cx="${ox+0.5*Math.PI*kx}" cy="${oy-1*ky}" r="3.5" fill="#e74c3c"/>

                <!-- Curve -->
                <polyline points="${pts.join(' ')}" fill="none" stroke="#2563eb" stroke-width="2.5"/>
              </svg>
            `;
          }
          const rng = host.querySelector('#rng-om');
          const lbl = host.querySelector('#lbl-om');
          rng.addEventListener('input', (e) => {
            lbl.textContent = e.target.value;
            render(parseFloat(e.target.value));
          });
          render(2);
        }
    },
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第12題",
      "topic": "解析幾何 · 兩點中垂線（垂直平分線）方程",
      "score": "選擇題",
      "q": "已知點 $P(-1, -3)$ 和 $Q(5, -1)$，則 $PQ$ 的垂直平分線的方程為<br>A. $x + 3y - 4 = 0$<br>B. $x - 3y + 4 = 0$<br>C. $x + 3y + 4 = 0$<br>D. $3x - y - 4 = 0$<br>E. $3x + y - 4 = 0$",
      "knowledge": {
            "formulas": [
                  "M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)",
                  "k_{PQ} = \\frac{y_2 - y_1}{x_2 - x_1}, \\quad k_{\\perp} = -\\frac{1}{k_{PQ}}",
                  "y - y_0 = k_{\\perp}(x - x_0)"
            ],
            "points": [
                  "<b>中點坐標</b>：$M = (2, -2)$。",
                  "<b>垂直斜率</b>：$PQ$ 斜率 $k = \\frac{-1 - (-3)}{5 - (-1)} = \\frac{1}{3} \\implies$ 垂直線斜率 $k_{\\perp} = -3$。",
                  "<b>點斜式直線方程</b>：通過 $(2, -2)$ 且斜率為 $-3$。"
            ],
            "pitfall": "垂直斜率相乘為 $-1$，不要忘記負號。"
      },
      "solution": {
            "thinking": "先求 $PQ$ 中點坐標，再求 $PQ$ 斜率的負倒數作為垂線斜率，利用點斜式寫出方程。",
            "steps": [
                  "1. 計算線段 $PQ$ 的中點 $M$：",
                  "$$M = \\left(\\frac{-1 + 5}{2}, \\frac{-3 + (-1)}{2}\\right) = (2, -2) $$",
                  "2. 計算直線 $PQ$ 的斜率 $k_{PQ}$：",
                  "$$k_{PQ} = \\frac{-1 - (-3)}{5 - (-1)} = \\frac{2}{6} = \\frac{1}{3} $$",
                  "3. 垂直平分線的斜率 $k_{\\perp} = -\\frac{1}{k_{PQ}} = -3$。",
                  "4. 由點斜式寫出中垂線方程：",
                  "$$y - (-2) = -3(x - 2) \\iff y + 2 = -3x + 6 $$",
                  "整理為一般式：$3x + y - 4 = 0$。"
            ],
            "ans": "E",
            "quickTip": "中點 $(2, -2)$，斜率 $-3 \\implies 3x + y + C = 0$。代入 $(2, -2)$ 得 $6 - 2 - 4 = 0$ 秒殺選 E！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第13題",
      "topic": "統計學 · 線性變換對平均數與方差之影響",
      "score": "選擇題",
      "q": "若一組數據 $x_1, x_2, \\dots, x_n$ 的平均數和方差分別為 1 和 0.01，則數據 $10x_1, 10x_2, \\dots, 10x_n$ 的平均數和方差分別是<br>A. 1 和 0.01<br>B. 10 和 0.1<br>C. 1 和 1<br>D. 10 和 1<br>E. 100 和 1",
      "knowledge": {
            "formulas": [
                  "E(aX) = a E(X)",
                  "\\text{Var}(aX) = a^2 \\text{Var}(X)"
            ],
            "points": [
                  "<b>平均數的線性伸縮</b>：數據整體放大 $a$ 倍，平均數也放大 $a$ 倍：$E(10X) = 10 \\times 1 = 10$。",
                  "<b>方差的平方伸縮</b>：方差代表離差平方的均值，數據放大 $a$ 倍，方差放大 $a^2$ 倍：$\\text{Var}(10X) = 10^2 \\times 0.01 = 100 \\times 0.01 = 1$。"
            ],
            "pitfall": "方差放大的倍數是係數的平方（$a^2$），而不是 $a$（那是標準差）！"
      },
      "solution": {
            "thinking": "利用隨機變量/數據線性變換的均值與方差公式直接計算。",
            "steps": [
                  "設原數據平均數為 $\\bar{x} = 1$，方差為 $s^2 = 0.01$。",
                  "當各數據乘以常數 $a = 10$ 時：",
                  "1. 新平均數：",
                  "$$\\bar{x}_{\\text{new}} = 10 \\bar{x} = 10 \\times 1 = 10 $$",
                  "2. 新方差：",
                  "$$s^2_{\\text{new}} = 10^2 \\times s^2 = 100 \\times 0.01 = 1 $$",
                  "因此新數據的平均數和方差分別是 10 和 1。"
            ],
            "ans": "D",
            "quickTip": "均值乘 10 變 10，方差乘 $10^2=100$ 變 $0.01 \\times 100 = 1$。秒選 D！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第14題",
      "topic": "代數 · 二次根式有理化與精確化簡",
      "score": "選擇題",
      "q": "$\\frac{\\sqrt{140} - \\sqrt{132}}{\\sqrt{35} + \\sqrt{33}} =$<br>A. $68 - 2\\sqrt{1155}$<br>B. $68 - \\sqrt{1155}$<br>C. $(34 - \\sqrt{1155})/2$<br>D. $34 - \\sqrt{1155}$<br>E. $68 + 2\\sqrt{1155}$",
      "knowledge": {
            "formulas": [
                  "\\sqrt{140} = \\sqrt{4 \\times 35} = 2\\sqrt{35}, \\quad \\sqrt{132} = \\sqrt{4 \\times 33} = 2\\sqrt{33}",
                  "\\frac{a - b}{a + b} = \\frac{(a - b)^2}{a^2 - b^2}"
            ],
            "points": [
                  "<b>提取公因數 2</b>：分子 $= 2(\\sqrt{35} - \\sqrt{33})$。",
                  "<b>分母有理化</b>：乘以共軛根式 $(\\sqrt{35} - \\sqrt{33})$，分母平方差 $(\\sqrt{35})^2 - (\\sqrt{33})^2 = 2$。",
                  "<b>完全平方展開</b>：$(\\sqrt{35} - \\sqrt{33})^2 = 35 + 33 - 2\\sqrt{35 \\times 33} = 68 - 2\\sqrt{1155}$。"
            ],
            "pitfall": "分母變為 2，恰好與提取出來的 2 抵消！"
      },
      "solution": {
            "thinking": "觀察分子根號內的數是分母的 4 倍，提取公因數 2 後進行分母有理化。",
            "steps": [
                  "化簡分子各根式：",
                  "$$\\sqrt{140} = \\sqrt{4 \\times 35} = 2\\sqrt{35}, \\quad \\sqrt{132} = \\sqrt{4 \\times 33} = 2\\sqrt{33} $$",
                  "因此分子為 $2(\\sqrt{35} - \\sqrt{33})$。",
                  "原式變為：",
                  "$$\\frac{2(\\sqrt{35} - \\sqrt{33})}{\\sqrt{35} + \\sqrt{33}} $$",
                  "分子分母同乘以 $(\\sqrt{35} - \\sqrt{33})$：",
                  "$$\\text{分母} = (\\sqrt{35})^2 - (\\sqrt{33})^2 = 35 - 33 = 2 $$",
                  "$$\\text{原式} = \\frac{2(\\sqrt{35} - \\sqrt{33})^2}{2} = (\\sqrt{35} - \\sqrt{33})^2 $$",
                  "展開完全平方式：",
                  "$$(\\sqrt{35})^2 - 2\\sqrt{35 \\times 33} + (\\sqrt{33})^2 = 35 + 33 - 2\\sqrt{1155} = 68 - 2\\sqrt{1155} $$"
            ],
            "ans": "A",
            "quickTip": "分子提 2 得 $2(\\sqrt{35}-\\sqrt{33})$，有理化分母變 2 約掉，直接等於 $(\\sqrt{35}-\\sqrt{33})^2 = 68 - 2\\sqrt{1155}$ 秒選 A！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第15題",
      "topic": "基本不等式 · 均值不等式求乘積最小值",
      "score": "選擇題",
      "q": "若 $\\frac{5}{a} + \\frac{4}{b} = 3$ ($a, b > 0$)，則 $ab$ 的最小值為<br>A. $\\frac{20}{9}$<br>B. $\\frac{20}{3}$<br>C. $\\frac{80}{9}$<br>D. $\\frac{80}{3}$<br>E. $\\frac{\\sqrt{20}}{3}$",
      "knowledge": {
            "formulas": [
                  "\\frac{x + y}{2} \\ge \\sqrt{xy} \\iff x + y \\ge 2\\sqrt{xy} \\quad (x, y > 0)",
                  "3 \\ge 2\\sqrt{\\frac{20}{ab}} \\iff 9 \\ge \\frac{80}{ab} \\iff ab \\ge \\frac{80}{9}"
            ],
            "points": [
                  "<b>算術-幾何均值不等式（AM-GM）</b>：對於正數 $\\frac{5}{a}$ 和 $\\frac{4}{b}$，和為定值 3，乘積有最大值，從而 $ab$ 有最小值。",
                  "<b>等號成立條件</b>：當且僅當 $\\frac{5}{a} = \\frac{4}{b} = \\frac{3}{2}$ 時等號成立。"
            ],
            "pitfall": "不等號方向反轉：$\\frac{1}{ab} \\le \\frac{9}{80} \\implies ab \\ge \\frac{80}{9}$。"
      },
      "solution": {
            "thinking": "利用基本不等式 $x + y \\ge 2\\sqrt{xy}$ 建立關於 $ab$ 的不等式。",
            "steps": [
                  "因為 $a, b > 0$，由算術-幾何均值不等式（AM-GM）：",
                  "$$3 = \\frac{5}{a} + \\frac{4}{b} \\ge 2\\sqrt{\\frac{5}{a} \\times \\frac{4}{b}} = 2\\sqrt{\\frac{20}{ab}} $$",
                  "兩邊平方：",
                  "$$9 \\ge 4 \\times \\frac{20}{ab} = \\frac{80}{ab} $$",
                  "因為 $ab > 0$，兩邊同乘以 $ab$ 並除以 9：",
                  "$$ab \\ge \\frac{80}{9} $$",
                  "等號成立於 $\\frac{5}{a} = \\frac{4}{b} = \\frac{3}{2}$，即 $a = \\frac{10}{3}, b = \\frac{8}{3}$ 時。",
                  "故 $ab$ 的最小值為 $\\frac{80}{9}$。"
            ],
            "ans": "C",
            "quickTip": "$3 \\ge 2\\sqrt{20/ab} \\implies 9 \\ge 80/ab \\implies ab \\ge 80/9$ 5 秒搞定選 C！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第16題",
      "topic": "排列組合與概率 · 抽取組合與分組相鄰排列概率",
      "score": "8分",
      "q": "書架上有中文書 4 本、英文書 2 本、數學書 3 本。<br>(a) 從這書架上隨機地選取 3 本書。求取得中、英、數各一本的概率。(3分)<br>(b) 將這九本書隨機地重新排列。求同類書籍排在一起的概率。(5分)<br>[注：以最簡分數表示 (a) 和 (b) 的答案。]",
      "knowledge": {
            "formulas": [
                  "P = \\frac{n(E)}{n(S)}",
                  "\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84",
                  "n(E) = \\binom{4}{1}\\binom{2}{1}\\binom{3}{1} = 24",
                  "\\text{綑綁法：} 3! \\times 4! \\times 2! \\times 3!"
            ],
            "points": [
                  "<b>(a) 組合抽取</b>：總情況為 $\\binom{9}{3} = 84$，各抽一本為 $4 \\times 2 \\times 3 = 24$。",
                  "<b>(b) 綑綁法排列</b>：將三類書視為 3 個大元素全排列（$3!$），各類內部再自排列（$4!, 2!, 3!$）。"
            ],
            "pitfall": "以最簡分數作答，記得約分：$\\frac{24}{84} = \\frac{2}{7}$，$\\frac{1728}{362880} = \\frac{1}{210}$。"
      },
      "solution": {
            "thinking": "(a) 用古典概型組合數除以總組合數；(b) 用綑綁法計算同類相鄰的排列數，再除以 9 本書的全排列數。",
            "steps": [
                  "(a) 總書數為 $4 + 2 + 3 = 9$ 本。隨機取 3 本，樣本空間大小為：",
                  "$$n(S) = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84 $$",
                  "取得中、英、數各一本的事件數為：",
                  "$$n(E) = \\binom{4}{1} \\times \\binom{2}{1} \\times \\binom{3}{1} = 4 \\times 2 \\times 3 = 24 $$",
                  "所求概率為：",
                  "$$P = \\frac{24}{84} = \\frac{2}{7} $$",
                  "(b) 9 本書的全排列樣本空間大小為 $9! = 362880$。",
                  "要求同類書籍排在一起，採用「綑綁法」：",
                  "1. 將中文書（4本）、英文書（2本）、數學書（3本）分別綑綁成 3 個大群組，群組間排列有 $3!$ 種；",
                  "2. 各群組內部排列分別有 $4!$、$2!$、$3!$ 種；",
                  "因此有利排列總數為：$3! \\times 4! \\times 2! \\times 3! = 6 \\times 24 \\times 2 \\times 6 = 1728$。",
                  "所求概率為：",
                  "$$P = \\frac{3! \\times 4! \\times 2! \\times 3!}{9!} = \\frac{6 \\times 24 \\times 2 \\times 6}{9 \\times 8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = \\frac{1}{210} $$"
            ],
            "ans": "(a) $\\frac{2}{7}$；(b) $\\frac{1}{210}$",
            "quickTip": "(a) $24/84 = 2/7$；(b) 綑綁法 $\\frac{3! \\times 4! \\times 2! \\times 3!}{9!} = \\frac{1}{210}$！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第17題",
      "topic": "解析幾何 · 點線距離、切線與對稱性求圓方程",
      "score": "8分",
      "q": "圖中，一個以 $M(4, 4)$ 為圓心的圓與 $L_1: y = 2x$ 和 $L_2: y = mx$ 兩條直線相切。兩條直線對圓的切點分別為 $P$ 和 $Q$。<br>(a) 求圓的方程。(4分)<br>(b) 求 $m$ 的值。(4分)",
      "knowledge": {
            "formulas": [
                  "d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}",
                  "(x - 4)^2 + (y - 4)^2 = r^2",
                  "y = x \\text{ 為對稱軸} \\implies m_2 = \\frac{1}{m_1}"
            ],
            "points": [
                  "<b>點線距離求半徑</b>：圓心 $M(4, 4)$ 到直線 $2x - y = 0$ 的距離即為半徑 $r = \\frac{|2(4) - 4|}{\\sqrt{2^2 + (-1)^2}} = \\frac{4}{\\sqrt{5}}$。",
                  "<b>角平分線對稱性</b>：直線 $OM$ 的方程為 $y = x$，恰好是兩切線角平分線！兩直線關於 $y = x$ 軸對稱，互為反函數，斜率互為倒數：$m = \\frac{1}{2}$！"
            ],
            "pitfall": "判別式法計算量大，善用點線距離與對稱性可大幅減少計算錯誤！"
      },
      "solution": {
            "thinking": "(a) 利用點到直線距離公式直接求圓半徑 $r$，寫出標準方程；(b) 利用 $OM$ 在對稱軸 $y = x$ 上的幾何性質，秒得 $m = 1/2$（或利用點線距離方程解出）。",
            "steps": [
                  "(a) 直線 $L_1$ 方程為 $2x - y = 0$。圓心為 $M(4, 4)$。",
                  "圓的半徑 $r$ 等於圓心 $M$ 到切線 $L_1$ 的垂直距離：",
                  "$$r = \\frac{|2(4) - 4|}{\\sqrt{2^2 + (-1)^2}} = \\frac{4}{\\sqrt{5}} \\implies r^2 = \\frac{16}{5} $$",
                  "因此圓的標準方程為：",
                  "$$(x - 4)^2 + (y - 4)^2 = \\frac{16}{5} $$",
                  "展開化為一般方程：",
                  "$$5(x^2 - 8x + 16 + y^2 - 8y + 16) = 16 \\iff 5x^2 + 5y^2 - 40x - 40y + 144 = 0 $$",
                  "(b) 【方法一：對稱性（極速）】",
                  "圓心 $M(4, 4)$ 與原點 $O(0, 0)$ 的連線為直線 $y = x$。",
                  "由圓的幾何性質，直線 $OM$ 是過點 $O$ 的兩條切線 $L_1, L_2$ 的角平分線（對稱軸）。",
                  "因此直線 $L_1$ 與 $L_2$ 關於直線 $y = x$ 對稱。",
                  "直線 $y = 2x$ 關於 $y = x$ 對稱的直線方程為 $x = 2y \\iff y = \\frac{1}{2}x$。",
                  "故 $m = \\frac{1}{2}$。",
                  "【方法二：距離公式代數解】",
                  "圓心 $M(4, 4)$ 到 $L_2: mx - y = 0$ 的距離亦為 $r = \\frac{4}{\\sqrt{5}}$：",
                  "$$\\frac{|4m - 4|}{\\sqrt{m^2 + 1}} = \\frac{4}{\\sqrt{5}} \\implies 5(m - 1)^2 = m^2 + 1 $$",
                  "$$5(m^2 - 2m + 1) = m^2 + 1 \\iff 4m^2 - 10m + 4 = 0 \\iff 2m^2 - 5m + 2 = 0 $$",
                  "$$(2m - 1)(m - 2) = 0 \\implies m = \\frac{1}{2} \\text{ 或 } m = 2 $$",
                  "因為 $L_2$ 是異於 $L_1$（斜率為 2）的直線，故 $m = \\frac{1}{2}$。"
            ],
            "ans": "(a) $(x - 4)^2 + (y - 4)^2 = \\frac{16}{5}$；(b) $m = \\frac{1}{2}$",
            "quickTip": "圓心在 $y = x$ 上，兩切線關於 $y = x$ 軸對稱，斜率互為倒數：$m = 1/2$ 瞬間得出！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第18題",
      "topic": "代數恆等式 · 配方法與二元關係最值探究",
      "score": "8分",
      "q": "若 $x, y > 0$ 及 $y^2 - 2mxy + x^2 = a^2$，其中 $a$ 和 $m$ 為常數，且 $0 < m < 1$。<br>(a) 證明 $(1 - m^2)y^2 - a^2 = (x - my)^2$。(3分)<br>(b) 證明當 $y = \\frac{x}{m}$ 時 $y$ 值達至最大。(3分)<br>(c) 由此決定 $x$ 值（以 $a$ 和 $m$ 表示）使 $y$ 值達至最大。(2分)",
      "knowledge": {
            "formulas": [
                  "(1 - m^2)y^2 - a^2 = y^2 - m^2 y^2 - (y^2 - 2mxy + x^2) = -(x - my)^2",
                  "y^2 = \\frac{a^2 - (x - my)^2}{1 - m^2} \\le \\frac{a^2}{1 - m^2}"
            ],
            "points": [
                  "<b>配方恆等式</b>：將已知條件代入化簡證明恆等關係。",
                  "<b>受約束變量最值</b>：因 $0 < m < 1 \\implies 1 - m^2 > 0$ 且平方式 $(x - my)^2 \\ge 0$，故當 $x - my = 0$ 時 $y^2$ 取最大值。",
                  "<b>回代求 $x$</b>：最大值時 $y = \\frac{|a|}{\\sqrt{1 - m^2}}$，再乘以 $m$ 得到對應的 $x$。"
            ],
            "pitfall": "因 $x, y > 0$，開平方時取正根。"
      },
      "solution": {
            "thinking": "(a) 代入已知條件直接化簡左邊；(b) 移項寫出 $y^2$ 表達式，分析平方項為 0 時取最大；(c) 由最大條件求 $x$。",
            "steps": [
                  "(a) 將 $a^2 = y^2 - 2mxy + x^2$ 代入等式左邊：",
                  "$$\\text{左邊} = (1 - m^2)y^2 - a^2 = y^2 - m^2 y^2 - (y^2 - 2mxy + x^2) $$",
                  "$$= -m^2 y^2 + 2mxy - x^2 = -(x^2 - 2mxy + m^2 y^2) = -(x - my)^2 $$",
                  "原題等式為 $(1 - m^2)y^2 - a^2 = -(x - my)^2$，即：",
                  "$$(1 - m^2)y^2 = a^2 - (x - my)^2 $$",
                  "(b) 因為 $0 < m < 1$，所以 $0 < m^2 < 1 \\implies 1 - m^2 > 0$。",
                  "由 (a) 可得：",
                  "$$y^2 = \\frac{a^2 - (x - my)^2}{1 - m^2} = \\frac{a^2}{1 - m^2} - \\frac{(x - my)^2}{1 - m^2} $$",
                  "對任何實數 $x, y$，均有 $(x - my)^2 \\ge 0$。",
                  "因此：",
                  "$$y^2 \\le \\frac{a^2}{1 - m^2} $$",
                  "當且僅當 $x - my = 0 \\iff y = \\frac{x}{m}$ 時，等號成立，$y^2$ 達到最大值。",
                  "因為 $y > 0$，所以當 $y = \\frac{x}{m}$ 時，$y$ 也達至最大值。",
                  "(c) 當 $y$ 達至最大值時，$y^2_{\\max} = \\frac{a^2}{1 - m^2} \\implies y_{\\max} = \\frac{|a|}{\\sqrt{1 - m^2}}$。",
                  "此時 $x = my_{\\max} = \\frac{m|a|}{\\sqrt{1 - m^2}}$。"
            ],
            "ans": "(a) 恆等式證畢；(b) 平方項為 0 時取最大值證畢；(c) $x = \\frac{m|a|}{\\sqrt{1 - m^2}}$",
            "quickTip": "$y^2 = \\frac{a^2 - (x - my)^2}{1 - m^2} \\le \\frac{a^2}{1 - m^2}$，當 $x = my$ 取最大值，$x = \\frac{m|a|}{\\sqrt{1 - m^2}}$！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第19題",
      "topic": "數列 · 等差數列通項與裂項相消求和",
      "score": "8分",
      "q": "在等差數列 $\\{a_n\\}_{n \\ge 1}$ 中，已知 $a_2 = 3$ 及 $a_{20} = 39$。<br>(a) 求數列 $\\{a_n\\}_{n \\ge 1}$ 的通項。(3分)<br>(b) 設數列 $\\left\\{\\frac{1}{a_n a_{n+1}}\\right\\}_{n \\ge 1}$ 的前 $n$ 項和為 $S_n$。若 $S_n = \\frac{10}{21}$，求 $n$ 的值。(5分)",
      "knowledge": {
            "formulas": [
                  "d = \\frac{a_{20} - a_2}{20 - 2}, \\quad a_n = a_1 + (n - 1)d",
                  "\\frac{1}{a_n a_{n+1}} = \\frac{1}{(2n-1)(2n+1)} = \\frac{1}{2}\\left(\\frac{1}{2n-1} - \\frac{1}{2n+1}\\right)",
                  "S_n = \\frac{1}{2}\\left(1 - \\frac{1}{2n+1}\\right) = \\frac{n}{2n+1}"
            ],
            "points": [
                  "<b>等差數列通項</b>：公差 $d = 2$，首項 $a_1 = 1$，通項 $a_n = 2n - 1$。",
                  "<b>裂項相消法求和</b>：$\\frac{1}{(2k-1)(2k+1)} = \\frac{1}{2}\\left(\\frac{1}{2k-1} - \\frac{1}{2k+1}\\right)$，中間項全部正負抵消。",
                  "<b>解分式方程</b>：$\\frac{n}{2n+1} = \\frac{10}{21} \\implies 21n = 20n + 10 \\implies n = 10$。"
            ],
            "pitfall": "裂項時不要漏掉前面的係數 $\\frac{1}{d} = \\frac{1}{2}$。"
      },
      "solution": {
            "thinking": "(a) 先由兩項差求公差 $d$ 及首項 $a_1$，寫出通項；(b) 裂項相消求出 $S_n$ 的簡潔表達式，令其等於 10/21 解 $n$。",
            "steps": [
                  "(a) 設等差數列的公差為 $d$。",
                  "$$d = \\frac{a_{20} - a_2}{20 - 2} = \\frac{39 - 3}{18} = \\frac{36}{18} = 2 $$",
                  "首項 $a_1 = a_2 - d = 3 - 2 = 1$。",
                  "通項公式為：",
                  "$$a_n = a_1 + (n - 1)d = 1 + 2(n - 1) = 2n - 1 $$",
                  "(b) 考慮數列的第 $k$ 項：",
                  "$$\\frac{1}{a_k a_{k+1}} = \\frac{1}{(2k - 1)(2k + 1)} = \\frac{1}{2}\\left(\\frac{1}{2k - 1} - \\frac{1}{2k + 1}\\right) $$",
                  "對前 $n$ 項求和（裂項相消）：",
                  "$$S_n = \\sum_{k=1}^n \\frac{1}{2}\\left(\\frac{1}{2k - 1} - \\frac{1}{2k + 1}\\right) $$",
                  "$$= \\frac{1}{2}\\left[\\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\dots + \\left(\\frac{1}{2n - 1} - \\frac{1}{2n + 1}\\right)\\right] $$",
                  "$$= \\frac{1}{2}\\left(1 - \\frac{1}{2n + 1}\\right) = \\frac{1}{2} \\cdot \\frac{2n}{2n + 1} = \\frac{n}{2n + 1} $$",
                  "已知 $S_n = \\frac{10}{21}$：",
                  "$$\\frac{n}{2n + 1} = \\frac{10}{21} \\implies 21n = 10(2n + 1) = 20n + 10 $$",
                  "解得 $n = 10$。"
            ],
            "ans": "(a) $a_n = 2n - 1$；(b) $n = 10$",
            "quickTip": "裂項求和 $S_n = \\frac{n}{2n+1} = \\frac{10}{21} \\implies n = 10$ 秒殺！"
      }
},
      {
      "year": "2021",
      "paper": "正卷",
      "qNum": "第20題",
      "topic": "解三角形 · 倍角誘導公式與正弦定理求面積",
      "score": "8分",
      "q": "在 $\\triangle ABC$ 中，$\\sin(C - A) = 1$ 及 $\\cos B = \\frac{2\\sqrt{2}}{3}$。<br>(a) 求 $\\sin 2C$。(4分)<br>(b) 若 $|AC| = 5$，求 $\\triangle ABC$ 的面積。(4分)",
      "knowledge": {
            "formulas": [
                  "\\sin(C - A) = 1 \\implies C - A = 90^\\circ",
                  "A + B + C = 180^\\circ \\implies 2C = 270^\\circ - B",
                  "\\cos 2C = \\cos(270^\\circ - B) = -\\sin B",
                  "\\sin 2C = \\sqrt{1 - \\cos^2 2C}",
                  "S = \\frac{1}{2} a b \\sin C"
            ],
            "points": [
                  "<b>角度關係轉化</b>：$C - A = 90^\\circ$ 與 $A + B + C = 180^\\circ$ 聯立消去 $A$ 得 $2C = 270^\\circ - B$。",
                  "<b>誘導公式</b>：$\\cos 2C = -\\sin B$。已知 $\\cos B = \\frac{2\\sqrt{2}}{3} \\implies \\sin B = \\frac{1}{3}$，故 $\\cos 2C = -\\frac{1}{3}$。",
                  "<b>正弦定理求邊</b>：由 $\\cos 2C = -1/3$ 求出 $\\sin C$ 與 $\\sin A$，再利用正弦定理求 $BC$。"
            ],
            "pitfall": "鈍角判斷：$C - A = 90^\\circ \\implies C > 90^\\circ$，所以 $\\cos C < 0$。"
      },
      "solution": {
            "thinking": "(a) 由 $\\sin(C - A) = 1$ 得到 $C$ 與 $A$ 的關係，結合內角和轉化為 $2C$ 與 $B$ 的關係，利用誘導公式求 $\\sin 2C$；(b) 求各角正餘弦值，用正弦定理求出邊長並計算三角形面積。",
            "steps": [
                  "(a) 在 $\\triangle ABC$ 中，$-180^\\circ < C - A < 180^\\circ$。",
                  "$\\because \\sin(C - A) = 1$，$\\therefore C - A = 90^\\circ \\implies A = C - 90^\\circ$。",
                  "$\\because \\cos B = \\frac{2\\sqrt{2}}{3}$，且 $0^\\circ < B < 180^\\circ$：",
                  "$$\\sin B = \\sqrt{1 - \\cos^2 B} = \\sqrt{1 - \\frac{8}{9}} = \\frac{1}{3} $$",
                  "由三角形內角和 $A + B + C = 180^\\circ$ 代入 $A = C - 90^\\circ$：",
                  "$$(C - 90^\\circ) + B + C = 180^\\circ \\implies 2C = 270^\\circ - B $$",
                  "兩邊取餘弦：",
                  "$$\\cos 2C = \\cos(270^\\circ - B) = -\\sin B = -\\frac{1}{3} $$",
                  "因此：",
                  "$$\\sin 2C = \\sqrt{1 - \\cos^2 2C} = \\sqrt{1 - \\left(-\\frac{1}{3}\\right)^2} = \\sqrt{\\frac{8}{9}} = \\frac{2\\sqrt{2}}{3} $$",
                  "(b) 因為 $C - A = 90^\\circ$ 且 $A > 0$，所以 $C > 90^\\circ$（$C$ 為鈍角）。",
                  "由倍角公式 $\\cos 2C = 2\\cos^2 C - 1 = -\\frac{1}{3}$：",
                  "$$2\\cos^2 C = \\frac{2}{3} \\implies \\cos^2 C = \\frac{1}{3} $$",
                  "因 $C > 90^\\circ$，$\\cos C = -\\frac{\\sqrt{3}}{3}$，從而 $\\sin C = \\sqrt{1 - \\frac{1}{3}} = \\frac{\\sqrt{6}}{3}$。",
                  "又 $\\sin A = \\sin(C - 90^\\circ) = -\\cos C = \\frac{\\sqrt{3}}{3}$。",
                  "在 $\\triangle ABC$ 中由正弦定理：",
                  "$$\\frac{|BC|}{\\sin A} = \\frac{|AC|}{\\sin B} \\implies |BC| = |AC| \\cdot \\frac{\\sin A}{\\sin B} = 5 \\cdot \\frac{\\frac{\\sqrt{3}}{3}}{\\frac{1}{3}} = 5\\sqrt{3} $$",
                  "因此 $\\triangle ABC$ 的面積為：",
                  "$$S = \\frac{1}{2} |AC| \\cdot |BC| \\sin C = \\frac{1}{2} \\times 5 \\times 5\\sqrt{3} \\times \\frac{\\sqrt{6}}{3} = \\frac{25\\sqrt{18}}{6} = \\frac{25 \\times 3\\sqrt{2}}{6} = \\frac{25\\sqrt{2}}{2} $$"
            ],
            "ans": "(a) $\\sin 2C = \\frac{2\\sqrt{2}}{3}$；(b) 面積為 $\\frac{25\\sqrt{2}}{2}$",
            "quickTip": "$2C = 270^\\circ - B \\implies \\cos 2C = -\\sin B = -1/3 \\implies \\sin 2C = \\frac{2\\sqrt{2}}{3}$；求出 $BC = 5\\sqrt{3}$，面積為 $\\frac{25\\sqrt{2}}{2}$！"
      }
}
    ]
  });
})();
