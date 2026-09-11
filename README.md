# math-review-deck

**互動視覺化複習簡報框架** — 一頁一重點、左邊講觀念、右邊看圖、拖滑桿就會動的網頁簡報。
純前端、零建置、零 API 金鑰。

這是一套已經在實際教學現場用過的框架：以此產出的六冊國中數學全冊複習簡報
（**364 頁、約 169 頁互動**）目前正在給學生使用。

---

## 它產出什麼

一份簡報就是一個資料夾，可以直接用瀏覽器開，或丟到任何靜態主機：

```
我的複習網站/
├── index.html      # 骨架（封面／目錄／舞台／控制列／教具列）
├── engine.js       # 導覽與渲染引擎        ← 共用，不用改
├── style.css       # 全部樣式              ← 共用，不用改
├── svg.js          # SV 幾何工具庫         ← 共用，不用改
└── ch1.js ~ chN.js # 各章投影片內容        ← 只需要寫這個
```

每張投影片是左右兩欄：

| 左：概念欄 | 右：視覺欄 |
|---|---|
| 章節徽章、標題（這一頁的唯一重點）、公式卡、2~4 條要點、範例（可展開解答） | SVG 圖／公式卡／對照表，可加**滑桿**或**步驟滑桿** |

### 內建功能

- **一頁一螢幕自動縮放** — 內容過高會等比縮小，投影時整頁不必捲動
- **授課教具列** — 雷射筆（含淡出拖尾）、畫筆（5 色＋橡皮擦）、清除筆跡、全螢幕
- **放大成整頁** — 把範例或圖解攤成滿版方便在上面用畫筆講解；
  HTML 內容會**連同字級一起等比放大**
- **章節目錄** — 側欄可收合，手機版自動改為單欄
- **深連結** — `#present` 直接進簡報、`#p=20` 直接跳頁
- **MathJax 數學排版**（唯一的外部相依）

---

## 快速開始

### 1. 產生骨架

```bash
python scripts/new_deck.py --out 我的複習網站 \
    --title "國中數學 七上 全冊複習" \
    --eyebrow "108 課綱國中數學 · 第 1 冊（七上）" \
    --cover-title "七上全冊複習" \
    --sub "整數的運算 · 分數的運算 · 一元一次方程式" \
    --home "七上複習" \
    --chapters "整數的運算::1-1 負數與數線,1-2 整數的加減" \
               "分數的運算::2-1 因數與倍數,2-2 最大公因數"
```

`--chapters` 格式為 `章名:色碼:節1,節2`；色碼留空會自動套用內建配色。

### 2. 寫內容

編輯 `chN.js`。格式規格見 [`references/slide-spec.md`](references/slide-spec.md)，
完整範例見 [`examples/ch-example.js`](examples/ch-example.js)（示範五種頁型）。

```js
{
  sec: '1-2', secName: '整數的加減',
  title: '同號相加照抄符號，異號相加取「大的」符號',
  points: ['…', '…', '…'],
  formula: { label: '交換律', tex: 'a+b=b+a' },
  visual: (h) => { /* 畫圖或做互動 */ },
  caption: '圖下方一行說明。',
  example: { q: '…', steps: ['…', '…'], ans: '…' }
}
```

### 3. 驗證

```bash
node scripts/verify_deck.js 我的複習網站
```

**不需要瀏覽器。** 它會把每張投影片的 `visual()` 實際執行一遍，並
**掃過每個滑桿的每一個值**，因此能抓出「只有拖到某個值才會爆」的錯誤。

同時檢查：必要欄位、`\( \)` 是否成對、`formula.tex` 誤寫 `$$`、
`document.getElementById` 誤用、SVG viewBox 版面、`index.html` 載入一致性、快取版本號。

要一併擋掉不該出現的內容（例如超出該年級範圍的名詞）：

```bash
node scripts/verify_deck.js 我的複習網站 --forbid "連比,判別式,斜率"
```

### 4. 預覽

```bash
python -m http.server 8890 --directory 我的複習網站
```

> ⚠️ 用 `file://` 直接開，部分環境會當成靜態快照而不執行 JS，請起伺服器。

### 5. 部署

```bash
npx wrangler pages deploy 我的複習網站 --project-name 我的專案名 --branch main --commit-dirty=true
```

其他方式（Netlify／GitHub Pages）與踩坑紀錄見 [`references/deploy.md`](references/deploy.md)。

---

## 文件

| 檔案 | 內容 |
|---|---|
| [`SKILL.md`](SKILL.md) | AI Agent 用的技能說明（工作流程、硬性規則、品質判準） |
| [`references/slide-spec.md`](references/slide-spec.md) | `chN.js` 完整格式規格 |
| [`references/svg-toolkit.md`](references/svg-toolkit.md) | `SV` 幾何工具庫 API |
| [`references/interaction-patterns.md`](references/interaction-patterns.md) | 八種實測有效的互動模式 |
| [`references/deploy.md`](references/deploy.md) | 部署與改版注意事項 |
| [`examples/ch-example.js`](examples/ch-example.js) | 五種頁型的完整範例章 |

---

## 當作 Claude Code / Codex Skill 使用

```bash
# Claude Code
git clone https://github.com/jtchen1225-a11y/math-review-deck.git ~/.claude/skills/math-review-deck

# Google Antigravity
git clone https://github.com/jtchen1225-a11y/math-review-deck.git ~/.gemini/config/skills/math-review-deck

# 或 Codex / OpenCode
git clone https://github.com/jtchen1225-a11y/math-review-deck.git ~/.codex/skills/math-review-deck
```

裝好後直接說「幫我做一份 XX 的全冊複習簡報」即可觸發。

---

## 幾個容易踩的坑

1. **改了 `chN.js` 要同步更新 `index.html` 的 `?v=` 版本號**，
   否則瀏覽器會拿快取的舊章節，你會以為改動沒生效。
2. **`visual` 內只能用 `h.querySelector`**，不可用 `document.getElementById`——
   所有投影片共用同一個文件，id 會跨頁打架。
3. **SVG viewBox 寬高比不要低於 1.35**、高度 ≤320（有滑桿的 ≤300），否則會被縮到看不清。
4. **`points` 最多 4 條、每條 ≤45 字**。
5. 多份簡報共用同一份 `engine.js`／`style.css`／`svg.js`，
   改了要**每個資料夾都複製一次**再各自部署。

以上都會被 `verify_deck.js` 檢查出來。

---

## 相依

- **執行簡報**：只要瀏覽器＋網路（載入 MathJax CDN）
- **產生骨架**：Python 3.7+
- **驗證**：Node.js 14+

## 授權

MIT
