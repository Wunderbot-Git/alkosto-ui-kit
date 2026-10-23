#!/usr/bin/env python3
"""Exporta un deck HTML de Alkosto a PDF: una página 1920×1080 (16:9) por slide.

Uso:
  python3 scripts/export_pdf.py deck.html deck.pdf

Intenta, en orden: Playwright (Python) → Chrome/Chromium headless.
Si no hay ninguno, termina con código 2 y explica la alternativa manual.
"""
import shutil
import subprocess
import sys
from pathlib import Path


def with_playwright(src: Path, out: Path) -> bool:
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        return False
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page(viewport={"width": 1920, "height": 1080})
            page.goto(src.as_uri(), wait_until="networkidle")
            page.emulate_media(media="print")
            page.pdf(path=str(out), width="1920px", height="1080px",
                     print_background=True, margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
                     prefer_css_page_size=True)
            browser.close()
        return True
    except Exception as e:  # navegador no instalado, etc.
        print(f"[playwright] {e}", file=sys.stderr)
        return False


def with_chrome(src: Path, out: Path) -> bool:
    for name in ("google-chrome", "chromium", "chromium-browser", "chrome",
                 "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"):
        exe = shutil.which(name) or (name if Path(name).exists() else None)
        if not exe:
            continue
        r = subprocess.run([exe, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                            f"--print-to-pdf={out}", src.as_uri()], capture_output=True, text=True)
        if r.returncode == 0 and out.exists():
            return True
    return False


def count_slides(src: Path) -> int:
    return src.read_text(encoding="utf-8").count('class="slide')


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src, out = Path(sys.argv[1]).resolve(), Path(sys.argv[2]).resolve()
    if not src.exists():
        sys.exit(f"No existe: {src}")
    if with_playwright(src, out) or with_chrome(src, out):
        pages = None
        try:
            from pypdf import PdfReader
            pages = len(PdfReader(str(out)).pages)
        except Exception:
            pass
        n = count_slides(src)
        msg = f"PDF listo: {out}"
        if pages is not None:
            msg += f" ({pages} páginas, {n} slides)"
            if pages != n:
                msg += " ⚠ el número de páginas no coincide con las slides: revisar desbordes"
        print(msg)
        return
    print("No hay navegador headless disponible para generar el PDF.\n"
          "Alternativa: abrir el HTML en Chrome → Imprimir → Guardar como PDF "
          "(márgenes: ninguno; activar 'Gráficos de fondo'). El CSS ya define páginas 1920×1080.",
          file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
