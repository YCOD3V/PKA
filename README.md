# The Akatsuki — Pokédex, Hunts y calculadora

Sitio estático en español con cuatro secciones: **Inicio**, **Pokédex**, **Localizaciones (Hunts)** y **Calculadora de ventajas**. Los mapas se abren dentro de la página. La interfaz usa una paleta inspirada en Akatsuki y sprites Pokémon en pixel art.

## Estructura

- `index.html`: página principal y navegación por pestañas.
- `css/styles.css`: estilos y diseño adaptable.
- `js/app.js`: filtros, navegación, mapas y calculadora de tipos.
- `js/hunts-data.js`: localizaciones, tiers y sprites de Hunts.
- `js/pokedex-data.js`: catálogo de PokeAlliance con Pokémon normales y shiny, tipos, tiers y generaciones.
- `assets/` e `img/`: recursos visuales del sitio.

## Datos de la Pokédex

El catálogo local contiene **910 registros** de la [API pública de Alliance PokeTibia Wiki](https://wiki.pokealliance.com/api/pokemon), incluidos Pokémon normales y variocolor. La consulta usada registró 88 entradas Tier 1. Los sprites proceden de la wiki y requieren conexión a internet; el sitio no consulta la API al ejecutarse.