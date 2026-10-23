# Tipografía, espaciado y layout

## Fuente

- `--font-family: Arial, Helvetica, sans-serif` (el export original define solo `Arial`).
- No cargar fuentes web para piezas de Alkosto. Nada de Inter, Poppins, Nunito, Comic, script
  ni display redondeadas.
- Pesos: 400 cuerpo, 700 títulos, precios y botones. Evitar 300 (Arial no lo tiene).
- Line-height: 1.4–1.5 en cuerpo, 1.2 en títulos.

## Escala tipográfica (tokens)

| Token | Tamaño | Uso |
|---|---|---|
| `--typography-body-x-large` | 32px | Cifras destacadas, hero |
| `--typography-heading-h1` | 24px | Título de página |
| `--typography-heading-h2` | 18px | Título de sección |
| `--typography-heading-h3` | 16px | Subtítulo |
| `--typography-heading-h4` | 15px | |
| `--typography-heading-h5` | 14px | |
| `--typography-body-large` | 18px | Texto introductorio |
| `--typography-body-main` | 14px | **Cuerpo por defecto** |
| `--typography-body-small` | 12px | Notas legales, ayudas |
| `--typography-components-button` | 16px | Botones |
| `--typography-components-input-label` | 12px | Label de input |
| `--typography-components-input-placeholder` | 16px | Placeholder / valor (16px evita zoom en iOS) |
| `--typography-components-pdp-price-now-desktop` | 24px | Precio actual (desktop) |
| `--typography-components-pdp-price-now-mobile` | 20px | Precio actual (móvil) |
| `--typography-components-badge-count` | 10px | Contador en badge |

La escala web es compacta. Para **presentaciones** usa la escala ampliada de `formats.md`.

## Espaciado

Base de 4px: `--spacing-{0,2,4,8,12,16,21,24,28,32,40,48,56,64,72,80,88,96,112,128,144,160,176}`.

- Dentro de componentes: 4, 8, 12.
- Entre elementos de un bloque: 16, 24.
- Entre secciones: 32, 48, 64.
- `--spacing-21` existe en el export; no usarlo en diseños nuevos.

## Radios

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-xxs` | 4px | Botones, inputs, cards, alertas, filtros |
| `--radius-xs` | 8px | OTP, chips de selección |
| `--radius-xl` | 16px | Contenedores grandes, modales, banners |

`--radius-xs` (8px) es mayor que `--radius-sm` (4px). Así viene en el export; respétalo.

## Sombras

El export no define tokens de sombra genéricos. Usar:

- Card: `0 1px 3px rgba(68,68,68,.12)`; hover: `0 4px 12px rgba(68,68,68,.16)`.
- Alertas: `0 2px 8px var(--feedback-*-shadow)` (tono del estado).
- Foco: `0 0 0 3px var(--alkosto-primary-a40)` en botones, borde `--components-input-border-focused` en inputs.

## Layout

Recomendaciones del kit; no vienen del export de tokens. Si UX define otra cosa, manda UX.

- Contenedor máximo 1280px, gutter 16px en móvil y 24px en desktop.
- Grilla de productos: 2 columnas móvil, 3 tablet, 4–5 desktop; gap 16px.
- Fondo de página blanco; secciones alternas en `--alkosto-gray-100`.
- Footer: fondo negro `#000000`, texto blanco.
