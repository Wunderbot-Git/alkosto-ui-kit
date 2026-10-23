# Estilo McKinsey

Para comités, gerencia, proveedores estratégicos y cualquier deck que deba producir una
decisión. Principio: **un deck es un argumento, no una decoración.**

## Reglas

1. **Títulos de acción.** Cada título es una oración completa con la conclusión de la slide.
   - Mal: "Conversión móvil" · Bien: "La conversión móvil cayó 0,3 pp porque el pago con PSE falla en Android"
   - Mal: "Panorama de categorías" · Bien: "Cuatro categorías concentran el 70% de las búsquedas sin resultado"
2. **Pirámide (Minto).** Primero la respuesta, luego 3–5 pilares que la sostienen, cada uno
   mutuamente excluyente y en conjunto exhaustivo (MECE).
3. **Situación → Complicación → Resolución.** Contexto compartido, el problema que obliga a
   actuar, la recomendación.
4. **Una idea por slide.** Todo lo que está en la slide prueba el título. Lo que no, sale.
5. **Prueba del "¿y qué?".** La implicación siempre explícita: qué significa y por qué importa.
6. **Evidencia, no viñetas.** El cuerpo es un gráfico, tabla, marco o diagrama. Máximo tres
   frases de apoyo al lado.
7. **Fuente en cada slide con datos** (`.src`): herramienta, período, segmento.

## Estructura del deck

| # | Slide | Layout sugerido |
|---|---|---|
| 1 | Portada: tema, área, fecha | `cover` |
| 2 | Resumen ejecutivo: la recomendación en 3–5 puntos (única slide donde valen viñetas) | `exec-summary` |
| 3–4 | Situación | `chart-takeaways`, `kpis` |
| 5–7 | Complicación, cuantificada | `bar-chart`, `chart-takeaways`, `table` |
| 8–12 | Resolución por pilares | `pillars`, `before-after`, `chart-takeaways` |
| 13 | Impacto esperado | `kpis`, `waterfall` |
| 14 | Hoja de ruta: quién, qué, cuándo | `roadmap` |
| 15 | Próximos pasos / decisión requerida | `decision` |
| + | Anexo: separador de sección y detalle | `section`, `table` |

Para decks cortos (5–8 slides): portada, resumen, 1 situación, 2 complicación, 2 resolución,
próximos pasos.

## Elección de gráfico

| Lo que quieres mostrar | Gráfico |
|---|---|
| Comparar categorías | Barras horizontales, ordenadas |
| Evolución en el tiempo | Línea (≤ 4 series) |
| Parte del todo | Barra 100% apilada o waterfall (no tortas) |
| Puente entre dos cifras | Waterfall |
| Relación entre variables | Dispersión |
| Proceso o embudo | Funnel horizontal o diagrama de pasos |
| Avance vs. meta | Barra con línea de meta |

Evitar 3D, tortas, doble eje y gráficos que tomen más de 5 segundos en entenderse.
Resaltar con naranja **solo** el dato que prueba el título; el resto en azul o gris.

## Densidad

- Título: 1–2 líneas (40–44px). Cuerpo: 20–24px. Notas y fuente: 16px.
- Máximo ~60 palabras por slide fuera del gráfico.
- Margen de seguridad: nada a menos de 120px de los bordes laterales.

## Antipatrones

Volcado de datos sin narrativa · título que repite el eje del gráfico · "resumen" que en
realidad es una agenda · slide huérfana · varios gráficos con mensajes distintos en una slide ·
la recomendación al final en vez de al inicio.

## Revisar un deck existente

Si el usuario trae un deck: lee solo los títulos, marca los títulos de tema y reescríbelos
como conclusiones (mostrar antes/después), revisa el arco SCR, propone qué unir, dividir o
mover al anexo, y luego aplica los cambios aprobados con los layouts de este skill.
