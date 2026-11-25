# 03 — Design tokens (paleta, tipografía, espaciado)

Todos los valores se definen en `assets/css/base/tokens.css` dentro de `:root`. Los componentes solo consumen variables, nunca valores literales.

Leyenda: **[DISEÑO]** = observado en el PDF. **[SUPUESTO]** = valor propuesto. Los valores marcados con [SUPUESTO] deben revisarse con el autor.

## 1. Colores

### Marca y acción principal
| Token | Valor | Origen | Uso |
|---|---|---|---|
| `--color-primary-500` | `#4CAF50` | [DISEÑO] verde de botones y logo | Logo, iconos, indicadores activos |
| `--color-primary-700` | `#2E7D32` | [SUPUESTO] | Botones y textos verdes; cumple contraste 4.5:1 con blanco |
| `--color-primary-50` | `#E8F5E9` | [DISEÑO] fondo verde pálido de acceso y ítem activo del menú | Fondos de selección |
| `--color-primary-100` | `#C8E6C9` | [SUPUESTO] | Bordes de elementos seleccionados |

> Nota de contraste: `#4CAF50` sobre blanco tiene una relación aproximada de 2.8:1, por debajo del mínimo AA para texto. Por eso el texto y los botones con texto blanco usan `--color-primary-700`.

### Neutros
| Token | Valor | Origen | Uso |
|---|---|---|---|
| `--color-bg` | `#F5F6F7` | [DISEÑO] fondo gris muy pálido de vistas internas | Fondo de página |
| `--color-surface` | `#FFFFFF` | [DISEÑO] | Tarjetas y paneles |
| `--color-border` | `#E3E6EA` | [SUPUESTO] | Bordes de tarjetas e inputs |
| `--color-text` | `#1F2933` | [DISEÑO] negro/gris oscuro | Texto principal |
| `--color-text-muted` | `#5F6B7A` | [SUPUESTO] | Texto secundario (contraste 5.5:1 sobre blanco) |
| `--color-text-disabled` | `#9AA4B2` | [SUPUESTO] | Placeholders (solo decorativo) |

### Semánticos (estados y alertas)
| Token | Valor | Origen | Uso |
|---|---|---|---|
| `--color-info` | `#1E88E5` | [DISEÑO] azul de "Próxima" y control | Información, enlaces informativos |
| `--color-info-50` | `#E3F2FD` | [SUPUESTO] | Fondo de alertas informativas |
| `--color-warning` | `#F59E0B` | [DISEÑO] amarillo/naranja | Pendiente, aviso (solo como fondo o icono) |
| `--color-warning-text` | `#92400E` | [SUPUESTO] | Texto sobre fondos de aviso (contraste AA) |
| `--color-warning-50` | `#FFF8E1` | [DISEÑO] | Fondo de alerta amarilla |
| `--color-danger` | `#E53935` | [DISEÑO] rojo de urgencia | Errores, urgencias, acciones destructivas |
| `--color-danger-700` | `#B71C1C` | [SUPUESTO] | Texto de error sobre fondo claro |
| `--color-danger-50` | `#FDECEA` | [DISEÑO] | Fondo de alerta roja |
| `--color-accent-teal` | `#0F7C86` | [DISEÑO] botón "Solicitar ser Vet" | Acción especial de la barra lateral |
| `--color-accent-teal-50` | `#E0F4F5` | [SUPUESTO] | Fondo del botón especial |

### Colores de estado para badges y calendario
| Estado | Color base | Fondo |
|---|---|---|
| Completada / Activa / Al día | `--color-primary-700` | `--color-primary-50` |
| Confirmada | `--color-warning` (texto `--color-warning-text`) | `--color-warning-50` |
| Pendiente / Próxima | `--color-warning-text` | `--color-warning-50` |
| Control | `--color-info` | `--color-info-50` |
| Urgente / Vencida | `--color-danger-700` | `--color-danger-50` |

