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

## Links oficiales (Sirv, CDN de Alkosto)

Fuente preferida para incrustar el logo en cualquier lugar:

```
https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.svg
https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.png
```

El PNG es el original de 1536×640; Sirv entrega el tamaño y el formato (WebP/AVIF) que se pida:

```
https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.png?w=192      1x
https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.png?w=384      2x (slides, correos)
https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.png?h=48       alto fijo
```

```html
<img src="https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.svg" alt="Alkosto" height="48">
<!-- Correos (muchos clientes no muestran SVG): -->
<img src="https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.png?w=384" alt="Alkosto" width="192" height="80">
```

No usar `format=jpg` (pierde la transparencia). Para actualizar el logo: subir los archivos
nuevos a `UX/marca/alkosto/` en Sirv con el mismo nombre (`logo-alkosto.svg` y
`logo-alkosto.png` = `brand/logo-alkosto@8x.png` renombrado), así los links no cambian.

Alternativa desde GitHub (jsDelivr), útil si Sirv no está disponible:
`https://cdn.jsdelivr.net/gh/Wunderbot-Git/alkosto-ui-kit@main/brand/logo-alkosto.svg`

## Reglas de uso

- Escalar solo proporcionalmente; ancho mínimo 96px en pantalla.
- No recolorear, rotar, recortar ni agregar sombras o efectos.
- Funciona sobre blanco, gris claro y los azules de Alkosto (`#004797`, `#06376F`).
- Sobre fotos, siempre con un fondo sólido detrás.
- Solo para piezas de Alkosto. El logo es propiedad de Colombiana de Comercio S.A.

## Regenerar

Fuente única: `skill/alkosto-ui-kit/assets/logo-alkosto.svg`. Si cambia, ejecutar
`python3 scripts/build-brand.py` (requiere Playwright con Chromium) y commitear `brand/`.
