# Logo Alkosto

| Archivo | Tamaño | Para qué |
|---|---|---|
| [`logo-alkosto.svg`](logo-alkosto.svg) | 192×80, vectorial | Web, HTML, Figma, cualquier herramienta que acepte SVG |
| [`logo-alkosto.png`](logo-alkosto.png) | 192×80 | Firmas de correo, tamaños pequeños |
| [`logo-alkosto@2x.png`](logo-alkosto@2x.png) | 384×160 | PowerPoint, Word, Google Slides, correos (pantallas retina) |
| [`logo-alkosto@4x.png`](logo-alkosto@4x.png) | 768×320 | Presentaciones grandes, banners, pantallas 4K |
| [`logo-alkosto.pdf`](logo-alkosto.pdf) | vectorial | Impresión, piezas para imprenta, InDesign / Illustrator |

Los PNG tienen fondo transparente; el logo trae su propio contorno blanco redondeado.

## Links directos

Para incrustar el logo sin descargarlo (HTML, Notion, correos, herramientas no-code):

```
https://cdn.jsdelivr.net/gh/Wunderbot-Git/alkosto-ui-kit@main/brand/logo-alkosto.svg
https://cdn.jsdelivr.net/gh/Wunderbot-Git/alkosto-ui-kit@main/brand/logo-alkosto@2x.png
```

```html
<img src="https://cdn.jsdelivr.net/gh/Wunderbot-Git/alkosto-ui-kit@main/brand/logo-alkosto.svg" alt="Alkosto" height="48">
```

El CDN puede tardar hasta 12 horas en mostrar un cambio en `@main`. Para una versión fija usa
una etiqueta del repo en vez de `main` (por ejemplo `@v1.2.0`).

## Reglas de uso

- Escalar solo proporcionalmente; ancho mínimo 96px en pantalla.
- No recolorear, rotar, recortar ni agregar sombras o efectos.
- Funciona sobre blanco, gris claro y los azules de Alkosto (`#004797`, `#06376F`).
- Sobre fotos, siempre con un fondo sólido detrás.
- Solo para piezas de Alkosto. El logo es propiedad de Colombiana de Comercio S.A.

## Regenerar

Fuente única: `skill/alkosto-ui-kit/assets/logo-alkosto.svg`. Si cambia, ejecutar
`python3 scripts/build-brand.py` (requiere Playwright con Chromium) y commitear `brand/`.
