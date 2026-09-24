# -*- coding: utf-8 -*-
"""
scripts/deploy_omml_system.py
全面升級微積分思維本網頁版：
1. 覆查並修復全部 6 大專題、94 張卡片的參考答案 LaTeX 數學定界符 ($) 與選項
2. 批量生成全部 94 題的微軟 Word 原生 OMML (Office Math Markup Language) 數學方程式
3. 注入 omml 至各章節 JS 資料中 (demo/ch-calc-*.js 與 assets/ch-calc-*.js)
4. 在 engine.js 參考答案徽章處增加「📋 複製 Word OMML」一鍵複製功能
5. 建立全功能 OMML 方程式在線瀏覽與檢索中心 (demo/omml.html 與 assets/omml.html)
6. 複製 .docx 與 .xml 檔案至 demo/ 與 assets/，提供網頁一鍵下載
7. 在 calculus.html 與 index.html 頂部加入 OMML 入口導航
"""

import os
import re
import json
import shutil
from latex2mathml.converter import convert as latex2mathml_convert
from lxml import etree

BASE_DIR = r"g:\我的雲端硬碟\12_數學教材轉化\tools\math-review-deck"
DEMO_DIR = os.path.join(BASE_DIR, "demo")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
SCRIPTS_DIR = os.path.join(BASE_DIR, "scripts")

XSL_PATH = r"C:\Program Files\Microsoft Office\root\Office16\MML2OMML.XSL"
xslt = etree.parse(XSL_PATH)
transform = etree.XSLT(xslt)

def refine_ans(ans_str):
    """確保答案字串中的數學公式包裹於 $...$ 中"""
    if not ans_str:
        return ""
    if ans_str in ['A', 'B', 'C', 'D']:
        return ans_str
    
    special_cases = {
        '極大值 f(-1) = -4，極小值 f(1) = 4；(2) 無內部極值（在 x=-2 處有端點最小值 -1）；(3) 無極值': '極大值 $f(-1) = -4$，極小值 $f(1) = 4$；(2) 無內部極值（在 $x=-2$ 處有端點最小值 $-1$）；(3) 無極值',
        '無極值，拐點 (0, 0)，漸近線 x = ±1, y = 0；(2) 極大值點 (1, -6)，極小值點 (3, -10)，拐點 (2, -8)': '無極值，拐點 $(0, 0)$，漸近線 $x = \\pm 1, y = 0$；(2) 極大值點 $(1, -6)$，極小值點 $(3, -10)$，拐點 $(2, -8)$',
        '(b) A(s) = 24s - 2s^3；(c) 最大可能面積為 32': '(b) $A(s) = 24s - 2s^3$；(c) 最大可能面積為 $32$',
        '(a) h = \\frac{500}{x^2}；(b) S = x^2 + \\frac{2000}{x}；(c) 底邊長 10 cm，高 5 cm': '(a) $h = \\frac{500}{x^2}$；(b) $S = x^2 + \\frac{2000}{x}$；(c) 底邊長 $10\\text{ cm}$，高 $5\\text{ cm}$',
        '(1) 5 m/s^2；(2) 85 m': '(1) $5\\text{ m/s}^2$；(2) $85\\text{ m}$',
        '1.5 \\text{ J}': '$1.5\\text{ J}$',
        '144 \\text{ cm}^3': '$144\\text{ cm}^3$',
        '(a) 容積為 648\\pi；(b) 材料體積為 162\\pi': '(a) 容積為 $648\\pi$；(b) 材料體積為 $162\\pi$',
        '128\\pi': '$128\\pi$',
        '\\frac{232\\pi}{15}': '$\\frac{232\\pi}{15}$',
        '\\frac{16}{3}': '$\\frac{16}{3}$',
        '(a) f(x) = 3x^2 + 2x + 2, \\quad g(x) = 6x^2 - 2x - 1；(b) a = -8, \\quad b = -4': '(a) $f(x) = 3x^2 + 2x + 2, \\quad g(x) = 6x^2 - 2x - 1$；(b) $a = -8, \\quad b = -4$',
        '(a) A(k) = -\\frac{1}{6}k^4 + k^2 + \\frac{1}{2}；(b) 最大值為 \\frac{4}{3} (當 k = ±1 時)，最小值為 \\frac{1}{2} (當 k = 0 時)': '(a) $A(k) = -\\frac{1}{6}k^4 + k^2 + \\frac{1}{2}$；(b) 最大值為 $\\frac{4}{3}$ (當 $k = \\pm 1$ 時)，最小值為 $\\frac{1}{2}$ (當 $k = 0$ 時)',
        '\\text{最大值為 } 11 \\quad (\\text{在 } x = 3 \\text{ 處取得})': '最大值為 $11$ (在 $x = 3$ 處取得)',
        'x + y = 0 \\quad \\text{或} \\quad x + 25y = 0': '$x + y = 0$ 或 $x + 25y = 0$',
        'a = \\frac{1}{3}, \\quad b = -\\frac{1}{2}；\\text{極大值點 } \\left(-\\frac{1}{3}, \\frac{5}{27}\\right), \\text{極小值點 } (1, -1)': '$a = \\frac{1}{3}, \\quad b = -\\frac{1}{2}$；極大值點 $\\left(-\\frac{1}{3}, \\frac{5}{27}\\right)$，極小值點 $(1, -1)$',
        '(1) v = s\', a = v\' = s\'\'；(2) v(t) = v_0 + at, a(t) = a；(3) a(t) = -\\omega^2 s(t)': '(1) $v = s\', a = v\' = s\'\'$；(2) $v(t) = v_0 + at, a(t) = a$；(3) $a(t) = -\\omega^2 s(t)$',
    }
    
    if ans_str in special_cases:
        return special_cases[ans_str]
    for k, v in special_cases.items():
        if k in ans_str:
            return ans_str.replace(k, v)

    if '$' in ans_str:
        return ans_str

    if '；' in ans_str:
        items = ans_str.split('；')
        new_items = []
        for it in items:
            it = it.strip()
            m = re.match(r'^(\([0-9a-zA-Z~]+\)\s*)(.*)$', it)
            if m:
                label, formula = m.group(1), m.group(2).strip()
                if formula == '見步驟證明':
                    new_items.append(label + '見步驟證明')
                elif '\\' in formula or re.search(r'[0-9a-zA-Z\^\/\+\-\=]', formula):
                    new_items.append(label + '$' + formula + '$')
                else:
                    new_items.append(it)
            else:
                if '\\' in it or re.search(r'[0-9a-zA-Z\^\/\+\-\=]', it):
                    new_items.append('$' + it + '$')
                else:
                    new_items.append(it)
        return '；'.join(new_items)
    else:
        it = ans_str.strip()
        m = re.match(r'^(\([0-9a-zA-Z~]+\)\s*)(.*)$', it)
        if m:
            label, formula = m.group(1), m.group(2).strip()
            if formula == '見步驟證明':
                return label + '見步驟證明'
            elif '\\' in formula:
                return label + '$' + formula + '$'
        if '\\' in it:
            return '$' + it + '$'
        return ans_str

