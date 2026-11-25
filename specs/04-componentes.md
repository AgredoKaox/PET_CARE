# 04 — Componentes (bloques BEM)

Cada bloque tiene su archivo CSS en `assets/css/components/` y, si lo necesita, su archivo JS en `assets/js/components/`. Los nombres siguen BEM: `bloque__elemento--modificador`.

Para cada componente se indica: propósito, estructura HTML esperada, clases BEM, comportamiento responsive y pantallas donde aparece.

---

## 4.1 `header` — Encabezado superior
- **Propósito**: breadcrumb de ubicación y selector de rol.
- **Pantallas**: 3 a 17 (vistas internas).
- **Estructura**:
```html
<header class="header">
  <button class="header__menu-toggle" aria-controls="sidebar" aria-expanded="false">Menú</button>
  <nav class="header__breadcrumb" aria-label="Ubicación">
    <span class="header__crumb">Plataforma</span> / <span class="header__crumb header__crumb--current">Dashboard</span>
  </nav>
  <div class="header__role-switch" role="group" aria-label="Cambiar rol">
    <button class="header__role header__role--active" aria-pressed="true">Dueño</button>
    <button class="header__role" aria-pressed="false">Veterinario</button>
    <button class="header__role" aria-pressed="false">Admin</button>
  </div>
  <div class="header__user">
    <img class="header__avatar" src="..." alt="Foto de perfil de Juan Agredo" width="36" height="36">
    <span class="header__user-name">Juan Agredo</span>
  </div>
</header>
```
- **Elementos**: `__menu-toggle` (solo móvil), `__breadcrumb`, `__crumb`, `__crumb--current`, `__role-switch`, `__role`, `__role--active`, `__user`, `__avatar`, `__user-name`.
- **Diseño [DISEÑO]**: fondo blanco, borde inferior fino, altura `--header-height`. Selector de rol como segmented control con fondo gris claro y opción activa en blanco o verde.
- **Responsive**: en móvil ocultar breadcrumb y nombre de usuario (solo avatar). El selector de rol pasa a ocupar fila completa bajo el encabezado.

## 4.2 `sidebar` — Navegación lateral
- **Propósito**: navegación principal por secciones del rol.
- **Pantallas**: 3 a 17.
- **Estructura**:
```html
<aside class="sidebar" id="sidebar">
  <div class="sidebar__brand">
    <img src="assets/images/logo-petcare.svg" alt="PetCare Salud Animal" width="140" height="40">
  </div>
  <span class="sidebar__role-badge">Dueño de mascota</span>
  <nav class="sidebar__nav" aria-label="Navegación principal">
    <ul class="sidebar__list">
      <li><a class="sidebar__link sidebar__link--active" href="#" aria-current="page"><span class="sidebar__icon" aria-hidden="true"></span>Dashboard</a></li>
      <li><a class="sidebar__link" href="#"><span class="sidebar__icon" aria-hidden="true"></span>Mis mascotas</a></li>
    </ul>
  </nav>
  <div class="sidebar__footer">
    <a class="button button--accent-teal" href="#">Solicitar ser Vet</a>
    <a class="button button--danger-soft" href="#">Cerrar sesión</a>
  </div>
</aside>
```
- **Elementos**: `__brand`, `__role-badge`, `__nav`, `__list`, `__link`, `__link--active`, `__icon`, `__footer`.
- **Diseño [DISEÑO]**: fondo blanco, ítem activo con fondo `--color-primary-50` y texto verde, ítems con iconos lineales, botones inferiores con color de acento y de cierre de sesión en rojo suave.
- **Responsive**: en escritorio, fijo a la izquierda (`position: sticky`, altura 100vh). En tablet, colapsa a iconos. En móvil, se oculta y se abre como panel superpuesto desde `header__menu-toggle` (ver `05-interactividad-js.md`).
- **Variantes**: `sidebar--open` (estado móvil abierto).

