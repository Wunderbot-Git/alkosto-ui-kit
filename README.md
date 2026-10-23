# Alkosto UI Kit

Fuente única del estilo visual de Alkosto para personas y agentes de IA, empaquetada en dos
skills de Claude:

| Skill | Para qué | ZIP |
|---|---|---|
| **alkosto-ui-kit** | Colores, tipografía, espaciado, radios, componentes, logo e íconos oficiales. Para cualquier pieza con estilo: reportes, dashboards, mockups, correos, documentos. | [`dist/alkosto-ui-kit.zip`](dist/alkosto-ui-kit.zip) |
| **alkosto-presentaciones** | Presentaciones 16:9 listas para presentar, en HTML o PDF. Antes de construir pregunta el formato y el estilo: **McKinsey** (comités y decisiones) o **niños y directivos** (simple y visual). | [`dist/alkosto-presentaciones.zip`](dist/alkosto-presentaciones.zip) |

Instala los dos. El de presentaciones funciona solo (trae su copia de tokens, logo e íconos).

## Instalar los skills en Claude

1. Descarga los ZIP de la tabla.
2. En Claude, en **Settings › Capabilities**, verifica que **Code execution and file creation** esté activado.
3. Ve a **Customize › Skills** → **+** → **Create skill** → **Upload a skill** y elige un ZIP. Repite con el otro.
4. Activa los skills en la lista. Desde ese momento Claude los usa solo cuando el trabajo es para Alkosto.

Funciona en planes Free, Pro y Max ([guía oficial](https://support.claude.com/en/articles/12512180-use-skills-in-claude)).

Prueba: *"Hazme una presentación con los resultados de conversión del mes"*. Claude te va a
preguntar si la quieres en HTML o PDF y en estilo McKinsey o niños y directivos.

Mientras Alkosto no tenga plan Team/Enterprise de Claude, cada persona lo instala así. Con un
plan de organización, un owner lo sube una vez en **Organización › Plugins & skills** y queda
disponible para todos.

## Qué hay en el repo

```
skill/alkosto-ui-kit/          ← skill de estilo (lo que va en su ZIP)
  SKILL.md                     instrucciones y reglas principales
  references/                  tokens CSS, colores, tipografía, componentes, íconos, formatos
  assets/                      logo SVG y paths de los 621 íconos oficiales
  scripts/icon.py              imprime íconos como SVG inline
  examples/                    kit-demo.html (todos los componentes) y slide-16x9.html
skill/alkosto-presentaciones/  ← skill de presentaciones
  SKILL.md                     flujo: preguntar formato y estilo → guion → construir → exportar → verificar
  references/                  estilo McKinsey, estilo niños y directivos, catálogo de layouts
  templates/                   plantilla.html + ejemplo-mckinsey.html + ejemplo-ninos-directivos.html
  scripts/export_pdf.py        HTML → PDF 16:9 (una página por slide)
  assets/                      copias de tokens, logo, íconos y motor del deck (generadas)
brand/                         logo en SVG, PNG y PDF (generado)
tokens/alkosto-tokens.source.css   export original de tokens (fuente de verdad)
examples-src/<skill>/          fuentes de ejemplos y plantillas (con marcadores {{…}}); _deck.css/_deck.js = motor del deck
scripts/build.mjs              genera archivos derivados y el ZIP
dist/*.zip                     skills empaquetados, listos para subir
```

Para ver el kit abre `skill/alkosto-ui-kit/examples/kit-demo.html`; para ver los dos estilos de
presentación, `skill/alkosto-presentaciones/templates/ejemplo-*.html` (flechas para navegar, F pantalla completa).

## Logo

Links oficiales en el CDN de Alkosto (Sirv):

- SVG: `https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.svg`
- PNG: `https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.png?w=384` (cualquier tamaño con `?w=` o `?h=`)

Carpeta [`brand/`](brand/): los mismos archivos más PNG 1x/2x/4x/8x y PDF vectorial para
impresión, con reglas de uso.

## Usarlo sin Claude

- CSS: `skill/alkosto-ui-kit/references/alkosto-tokens.css` + `alkosto-components.css`.
- Íconos: `python3 skill/alkosto-ui-kit/scripts/icon.py carrito --size 24` o la fuente del CDN
  `https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css`.
- Logo: `https://cdn.dam.alkosto.com/UX/marca/alkosto/logo-alkosto.svg` o carpeta `brand/`.

## Mantener y actualizar

Requiere Node 18+ y `zip`.

| Cambio | Dónde | Después |
|---|---|---|
| Nuevos tokens desde Figma | Reemplazar `tokens/alkosto-tokens.source.css` | `node scripts/build.mjs` |
| Nuevos íconos en ux-alkosto/icons | — | `node scripts/build.mjs --icons` |
| Componente nuevo o modificado | Bloques ```` ```css ```` en `references/components.md` | `node scripts/build.mjs` |
| Reglas, colores, formatos | Archivos `.md` en `skill/alkosto-ui-kit/` | `node scripts/build.mjs` |
| Ejemplos y plantillas | `examples-src/<skill>/*.html` | `node scripts/build.mjs` |
| Logo nuevo | `skill/alkosto-ui-kit/assets/logo-alkosto.svg` | `node scripts/build.mjs` y `python3 scripts/build-brand.py` |
| Motor o layouts del deck | `examples-src/alkosto-presentaciones/_deck.css` / `_deck.js` + `references/layouts.md` | `node scripts/build.mjs` |

No edites a mano los archivos generados: `references/alkosto-tokens.css`,
`references/alkosto-components.css`, `references/icon-names.txt`, `assets/alk-icons.json`,
`examples/*.html`, todo `alkosto-presentaciones/assets/` y `templates/`, `scripts/icon.py` del
skill de presentaciones y los ZIP. Cada cambio va con una entrada en `CHANGELOG.md` y un ZIP
reconstruido en el mismo commit.

## Fuentes y licencias

- Tokens: export del UI kit de Alkosto (Figma → CSS).
- Íconos: [ux-alkosto/icons](https://github.com/ux-alkosto/icons), licencia MIT.
- Logo: propiedad de Colombiana de Comercio S.A. (Alkosto). Solo para piezas de Alkosto.

## Pendiente de validar con UX

- Rojo de Davivienda: el export usa `#DD171B`; el skill anterior usaba `#E20613`.
- `--radius-xs` (8px) es mayor que `--radius-sm` (4px) en el export.
- Sombras, medidas de botón/card y layout son recomendaciones del kit, no tokens oficiales.
- El Centro de Ayuda (`ALK-centro-ayuda`) usa Inter y `#F77F00` en su CSS propio; este kit
  define Arial y `#EB5B25` según los tokens.
