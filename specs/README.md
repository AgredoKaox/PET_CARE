# Specs — Prototipo PetCare (maquetación front-end)

Conjunto de especificaciones en Markdown para guiar a GitHub Copilot (o a cualquier asistente de código) en la construcción del prototipo web de PetCare a partir del diseño `DISEÑO PROYECTO PET CARE AGREDO-2.pdf` (17 pantallas).

## Cómo usar estas specs con Copilot

1. Copia `copilot-instructions.md` a `.github/copilot-instructions.md` dentro del repositorio. Copilot lo lee como contexto permanente.
2. Abre los demás archivos en el editor y úsalos como contexto en el chat de Copilot (`#file:specs/03-design-tokens.md`, etc.).
3. Trabaja **una parte a la vez**, en el orden indicado en `07-flujo-git-commits.md`. Pide a Copilot que se detenga al final de cada parte y proponga el commit.
4. Antes de avanzar, verifica que la parte es funcional por sí sola (abrir `index.html` en el navegador sin errores en consola).

## Índice

| Archivo | Contenido |
|---|---|
| `copilot-instructions.md` | Reglas permanentes para Copilot (stack, BEM, Flexbox, convenciones). |
| `01-contexto-y-alcance.md` | Qué se construye, qué queda fuera y decisiones pendientes. |
| `02-estructura-proyecto.md` | Árbol de carpetas y archivos. Primera parte del trabajo. |
| `03-design-tokens.md` | Paleta, tipografía, espaciado, radios y sombras como variables CSS. |
| `04-componentes.md` | Especificación de cada bloque BEM (header, sidebar, hero, card, tabs, modal, footer, formularios de acceso). |
| `05-interactividad-js.md` | Comportamiento de menú, tabs y modales, con requisitos ARIA. |
| `06-responsive-accesibilidad.md` | Breakpoints mobile first, contraste, foco y reglas de accesibilidad. |
| `07-flujo-git-commits.md` | Orden de trabajo, plan de commits convencionales y entregable final (README). |

## Convención de estas specs

- **[DISEÑO]**: dato tomado directamente del PDF.
- **[SUPUESTO]**: valor asumido porque el PDF no lo especifica. Debe revisarse y puede cambiarse en `03-design-tokens.md`.
- **[PENDIENTE]**: decisión que el autor del proyecto debe confirmar antes de implementarla.
