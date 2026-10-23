---
name: alkosto-ui-kit
description: UI kit oficial de Alkosto (colores, tipografía, espaciado, radios, componentes, logo e íconos oficiales). Úsalo SIEMPRE que generes algo visual o con estilo para Alkosto — páginas HTML, artefactos, presentaciones, dashboards, reportes, correos, mockups, gráficos, documentos Word o PowerPoint — aunque el usuario no pida "usar la marca". Si el trabajo es para Alkosto y tiene color, tipografía o íconos, usa este skill. No lo uses para trabajo que no sea de Alkosto ni para texto plano sin estilo.
---

# Alkosto UI Kit

Fuente única del estilo visual de Alkosto para personas y agentes. Los valores vienen del
export oficial de tokens del UI kit y del set oficial de íconos `ux-alkosto/icons`.

## Flujo de trabajo

1. **Tokens primero.** Para HTML/CSS copia `references/alkosto-tokens.css` completo en un
   `<style>` o `:root` y usa las variables (`var(--alkosto-primary-500)`), nunca hex sueltos.
   Para Word, PowerPoint, Excel o gráficos usa los hex de `references/colors.md`.
2. **Elige color por rol, no por gusto** (tabla abajo). Naranja = acción principal y marca.
   Azul = estructura, encabezados, información y éxito.
3. **Tipografía: Arial** (`var(--font-family)`). Sin fuentes decorativas, redondeadas ni
   "juguetonas", aunque el tema sea infantil o festivo. Escala en `references/typography-layout.md`.
4. **Componentes:** antes de inventar un botón, badge, alerta, input o card, usa el patrón de
   `references/components.md` (o pega `references/alkosto-components.css` completo). La página `examples/kit-demo.html` los muestra todos juntos.
5. **Íconos:** usa los oficiales de Alkosto (621, nombres en `references/icon-names.txt`).
   `python3 scripts/icon.py <nombre>` imprime el SVG inline. Para flechas, chevrons, check y
   estados de UI genéricos usa Lucide. Detalles en `references/icons.md`.
6. **Logo:** `assets/logo-alkosto.svg` (192×80). Pégalo inline, sin recolorear, deformar ni
   recortar. Reglas en `references/formats.md`.
7. **Formato del entregable** (presentaciones 16:9 en HTML, correos, gráficos, Office):
   `references/formats.md`. Plantilla de slide: `examples/slide-16x9.html`.

## Roles de color — lo esencial

| Rol | Token | Hex |
|---|---|---|
| Acción principal, marca, links | `--alkosto-primary-500` | `#EB5B25` |
| Hover / pressed de la acción principal | `--alkosto-primary-700` | `#B14B25` |
| Fondo suave naranja | `--alkosto-primary-50` | `#FDEEE9` |
| Encabezados, estructura, info, éxito | `--alkosto-secondary-500` | `#004797` |
| Azul oscuro (hover, bloques de fondo) | `--alkosto-secondary-700` | `#06376F` |
| Fondo suave azul | `--alkosto-secondary-50` | `#EDF1F6` |
| Texto principal | `--alkosto-gray-900` | `#444444` |
| Texto secundario | `--alkosto-gray-700` | `#5C5C5C` |
| Placeholder, deshabilitado | `--alkosto-gray-500` | `#959595` |
| Bordes y divisores | `--alkosto-gray-200` | `#E0E0E0` |
| Fondo de sección | `--alkosto-gray-100` | `#F5F5F5` |
| Error | `--alkosto-extended-red-500` | `#DD171B` |
| Alerta / advertencia | `--alkosto-extended-yellow-600` | `#ECBA18` |
| Disponible / check | `--alkosto-extended-green-500` | `#1DA04E` |
| Entrega el mismo día | `--special-samedaydelivery-base` sobre `-bg` | `#217A42` / `#F3FFF7` |
| Sin IVA | `--special-notaxes-base` sobre `-bg` | `#9D1C1F` / `#FFF2F1` |

Escalas completas (50–1000), colores extendidos y especiales: `references/colors.md`.

## Reglas que no se negocian

- El éxito en Alkosto es **azul**, no verde. El verde es para disponibilidad, checks de input y
  "entrega el mismo día".
- Texto sobre naranja, azul 500/700 o rojo: siempre **blanco**. Texto de cuerpo nunca más claro
  que `#5C5C5C` sobre fondo blanco.
- Un solo botón primario (naranja relleno) por vista o bloque. El secundario es contorno naranja.
- Radio por defecto 4px; 8px para OTP y elementos de selección; 16px solo para contenedores
  grandes. Nada de esquinas muy redondeadas tipo "píldora" salvo badges.
- Sombras discretas. Las alertas usan borde izquierdo de color + sombra del tono a 40%,
  no fondos saturados.
- No inventes colores nuevos. Si falta uno, usa el paso más cercano de las escalas y avísalo.
- Idioma de la interfaz: español de Colombia, tuteo, precios como `$1.299.900` (punto de miles,
  sin decimales).

## Archivos

| Archivo | Para qué |
|---|---|
| `references/alkosto-tokens.css` | Todas las variables CSS (223), listas para pegar |
| `references/alkosto-components.css` | CSS de todos los componentes (`.alk-btn`, `.alk-alert`…), generado desde `components.md` |
| `references/colors.md` | Escalas completas, colores especiales, paleta para gráficos |
| `references/typography-layout.md` | Fuente, escala tipográfica, espaciado, radios, sombras, grilla |
| `references/components.md` | Snippets HTML/CSS de botones, links, inputs, badges, alertas, cards, precio, estrellas |
| `references/icons.md` | Cómo usar los íconos oficiales y cuándo Lucide |
| `references/icon-names.txt` | Los 621 nombres de íconos oficiales |
| `references/formats.md` | Presentaciones 16:9, documentos, correos, gráficos, Office, uso del logo |
| `assets/logo-alkosto.svg` | Logo oficial |
| `assets/alk-icons.json` | Paths SVG de todos los íconos oficiales |
| `scripts/icon.py` | Imprime íconos como SVG inline o sprite |
| `examples/kit-demo.html` | Página de referencia con todos los componentes |
| `examples/slide-16x9.html` | Plantilla de presentación 16:9 |
