# The Akatsuki — Hunts y calculadora de ventajas

Sitio estático en español con dos secciones: **Localizaciones (Hunts)** y **Calculadora de ventajas**. La interfaz usa una paleta inspirada en Akatsuki y sprites Pokémon en pixel art.

## Estructura

- `index.html`: página principal y navegación por pestañas.
- `css/styles.css`: estilos adaptables.
- `js/app.js`: filtros, navegación y calculadora de tipos.
- `js/hunts-data.js`: localizaciones, tiers y sprites tomados de la referencia adjunta.
- `img/LogoClan.png`: emblema de la cabecera.
- `assets/`: espacio para recursos adicionales.

La captura entregada como referencia contiene **391 registros**. La página original muestra un contador de 904, por lo que el conjunto de datos local no pretende cubrir el catálogo completo. Los mapas se enlazan desde Imgur y los sprites desde PokeAPI; se necesita conexión para cargarlos.

## Ejecutar localmente

Abre `index.html` en el navegador. No requiere instalación de dependencias ni compilación.

## Publicar

### GitHub Pages

1. Sube el proyecto a GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. Elige **Deploy from a branch**, selecciona la rama `master` y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub Pages publique el sitio.

### Vercel

Importa el repositorio desde GitHub. Selecciona **Other** como framework y deja vacíos el comando de compilación y el directorio de salida. No hace falta `vercel.json`.

## Rutas y navegación

CSS, JavaScript y logo usan rutas relativas. Las dos vistas se controlan con fragmentos (`#hunts` y `#calculator`), compatibles con GitHub Pages y Vercel sin reglas de reescritura.
