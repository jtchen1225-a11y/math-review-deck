# -*- coding: utf-8 -*-
"""
build_calc_deck.py
產生高三理組數學思維本(2026)微積分篇 6 個章節的 JS 檔案：
- demo/ch-calc-01.js (28 題)
- demo/ch-calc-02.js (23 題)
- demo/ch-calc-03.js (8 題)
- demo/ch-calc-04.js (30 題)
- demo/ch-calc-05.js (27 題)
- demo/ch-calc-06.js (6 題)
並同步複製至 assets/
"""

import json
import os
import shutil

from data_calc_01 import get_ch01_slides
from data_calc_02 import get_ch02_slides
from data_calc_03 import get_ch03_slides
from data_calc_04 import get_ch04_slides
from data_calc_05 import get_ch05_slides
from data_calc_06 import get_ch06_slides

CHAPTERS = [
    {
        "id": "calc-01",
        "file": "ch-calc-01.js",
        "ch": "專題一 導數與微分",
        "year": "2026",
        "paper": "專題一",
        "title": "專題一 導數的定義、常見函數的導數與運算法則",
        "color": "#2563eb",
        "sections": ["單選題 1~6 題", "填空題 7~9 題", "基礎求導 10(1~12)", "複合求導 11(1~9)", "高階與隱函數 12~13", "幾何求導與圖像辨析 14~28"],
        "slides": get_ch01_slides()
    },
    {
        "id": "calc-02",
        "file": "ch-calc-02.js",
        "ch": "專題二 導數的應用",
        "year": "2026",
        "paper": "專題二",
        "title": "專題二 導數的應用 — 曲線的切線、單調性、極值、拐點與最優化",
        "color": "#059669",
        "sections": ["單選題 1~6 題", "切線方程 7~9 題", "極值與作圖 10~13 題", "最優化工程應用 14~15 題", "垂直切線與傾角 16~17 題", "恆成立與綜合 18~23 題"],
        "slides": get_ch02_slides()
    },
    {
        "id": "calc-03",
        "file": "ch-calc-03.js",
        "ch": "專題三 物理應用",
        "year": "2026",
        "paper": "專題三",
        "title": "專題三 微積分在物理上的應用 — 運動學、變力做功與流量微元",
        "color": "#d97706",
        "sections": ["運動學微積分關係梳理", "豎直上拋最高點例題", "v-t 運動圖像分析", "彈簧變力做功定積分", "速度與流量定積分練習 1~4"],
        "slides": get_ch03_slides()
    },
    {
        "id": "calc-04",
        "file": "ch-calc-04.js",
        "ch": "專題四 不定積分",
        "year": "2026",
        "paper": "專題四",
        "title": "專題四 不定積分的定義、運算法則與積分技巧",
        "color": "#7c3aed",
        "sections": ["三角降冪遞推公式", "代換求導", "22 道經典不定積分 3(1~22)", "6 道進階不定積分 4(1~6)"],
        "slides": get_ch04_slides()
    },
    {
        "id": "calc-05",
        "file": "ch-calc-05.js",
        "ch": "專題五 定積分與幾何",
        "year": "2026",
        "paper": "專題五",
        "title": "專題五 定積分的運算、幾何面積與旋轉體體積",
        "color": "#e11d48",
        "sections": ["面積定積分表達式", "基礎定積分 2(1~4)", "絕對值定積分 3(1~2)", "曲線圍成面積 4(1~8)", "待定係數與切線面積 5~7", "旋轉體體積 8~10", "黎曼和、變上限方程與面積最值 11~13"],
        "slides": get_ch05_slides()
    },
    {
        "id": "calc-06",
        "file": "ch-calc-06.js",
        "ch": "專題六 空間向量",
        "year": "2026",
        "paper": "專題六",
        "title": "專題六 空間向量的概念與運算（進階拓展）",
        "color": "#0284c7",
        "sections": ["單選題 1~6 題 (坐標對稱、共面、垂直平行、中點分解、夾角鈍角)"],
        "slides": get_ch06_slides()
    }
]

def generate_js(chap):
    payload = {
        "ch": chap["ch"],
        "year": chap["year"],
        "paper": chap["paper"],
        "title": chap["title"],
        "color": chap["color"],
        "sections": chap["sections"],
        "slides": chap["slides"]
    }
    json_str = json.dumps(payload, ensure_ascii=False, indent=2)
    js_content = f"""/* 2026 高三理組數學思維本 · 微積分篇 — {chap['ch']} ({len(chap['slides'])} 題) */
(function() {{
  const DECK = window.DECK = window.DECK || [];

  DECK.push({json_str});
}})();
"""
    return js_content

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    demo_dir = os.path.join(base_dir, "demo")
    assets_dir = os.path.join(base_dir, "assets")
    os.makedirs(demo_dir, exist_ok=True)
    os.makedirs(assets_dir, exist_ok=True)

    total_questions = 0
    print("🚀 開始生成微積分思維本 (2026) 簡報章節檔案...")

    for chap in CHAPTERS:
        fname = chap["file"]
        q_count = len(chap["slides"])
        total_questions += q_count

        js_code = generate_js(chap)

        # 寫入 demo/
        demo_path = os.path.join(demo_dir, fname)
        with open(demo_path, "w", encoding="utf-8") as f:
            f.write(js_code)

        # 同步複製到 assets/
        assets_path = os.path.join(assets_dir, fname)
        with open(assets_path, "w", encoding="utf-8") as f:
            f.write(js_code)

        print(f"  ✅ {fname:16s}: {chap['title']} ({q_count} 題)")

    print(f"\n🎉 成功生成 6 個章節，共計 {total_questions} 題組！")

if __name__ == "__main__":
    main()
