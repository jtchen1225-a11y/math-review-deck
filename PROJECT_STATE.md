# PROJECT_STATE.md — 澳門四校聯考複習簡報系統專案狀態與交接日誌

## 1. 專案核心目標 (Project Goals)
- **專案願景**：專為高三學生複習「澳門四校聯考（正卷與附加卷）」打造的互動視覺化投影簡報系統（純前端、零金鑰、零建置），支援課堂黑板投影、雷射筆/畫筆即時互動、階梯式提問與動態滑桿幾何探究。
- **技術棧**：原生 HTML5 + CSS3 + 原生 JavaScript + 原生 SVG + MathJax (LaTeX) + GitHub Actions & Pages 自動部署。
- **線上展示網址**：https://jtchen1225-a11y.github.io/math-review-deck/
- **GitHub 倉庫**：https://github.com/jtchen1225-a11y/math-review-deck
- **新課探究模板倉庫**：https://github.com/jtchen1225-a11y/math-lesson-deck

---

## 2. 當前進度階段 (Current Stage)
- **整體進度**：✅ **核心功能與 2021～2025 原卷試題全量上線（100% 交付）**
- **試題規模**：涵蓋 2021～2025 年完整 10 份原卷（正卷 5 份 + 附加卷 5 份，共 125 道試題）。
- **最新完成之架構革新**：
  1. **左欄雙卡片獨立分區**：題目題幹與選項卡片 (`.jae-q-card`) 與核心知識點 & 必背公式卡片 (`.jae-kp-card`) 分離。
  2. **核心知識點全黑板放大**：`🔍 放大知識點` 按鈕彈出全螢幕大字體黑板，完整呈現必背公式、聯考破題切入點與易錯盲區警示。
  3. **課堂「三部曲階梯式步進」動線**：
     - `① 審題閱讀`：初翻至該題僅顯示題目，引導學生審題。
     - `② 核心考點&公式`：按 Next / Space / K 揭曉考點與公式。
     - `③ 規範解答與速解`：按 Next / Space / A 揭曉官方閱卷標準步驟與秒殺訣竅。
     - 倒退（Prev / LeftArrow / PageUp）依序回退上一階段。
  4. **全套課堂教具與快捷鍵**：
     - <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd>：階梯式推進
     - <kbd>←</kbd> / <kbd>PageUp</kbd>：階梯式倒退
     - <kbd>K</kbd>：揭曉/收起考點
     - <kbd>A</kbd>：揭曉/收起解答
     - <kbd>Q</kbd>：全螢幕放大題目
     - <kbd>L</kbd>：虛擬雷射筆
     - <kbd>P</kbd>：黑板塗鴉畫筆
     - <kbd>C</kbd>：清除筆跡

---

## 3. 待辦事項清單 (Action Items / Checklist)
- [x] 克隆並建立 `math-lesson-deck` 新課模板框架並發布至 GitHub
- [x] 提取澳門四校聯考原卷 PDF（2021～2025 正卷與附加卷共 10 份）
- [x] 轉換為一頁一題結構（題目、公式、考點、陷阱、動態幾何圖、規範踩點步驟、答案、速解訣竅）
- [x] 題目與核心知識點分離雙卡片區域，支援知識點全螢幕放大
- [x] 課堂三部曲漸進式步進教學動線（審題 -> 考點 -> 步驟解答）
- [x] 部署至 GitHub Pages 並全量通過 `verify_jae_deck.js` 檢驗（125 題 100% 通過）
- [x] 同步至全域技能目錄 `C:\Users\CDSJ5\.gemini\config\skills\math-review-deck\`
- [ ] （後續擴充）若取得 2020 年或更早真題，可使用 `python scripts/new_jae_deck.py` 擴充
- [ ] （課堂回饋）依據實際課堂教學回饋微調部分題目的動態滑桿參數

---

## 4. 跨電腦交接日誌 (Session Handover Logs)

### 📅 2026-09-14 17:56 (本次收工)
- **本次完成重點**：
  1. 依照教學需求，將題目與核心知識點分離為獨立雙卡片區域。
  2. 實裝核心考點全螢幕放大視窗 (`openKpModal`)，大字體卡片呈現必背公式、破題切入點、易錯盲區。
  3. 實裝「三部曲階梯式步進」動線管理（`applySubStep` / `updateNavButtons` / `go` / `next` / `prev`）：
     - 階段 0：僅顯示題目，引導學生閱讀。
     - 階段 1：按 Next / Space / K 揭曉核心知識點 & 必背公式。
     - 階段 2：按 Next / Space / A 揭曉規範解答、評分標準與速解。
     - 階段 3：切換至下一題（自動重設為階段 0）。
     - 倒退支援依序回溯。
  4. 快捷鍵強化：支援 `K`（考點）、`A`（解答）、`Q`（題目放大）、`L`（雷射筆）、`P`（畫筆）、`C`（清除筆跡）。
  5. 10 卷 125 題全量驗證通過 (`verify_jae_deck.js`)。
  6. 同步至 `assets/` 與全域技能目錄 `C:\Users\CDSJ5\.gemini\config\skills\math-review-deck\`。
  7. Git Commit & Push，GitHub Actions 部署成功（11 秒完成，線上同步更新）。
- **保留進度 / 未解卡點**：無。工作區代碼完全整潔，線上運行正常。
- **下次開工入口**：
  - 開啟投影網址：直接用瀏覽器開啟 https://jtchen1225-a11y.github.io/math-review-deck/ 即可開始投影教學。
  - 若在另一台電腦開工：執行 `git pull` 確認同步後，閱讀本檔即可 10 秒恢復工作記憶。
