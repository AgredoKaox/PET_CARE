# Decisiones del proyecto

1. Se duplicará el HTML compartido en cada página, sin includes (opción A de la especificación).
2. Se usarán scripts clásicos, sin módulos ES, para que el prototipo pueda abrirse con doble clic.

## Navegación

- `index.html` funciona como índice de entrada a las pantallas agrupadas por rol.
- Cada pantalla tiene navegación HTML directa a sus páginas relacionadas y un enlace de regreso al índice.
- Los fragmentos HTML de `components/` son plantillas de referencia; se mantiene el HTML duplicado para que las páginas funcionen al abrirlas directamente.

## Interactividad

- Se usarán scripts clásicos y objetos globales bajo `window.PetCare`.
- La navegación, pestañas, modales y acciones de demostración se organizan en `assets/js/components/menu.js`, `tabs.js`, `modal.js`, `auth-flows.js` y `prototype-actions.js`.
- No se usarán módulos ES para permitir abrir el prototipo con doble clic.

## Responsive

- Se adopta enfoque mobile first.
- Los breakpoints documentados son 576 px, 768 px, 1024 px y 1280 px.
- El sidebar se oculta en móvil, se colapsa a iconos en tablet y se fija en 240 px en escritorio.

## Refactor visual de las pantallas internas

- Se reutilizan las 17 rutas existentes y se mantiene el HTML compartido duplicado en cada página; la navegación lateral se ajusta al rol y a las rutas disponibles.
- [SUPUESTO] Las cifras y algunos registros que no se alcanzan a leer con claridad en el PDF se completan con datos demostrativos coherentes con el prototipo.
- Los formularios y acciones de gestión muestran validación y cambios visuales de demostración, pero no guardan datos; los filtros siguen siendo solo visuales y no consultan información.
- Los enlaces legales y de soporte llevan a `pages/informacion.html`, donde se informa que el contenido aún está pendiente sin inventar términos legales.

## Datos de ejemplo

- Se usan Juan Agredo como dueño principal y Luna como mascota principal para mantener coherencia.

## Pantallas de acceso

- [SUPUESTO] Se reutiliza el token `--color-warning-50` como extremo amarillo pálido del degradado de acceso porque la especificación de tokens no define un color de fondo amarillo adicional.
- [SUPUESTO] El medidor visual considera baja una contraseña vacía o con pocos caracteres; media requiere al menos 8 caracteres y 2 tipos; alta requiere al menos 12 caracteres y 3 tipos (minúsculas, mayúsculas, números o símbolos). La pantalla inicia con nivel medio para coincidir con la referencia; se recalcula al escribir.
- [SUPUESTO] La casilla de términos de registro inicia marcada para reproducir el estado que muestra el PDF; confirmar este comportamiento antes de usarlo en un producto real.
- Los campos de contraseña permanecen vacíos aunque el PDF muestre caracteres enmascarados, para no incluir una contraseña ficticia en el documento o en el autocompletado.
- [PENDIENTE] El PDF representa Google con un círculo y una X; en la interfaz se usa el logotipo oficial multicolor de Google hasta confirmar si la X era intencional.
- [PENDIENTE] `pages/informacion.html` solo anuncia que los contenidos legales y de soporte están pendientes; no sustituye los documentos finales.
- [PENDIENTE] `pages/recuperar-contrasena.html` es demostrativa: valida el correo, pero no envía instrucciones hasta integrar un backend.

## Acciones demostrativas

- Los formularios de gestión, las acciones sobre citas, dosis, notificaciones y solicitudes muestran cambios solo en la pantalla actual; el estado no persiste al recargar y no se usa `localStorage` ni `sessionStorage`.
- La pantalla `pages/recuperar-contrasena.html` valida el correo, pero explica que no se envía un mensaje porque el prototipo no tiene backend.