## 4.3 `hero` — Sección de bienvenida (página de inicio o encabezado de vista)
- **Propósito**: título grande, subtítulo y acción principal. Se usa en la página de inicio (si se confirma) y como encabezado de vistas, por ejemplo "Bienvenido de vuelta, Agredo".
- **Estructura**:
```html
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Bienvenido de vuelta, Agredo <span aria-hidden="true">👋</span></h1>
    <p class="hero__subtitle">Lunes, 7 de septiembre de 2026. Tus peludos están al día.</p>
  </div>
  <div class="hero__actions">
    <button class="button button--primary">Agregar mascota</button>
  </div>
</section>
```
- **Elementos**: `__content`, `__title`, `__subtitle`, `__actions`.
- **Variantes**: `hero--auth` (para pantallas de acceso con fondo verde pálido en degradado suave).
- **Responsive**: columna en móvil; fila con acciones a la derecha desde tablet.

## 4.4 `card` — Tarjeta genérica
- **Propósito**: contenedor base para indicadores, paneles, listas y formularios.
- **Pantallas**: prácticamente todas.
- **Estructura**:
```html
<article class="card card--stat">
  <header class="card__header">
    <span class="card__icon card__icon--success" aria-hidden="true"></span>
    <span class="badge badge--success">+1 nuevo</span>
  </header>
  <p class="card__value">3</p>
  <h3 class="card__title">Mis mascotas</h3>
  <p class="card__meta">Registradas</p>
</article>
```
- **Elementos**: `__header`, `__icon`, `__icon--{color}`, `__body`, `__value`, `__title`, `__meta`, `__footer`, `__actions`.
- **Modificadores**: `card--stat` (indicador numérico), `card--pet` (ficha de mascota con avatar de iniciales), `card--alert` (alerta con franja de color a la izquierda), `card--panel` (panel grande con cabecera), `card--note` (nota con categoría).
- **Diseño [DISEÑO]**: borde `--border-width` en `--color-border`, radio `--radius-lg`, sombra `--shadow-card`, fondo `--color-surface`.
- **Responsive**: grid de tarjetas con Flexbox y `flex-wrap`: 1 columna en móvil, 2 en tablet, 4 en escritorio para indicadores.

## 4.5 `badge` — Etiqueta de estado
- **Propósito**: estado de una mascota, cita, vacuna o tratamiento.
- **Estructura**: `<span class="badge badge--success">Al día</span>`
- **Modificadores**: `badge--success`, `badge--warning`, `badge--info`, `badge--danger`, `badge--neutral`.
- **Regla**: el texto siempre va acompañado del color (nunca solo color), por accesibilidad.

## 4.6 `button` — Botones
- **Modificadores**: `button--primary`, `button--secondary`, `button--danger`, `button--danger-soft`, `button--accent-teal`, `button--ghost`, `button--icon`.
- **Tamaños**: `button--sm`, `button--md` (por defecto), `button--lg`.
- **Estados**: `:hover`, `:focus-visible` (anillo `--focus-ring`), `:disabled`.
- **Diseño [DISEÑO]**: primario verde con texto blanco, ancho completo en formularios de acceso; secundario con borde gris; peligro en rojo.

## 4.7 `tabs` — Pestañas
- **Propósito**: cambiar entre "Datos personales / Seguridad / Preferencias / Privacidad", o "Consultas / Vacunas / Cirugías / Exámenes / Notas".
- **Pantallas**: 4 (Mis mascotas), 7 (Configuración), 9 (Historial clínico), 14 (Alertas: Todas / No leídas / Leídas).
- **Estructura**: ver `05-interactividad-js.md` (roles `tablist`, `tab`, `tabpanel`).
- **Elementos**: `tabs__list`, `tabs__tab`, `tabs__tab--active`, `tabs__panel`.
- **Diseño [DISEÑO]**: línea inferior verde en la pestaña activa, texto gris en las demás.

## 4.8 `modal` — Diálogo
- **Propósito**: "Nueva cita", "Registrar vacuna", "Confirmar cancelación de cita", "Eliminar cuenta".
- **Estructura**: ver `05-interactividad-js.md` (`<dialog>` o `div role="dialog"`).
- **Elementos**: `modal__overlay`, `modal__dialog`, `modal__header`, `modal__title`, `modal__body`, `modal__footer`, `modal__close`.
- **Diseño**: tarjeta blanca centrada con sombra `--shadow-modal`, overlay semitransparente.
- **Responsive**: en móvil ocupa casi toda la pantalla desde abajo (modificador `modal--sheet`).

