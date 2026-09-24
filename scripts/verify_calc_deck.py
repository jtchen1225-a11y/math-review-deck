# -*- coding: utf-8 -*-
"""
verify_calc_deck.py
自動校驗微積分思維本 (2026) 6 個章節所有題目的結構、必要欄位與 LaTeX 公式。
"""

import json
import os
import sys

def verify_deck(deck_dir):
    ch_files = [f"ch-calc-0{i}.js" for i in range(1, 7)]
    total_slides = 0
    errors = []

    print(f"🔍 檢查目錄: {deck_dir}")

    for fname in ch_files:
        fpath = os.path.join(deck_dir, fname)
        if not os.path.exists(fpath):
            errors.append(f"找不到檔案: {fpath}")
            continue

        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        start = content.find("DECK.push(")
        if start == -1:
            errors.append(f"{fname}: 無法定位 DECK.push() 區塊")
            continue
        json_start = start + 10
        # 尋找與 DECK.push 對應的結束括號
        end = content.rfind("});")
        if end == -1:
            errors.append(f"{fname}: 無法定位 JSON 結束括號")
            continue
        json_str = content[json_start:end + 1].strip()
        try:
            deck_data = json.loads(json_str)
        except Exception as e:
            errors.append(f"{fname}: JSON 解析錯誤: {e}")
            continue

        slides = deck_data.get("slides", [])
        ch_title = deck_data.get("title", "")
        ch_color = deck_data.get("color", "")
        print(f"  📄 {fname}: {len(slides)} 題 | {ch_title} ({ch_color})")

        for idx, s in enumerate(slides):
            prefix = f"{fname} Slide #{idx+1} ({s.get('qNum', '無題號')})"
            # 必備欄位檢驗
            for field in ["year", "paper", "qNum", "topic", "q", "knowledge", "solution"]:
                if field not in s:
                    errors.append(f"{prefix}: 缺少必要欄位 '{field}'")

            kn = s.get("knowledge", {})
            if "formulas" not in kn or not isinstance(kn["formulas"], list):
                errors.append(f"{prefix}: knowledge.formulas 必須是列表")
            if "points" not in kn or not isinstance(kn["points"], list):
                errors.append(f"{prefix}: knowledge.points 必須是列表")

            sol = s.get("solution", {})
            for sfield in ["thinking", "steps", "ans"]:
                if sfield not in sol:
                    errors.append(f"{prefix}: solution 缺少必要欄位 '{sfield}'")

            # 檢驗 LaTeX 成對符號
            q_text = s.get("q", "")
            if q_text.count("$") % 2 != 0:
                errors.append(f"{prefix}: 題幹 LaTeX '$' 符號未成對")

            total_slides += 1

    if errors:
        print(f"\n❌ 發現 {len(errors)} 個問題：")
        for err in errors:
            print("  - " + err)
        return False
    else:
        print(f"\n✅ 全部 6 個微積分專題、共 {total_slides} 個教學卡片校驗 100% 通過！零錯誤！")
        return True

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "demo"
    success = verify_deck(target)
    sys.exit(0 if success else 1)
