#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""new_jae_deck.py — 產生澳門四校聯考（正卷／附加卷）互動複習簡報骨架專案。

用法範例：
  python scripts/new_jae_deck.py --out jae-2024 --year 2024 --paper both
  python scripts/new_jae_deck.py --out jae-standard --year 2024 --paper standard
  python scripts/new_jae_deck.py --out jae-supp --year 2024 --paper supplementary
"""
import argparse
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSETS = os.path.join(ROOT, 'assets')

INDEX_HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} · 互動複習簡報</title>
  <link rel="stylesheet" href="style.css">
  <script>
    window.MathJax = {{
      tex: {{
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
        processEscapes: true
      }},
      svg: {{ fontCache: 'global' }}
    }};
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
</head>
<body>

  <!-- 封面頁 -->
  <div class="cover" id="cover">
    <div class="cover-inner">
      <div class="cover-eyebrow">澳門四校聯合入學考試 · 數學科複習專案</div>
      <h1 class="cover-title">{title}</h1>
      <p class="cover-sub">{sub_title}</p>
      <div class="cover-chapters" id="coverChapters"></div>
      <button class="cover-start" id="startBtn">開始試題探究 ➔</button>
      <div class="cover-hint">支援鍵盤 ← → 換題 · A 鍵展開解答 · 投影全螢幕 · 虛擬雷射筆與畫筆</div>
    </div>
  </div>

  <!-- 簡報主體 -->
  <div class="app hidden" id="app">
    <div class="topbar">
      <button class="home-btn" id="homeBtn">⌂ 回首頁</button>
      <div class="crumb" id="crumb"></div>
      <button class="ghost-btn" id="tocToggle">☰ 試題目錄</button>
    </div>

    <div class="body">
      <nav class="toc" id="toc"></nav>
      <main class="stage">
        <div class="slide" id="slide"></div>
        <div class="controlbar">
          <button class="nav-btn" id="prevBtn">← 上一題</button>
          <div class="progress">
            <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
            <div class="progress-text" id="progressText"></div>
          </div>
          <button class="nav-btn" id="nextBtn">下一題 →</button>
        </div>
      </main>
    </div>
  </div>

  <!-- 授課教具 -->
  <div class="laser-dot hidden" id="laserDot"></div>
  <canvas class="pen-canvas" id="penCanvas"></canvas>
  <div class="dock" id="dock">
    <button class="dbtn" id="dkSidebar" title="展開／收合題目目錄">☰</button>
    <div class="dsep"></div>
    <button class="dbtn" id="dkPrev" title="上一題 (←)">▲</button>
    <button class="dbtn" id="dkNext" title="下一題 (→)">▼</button>
    <div class="dsep"></div>
    <button class="dbtn" id="dkLaser" title="雷射筆 (L)">●</button>
    <button class="dbtn" id="dkPen" title="畫筆 (P)">✎</button>
    <button class="dbtn derase" id="dkErase" title="橡皮擦">⌫</button>
    <button class="dbtn" id="dkClear" title="清除筆跡 (C)">✕</button>
    <div class="dcolors hidden" id="dkColors">
      <button class="dcolor active" data-c="#e11d48" style="--sc:#e11d48"></button>
      <button class="dcolor" data-c="#2563eb" style="--sc:#2563eb"></button>
      <button class="dcolor" data-c="#059669" style="--sc:#059669"></button>
      <button class="dcolor" data-c="#d97706" style="--sc:#d97706"></button>
    </div>
    <div class="dsep"></div>
    <button class="dbtn" id="dkFull" title="全螢幕">⛶</button>
  </div>

  <!-- 核心函式庫 -->
  <script src="svg.js"></script>
{script_tags}
  <script src="engine.js"></script>
</body>
</html>
"""

