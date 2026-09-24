# -*- coding: utf-8 -*-
"""
《高三理組數學思維本(2026) · 空間向量篇》Master Builder
1. 整合全書 5 大專題 (75 題卡)
2. 利用 latex2mathml + MML2OMML.XSL 全量生成原生微軟 Word OMML XML
3. 生成 JS 數據庫 (demo/ 與 assets/)
4. 生成 Word 原生 OMML 對照手冊 (.docx)
5. 生成 OMML 彙編 (.xml)
6. 創建 vectors.html 並打通多頁傳送門
"""

import os
import sys
import json
import re
import docx
import lxml.etree
import latex2mathml.converter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import data_vec_01
import data_vec_02
import data_vec_03
import data_vec_04
import data_vec_05

# Setup MML2OMML transformer
XSLT_PATH = r'C:\Program Files\Microsoft Office\root\Office16\MML2OMML.XSL'
xslt_doc = lxml.etree.parse(XSLT_PATH)
transform = lxml.etree.XSLT(xslt_doc)

def latex_to_omml(tex_code):
    try:
        clean = tex_code.strip()
        # Remove markdown bold/italics
        clean = clean.replace('**', '').replace('*', '')
        # Handle cases with multiple sub-answers like (a)... (b)...
        # Extract latex math or convert directly
        mml = latex2mathml.converter.convert(clean)
        mml_dom = lxml.etree.fromstring(mml)
        omml_dom = transform(mml_dom)
        s = lxml.etree.tostring(omml_dom, encoding='unicode')
        
        # Strip outer oMathPara if present
        if '<m:oMathPara' in s:
            root = lxml.etree.fromstring(s)
            om = root.find('.//{http://schemas.openxmlformats.org/officeDocument/2006/math}oMath')
            if om is not None:
                s = lxml.etree.tostring(om, encoding='unicode')
        return s.strip()
    except Exception as e:
        # Fallback to plain text in OMML
        clean_text = tex_code.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        return f'<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"><m:r><m:t>{clean_text}</m:t></m:r></m:oMath>'

CHAPTERS = [
    (data_vec_01.CHAPTER_DATA, 'ch-vec-01.js'),
    (data_vec_02.CHAPTER_DATA, 'ch-vec-02.js'),
    (data_vec_03.CHAPTER_DATA, 'ch-vec-03.js'),
    (data_vec_04.CHAPTER_DATA, 'ch-vec-04.js'),
    (data_vec_05.CHAPTER_DATA, 'ch-vec-05.js')
]

print("=== 開始注入 OMML 方程式與建構資料庫 ===")

all_xml_items = []
doc_guide = docx.Document()
doc_guide.add_heading('高三理組數學思維本(2026) · 空間向量篇 參考答案 OMML 對照手冊', level=0)
doc_guide.add_paragraph('本手冊由微軟官方 OMML (Office Math Markup Language) 引擎自動編譯生成，內含 5 大專題共 75 道試題之標準參考答案原生方程式。可直接在 Word 中編輯、排版與複製。')

total_cards = 0
for ch_data, filename in CHAPTERS:
    ch_title = ch_data.get('title', ch_data.get('ch', ''))
    slides = ch_data.get('slides', [])
    print(f"\n處理 {ch_title}，題數: {len(slides)}")
    
    doc_guide.add_heading(ch_title, level=1)
    
    for idx, slide in enumerate(slides):
        total_cards += 1
        sol = slide.setdefault('solution', {})
        ans = sol.get('ans', '')
        
        # 生成 OMML
        omml = latex_to_omml(ans)
        sol['omml'] = omml
        
        q_num = slide.get('qNum', f'第{idx+1}題')
        topic = slide.get('topic', '')
        
        all_xml_items.append(f"""  <problem id="{total_cards}" chapter="{ch_title}" qNum="{q_num}" topic="{topic}">
    <latex>{ans}</latex>
    {omml}
  </problem>""")
        
        # 加入 Word 手冊
        p = doc_guide.add_paragraph()
        p.add_run(f"{q_num} · {topic}").bold = True
        
        p_ans = doc_guide.add_paragraph()
        p_ans.add_run("【參考答案】: ")
        try:
            omml_elem = lxml.etree.fromstring(omml)
            p_ans._p.append(omml_elem)
        except Exception:
            p_ans.add_run(ans)
            
    raw_json = json.dumps(ch_data, ensure_ascii=False, indent=2)
    # Convert image property to visual function
    raw_json = re.sub(
        r'"image":\s*"(img/vec_q\d+\.png)"',
        lambda m: f'"visual": function(host) {{ host.innerHTML = \'<div style="text-align:center;padding:12px;"><img src="{m.group(1)}" style="max-height:280px;max-width:100%;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.3);background:#fff;padding:8px;" alt="幾何圖解"></div>\'; }}',
        raw_json
    )
    
    js_content = f"/* 2026 高三理組數學思維本 · 空間向量篇 — {ch_title} - 支援原生 OMML */\n(function() {{\n  const DECK = window.DECK = window.DECK || [];\n  DECK.push({raw_json});\n}})();\n"
    
    # 注入 visual 函數（若是題目中有幾何配圖）
    # 在 JSON 序列化後，將占位符或特定題目的 visual 重建
    for target_dir in ['demo', 'assets']:
        out_js = os.path.join(target_dir, filename)
        with open(out_js, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"  [OK] 已寫入 {out_js}")

print(f"\n總題卡數: {total_cards}")

# 儲存 Word 手冊
docx_name = "高三理組數學思維本_空間向量_參考答案_OMML對照手冊.docx"
for p in ['demo', 'assets', r'G:\我的雲端硬碟\12_數學教材轉化']:
    target = os.path.join(p, docx_name)
    doc_guide.save(target)
    print(f"[OK] 已儲存 Word 手冊: {target}")

# 儲存 XML 彙編
xml_name = "高三理組數學思維本_空間向量_參考答案_OMML彙編.xml"
full_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<ommlCompilation title="高三理組數學思維本(2026) · 空間向量篇 參考答案 OMML 彙編" total="{total_cards}" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math">
{chr(10).join(all_xml_items)}
</ommlCompilation>"""

for p in ['demo', 'assets', r'G:\我的雲端硬碟\12_數學教材轉化']:
    target = os.path.join(p, xml_name)
    with open(target, 'w', encoding='utf-8') as f:
        f.write(full_xml)
    print(f"[OK] 已儲存 XML 彙編: {target}")

print("\n=== 全部 OMML 檔案編譯完成 ===")
