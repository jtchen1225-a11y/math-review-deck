import json

with open(r'C:/Users/CDSJ5/.gemini/antigravity/brain/9c5a05bb-0c99-46a9-8c65-859f603dea81/scratch/calculus/raw_blocks.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

p6 = [p for p in pages if p['page'] == 6][0]
print(f"Page 6 has {len(p6['blocks'])} blocks")
# Let's print blocks with their bbox (y0, x0, y1, x1) sorted by y0 then x0
sorted_blocks = sorted(p6['blocks'], key=lambda b: (round(b['bbox'][1] / 15) * 15, b['bbox'][0]))
for i, b in enumerate(sorted_blocks):
    txt = b.get('text', '').strip().replace('\n', ' ')
    if txt:
        print(f"[{i:02d}] y={b['bbox'][1]:.1f}, x={b['bbox'][0]:.1f}: {txt}")
