---
name: math-review-deck
description: >
  專為高三學生複習澳門四校聯考（正卷與附加卷）打造的互動視覺化投影簡報技能（純前端、零金鑰、零建置）。
  將歷屆真題與核心考點，做成「一頁一題、左題右解答、題目下方呈現核心知識點、適當加上動態圖拖滑桿就會動」的網頁投影簡報，並可一鍵部署上線。

  當使用者說「做四校聯考複習簡報」「澳門四校聯考複習網頁」「正卷附加卷一頁一題複習」
  「幫高三學生做四校聯考教材」「做一個可以拖滑桿的聯考試題簡報」「把正卷/附加卷題目做成左題右解」
  「做一份複習簡報」「把這一冊做成互動網頁」「做會考／段考複習網頁」，或要求維護、
  新增四校聯考試題與複習簡報時，請一定要使用此技能。

  適用情境：課堂投影上課、老師在畫面上用雷射筆與畫筆講解、一鍵按 A 鍵顯示/隱藏規範步驟解答、
  題目與圖解可滿版全螢幕放大至黑板講解。

  產出為單一資料夾的靜態網頁（index.html + engine.js + style.css + svg.js + ch-jae.js），
  可直接用瀏覽器開，或部署到 Cloudflare Pages／Netlify／GitHub Pages。
  數學排版用 MathJax，圖形為原生 SVG，不需要任何 API 金鑰。
---

# 澳門四校聯考（JAE）互動視覺化複習簡報（math-review-deck）

本技能專為**高三學生複習「澳門四校聯考（正卷與附加卷）」**而設計。
核心特點：**一頁一題、左題右解答、題目正下方呈現核心知識點、動態幾何/函數拖滑桿即時探究**。

---

## 1. 核心版面結構（左題右解答）

每張投影片即為一道四校聯考真題或精選例題：

- **左欄：試題欄**
  - **題標與徽章**：年份、卷別（正卷 / 附加卷）、題號（選擇題第 N 題 / 解答題第 N 題）、主題標籤、分值、🔍 放大按鈕。
  - **題幹與選項卡片**：題幹文字（支援 LaTeX 數學符號）、四選一/五選一選項網格。
  - **核心知識點卡片（緊跟在題目正下方）**：
    - `🎯 核心知識點 & 必背公式`
    - `formulas`：本題必備高頻公式塊（MathJax 精美排版）。
    - `points`：解題核心思路、四校聯考出題特徵與秒殺觀察點。
    - `pitfall`：⚠️ 易錯警示（考生常犯扣分細節、符號約定、非零或定義域陷阱）。
- **右欄：解答與動態探究欄**
  - **動態互動圖形（visual）**：幾何/三角/微積分/複數題型配備原生 SVG 動態圖與滑桿（Slider），拖動滑桿即時改變圖形參數，驗證幾何定理。
  - **解題思維與規範步驟卡片**：
    - 快速鍵 `A` 或點擊按鈕一鍵展開／收起解答（支援課堂先讓學生思考再出解）。
    - `thinking`：【解題思路】大綱導引。
    - `steps`：符合四校聯考官方閱卷標準的規範踩點步驟。
    - `ans`：參考答案醒目徽章。
    - `quickTip`：⚡ 聯考速解訣竅（選擇題秒殺法、代數檢驗法）。

---

## 2. 試題資料規格範例

在各章試題檔 `ch-jae.js` 或 `ch-2024-standard.js` 中定義試題物件：

```javascript
window.DECK = window.DECK || [];
DECK.push({
  ch: "2024-正卷",
  title: "2024 澳門四校聯考 數學正卷精選",
  color: "#2563eb",
  sections: ["選擇題 第7題 · 三角函數與正弦定理", "選擇題 第11題 · 解析幾何弦長"],
  slides: [
    {
      year: "2024",
      paper: "正卷",
      qNum: "選擇題 第7題",
      topic: "三角函數 · 正弦定理與外接圓",
      score: "4分",
      q: "在 $\\triangle ABC$ 中，已知 $A = 30^\\circ$，$a = 4$，則 $\\triangle ABC$ 的外接圓直徑為？",
      options: ["(A) 4", "(B) 6", "(C) 8", "(D) 10"],
      
      // 題目正下方的核心知識點
      knowledge: {
        formulas: ["\\frac{a}{\\sin A} = 2R"],
        points: [
          "<b>正弦定理核心</b>：任一邊與其對角正弦之比等於外接圓直徑 $2R$。",
          "<b>聯考思維導向</b>：題幹出現「外接圓」，優先聯想正弦定理。"
        ],
        pitfall: "審題注意問的是「直徑 $2R$」還是「半徑 $R$」，切勿漏除以 2 或手快選錯！"
      },

      // 動態互動探究（SVG + 滑桿）
      visual: function(host) {
        host.innerHTML = `
          <div id="vis-svg"></div>
          <div class="ictrl">
            <label>頂點 A 位置：</label>
            <input type="range" id="sl" min="40" max="140" value="90">
          </div>
        `;
        const sl = host.querySelector('#sl');
        sl.oninput = () => { /* 依 sl.value 即時重繪 SVG */ };
      },

      // 規範解答（右欄）
      solution: {
        thinking: "利用正弦定理公式直接代入 $A=30^\\circ$ 與 $a=4$。",
        steps: [
          "由正弦定理可知：$\\frac{a}{\\sin A} = 2R$。",
          "代入已知條件：$$2R = \\frac{4}{\\sin 30^\\circ} = \\frac{4}{0.5} = 8$$"
        ],
        ans: "(C)",
        quickTip: "特殊角 $30^\\circ$ 正弦值為 $0.5$，直徑等於邊長乘 2，口算 3 秒選 (C)。"
      }
    }
  ]
});
```

---

## 3. 工具腳本與指令

### 產生全新聯考簡報專案
```bash
# 產生包含正卷與附加卷的骨架
python scripts/new_jae_deck.py --out jae-2024 --year 2024 --paper both

# 僅產生正卷
python scripts/new_jae_deck.py --out jae-standard --year 2024 --paper standard

# 僅產生附加卷
python scripts/new_jae_deck.py --out jae-supp --year 2024 --paper supplementary
```

### 驗證試題結構與動態視覺
```bash
# 驗證指定檔案或整個專案資料夾
node scripts/verify_jae_deck.js examples/ch-jae-example.js
node scripts/verify_jae_deck.js demo
```

### 本機預覽
```bash
python -m http.server 8000 --directory demo
# 瀏覽器開啟 http://localhost:8000 即可全螢幕投影測試
```

---

## 4. 授課教具與操作指引

- **快速鍵 `A`**：展開／收起右欄「規範解答與步驟」（課堂互動必備）。
- **`Space` / `→` / `PageDown`**：下一題。
- **`←` / `PageUp`**：上一題。
- **`L` 鍵**：開啟／關閉虛擬紅色雷射筆。
- **`P` 鍵**：開啟／關閉板書塗鴉畫筆。
- **`C` 鍵**：一鍵清除當前試題筆跡。
- **🔍 放大按鈕**：點擊題目頂部放大按鈕，題目與解答以超大字體滿版呈現於全黑板，便於課堂書寫。
- **一鍵部署**：推送到 GitHub 即透過 GitHub Actions 自動部署至 GitHub Pages。
