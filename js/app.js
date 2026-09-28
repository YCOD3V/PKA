(function(){
  const ICONS = {
    normal: '<circle cx="12" cy="12" r="7.2"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/>',
    fire: '<path d="M12 2c1.3 4-2.7 5.2-2.9 8.8-.1 1.7 1.3 3.1 3 3.1s3-1.3 3-3c0-1.6-1-2.4-1-2.4s1.8.9 1.8 3.6A4.8 4.8 0 0 1 11.9 17a5 5 0 0 1-5-5.2C7.1 7.3 10.3 5.7 12 2Z" fill="currentColor"/>',
    water: '<path d="M12 3.2c3.2 4.4 6.4 8.3 6.4 12A6.4 6.4 0 0 1 5.6 15.2c0-3.7 3.2-7.6 6.4-12Z" fill="currentColor"/>',
    electric: '<path d="M13.2 2 4.6 13.8h5.7l-1 8.2 8.1-11.6h-5.6l1.4-8.4Z" fill="currentColor"/>',
    grass: '<path d="M4.5 19.5C4.5 9.5 12 4.5 19.5 4.5c0 7.8-5.8 15-15 15Z" fill="currentColor"/><path d="M5 19c3.5-3.6 7.6-6.6 12.8-10.3" stroke="var(--screen,#0e121a)" stroke-width="1.3" stroke-linecap="round" fill="none"/>',
    ice: '<path d="M12 2.5v19M4.6 7.2l14.8 9.6M4.6 16.8l14.8-9.6" stroke-width="1.7" stroke-linecap="round"/><path d="M12 5.3 9.9 6.8m2.1-1.5 2.1 1.5M12 18.7l-2.1-1.5m2.1 1.5 2.1-1.5" stroke-width="1.3" stroke-linecap="round"/>',
    fighting: '<path d="M7.5 11V7.6a2 2 0 1 1 4 0m0 .3V6.4a2 2 0 1 1 4 0v1.9m0 .2a2 2 0 1 1 4 0v4.6a6.4 6.4 0 0 1-6.4 6.4h-.7a6.4 6.4 0 0 1-6.4-6.4v-2.3a2 2 0 1 1 4 0v1.1" fill="none" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/>',
    poison: '<path d="M12 2.2 19.5 7v10L12 21.8 4.5 17V7Z" fill="none" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none"/>',
    ground: '<path d="M3 17c2.3-2.4 4.6-2.4 6.9 0s4.6 2.4 6.9 0 4.6-2.4 6.9 0" fill="none" stroke-width="1.7" stroke-linecap="round"/><path d="M12.5 6.5 10 11l3.2 1L11 17" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    flying: '<path d="M2.6 13.6C6 8.4 10.3 5.6 10.3 5.6s1.4 6-2.6 10.3c-2 2.2-3.7 2.2-5.1-2.3Z" fill="currentColor"/><path d="M12.6 13.6c3.4-5.2 7.7-8 7.7-8s1.4 6-2.6 10.3c-2 2.2-3.7 2.2-5.1-2.3Z" fill="currentColor" opacity=".55"/>',
    psychic: '<path d="M2.3 12S6.6 5.8 12 5.8 21.7 12 21.7 12 17.4 18.2 12 18.2 2.3 12 2.3 12Z" fill="none" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.7" fill="currentColor" stroke="none"/>',
    bug: '<ellipse cx="12" cy="14.3" rx="5" ry="6" fill="none" stroke-width="1.6"/><circle cx="12" cy="6.4" r="2.5" fill="none" stroke-width="1.6"/><path d="M9.3 4.6 7.6 2.6m7.1 2 1.7-2M4.7 13h2.6m9.4 0h2.6M5.6 18.4l2.2-1.6m8.6 1.6-2.2-1.6" stroke-width="1.4" stroke-linecap="round"/>',
    rock: '<path d="M3.5 17 7 8.5l3.4 2.6L14 5.3l3 4.7 3.5 1.6L19.3 17Z" fill="currentColor"/>',
    ghost: '<path d="M4.6 20V11a7.4 7.4 0 1 1 14.8 0v9l-2.3-1.8-2.3 1.8-2.3-1.8L10.2 20l-2.3-1.8Z" fill="currentColor"/><circle cx="9.6" cy="11.2" r="1.15" fill="var(--panel,#171c27)" stroke="none"/><circle cx="14.4" cy="11.2" r="1.15" fill="var(--panel,#171c27)" stroke="none"/>',
    dragon: '<path d="M4 20c.4-8 3.6-13.6 9.4-15.8-1.7 5.6-1 9 2.8 10.8-3.5 2.2-7.6 3.4-12.2 5Z" fill="currentColor"/><path d="M14 6.5c2.6.6 4.6 2.2 6 5-2.7.4-4.7-.4-6-5Z" fill="currentColor" opacity=".6"/>',
    dark: '<path d="M16.2 3.5a8.6 8.6 0 1 0 4.3 15.9A9.8 9.8 0 0 1 16.2 3.5Z" fill="currentColor"/>',
    steel: '<path d="M12 2.4 19.4 5v6.3c0 4.9-3.2 8.6-7.4 10.3-4.2-1.7-7.4-5.4-7.4-10.3V5Z" fill="none" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 8.2 15 12l-3 3.8-3-3.8Z" fill="currentColor" stroke="none"/>',
    fairy: '<path d="M12 2.3 13.8 9l6.7 1.8-6.7 1.8L12 19.4 10.2 12.6 3.5 10.8 10.2 9Z" fill="currentColor"/><path d="M18.3 15.6l.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8Z" fill="currentColor" opacity=".65"/>'
  };

  const TYPES = [
    { key:'normal',   label:'Normal',   color:'#c90000' },
    { key:'fire',     label:'Fuego',     color:'#c90000' },
    { key:'water',    label:'Agua',     color:'#c90000' },
    { key:'electric', label:'Eléctrico', color:'#c90000' },
    { key:'grass',    label:'Planta',    color:'#c90000' },
    { key:'ice',      label:'Hielo',     color:'#c90000' },
    { key:'fighting', label:'Lucha',  color:'#c90000' },
    { key:'poison',   label:'Veneno', color:'#c90000' },
    { key:'ground',   label:'Tierra',    color:'#c90000' },
    { key:'flying',   label:'Volador',   color:'#c90000' },
    { key:'psychic',  label:'Psíquico', color:'#c90000' },
    { key:'bug',      label:'Bicho',   color:'#c90000' },
    { key:'rock',     label:'Roca',    color:'#c90000' },
    { key:'ghost',    label:'Fantasma', color:'#c90000' },
    { key:'dragon',   label:'Dragón',   color:'#c90000' },
    { key:'dark',     label:'Siniestro',  color:'#c90000' },
    { key:'steel',    label:'Acero',      color:'#c90000' },
    { key:'fairy',    label:'Hada',     color:'#c90000' }
  ];
  const TYPE_MAP = Object.fromEntries(TYPES.map(t => [t.key, t]));

  // Tipo atacante -> tipos defensores contra los que tiene ventaja (2x).
  const EFFECTIVENESS = {
    normal:   [],
    fire:     ['grass','ice','bug','steel'],
    water:    ['fire','ground','rock'],
    electric: ['water','flying'],
    grass:    ['water','ground','rock'],
    ice:      ['grass','ground','flying','dragon'],
    fighting: ['normal','ice','rock','dark','steel'],
    poison:   ['grass','fairy'],
    ground:   ['fire','electric','poison','rock','steel'],
    flying:   ['grass','fighting','bug'],
    psychic:  ['fighting','poison'],
    bug:      ['grass','psychic','dark'],
    rock:     ['fire','ice','flying','bug'],
    ghost:    ['ghost','psychic'],
    dragon:   ['dragon'],
    dark:     ['ghost','psychic'],
    steel:    ['ice','rock','fairy'],
    fairy:    ['fighting','dragon','dark']
  };

  function icon(key, extraClass){
    return '<svg class="icon' + (extraClass ? ' ' + extraClass : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[key] + '</svg>';
  }

  const grid = document.getElementById('grid');
  const resultHead = document.getElementById('resultHead');
  const resultBody = document.getElementById('resultBody');
  const resultCaption = document.getElementById('resultCaption');
  const glowA = document.getElementById('glowA');
  const glowB = document.getElementById('glowB');

  let selected = [];

  TYPES.forEach(t => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'type-btn';
    btn.style.setProperty('--c', t.color);
    btn.dataset.key = t.key;
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', 'false');
    btn.innerHTML = icon(t.key) + '<span>' + t.label + '</span><span class="order-tag"></span>';
    btn.addEventListener('click', () => toggleType(t.key));
    grid.appendChild(btn);
  });

  function toggleType(key){
    const idx = selected.indexOf(key);
    if (idx > -1) {
      selected.splice(idx, 1);
    } else {
      selected.push(key);
    }
    render();
  }

  function joinLabels(labels){
    if (labels.length === 1) return labels[0];
    return labels.slice(0, -1).join(', ') + ' y ' + labels[labels.length - 1];
  }

  // intersection of super-effective targets across every selected type; null when nothing is selected
  function computeResults(keys){
    if (keys.length === 0) return null;
    return keys.reduce((acc, key) => {
      const set = new Set(EFFECTIVENESS[key]);
      return acc.filter(k => set.has(k));
    }, [...EFFECTIVENESS[keys[0]]]);
  }

  function selectOnly(key){
    selected = [key];
    render();
    document.getElementById('grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateGlow(){
    const c1 = selected[0] ? TYPE_MAP[selected[0]].color : null;
    const c2 = selected[1] ? TYPE_MAP[selected[1]].color : null;
    if (c1) { glowA.style.backgroundColor = c1; glowA.classList.add('on'); }
    else { glowA.classList.remove('on'); }
    if (c2) { glowB.style.backgroundColor = c2; glowB.classList.add('on'); }
    else { glowB.classList.remove('on'); }
  }

  function render(){
    const results = computeResults(selected);

    grid.querySelectorAll('.type-btn').forEach(btn => {
      const key = btn.dataset.key;
      const pos = selected.indexOf(key);
      const isSel = pos > -1;
      btn.classList.toggle('selected', isSel);
      btn.setAttribute('aria-selected', String(isSel));
      btn.querySelector('.order-tag').textContent = isSel && selected.length > 1 ? String(pos + 1) : '';

      const deadEnd = !isSel && results !== null && !results.some(r => EFFECTIVENESS[key].includes(r));
      btn.disabled = deadEnd;
      btn.setAttribute('aria-disabled', String(deadEnd));
      btn.classList.toggle('viable', !isSel && !deadEnd && selected.length > 0);
    });

    updateGlow();

    if (selected.length === 0) {
      resultHead.innerHTML = '';
      resultHead.className = 'result-head empty';
      resultCaption.hidden = true;
      resultBody.className = 'result-body';
      resultBody.innerHTML = '';
      return;
    }
    resultHead.className = 'result-head';

    resultCaption.hidden = false;

    const chipsHtml = selected.map((key, i) => {
      const t = TYPE_MAP[key];
      const joiner = i > 0 ? '<span class="head-join">+</span>' : '';
      return joiner + '<span class="head-chip" style="--c:' + t.color + '">' + icon(key) + t.label + '</span>';
    }).join('');

    resultHead.innerHTML = chipsHtml + '<button type="button" class="clear-btn" id="clearBtn" aria-label="Limpiar selección">&times;</button>';
    document.getElementById('clearBtn').addEventListener('click', () => { selected = []; render(); });

    const labels = selected.map(k => TYPE_MAP[k].label);
    resultCaption.textContent = selected.length === 1
      ? labels[0] + ' tiene ventaja estratégica contra'
      : joinLabels(labels) + ' tienen ventaja estratégica contra';

    if (results.length === 0) {
      resultBody.className = 'result-body empty';
      const msg = selected.length === 1
        ? labels[0] + ' no tiene ventaja ofensiva contra ningún tipo.'
        : 'No hay tipos en común entre ' + joinLabels(labels) + '.';
      resultBody.innerHTML = icon('ghost') + '<span>' + msg + '</span>';
      return;
    }

    resultBody.className = 'result-body';
    resultBody.innerHTML = results.map((key, i) => {
      const t = TYPE_MAP[key];
      return '<button type="button" class="result-chip" style="--c:' + t.color + ';--i:' + i + '" data-key="' + key + '">' + icon(key) + t.label + '</button>';
    }).join('');

    resultBody.querySelectorAll('.result-chip').forEach(chip => {
      chip.addEventListener('click', () => selectOnly(chip.dataset.key));
    });
  }

  const app = document.getElementById('app');
  const homeTab = document.getElementById('homeTab');
  const pokedexTab = document.getElementById('pokedexTab');
  const huntsTab = document.getElementById('huntsTab');
  const calculatorTab = document.getElementById('calculatorTab');
  const aboutTab = document.getElementById('aboutTab');
  const homePanel = document.getElementById('homePanel');
  const pokedexPanel = document.getElementById('pokedexPanel');
  const huntsPanel = document.getElementById('huntsPanel');
  const calculatorPanel = document.getElementById('calculatorPanel');
  const aboutPanel = document.getElementById('aboutPanel');
  const tabs = [homeTab, aboutTab, pokedexTab, huntsTab, calculatorTab];
  const panels = { home: homePanel, pokedex: pokedexPanel, hunts: huntsPanel, calculator: calculatorPanel, about: aboutPanel };
  const huntSearch = document.getElementById('huntSearch');
  const tierFilter = document.getElementById('tierFilter');
  const zoneFilter = document.getElementById('zoneFilter');
  const huntRows = document.getElementById('huntRows');
  const huntCount = document.getElementById('huntCount');
  const huntEmpty = document.getElementById('huntEmpty');
  const pokedexSearch = document.getElementById('pokedexSearch');
  const pokedexTier = document.getElementById('pokedexTier');
  const pokedexType = document.getElementById('pokedexType');
  const pokedexGrid = document.getElementById('pokedexGrid');
  const pokedexCount = document.getElementById('pokedexCount');
  const pokedexEmpty = document.getElementById('pokedexEmpty');
  const pokedexClear = document.getElementById('pokedexClear');
  const pokemonDialog = document.getElementById('pokemonDialog');
  const pokemonDialogSprite = document.getElementById('pokemonDialogSprite');
  const pokemonDialogName = document.getElementById('pokemonDialogName');
  const pokemonDialogInfo = document.getElementById('pokemonDialogInfo');
  const pokemonDialogLocations = document.getElementById('pokemonDialogLocations');
  let selectedHuntRecord = null;
  const pokemonDialogHunt = document.getElementById('pokemonDialogHunt');
  const pokedex = Array.isArray(window.POKEDEX_DATA) ? window.POKEDEX_DATA : [];
  const mapDialog = document.getElementById('mapDialog');
  const mapDialogTitle = document.getElementById('mapDialogTitle');
  const mapDialogImage = document.getElementById('mapDialogImage');
  const mapDialogClose = document.getElementById('mapDialogClose');
  const hunts = Array.isArray(window.HUNTS_DATA) ? window.HUNTS_DATA : [];
  const zones = ['normal', 'wildscape', 'hoenn'];
  const zoneLabels = { normal: 'Hunt normal', wildscape: 'Wildscape', hoenn: 'Hoenn' };

  function showView(view, updateHash){
    const activeView = Object.prototype.hasOwnProperty.call(panels, view) ? view : 'home';
    app.dataset.view = activeView;
    Object.entries(panels).forEach(([key, panel]) => { panel.hidden = key !== activeView; });
    tabs.forEach(tab => {
      const active = tab.id === activeView + 'Tab';
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    if (updateHash && location.hash !== '#' + activeView) location.hash = activeView;
  }

  tabs.forEach(tab => tab.addEventListener('click', () => showView(tab.id.replace('Tab', ''), true)));
  window.addEventListener('hashchange', () => {
    const hash = location.hash.slice(1).toLowerCase();
    showView(hash === 'hunts' || hash === 'calculator' || hash === 'pokedex' || hash === 'about' ? hash : 'home', false);
  });
  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', event => {
      let next = null;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== null) { event.preventDefault(); tabs[next].focus(); tabs[next].click(); }
    });
  });
  const initialHash = location.hash.slice(1).toLowerCase();
  showView(initialHash === 'hunts' || initialHash === 'calculator' || initialHash === 'pokedex' || initialHash === 'about' ? initialHash : 'home', false);
  function escapeHtml(value){
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }

  function hasZoneData(record, zone){
    const entry = record[zone];
    return entry && ((entry.maps && entry.maps.length > 0) || entry.note);
  }

  function renderLocation(entry, pokemonName, zone){
    if (!entry) return '<span class="unavailable">—</span>';
    const mapLinks = (entry.maps || []).map((url, index) => {
      const safeUrl = escapeHtml(url);
      const alt = escapeHtml(pokemonName + ' — mapa de ' + zoneLabels[zone] + (index ? ' ' + (index + 1) : ''));
      return '<a class="map-link" href="' + safeUrl + '" aria-label="Ver ' + alt + ' ampliado en esta página"><img src="' + safeUrl + '" alt="' + alt + '" loading="lazy" decoding="async"></a>';
    }).join('');
    const note = entry.note ? '<span class="location-note">' + escapeHtml(entry.note) + '</span>' : '';
    return mapLinks || note ? '<div class="map-links">' + mapLinks + note + '</div>' : '<span class="unavailable">—</span>';
  }

  function renderHunts(){
    const query = huntSearch.value.trim().toLocaleLowerCase('es');
    const tier = tierFilter.value;
    const zone = zoneFilter.value;
    const filtered = hunts.filter(record => {
      const matchesQuery = !query || (record.name + ' ' + record.id + ' ' + record.tier).toLocaleLowerCase('es').includes(query);
      const matchesTier = !tier || record.tier === tier;
      const matchesZone = !zone || hasZoneData(record, zone);
      return matchesQuery && matchesTier && matchesZone;
    });

    huntRows.innerHTML = filtered.map(record => {
      const tierClass = String(record.tier).toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return '<tr>' +
        '<td><div class="pokemon-cell"><img class="pokemon-sprite" src="' + escapeHtml(record.sprite) + '" alt="" loading="lazy" decoding="async"><div><span class="pokemon-name">' + escapeHtml(record.name) + '</span><span class="pokemon-number">#' + escapeHtml(record.id) + '</span></div></div></td>' +
        '<td><span class="tier-badge tier-' + tierClass + '">' + escapeHtml(record.tier) + '</span></td>' +
        zones.map(key => '<td>' + renderLocation(record[key], record.name, key) + '</td>').join('') +
      '</tr>';
    }).join('');
    huntCount.textContent = filtered.length + ' Pokémon';
    huntEmpty.hidden = filtered.length > 0;
  }

  Array.from(new Set(hunts.map(record => record.tier).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }))
    .forEach(tier => {
      const option = document.createElement('option');
      option.value = tier;
      option.textContent = tier;
      tierFilter.appendChild(option);
    });
  huntSearch.addEventListener('input', renderHunts);
  tierFilter.addEventListener('change', renderHunts);
  zoneFilter.addEventListener('change', renderHunts);

  function openMapFromLink(link){
    const preview = link.querySelector('img');
    mapDialogTitle.textContent = preview ? preview.alt.replace(/^.*?\u2014 /, '') : 'Mapa de localizaci\u00f3n';
    mapDialogImage.src = link.href;
    mapDialog.showModal();
  }
  [huntRows, pokemonDialogLocations].forEach(container => container.addEventListener('click', event => {
    const link = event.target.closest('.map-link');
    if (!link) return;
    event.preventDefault();
    openMapFromLink(link);
  }));
  mapDialogClose.addEventListener('click', () => mapDialog.close());
  mapDialog.addEventListener('click', event => {
    if (event.target === mapDialog) mapDialog.close();
  });
  mapDialog.addEventListener('close', () => { mapDialogImage.removeAttribute('src'); });

  renderHunts();
  function fallbackPokemonSprite(image){
    if (image.dataset.fallbackAttempted === 'true') {
      image.classList.add('sprite-missing');
      return;
    }
    image.dataset.fallbackAttempted = 'true';
    const id = Number(image.dataset.pokemonId);
    const shiny = image.dataset.variant === 'shiny';
    image.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
      (shiny ? 'shiny/' : '') + id + '.png';
  }

  function renderPokedex(){
    const query = pokedexSearch.value.trim().toLocaleLowerCase('es');
    const tier = pokedexTier.value;
    const type = pokedexType.value;
    const filtered = pokedex.filter(pokemon => {
      const matchesName = !query || (pokemon.name + ' ' + pokemon.id).toLocaleLowerCase('es').includes(query);
      const matchesTier = !tier || pokemon.tier === tier;
      const matchesType = !type || pokemon.types.includes(type);
      return matchesName && matchesTier && matchesType;
    });
    pokedexGrid.innerHTML = filtered.map(pokemon => {
      const typeClass = pokemon.types.length ? ' type-' + escapeHtml(pokemon.types[0]) : '';
      return '<button class="dex-card' + typeClass + '" type="button" data-name="' + escapeHtml(pokemon.name) + '">' +
        '<span class="dex-sprite-wrap"><img class="dex-sprite" src="' + escapeHtml(pokemon.sprite) + '" data-pokemon-id="' + pokemon.id + '" data-variant="' + escapeHtml(pokemon.variant) + '" alt="" loading="lazy" decoding="async"></span>' +
        '<span class="dex-info"><span class="dex-name">' + escapeHtml(pokemon.name) + '</span>' +
        '<span class="dex-meta">' + pokemon.typeLabels.map(label => '<span class="dex-type">' + escapeHtml(label) + '</span>').join('') +
        (pokemon.tier ? '<span class="dex-tier">' + escapeHtml(pokemon.tier) + '</span>' : '') + '<span class="dex-tier">Gen. ' + pokemon.generation + (pokemon.variant === 'shiny' ? ' \u00b7 Shiny' : '') + '</span></span></span></button>';
    }).join('');
    pokedexCount.textContent = filtered.length.toLocaleString('es') + ' Pokémon';
    pokedexEmpty.hidden = filtered.length > 0;
  }

  Array.from(new Set(pokedex.map(pokemon => pokemon.tier).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }))
    .forEach(tier => {
      const option = document.createElement('option');
      option.value = tier;
      option.textContent = tier;
      pokedexTier.appendChild(option);
    });
  Array.from(new Map(pokedex.flatMap(pokemon => pokemon.types.map((type, index) => [type, pokemon.typeLabels[index]]))).entries())
    .sort((a, b) => a[1].localeCompare(b[1], 'es'))
    .forEach(([type, label]) => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = label;
      pokedexType.appendChild(option);
    });
  pokedexSearch.addEventListener('input', renderPokedex);
  pokedexTier.addEventListener('change', renderPokedex);
  pokedexType.addEventListener('change', renderPokedex);
  pokedexClear.addEventListener('click', () => {
    pokedexSearch.value = '';
    pokedexTier.value = '';
    pokedexType.value = '';
    renderPokedex();
  });
  pokedexGrid.addEventListener('click', event => {
    const card = event.target.closest('.dex-card');
    if (!card) return;
    const pokemon = pokedex.find(entry => entry.name === card.dataset.name);
    if (!pokemon) return;
    pokemonDialogName.textContent = pokemon.name;
    pokemonDialogSprite.dataset.pokemonId = pokemon.id;
    pokemonDialogSprite.dataset.variant = pokemon.variant;
    pokemonDialogSprite.dataset.fallbackAttempted = 'false';
    pokemonDialogSprite.classList.remove('sprite-missing');
    pokemonDialogSprite.src = pokemon.sprite;
    pokemonDialogSprite.alt = pokemon.name;
    pokemonDialogInfo.textContent = [pokemon.typeLabels.join(' / '), pokemon.tier ? 'Tier ' + pokemon.tier : 'Tier especial/sin clasificar', '#' + String(pokemon.id).padStart(3, '0'), 'Generaci\u00f3n ' + pokemon.generation, pokemon.variant === 'shiny' ? 'Shiny' : 'Normal'].filter(Boolean).join(' · ');
    const baseName = pokemon.name.replace(/^Shiny\s+/i, '').toLocaleLowerCase('es');
    selectedHuntRecord = hunts.find(entry => Number(entry.id) === Number(pokemon.id)) ||
      hunts.find(entry => entry.name.toLocaleLowerCase('es') === baseName) || null;
    pokemonDialogLocations.innerHTML = selectedHuntRecord
      ? '<h3>Mapas de localizaci\u00f3n</h3>' + zones.map(zone => {
          const entry = selectedHuntRecord[zone];
          return '<div class="pokemon-location-row"><strong>' + escapeHtml(zoneLabels[zone]) + '</strong>' + renderLocation(entry, selectedHuntRecord.name, zone) + '</div>';
        }).join('')
      : '<h3>Mapas de localizaci\u00f3n</h3><p class="location-empty">Todav\u00eda no hay mapas para este Pok\u00e9mon.</p>';
    const hasMaps = selectedHuntRecord && zones.some(zone => hasZoneData(selectedHuntRecord, zone));
    pokemonDialogHunt.disabled = !selectedHuntRecord;
    pokemonDialogHunt.textContent = selectedHuntRecord ? 'Ver en Localizaciones' : 'Sin datos de localizaci\u00f3n';
    pokemonDialogHunt.hidden = !selectedHuntRecord || !hasMaps;
    pokemonDialog.showModal();
  });
  document.getElementById('pokemonDialogClose').addEventListener('click', () => pokemonDialog.close());
  pokemonDialog.addEventListener('click', event => { if (event.target === pokemonDialog) pokemonDialog.close(); });
  pokemonDialogHunt.addEventListener('click', () => {
    const name = selectedHuntRecord ? selectedHuntRecord.name : pokemonDialogName.textContent.replace(/^Shiny\s+/i, '');
    pokemonDialog.close();
    showView('hunts', true);
    huntSearch.value = name;
    renderHunts();
  });
  pokedexGrid.addEventListener('error', event => {
    if (event.target.matches('.dex-sprite')) fallbackPokemonSprite(event.target);
  }, true);
  pokemonDialogSprite.addEventListener('error', () => fallbackPokemonSprite(pokemonDialogSprite));
  render();
})();