def latex_to_omml(latex_str):
    """將 LaTeX 公式或答案字串精準轉換為微軟 OMML"""
    c = latex_str.strip()
    # 移除外層 $ 號
    if c.startswith('$') and c.endswith('$'):
        c = c[1:-1].strip()
    c = c.replace(r'\left.', '').replace(r'\right|', '|').replace(r'\quad', ' ')
    c = c.replace(r'\text{見步驟證明}', '見步驟證明').replace(r'\text{或 }', '或 ')
    c = c.replace(r'\text{最大值為 }', '最大值為 ').replace(r'\text{在 }', '在 ').replace(r'\text{ 處取得}', ' 處取得')
    c = c.replace(r'\text{ J}', ' J').replace(r'\text{ cm}^3', ' cm^3').replace(r'\text{ cm}', ' cm')
    c = c.replace(r'\text{極大值點 }', '極大值點 ').replace(r'\text{極小值點 }', '極小值點 ')
    c = c.replace(r'\text{arcsec}', 'arcsec')
    
    if not c or c in ['A', 'B', 'C', 'D']:
        return f'<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"><m:r><m:t>{c}</m:t></m:r></m:oMath>'
    try:
        mml = latex2mathml_convert(c)
        dom = etree.fromstring(mml)
        omml_tree = transform(dom)
        xml_str = etree.tostring(omml_tree, encoding='utf-8').decode('utf-8')
        return xml_str
    except Exception as e:
        # Fallback to plain run
        return f'<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"><m:r><m:t>{c}</m:t></m:r></m:oMath>'

