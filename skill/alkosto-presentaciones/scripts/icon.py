#!/usr/bin/env python3
"""Imprime íconos oficiales de Alkosto (ux-alkosto/icons, MIT) como SVG inline.

Uso:
  python3 scripts/icon.py carrito garantia            # SVG 24px, color = currentColor
  python3 scripts/icon.py carrito --size 32 --color "#EB5B25"
  python3 scripts/icon.py --search moto               # buscar nombres que contienen "moto"
  python3 scripts/icon.py carrito --symbols           # <symbol>s para un sprite (<use href="#alk-carrito">)

Los nombres válidos están en references/icon-names.txt.
"""
import argparse
import json
import sys
from html import escape
from pathlib import Path

ICONS = json.loads((Path(__file__).resolve().parent.parent / "assets" / "alk-icons.json").read_text())


def svg(name, size, color, title=None):
    icon = ICONS[name]
    paths = "".join(f'<path d="{d}"/>' for d in icon["p"])
    a11y = f'role="img"><title>{escape(title)}</title>' if title else 'aria-hidden="true">'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" class="alk-icon" width="{size}" height="{size}" '
            f'viewBox="0 0 {icon["w"]} 1024" fill="{color}" {a11y}{paths}</svg>')


def symbol(name):
    icon = ICONS[name]
    paths = "".join(f'<path d="{d}"/>' for d in icon["p"])
    return f'<symbol id="alk-{name}" viewBox="0 0 {icon["w"]} 1024">{paths}</symbol>'


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("names", nargs="*")
    ap.add_argument("--size", type=int, default=24)
    ap.add_argument("--color", default="currentColor")
    ap.add_argument("--title", help="texto accesible (solo si el ícono transmite información)")
    ap.add_argument("--search")
    ap.add_argument("--symbols", action="store_true")
    a = ap.parse_args()

    if a.search:
        print("\n".join(n for n in sorted(ICONS) if a.search.lower() in n.lower()))
        return
    missing = [n for n in a.names if n not in ICONS]
    if missing:
        sys.exit(f"Íconos no encontrados: {', '.join(missing)} (usa --search)")
    if a.symbols:
        print('<svg xmlns="http://www.w3.org/2000/svg" style="display:none">'
              + "".join(symbol(n) for n in a.names) + "</svg>")
        return
    for n in a.names:
        print(svg(n, a.size, a.color, a.title))


if __name__ == "__main__":
    main()
