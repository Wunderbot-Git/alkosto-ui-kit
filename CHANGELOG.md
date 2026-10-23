# Changelog

## 1.1.0 — 2026-10-23

- Nuevo skill **alkosto-presentaciones**: decks 16:9 en HTML o PDF. Pregunta siempre formato
  (HTML/PDF) y estilo (McKinsey / niños y directivos) antes de construir.
- Motor de deck: lienzo 1920×1080 escalado, navegación por teclado/clic/swipe, pantalla
  completa, logo y número de página automáticos, impresión 16:9.
- 18 layouts documentados (portada, resumen ejecutivo, KPIs, barras, columnas, waterfall,
  tabla, pilares, antes/después, hoja de ruta, camino del cliente, número grande, frase,
  personas, analogía, decisión, separador).
- `export_pdf.py`: una página 1920×1080 por slide, verifica páginas = slides.
- Decks de ejemplo en ambos estilos.
- `build.mjs` genera y empaqueta ambos skills; el de presentaciones recibe copias de tokens,
  logo e íconos para funcionar solo.

## 1.0.0 — 2026-10-23

Primera versión. Reemplaza el skill `alkosto-brand-colors` (solo colores).

- Tokens completos del export oficial (223 variables): escalas 50–1000 de naranja y azul,
  grises, extendidos, feedback, componentes, tipografía, espaciado y radios. Spacing y
  font-size convertidos a px.
- Tipografía Arial con escala web y escala para presentaciones.
- Componentes documentados con CSS: botones, links, inputs, OTP, alertas, badges
  (mismo día, sin IVA, descuento), precio, estrellas, card de producto, lista, modal, tooltip.
- 621 íconos oficiales de ux-alkosto/icons con script para SVG inline; reglas de uso con Lucide.
- Logo oficial en SVG y reglas de uso.
- Reglas de formato: presentaciones HTML 16:9, documentos, dashboards, gráficos, correos.
- Ejemplos: `kit-demo.html` y plantilla `slide-16x9.html`.
- Cambio respecto al skill anterior: Davivienda pasa de `#E20613` a `#DD171B` (según tokens).
