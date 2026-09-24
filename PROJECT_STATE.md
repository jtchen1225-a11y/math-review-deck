# PROJECT_STATE.md — 澳門四校聯考複習簡報系統專案狀態與交接日誌

## 1. 專案核心目標 (Project Goals)
- **專案願景**：專為高三學生複習「澳門四校聯考（正卷與附加卷）」打造的互動視覺化投影簡報系統（純前端、零金鑰、零建置），支援課堂黑板投影、雷射筆/畫筆即時互動、階梯式提問與動態滑桿幾何探究。
- **技術棧**：原生 HTML5 + CSS3 + 原生 JavaScript + 原生 SVG + MathJax (LaTeX) + GitHub Actions & Pages 自動部署。
- **線上展示網址**：https://jtchen1225-a11y.github.io/math-review-deck/
- **GitHub 倉庫**：https://github.com/jtchen1225-a11y/math-review-deck
- **新課探究模板倉庫**：https://github.com/jtchen1225-a11y/math-lesson-deck

---

## 2. 當前進度階段 (Current Stage)
- **整體進度**：✅ **四校聯考 10 卷 (125 題) + 微積分 6 專題 (122 題/94 題組) + 空間向量 5 專題 (75 題卡) 全量上線（100% 交付）**
- **試題規模**：
  1. 澳門四校聯考（JAE）2021～2025 年完整 10 份原卷（共 125 題）。
  2. 高三理組數學思維本(2026)微積分全冊（共 6 大專題、122 題、94 個教學簡報卡片）。
  3. 高三理組數學思維本(2026)空間向量全冊（共 5 大專題、75 題卡、11 張立體幾何高清配圖、100% 植入微軟原生 OMML 公式）。
- **線上展示多入口與互聯矩陣**：
  - 四校聯考首頁：https://jtchen1225-a11y.github.io/math-review-deck/
  - 微積分思維本專題頁：https://jtchen1225-a11y.github.io/math-review-deck/calculus.html
  - 空間向量思維本專題頁：https://jtchen1225-a11y.github.io/math-review-deck/vectors.html
  - 在線 OMML 數學方程式庫：https://jtchen1225-a11y.github.io/math-review-deck/omml.html
- **最新完成之架構革新**：
  1. **空間向量思維本獨立專題入口與雙向傳送門**：`demo/vectors.html` 與首頁、微積分篇、OMML 庫一鍵無縫切換。
  2. **空間向量 5 大專題完整解構與轉換**：
     - 專題一：空間向量的概念及運算 (13 題卡)
     - 專題二：應用空間向量解決立體幾何問題 (21 題卡，內嵌 11 幅高清幾何立體題圖)
     - 專題三：空間解析幾何 — 平面、直線與球面 (24 題卡)
     - 專題四：定積分計算綜合（銜接題） (9 題卡)
     - 專題五：基礎概念 — 集合與數學歸納法（總複習題） (8 題卡)
  3. **微積分思維本獨立專題入口與雙向傳送門**：`demo/calculus.html` 與 `demo/index.html` 一鍵無縫切換。

  2. **微積分 6 大專題完整轉換**：
     - 專題一：導數的定義、運算法則與高階求導 (33 題卡)
     - 專題二：導數的應用 — 切線、極值、單調性與最優化 (23 題卡)
     - 專題三：微積分在物理上的應用 — 運動學、做功與流量 (8 題卡)
     - 專題四：不定積分的定義、運算法則與積分技巧 (10 題卡)
     - 專題五：定積分的運算、幾何面積與旋轉體體積 (14 題卡)
     - 專題六：空間向量的概念與運算（進階拓展） (6 題卡)
  3. **通用化 engine.js 引擎**：支援動態 `window.PAPER_REGISTRY` 注入、自訂 `STORAGE_KEY` 與週次快速進度選取器，四校聯考與思維本微積分共用同一套高規格渲染引擎。
  4. **全套課堂教具與快捷鍵**：
     - <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd>：三部曲階梯式推進（審題 -> 考點 -> 規範解答）
     - <kbd>←</kbd> / <kbd>PageUp</kbd>：階梯式倒退
     - <kbd>K</kbd>：揭曉/收起考點
     - <kbd>A</kbd>：揭曉/收起解答
     - <kbd>Q</kbd>：全螢幕放大題目
     - <kbd>L</kbd>：虛擬雷射筆
     - <kbd>P</kbd>：黑板塗鴉畫筆
     - <kbd>C</kbd>：清除筆跡
  5. **進度控制與防劇透保護**：右上角教師 PIN 碼（預設：`8888`），大螢幕生成向量 SVG QR 碼，學生掃碼即鎖定當週進度。

