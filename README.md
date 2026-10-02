# The Akatsuki — Pokédex, Hunts y calculadora

Sitio estático en español con nueve secciones: **Inicio**, **¿Quiénes somos?**, **Rotaciones**, **Pokédex**, **Hazard**, **Localizaciones** y **Calculadora de ventajas**. Los mapas se abren dentro de la página. La interfaz usa una paleta inspirada en Akatsuki y sprites Pokémon en pixel art.

## Estructura

- `index.html`: página principal y navegación por pestañas.
- `css/styles.css`: estilos y diseño adaptable.
- `js/app.js`: filtros, navegación, mapas, rotaciones y calculadora de tipos.
- `js/hunts-data.js`: localizaciones, tiers y sprites de Hunts.
- `js/pokedex-data.js`: catálogo de PokeAlliance con Pokémon normales y shiny, tipos, tiers y generaciones.
- `js/rotaciones-data.js`: equipos, mejoras y notas por elemento.
- `assets/` e `img/`: recursos visuales del sitio.

## Datos de la Pokédex y rotaciones

El catálogo local contiene **910 registros** de la [API pública de Alliance PokeTibia Wiki](https://wiki.pokealliance.com/api/pokemon), incluidos Pokémon normales y Shiny. La consulta usada registró 88 entradas de Categoría 1. Los sprites de rotaciones se enlazan desde la guía comunitaria de referencia; el sitio no consulta APIs para construir sus vistas.


La guía de Hazard también está disponible en la pestaña **Hazard** (fragmento #hazard).
