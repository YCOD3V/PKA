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

  const bossWeaknesses = {
    Steelix: ['fire','water','fighting','ground'],
    Jynx: ['fire','bug','rock','ghost','dark','steel'],
    Tentacruel: ['electric','ground','psychic'],
    Marowak: ['water','grass','ice']
  };
  const bossTypeColors = {
    fire:'#f08030',water:'#6890f0',fighting:'#c03028',ground:'#e0c068',bug:'#a8b820',
    rock:'#b8a038',ghost:'#705898',dark:'#705848',steel:'#b8b8d0',electric:'#f8d030',
    psychic:'#f85888',grass:'#78c850',ice:'#98d8d8',fairy:'#ee99ac',dragon:'#7038f8',
    flying:'#a890f0',poison:'#a040a0',normal:'#a8a878'
  };
  document.querySelectorAll('.guild-boss-card').forEach(card => {
    const name = card.querySelector('h2')?.textContent.trim();
    const weaknesses = bossWeaknesses[name];
    const weaknessRow = card.querySelector('p');
    if (!weaknesses || !weaknessRow) return;
    weaknessRow.innerHTML = '<strong>Debilidades:</strong><span class="boss-weakness-types">' + weaknesses.map(key => {
      const type = TYPE_MAP[key];
      return '<span class="boss-type-chip" style="--type-color:' + bossTypeColors[key] + '">' + icon(key) + '<span>' + type.label + '</span></span>';
    }).join('') + '</span>';
  });

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
  const gymsTab = document.getElementById('gymsTab');
  const gymsPanel = document.getElementById('gymsPanel');
  const pokedexTab = document.getElementById('pokedexTab');
  const hazardTab = document.getElementById('hazardTab');
  const huntsTab = document.getElementById('huntsTab');
  const calculatorTab = document.getElementById('calculatorTab');
  const aboutTab = document.getElementById('aboutTab');
  const rotationsTab = document.getElementById('rotationsTab');
  const guildBossesTab = document.getElementById('guild-bossesTab');
  const rocketsTab = document.getElementById('rocketsTab');
  const homePanel = document.getElementById('homePanel');
  const pokedexPanel = document.getElementById('pokedexPanel');
  const hazardPanel = document.getElementById('hazardPanel');
  const huntsPanel = document.getElementById('huntsPanel');
  const calculatorPanel = document.getElementById('calculatorPanel');
  const aboutPanel = document.getElementById('aboutPanel');
  const rotationsPanel = document.getElementById('rotationsPanel');
  const guildBossesPanel = document.getElementById('guild-bossesPanel');
  const rocketsPanel = document.getElementById('rocketsPanel');
  const challengeMenu = document.getElementById('challengesMenu');
  const tabs = [homeTab, aboutTab, rotationsTab, gymsTab, pokedexTab, huntsTab, calculatorTab, hazardTab, rocketsTab, guildBossesTab];
  const panels = { home: homePanel, about: aboutPanel, rotations: rotationsPanel, gyms: gymsPanel, 'guild-bosses': guildBossesPanel, rockets: rocketsPanel, pokedex: pokedexPanel, hazard: hazardPanel, hunts: huntsPanel, calculator: calculatorPanel };
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
  const rotationsData = window.ROTACIONES_DATA || null;
  const mapDialog = document.getElementById('mapDialog');
  const mapDialogTitle = document.getElementById('mapDialogTitle');
  const mapDialogImage = document.getElementById('mapDialogImage');
  const mapDialogClose = document.getElementById('mapDialogClose');
  const hunts = Array.isArray(window.HUNTS_DATA) ? window.HUNTS_DATA : [];
  const zones = ['normal', 'wildscape', 'hoenn'];
  const zoneLabels = { normal: 'Cacería normal', wildscape: 'Wildscape', hoenn: 'Hoenn' };

  function showView(view, updateHash){
    const activeView = Object.prototype.hasOwnProperty.call(panels, view) ? view : 'home';
    app.dataset.view = activeView;
    Object.entries(panels).forEach(([key, panel]) => { panel.hidden = key !== activeView; });
    tabs.forEach(tab => {
      const active = tab.id === activeView + 'Tab';
      tab.classList.toggle('active', active);
      if (tab.hasAttribute('aria-selected')) tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    const challengeActive = ['hazard','rockets','guild-bosses','gyms'].includes(activeView);
    document.getElementById('challengesMenuButton').classList.toggle('active', challengeActive);
    challengeMenu.open = false;
    if (updateHash && location.hash !== '#' + activeView) location.hash = activeView;
  }

  tabs.forEach(tab => tab.addEventListener('click', () => showView(tab.dataset.view || tab.id.replace('Tab', ''), true)));
  challengeMenu.addEventListener('click', event => {
    const selectedTab = event.target.closest('.section-subtab');
    if (!selectedTab) return;
    challengeMenu.open = false;
    const selectedPanel = panels[selectedTab.dataset.view];
    if (selectedPanel) {
      selectedPanel.focus({preventScroll:true});
      selectedPanel.scrollIntoView({block:'start'});
    }
  });
  window.addEventListener('hashchange', () => {
    const hash = location.hash.slice(1).toLowerCase();
    showView(hash === 'hunts' || hash === 'calculator' || hash === 'pokedex' || hash === 'hazard' || hash === 'about' || hash === 'rotations' || hash === 'guild-bosses' || hash === 'rockets' || hash === 'gyms' ? hash : 'home', false);
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
  showView(initialHash === 'hunts' || initialHash === 'calculator' || initialHash === 'pokedex' || initialHash === 'hazard' || initialHash === 'about' || initialHash === 'rotations' || initialHash === 'guild-bosses' || initialHash === 'rockets' || initialHash === 'gyms' ? initialHash : 'home', false);
  function escapeHtml(value){
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }

  const gyms = [
    {city:'Pewter',leader:'Brock',type:'Roca',badge:'Boulder Badge',task:['Marowak','Steelix'],team:['Shiny Marowak','Shiny Onix','Shiny Rhydon','Shiny Golem','Aerodactyl','Shiny Steelix']},
    {city:'Cerulean',leader:'Misty',type:'Agua',badge:'Cascade Badge',task:['Blastoise','Feraligatr'],team:['Shiny Blastoise','Shiny Vaporeon','Shiny Tentacruel','Shiny Feraligatr','Shiny Politoed','Shiny Mantine']},
    {city:'Vermilion',leader:'Lt. Surge',type:'Eléctrico',badge:'Thunder Badge',task:['Raichu','Lanturn'],team:['Shiny Magneton','Shiny Ampharos','Shiny Raichu','Shiny Lanturn','Shiny Jolteon','Shiny Electabuzz']},
    {city:'Celadon',leader:'Erika',type:'Planta',badge:'Rainbow Badge',task:['Venusaur','Meganium'],team:['Shiny Exeggutor','Shiny Venusaur','Shiny Meganium','Shiny Tangela','Shiny Vileplume','Vileplume']},
    {city:'Fuchsia',leader:'Koga',type:'Veneno',badge:'Soul Badge',task:['Muk','Tentacruel'],team:['Shiny Nidoking','Shiny Nidoqueen','Shiny Crobat','Shiny Tentacruel','Shiny Venomoth','Shiny Muk']},
    {city:'Saffron',leader:'Sabrina',type:'Psíquico',badge:'Marsh Badge',task:['Espeon','Xatu'],team:['Shiny Alakazam','Shiny Xatu','Shiny Wobbuffet','Shiny Espeon','Shiny Mr. Mime','Shiny Hypno']},
    {city:'Cinnabar',leader:'Blaine',type:'Fuego',badge:'Volcano Badge',task:['Charizard','Typhlosion'],team:['Shiny Magmar','Shiny Flareon','Shiny Ninetales','Shiny Arcanine','Shiny Charizard','Shiny Typhlosion']},
    {city:'Viridian',leader:'Giovanni',type:'Tierra',badge:'Earth Badge',task:['Nidoqueen','Nidoking'],team:['Shiny Kangaskhan','Shiny Nidoking','Shiny Nidoqueen','Shiny Dugtrio','Shiny Persian','Shiny Rhydon']}
  ];
  const gymMapImages = Object.fromEntries(gyms.map(gym => [gym.city, './assets/gym-maps/' + gym.city.toLowerCase() + '.png']));
  const gymGrid = document.getElementById('gymGrid');
  const gymBadgeSpriteIds = {
    'Earth Badge':38284,'Volcano Badge':38283,'Boulder Badge':38277,'Cascade Badge':38278,
    'Thunder Badge':38279,'Rainbow Badge':38280,'Soul Badge':38281,'Marsh Badge':38282
  };
  const gymBadgeIcon = badge => 'https://pokealliancewiki.com/sprites/items/cliente/' + gymBadgeSpriteIds[badge] + '.png?v=4223ae0a';
  const talentMaterials = [
    {badge:'Boulder Badge',items:[['1','Boulder Badge','boulder-badge','/sprites/items/cliente/38277.png'],['1.500','Stone Rocks','stone-rocks','/sprites/items/cliente/35862.png'],['1.500','Horn Drill','horn-drill','/sprites/items/cliente/35898.png'],['1.100','Bone','bone','/sprites/items/cliente/35891.png'],['900','Steelix Tail','steelix-tail','/sprites/items/cliente/35994.png'],['500','Rock Stone','rock-stone','/sprites/items/stones/rock-stone.png'],['500','Earth Stone','earth-stone','/sprites/items/stones/earth-stone.png']]},
    {badge:'Cascade Badge',items:[['1','Cascade Badge','cascade-badge','/sprites/items/cliente/38278.png'],['900','Lapras Fin','lapras-fin','/sprites/items/cliente/35917.png'],['1.100','Gyarados Tail','gyarados-tail','/sprites/items/cliente/35916.png'],['1.500','Aquatic Tail','aquatic-tail','/sprites/items/cliente/35920.png'],['1.500','Water Cannon','water-cannon','/sprites/items/cliente/35795.png'],['500','Water Stone','water-stone','/sprites/items/stones/water-stone.png'],['500','Ice Stone','ice-stone','/sprites/items/stones/ice-stone.png']]},
    {badge:'Thunder Badge',items:[['1','Thunder Badge','thunder-badge','/sprites/items/cliente/38279.png'],['1.100','Electric Sheep Tail','electric-sheep-tail','/sprites/items/cliente/35967.png'],['1.500','Electric Tail','electric-tail','/sprites/items/cliente/35911.png'],['1.500','Electric Ear','electric-ear','/sprites/items/cliente/35812.png'],['900','Electric Collar','electric-collar','/sprites/items/cliente/35921.png'],['1.000','Thunder Stone','thunder-stone','/sprites/items/stones/thunder-stone.png']]},
    {badge:'Rainbow Badge',items:[['1','Rainbow Badge','rainbow-badge','/sprites/items/cliente/38280.png'],['1.500','Red Petal','red-petal','/sprites/items/cliente/35789.png'],['1.500','Big Petal','big-petal','/sprites/items/cliente/35940.png'],['1.100','Coconut Leaves','coconut-leaves','/sprites/items/cliente/35889.png'],['900','Vine Hair','vine-hair','/sprites/items/cliente/35900.png'],['500','Leaf Stone','leaf-stone','/sprites/items/stones/leaf-stone.png'],['500','Cocoon Stone','cocoon-stone','/sprites/items/stones/cocoon-stone.png']]},
    {badge:'Soul Badge',items:[['1','Soul Badge','soul-badge','/sprites/items/cliente/38281.png'],['1.500','Queen Ear','queen-ear','/sprites/items/cliente/35817.png'],['1.500','King Ear','king-ear','/sprites/items/cliente/35820.png'],['1.100','Giant Bat Wing','giant-bat-wing','/sprites/items/cliente/35955.png'],['900','Stinky Hand','stinky-hand','/sprites/items/cliente/35875.png'],['1.000','Venom Stone','venom-stone','/sprites/items/stones/venom-stone.png']]},
    {badge:'Marsh Badge',items:[['1','Marsh Badge','marsh-badge','/sprites/items/cliente/38282.png'],['1.500','Psychic Moustache','psychic-moustache','/sprites/items/cliente/35851.png'],['1.500','Two-Eyed Black Tail','two-eyed-black-tail','/sprites/items/cliente/35988.png'],['1.100','Xatu Wing','xatu-wing','/sprites/items/cliente/35964.png'],['900','Giraffe Antenna','giraffe-antenna','/sprites/items/cliente/35989.png'],['1.000','Enigma Stone','enigma-stone','/sprites/items/stones/enigma-stone.png']]},
    {badge:'Volcano Badge',items:[['1','Volcano Badge','volcano-badge','/sprites/items/cliente/38283.png'],['1.500','Fire Wing','fire-wing','/sprites/items/cliente/35792.png'],['1.500','Magma Foot','magma-foot','/sprites/items/cliente/35912.png'],['1.100','Giant Piece of Fur','giant-piece-of-fur','/sprites/items/cliente/35845.png'],['900','Magma Shell','magma-shell','/sprites/items/cliente/36005.png'],['1.000','Fire Stone','fire-stone','/sprites/items/stones/fire-stone.png']]},
    {badge:'Earth Badge',items:[['1','Earth Badge','earth-badge','/sprites/items/cliente/38284.png'],['1.500','Snorlax Paw','snorlax-paw','/sprites/items/cliente/35929.png'],['1.500','Bear Claw','bear-claw','/sprites/items/cliente/36003.png'],['1.100','Cow Tail','cow-tail','/sprites/items/cliente/36027.png'],['450','Wigglytuff Ear','wigglytuff-ear','/sprites/items/cliente/35826.png'],['450','Pink Wings','pink-wings','/sprites/items/cliente/35822.png'],['1.000','Heart Stone','heart-stone','/sprites/items/stones/heart-stone.png']]}
  ];
  const gymItemSprite = path => 'https://pokealliancewiki.com' + path + '?v=4223ae0a';
  const gymItemUrl = slug => 'https://pokealliancewiki.com/es/items/' + encodeURIComponent(slug) + '/';
  const gymMaterialsList = document.getElementById('gymMaterialsList');
  gymMaterialsList.innerHTML = talentMaterials.map(talent => '<details class="gym-talent"><summary><img src="' + escapeHtml(gymBadgeIcon(talent.badge)) + '" alt=""><span>' + escapeHtml(talent.badge) + '</span><span class="gym-talent-chevron" aria-hidden="true">⌄</span></summary><div class="gym-talent-items">' + talent.items.map(([quantity,name,slug,sprite]) => '<a class="gym-material" href="' + escapeHtml(gymItemUrl(slug)) + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHtml(quantity + ' ' + name) + '"><span class="gym-material-sprite"><span class="gym-material-viewport' + (sprite.includes('/stones/') ? ' gym-material-viewport--animated' : '') + '"><img src="' + escapeHtml(gymItemSprite(sprite)) + '" alt="' + escapeHtml(name) + '" loading="lazy"></span><span class="gym-material-sprite-quantity">' + escapeHtml(quantity) + '</span></span><span class="gym-material-name">' + escapeHtml(name) + '</span></a>').join('') + '</div></details>').join('');

  gymMaterialsList.addEventListener('click', event => {
    const summary = event.target.closest('.gym-talent > summary');
    if (!summary) return;
    const selected = summary.parentElement;
    if (selected.open) return;
    gymMaterialsList.querySelectorAll('.gym-talent[open]').forEach(openTalent => {
      if (openTalent !== selected) openTalent.open = false;
    });
  });
  const gymSprite = (name, shiny) => {
    const entry = rotationPokemonInfo((shiny ? 'Shiny ' : '') + name);
    return entry && entry.sprite ? entry.sprite : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (shiny ? 'shiny/' : '') + ((entry && entry.id) || 0) + '.png';
  };
  const gymLeaderSprite = leader => 'https://play.pokemonshowdown.com/sprites/trainers/' + ({'Lt. Surge':'ltsurge'}[leader] || leader.toLowerCase().replaceAll(' ','')) + '.png';
  const gymInfoDialog = document.getElementById('gymInfoDialog');
  const gymInfoTitle = document.getElementById('gymInfoTitle');
  const gymInfoBody = document.getElementById('gymInfoBody');
  const gymMapDialog = document.getElementById('gymMapDialog');
  const gymMapDialogTitle = document.getElementById('gymMapDialogTitle');
  const gymMapDialogImage = document.getElementById('gymMapDialogImage');

  function renderGymDetails(gym){
    return `<article class="gym-card gym-detail-card"><header><img class="gym-leader-sprite" src="${escapeHtml(gymLeaderSprite(gym.leader))}" alt="Sprite de ${escapeHtml(gym.leader)}" loading="lazy"><div><h2>${escapeHtml(gym.leader)}</h2><span class="gym-city">${escapeHtml(gym.city)} \u00b7 ${escapeHtml(gym.type)}</span></div></header><p class="gym-row"><strong>Tarea de Alfred:</strong> derrota 10 Shiny de cada especie. Recompensa: 1.000.000 XP y 5 Bubble Gum.</p><div class="gym-task-list">${gym.task.map(name => `<span class="gym-pokemon"><img src="${escapeHtml(gymSprite(name,true))}" alt="" loading="lazy"><span>10 Shiny ${escapeHtml(name)}</span></span>`).join('')}</div><p class="gym-row"><strong class="gym-dungeon-label">Dungeon oculta:</strong> nivel 200, en solitario, 10 min y sin Revive. Recompensa: 3.000.000 XP.</p><button class="gym-map-trigger" type="button" data-gym-map="${escapeHtml(gym.city)}" aria-label="Ampliar mapa de la dungeon de ${escapeHtml(gym.city)}"><img src="${escapeHtml(gymMapImages[gym.city])}" alt="Mapa peque\u00f1o de la dungeon de ${escapeHtml(gym.city)}" loading="lazy" decoding="async"><span>Ver mapa</span></button><p class="gym-row"><strong>Batallas GYM:</strong> nivel 250, hasta 6 Pok\u00e9mon. Primera victoria: insignia y Orbs de tipo ${escapeHtml(gym.type)}.</p><p class="gym-row gym-badge-row"><strong>Insignia:</strong> <img class="gym-badge-icon" src="${escapeHtml(gymBadgeIcon(gym.badge))}" alt="" loading="lazy"><span>${escapeHtml(gym.badge)}</span></p><p class="gym-row gym-team-title"><strong>Equipo completo</strong></p><div class="gym-team">${gym.team.map(name => `<span class="gym-pokemon"><img src="${escapeHtml(gymSprite(name, /^Shiny\s/i.test(name)))}" alt="" loading="lazy"><span>${escapeHtml(name)}</span></span>`).join('')}</div></article>`;
  }

  gymGrid.innerHTML = gyms.map(gym => `<button class="gym-leader-card" type="button" data-gym-city="${escapeHtml(gym.city)}" aria-haspopup="dialog" aria-controls="gymInfoDialog"><img class="gym-leader-sprite" src="${escapeHtml(gymLeaderSprite(gym.leader))}" alt="" loading="lazy"><strong class="gym-leader-name">${escapeHtml(gym.leader)}</strong><span class="gym-city">${escapeHtml(gym.city)} \u00b7 ${escapeHtml(gym.type)}</span></button>`).join('');
  gymGrid.addEventListener('click', event => {
    const card = event.target.closest('[data-gym-city]');
    if (!card) return;
    const gym = gyms.find(entry => entry.city === card.dataset.gymCity);
    if (!gym) return;
    gymInfoTitle.textContent = gym.leader + ' \u00b7 ' + gym.city;
    gymInfoBody.innerHTML = renderGymDetails(gym);
    gymInfoDialog.showModal();
  });
  gymInfoBody.addEventListener('click', event => {
    const trigger = event.target.closest('[data-gym-map]');
    if (!trigger) return;
    const city = trigger.dataset.gymMap;
    gymMapDialogTitle.textContent = 'Dungeon de ' + city;
    gymMapDialogImage.src = gymMapImages[city];
    gymMapDialogImage.alt = 'Mapa ampliado de la dungeon de ' + city;
    gymMapDialog.showModal();
  });
  document.getElementById('gymInfoClose').addEventListener('click', () => gymInfoDialog.close());
  gymInfoDialog.addEventListener('click', event => { if (event.target === gymInfoDialog) gymInfoDialog.close(); });
  document.getElementById('gymMapClose').addEventListener('click', () => gymMapDialog.close());
  gymMapDialog.addEventListener('click', event => { if (event.target === gymMapDialog) gymMapDialog.close(); });
  gymMapDialog.addEventListener('close', () => gymMapDialogImage.removeAttribute('src'));

  const rocketCards = document.getElementById('rocketCards');
  const rocketDialog = document.getElementById('rocketDialog');
  const rocketDialogTitle = document.getElementById('rocketDialogTitle');
  const rocketDialogBody = document.getElementById('rocketDialogBody');
  const rockets = Array.isArray(window.ROCKETS_DATA) ? window.ROCKETS_DATA : [];
  function renderRocketBody(rocket){
    if (!rocket.team.length) return '<ul class="rocket-final-facts">' + rocket.facts.map(fact => '<li>' + escapeHtml(fact) + '</li>').join('') + '</ul>';
    return '<div class="rocket-matchups">' + rocket.team.map(([npc, recommended, counters]) => '<div class="rocket-matchup"><div class="rocket-pokemon"><span class="rocket-label">Pok\u00e9mon del NPC</span><div class="rocket-pokemon-main"><img src="' + escapeHtml(npc.sprite) + '" alt="" loading="lazy"><strong>' + escapeHtml(npc.name) + '</strong></div></div><span class="rocket-arrow" aria-hidden="true">\u2192</span><div class="rocket-pokemon rocket-recommended"><span class="rocket-label">Recomendado</span><div class="rocket-pokemon-main"><img src="' + escapeHtml(recommended.sprite) + '" alt="" loading="lazy"><strong>' + escapeHtml(recommended.name) + '</strong></div><div class="rocket-counters"><span>Debilidades del NPC</span><div class="boss-weakness-types">' + counters.map(key => '<span class="boss-type-chip" style="--type-color:' + bossTypeColors[key] + '">' + icon(key) + '<span>' + escapeHtml(TYPE_MAP[key].label) + '</span></span>').join('') + '</div></div></div></div>').join('') + '</div>';
  }
  rocketCards.innerHTML = rockets.map((rocket,index) => '<button class="rocket-card' + (rocket.team.length ? '' : ' rocket-final-card') + '" type="button" data-rocket-index="' + index + '" aria-haspopup="dialog"><span class="rocket-number">' + escapeHtml(rocket.number) + '</span><span class="rocket-card-info"><span class="rocket-card-kicker">' + escapeHtml(rocket.kicker || 'ROCKET SEMANAL') + '</span><strong class="rocket-card-name">' + escapeHtml(rocket.name) + '</strong><span class="rocket-card-hint">' + (rocket.team.length ? rocket.team.length + ' enfrentamientos' : 'Ver datos del jefe final') + ' <span aria-hidden="true">\u2197</span></span></span></button>').join('');
  rocketCards.addEventListener('click', event => {
    const card = event.target.closest('.rocket-card');
    if (!card) return;
    const rocket = rockets[Number(card.dataset.rocketIndex)];
    if (!rocket) return;
    rocketDialogTitle.textContent = rocket.number + ' \u00b7 ' + rocket.name;
    rocketDialogBody.innerHTML = renderRocketBody(rocket);
    rocketDialog.showModal();
  });
  document.getElementById('rocketDialogClose').addEventListener('click', () => rocketDialog.close());
  rocketDialog.addEventListener('click', event => { if (event.target === rocketDialog) rocketDialog.close(); });
  function hasZoneData(record, zone){
    const entry = record[zone];
    return entry && ((entry.maps && entry.maps.length > 0) || entry.note);
  }
  function categoryLabel(value){
    const match = String(value || '').match(/\d+/);
    return match ? 'Categoría ' + match[0] : (value ? 'Categoría ' + value : 'Sin categoría');
  }
  function tierLabel(value){
    const match = String(value || '').match(/\d+/);
    return match ? 'Tier ' + match[0] : (value ? 'Tier ' + value : 'Sin Tier');
  }
  function pokemonDisplayName(name){
    return String(name || '');
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
        '<td><div class="pokemon-cell"><img class="pokemon-sprite" src="' + escapeHtml(record.sprite) + '" alt="" loading="lazy" decoding="async"><div><span class="pokemon-name">' + escapeHtml(pokemonDisplayName(record.name)) + '</span><span class="pokemon-number">#' + escapeHtml(record.id) + '</span></div></div></td>' +
        '<td><span class="tier-badge tier-' + tierClass + '">' + escapeHtml(categoryLabel(record.tier)) + '</span></td>' +
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
      option.textContent = categoryLabel(tier);
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

  const rotationGrid = document.getElementById('rotationGrid');
  const rotationTypeNav = document.getElementById('rotationTypeNav');
  const rotationTips = document.getElementById('rotationTips');
  const rotationDialog = document.getElementById('rotationDialog');
  const rotationDialogTitle = document.getElementById('rotationDialogTitle');
  const rotationDialogContent = document.getElementById('rotationDialogContent');
  function rotationPokemonInfo(name){
    const label = String(name || '').split(/\s+(?:\u2014|-)\s+/)[0].replace(/\([^)]*\)/g, '').replace(/[★☆]+/g, '').trim();
    const shiny = /^Shiny\s+/i.test(label);
    const species = label.replace(/^Shiny\s+/i, '').trim();
    const formBase = species.replace(/\s+(?:Ice|Snow|Electric|Fire|Bug|Psy|Dark|Dragon|Fairy|Fighting|Flying|Ghost|Grass|Ground|Normal|Poison|Psychic|Rock|Steel|Water)$/i, '').trim();
    const names = [label, species, species.replace(/^Mega\s+/i, ''), formBase];
    if (shiny) names.push('Shiny ' + species, 'Shiny ' + species.replace(/^Mega\s+/i, ''), 'Shiny ' + formBase);
    const normalized = [...new Set(names.filter(Boolean).map(value => value.toLocaleLowerCase('en')))];
    const pokemon = pokedex.find(entry => normalized.includes(entry.name.toLocaleLowerCase('en')));
    if (pokemon) return pokemon;
    const baseNames = normalized.map(value => value.replace(/^shiny\s+/i, ''));
    const huntPokemon = hunts.find(entry => baseNames.includes(entry.name.toLocaleLowerCase('en')));
    return huntPokemon ? {...huntPokemon, sprite:'', variant: shiny ? 'shiny' : 'normal', typeLabels: []} : null;
  }
  function rotationLabel(name){
    return String(name).replace(/\(Offtank\)/gi, '(tanque secundario)')
      .replace(/\s+—\s+SR\b/g, ' — Superraro')
      .replace(/\s+—\s+T([1-4])\b/g, ' — Tier $1')
      .replace(/\bT([1-4])\b/g, 'Tier $1').replace(/\bCD\b/g, 'recarga')
      .replace(/\bSR\b/g, 'superraro (SR)')
      .replace(/\bIce\b/g, 'Hielo').replace(/\bElectric\b/g, 'Eléctrico')
      .replace(/\bFire\b/g, 'Fuego').replace(/\bFighting\b/g, 'Lucha')
      .replace(/\bPsy\b/g, 'Psíquico').replace(/\bGhost\b/g, 'Fantasma');
  }
  function rotationText(text){
    return String(text).replace(/underwater/gi, 'bajo el agua').replace(/cooldowns/gi, 'tiempos de recarga')
      .replace(/stuns/gi, 'aturdimientos').replace(/stun/gi, 'aturdimiento').replace(/delay/gi, 'demora')
      .replace(/Stars/g, 'estrellas').replace(/moveset/gi, 'conjunto de movimientos')
      .replace(/hunt/gi, 'cacería').replace(/SR de Hoenn/g, 'Superraro de Hoenn')
      .replace(/Pokémon T1/g, 'Pokémon de Tier 1')
      .replace(/Pokémon T2/g, 'Pokémon de Tier 2').replace(/Pokémon T3/g, 'Pokémon de Tier 3')
      .replace(/Dragon/g, 'Dragón').replace(/Electric/g, 'Eléctrico').replace(/Fighting/g, 'Lucha')
      .replace(/Ghost/g, 'Fantasma').replace(/Ice/g, 'Hielo').replace(/Fire/g, 'Fuego');
  }
  function rotationSprite(member){
    const found = rotationPokemonInfo(member.name);
    return member.sprite || (found && found.sprite) || (found && ('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (found.variant === 'shiny' ? 'shiny/' : '') + found.id + '.png')) || '';
  }
  function renderRotations(){
    if (!rotationsData || !rotationGrid) return;
    document.getElementById('rotationsTitle').textContent = 'Sinergias elementales';
    document.getElementById('rotationsDescription').textContent = 'Guía sugerida de equipos orientados a cada elemento.';
    const req = rotationsData.minRequirements;
    const spanishNote = 'Estos valores sirven como base orientativa, recopilados de la experiencia compartida por la comunidad. El rendimiento real dependerá de factores como la rotación, los Pokémon elegidos, sus habilidades, objetos equipados (Held Items), Stars, tier y la sinergia general del equipo.';
    const intro = req.intro.replace('Training de ATK', 'entrenamiento de ataque (ATK)');
    const items = req.items.map(item => item.replace('Training de ATK', 'Entrenamiento de ataque (ATK)').replace('Held Item', 'Objeto equipado').replace('Pokémon Super Rare (SR)', 'Pokémon superraro (SR)'));
    document.getElementById('rotationRequirements').innerHTML = '<h2>' + escapeHtml(req.title) + '</h2><p>' + escapeHtml(intro) + '</p><ul>' + items.map(item => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul><p class="rotation-note">' + escapeHtml(spanishNote) + '</p>';
    rotationTips.innerHTML = rotationsData.tips.map(tip => {
      const info = rotationPokemonInfo(tip.name);
      const sprite = rotationSprite({name:tip.name, sprite:''});
      const text = rotationText(tip.text.replace('cooldowns tipo SR', 'tiempos de recarga similares a los de un superraro (SR)').replace('Electric, Fire, Fighting, Ice y Ghost', 'Eléctrico, Fuego, Lucha, Hielo y Fantasma').replace('Gracias a Elemental Hands', 'Gracias a la habilidad Manos Elementales'));
      return '<article class="rotation-tip" data-pokemon="' + escapeHtml(tip.name) + '">' +
        (sprite ? '<img class="rotation-sprite" src="' + escapeHtml(sprite) + '" data-pokemon-id="' + (info ? info.id : 0) + '" data-variant="' + (info ? info.variant : 'normal') + '" alt="" loading="lazy" decoding="async">' : '') +
        '<div><h3>' + escapeHtml(rotationLabel(tip.name)) + '</h3><p>' + escapeHtml(text) + '</p></div></article>';
    }).join('');
    const shortcuts = rotationsData.rotations.flatMap(rotation => rotation.id === 'dark-ghost'
      ? [{...rotation, name:'Siniestro'}, {...rotation, name:'Fantasma'}]
      : [rotation]);
    rotationTypeNav.innerHTML = shortcuts.map(rotation => '<button class="rotation-jump" type="button" aria-haspopup="dialog" aria-controls="rotationDialogContent" data-target="rotation-' + escapeHtml(rotation.id) + '">' + escapeHtml(rotation.name) + '</button>').join('');
    rotationGrid.innerHTML = rotationsData.rotations.map(rotation => {
      const groups = rotation.groups.map(group => '<section class="rotation-group"><h3>' + escapeHtml(group.label) + '</h3><div class="rotation-roster">' + group.members.map(member => {
        const sprite = rotationSprite(member);
        const species = member.name.split(/\s+(?:\u2014|-)\s+/)[0].replace(/\s+(?:\u2014|-)\s+.*$/, '').replace(/\s*\([^)]*\)/g, '').trim();
        const shiny = /^Shiny\s+/i.test(species);
        const dexName = species.replace(/^Shiny\s+/i, '').replace(/^Mega\s+/i, '').replace(/\s+(Psy|Bug)$/i, '').trim();
        const dexMatch = rotationPokemonInfo(member.name);
        return '<button type="button" class="rotation-pokemon" data-pokemon="' + escapeHtml(member.name) + '">' + (sprite ? '<img class="rotation-sprite" src="' + escapeHtml(sprite) + '" data-pokemon-id="' + (dexMatch ? dexMatch.id : 0) + '" data-variant="' + (dexMatch ? dexMatch.variant : 'normal') + '" alt="" loading="lazy" decoding="async">' : '') + '<span>' + escapeHtml(rotationLabel(member.name)) + '</span></button>';
      }).join('') + '</div></section>').join('');
      const upgrades = rotation.improvements.length ? '<section class="rotation-group rotation-upgrades"><h3>Mejoras</h3><div class="rotation-tags">' + rotation.improvements.map(item => {
        const info = rotationPokemonInfo(item);
        const sprite = rotationSprite({name:item, sprite:''});
        return '<button type="button" class="rotation-pokemon rotation-improvement" data-pokemon="' + escapeHtml(item) + '">' + (sprite ? '<img class="rotation-sprite" src="' + escapeHtml(sprite) + '" data-pokemon-id="' + (info ? info.id : 0) + '" data-variant="' + (info ? info.variant : 'normal') + '" alt="" loading="lazy" decoding="async">' : '') + '<span>' + escapeHtml(rotationLabel(item)) + '</span></button>';
      }).join('') + '</div></section>' : '';
      const proscons = rotation.strength || rotation.weakness ? '<div class="rotation-proscons">' + (rotation.strength ? '<div><h3>Ventajas</h3><p>' + escapeHtml(rotationText(rotation.strength)) + '</p></div>' : '') + (rotation.weakness ? '<div><h3>Desventajas</h3><p>' + escapeHtml(rotationText(rotation.weakness)) + '</p></div>' : '') + '</div>' : '';
      return '<article class="rotation-card" id="rotation-' + escapeHtml(rotation.id) + '" hidden><header><h2>' + escapeHtml(rotation.name) + '</h2>' + (rotation.status ? '<span class="rotation-status">Gu\u00eda incompleta</span>' : '') + '</header>' + (rotation.intro ? '<p class="rotation-intro">' + escapeHtml(rotationText(rotation.intro)) + '</p>' : '') + groups + upgrades + proscons + '</article>';
    }).join('');
  }
  rotationTypeNav.addEventListener('click', event => {
    const button = event.target.closest('.rotation-jump');
    if (!button) return;
    const target = document.getElementById(button.dataset.target);
    if (!target) return;
    rotationDialogTitle.textContent = button.textContent.trim();
    rotationDialogContent.innerHTML = '<article class="rotation-card rotation-dialog-card">' + target.innerHTML + '</article>';
    rotationDialog.showModal();
  });
  document.getElementById('rotationDialogClose').addEventListener('click', () => rotationDialog.close());
  rotationDialog.addEventListener('click', event => { if (event.target === rotationDialog) rotationDialog.close(); });
  function openRotationPokemon(name){
    const pokemon = rotationPokemonInfo(name);
    const species = pokemon ? pokemon.name : name.split(/\s+(?:\u2014|-)\s+/)[0].replace(/\([^)]*\)/g, '').replace(/[★☆]+/g, '').trim();
    const shiny = pokemon ? pokemon.variant === 'shiny' : /^Shiny\s+/i.test(species);
    const baseName = species.replace(/^Shiny\s+/i, '').replace(/^Mega\s+/i, '').trim();
    const sprite = pokemon ? pokemon.sprite : rotationSprite({name, sprite:''});
    pokemonDialogName.textContent = rotationLabel(species);
    pokemonDialogSprite.dataset.pokemonId = pokemon ? pokemon.id : '0';
    pokemonDialogSprite.dataset.variant = shiny ? 'shiny' : 'normal';
    pokemonDialogSprite.dataset.fallbackAttempted = 'false';
    pokemonDialogSprite.classList.remove('sprite-missing');
    pokemonDialogSprite.src = sprite || (pokemon ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (shiny ? 'shiny/' : '') + pokemon.id + '.png' : '');
    pokemonDialogSprite.alt = rotationLabel(species);
    pokemonDialogInfo.textContent = pokemon ? [(pokemon.typeLabels || []).join(' / '), pokemon.tier ? tierLabel(pokemon.tier) : 'Tier especial o sin clasificar', '#' + String(pokemon.id).padStart(3, '0')].filter(Boolean).join(' · ') : 'Pokémon recomendado en las rotaciones';
    selectedHuntRecord = (pokemon && hunts.find(entry => Number(entry.id) === Number(pokemon.id))) ||
      hunts.find(entry => entry.name.toLocaleLowerCase('es') === baseName.toLocaleLowerCase('es')) || null;
    pokemonDialogLocations.innerHTML = '<h3>Mapas de localización</h3>' + (selectedHuntRecord
      ? zones.map(zone => '<div class="pokemon-location-row"><strong>' + escapeHtml(zoneLabels[zone]) + '</strong>' + renderLocation(selectedHuntRecord[zone], selectedHuntRecord.name, zone) + '</div>').join('')
      : '<p class="location-empty">Todavía no hay mapas para este Pokémon.</p>');
    const hasMaps = selectedHuntRecord && zones.some(zone => hasZoneData(selectedHuntRecord, zone));
    pokemonDialogHunt.hidden = !hasMaps;
    pokemonDialogHunt.disabled = !selectedHuntRecord;
    pokemonDialogHunt.textContent = hasMaps ? 'Ver en Localizaciones' : 'Sin datos de localización';
    pokemonDialog.showModal();
  }
  [rotationGrid, rotationTips, rotationDialogContent].forEach(container => container.addEventListener('click', event => {
    const item = event.target.closest('[data-pokemon]');
    if (item) openRotationPokemon(item.dataset.pokemon);
  }));
  rotationGrid.addEventListener('error', event => {
    if (event.target.matches('.rotation-sprite')) fallbackPokemonSprite(event.target);
  }, true);
  rotationDialogContent.addEventListener('error', event => {
    if (event.target.matches('.rotation-sprite')) fallbackPokemonSprite(event.target);
  }, true);
  rotationTips.addEventListener('error', event => {
    if (event.target.matches('.rotation-sprite')) fallbackPokemonSprite(event.target);
  }, true);

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
        '<span class="dex-info"><span class="dex-name">' + escapeHtml(pokemonDisplayName(pokemon.name)) + '</span>' +
        '<span class="dex-meta">' + pokemon.typeLabels.map(label => '<span class="dex-type">' + escapeHtml(label) + '</span>').join('') +
        (pokemon.tier ? '<span class="dex-tier">' + escapeHtml(tierLabel(pokemon.tier)) + '</span>' : '') + '<span class="dex-tier">Generación ' + pokemon.generation + (pokemon.variant === 'shiny' ? ' · Shiny' : '') + '</span></span></span></button>';
    }).join('');
    pokedexCount.textContent = filtered.length.toLocaleString('es') + ' Pokémon';
    pokedexEmpty.hidden = filtered.length > 0;
  }

  Array.from(new Set(pokedex.map(pokemon => pokemon.tier).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }))
    .forEach(tier => {
      const option = document.createElement('option');
      option.value = tier;
      option.textContent = tierLabel(tier);
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
    pokemonDialogName.textContent = pokemonDisplayName(pokemon.name);
    pokemonDialogSprite.dataset.pokemonId = pokemon.id;
    pokemonDialogSprite.dataset.variant = pokemon.variant;
    pokemonDialogSprite.dataset.fallbackAttempted = 'false';
    pokemonDialogSprite.classList.remove('sprite-missing');
    pokemonDialogSprite.src = pokemon.sprite;
    pokemonDialogSprite.alt = pokemon.name;
    pokemonDialogInfo.textContent = [pokemon.typeLabels.join(' / '), pokemon.tier ? tierLabel(pokemon.tier) : 'Tier especial o sin clasificar', '#' + String(pokemon.id).padStart(3, '0'), 'Generación ' + pokemon.generation, pokemon.variant === 'shiny' ? 'Shiny' : 'Normal'].filter(Boolean).join(' · ');
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
  renderRotations();
  render();
})();







