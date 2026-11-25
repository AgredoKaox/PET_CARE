# 01 — Contexto y alcance

## Qué es
PetCare es una plataforma de gestión de salud animal con tres roles: **Dueño de mascota**, **Veterinario** y **Administrador**. El prototipo replica visualmente su diseño en 17 pantallas.

## Objetivo del prototipo
Un front-end estático, navegable y responsive que replique con fidelidad el diseño visual de las pantallas de referencia, con interacciones básicas (menú, tabs, modales). No incluye backend, autenticación real ni persistencia.

## Pantallas de referencia [DISEÑO]

| # | Pantalla | Rol | Tipo |
|---|---|---|---|
| 1 | Crear cuenta | Público | Acceso (tarjeta centrada) |
| 2 | Iniciar sesión | Público | Acceso (tarjeta centrada) |
| 3 | Dashboard | Dueño | Panel con sidebar |
| 4 | Mis mascotas (+ formulario agregar) | Dueño | Panel con sidebar |
| 5 | Solicitud para ser veterinario | Dueño | Formulario por pasos |
| 6 | Calendario de citas | Dueño | Panel con sidebar y panel de detalle |
| 7 | Configuración de cuenta | Dueño | Panel con sidebar y pestañas |
| 8 | Panel veterinario | Veterinario | Panel con sidebar |
| 9 | Historial clínico | Veterinario | Panel con sidebar y pestañas |
| 10 | Tratamientos activos | Dueño | Panel con lista y detalle |
| 11 | Panel de administración | Admin | Panel con sidebar |
| 12 | Vacunas | Dueño | Tabla y lista lateral |
| 13 | Notas y observaciones | Dueño | Lista de tarjetas con filtros |
| 14 | Centro de notificaciones | Dueño | Lista con pestañas |
| 15 | Clínicas | Admin | Tabla con resumen |
| 16 | Medicamentos | Admin | Tabla con resumen |
| 17 | Especies y razas | Admin | Tres columnas |

## Componentes transversales [DISEÑO]
- Navegación lateral fija (sidebar) en vistas internas, con etiqueta de rol arriba.
- Encabezado superior con breadcrumb ("Plataforma / Sección") y selector de rol (Dueño | Veterinario | Admin).
- Tarjetas con borde gris fino y esquinas redondeadas.
- Etiquetas (badges) de estado coloreadas.
- Botones primarios verdes, secundarios con borde, y de peligro en rojo.
- Pantallas de acceso: tarjeta blanca centrada sobre fondo verde pálido.

## Alcance del prototipo

**Dentro del alcance**
- Estructura de páginas y componentes listados en la tabla anterior.
- Tokens de diseño (`03-design-tokens.md`).
- Interacciones: menú de navegación (incluido el menú móvil), tabs y modales.
- Responsive mobile first en móvil, tablet y escritorio.
- Accesibilidad básica AA.

**Fuera del alcance**
- Backend, base de datos, autenticación, validación real de formularios.
- Gráficos con datos dinámicos (se usan barras estáticas o un SVG fijo).
- Carga de archivos real (se muestra la zona de arrastre sin lógica).
- Lógica de estados de solicitud o de dosis.

## Decisiones pendientes [PENDIENTE]

1. **Tipo de sitio**: la brief pide un sitio con *header, hero, cards y footer*, pero el diseño es una aplicación con sidebar. Propuesta: construir primero las vistas de la aplicación (pantallas 3 a 17) y, si se requiere, una página de inicio tipo landing que use `hero` y `cards`. Confirmar antes de la parte 4.
2. **Vistas por rol**: ¿una página por pantalla (`pages/*.html`) o una sola página con cambio de vista por rol? Propuesta: una página HTML por pantalla, para que cada parte sea independiente.
3. **Datos de ejemplo**: el diseño contiene inconsistencias (por ejemplo, la alerta "Vacuna vencida: Dufy" aparece en el dashboard de Juan Agredo, pero la mascota registrada es Luna; el usuario aparece como "Juan Agredo" en unas pantallas y "Carlos Ruiz" en otras). Propuesta: usar un único conjunto de datos coherente en todo el prototipo y anotarlo en el README.
4. **Pantallas de la imagen de referencia**: confirmar si se usan los avatares y la ilustración del veterinario tal como aparecen, o placeholders propios.
