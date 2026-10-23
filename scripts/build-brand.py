#!/usr/bin/env python3
"""Genera brand/ con el logo oficial en SVG, PNG (1x, 2x, 4x, 8x) y PDF vectorial.

  python3 scripts/build-brand.py

Fuente única: skill/alkosto-ui-kit/assets/logo-alkosto.svg
Requiere Playwright para Python con Chromium (pip install playwright && playwright install chromium).
"""
import re
import shutil
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "skill" / "alkosto-ui-kit" / "assets" / "logo-alkosto.svg"
OUT = ROOT / "brand"
W, H = 192, 80
SCALES = {"": 1, "@2x": 2, "@4x": 4, "@8x": 8}


def main():
    OUT.mkdir(exist_ok=True)
    shutil.copyfile(SRC, OUT / "logo-alkosto.svg")
    svg = SRC.read_text(encoding="utf-8")
    html = (f'<!doctype html><html><head><style>@page{{size:{W}px {H}px;margin:0}}'
            f'html,body{{margin:0;background:transparent}}svg{{display:block;width:{W}px;height:{H}px}}'
            f'</style></head><body>{svg}</body></html>')
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for suffix, scale in SCALES.items():
            page = browser.new_page(viewport={"width": W, "height": H}, device_scale_factor=scale)
            page.set_content(html)
            page.locator("svg").screenshot(path=str(OUT / f"logo-alkosto{suffix}.png"), omit_background=True)
            page.close()
        # Chromium rasteriza <mask> en PDF; el mask y el clip del logo no recortan nada
        # (todo el dibujo queda dentro), así que se quitan para que el PDF sea 100% vectorial.
        vector_svg = re.sub(r'\s(mask|clip-path)="url\(#[^)]+\)"', "", svg)
        page = browser.new_page(viewport={"width": W, "height": H})
        page.set_content(html.replace(svg, vector_svg))
        page.pdf(path=str(OUT / "logo-alkosto.pdf"), width=f"{W}px", height=f"{H}px",
                 print_background=True, prefer_css_page_size=True)
        browser.close()
    for f in sorted(OUT.glob("logo-alkosto*")):
        print(f"[brand] {f.relative_to(ROOT)} ({f.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()
