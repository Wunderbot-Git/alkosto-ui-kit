# Componentes

Todos los snippets asumen que `alkosto-tokens.css` está cargado. Los colores salen de los
tokens semánticos del export (`--components-*`, `--feedback-*`, `--special-*`); las medidas
que el export no define están marcadas como recomendación.

## Base

```css
*, *::before, *::after { box-sizing: border-box; }
body {
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--typography-body-main);
  line-height: 1.45;
  color: var(--alkosto-gray-900);
  background: var(--alkosto-gray-0);
}
h1, h2, h3 { color: var(--alkosto-secondary-500); line-height: 1.2; margin: 0 0 var(--spacing-12); }
h1 { font-size: var(--typography-heading-h1); }
h2 { font-size: var(--typography-heading-h2); }
h3 { font-size: var(--typography-heading-h3); }
.alk-icon { flex-shrink: 0; vertical-align: middle; }
```

## Botones

Primario = naranja relleno. Secundario = contorno naranja que se rellena (700) en hover.
Alto 48px, padding horizontal 24px (recomendación).

```html
<button class="alk-btn alk-btn--primary">Agregar al carrito</button>
<button class="alk-btn alk-btn--secondary">Comprar ahora</button>
<button class="alk-btn alk-btn--primary" disabled>No disponible</button>
```

```css
.alk-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--spacing-8);
  min-height: 48px; padding: 0 var(--spacing-24);
  font: 700 var(--typography-components-button)/1 var(--font-family);
  border: 1px solid; border-radius: var(--radius-sm); cursor: pointer;
  transition: background-color .15s, border-color .15s, color .15s;
}
.alk-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--alkosto-primary-a40); }
.alk-btn--primary {
  background: var(--components-button-primary-surface-default);
  border-color: var(--components-button-primary-border-default);
  color: var(--components-button-primary-text-default);
}
.alk-btn--primary:hover {
  background: var(--components-button-primary-surface-hover);
  border-color: var(--components-button-primary-border-hover);
}
.alk-btn--secondary {
  background: var(--components-button-secondary-surface-default);
  border-color: var(--components-button-secondary-border-default);
  color: var(--components-button-secondary-text-default);
}
.alk-btn--secondary:hover {
  background: var(--components-button-secondary-surface-hover);
  border-color: var(--components-button-secondary-border-hover);
  color: var(--components-button-secondary-text-hover);
}
.alk-btn:disabled {
  background: var(--components-button-primary-surface-disabled);
  border-color: var(--components-button-primary-border-disabled);
  color: var(--components-button-primary-text-disabled);
  cursor: not-allowed;
}
```

## Links

```css
.alk-link { color: var(--components-link-default); text-decoration: underline; text-underline-offset: 2px; }
.alk-link:hover { color: var(--components-link-hover); }
.alk-link[aria-disabled="true"] { color: var(--components-link-disabled); pointer-events: none; }
```

## Input

Label 12px arriba, valor 16px, borde gris 200, foco azul 500, error rojo 500.

```html
<label class="alk-field">
  <span class="alk-field__label">Correo electrónico</span>
  <input class="alk-input" type="email" placeholder="nombre@correo.com">
  <span class="alk-field__help">Te enviaremos la confirmación de tu pedido.</span>
</label>
<label class="alk-field alk-field--error">
  <span class="alk-field__label">Celular</span>
  <input class="alk-input" value="300 12" aria-invalid="true">
  <span class="alk-field__help">Ingresa un número de 10 dígitos.</span>
</label>
```

```css
.alk-field { display: flex; flex-direction: column; gap: var(--components-input-gap-label); }
.alk-field__label { font-size: var(--typography-components-input-label); color: var(--components-input-text-label); font-weight: 700; }
.alk-input {
  font: 400 var(--typography-components-input-placeholder) var(--font-family);
  color: var(--alkosto-gray-900);
  padding: var(--components-input-gap-padding-y) var(--components-input-gap-padding-x);
  border: 1px solid var(--components-input-border-default);
  border-radius: var(--components-input-gap-radius);
  background: var(--components-input-bg-base);
}
.alk-input::placeholder { color: var(--components-input-help-default); }
.alk-input:focus { outline: none; border-color: var(--components-input-border-focused); }
.alk-input:disabled { background: var(--components-input-bg-disabled); }
.alk-field__help { font-size: var(--typography-body-small); color: var(--components-input-help-text); }
.alk-field--error .alk-input { border-color: var(--components-input-border-error); }
.alk-field--error .alk-field__help { color: var(--components-input-help-error); }
```

