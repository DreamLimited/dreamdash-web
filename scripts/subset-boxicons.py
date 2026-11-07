#!/usr/bin/env python3
"""Regenerate the subset Boxicons woff2 that the pages actually load.

assets/fonts/boxicons.woff2 holds only the glyphs the site uses (found by scanning every
*.html and assets/js/main.js for bx* classes). The full font stays in the repo as
boxicons.ttf (and the legacy .woff/.eot/.svg), which modern browsers never load, and is
the source this script subsets from.

Run it whenever a page starts using a new icon:

    pip install fonttools brotli
    python3 scripts/subset-boxicons.py
"""
import glob
import os
import re
import sys

from fontTools import subset

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(path):
    with open(os.path.join(ROOT, path), encoding="utf-8", errors="ignore") as fh:
        return fh.read()


def main():
    css = read("assets/css/boxicons.min.css")
    table = {}
    for m in re.finditer(r"((?:\.bx[a-z]*-[a-z0-9-]+(?::before)?,?)+)\{content:\"\\([0-9a-fA-F]+)\"\}", css):
        for name in re.findall(r"\.(bx[a-z]*-[a-z0-9-]+)", m.group(1)):
            table[name] = int(m.group(2), 16)
    used = set()
    pages = [os.path.relpath(p, ROOT) for p in glob.glob(os.path.join(ROOT, "*.html"))]
    for page in pages + ["assets/js/main.js"]:
        for m in re.finditer(r"class\s*=\s*[\"']([^\"']*)[\"']", read(page)):
            used.update(c for c in m.group(1).split() if re.match(r"bx[a-z]*-", c))
        used.update(re.findall(r"\b(bx[a-z]*-[a-z0-9-]+)\b", read(page)) if page.endswith(".js") else [])
    points = set()
    unresolved = []
    for name in sorted(used):
        if name in table:
            points.add(table[name])
        elif name not in {"bx-rotate-90", "bx-rotate-180", "bx-rotate-270", "bx-flip-horizontal", "bx-flip-vertical"}:
            unresolved.append(name)
    if unresolved:
        sys.exit("unresolved icon classes: " + ", ".join(unresolved))
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["*"]
    opts.hinting = False
    opts.notdef_outline = True
    src = os.path.join(ROOT, "assets/fonts/boxicons.ttf")
    dst = os.path.join(ROOT, "assets/fonts/boxicons.woff2")
    font = subset.load_font(src, opts)
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=sorted(points))
    sub.subset(font)
    subset.save_font(font, dst, opts)
    print("boxicons: %d icons, %d glyphs, %d bytes" % (len(points), len(font.getGlyphOrder()), os.path.getsize(dst)))


if __name__ == "__main__":
    main()
