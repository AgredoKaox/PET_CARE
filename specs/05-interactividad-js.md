# 05 — Interactividad (JavaScript ligero)

## Alcance
Comportamientos de interfaz en JavaScript vanilla, sin dependencias: **menú de navegación** (incluido el móvil), **tabs**, **modales** y, como ampliación para las pantallas de acceso, **visibilidad y medidor visual de seguridad de contraseñas**. Cada comportamiento vive en `assets/js/components/` y se inicializa desde `assets/js/main.js`.

Restricciones:
- No hay lógica de negocio ni datos dinámicos.
- No se usa `localStorage`.
- Los componentes deben degradar bien: si JS falla, la página sigue siendo legible.
- Cada módulo exporta una función `init()` y se inicializa solo si el elemento existe en la página.
- La visibilidad de contraseña solo cambia el tipo del campo y actualiza `aria-pressed` y `aria-label`; no valida credenciales.
- El medidor de registro es informativo y visual; estima tres niveles según longitud y tipos de caracteres, sin bloquear el formulario ni aplicar reglas de autenticación.

## Patrón de inicialización (`main.js`)

```js
import { initMenu } from './components/menu.js';
import { initTabs } from './components/tabs.js';
import { initModal } from './components/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initTabs();
  initModal();
});
```

> Si se usan módulos ES (`type="module"`), el prototipo debe servirse desde un servidor local. Si se quiere abrir con doble clic, usar scripts clásicos sin `import` y encapsular cada módulo en una IIFE o un objeto global (`window.PetCare = {...}`). **Decidir antes de empezar** y registrarlo en `docs/decisiones.md`.

---

## 5.1 Menú de navegación (`menu.js`)

### Comportamiento
- En móvil, `header__menu-toggle` abre y cierra `sidebar`.
- Al abrir: el sidebar recibe la clase `sidebar--open`, el botón cambia `aria-expanded="true"`, el foco se mueve al primer enlace y aparece un fondo semitransparente (`sidebar__backdrop`).
- Cierre con botón, con tecla `Escape`, o al hacer clic en el fondo. Al cerrar, el foco regresa al botón de menú.
- Mientras el menú móvil está abierto, el `body` no hace scroll (`body--menu-open`).
- En escritorio, el sidebar siempre visible; el botón de menú queda oculto y el JS no altera el estado.
- Los roles cambian con `header__role-switch`: al pulsar un rol, se actualiza `aria-pressed` y la clase `--active`. Es solo visual (no cambia contenido).

### Accesibilidad
- El `sidebar` tiene `id="sidebar"` y el botón `aria-controls="sidebar"`.
- `aria-current="page"` en el enlace de la página actual.
- En móvil, cuando el sidebar está cerrado debe quedar fuera del orden de tabulación (`inert` o `visibility: hidden` en CSS).
- Atrapar el foco dentro del sidebar abierto (focus trap) hasta cerrarlo.

### Estructura de la función
```js
export function initMenu() {
  const toggle = document.querySelector('.header__menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (!toggle || !sidebar) return;
  // abrir/cerrar, Escape, focus trap, backdrop
}
```

---

## 5.2 Tabs (`tabs.js`)

### Comportamiento
- Un contenedor `.tabs` con una lista (`.tabs__list`, `role="tablist"`) y paneles (`.tabs__panel`, `role="tabpanel"`).
- Solo la pestaña activa tiene `tabindex="0"`; el resto `-1`.
- Mostrar un panel a la vez: los demás reciben `hidden`.
- Navegación con teclado: `←` y `→` mueven entre pestañas (con ciclo), `Home` va a la primera y `End` a la última. `Enter` o `Espacio` activan la pestaña si el foco llega sin activar.
- Cada pestaña controla un panel mediante `aria-controls` y `aria-labelledby`.