## Alertas / feedback

Fondo blanco, borde izquierdo de 4px en el color del estado, sombra del tono. Ícono a la
izquierda en el color base. Info usa fondo azul 50.

```html
<div class="alk-alert alk-alert--success" role="status">
  <!-- ícono: python3 scripts/icon.py check --size 20 -->
  <div><strong>¡Listo!</strong> Tu pedido fue confirmado.</div>
</div>
```

```css
.alk-alert {
  display: flex; gap: var(--spacing-12); align-items: flex-start;
  padding: var(--spacing-12) var(--spacing-16);
  border-left: 4px solid var(--_base); border-radius: var(--radius-sm);
  background: var(--_bg); color: var(--_text);
  box-shadow: 0 2px 8px var(--_shadow);
}
.alk-alert .alk-icon { color: var(--_base); }
.alk-alert--success { --_base: var(--feedback-success-base); --_bg: var(--feedback-success-bg); --_shadow: var(--feedback-success-shadow); --_text: var(--feedback-success-text); }
.alk-alert--alert   { --_base: var(--feedback-alert-base);   --_bg: var(--feedback-alert-bg);   --_shadow: var(--feedback-alert-shadow);   --_text: var(--feedback-alert-text); }
.alk-alert--error   { --_base: var(--feedback-error-base);   --_bg: var(--feedback-error-bg);   --_shadow: var(--feedback-error-shadow);   --_text: var(--feedback-error-text); }
.alk-alert--info    { --_base: var(--feedback-info-base);    --_bg: var(--feedback-info-bg);    --_shadow: var(--feedback-info-shadow);    --_text: var(--alkosto-gray-900); }
```

## Badges de e-commerce

```html
<span class="alk-badge alk-badge--sameday">Entrega el mismo día</span>
<span class="alk-badge alk-badge--notaxes">Sin IVA</span>
<span class="alk-badge alk-badge--discount">-25%</span>
<span class="alk-badge alk-badge--count">3</span>
```

```css
.alk-badge {
  display: inline-flex; align-items: center; gap: var(--spacing-4);
  padding: var(--spacing-2) var(--spacing-8);
  font-size: var(--typography-body-small); font-weight: 700; line-height: 1.4;
  border-radius: var(--radius-sm);
}
.alk-badge--sameday  { color: var(--special-samedaydelivery-base); background: var(--special-samedaydelivery-bg); }
.alk-badge--notaxes  { color: var(--special-notaxes-base); background: var(--special-notaxes-bg); }
.alk-badge--discount { color: var(--alkosto-gray-0); background: var(--alkosto-primary-500); }
.alk-badge--promo    { color: var(--alkosto-gray-0); background: var(--special-others-violet); }
.alk-badge--count {
  min-width: 18px; height: 18px; padding: 0 var(--spacing-4); justify-content: center;
  font-size: var(--typography-components-badge-count); border-radius: 999px;
  color: var(--alkosto-gray-0); background: var(--alkosto-primary-500);
}
```

## Precio

Precio actual grande en gris 900 y negrita; precio anterior tachado en gris 500; ahorro en naranja.
Formato colombiano: `$1.299.900`.

```html
<div class="alk-price">
  <span class="alk-price__before">$1.599.900</span>
  <span class="alk-price__now">$1.299.900</span>
  <span class="alk-price__save">Ahorras $300.000</span>
</div>
```

```css
.alk-price { display: flex; flex-direction: column; gap: var(--spacing-2); }
.alk-price__before { font-size: var(--typography-body-small); color: var(--alkosto-gray-500); text-decoration: line-through; }
.alk-price__now { font-size: var(--typography-components-pdp-price-now-mobile); font-weight: 700; color: var(--alkosto-gray-900); }
@media (min-width: 768px) { .alk-price__now { font-size: var(--typography-components-pdp-price-now-desktop); } }
.alk-price__save { font-size: var(--typography-body-small); font-weight: 700; color: var(--alkosto-primary-500); }
```

