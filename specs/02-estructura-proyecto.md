# 02 — Estructura del proyecto (Primera parte)

## Objetivo de esta parte
Crear el esqueleto de carpetas, un `index.html` base semántico y los archivos CSS y JS vacíos con sus comentarios de cabecera. Debe abrirse en el navegador sin errores.

## Árbol de carpetas [DISEÑO + SUPUESTO]

```
petcare-prototipo/
├── index.html                    # Página de entrada (redirige o enlaza a pages/)
├── pages/                        # Una página por pantalla de referencia
│   ├── login.html
│   ├── registro.html
│   ├── dueno-dashboard.html
│   ├── dueno-mascotas.html
│   ├── dueno-calendario.html
│   ├── dueno-configuracion.html
│   ├── dueno-vacunas.html
│   ├── dueno-tratamientos.html
│   ├── dueno-notas.html
│   ├── dueno-alertas.html
│   ├── dueno-solicitud-vet.html
│   ├── vet-dashboard.html
│   ├── vet-historial.html
│   ├── admin-dashboard.html
│   ├── admin-clinicas.html
│   ├── admin-medicamentos.html
│   └── admin-especies.html
├── assets/
│   ├── css/
│   │   ├── base/
│   │   │   ├── tokens.css        # Variables :root (paleta, tipografía, espaciado)
│   │   │   ├── reset.css         # Normalización mínima
│   │   │   └── global.css        # Estilos globales (body, enlaces, foco)
│   │   ├── components/           # Un archivo por bloque BEM
│   │   │   ├── header.css
│   │   │   ├── sidebar.css
│   │   │   ├── hero.css
│   │   │   ├── card.css
│   │   │   ├── tabs.css
│   │   │   ├── modal.css
│   │   │   ├── footer.css
│   │   │   ├── button.css
│   │   │   ├── badge.css
│   │   │   ├── auth-form.css
│   │   │   └── table.css
│   │   └── main.css              # Importa base y components en orden
│   ├── js/
│   │   ├── components/
│   │   │   ├── menu.js           # Menú de navegación y menú móvil
│   │   │   ├── tabs.js           # Pestañas accesibles
│   │   │   └── modal.js          # Diálogos accesibles
│   │   └── main.js               # Punto de entrada: inicializa componentes
│   └── images/
│       ├── logo-petcare.svg
│       ├── avatar-placeholder.svg
│       └── pets/                 # Fotos de ejemplo (dimensiones fijas)
├── components/                   # Fragmentos HTML reutilizables (opcional, ver nota)
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
├── docs/
│   └── decisiones.md             # Supuestos y decisiones tomadas
├── specs/                        # Estas especificaciones
├── .gitignore
└── README.md
```

## Nota sobre componentes HTML
Sin build step, no existe un "include" nativo de HTML. Opciones:
- **Opción A (recomendada para el prototipo)**: duplicar el header, sidebar y footer en cada página. Es simple y funciona en local. Mantener la consistencia revisando cada página al cambiar un componente.
- **Opción B**: cargar fragmentos con `fetch()` desde `main.js`. Requiere servidor local (no funciona con `file://`).

Decidir antes de empezar y documentar la elección en `docs/decisiones.md`.

## Contenido mínimo de `index.html`

- `<!DOCTYPE html>` con `lang="es-CO"`.
- `<meta charset="UTF-8">` y `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- `<title>PetCare — Prototipo</title>`.
- Enlace a `assets/css/main.css` y script `assets/js/main.js` con `defer`.
- Estructura semántica vacía: `<header>`, `<main>` con un `<h1>` provisional, `<footer>`.
- Enlace de "Saltar al contenido" (`<a class="skip-link" href="#contenido">`) como primer elemento del `<body>`.
- Comentario de cabecera con nombre del proyecto y versión.

## Archivos base a crear en esta parte

| Archivo | Contenido inicial |
|---|---|
| `index.html` | Esqueleto semántico según el apartado anterior. |
| `assets/css/main.css` | Solo `@import` de `base/tokens.css`, `base/reset.css` y `base/global.css`. |
| `assets/css/base/tokens.css` | Bloque `:root {}` vacío con comentarios por sección (se llena en la parte 3). |
| `assets/css/base/reset.css` | Reset mínimo: `box-sizing`, márgenes a cero, imágenes con `max-width: 100%`. |
| `assets/css/base/global.css` | `body` con fuente base y `.skip-link` oculto hasta recibir foco. |
| `assets/js/main.js` | Comentario de cabecera y `document.addEventListener('DOMContentLoaded', ...)` vacío. |
| `.gitignore` | `node_modules/`, `.DS_Store`, `Thumbs.db`, `*.log`. |
| `README.md` | Título y descripción provisional (se completa al final). |

## Criterios de aceptación

- [ ] Abrir `index.html` no genera errores en consola.
- [ ] La estructura de carpetas coincide con el árbol.
- [ ] Todas las hojas y scripts enlazados existen.
- [ ] El HTML pasa el validador del W3C sin errores.
- [ ] El enlace "Saltar al contenido" aparece al presionar `Tab`.

## Commit propuesto
`chore: crear estructura base del proyecto y HTML semántico`
(ver `07-flujo-git-commits.md`)
