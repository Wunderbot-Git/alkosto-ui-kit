# Íconos

## Qué set usar

| Caso | Set |
|---|---|
| Categorías, productos, servicios, pagos, envíos, cuenta, tiendas, redes sociales | **Oficial Alkosto** (`ux-alkosto/icons`, MIT, 621 íconos) |
| Flechas, chevrons, cerrar, check, más/menos, menú, estados de UI genéricos | **Lucide** (lucide.dev), trazo 2px |

El set oficial también trae flechas y cierre (`arrow-next`, `close`, `check`…). Úsalos si la
pieza imita alkosto.com; Lucide queda como alternativa para UI de herramientas internas.

## Cómo insertarlos

**Opción A — SVG inline (recomendado, sin dependencias):**

```bash
python3 scripts/icon.py carrito garantia --size 24
python3 scripts/icon.py --search tarjeta          # buscar por nombre
python3 scripts/icon.py carrito garantia --symbols # sprite <symbol id="alk-carrito">
```

Los SVG usan `fill="currentColor"`: el color se hereda del `color` CSS del contenedor.
Íconos decorativos llevan `aria-hidden="true"`; si el ícono es el único contenido de un botón,
agrega `--title "Agregar al carrito"` o un `aria-label` en el botón.

**Opción B — fuente web desde el CDN oficial** (cuando la página puede cargar recursos externos):

```html
<link href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css" rel="stylesheet">
<i class="alk-icon-carrito" aria-hidden="true"></i>
```

Clase = `alk-icon-` + nombre. En documentos Office o PDF usa siempre SVG.

## Tamaños y color

- 16px en línea con texto pequeño, 20px en alertas y badges, 24px por defecto, 32–48px en
  tarjetas de acceso rápido.
- Color por defecto azul 500; naranja 500 cuando el ícono es la acción (lupa, contraseña,
  chevron de lista); blanco sobre fondos de color. Nunca degradados ni dos colores.

## Nombres más usados

| Tema | Nombres |
|---|---|
| Compra | `carrito`, `carrito-plus`, `wishlist`, `wishlist-full`, `compare`, `offers`, `descuento`, `precio`, `porcentaje` |
| Pedido y envío | `rastrear-orden`, `truck`, `en-transito`, `pedido-entregado`, `same-day`, `envio-gratis`, `moto-domicilio`, `recoge-tienda`, `my-orders` |
| Pagos | `credit-card`, `tarjeta-alkosto`, `pse`, `pago-efectivo`, `pago-seguro`, `addi`, `davivienda`, `credito-20`, `bono-regalo` |
| Postventa | `garantia`, `garantia-extendida`, `cambio-devoluciones`, `devoluciones`, `reparacion`, `instalaciones`, `factura` |
| Cuenta | `user`, `person-account`, `inicio-sesion`, `cerrar-sesion`, `lock`, `show-password`, `hide-password` |
| Contacto | `customer-contact`, `phone-contact`, `chat`, `chat-agent`, `whatsapp`, `email`, `nuestras-tiendas`, `pin-generico` |
| Estado | `check`, `warning`, `i-warning`, `informacion`, `pregunta-2`, `estrella`, `estrella-relleno` |
| Categorías | `televisores`, `celular`, `portatiles`, `computador`, `lavadora`, `nevecon`, `cocina`, `videojuegos`, `audio`, `deportes`, `moto`, `bebe`, `mascota` |
| IA | `ia`, `chat-agent`, `asistente-voz` |

Lista completa: `icon-names.txt`. Catálogo visual: https://ux-alkosto.github.io/icons/