STANDARD_TEMPLATE = """/* ============================================================
   {year} 澳門四校聯考 · 數學正卷
   題型：選擇題（1~15題，每題4分）+ 解答題（1~5題，每題8~10分）
   ============================================================ */
window.DECK = window.DECK || [];
(function () {{
  window.DECK.push({{
    ch: "{year}-正卷",
    title: "{year} 澳門四校聯考 數學正卷",
    color: "#2563eb",
    sections: [
      "選擇題 第1~15題",
      "解答題 第1~5題"
    ],
    slides: [
      // 範例題目 1：選擇題
      {{
        year: "{year}",
        paper: "正卷",
        qNum: "選擇題 第1題",
        topic: "多項式與因式定理",
        score: "4分",
        q: "設 $P(x) = 2x^3 - 3x^2 + kx - 5$ 能被 $x - 1$ 整除，則常數 $k$ 之值為？",
        options: [
          "(A) 4",
          "(B) 6",
          "(C) -4",
          "(D) -6"
        ],
        knowledge: {{
          formulas: [
            "P(a) = 0 \\\\iff (x - a) \\\\mid P(x) \\\\quad (\\\\text{{因式定理}})"
          ],
          points: [
            "<b>因式定理</b>：多項式 $P(x)$ 能被一次因式 $x - a$ 整除，等價於 $P(a) = 0$。",
            "<b>聯考思維</b>：遇到「整除」或「求餘式」，優先令除式為 0 代入求解。"
          ],
          pitfall: "注意計算正負號與項的乘積，切勿混淆 $P(1)$ 與 $P(-1)$。"
        }},
        solution: {{
          thinking: "直接令 $x = 1$，代入因式定理 $P(1) = 0$ 即可解出 $k$。",
          steps: [
            "由因式定理知，若 $P(x)$ 能被 $x - 1$ 整除，則 $P(1) = 0$。",
            "代入 $x = 1$：",
            "$$P(1) = 2(1)^3 - 3(1)^2 + k(1) - 5 = 2 - 3 + k - 5 = k - 6 = 0$$",
            "解得 $k = 6$。"
          ],
          ans: "(B)",
          quickTip: "口算技巧：令除式為 0，直接把 1 心算代入係數之和 $2 - 3 + k - 5 = 0 \\\\implies k = 6$。"
        }}
      }}
    ]
  }});
}})();
"""

SUPP_TEMPLATE = """/* ============================================================
   {year} 澳門四校聯考 · 數學附加卷
   題型：解答題（5大題，每題20分，共100分）
   考點：微積分、數學歸納法、向量與立體幾何、複數、矩陣與行列式
   ============================================================ */
window.DECK = window.DECK || [];
(function () {{
  window.DECK.push({{
    ch: "{year}-附加卷",
    title: "{year} 澳門四校聯考 數學附加卷",
    color: "#7c3aed",
    sections: [
      "第1題 · 數學歸納法",
      "第2題 · 微積分與導函數",
      "第3題 · 空間向量與幾何",
      "第4題 · 複數與棣美弗定理",
      "第5題 · 矩陣與克萊姆法則"
    ],
    slides: [
      // 範例題目 1：微積分
      {{
        year: "{year}",
        paper: "附加卷",
        qNum: "解答題 第2題",
        topic: "微積分 · 切線方程式與極值",
        score: "20分",
        q: "設函數 $f(x) = x^3 - 3x + 2$。<br>(1) 求曲線 $y = f(x)$ 在 $x = 2$ 處的切線方程；<br>(2) 求函數 $f(x)$ 的單調區間與極值。",
        knowledge: {{
          formulas: [
            "k = f'(x_0), \\\\quad y - y_0 = f'(x_0)(x - x_0)",
            "f'(x) = 0 \\\\implies \\\\text{{駐點檢驗極值}}"
          ],
          points: [
            "<b>切線步驟</b>：求導 $\\\\to$ 代入點坐標得斜率 $\\\\to$ 點斜式寫出標準方程。",
            "<b>極值規範</b>：四校聯考閱卷要求嚴格列出一階導函數正負號表格。"
          ],
          pitfall: "單調區間請以逗號或「和」連接，嚴格閱卷禁止使用聯集符號 $\\\\cup$。"
        }},
        solution: {{
          thinking: "求導函數判定斜率，令導函數為零求駐點判定單調增減性與極大極小值。",
          steps: [
            "(1) $f'(x) = 3x^2 - 3$。當 $x = 2$ 時，切線斜率 $k = f'(2) = 3(4) - 3 = 9$。",
            "切點坐標為 $(2, f(2)) = (2, 4)$。切線方程為 $y - 4 = 9(x - 2) \\\\implies 9x - y - 14 = 0$。",
            "(2) 令 $f'(x) = 3(x^2 - 1) = 0 \\\\implies x = \\\\pm 1$。",
            "當 $x < -1$ 或 $x > 1$ 時 $f'(x) > 0$（遞增）；當 $-1 < x < 1$ 時 $f'(x) < 0$（遞減）。",
            "極大值為 $f(-1) = 4$，極小值為 $f(1) = 0$。"
          ],
          ans: "(1) 9x - y - 14 = 0; (2) 遞增區間: (-\\infty, -1), (1, +\\infty); 遞減區間: (-1, 1); 極大值 4, 極小值 0"
        }}
      }}
    ]
  }});
}})();
"""

