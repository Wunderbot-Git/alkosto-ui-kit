# Layouts

Lienzo fijo **1920×1080**. Todas las clases están en el motor de `templates/plantilla.html`
(copia de `assets/deck.css`). Cada slide es una `<section class="slide …">`; el motor agrega
el logo arriba a la derecha y el número de página. Íconos: `python3 scripts/icon.py nombre --size N`.

## Estructura de una slide de contenido

```html
<section class="slide">
  <div class="bar-accent"></div>              <!-- franja naranja izquierda (McKinsey; opcional en simple) -->
  <div class="kicker">Sección</div>           <!-- 2–3 palabras en mayúsculas -->
  <h2 class="title">Conclusión en una oración</h2>
  <p class="lead">Frase de apoyo opcional</p>
  <div class="body"> …layout… </div>          <!-- ocupa el espacio restante, centrado vertical -->
  <div class="src">Fuente: …</div>            <!-- opcional -->
</section>
```

- Fondo azul: `class="slide dark"` · fondo naranja: `class="slide accent"`.
- Sin logo en una slide: `data-no-logo`.
- Resaltar un elemento (barra, KPI, pilar, paso, fila): agrega `hl` → naranja.
- Deck en estilo niños y directivos: `<div class="deck simple">` (todo más grande).

## Tipografía

| Elemento | McKinsey | Niños y directivos |
|---|---|---|
| Título de portada | 76px | 76px |
| Título de slide | 44px | 64px |
| Lead | 26px | 32px |
| Cuerpo | 22–26px | 28–40px |
| Cifra destacada | 96px | 160–240px |
| Fuente, número de página | 16px | 16px |

## Catálogo

### `cover` — portada
```html
<section class="slide dark cover">
  <div class="cover-logo">LOGO SVG</div>
  <div class="kicker">Área · Mes 2026</div>
  <h1 class="title">Título<br><span class="hl">mensaje clave</span></h1>
  <p class="lead">Subtítulo</p>
  <div class="meta">Equipo · fecha</div>
</section>
```
El SVG del logo está en `assets/logo-alkosto.svg` y dentro de `<template id="alk-logo">`.

### `section` — separador
```html
<section class="slide accent section"><div class="kicker">02</div><h2 class="title">Diagnóstico</h2></section>
```

### `exec-summary` — resumen ejecutivo (3–5 puntos)
```html
<div class="body"><ol class="exec">
  <li><span>Punto con <b>la parte clave</b> resaltada.</span></li>
</ol></div>
```

### `kpis` — 2 a 4 indicadores
```html
<div class="kpis" style="--n:3">
  <div class="kpi hl"><b>2,1%</b><span>Conversión móvil</span><em>+0,4 pp</em></div>
  <div class="kpi"><b>38%</b><span>Abandono en pago</span><em class="neg">+2 pp</em></div>
</div>
```
Variación positiva en azul (`em`), negativa en rojo (`em.neg`).

### `bar-chart` — barras horizontales (comparar categorías)
```html
<div class="bars">
  <div class="row hl"><span class="label">Categoría</span><div class="track"><div class="fill" style="--v:58"></div></div><span class="val">58%</span></div>
</div>
```
`--v` = largo de la barra en % del máximo (0–100). Ordena de mayor a menor.

### `chart-takeaways` — evidencia + conclusiones
```html
<div class="split">
  <div> …bars, cols, tabla o SVG… </div>
  <div class="takeaways"><p><b>Qué:</b> …</p><p><b>Por qué importa:</b> …</p></div>
</div>
```

### `columns` — evolución en el tiempo
```html
<div class="cols">
  <div class="col"><b>1,8%</b><i style="--v:60"></i><span>Jul</span></div>
  <div class="col hl"><b>2,1%</b><i style="--v:70"></i><span>Oct</span></div>
</div>
```