def main():
    print("🚀 開始執行微積分思維本 OMML 系統全面構建與升級...")
    import sys
    sys.path.append(SCRIPTS_DIR)
    import data_calc_01, data_calc_02, data_calc_03, data_calc_04, data_calc_05, data_calc_06

    chapters_raw = [
        {"id": "calc-01", "file": "ch-calc-01.js", "ch": "專題一 導數與微分", "year": "2026", "paper": "專題一", "title": "專題一 導數的定義、常見函數的導數與運算法則", "color": "#2563eb", "sections": ["單選題 1~6 題", "填空題 7~9 題", "基礎求導 10(1~12)", "複合求導 11(1~9)", "高階與隱函數 12~13", "幾何求導與圖像辨析 14~28"], "slides": data_calc_01.get_ch01_slides()},
        {"id": "calc-02", "file": "ch-calc-02.js", "ch": "專題二 導數的應用", "year": "2026", "paper": "專題二", "title": "專題二 導數的應用 — 曲線的切線、單調性、極值、拐點與最優化", "color": "#059669", "sections": ["單選題 1~6 題", "切線方程 7~9 題", "極值與作圖 10~13 題", "最優化工程應用 14~15 題", "垂直切線與傾角 16~17 題", "恆成立與綜合 18~23 題"], "slides": data_calc_02.get_ch02_slides()},
        {"id": "calc-03", "file": "ch-calc-03.js", "ch": "專題三 物理應用", "year": "2026", "paper": "專題三", "title": "專題三 微積分在物理上的應用 — 運動學、變力做功與流量微元", "color": "#d97706", "sections": ["運動學微積分關係梳理", "豎直上拋最高點例題", "v-t 運動圖像分析", "彈簧變力做功定積分", "速度與流量定積分練習 1~4"], "slides": data_calc_03.get_ch03_slides()},
        {"id": "calc-04", "file": "ch-calc-04.js", "ch": "專題四 不定積分", "year": "2026", "paper": "專題四", "title": "專題四 不定積分的定義、運算法則與積分技巧", "color": "#7c3aed", "sections": ["三角降冪遞推公式", "代換求導", "22 道經典不定積分 3(1~22)", "6 道進階不定積分 4(1~6)"], "slides": data_calc_04.get_ch04_slides()},
        {"id": "calc-05", "file": "ch-calc-05.js", "ch": "專題五 定積分與幾何", "year": "2026", "paper": "專題五", "title": "專題五 定積分的運算、幾何面積與旋轉體體積", "color": "#e11d48", "sections": ["面積定積分表達式", "基礎定積分 2(1~4)", "絕對值定積分 3(1~2)", "曲線圍成面積 4(1~8)", "待定係數與切線面積 5~7", "旋轉體體積 8~10", "黎曼和、變上限方程與面積最值 11~13"], "slides": data_calc_05.get_ch05_slides()},
        {"id": "calc-06", "file": "ch-calc-06.js", "ch": "專題六 空間向量", "year": "2026", "paper": "專題六", "title": "專題六 空間向量的概念與運算（進階拓展）", "color": "#0284c7", "sections": ["單選題 1~6 題 (坐標對稱、共面、垂直平行、中點分解、夾角鈍角)"], "slides": data_calc_06.get_ch06_slides()}
    ]

    total_cards = 0
    all_cards_manifest = []

    for chap in chapters_raw:
        for s in chap["slides"]:
            total_cards += 1
            # 1. 修正單選 1 題選項缺失 $
            if s["qNum"] == "單選題 第1題" and "options" in s:
                s["options"] = ["A. $1 - \\cos 1$", "B. $1 + \\cos 1$", "C. $\\cos 1 - 1$", "D. $-1 - \\cos 1$"]

            # 2. 修正參考答案數學式 $ 標記
            orig_ans = s.get("solution", {}).get("ans", "")
            fixed_ans = refine_ans(orig_ans)
            s["solution"]["ans"] = fixed_ans

            # 3. 生成 OMML
            omml_xml = latex_to_omml(fixed_ans)
            s["solution"]["omml"] = omml_xml

            all_cards_manifest.append({
                "chapId": chap["id"],
                "chapTitle": chap["title"],
                "color": chap["color"],
                "qNum": s["qNum"],
                "topic": s.get("topic", ""),
                "score": s.get("score", ""),
                "q": s["q"],
                "ans": fixed_ans,
                "omml": omml_xml
            })

        # 產生 JS 檔案
        payload = {
            "ch": chap["ch"],
            "year": chap["year"],
            "paper": chap["paper"],
            "title": chap["title"],
            "color": chap["color"],
            "sections": chap["sections"],
            "slides": chap["slides"]
        }
        js_content = f"/* 2026 高三理組數學思維本 · 微積分篇 — {chap['ch']} ({len(chap['slides'])} 題) - 支援 OMML */\n"
        js_content += "(function() {\n"
        js_content += "  const DECK = window.DECK = window.DECK || [];\n\n"
        js_content += f"  DECK.push({json.dumps(payload, ensure_ascii=False, indent=2)});\n"
        js_content += "})();\n"

        demo_file = os.path.join(DEMO_DIR, chap["file"])
        assets_file = os.path.join(ASSETS_DIR, chap["file"])
        with open(demo_file, "w", encoding="utf-8") as f:
            f.write(js_content)
        with open(assets_file, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"  📄 已更新章節 JS：{chap['file']} ({len(chap['slides'])} 題，已植入 OMML 與修正定界符)")

    print(f"✅ 成功處理全部 6 大專題，共 {total_cards} 張卡片的 OMML 與答案覆查！")

    # 4. 複製 DOCX 與 XML 交付檔案至 demo/ 和 assets/
    src_docx = os.path.join(r"g:\我的雲端硬碟\12_數學教材轉化", "微積分思維本_參考答案_OMML對照手冊.docx")
    src_xml = os.path.join(r"g:\我的雲端硬碟\12_數學教材轉化", "微積分思維本_參考答案_OMML彙編.xml")
    if os.path.exists(src_docx):
        shutil.copy(src_docx, os.path.join(DEMO_DIR, "微積分思維本_參考答案_OMML對照手冊.docx"))
        shutil.copy(src_docx, os.path.join(ASSETS_DIR, "微積分思維本_參考答案_OMML對照手冊.docx"))
        print("  📦 已同步 DOCX 對照手冊至 demo/ 及 assets/")
    if os.path.exists(src_xml):
        shutil.copy(src_xml, os.path.join(DEMO_DIR, "微積分思維本_參考答案_OMML彙編.xml"))
        shutil.copy(src_xml, os.path.join(ASSETS_DIR, "微積分思維本_參考答案_OMML彙編.xml"))
        print("  📦 已同步 XML 彙編檔案至 demo/ 及 assets/")

    # 5. 生成 demo/omml.html (全功能 OMML 方程式在線瀏覽與檢索庫)
    generate_omml_portal_html(all_cards_manifest)

    # 6. 更新 engine.js (加入 📋 複製 Word OMML 按鈕與邏輯)
    update_engine_js()

    # 7. 更新 style.css (加入 OMML 按鈕樣式)
    update_style_css()

    # 8. 更新 calculus.html 與 index.html 導航按鈕
    update_html_navigation()

    print("🎉 OMML 系統構建完成！全部檔案已就緒。")

