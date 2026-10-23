# Alkosto UI Kit

Skill de Claude y fuente única del estilo visual de Alkosto: colores, tipografía, espaciado,
radios, componentes, logo e íconos oficiales. Sirve para que cualquier persona del equipo —
y cualquier agente de IA — produzca piezas on-brand: presentaciones, reportes, dashboards,
mockups, correos y documentos.

## Instalar el skill en Claude

1. Descarga [`dist/alkosto-ui-kit.zip`](dist/alkosto-ui-kit.zip).
2. En Claude, en **Settings › Capabilities**, verifica que **Code execution and file creation** esté activado.
3. Ve a **Customize › Skills** → **+** → **Create skill** → **Upload a skill** y elige el ZIP.
4. Activa el skill en la lista. Desde ese momento Claude lo usa solo cuando el trabajo es para Alkosto.

Funciona en planes Free, Pro y Max ([guía oficial](https://support.claude.com/en/articles/12512180-use-skills-in-claude)).

Prueba: *"Hazme una slide 16:9 con los resultados de conversión del mes"*.

Mientras Alkosto no tenga plan Team/Enterprise de Claude, cada persona lo instala así. Con un
plan de organización, un owner lo sube una vez en **Organización › Plugins & skills** y queda
disponible para todos.

## Qué hay en el repo

```
skill/alkosto-ui-kit/          ← el skill (esto es lo que va en el ZIP)
  SKILL.md                     instrucciones y reglas principales
  references/                  tokens CSS, colores, tipografía, componentes, íconos, formatos
  assets/                      logo SVG y paths de los 621 íconos oficiales
  scripts/icon.py              imprime íconos como SVG inline
  examples/                    kit-demo.html (todos los componentes) y slide-16x9.html
tokens/alkosto-tokens.source.css   export original de tokens (fuente de verdad)
examples-src/                  plantillas de los ejemplos (con marcadores {{…}})
scripts/build.mjs              genera archivos derivados y el ZIP
dist/alkosto-ui-kit.zip        skill empaquetado, listo para subir
```

Abre `skill/alkosto-ui-kit/examples/kit-demo.html` en el navegador para ver el kit completo.

## Usarlo sin Claude

- CSS: `skill/alkosto-ui-kit/references/alkosto-tokens.css` + `alkosto-components.css`.
- Íconos: `python3 skill/alkosto-ui-kit/scripts/icon.py carrito --size 24` o la fuente del CDN
  `https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css`.
- Logo: `skill/alkosto-ui-kit/assets/logo-alkosto.svg`.

## Mantener y actualizar

Requiere Node 18+ y `zip`.

| Cambio | Dónde | Después |
|---|---|---|
| Nuevos tokens desde Figma | Reemplazar `tokens/alkosto-tokens.source.css` | `node scripts/build.mjs` |
| Nuevos íconos en ux-alkosto/icons | — | `node scripts/build.mjs --icons` |
| Componente nuevo o modificado | Bloques ```` ```css ```` en `references/components.md` | `node scripts/build.mjs` |
| Reglas, colores, formatos | Archivos `.md` en `skill/alkosto-ui-kit/` | `node scripts/build.mjs` |
| Ejemplos | `examples-src/*.html` | `node scripts/build.mjs` |

No edites a mano los archivos generados: `references/alkosto-tokens.css`,
`references/alkosto-components.css`, `references/icon-names.txt`, `assets/alk-icons.json`,
`examples/*.html` y el ZIP. Cada cambio va con una entrada en `CHANGELOG.md` y un ZIP
reconstruido en el mismo commit.

## Fuentes y licencias

- Tokens: export del UI kit de Alkosto (Figma → CSS).
- Íconos: [ux-alkosto/icons](https://github.com/ux-alkosto/icons), licencia MIT.
- Logo: propiedad de Alkosto / Colombiana de Comercio S.A. Uso interno.

## Pendiente de validar con UX

- Rojo de Davivienda: el export usa `#DD171B`; el skill anterior usaba `#E20613`.
- `--radius-xs` (8px) es mayor que `--radius-sm` (4px) en el export.
- Sombras, medidas de botón/card y layout son recomendaciones del kit, no tokens oficiales.
- El Centro de Ayuda (`ALK-centro-ayuda`) usa Inter y `#F77F00` en su CSS propio; este kit
  define Arial y `#EB5B25` según los tokens.
