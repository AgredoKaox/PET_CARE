# Decisiones del proyecto

1. Se duplicará el HTML compartido en cada página, sin includes (opción A de la especificación).
2. Se usarán scripts clásicos, sin módulos ES, para que el prototipo pueda abrirse con doble clic.

## Navegación

- `index.html` funciona como índice de entrada a las pantallas agrupadas por rol.
- Cada pantalla tiene navegación HTML directa a sus páginas relacionadas y un enlace de regreso al índice.
- Los fragmentos HTML de `components/` son plantillas de referencia; se mantiene el HTML duplicado para que las páginas funcionen al abrirlas directamente.

## Interactividad

- Se usarán scripts clásicos y objetos globales bajo `window.PetCare`.
- Los comportamientos se organizarán en `assets/js/components/menu.js`, `tabs.js` y `modal.js`.
- No se usarán módulos ES para permitir abrir el prototipo con doble clic.

## Responsive

- Se adopta enfoque mobile first.
- Los breakpoints documentados son 576 px, 768 px, 1024 px y 1280 px.
- El sidebar se oculta en móvil, se colapsa a iconos en tablet y se fija en 240 px en escritorio.

## Datos de ejemplo

- Se usan Juan Agredo como dueño principal y Luna como mascota principal para mantener coherencia.
