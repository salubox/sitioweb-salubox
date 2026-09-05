# Sistema visual del sitio — Salubox 2026

Propuesta de rediseño construida sobre la nueva identidad («Presentación de la nueva
identidad — Salubox», 4 de septiembre de 2026). Misma estructura de páginas y mismo
contenido de negocio que el sitio actual; cambia la imagen y cambian los mensajes.

> **Referencia navegable: [`/sistema/`](sistema/index.html)**
> Este archivo es el resumen. La referencia completa —tokens, componentes vivos,
> reglas de marca y de voz, accesibilidad— vive en la página `/sistema/`, construida
> con el mismo CSS que el sitio. No está en el menú y va con `noindex`.

---

## 1. De dónde sale cada decisión

| Pieza de la identidad | Cómo aparece en el sitio |
|---|---|
| **Símbolo** (marco azul que protege un cuadro verde) | Es el gesto de todo el sitio: radio asimétrico y marcos de un solo trazo |
| **Logotipo con ®** | Único archivo, versión a color en encabezado y versión en blanco sobre fondos oscuros |
| **Eslogan** «Cuidamos juntos, siempre.» | **Solo** cierra el home, en la franja azul de hasta abajo. Con su coma, siempre |
| **Línea descriptora** «Vacunas y medicamento de especialidad» | Pie de página, junto al logo. Como texto, nunca como imagen |
| **Línea de alcance** «De la prevención al tratamiento, con un solo proveedor.» | Bajada del hero del home, y desarrollada en la sección «Tres momentos del cuidado» |
| **Titular del home** «Cuidamos el producto como tú cuidas al paciente.» | H1 del home; también cierra el manifiesto en Nosotros |
| **Concepto rector** «Ágiles en el servicio, cuidadosos con el producto.» | No se publica. Es la brújula con la que se escribió todo lo demás |
| **Manifiesto** | Sección propia en Nosotros, en sus cuatro tiempos (Gracias · Cuidamos · Juntos · Siempre) |
| **Valores ESCHIP** | Tabla de una línea por letra en Nosotros, más la mascota |

**Ninguna página lleva todas las frases.** El encabezado del sitio es logo solo; el eslogan
no aparece arriba en ninguna página.

### Sin Misión y Visión
Siguiendo la decisión de la identidad, la página *Nosotros* ya no tiene Misión ni Visión.
Su lugar lo ocupan el Manifiesto y los valores ESCHIP.

---

## 2. Color

| Token | Valor | Uso |
|---|---|---|
| `--azul` | `#1789B0` | Color del logotipo: marcos, bordes, trazos |
| `--azul-texto` | `#10708F` | Azul sobre blanco, 5.5:1 |
| `--azul-fuerte` | `#0E6580` | Todo relleno sólido con texto blanco: botones, héroes interiores, franja del eslogan. 6.6:1 |
| `--azul-tinte` | `#EAF5F9` | Fondos suaves y bloques de llamado |
| `--verde` | `#5A9B4A` | Acento del segundo plano: filetes, viñetas, marcos |
| `--verde-texto` | `#3E7431` | Verde sobre blanco (contraste AA) |
| `--tinta` | `#1F2933` | Texto y pie de página |
| `--tinta-suave` | `#5A6570` | Texto secundario |
| `--papel-tenue` | `#F5F9FA` | Alternancia de secciones |

El azul y el verde son exactamente los del logotipo. El azul manda (es el marco, lo que
protege); el verde acompaña en trazos delgados (es lo que se cuida). Nunca compiten.

## 3. Tipografía

**Inter**, en cuatro pesos (400/500/600/700), la misma de la presentación de identidad.
Títulos en 700 con tracking negativo (`-.022em`); rótulos de sección en 700, versalitas y
tracking positivo (`.15em`); texto corrido a 17 px y 1.65 de interlínea, máximo 68 caracteres
por línea.

## 4. Forma: la caja

El símbolo tiene las esquinas superior izquierda e inferior derecha redondeadas, y las otras
dos a escuadra. Ese radio asimétrico es la firma del sitio y se repite en botones, tarjetas,
fotos, viñetas y campos:

```css
border-radius: var(--r) 0 var(--r) 0;   /* --r: 16px · --r-chico: 10px */
```

Derivados del mismo gesto:
- `.caja--marco`: filete verde en la esquina superior izquierda de la tarjeta.
- `.rotulo--filete`: barra verde a la izquierda del rótulo de sección.
- `.portada__figura::after`: marco verde desplazado detrás de la foto del hero.
- `.lista-marcada li::before` y `.hito::before`: viñetas con la misma esquina.

## 5. Estructura de página

Encabezado fijo (logo + navegación + un solo botón) → héroe → secciones alternando
`blanco / --papel-tenue` → bloque de llamado → pie oscuro. El home añade, antes del pie, la
franja azul con el eslogan.

Ancho máximo 1180 px; secciones con respiro `clamp(64px, 8vw, 112px)`.
Punto de quiebre de la navegación: 1040 px. Rejillas: 4→2→1 y 3→2→1.

---

## 6. Archivos

```
assets/css/salubox.css      Tokens y componentes. Única fuente de verdad
assets/css/sistema.css      Andamio de /sistema/ (no lo carga ninguna otra página)
assets/js/salubox.js        Menú móvil y submenú de productos (sin dependencias)
assets/img/                 Logo a color, logo en blanco, símbolo y favicon (SVG)
index.html                  Home
<sección>/index.html        Las nueve páginas interiores
sistema/index.html          Referencia del sistema de diseño
wp-content/uploads/         Fotos, íconos y logos heredados del sitio actual
```

Sin build, sin dependencias, sin JavaScript de terceros. Publicable tal cual en GitHub Pages.
Las rutas son absolutas (`/assets/...`), así que para verlo en local hace falta un servidor:

```bash
npx --yes serve -l 4321 .
```

---

## 7. Pendientes conocidos

1. **Fotografía.** Varias fotos heredadas muestran la caja con el logotipo anterior y el
   eslogan «Estamos donde nos necesitan» (`banner-nosotros.webp`,
   `persona-entregando-cada-de-salubox.webp`, `envio-a-domicilio-garantizado.webp`).
   Hay que volver a fotografiar el empaque con la marca nueva.
2. **Resolución.** Casi todas las imágenes heredadas están por debajo de 700 px de ancho;
   se ven blandas en pantallas grandes.
3. **Catálogo de vacunas.** El PDF enlazado es el de 2023; conviene actualizarlo.
4. **Restos de WordPress.** `wp-content/cache/`, `wp-content/themes/` y
   `wp-content/uploads/dynamic_avia/` ya no los usa ninguna página y se pueden borrar.
5. **Crédito de desarrollo.** El pie anterior llevaba «Desarrollo web por Intagono Agencia
   Digital»; en esta propuesta no está. Decidir si vuelve.
6. **Formulario de contacto.** Se conservó el esquema actual (correo, teléfono y WhatsApp).
   Si se quiere formulario, hace falta un servicio externo porque el sitio es estático.