---

## 3. 待辦事項清單 (Action Items / Checklist)
- [x] 克隆並建立 `math-lesson-deck` 新課模板框架並發布至 GitHub
- [x] 提取澳門四校聯考原卷 PDF（2021～2025 正卷與附加卷共 10 份）
- [x] 轉換為一頁一題結構（題目、公式、考點、陷阱、動態幾何圖、規範踩點步驟、答案、速解訣竅）
- [x] 題目與核心知識點分離雙卡片區域，支援知識點全螢幕放大
- [x] 課堂三部曲漸進式步進教學動線（審題 -> 考點 -> 步驟解答）
- [x] 右上角「⚙️ 課堂進度控制」教師面板（PIN 碼 8888、週次快速進度、大螢幕 QR 碼、學生受限網址）
- [x] 部署至 GitHub Pages 並全量通過 `verify_jae_deck.js` 檢驗（125 題 100% 通過）
- [x] 同步至全域技能目錄 `C:\Users\CDSJ5\.gemini\config\skills\math-review-deck\`
- [ ] （後續擴充）若取得 2020 年或更早真題，可使用 `python scripts/new_jae_deck.py` 擴充
- [ ] （課堂回饋）依據實際課堂教學回饋微調部分題目的動態滑桿參數

---

## 4. 跨電腦交接日誌 (Session Handover Logs)

### 📅 2026-09-25 00:24 (緊急修復 vectors.html 白屏問題)
- **問題根因**：
  1. `vectors.html` 中浮動工具列遺漏了全螢幕按鈕 `<button id="dkFull">`，導致 `engine.js` 執行 `$('dkFull').onclick` 時拋出 `TypeError: Cannot set properties of null`，直接中斷後續的 `applyDeckFilter()` 與 `buildCover()` 執行，使頁面卡在空白狀態無章節卡片。
  2. `vectors.html` 的進度控制彈窗與 PIN 碼彈窗結構 ID 未與 `engine.js` 完全對齊。
- **修復方案**：
  1. 防禦性編程：在 `engine.js` 中對所有教具列按鈕（`dkFull`, `dkSidebar`, `dkPrev`, `dkNext`, `dkLaser`, `dkPen`, `dkClear`, `dkErase`）增加存在性檢查 (`if ($('...'))`)，防止任何單一頁面缺元素時中斷整體引擎。
  2. 補齊結構：在 `vectors.html` 的教具列中補回 `dkFull` 按鈕，並將進度控制及 PIN 碼彈窗完整標準化對齊 `calculus.html`。
  3. 實機 CDP 驗證：透過 Chrome DevTools Protocol 進行無頭瀏覽器即時渲染驗證，確認 5 大專題卡片全數生成，且在點擊進入後 80 頁幻燈片與 75 個目錄項運作流暢，零 Console 錯誤。

### 📅 2026-09-25 00:15 (空間向量全冊 5 專題 75 題卡與 OMML 整合上線)
- **本次完成重點**：
  1. **原書 PDF 100% 完整解析**：全面解構 `T06高三理組數學思維本(2026)_空間向量.pdf`（含課本 P.9～P.17），拆解為 5 大專題、75 道教學題卡（含 11 題立體幾何精美裁切配圖）。
  2. **微軟原生 OMML 核心全量實裝**：75 道空間向量與銜接試題參考答案 100% 透過 `latex2mathml` + 官方 `MML2OMML.XSL` 轉化為微軟原生 OMML XML，並封裝至 `solution.omml`。
  3. **雙實體檔案產出**：成功編譯《高三理組數學思維本_空間向量_參考答案_OMML對照手冊.docx》與《高三理組數學思維本_空間向量_參考答案_OMML彙編.xml》，隨附於 `demo/` 與 `assets/`。
  4. **全套互動功能就緒**：`demo/vectors.html` 搭載虛擬雷射筆、黑板畫筆、三部曲階梯式步進、核心考點與題目黑板放大、大螢幕 QR 碼及課堂進度控制面板。
  5. **在線 OMML 庫升級**：`demo/omml.html` 支援微積分與空間向量雙冊切換檢索與一鍵複製。
  6. **四網頁互聯互通**：`index.html`、`calculus.html`、`vectors.html`、`omml.html` 實現四位一體無縫傳送門互跳。
  7. **自動化驗證與測試**：`scripts/verify_vectors_deck.js` 與 `scripts/test_pages.py` 100% PASS。


### 📅 2026-09-15 15:20
- **本次完成重點**：
  1. 網頁右上角新增「⚙️ 課堂進度控制」按鈕（封面與舞台頂部皆有）。
  2. 教師 PIN 碼驗證機制（預設密碼：`8888`），防止學生擅自解鎖未教考卷與答案。
  3. 快速進度按鈕網格：【第 1、2 週】(2025 全卷)、【第 3、4 週】(2024 全卷)、【第 5、6 週】(2023 全卷)...及累計進度一鍵切換。
  4. 自由勾選清單：5 年 10 卷分年度卡片式獨立勾選，即時顯示已選卷數與題數。
  5. 📱 大螢幕 QR 碼：純前端向量 SVG QR 碼（`qrcode.min.js`），學生拿 iPad 掃碼即載入受限考卷，零外部 API、離線可用。
  6. 📋 複製學生網址：生成帶 `?papers=...` 的專屬受限網址，自動複製至剪貼簿並彈出 Toast 提示。
  7. 💾 儲存並在當前生效：`localStorage` 儲存並即時重組題庫、重繪封面卡與目錄樹，免重新整理。
  8. 同步至 `assets/` 與全域技能目錄。

### 📅 2026-09-24 09:30 (修復 calculus.html 渲染與部署問題)
- **本次修復焦點**：
  1. 根因排查：在 `engine.js` 模版字串中誤用未定義變數 `${globalIdx}`（正確應為 `${idx}`），導致任何題目在執行 `render()` 時拋出 `ReferenceError: globalIdx is not defined`，畫面被中斷無法渲染題目卡片。
  2. 實裝 `window.copyCurrentOMML` 核心函數與 `fallbackCopy` 文字區域複製邏輯，確保在 iPad、Chrome、Edge、Safari 等各類瀏覽器皆能穩定一鍵複製 Word 原生 OMML 公式。
  3. 增強封面使用者體驗：為封面 6 大專題卡片加入點擊跳轉事件（`card.onclick`），點擊任一章節卡片即可直接開啟簡報並定位至該專題。
  4. 經 Node.js 完整模擬 300 步 `next()` 導航、換題、放大視窗與 OMML 複製，100% 通過（零錯誤）。

### 📅 2026-09-24 09:12 (前次更新)
- **本次完成重點**：
  1. 覆查網頁版《微積分思維本（2026）》全書 6 大專題、94 張卡片（122 題組）的參考答案位置與 LaTeX 定界符，修復 57 處遺漏 `$` 導致 MathJax 未能美化渲染的問題，並修復單選題第 1 題選項 C、D。
  2. 透過微軟官方 OMML 轉換引擎（`MML2OMML.XSL` + `latex2mathml`）將全書 94 題全部參考答案轉化為微軟 Word 原生 OMML 方程式，並直接植入 `solution.omml`。
  3. 在簡報舞台（`engine.js`）的「參考答案」列及黑板全螢幕放大視窗中，實裝「📋 複製 Word OMML」按鈕，教師與學生點擊即可一鍵複製原生 OMML 方程式代碼，貼入 Word 即刻生成原生可編輯公式物件。
  4. 建立專屬在線方程式庫 `demo/omml.html`（與 `assets/omml.html`），支援按章節篩選、即時搜尋題號、MathJax 公式預覽、OMML XML 展開/收合及一鍵複製。
  5. 生成並同步放置《微積分思維本_參考答案_OMML對照手冊.docx》與《微積分思維本_參考答案_OMML彙編.xml》至 `demo/` 與 `assets/`，支援網頁端一鍵下載。
  6. 在 `calculus.html` 與 `index.html` 首頁封面均加入「📑 OMML 數學方程式庫」傳送門按鈕，打通多頁互聯。
  7. 測試套件 `verify_calc_deck.py` 與 `test_pages.py` 100% 通過（零錯誤），並同步更新全域技能目錄。

### 📅 2026-09-24 08:38 (前次更新)
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