def generate_omml_portal_html(cards):
    """產生獨立的美觀 OMML 方程式庫在線檢索入口頁面"""
    cards_json = json.dumps(cards, ensure_ascii=False)
    html_content = f"""<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>微積分思維本 (2026) · OMML 數學方程式庫</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <style>
    body {{
      background: #f8fafc;
      color: #1e293b;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      margin: 0;
      padding: 0;
    }}
    .omml-header {{
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      position: sticky;
      top: 0;
      z-index: 50;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }}
    .omml-header-inner {{
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }}
    .omml-title {{
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e3a8a;
      display: flex;
      align-items: center;
      gap: 8px;
    }}
    .omml-nav-links {{
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }}
    .nav-btn {{
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }}
    .nav-btn-primary {{
      background: #2563eb;
      color: #fff;
    }}
    .nav-btn-primary:hover {{
      background: #1d4ed8;
    }}
    .nav-btn-secondary {{
      background: #f1f5f9;
      color: #475569;
      border: 1px solid #cbd5e1;
    }}
    .nav-btn-secondary:hover {{
      background: #e2e8f0;
      color: #1e293b;
    }}
    .nav-btn-download {{
      background: #059669;
      color: #fff;
    }}
    .nav-btn-download:hover {{
      background: #047857;
    }}
    .omml-container {{
      max-width: 1200px;
      margin: 24px auto;
      padding: 0 24px 60px;
    }}
    .filter-bar {{
      background: #fff;
      padding: 16px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
    }}
    .filter-btn-group {{
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }}
    .filter-btn {{
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      color: #64748b;
      cursor: pointer;
      transition: all 0.15s;
    }}
    .filter-btn.active {{
      background: #2563eb;
      color: #fff;
      border-color: #2563eb;
    }}
    .search-input {{
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      font-size: 13px;
      width: 220px;
    }}
    .cards-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
      gap: 16px;
    }}
    @media (max-width: 640px) {{
      .cards-grid {{
        grid-template-columns: 1fr;
      }}
    }}
    .omml-card {{
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 18px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }}
    .omml-card:hover {{
      border-color: #93c5fd;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
    }}
    .card-top {{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }}
    .badge-q {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
    }}
    .card-topic {{
      font-size: 12px;
      color: #64748b;
      margin-top: 2px;
    }}
    .card-q {{
      font-size: 14px;
      color: #334155;
      line-height: 1.5;
    }}
    .card-ans-box {{
      background: #f8fafc;
      border-left: 3px solid #10b981;
      padding: 10px 12px;
      border-radius: 0 6px 6px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }}
    .card-ans-math {{
      font-size: 15px;
      color: #0f172a;
      overflow-x: auto;
    }}
    .btn-copy-omml {{
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }}
    .btn-copy-omml:hover {{
      background: #2563eb;
      color: #fff;
    }}
    .btn-copy-omml.copied {{
      background: #10b981;
      color: #fff;
      border-color: #10b981;
    }}
    .code-toggle {{
      font-size: 11px;
      color: #64748b;
      cursor: pointer;
      text-decoration: underline;
      align-self: flex-start;
    }}
    .code-box {{
      display: none;
      background: #0f172a;
      color: #e2e8f0;
      padding: 10px;
      border-radius: 6px;
      font-size: 11px;
      font-family: Consolas, Monaco, monospace;
      overflow-x: auto;
      max-height: 150px;
    }}
    .toast {{
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #10b981;
      color: #fff;
      padding: 10px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.25s;
      z-index: 100;
    }}
    .toast.show {{
      opacity: 1;
      transform: translateY(0);
    }}
  </style>
</head>
<body>
  <header class="omml-header">
    <div class="omml-header-inner">
      <div class="omml-title">
        <span>📑</span> 高三理組《微積分思維本》OMML 數學方程式庫
      </div>
      <div class="omml-nav-links">
        <a href="calculus.html" class="nav-btn nav-btn-primary">📐 微積分簡報</a>
        <a href="index.html" class="nav-btn nav-btn-secondary">🏛️ 四校聯考</a>
        <a href="微積分思維本_參考答案_OMML對照手冊.docx" class="nav-btn nav-btn-download" download>📥 下載 Word 手冊 (.docx)</a>
        <a href="微積分思維本_參考答案_OMML彙編.xml" class="nav-btn nav-btn-secondary" download>📥 下載 XML 彙編</a>
      </div>
    </div>
  </header>

  <main class="omml-container">
    <div class="filter-bar">
      <div class="filter-btn-group" id="filterGroup">
        <button class="filter-btn active" data-filter="all">全部 (94 題)</button>
        <button class="filter-btn" data-filter="calc-01">Ch 1 導數基礎 (33)</button>
        <button class="filter-btn" data-filter="calc-02">Ch 2 導數應用 (23)</button>
        <button class="filter-btn" data-filter="calc-03">Ch 3 物理應用 (8)</button>
        <button class="filter-btn" data-filter="calc-04">Ch 4 不定積分 (10)</button>
        <button class="filter-btn" data-filter="calc-05">Ch 5 定積分面積 (14)</button>
        <button class="filter-btn" data-filter="calc-06">Ch 6 空間向量 (6)</button>
      </div>
      <input type="text" id="searchInput" class="search-input" placeholder="🔍 搜尋題號或關鍵詞...">
    </div>

    <div class="cards-grid" id="cardsGrid"></div>
  </main>

  <div class="toast" id="toast">✓ 已成功複製微軟 Word 原生 OMML 方程式！</div>

  <script>
    const CARDS = {cards_json};
    let currentFilter = 'all';
    let searchQuery = '';

    function renderCards() {{
      const grid = document.getElementById('cardsGrid');
      const filtered = CARDS.filter(c => {{
        const matchChap = (currentFilter === 'all') || (c.chapId === currentFilter);
        const matchSearch = !searchQuery || 
          c.qNum.includes(searchQuery) || 
          c.topic.includes(searchQuery) || 
          c.q.includes(searchQuery) || 
          c.ans.includes(searchQuery);
        return matchChap && matchSearch;
      }});

      if (filtered.length === 0) {{
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">查無相符的試題方程式</div>';
        return;
      }}

      grid.innerHTML = filtered.map((c, i) => `
        <div class="omml-card" data-chap="${{c.chapId}}">
          <div class="card-top">
            <div>
              <span class="badge-q" style="background:${{c.color}}">${{c.qNum}}</span>
              <div class="card-topic">${{c.chapTitle.split(' ')[0]}} · ${{c.topic}}</div>
            </div>
            ${{c.score ? `<span style="font-size:11px;color:#94a3b8;">${{c.score}}</span>` : ''}}
          </div>
          <div class="card-q">${{c.q}}</div>
          <div class="card-ans-box">
            <div class="card-ans-math">${{c.ans}}</div>
            <button class="btn-copy-omml" onclick="copyCardOMML(this, ${{i}})">📋 複製 OMML</button>
          </div>
          <div class="code-toggle" onclick="toggleCode(this)">展開/收合 OMML XML 代碼</div>
          <pre class="code-box"><code>${{escapeHtml(c.omml)}}</code></pre>
        </div>
      `).join('');

      if (window.MathJax && window.MathJax.typesetPromise) {{
        MathJax.typesetPromise([grid]);
      }}
    }}

    function toggleCode(btn) {{
      const codeBox = btn.nextElementSibling;
      const isBlock = codeBox.style.display === 'block';
      codeBox.style.display = isBlock ? 'none' : 'block';
      btn.textContent = isBlock ? '展開/收合 OMML XML 代碼' : '收合 OMML XML 代碼';
    }}

    function copyCardOMML(btn, idx) {{
      const card = CARDS[idx];
      if (!card || !card.omml) return;
      
      navigator.clipboard.writeText(card.omml).then(() => {{
        showCopied(btn);
      }}).catch(() => {{
        const ta = document.createElement('textarea');
        ta.value = card.omml;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showCopied(btn);
      }});
    }}

    function showCopied(btn) {{
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ 已複製！';
      btn.classList.add('copied');
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => {{
        btn.innerHTML = orig;
        btn.classList.remove('copied');
        toast.classList.remove('show');
      }}, 2000);
    }}

    function escapeHtml(str) {{
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }}

    document.getElementById('filterGroup').addEventListener('click', (e) => {{
      if (e.target.classList.contains('filter-btn')) {{
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        renderCards();
      }}
    }});

    document.getElementById('searchInput').addEventListener('input', (e) => {{
      searchQuery = e.target.value.trim();
      renderCards();
    }});

    window.addEventListener('DOMContentLoaded', () => {{
      renderCards();
    }});
  </script>
</body>
</html>
"""
    demo_omml = os.path.join(DEMO_DIR, "omml.html")
    assets_omml = os.path.join(ASSETS_DIR, "omml.html")
    with open(demo_omml, "w", encoding="utf-8") as f:
        f.write(html_content)
    with open(assets_omml, "w", encoding="utf-8") as f:
        f.write(html_content)
    print("  🌐 已生成全功能 OMML 方程式在線瀏覽庫：demo/omml.html 及 assets/omml.html")

