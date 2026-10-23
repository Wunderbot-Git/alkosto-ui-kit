# Formatos de entrega

## Logo

- Archivo: `assets/logo-alkosto.svg` (192×80, colores fijos naranja `#EB5B25`, azul `#004797`, blanco).
- Insertarlo inline o como `<img>`; escalar solo proporcionalmente (`height` fijo, `width: auto`).
- Ancho mínimo 96px en pantalla. Espacio libre alrededor ≥ la altura de la franja azul inferior.
- Funciona sobre blanco, gris 100 y azul 500/700 (lleva su propio fondo blanco).
- No recolorear, no poner sombras, no rotar, no usar sobre fotos sin un fondo sólido.

## Presentaciones — HTML 16:9

Usar `examples/slide-16x9.html` como base. Reglas:

- Lienzo fijo 1920×1080 escalado al viewport (proporción 16:9 exacta), una `<section>` por slide.
- Escala tipográfica de presentación (Arial):
  título de portada 72px · título de slide 44px · subtítulo 28px · cuerpo 24px · notas/fuente 16px · cifra destacada 96px.
- Portada: fondo azul 500, título blanco, acento naranja (barra o palabra), logo arriba a la izquierda.
- Slides de contenido: fondo blanco, título azul 500, texto gris 900, una franja naranja de 8px
  o un acento naranja por slide, logo pequeño (48px de alto) en una esquina, número de slide.
- Slide de sección: fondo naranja 500, texto blanco.
- Máximo 6 bullets por slide; preferir una idea por slide con título-conclusión.
- Íconos oficiales para conceptos, nunca emojis.
- Navegación con flechas/espacio y modo impresión (`@page { size: 1920px 1080px }`).

## Documentos y reportes (HTML, Docs, Word)

- Título H1 azul 500 24–32px, H2 azul 500, cuerpo gris 900 14–16px.
- Tablas: encabezado azul 500 con texto blanco, filas alternas gris 100, bordes gris 200.
- Callouts con el patrón de alertas de `components.md`.
- Word / PowerPoint: Arial; colores por hex de `colors.md`; logo como imagen SVG/PNG.

## Dashboards y gráficos

- Paleta y reglas en `colors.md` → "Paleta para gráficos".
- KPI tiles: valor 32px negrita gris 900, label 12px gris 700, variación azul (positiva) o rojo (negativa).
- Fondo blanco, cards con borde gris 200 y radio 4px.

## Correos

- Ancho 600px, tablas y estilos inline (sin variables CSS: usar hex).
- Header blanco con logo, CTA botón naranja `#EB5B25` texto blanco, footer negro con texto blanco.

## Textos

- Español de Colombia, tuteo, frases cortas.
- Precios `$1.299.900`; porcentajes `-25%`; fechas `23 de octubre de 2026`.
- Mayúscula inicial solo en la primera palabra de títulos y botones ("Agregar al carrito").
