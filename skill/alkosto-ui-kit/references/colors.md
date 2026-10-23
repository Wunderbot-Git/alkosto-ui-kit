# Colores

Fuente: `alkosto-tokens.css` (export oficial del UI kit). Las variables CSS van entre
backticks; para Office y gráficos usa el hex.

## Primario — naranja Alkosto

| Paso | Variable | Hex | Uso |
|---|---|---|---|
| 50 / 100 | `--alkosto-primary-50` | `#FDEEE9` | Fondos suaves, banners, hover de filas |
| 200 | `--alkosto-primary-200` | `#F9CEBF` | Tintes, ilustraciones |
| 300 | `--alkosto-primary-300` | `#F5AD92` | Tinte medio, serie secundaria en gráficos |
| 400 | `--alkosto-primary-400` | `#F0845B` | |
| **500** | `--alkosto-primary-500` | `#EB5B25` | **Color de marca**, botón primario, links |
| 600 | `--alkosto-primary-600` | `#D4511E` | |
| 700 | `--alkosto-primary-700` | `#B14B25` | Hover/pressed del primario |
| 800 | `--alkosto-primary-800` | `#883515` | |
| 900 | `--alkosto-primary-900` | `#66250D` | |
| 1000 | `--alkosto-primary-1000` | `#4A1A08` | |
| a40 | `--alkosto-primary-a40` | `rgba(235,91,37,.4)` | Anillo de foco |

## Secundario — azul Alkosto

| Paso | Variable | Hex | Uso |
|---|---|---|---|
| 50 | `--alkosto-secondary-50` | `#EDF1F6` | Fondo info, panel suave |
| 100 | `--alkosto-secondary-100` | `#E2E9F1` | Sombra de alertas éxito/info |
| 200 | `--alkosto-secondary-200` | `#ADC5E0` | |
| 300 | `--alkosto-secondary-300` | `#709AC6` | Serie en gráficos |
| 400 | `--alkosto-secondary-400` | `#336EAC` | |
| **500** | `--alkosto-secondary-500` | `#004797` | **Azul de marca**, encabezados, info, éxito, foco de input |
| 600 | `--alkosto-secondary-600` | `#003E84` | |
| 700 | `--alkosto-secondary-700` | `#06376F` | Hover, bloques oscuros |
| 800 | `--alkosto-secondary-800` | `#052B57` | |
| 900 | `--alkosto-secondary-900` | `#042247` | |
| 1000 | `--alkosto-secondary-1000` | `#02162E` | |
| a40 | `--alkosto-secondary-a40` | `rgba(0,71,151,.4)` | |

## Grises

| Variable | Hex | Uso |
|---|---|---|
| `--alkosto-gray-0` | `#FFFFFF` | Fondo de página, texto sobre color |
| `--alkosto-gray-50` | `#F8F8F8` | Fondo menú móvil |
| `--alkosto-gray-100` | `#F5F5F5` | Fondo de sección, deshabilitado |
| `--alkosto-gray-200` | `#E0E0E0` | Bordes, divisores |
| `--alkosto-gray-400` | `#919BA6` | Gris azulado (íconos secundarios) |
| `--alkosto-gray-500` | `#959595` | Placeholder, texto deshabilitado |
| `--alkosto-gray-700` | `#5C5C5C` | Texto secundario |
| `--alkosto-gray-900` | `#444444` | Texto principal |
| `--alkosto-gray-1000` | `#343434` | Texto de máximo contraste |
| `--alkosto-gray-900-a40` | `rgba(68,68,68,.4)` | Overlay de modal |

## Extendidos

| Variable | Hex | Uso |
|---|---|---|
| `--alkosto-extended-green-50` | `#F3FFF7` | Fondo "entrega el mismo día" |
| `--alkosto-extended-green-400` | `#20BD5B` | Verde de acento |
| `--alkosto-extended-green-500` | `#1DA04E` | Check de input, disponible |
| `--alkosto-extended-green-600` | `#217A42` | Texto "entrega el mismo día" |
| `--alkosto-extended-red-50` | `#FFF2F1` | Fondo "sin IVA" |
| `--alkosto-extended-red-100` | `#F7E5E5` | Fondo de error suave |
| `--alkosto-extended-red-500` | `#DD171B` | Error |
| `--alkosto-extended-red-700` | `#9D1C1F` | Texto "sin IVA" |
| `--alkosto-extended-yellow-50` | `#FBF1D1` | Fondo de advertencia suave |
| `--alkosto-extended-yellow-300` | `#FED323` | Estrella de calificación |
| `--alkosto-extended-yellow-500` | `#EDBE04` | Estrella oscura, borde OTP warning |
| `--alkosto-extended-yellow-600` | `#ECBA18` | Alerta / advertencia |
| `--alkosto-extended-violet-50` | `#F5EFFF` | Fondo promo especial |
| `--alkosto-extended-violet-500` | `#9736FF` | Acento promo especial |
| `--alkosto-extended-violet-700` | `#6613CC` | |

## Tokens semánticos (usar estos en componentes)

| Grupo | Variables |
|---|---|
| Feedback | `--feedback-{success,alert,error,info,notification}-{base,bg,shadow,text}` |
| Botones | `--components-button-{primary,secondary}-{surface,border,text}-{default,hover,focussed,loading,disabled}` |
| Links | `--components-link-{default,hover,disabled,active,white}` |
| Inputs | `--components-input-*` (bordes, fondos, textos, acciones, gaps, tooltip) |
| OTP | `--components-otp-*` |
| Lista con botón | `--components-button-list-{icon,chevron,text}` |
| Estrellas | `--components-star-{base,dark,text}` |
| Especiales | `--special-notaxes-*`, `--special-samedaydelivery-*`, `--special-others-{violet,davivienda}`, `--special-overlay-bg` |

## Paleta para gráficos

Orden para series categóricas (máximo 6; si hay más, agrupa en "Otros" con gris 500):

1. `#004797` azul 500
2. `#EB5B25` naranja 500
3. `#709AC6` azul 300
4. `#F5AD92` naranja 300
5. `#06376F` azul 700
6. `#959595` gris 500

- Una sola serie: azul 500. Destacar un valor: naranja 500 y el resto en gris 200/500.
- Secuencial: escala azul 50 → 900. Divergente: naranja 700 ← gris 100 → azul 700.
- Positivo/negativo en KPIs: azul 500 / rojo 500 (no verde/rojo).
- Ejes y grillas: gris 200; etiquetas: gris 700.

## Nota de consistencia

El skill anterior de colores usaba `#E20613` para Davivienda. El export de tokens lo mapea a
`--alkosto-extended-red-500` (`#DD171B`); este kit sigue al export. Confirmar con UX si el
logo de Davivienda debe ir en su rojo propio.
