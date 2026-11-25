# 07 — Flujo de trabajo, commits y entregable final

## 1. Forma de trabajo

1. Trabajar **una parte a la vez**, en el orden de esta lista.
2. Cada parte debe dejar el prototipo **funcional**: abrir `index.html` o las páginas de `pages/` sin errores.
3. Al cerrar una parte, Copilot debe:
   - Listar los archivos **creados** y **modificados**.
   - Proponer el mensaje de commit en Conventional Commits.
   - Indicar qué criterios de aceptación de la parte se cumplen y cuáles quedan pendientes.
4. No avanzar a la siguiente parte sin confirmación del autor.

## 2. Orden de partes

| Parte | Nombre | Referencia |
|---|---|---|
| 1 | Estructura base y HTML semántico | `02-estructura-proyecto.md` |
| 2 | Design tokens, reset y tipografía | `03-design-tokens.md` |
| 3 | Componentes base: `button`, `badge`, `card` | `04-componentes.md` §4.4–4.6 |
| 4 | Layout de aplicación: `header`, `sidebar`, `footer` | `04-componentes.md` §4.1, 4.2, 4.11 |
| 5 | Pantallas de acceso: `auth-form`, `hero--auth` | `04-componentes.md` §4.10 |
| 6 | Dashboard del dueño (pantalla 3) | `04-componentes.md` §4.3, 4.15, 4.16 |
| 7 | Mis mascotas (pantalla 4) con `pet-card` y `tabs` | §4.7, 4.14 |
| 8 | Calendario y citas (pantalla 6) con `modal` | §4.8, 4.13 |
| 9 | Configuración, vacunas, notas, alertas, tratamientos (pantallas 7, 10, 12, 13, 14) | §4.7, 4.8, 4.9, 4.15 |
| 10 | Vistas de veterinario (pantallas 8 y 9) | §4.9 |
| 11 | Vistas de administrador (pantallas 11, 15, 16, 17) | §4.9 |
| 12 | Solicitud para ser veterinario (pantalla 5) con `steps` | §4.12 |
| 13 | Capa de interactividad: menú, tabs, modal | `05-interactividad-js.md` |
| 14 | Capa responsive y ajustes de detalle | `06-responsive-accesibilidad.md` |
| 15 | Revisión de accesibilidad y README final | §4 de este archivo |

> La interactividad (parte 13) puede adelantarse si se necesita para probar una parte anterior. Documentar el cambio de orden en el commit.

## 3. Convención de commits

Formato:
```
<tipo>(<alcance>): <descripción breve en imperativo>

<cuerpo opcional: qué y por qué>
```

Tipos usados: `feat`, `style`, `fix`, `refactor`, `docs`, `chore`.
Alcances sugeridos: `estructura`, `tokens`, `header`, `sidebar`, `card`, `auth`, `dashboard`, `mascotas`, `calendario`, `config`, `vet`, `admin`, `js`, `responsive`, `a11y`.

Reglas:
- Título en minúsculas, máximo 72 caracteres, sin punto final.
- Un commit por parte o por componente, nunca mezclar partes.
- Cuerpo cuando el cambio tenga una decisión que justificar.

## 4. Plan de commits propuesto

| # | Mensaje | Parte |
|---|---|---|
| 1 | `chore(estructura): crear esqueleto de carpetas y html semántico base` | 1 |
| 2 | `style(tokens): definir paleta, tipografía y espaciado en :root` | 2 |
| 3 | `feat(card): añadir botones, badges y tarjetas base` | 3 |
| 4 | `feat(header): añadir encabezado con breadcrumb y selector de rol` | 4 |
| 5 | `feat(sidebar): añadir navegación lateral por rol` | 4 |
| 6 | `feat(footer): añadir pie de página con enlaces legales` | 4 |
| 7 | `feat(auth): maquetar pantallas de acceso y registro` | 5 |
| 8 | `feat(dashboard): maquetar panel del dueño con indicadores y gráfico` | 6 |
| 9 | `feat(mascotas): añadir listado de fichas y formulario de registro` | 7 |
| 10 | `feat(calendario): maquetar vista semanal de citas` | 8 |
| 11 | `feat(config): añadir configuración de cuenta y preferencias` | 9 |
| 12 | `feat(vacunas): añadir tabla de calendario de vacunas` | 9 |
| 13 | `feat(notas): añadir lista de notas con filtros` | 9 |
| 14 | `feat(alertas): añadir centro de notificaciones con pestañas` | 9 |
| 15 | `feat(tratamientos): añadir lista y detalle de tratamientos` | 9 |
| 16 | `feat(vet): maquetar dashboard e historial clínico veterinario` | 10 |
| 17 | `feat(admin): maquetar panel, clínicas, medicamentos y especies` | 11 |
| 18 | `feat(solicitud-vet): añadir formulario por pasos de verificación` | 12 |
| 19 | `feat(js): añadir menú, tabs y modales accesibles` | 13 |
| 20 | `style(responsive): ajustar breakpoints mobile first y tablas` | 14 |
| 21 | `fix(a11y): corregir contraste, foco visible y etiquetas` | 15 |
| 22 | `docs(readme): documentar estructura, uso, tokens y commits` | 15 |

> Los commits 3 a 6 pueden agruparse si el alcance es pequeño. Mantener siempre el formato Conventional Commits.

## 5. Entregable final: `README.md`

Copilot debe generar un README con estas secciones, en este orden:

1. **Descripción**: qué es PetCare y qué muestra el prototipo (3 a 5 líneas).
2. **Tecnologías**: HTML5, CSS3, JavaScript vanilla. Sin dependencias.
3. **Estructura de carpetas**: árbol igual al de `02-estructura-proyecto.md`, actualizado.
4. **Cómo abrir y visualizar**:
   - Abrir `index.html` con doble clic, o
   - Servir con `python -m http.server 8000` y entrar a `http://localhost:8000`.
5. **Pantallas incluidas**: tabla con las 17 pantallas, su archivo y su rol.
6. **Paleta y tokens**: resumen de colores y referencia a `assets/css/base/tokens.css`. Incluir la tabla de supuestos.
7. **Metodología**:
   - **BEM**: explicación breve y ejemplo de bloque, elemento y modificador.
   - **Flexbox**: dónde se aplica y por qué se eligió sobre `float`.
   - **Mobile first**: breakpoints usados.
8. **Accesibilidad**: qué se cumple (WCAG 2.2 AA) y cómo se verificó.
9. **Supuestos y decisiones**: enlace a `docs/decisiones.md`.
10. **Datos de ejemplo**: aclarar la coherencia de datos elegida (ver `01-contexto-y-alcance.md`, punto 3).
11. **Historial de commits**: lista de commits realizados, en orden, con su mensaje.
12. **Autor y contexto académico**: proyecto final de formación ADSO, SENA.

## 6. Criterios generales de calidad (para toda parte)

- [ ] HTML válido (validador W3C).
- [ ] CSS sin valores de color ni espaciado literales fuera de `tokens.css`.
- [ ] Clases BEM coherentes: sin clases de utilidad tipo `.mt-4`.
- [ ] Ningún script externo ni CDN.
- [ ] Sin errores ni advertencias en consola.
- [ ] Probado en al menos 2 anchos de pantalla.
- [ ] Mensaje de commit propuesto y lista de archivos entregada.
