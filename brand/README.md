# Logo Alkosto

| Archivo | Tamaño | Para qué |
|---|---|---|
| [`logo-alkosto.svg`](logo-alkosto.svg) | 192×80, vectorial | Web, HTML, Figma, cualquier herramienta que acepte SVG |
| [`logo-alkosto.png`](logo-alkosto.png) | 192×80 | Firmas de correo, tamaños pequeños |
| [`logo-alkosto@2x.png`](logo-alkosto@2x.png) | 384×160 | PowerPoint, Word, Google Slides, correos (pantallas retina) |
| [`logo-alkosto@4x.png`](logo-alkosto@4x.png) | 768×320 | Presentaciones grandes, banners, pantallas 4K |
| [`logo-alkosto@8x.png`](logo-alkosto@8x.png) | 1536×640 | Original para CDN de imágenes (Sirv) e impresión digital grande |
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

El CDN puede tardar hasta 12 horas en mostrar un cambio en `@main`. Para una versión fija
reemplaza `main` por el hash de un commit (por ejemplo `@df82260`).

## En Sirv (CDN de imágenes)

Subir solo dos archivos a una carpeta fija, por ejemplo `/brand/alkosto/`:

- `logo-alkosto.svg` (este SVG)
- `logo-alkosto.png` = `logo-alkosto@8x.png` renombrado (1536×640, el original de alta resolución)

Sirv genera cualquier tamaño y formato desde el PNG:

```
https://<cuenta>.sirv.com/brand/alkosto/logo-alkosto.png?w=192      1x
https://<cuenta>.sirv.com/brand/alkosto/logo-alkosto.png?w=384      2x
https://<cuenta>.sirv.com/brand/alkosto/logo-alkosto.png?h=48       alto fijo
```

No usar `format=jpg` (pierde la transparencia). Para un logo nuevo, reemplazar los archivos
con el mismo nombre para que los links no cambien.

## Reglas de uso

- Escalar solo proporcionalmente; ancho mínimo 96px en pantalla.
- No recolorear, rotar, recortar ni agregar sombras o efectos.
- Funciona sobre blanco, gris claro y los azules de Alkosto (`#004797`, `#06376F`).
- Sobre fotos, siempre con un fondo sólido detrás.
- Solo para piezas de Alkosto. El logo es propiedad de Colombiana de Comercio S.A.

## Regenerar

Fuente única: `skill/alkosto-ui-kit/assets/logo-alkosto.svg`. Si cambia, ejecutar
`python3 scripts/build-brand.py` (requiere Playwright con Chromium) y commitear `brand/`.