def update_engine_js():
    """在 engine.js 的解答卡片加入 📋 複製 Word OMML 按鈕"""
    engine_path = os.path.join(DEMO_DIR, "engine.js")
    with open(engine_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. 替換 jae-ans-row 中的按鈕
    old_ans_block = """            ${s.solution && s.solution.ans ? `
              <div class="jae-ans-row">
                <span class="jae-ans-badge">參考答案</span>
                <span class="jae-ans-value">${s.solution.ans}</span>
              </div>
            ` : ''}"""

    new_ans_block = """            ${s.solution && s.solution.ans ? `
              <div class="jae-ans-row">
                <span class="jae-ans-badge">參考答案</span>
                <span class="jae-ans-value">${s.solution.ans}</span>
                ${s.solution.omml ? `
                  <button class="jae-copy-omml-btn" onclick="window.copyCurrentOMML(this, ${globalIdx})" title="複製微軟 Word 原生 OMML 數學方程式代碼">
                    📋 複製 Word OMML
                  </button>
                ` : ''}
              </div>
            ` : ''}"""

    if old_ans_block in content:
        content = content.replace(old_ans_block, new_ans_block)
        print("  ⚡ 已在 engine.js 注入 jae-ans-row OMML 複製按鈕")

    # 2. 替換 zoom-ans 中的按鈕
    old_zoom_block = """${s.solution && s.solution.ans ? `<div class="zoom-ans">參考答案：${s.solution.ans}</div>` : ''}"""
    new_zoom_block = """${s.solution && s.solution.ans ? `
          <div class="zoom-ans" style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span>參考答案：${s.solution.ans}</span>
            ${s.solution.omml ? `<button class="jae-copy-omml-btn" onclick="window.copyCurrentOMML(this, ${globalIdx})" title="複製微軟 Word 原生 OMML 數學方程式代碼">📋 複製 Word OMML</button>` : ''}
          </div>
        ` : ''}"""

    if old_zoom_block in content:
        content = content.replace(old_zoom_block, new_zoom_block)
        print("  ⚡ 已在 engine.js 注入 zoom-ans OMML 複製按鈕")

    # 3. 注入 window.copyCurrentOMML 全域函數
    if "window.copyCurrentOMML" not in content:
        copy_fn = """
  window.copyCurrentOMML = function(btn, idx) {
    const s = currentSlides[idx];
    if (!s || !s.solution || !s.solution.omml) return;
    navigator.clipboard.writeText(s.solution.omml).then(() => {
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ 已複製 Word OMML！';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = s.solution.omml;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ 已複製 Word OMML！';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 2000);
    });
  };
"""
        # 加在 IIFE 結尾前
        last_paren = content.rfind("})();")
        if last_paren != -1:
            content = content[:last_paren] + copy_fn + "\n" + content[last_paren:]
            print("  ⚡ 已在 engine.js 註冊 window.copyCurrentOMML 函數")

    with open(engine_path, "w", encoding="utf-8") as f:
        f.write(content)
    with open(os.path.join(ASSETS_DIR, "engine.js"), "w", encoding="utf-8") as f:
        f.write(content)

def update_style_css():
    """在 style.css 中加入 OMML 按鈕樣式"""
    css_path = os.path.join(DEMO_DIR, "style.css")
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()

    omml_css = """
/* ===== OMML 複製按鈕專用樣式 ===== */
.jae-copy-omml-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  padding: 3px 8px;
  font-size: 11.5px;
  font-weight: 600;
  color: #1e40af;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  vertical-align: middle;
  white-space: nowrap;
}
.jae-copy-omml-btn:hover {
  background: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
}
.jae-copy-omml-btn.copied {
  background: #10b981 !important;
  color: #ffffff !important;
  border-color: #10b981 !important;
}
"""
    if ".jae-copy-omml-btn" not in css:
        css += omml_css
        with open(css_path, "w", encoding="utf-8") as f:
            f.write(css)
        with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
            f.write(css)
        print("  🎨 已在 style.css 補充 OMML 按鈕樣式")

def update_html_navigation():
    """在 calculus.html 與 index.html 頂部加入 OMML 入口按鈕"""
    for fname in ["calculus.html", "index.html"]:
        fpath = os.path.join(DEMO_DIR, fname)
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            html = f.read()

        # 在封面按鈕區增加 OMML 庫
        omml_btn_html = '<a href="omml.html" class="portal-btn" style="background:#7c3aed;color:#fff;text-decoration:none;display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:6px;font-size:13px;font-weight:600;margin-left:8px;" title="查看與複製全書 OMML 數學方程式">📑 OMML 方程式庫</a>'
        
        if "omml.html" not in html and 'class="portal-btn"' in html:
            # 插入在第一個 portal-btn 後面
            idx = html.find('</a>', html.find('class="portal-btn"'))
            if idx != -1:
                html = html[:idx+4] + "\n        " + omml_btn_html + html[idx+4:]
                with open(fpath, "w", encoding="utf-8") as out_f:
                    out_f.write(html)
                with open(os.path.join(ASSETS_DIR, fname), "w", encoding="utf-8") as out_f:
                    out_f.write(html)
                print(f"  🔗 已在 {fname} 頂部加入 OMML 入口導航按鈕")

if __name__ == "__main__":
    main()