### Marcado de referencia
```html
<div class="tabs" data-tabs>
  <div class="tabs__list" role="tablist" aria-label="Secciones de configuración">
    <button class="tabs__tab tabs__tab--active" role="tab" id="tab-datos"
            aria-selected="true" aria-controls="panel-datos" tabindex="0">Datos personales</button>
    <button class="tabs__tab" role="tab" id="tab-seguridad"
            aria-selected="false" aria-controls="panel-seguridad" tabindex="-1">Seguridad</button>
  </div>
  <div class="tabs__panel" role="tabpanel" id="panel-datos" aria-labelledby="tab-datos">...</div>
  <div class="tabs__panel" role="tabpanel" id="panel-seguridad" aria-labelledby="tab-seguridad" hidden>...</div>
</div>
```

### Estructura de la función
```js
export function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(setupTabs);
}
```

### Comportamiento especial
- **Alertas (pantalla 14)**: las pestañas "Todas / No leídas / Leídas" filtran la lista. Es un filtro visual con clases `hidden` sobre elementos de ejemplo; no hay datos reales.

---

## 5.3 Modales (`modal.js`)

### Comportamiento
- Abrir: un botón con `data-modal-open="id-del-modal"` muestra el diálogo.
- Cerrar: botón `modal__close`, tecla `Escape`, o clic en el overlay.
- Al abrir: guardar el elemento que tenía el foco, mover el foco al primer elemento interactivo (o al título), bloquear el scroll del `body`.
- Al cerrar: restaurar el foco al disparador original y quitar el bloqueo.
- **Focus trap**: `Tab` y `Shift+Tab` no deben salir del modal mientras esté abierto.
- Un modal a la vez.

### Marcado de referencia
```html
<button class="button button--primary" data-modal-open="modal-vacuna">Registrar vacuna</button>

<div class="modal" id="modal-vacuna" hidden>
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-vacuna-titulo">
    <header class="modal__header">
      <h2 class="modal__title" id="modal-vacuna-titulo">Registrar vacuna</h2>
      <button class="modal__close" aria-label="Cerrar" data-modal-close>×</button>
    </header>
    <div class="modal__body">...</div>
    <footer class="modal__footer">
      <button class="button button--secondary" data-modal-close>Cancelar</button>
      <button class="button button--primary">Guardar</button>
    </footer>
  </div>
</div>
```

### Alternativa aceptada
Usar el elemento nativo `<dialog>` con `showModal()` y `close()`. Reduce código (foco y `Escape` vienen integrados). Si se elige, documentarlo en `docs/decisiones.md` y ajustar el CSS (`dialog::backdrop`).

### Modales previstos en el prototipo
| Modal | Pantalla | Disparador |
|---|---|---|
| Nueva cita | 6 | Botón "Nueva cita" |
| Registrar vacuna | 12 | Botón "Registrar vacuna" |
| Nueva nota | 13 | Botón "Nueva nota" |
| Confirmar cancelación de cita | 6 | "Cancelar cita" |
| Confirmar eliminación de cuenta | 7 | "Eliminar cuenta" |
| Ver documentos de solicitud | 11 | "Ver documentos" |

### 5.4 Contraseñas en pantallas de acceso

- `password-toggle.js` inicializa los botones `[data-password-toggle]`; cada botón apunta al campo mediante `data-target`. Al pulsarlo alterna entre `password` y `text`, actualiza `aria-pressed` y cambia el nombre accesible entre "Mostrar contraseña" y "Ocultar contraseña".
- `password-strength.js` observa el campo marcado con `[data-password-strength-input]` y actualiza el texto, el nivel accesible y tres segmentos visuales. Los niveles son baja, media y alta; es un indicador orientativo, no una validación de seguridad real.
- Ambos scripts usan scripts clásicos bajo `window.PetCare` para mantener compatibilidad con apertura mediante `file://`.

---

## Pruebas manuales obligatorias
- [ ] Menú móvil: abrir, cerrar con botón, con `Escape` y con overlay; foco correcto.
- [ ] Tabs: navegación con flechas, `Home` y `End`; solo un panel visible.
- [ ] Modal: foco entra al abrir, `Tab` no escapa, `Escape` cierra, foco regresa al disparador.
- [ ] Sin errores en consola en Chrome, Firefox y Edge.