## Calificación (estrellas)

Íconos oficiales `estrella-relleno` y `estrella`; color `--components-star-base`, conteo en `--components-star-text`.

```html
<div class="alk-rating" aria-label="4 de 5 estrellas">
  <!-- 4 × estrella-relleno + 1 × estrella, 16px, color via CSS -->
  <span class="alk-rating__count">(128)</span>
</div>
```

```css
.alk-rating { display: inline-flex; align-items: center; gap: 2px; color: var(--components-star-base); }
.alk-rating__count { margin-left: var(--spacing-4); font-size: var(--typography-body-small); color: var(--components-star-text); }
```

## Card de producto

```html
<article class="alk-card">
  <span class="alk-badge alk-badge--discount">-19%</span>
  <img src="…" alt="Televisor 55 pulgadas 4K">
  <h3 class="alk-card__title">Televisor SAMSUNG 55" UHD 4K Smart TV</h3>
  <!-- .alk-rating -->
  <!-- .alk-price -->
  <span class="alk-badge alk-badge--sameday">Entrega el mismo día</span>
  <button class="alk-btn alk-btn--primary">Agregar al carrito</button>
</article>
```

```css
.alk-card {
  display: flex; flex-direction: column; gap: var(--spacing-8);
  padding: var(--spacing-16); background: var(--alkosto-gray-0);
  border: 1px solid var(--alkosto-gray-200); border-radius: var(--radius-sm);
  transition: box-shadow .15s;
}
.alk-card:hover { box-shadow: 0 4px 12px rgba(68,68,68,.16); }
.alk-card img { width: 100%; aspect-ratio: 1; object-fit: contain; }
.alk-card__title {
  font-size: var(--typography-body-main); font-weight: 400; color: var(--alkosto-gray-900);
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
```

## Botón de lista (menú, ayuda, mi cuenta)

Ícono oficial a la izquierda en azul, texto gris 900, chevron naranja (Lucide `chevron-right`).

```css
.alk-list-btn {
  display: flex; align-items: center; gap: var(--spacing-12); width: 100%;
  padding: var(--spacing-16); background: none; border: 0; border-bottom: 1px solid var(--alkosto-gray-200);
  font: 400 var(--typography-body-main) var(--font-family); color: var(--components-button-list-text);
  text-align: left; cursor: pointer;
}
.alk-list-btn .alk-icon { color: var(--components-button-list-icon); }
.alk-list-btn .chevron { margin-left: auto; color: var(--components-button-list-chevron); }
```

## OTP

Casillas 48×56, radio 8px, borde gris 200; activa/llena azul 500; error rojo; éxito verde 500.

```css
.alk-otp { display: flex; gap: var(--components-otp-gap); }
.alk-otp input {
  width: 48px; height: 56px; text-align: center;
  font: 700 20px var(--font-family); color: var(--components-otp-text-fill);
  border: 1px solid var(--components-otp-border-default); border-radius: var(--components-otp-border-radius);
}
.alk-otp input:focus, .alk-otp input:not(:placeholder-shown) { outline: none; border-color: var(--components-otp-border-fill); }
.alk-otp--error input { border-color: var(--components-otp-border-error); }
.alk-otp--success input { border-color: var(--components-otp-border-succeed); }
```

## Modal

Overlay `--special-overlay-bg`; panel blanco, radio 16px, título azul.

```css
.alk-overlay { position: fixed; inset: 0; background: var(--special-overlay-bg); display: grid; place-items: center; padding: var(--spacing-16); }
.alk-modal { width: min(480px, 100%); padding: var(--spacing-24); background: var(--alkosto-gray-0); border-radius: var(--radius-xl); }
```

## Tooltip

Globo gris 900 con texto blanco; disparador circular naranja con ícono blanco.

```css
.alk-tooltip { background: var(--components-input-tooltip-baloon); color: var(--components-input-tooltip-baloon-text); padding: var(--spacing-8) var(--spacing-12); border-radius: var(--radius-sm); font-size: var(--typography-body-small); }
```
