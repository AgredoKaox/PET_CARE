# PetCare — Prototipo

## Descripción

PetCare es un prototipo front-end estático de una plataforma de gestión de salud animal.
Muestra paneles para propietarios, veterinarios y administradores, junto con mascotas, citas, vacunas, tratamientos, notas y catálogos.
Incluye 17 pantallas navegables, maquetadas con HTML5, CSS3 y JavaScript vanilla.
No contiene backend, autenticación real, persistencia ni lógica de negocio.
Las interacciones incluyen menú móvil, pestañas, modales y controles visuales de contraseña en las pantallas de acceso.

## Tecnologías

- HTML5.
- CSS3 sin frameworks.
- JavaScript ES2020+ vanilla.
- Sin dependencias, CDN, build step ni módulos ES.

## Estructura de carpetas

```text
petcare-prototipo/
├── index.html
├── pages/
├── assets/
│   ├── css/
│   │   ├── base/
│   │   ├── components/
│   │   └── main.css
│   ├── js/
│   │   ├── components/
│   │   └── main.js
│   └── images/
├── components/
├── docs/
├── specs/
├── .gitignore
└── README.md
```

## Cómo abrir y visualizar

- Abrir `index.html` con doble clic.
- También puede servirse con `python -m http.server 8000` y visitar `http://localhost:8000`.

## Pantallas incluidas

| # | Pantalla | Archivo | Rol |
|---|---|---|---|
| 1 | Crear cuenta | `pages/registro.html` | Público |
| 2 | Iniciar sesión | `pages/login.html` | Público |
| 3 | Dashboard | `pages/dueno-dashboard.html` | Dueño |
| 4 | Mis mascotas | `pages/dueno-mascotas.html` | Dueño |
| 5 | Solicitud veterinaria | `pages/dueno-solicitud-vet.html` | Dueño |
| 6 | Calendario de citas | `pages/dueno-calendario.html` | Dueño |
| 7 | Configuración | `pages/dueno-configuracion.html` | Dueño |
| 8 | Panel veterinario | `pages/vet-dashboard.html` | Veterinario |
| 9 | Historial clínico | `pages/vet-historial.html` | Veterinario |
| 10 | Tratamientos activos | `pages/dueno-tratamientos.html` | Dueño |
| 11 | Panel de administración | `pages/admin-dashboard.html` | Admin |
| 12 | Vacunas | `pages/dueno-vacunas.html` | Dueño |
| 13 | Notas y observaciones | `pages/dueno-notas.html` | Dueño |
| 14 | Centro de notificaciones | `pages/dueno-alertas.html` | Dueño |
| 15 | Clínicas | `pages/admin-clinicas.html` | Admin |
| 16 | Medicamentos | `pages/admin-medicamentos.html` | Admin |
| 17 | Especies y razas | `pages/admin-especies.html` | Admin |

## Paleta y tokens

Los colores, tipografías, espaciados, radios, sombras, dimensiones y movimiento se definen en `assets/css/base/tokens.css`.
La marca usa verde principal, con neutros grises y colores semánticos para información, avisos y errores.
Los valores de diseño marcados como `[SUPUESTO]` deben revisarse antes de una implementación definitiva.

## Metodología

### BEM

Los estilos usan BEM estricto: `bloque__elemento--modificador`.
Ejemplo: `card__header`, `button--primary`, `sidebar__link--active`.

### Flexbox

La maquetación principal y los componentes usan Flexbox.
No se emplean `float` ni posicionamiento absoluto para layout.

### Mobile first

Los estilos base cubren móvil y añaden comportamiento con `min-width: 48rem` y `min-width: 64rem`.
Los breakpoints documentados son 576 px, 768 px, 1024 px y 1280 px.

## Accesibilidad

- Landmark semánticos: `header`, `nav`, `main`, `aside` y `footer`.
- Una sola `<h1>` por página y jerarquía lógica de encabezados.
- Enlace «Saltar al contenido» como primer elemento de cada página.
- Campos de formulario asociados con `<label>`.
- Pestañas con roles ARIA, estados y navegación por teclado.
- Modal con foco controlado y cierre con Escape.
- Estados comunicados mediante texto y color.
- Foco visible mediante `--focus-ring`.
- Movimiento reducido mediante `prefers-reduced-motion`.

## Supuestos y decisiones

Las decisiones tomadas y los puntos pendientes se documentan en `docs/decisiones.md`.

## Datos de ejemplo

Se usa un conjunto coherente con el dueño Juan Agredo y su mascota Luna.
El nombre Carlos Ruiz y otras mascotas presentes en referencias del diseño no se usan como datos principales.

## Historial de commits

Los cambios se registran con la convención Conventional Commits documentada en `specs/07-flujo-git-commits.md`.
Consulta el historial del repositorio con `git log --oneline`.

## Autor y contexto académico

Proyecto final de formación ADSO, SENA.