### `waterfall` — puente entre dos cifras
```html
<div class="wf">
  <div class="w" style="--b:0;--h:55"><b>100</b><i></i><span>Hoy</span></div>
  <div class="w up" style="--b:55;--h:12"><b>+12</b><i></i><span>Palanca 1</span></div>
  <div class="w down" style="--b:60;--h:7"><b>-7</b><i></i><span>Riesgo</span></div>
  <div class="w total" style="--b:0;--h:82"><b>127</b><i></i><span>Potencial</span></div>
</div>
```
`--b` = base y `--h` = alto, en % de la altura del gráfico. Calcula la escala para que el total más alto quede en ~85%.

### `table`
```html
<table class="tbl"><thead><tr><th>Categoría</th><th class="num">Ventas</th></tr></thead>
<tbody><tr class="hl"><td>…</td><td class="num">…</td></tr></tbody></table>
```
Máximo ~8 filas y 5 columnas; lo demás al anexo.

### `pillars` / `icon-trio` — 2 a 4 pilares
```html
<div class="pillars" style="--n:3">
  <div class="pillar">ÍCONO 64px<h3>Título</h3><p>Una frase.</p></div>
</div>
```
En `deck simple` se centran y crecen solos (íconos de 120px recomendados).

### `before-after` — hoy vs. mañana
```html
<div class="ba">
  <div class="side before"><h3>Hoy</h3>ÍCONO<p>…</p></div>
  <div class="arrow">ÍCONO arrow-next 72px</div>
  <div class="side after"><h3>Mañana</h3>ÍCONO<p>…</p></div>
</div>
```

### `roadmap` — hoja de ruta (3–5 pasos)
```html
<div class="roadmap" style="--n:4">
  <div class="step"><div class="dot">1</div><div class="when">Sem. 1–2</div><h3>Qué</h3><p>Detalle</p><div class="who">Responsable</div></div>
</div>
```

### `path-steps` — camino del cliente
```html
<div class="path">
  <div class="p-step"><div class="bubble">ÍCONO 88px</div><b>Paso</b><span>Detalle</span></div>
  <div class="p-arrow">ÍCONO arrow-next 48px</div>
  <div class="p-step bad">…paso problemático en naranja…</div>
</div>
```

### `big-number`
```html
<div class="big"><div class="kicker">Qué ganamos</div><div class="n">4 → 2</div>
<div class="what">pasos para llegar al producto</div><div class="why">Una frase de por qué importa.</div></div>
```
Usar sin `.title`; en slide `dark` o blanca.

### `big-statement`
```html
<div class="body" style="margin-top:0"><div class="kicker">En una frase</div>
<p class="statement">Los productos están ahí, pero <span class="hl">escondidos</span>.</p></div>
```

### `people-grid` — "X de cada N"
```html
<div class="people-row">
  <div class="people"><span class="on">ÍCONO user 110px</span>…<span>ÍCONO user</span></div>
  <div class="txt"><b>3 de cada 5</b><span>personas …</span></div>
</div>
```

### `analogy` — comparación cotidiana
```html
<div class="analogy">
  <div class="card">ÍCONO<h3>En la tienda</h3><p>…</p></div>
  <div class="card web">ÍCONO<h3>En el celular</h3><p>…</p></div>
</div>
```

### `decision` — lo que se pide
```html
<div class="decision"><div class="ask">ÍCONO check 56px<p>La decisión<small>Quién · cuándo</small></p></div></div>
```

## Gráficos a medida (SVG)

Si ningún layout sirve (línea, dispersión), dibuja SVG inline dentro de `.body`:
`viewBox` en px reales del área (p. ej. 1640×620), trazos de 4px, puntos de 10px, etiquetas
Arial 20–22px en `#5C5C5C`, grilla `#E0E0E0`. Paleta en orden: `#004797`, `#EB5B25`,
`#709AC6`, `#F5AD92`, `#06376F`, `#959595`. Naranja solo para el dato que prueba el título.
