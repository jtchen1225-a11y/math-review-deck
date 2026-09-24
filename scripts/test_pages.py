# -*- coding: utf-8 -*-
import os
import re

def check_html(path):
    print(f"Checking {path}...")
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    # Find all <script src="...">
    scripts = re.findall(r'<script\s+src="([^"]+)"', html)
    base = os.path.dirname(path)
    all_ok = True
    for s in scripts:
        if s.startswith("http"):
            continue
        clean_s = s.split("?")[0]
        local_path = os.path.join(base, clean_s)
        if not os.path.exists(local_path):
            print(f"  ❌ Missing script: {clean_s} (at {local_path})")
            all_ok = False
        else:
            print(f"  ✅ Script found: {clean_s} ({os.path.getsize(local_path)} bytes)")

    # Find all <link rel="stylesheet" href="...">
    css_files = re.findall(r'<link\s+[^>]*href="([^"]+)"', html)
    for c in css_files:
        clean_c = c.split("?")[0]
        local_path = os.path.join(base, clean_c)
        if not os.path.exists(local_path):
            print(f"  ❌ Missing CSS: {clean_c}")
            all_ok = False
        else:
            print(f"  ✅ CSS found: {clean_c} ({os.path.getsize(local_path)} bytes)")

    return all_ok

ok1 = check_html("demo/index.html")
ok2 = check_html("demo/calculus.html")
ok3 = check_html("demo/omml.html")

if ok1 and ok2 and ok3:
    print("\n🎉 All HTML dependencies verified successfully!")
else:
    print("\n❌ Errors found in HTML dependencies!")
    exit(1)
