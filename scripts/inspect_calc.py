import json
import os

json_path = r'C:/Users/CDSJ5/.gemini/antigravity/brain/9c5a05bb-0c99-46a9-8c65-859f603dea81/scratch/calculus/raw_blocks.json'
with open(json_path, 'r', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Total pages: {len(pages)}")
for p in pages:
    page_num = p['page']
    blocks = p['blocks']
    full_text = "\n".join([b['text'] for b in blocks if 'text' in b])
    print(f"=== Page {page_num} ({len(blocks)} blocks, {len(full_text)} chars) ===")
    lines = [line.strip() for line in full_text.split('\n') if line.strip()]
    for i, line in enumerate(lines[:10]):
        print(f"  [{i}] {line}")
    print(f"  ... ({len(lines)} total non-empty lines)")