def main():
    parser = argparse.ArgumentParser(description="產生澳門四校聯考（JAE）複習簡報骨架專案")
    parser.add_argument("--out", required=True, help="目標輸出目錄")
    parser.add_argument("--year", default="2024", help="考試年份 (例如 2024)")
    parser.add_argument("--paper", choices=["standard", "supplementary", "both"], default="both",
                        help="卷別: standard (正卷), supplementary (附加卷), both (雙卷)")
    parser.add_argument("--title", default="", help="簡報大標題（若未填則自動生成）")

    args = parser.parse_args()
    out_dir = os.path.abspath(args.out)
    os.makedirs(out_dir, exist_ok=True)

    # 複製核心資產
    for asset in ["engine.js", "style.css", "svg.js"]:
        src = os.path.join(ASSETS, asset)
        dst = os.path.join(out_dir, asset)
        shutil.copyfile(src, dst)
        print(f"  [複製] {asset} -> {dst}")

    # 依卷別生成章節檔案
    script_tags = []
    if args.paper in ["standard", "both"]:
        std_filename = f"ch-{args.year}-standard.js"
        std_path = os.path.join(out_dir, std_filename)
        with open(std_path, "w", encoding="utf-8") as f:
            f.write(STANDARD_TEMPLATE.format(year=args.year))
        script_tags.append(f'  <script src="{std_filename}"></script>')
        print(f"  [建立] 正卷模板 -> {std_path}")

    if args.paper in ["supplementary", "both"]:
        supp_filename = f"ch-{args.year}-supp.js"
        supp_path = os.path.join(out_dir, supp_filename)
        with open(supp_path, "w", encoding="utf-8") as f:
            f.write(SUPP_TEMPLATE.format(year=args.year))
        script_tags.append(f'  <script src="{supp_filename}"></script>')
        print(f"  [建立] 附加卷模板 -> {supp_path}")

    # 生成 index.html
    title = args.title or f"{args.year} 澳門四校聯考 數學全卷複習"
    sub_title = "正卷（選擇題＋解答題） · 附加卷（微積分＋向量＋複數） 一頁一題互動探究"
    if args.paper == "standard":
        title = args.title or f"{args.year} 澳門四校聯考 數學正卷複習"
        sub_title = "選擇題 1~15 · 解答題 1~5 核心考點突破"
    elif args.paper == "supplementary":
        title = args.title or f"{args.year} 澳門四校聯考 數學附加卷複習"
        sub_title = "數學歸納法 · 導數微積分 · 複數棣美弗 · 空間向量高分專攻"

    html_content = INDEX_HTML_TEMPLATE.format(
        title=title,
        sub_title=sub_title,
        script_tags="\n".join(script_tags)
    )

    index_path = os.path.join(out_dir, "index.html")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"  [OK] 入口檔案 -> {index_path}")

    print(f"\n[OK] 澳門四校聯考複習簡報專案建立完成！")
    print(f"  預覽指令: python -m http.server 8000 -d \"{out_dir}\"")
    print(f"  瀏覽器開啟: http://localhost:8000")

if __name__ == "__main__":
    if hasattr(sys.stdout, 'reconfigure'):
        try:
            sys.stdout.reconfigure(encoding='utf-8')
        except Exception:
            pass
    main()
