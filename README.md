# The Akatsuki — Calculador de ventajas

Sitio web estático en español para consultar las ventajas entre tipos Pokémon, con una interfaz inspirada en Akatsuki.

## Estructura

- `index.html`: página principal.
- `css/styles.css`: estilos y diseño adaptable.
- `js/app.js`: interacción y cálculo de ventajas.
- `img/LogoClan.png`: logotipo mostrado en la cabecera.
- `assets/`: espacio reservado para recursos adicionales.

## Ejecutar localmente

Abre `index.html` en el navegador. También puedes servir la carpeta raíz con cualquier servidor estático. No requiere instalación de dependencias ni proceso de compilación.

## Publicar

### GitHub Pages

1. Sube el contenido del proyecto a un repositorio de GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios y espera a que GitHub Pages publique el sitio.

### Vercel

Importa el repositorio desde GitHub en Vercel. Selecciona **Other** como framework y deja vacíos el comando de compilación y el directorio de salida. La raíz del repositorio contiene `index.html`, así que no hace falta `vercel.json`.

## Rutas

Los recursos locales se enlazan con rutas relativas (`./css/styles.css`, `./js/app.js` y `./img/LogoClan.png`) para funcionar desde la raíz del dominio y en despliegues estáticos.
