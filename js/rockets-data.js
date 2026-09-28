(function(){
  const base='https://wiki-pokealliance-es.pages.dev/assets/pokelog-icons/';
  const poke=(name,slug)=>({name,sprite:base+slug+'.webp'});
  const row=(npc,npcSlug,recommended,recSlug,weaknesses)=>[
    poke(npc,npcSlug),poke(recommended,recSlug),weaknesses
  ];
  window.ROCKETS_DATA=[
    {number:'01',name:'Shadow',team:[
      row('Feraligatr','feraligatr','Shiny Raichu','shiny-raichu',['grass','electric']),
      row('Shiny Gengar','shiny-gengar','Shiny Sandslash','shiny-sandslash',['ground','psychic','ghost','dark']),
      row('Alakazam','alakazam','Scizor','scizor',['bug','ghost','dark']),
      row('Shiny Crobat','shiny-crobat','Shiny Golem','shiny-golem',['electric','ice','psychic','rock']),
      row('Muk','muk','Shiny Marowak','shiny-marowak',['ground','psychic']),
      row('Houndoom','houndoom','Shiny Starmie','shiny-starmie',['water','fighting','ground','rock'])
    ]},
    {number:'02',name:'Frost',team:[
      row('Misdreavus','misdreavus','Shiny Persian','shiny-persian',['ghost','dark']),
      row('Magcargo','magcargo','Shiny Starmie','shiny-starmie',['water','fighting','ground','rock']),
      row('Hypno','hypno','Scizor','scizor',['bug','ghost','dark']),
      row('Gligar','gligar','Shiny Jynx','shiny-jynx',['water','ice']),
      row('Houndour','houndour','Shiny Hitmontop','shiny-hitmontop',['water','fighting','ground','rock']),
      row('Murkrow','murkrow','Shiny Golem','shiny-golem',['electric','ice','rock','fairy'])
    ]},
    {number:'03',name:'Thorn',team:[
      row('Shiny Arbok','shiny-arbok','Shiny Sandslash','shiny-sandslash',['ground','psychic']),
      row('Shiny Golbat','shiny-golbat','Shiny Golem','shiny-golem',['electric','ice','psychic','rock']),
      row('Shiny Hypno','shiny-hypno','Scizor','scizor',['bug','ghost','dark']),
      row('Shiny Haunter','shiny-haunter','Shiny Persian','shiny-persian',['ground','psychic','ghost','dark']),
      row('Shiny Murkrow','shiny-murkrow','Shiny Jynx','shiny-jynx',['electric','ice','rock','fairy']),
      row('Houndoom','houndoom','Shiny Starmie','shiny-starmie',['water','fighting','ground','rock'])
    ]},
    {number:'04',name:'Cipher',team:[
      row('Feraligatr','feraligatr','Shiny Raichu','shiny-raichu',['grass','electric']),
      row('Shiny Persian','shiny-persian','Shiny Hitmontop','shiny-hitmontop',['fighting']),
      row('Venusaur','venusaur','Shiny Pidgeot','shiny-pidgeot',['fire','ice','flying','psychic']),
      row('Electabuzz','electabuzz','Shiny Sandslash','shiny-sandslash',['ground']),
      row('Typhlosion','typhlosion','Shiny Starmie','shiny-starmie',['water','ground','rock']),
      row('Meganium','meganium','Shiny Arcanine','shiny-arcanine',['fire','ice','poison','flying','bug'])
    ]},
    {number:'05',name:'Phoenix',team:[
      row('Charizard','charizard','Shiny Golem','shiny-golem',['water','electric','rock']),
      row('Shiny Blastoise','shiny-blastoise','Shiny Venusaur','shiny-venusaur',['grass','electric']),
      row('Venusaur','venusaur','Shiny Pidgeot','shiny-pidgeot',['fire','ice','flying','psychic']),
      row('Shiny Electrode','shiny-electrode','Shiny Sandslash','shiny-sandslash',['ground']),
      row('Shiny Magneton','shiny-magneton','Shiny Arcanine','shiny-arcanine',['fire','fighting','ground']),
      row('Blastoise','blastoise','Shiny Raichu','shiny-raichu',['grass','electric'])
    ]},
    {number:'06',name:'Scythe',team:[
      row('Scyther','scyther','Shiny Arcanine','shiny-arcanine',['fire','electric','ice','flying','rock']),
      row('Shiny Ampharos','shiny-ampharos','Shiny Golem','shiny-golem',['ground']),
      row('Shiny Raichu','shiny-raichu','Shiny Sandslash','shiny-sandslash',['ground']),
      row('Nidoqueen','nidoqueen','Shiny Jynx','shiny-jynx',['water','ice','psychic','ground']),
      row('Arcanine','arcanine','Shiny Starmie','shiny-starmie',['water','ground','rock']),
      row('Shiny Houndoom','shiny-houndoom','Shiny Hitmontop','shiny-hitmontop',['water','fighting','ground','rock'])
    ]},
    {number:'07',name:'Mirage',team:[
      row('Charizard','charizard','Shiny Golem','shiny-golem',['water','electric','rock']),
      row('Shiny Charizard','shiny-charizard','Shiny Starmie','shiny-starmie',['water','electric','rock']),
      row('Venusaur','venusaur','Shiny Pidgeot','shiny-pidgeot',['fire','ice','flying','psychic']),
      row('Shiny Venusaur','shiny-venusaur','Shiny Arcanine','shiny-arcanine',['fire','ice','poison','flying','bug']),
      row('Blastoise','blastoise','Shiny Venusaur','shiny-venusaur',['grass','electric']),
      row('Shiny Blastoise','shiny-blastoise','Shiny Raichu','shiny-raichu',['grass','electric'])
    ]},
    {number:'08',name:'Zephyr',team:[
      row('Typhlosion','typhlosion','Shiny Golem','shiny-golem',['water','ground','rock']),
      row('Shiny Typhlosion','shiny-typhlosion','Shiny Starmie','shiny-starmie',['water','ground','rock']),
      row('Meganium','meganium','Shiny Pidgeot','shiny-pidgeot',['fire','ice','poison','flying','bug']),
      row('Shiny Meganium','shiny-meganium','Shiny Arcanine','shiny-arcanine',['fire','ice','poison','flying','bug']),
      row('Feraligatr','feraligatr','Shiny Venusaur','shiny-venusaur',['grass','electric']),
      row('Shiny Feraligatr','shiny-feraligatr','Shiny Raichu','shiny-raichu',['grass','electric'])
    ]},
    {number:'09',name:'Obsidian',team:[
      row('Shiny Gyarados','shiny-gyarados','Shiny Raichu','shiny-raichu',['electric','rock']),
      row('Shiny Persian','shiny-persian','Shiny Hitmontop','shiny-hitmontop',['fighting']),
      row('Shiny Machamp','shiny-machamp','Shiny Pidgeot','shiny-pidgeot',['flying','psychic','fairy']),
      row('Shiny Kingdra','shiny-kingdra','Shiny Clefable','shiny-clefable',['dragon','fairy']),
      row('Shiny Pidgeot','shiny-pidgeot','Shiny Golem','shiny-golem',['electric','ice','rock']),
      row('Shiny Scizor','shiny-scizor','Shiny Arcanine','shiny-arcanine',['fire'])
    ]},
    {number:'10',name:'Vortex',team:[
      row('Shiny Ninetales','shiny-ninetales','Shiny Starmie','shiny-starmie',['water','ground','rock']),
      row('Shiny Magneton','shiny-magneton','Shiny Arcanine','shiny-arcanine',['fire','fighting','ground']),
      row('Shiny Kabutops','shiny-kabutops','Shiny Venusaur','shiny-venusaur',['grass','electric','fighting','ground']),
      row('Shiny Omastar','shiny-omastar','Shiny Raichu','shiny-raichu',['grass','electric','fighting','ground']),
      row('Shiny Pidgeot','shiny-pidgeot','Shiny Golem','shiny-golem',['electric','ice','rock']),
      row('Shiny Ampharos','shiny-ampharos','Shiny Sandslash','shiny-sandslash',['ground'])
    ]},
    {number:'11',name:'Tempest',team:[
      row('Shiny Magmar','shiny-magmar','Shiny Starmie','shiny-starmie',['water','ground','rock']),
      row('Shiny Snorlax','shiny-snorlax','Shiny Hitmontop','shiny-hitmontop',['fighting']),
      row('Shiny Mime','shiny-mr-mime','Scizor','scizor',['poison','ghost','steel']),
      row('Shiny Pupitar','shiny-pupitar','Shiny Venusaur','shiny-venusaur',['water','grass','ice','fighting','ground','steel']),
      row('Shiny Umbreon','shiny-umbreon','Shiny Clefable','shiny-clefable',['fighting','bug','fairy']),
      row('Shiny Misdreavus','shiny-misdreavus','Shiny Persian','shiny-persian',['ghost','dark'])
    ]},
    {number:'12',name:'Eclipse',team:[
      row('Shiny Dragonair','shiny-dragonair','Shiny Clefable','shiny-clefable',['ice','dragon','fairy']),
      row('Shiny Arcanine','shiny-arcanine','Shiny Starmie','shiny-starmie',['water','ground','rock']),
      row('Shiny Espeon','shiny-espeon','Shiny Persian','shiny-persian',['bug','ghost','dark']),
      row('Shiny Pinsir','shiny-pinsir','Shiny Pidgeot','shiny-pidgeot',['fire','flying','rock']),
      row('Shiny Tauros','shiny-tauros','Shiny Hitmontop','shiny-hitmontop',['fighting']),
      row('Shiny Skarmory','shiny-skarmory','Shiny Arcanine','shiny-arcanine',['fire','electric'])
    ]},
    {number:'★',name:'Giovanni',kicker:'JEFE FINAL',team:[],facts:[
      'Se desbloquea tras 130 victorias semanales acumuladas.',
      'Nivel 300 · 6 Pokémon Shiny · 5 minutos.',
      'Sin Revive ni Potion.',
      'Primera victoria: 5,000,000 XP, 50 tokens Bronze, 50 Silver, 50 Gold, 1 Held Item Tier 7 y 3 Held Item Tier 5.',
      'Una derrota y nuevo intento cuestan 30 Luck Medallion.'
    ]}
  ];
})();
