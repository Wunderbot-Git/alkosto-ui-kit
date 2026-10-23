---
name: alkosto-presentaciones
description: Crea presentaciones de Alkosto en 16:9, listas para presentar, en HTML o PDF, con la marca oficial (colores, Arial, logo, íconos). Úsalo SIEMPRE que alguien pida una presentación, deck, slides, diapositivas o "algo para presentar" para Alkosto o su equipo de e-commerce, aunque no mencione la marca. Antes de construir pregunta el formato (HTML o PDF) y el estilo (McKinsey o "niños y directivos"). También sirve para revisar o mejorar un deck existente de Alkosto.
---

# Presentaciones Alkosto

Produce decks 16:9 presentables con la identidad de Alkosto. Dos decisiones cambian todo el
trabajo, así que se preguntan **antes** de empezar.

## Paso 1 — Preguntar formato y estilo (siempre)

Haz estas dos preguntas en un solo mensaje, con opciones para elegir (usa la herramienta de
preguntas de opción múltiple si existe; si no, texto). No preguntes lo que el usuario ya dijo
en su pedido: si escribió "en PDF" o "estilo McKinsey", toma esa respuesta y pregunta solo lo
que falta.

**1. ¿En qué formato la necesitas?**
- **HTML** (recomendado) — se presenta en el navegador a pantalla completa, con navegación por
  teclado, y se puede imprimir. Ideal para presentar en vivo o compartir un link.
- **PDF** — un archivo fijo de páginas 16:9 para enviar por correo, adjuntar o archivar.

**2. ¿Qué estilo?**
- **McKinsey** — para comités, gerencia y decisiones. Títulos que son conclusiones, resumen
  ejecutivo al inicio, argumento Situación → Complicación → Resolución, gráficos como evidencia,
  fuentes citadas, más densidad.
- **Niños y directivos** — para audiencias amplias o muy ocupadas. Una idea por slide, frases
  cortas, números grandes, íconos y comparaciones visuales, cero jerga. Que lo entienda un niño
  de 10 años y lo apruebe una junta directiva en 5 minutos.

Si la conversación no permite preguntar (tarea programada, sin respuesta), usa **HTML + McKinsey**
para audiencias de gerencia o **HTML + niños y directivos** para audiencias amplias, y escribe
al inicio de tu respuesta qué elegiste.

Opcionalmente, en la misma pregunta: audiencia, duración y decisión que debe lograr el deck,
solo si no se deduce del contexto.

## Paso 2 — Guion fantasma (ghost deck)

Antes de diseñar, escribe la lista de títulos de todas las slides en orden. Leídos solos deben
contar la historia completa. Muéstralo al usuario si el deck tiene más de 8 slides o si el
contenido es ambiguo; si es corto y claro, sigue directo.

- Estilo McKinsey → `references/estilo-mckinsey.md`
- Estilo niños y directivos → `references/estilo-ninos-directivos.md`

## Paso 3 — Construir

1. Copia `templates/plantilla.html`. Contiene el motor del deck (lienzo 1920×1080 escalado,
   navegación, pantalla completa, impresión), los tokens de Alkosto y el logo. No cambies el
   motor ni el tamaño del lienzo.
2. Reemplaza las `<section class="slide">` de ejemplo por las tuyas usando los layouts de
   `references/layouts.md`. Cada slide usa exactamente un layout.
3. Íconos: `python3 scripts/icon.py <nombre> --size 64` imprime el SVG oficial para pegar
   inline. Nombres en `assets/icon-names.txt`. Nunca emojis.
4. Gráficos: HTML/CSS o SVG inline con la paleta de `references/layouts.md`. Sin librerías
   externas para que el archivo funcione sin internet.
5. Idioma español de Colombia (salvo que pidan otro), precios `$1.299.900`, fuente siempre
   Arial — también en el estilo niños y directivos (nada de fuentes redondeadas o infantiles).

Ejemplos terminados para inspirarse: `templates/ejemplo-mckinsey.html` y
`templates/ejemplo-ninos-directivos.html`.

## Paso 4 — Exportar

- **HTML:** entrega el archivo `.html` autocontenido (o publícalo como artefacto si el entorno
  lo permite). Atajos: ← → espacio para navegar, F pantalla completa, Inicio/Fin.
- **PDF:** `python3 scripts/export_pdf.py deck.html deck.pdf` genera una página 1920×1080 por
  slide. Si no hay navegador headless disponible, el script lo dice: entrega el HTML y explica
  "Imprimir → Guardar como PDF" (el CSS de impresión ya está en 16:9, sin márgenes, con fondos).

## Paso 5 — Verificar antes de entregar

- Abre o renderiza el deck y mira cada slide: nada desborda el lienzo, nada se corta, el logo
  no tapa contenido, contraste correcto.
- Lee solo los títulos en orden: ¿cuentan la historia?
- Cifras y fuentes coinciden con los datos que dio el usuario. Datos de ejemplo se marcan como
  tales; nunca inventes cifras.
- En PDF: abre el archivo y confirma número de páginas = número de slides.

## Archivos

| Archivo | Para qué |
|---|---|
| `references/estilo-mckinsey.md` | Método McKinsey adaptado a Alkosto |
| `references/estilo-ninos-directivos.md` | Método "niños y directivos" |
| `references/layouts.md` | Catálogo de layouts con HTML, tipografía y paleta de gráficos |
| `templates/plantilla.html` | Punto de partida: motor + estilos + 3 slides base |
| `templates/ejemplo-*.html` | Decks de ejemplo completos en cada estilo |
| `scripts/icon.py` | Íconos oficiales como SVG inline |
| `scripts/export_pdf.py` | HTML → PDF 16:9 |
| `assets/` | Tokens, logo y set de íconos (copias del skill `alkosto-ui-kit`) |
