# 06 — Responsive y accesibilidad

## 1. Enfoque mobile first

Los estilos base son para móvil (≤ 575px). Las capas se añaden con `min-width`.

### Breakpoints [SUPUESTO]

| Token | Valor | Dispositivo objetivo |
|---|---|---|
| `--bp-sm` | `576px` | Móvil horizontal |
| `--bp-md` | `768px` | Tablet vertical |
| `--bp-lg` | `1024px` | Tablet horizontal / escritorio pequeño |
| `--bp-xl` | `1280px` | Escritorio |

> Las variables CSS no funcionan dentro de `@media`. Escribir los valores literales en las media queries y documentarlos en `tokens.css` como comentario.

```css
/* Móvil: estilos base */
@media (min-width: 576px)  { /* móvil horizontal */ }
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1024px) { /* escritorio: sidebar fijo visible */ }
@media (min-width: 1280px) { /* escritorio amplio: 4 columnas de indicadores */ }
```

### Comportamiento por zona

| Zona | Móvil (< 768) | Tablet (768–1023) | Escritorio (≥ 1024) |
|---|---|---|---|
| Sidebar | Oculto, panel superpuesto | Solo iconos (64px) | Fijo, 240px |
| Header | Avatar + menú + selector de rol en fila propia | Breadcrumb y selector visibles | Todo en una fila |
| Tarjetas de indicadores | 1 columna | 2 columnas | 4 columnas |
| Dashboard (gráfico + alertas) | Apilados | Apilados | 2/3 y 1/3 |
| Calendario | Vista día, detalle debajo | Vista semana con scroll horizontal | Vista semana + panel de detalle a la derecha |
| Tablas | Tarjetas apiladas (`table--stacked`) | Scroll horizontal | Tabla completa |
| Formularios de acceso | Tarjeta a ancho completo con margen 16px | Tarjeta 440px | Tarjeta 440px centrada |
| Pasos de solicitud | Vertical | Horizontal | Horizontal |
| Modales | Hoja inferior (`modal--sheet`) | Centrado | Centrado |

### Reglas de layout
- Usar `max-width: 100%` en imágenes y `min-width: 0` en hijos de Flexbox que contienen texto largo, para evitar desbordes.
- Nunca fijar anchos en píxeles para contenido de texto; usar `ch`, `%` o `max-width`.
- Usar `clamp()` para títulos fluidos, por ejemplo `font-size: clamp(1.5rem, 2vw + 1rem, 2rem)`.
- La página no debe tener scroll horizontal en ningún breakpoint. Verificar con 320px de ancho.

## 2. Contraste (WCAG 2.2 AA)

| Combinación | Mínimo | Solución en el prototipo |
|---|---|---|
| Texto normal sobre fondo | 4.5:1 | Texto `--color-text` (#1F2933) sobre blanco: alto contraste |
| Texto secundario | 4.5:1 | `--color-text-muted` (#5F6B7A) |
| Texto blanco sobre botón verde | 4.5:1 | Botón con `--color-primary-700` (#2E7D32), no con #4CAF50 |
| Texto sobre fondo de alerta amarilla | 4.5:1 | `--color-warning-text` (#92400E) |
| Enlace naranja sobre blanco | 4.5:1 | No usar naranja claro para texto; usar `--color-warning-text` o verde oscuro |
| Iconos y bordes de componentes | 3:1 | Bordes de inputs: `--color-border` no basta; usar `#8A94A3` para el borde de campos activos o de foco |

Verificar cada combinación con una herramienta (Lighthouse, WebAIM Contrast Checker) antes del commit de cierre.

**Regla**: nunca comunicar estado solo con color. Cada badge incluye texto, y cada alerta incluye icono o texto.

## 3. Foco visible

- Todo elemento interactivo debe mostrar `:focus-visible` con `box-shadow: var(--focus-ring)`.
- Prohibido `outline: none` sin reemplazo.
- El orden de tabulación debe seguir el orden visual.

```css
:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
  border-radius: var(--radius-sm);
}
```

## 4. Semántica y ARIA

- Una sola `<h1>` por página. Los títulos de tarjetas son `<h2>` o `<h3>` según jerarquía.
- Landmarks: `<header>`, `<nav aria-label="...">`, `<main id="contenido">`, `<aside>` para el sidebar, `<footer>`.
- Iconos decorativos con `aria-hidden="true"`. Iconos con función, con `aria-label` en el botón.
- Formularios: cada `<input>` con `<label>` asociado (`for`/`id`). Mensajes de ayuda con `aria-describedby`. Campos obligatorios con `required` y asterisco visible con texto "obligatorio" para lectores de pantalla.
- Imágenes: `alt` descriptivo. Las fotos de mascotas describen la mascota ("Golden Retriever dorada llamada Luna"). Avatares decorativos con `alt=""`.
- Tablas: `<caption>`, `<th scope="col">` y `<th scope="row">` cuando aplique.
- Idioma: `<html lang="es-CO">`.
- Enlace de salto: `<a class="skip-link" href="#contenido">Saltar al contenido</a>` visible solo con foco.

## 5. Movimiento y preferencias del usuario

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- Tamaño de texto: usar `rem` para que respete la configuración del navegador.
- Objetivos táctiles: mínimo 44 × 44 px en móvil para botones, enlaces del menú e iconos.

## 6. Imágenes y multimedia

- Todas las imágenes con `width` y `height` explícitos y `loading="lazy"` si están fuera de pantalla.
- Formatos: SVG para logo e iconos; JPG o WebP para fotos.
- Placeholders en `assets/images/` con nombres descriptivos: `pet-luna-golden.jpg`, `pet-tobias-persa.jpg`, `pet-pelusa-angora.jpg`, `avatar-veterinario.jpg`.

## 7. Lista de verificación final

- [ ] Sin scroll horizontal en 320px, 768px, 1024px y 1440px.
- [ ] Lighthouse accesibilidad ≥ 95.
- [ ] Recorrido completo solo con teclado en las 17 pantallas.
- [ ] Lector de pantalla (NVDA o VoiceOver) anuncia menú, tabs y modal correctamente.
- [ ] Zoom al 200 % sin pérdida de contenido.
- [ ] Contraste verificado en las combinaciones de la tabla.