## 2. Tipografía

| Token | Valor | Origen |
|---|---|---|
| `--font-family-base` | `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif` | [SUPUESTO] el PDF usa una sans geométrica moderna |
| `--font-family-mono` | `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace` | [SUPUESTO] para lotes y microchips |
| `--font-size-xs` | `0.75rem` (12px) | [SUPUESTO] etiquetas en mayúsculas |
| `--font-size-sm` | `0.875rem` (14px) | [SUPUESTO] texto secundario |
| `--font-size-base` | `1rem` (16px) | [SUPUESTO] cuerpo |
| `--font-size-lg` | `1.125rem` (18px) | [SUPUESTO] subtítulos |
| `--font-size-xl` | `1.5rem` (24px) | [SUPUESTO] títulos de sección |
| `--font-size-2xl` | `2rem` (32px) | [SUPUESTO] títulos de página y cifras de tarjetas |
| `--font-weight-regular` | `400` | [SUPUESTO] |
| `--font-weight-medium` | `500` | [SUPUESTO] |
| `--font-weight-semibold` | `600` | [SUPUESTO] |
| `--font-weight-bold` | `700` | [SUPUESTO] títulos |
| `--line-height-tight` | `1.2` | [SUPUESTO] |
| `--line-height-base` | `1.5` | [SUPUESTO] |

Etiquetas de formulario y de tabla: `--font-size-xs`, mayúsculas, `letter-spacing: 0.04em`, color `--color-text-muted`.

## 3. Espaciado (escala de 4 px)

| Token | Valor |
|---|---|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-5` | `1.25rem` (20px) |
| `--space-6` | `1.5rem` (24px) |
| `--space-8` | `2rem` (32px) |
| `--space-10` | `2.5rem` (40px) |
| `--space-12` | `3rem` (48px) |

Padding interno de tarjetas: `--space-5` en móvil y `--space-6` desde tablet. Separación entre tarjetas: `--space-4` en móvil, `--space-6` en escritorio.

## 4. Radios, bordes y sombras

| Token | Valor | Origen |
|---|---|---|
| `--radius-sm` | `6px` | [SUPUESTO] badges pequeños |
| `--radius-md` | `10px` | [SUPUESTO] inputs y botones |
| `--radius-lg` | `14px` | [DISEÑO] tarjetas, esquinas redondeadas |
| `--radius-pill` | `999px` | [DISEÑO] etiquetas de estado |
| `--border-width` | `1px` | [DISEÑO] bordes finos |
| `--shadow-card` | `0 1px 2px rgba(16, 24, 40, 0.06)` | [SUPUESTO] sombra muy suave |
| `--shadow-modal` | `0 12px 32px rgba(16, 24, 40, 0.18)` | [SUPUESTO] |
| `--focus-ring` | `0 0 0 3px rgba(46, 125, 50, 0.45)` | [SUPUESTO] anillo de foco visible |

## 5. Dimensiones de layout

| Token | Valor | Origen |
|---|---|---|
| `--sidebar-width` | `240px` | [SUPUESTO] en el PDF ocupa aprox. 15–17% del ancho |
| `--header-height` | `64px` | [SUPUESTO] |
| `--content-max-width` | `1200px` | [SUPUESTO] |
| `--auth-card-width` | `440px` | [SUPUESTO] tarjeta de acceso |

## 6. Tokens de movimiento
| Token | Valor |
|---|---|
| `--transition-fast` | `150ms ease-out` |
| `--transition-base` | `250ms ease-out` |

Respetar `prefers-reduced-motion` (ver `06-responsive-accesibilidad.md`).

## Ejemplo de estructura esperada en `tokens.css`

```css
:root {
  /* Colores — marca */
  --color-primary-500: #4caf50;
  --color-primary-700: #2e7d32;
  /* ...resto de tokens según las tablas de arriba... */
}
```

Usar siempre minúsculas en los hexadecimales.