## 4.9 `table` — Tablas de datos
- **Pantallas**: 12 (vacunas), 15 (clínicas), 16 (medicamentos).
- **Estructura**: `<table class="table">` con `<caption>` visible o visualmente oculto, `<th scope="col">`.
- **Elementos**: `table__row--highlight`, `table__cell--actions`.
- **Responsive**: envolver en `table__wrapper` con `overflow-x: auto` en móvil para evitar desbordes. Alternativa: en móvil, cada fila pasa a una tarjeta (`table--stacked`).

## 4.10 `auth-form` — Formulario de acceso y registro
- **Pantallas**: 1 y 2.
- **Estructura**: tarjeta centrada con logo, subtítulo, `tabs` de "Iniciar sesión / Crear cuenta", campos y botón.
- **Elementos**: `auth-form__brand`, `auth-form__title`, `auth-form__tabs`, `auth-form__field`, `auth-form__label`, `auth-form__input`, `auth-form__hint`, `auth-form__strength`, `auth-form__checkbox`, `auth-form__footer`.
- **Detalles [DISEÑO]**:
  - Etiquetas en mayúsculas pequeñas.
  - Campo con icono a la izquierda (usuario, correo, candado, teléfono).
  - Indicador de seguridad de contraseña en tres segmentos (verde medio).
  - Casilla de términos con texto y enlaces en naranja/verde.
  - Opción "o regístrate con" con botones de Google y Facebook.
- **Nota de accesibilidad**: el enlace "¿Olvidaste tu contraseña?" en naranja claro no cumple contraste; usar `--color-warning-text` o verde `--color-primary-700`.

## 4.11 `footer` — Pie de página
- **Estructura**: enlaces "Política de privacidad · Términos de servicio · Soporte" separados por puntos.
- **Pantallas**: 1 y 2 (pie bajo la tarjeta). En vistas internas, el pie queda dentro del área de contenido.
- **Responsive**: enlaces en columna centrada en móvil.

## 4.12 `steps` — Pasos de formulario
- **Pantalla**: 5 (solicitud para ser veterinario).
- **Estructura**: lista ordenada con `aria-current="step"` en el paso activo.
- **Elementos**: `steps__item`, `steps__item--active`, `steps__item--done`, `steps__marker`, `steps__label`.

## 4.13 `calendar` — Calendario de citas
- **Pantalla**: 6.
- **Alcance**: solo maqueta visual de la semana con 7 columnas y celdas de 2 horas. Las citas son bloques posicionados con clases de color.
- **Elementos**: `calendar__header`, `calendar__day`, `calendar__time`, `calendar__slot`, `calendar__event`, `calendar__event--confirmed`, `calendar__event--pending`, `calendar__event--control`, `calendar__event--urgent`, `calendar__event--completed`.
- **Responsive**: en móvil se muestra la vista "Día" (una columna) y el panel de detalle pasa debajo.

## 4.14 `pet-card` — Ficha de mascota
- Extensión de `card` para la lista de mascotas. Avatar con iniciales en círculo verde pálido (`pet-card__avatar`), nombre, especie y raza, edad, badge de estado y enlace "Ver expediente médico".

## 4.15 `alert` — Alerta / notificación
- **Pantallas**: 3 (Alertas recientes), 14 (Centro de notificaciones).
- **Variantes**: `alert--danger`, `alert--warning`, `alert--info`, `alert--success`.
- **Estructura**: punto de color (`alert__dot`), título, descripción, marca de tiempo y botón "Marcar como leída".

## 4.16 `chart-bar` — Gráfico de barras estático
- **Pantalla**: 3 (actividad mensual).
- **Implementación**: barras con Flexbox, altura en porcentaje definida con una variable CSS inline (`style="--value: 60%"`). Sin librería de gráficos.
- **Elementos**: `chart-bar__bars`, `chart-bar__bar`, `chart-bar__bar--total`, `chart-bar__bar--done`, `chart-bar__label`.

## Lista de componentes por fase
| Fase | Componentes |
|---|---|
| Base | `button`, `badge`, `card` |
| Layout | `header`, `sidebar`, `footer` |
| Contenido | `hero`, `card` (variantes), `pet-card`, `alert`, `table` |
| Interacción | `tabs`, `modal`, `steps` |
| Formularios | `auth-form` |
| Especializados | `calendar`, `chart-bar` |
