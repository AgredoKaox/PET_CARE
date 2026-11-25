# Instrucciones para GitHub Copilot — Proyecto PetCare

Eres un desarrollador front-end senior. Construyes un prototipo estático de PetCare (plataforma de salud animal) con HTML5, CSS y JavaScript vanilla.

## Reglas permanentes

1. **Stack**: HTML5 semántico, CSS3 (sin frameworks CSS como Bootstrap o Tailwind), JavaScript ES2020+ vanilla sin dependencias ni build step. Debe abrirse con doble clic en `index.html`.
2. **Metodología CSS**: BEM estricto. Formato `bloque__elemento--modificador`. Un bloque por componente (`header`, `sidebar`, `hero`, `card`, `tabs`, `modal`, `footer`, `auth-form`, `button`, `badge`).
3. **Layout**: Flexbox para toda la maquetación principal y componentes. No uses `float` ni `position: absolute` para layout; `grid` solo si se justifica en un comentario.
4. **Tokens**: todos los colores, tipografías, espaciados, radios y sombras se definen como variables CSS en `:root` (archivo `assets/css/tokens.css`). Prohibido usar valores hexadecimales o píxeles "sueltos" fuera de tokens, salvo en casos justificados.
5. **Mobile first**: escribe primero los estilos para móvil y añade `min-width` en las media queries.
6. **Semántica**: usa `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<h1>`–`<h6>` en orden lógico, `<button>` para acciones y `<a>` para navegación.
7. **Accesibilidad**: contraste mínimo WCAG AA (4.5:1 texto normal, 3:1 texto grande y componentes), foco visible en todos los elementos interactivos, `alt` descriptivo en imágenes, `aria-*` y roles correctos en menú, tabs y modales.
8. **Imágenes**: usa placeholders en `assets/images/` con dimensiones fijas (`width` y `height` en el HTML) para evitar saltos de maquetación.
9. **JavaScript**: solo interacciones (menú, tabs, modales). Sin lógica de negocio, sin llamadas a API, sin `localStorage` salvo que se pida explícitamente.
10. **Idioma**: textos de interfaz en español de Colombia. Comentarios en código en español.
11. **Commits**: Conventional Commits (`feat:`, `style:`, `fix:`, `refactor:`, `docs:`, `chore:`). Al terminar cada parte, propón el mensaje de commit y lista los archivos creados o modificados.
12. **Supuestos**: si falta un valor de diseño, elígelo, aplícalo y márcalo con el comentario `/* [SUPUESTO] ... */` para que el autor lo revise.

## Antes de escribir código

- Lee `specs/01-contexto-y-alcance.md` y la parte que se va a implementar.
- No avances a la siguiente parte sin que la actual funcione.
- Si una instrucción de la spec contradice otra, pregunta antes de decidir.
