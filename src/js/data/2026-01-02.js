dataSetVersion = "2025-12-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};
// Testing things out
dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
    { name: "Mobile Suit Gundam", tooltip: "0079", key: "0079" },
    { name: "THE ORIGIN", tooltip: "Char", key: "origin" },
    { name: "ORIGIN MSD", tooltip: "Origin MSV", key: "originmsd" },	
    { name: "MSV", tooltip: "Mobile Suit Variations", key: "msv" },
    { name: "MS-X", tooltip: "PEZN", key: "msx" },
    { name: "MS IGLOO Series", tooltip: "The Hidden One Year War", key: "igloo" },
    { name: "08th MS Team", tooltip: "08th MS Team", key: "08th" },
    { name: "War in the Pocket", tooltip: "0080", key: "0080" },
    { name: "Cross Dimension 0079", tooltip: "SDCS Efreet when", key: "pixy" },
    { name: "The Blue Destiny Series", tooltip: "Blue", key: "bluedestiny" },
    { name: "Missing Link", tooltip: "Pale Rider", key: "mlink" },
    { name: "Lost War Chronicles", tooltip: "Delta Team", key: "lostwar" },
/*  { name: "Rise from the Ashes", tooltip: "dreamcast", key: "dingo" },
    { name: "Zeonic Front", tooltip: "mudrock", key: "zeonic" },
    { name: "Encounters in Space", tooltip: "lone dom", key: "eispace" },
    { name: "Space Beyond the Blaze", tooltip: "4th or 5th?", key: "blaze" }, */
    { name: "Thunderbolt Series", tooltip: "Atlas Gundam", key: "thunderbolt" },
    { name: "Battlefield Record U.C. 0081", tooltip: "efreet nacht", key: "0081" },
    { name: "GQuuuuuuX", tooltip: "GCucks", key: "gquuuuuux" },	
    { name: "Stardust Memory Series", tooltip: "0083", key: "0083" }, 
    { name: "Gundam Katana", tooltip: "Striker", key: "katana" },
    { name: "Ecole du Ciel", tooltip: "Le Nero", key: "ecoleduciel" },
    { name: "Advance of Zeta Series", tooltip: "Rosette when?", key: "aoz" },
/*  { name: "Char's Deleted Affair", tooltip: "uh oh", key: "cda" }, */
    { name: "Z Gundam", tooltip: "Zeta", key: "zeta" },
    { name: "Zeta Define", tooltip: "meh", key: "define" },
    { name: "Z-MSV", tooltip: "Zeta Variations", key: "zmsv" },
    { name: "Green Divers", tooltip: "The Neo Experience", key: "0087" },	
    { name: "Gundam Sentinel", tooltip: "hummingbird", key: "sentinel" },	  
    { name: "ZZ Gundam", tooltip: "Double Zeta", key: "zz" },
    { name: "MSV-R", tooltip: "zakus", key: "msvr" },
    { name: "The Return of Johnny Ridden", tooltip: "MSV-R", key: "msvr2" },
    { name: "Valpurgis", tooltip: "Big O Gundam", key: "valpurgis" },
    { name: "Double Fake", tooltip: "D Gundam", key: "doublefake" },
    { name: "Char's Counterattack", tooltip: "CCA", key: "cca" },
    { name: "CCA-MSV", tooltip: "hi-nu sdcs when", key: "ccamsv" },
    { name: "M-MSV", tooltip: "missing variations", key: "mmsv" },
    { name: "Mobile Suit Gundam Unicorn", tooltip: "UC", key: "unicorn" },
    { name: "UC-MSV", tooltip: "delta", key: "ucmsv" },
    { name: "Narrative", tooltip: "packs", key: "narrative" },
/*  { name: "Hathaway's Flash", tooltip: "hg messer when", key: "hf" },	*/  
    { name: "Gundam F90", tooltip: "mars?", key: "f90" },
    { name: "Gundam F91", tooltip: "heavygun", key: "f91" },
    { name: "Crossbone", tooltip: "batara", key: "crossbone" },
    { name: "V Gundam", tooltip: "stand up", key: "victory" },
    { name: "Turn A Gundam", tooltip: "kapool", key: "turna" },
    { name: "Reconguista in G", tooltip: "G-Reco", key: "greco" }, 
/*  { name: "Harmony of Gundam", tooltip: "striker", key: "hog" }, */
    { name: "G Gundam", tooltip: "maxter", key: "godgundam" },
    { name: "Gundam Wing", tooltip: "maganac", key: "wing" },
    { name: "Endless Waltz", tooltip: "sandrock", key: "wingew" },
    { name: "G-Unit", tooltip: "leo-s", key: "gunit" },
    { name: "Gundam X", tooltip: "wise wallaby", key: "gundamx" },
    { name: "Gundam SEED", tooltip: "duel", key: "seed" },
    { name: "SEED-MSV", tooltip: "duel dagger", key: "seedmsv" },
    { name: "SEED Astray Series", tooltip: "blue frame", key: "astray" },
    { name: "SEED Recollection", tooltip: "dragoon strike", key: "recollection" },
    { name: "SEED Destiny", tooltip: "dark dagger", key: "destiny" },
    { name: "Destiny-MSV", tooltip: ".", key: "destinymsv" },
    { name: "SEED Freedom", tooltip: "rising freedom", key: "freedom" },
    { name: "Gundam 00", tooltip: "dynames", key: "00" },
    { name: "Gundam 00P", tooltip: "oops", key: "00p" },
    { name: "Gundam 00I", tooltip: "ooi", key: "00i" },
    { name: "Gundam 00V", tooltip: "uv", key: "00v" },
/*  { name: "A Wakening of the Trailblazer", tooltip: "movie", key: "00m" }, */
    { name: "Gundam AGE", tooltip: "age-3", key: "age" },
    { name: "~Memory of Eden~", tooltip: "pirate", key: "agemoe" },
    { name: "-Unknown Soldiers-", tooltip: "AGE MSV", key: "agemsv" },
    { name: "Iron-Blooded Orphans", tooltip: "flauros", key: "ibo" },
    { name: "IBO Gekko", tooltip: "astaroth", key: "ibogekko" },
    { name: "Urdr-Hunt", tooltip: "zagan", key: "urdr" },
    { name: "IBO-MSV", tooltip: "XK", key: "ibomsv" },	
    { name: "Witch From Mercury PROLOGUE", tooltip: "lfrith", key: "gwitchprologue" },
    { name: "Witch From Mercury", tooltip: "dilanza", key: "gwitch" },
    { name: "Gunpla Builders Beginning G", tooltip: "build", key: "beginningg" },
    { name: "Gundam Build Fighters", tooltip: "fun", key: "gbf" },
/*  { name: "Gundam Build Fighters Try", tooltip: "Sekai", key: "gbftry" }, */
    { name: "Plamo Kyoshiro", tooltip: "redwarrior", key: "plamo" },
    { name: "SD Gundam Gaiden", tooltip: "fighters", key: "gaiden" },
    { name: "SD Gundam Sengokuden", tooltip: "musha", key: "sengokuden" },
    { name: "SD Command Chronicles", tooltip: "command", key: "command" },
    { name: "SD Gundam World Sangoku Soketsuden", tooltip: "liu bei", key: "sangoku" },
	
    { name: "Gachapon Senshi Scramble Wars", tooltip: "lol", key: "gacha" },
    { name: "SD Gundam GX", tooltip: "tornado sdcs when", key: "sdggx" },
    { name: "Other Gundam Games", tooltip: "zanny", key: "other" },	  
    { name: "Gihren's Greed", tooltip: "gerbera tetra kai", key: "gihren" },	  
    { name: "Bonds of the Battlefield", tooltip: "guard custom", key: "botb" },	
    { name: "G Generation Series", tooltip: "phoenix", key: "ggen" }
    ]
  },
  {
    name: "Filter by Timeline",
    key: "timeline",
    tooltip: "Check this to restrict to suits that appear in certain timelines.",
    checked: false,
    sub: [ 
	{ name: "Universal Century", tooltip: "OG timeline", key: "uc" },
	{ name: "UC (The Origin)", tooltip: "origin", key: "ucto" },	
	{ name: "UC (Thunderbolt)", tooltip: "thunderbolt", key: "uctbolt" },
	{ name: "UC (GQuuuuuuX)", tooltip: "gcucks uc", key: "ucgcucks" },
	{ name: "Future Century", tooltip: "G Gundam", key: "fc" },
	{ name: "After Colony", tooltip: "Wing", key: "ac" },
	{ name: "After War", tooltip: "Gundam X", key: "aw" },
	{ name: "Correct Century", tooltip: "Turn A", key: "cc" },	
	{ name: "Cosmic Era", tooltip: "SEED", key: "ce" },
	{ name: "Anno Domini", tooltip: "00 series", key: "ad" },
	{ name: "Advanced Generation", tooltip: "AGE", key: "ag" },
	{ name: "Reguild Century", tooltip: "G-Reco", key: "rc" },
	{ name: "Post Disaster", tooltip: "IBO", key: "pd" },
	{ name: "Ad Stella", tooltip: "G-Witch", key: "as" },
	{ name: "Build Series", key: "bs"},
	{ name: "SD Gundam", key: "sdg"},
	{ name: "G Generation Series", key: "ggen"},
	{ name: "Other", tooltip: "???", key: "other" }
    ]
  },
  {
    name: "Filter by Special Tags",
    key: "tags",
    tooltip: "Check this to restrict to suits that appear in certain timelines.",
    checked: false,
    sub: [ 
	{ name: "SD", tooltip: "Super Deformed", key: "sdtag" },
	{ name: "GM", tooltip: "GM Family", key: "gmtag" },
	{ name: "Mono-Eye", tooltip: "single eyed MS", key: "monoeye" },
	{ name: "Gundam", tooltip: "Gundamn", key: "gundam" },
	{ name: "Aircraft", tooltip: "non-MS flight units", key: "airtag" },
	{ name: "Tank", tooltip: "Guntank", key: "tanktag" },
	{ name: "Aquatic", tooltip: "Like the Z'Gok", key: "aquatag" },
	{ name: "Mobile Armor", tooltip: "Psycho Gundam", key: "matag" },
	{ name: "Mass-Produced", tooltip: "grunts", key: "mptag" },
	{ name: "Protagonist", tooltip: "amuro", key: "protag" },
	{ name: "Rival", tooltip: "char", key: "rivaltag" },
	{ name: "Psycommu", tooltip: "braw bro", key: "psytag" },
	{ name: "Transforming", tooltip: "Zeta Gundam", key: "transtag" },
	{ name: "Shoulder Cannon", tooltip: "like the Guncannon", key: "cannontag" },
	{ name: "Sniper", tooltip: "GM Sniper", key: "snipertag" },
	{ name: "Full Armor", tooltip: "FA Hyaku-Shiki Kai", key: "fatag" },
	{ name: "Knightly", tooltip: "knights", key: "knightly" },
	{ name: "Gold", tooltip: "Hyaku-Shiki", key: "gold" },
	{ name: "Fierce Enemy Assault", tooltip: "A recurring event unit type in G-Eternal.", key: "featag" }
    ]
  },
  {
	name: "Filter by Unit Rarity",
	key: "rarity",
	tooltip: "Check this to restrict to units based on rarity. Dev takes priority since gacha units are fake units.",
	checked: false,
	sub: [
	{ name: "N", tooltip: "Normal", key: "nrarity" },
    { name: "R", tooltip: "Rare", key: "rrarity" },
    { name: "SR", tooltip: "Super Rare", key: "srrarity" },
	{ name: "SSR", tooltip: "Super Super Rare", key: "ssrrarity" },
	{ name: "UR", tooltip: "Ultra Rare", key: "urrarity" },
	{ name: "Ult", tooltip: "Ultimate", key: "ultrarity" },
	{ name: "None", tooltip: "No rarity; NPC", key: "norarity" }
	]
  }
];

/*
------------------------------------------------------
MASSIVE SEPERATOR BECAUSE I'M FUCKING BLIND
------------------------------------------------------
*/

dataSet[dataSetVersion].characterData = [
/* 0079 Normal */
  {
    name: "GM",
    img: "gm.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Core Fighter",
    img: "corefighter.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Ball",
    img: "ball.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Zaku I",
    img: "zakui.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Zaku II",
    img: "zakuii.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Magella-Attack",
    img: "magellaattack.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["tanktag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Dopp",
    img: "dopp.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Gattle",
    img: "gattle.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Type 61 MBT",
    img: "61mbt.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["tanktag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Gigan",
    img: "gigan.png",
    opts: {
      series: [ "0079", "msx" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["nrarity"]
    }
  },
 /* 0079 Rare */
  {
    name: "Guncannon",
    img: "guncannon.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["cannontag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Guntank",
    img: "guntank.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["tanktag", "cannontag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Core Booster",
    img: "corebooster.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Prototype Gundam",
    img: "rx781.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["gundam"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "High Mobility Zaku Ground Type",
    img: "zakuiihmt.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Gouf",
    img: "gouf.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Gouf",
    img: "gouf.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Dom",
    img: "dom.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Rick Dom",
    img: "rickdom.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Gogg",
    img: "gogg.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["aquatag", "monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Acguy",
    img: "acguy.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["aquatag", "monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Agg Guy",
    img: "aggguy.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["aquatag", "monoeye"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Z'Gok",
    img: "zgok.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["aquatag", "monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Zock",
    img: "zock.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["aquatag", "monoeye"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Adzam",
    img: "adzam.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Luna Tank",
    img: "lunatank.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Bigro",
    img: "bigro.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Big-Ruf",
    img: "bigroruf.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Zakrello",
    img: "zakrello.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag"],
	  rarity: ["rrarity"]
    }
  },
/* 0079 Super Rare */
  {
    name: "Gundam",
    img: "rx782.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gyan",
    img: "gyan.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "knightly"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gelgoog",
    img: "gelgoog.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gasshia",
    img: "gasshia.png",
    opts: {
      series: [ "0079", "msx" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Bigro Meir",
    img: "bigromeir.png",
    opts: {
      series: [ "0079", "other" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Brarello",
    img: "brarello.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["matag", "psytag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Braw-Bro",
    img: "brawbro.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag", "psytag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Elmeth",
    img: "elmeth.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag", "psytag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Big Zam Mass Production Type",
    img: "bigzammpt.png",
    opts: {
      series: [ "0079", "ggen" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["srrarity"]
    }
  },
/* 0079 Super Super Rare */
  {
    name: "G-3 Gundam",
    img: "g3.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Gyan Eos",
    img: "gyaneos.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["monoeye", "knightly"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Big Zam",
    img: "bigzam.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Zeong",
    img: "zeong.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye", "psytag", "rivaltag"],
	  rarity: ["rrarity"]
    }
  },
/* 0079 Ultimate */
  {
    name: "Casval's Gundam",
    img: "rx78ca.png",
    opts: {
      series: [ "0079", "gihren" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["ultrarity"]
    }
  },
/* 0079 Gacha */
  {
    name: "GM Sniper Custom",
    img: "gmsnipercustom.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag", "snipertag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Garma Zabi's Dopp",
    img: "garmasdopp.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Char's Zaku II",
    img: "charszakuii.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "rivaltag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Char's Z'Gok",
    img: "charszgok.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "rivaltag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Char's Gelgoog",
    img: "charsgelgoog.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "rivaltag"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Dozle Zabi's Zaku II",
    img: "dozleszakuii.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Johnny Ridden's Zaku II High Mobility Type",
    img: "johnnyszakuiihmt.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Johnny Ridden's Gelgoog High Mobility Type",
    img: "johnnysgelgooghmt.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Galbaldy Alpha",
    img: "galbaldyalpha.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "GM Night Seeker",
    img: "gmnightseeker.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "GM Interceptor Custom (Fellowship Booster)",
    img: "gmfellowshipbooster.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Anavel Gato's Zaku II High Mobility Type",
    img: "gatoszakuii.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Shin Matsunaga's Zaku II High Mobility Type",
    img: "matsunagaszakuii.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Gouf Vijayanta",
    img: "goufvijayanta.png",
    opts: {
      series: [ "0079", "msvr" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["ssrrarity"]
    }
  },
/* 0079 OTHER */
  {
    name: "Saberfish",
    img: "saberfish.png",
    opts: {
      series: [ "0079", "msv" ],
      timeline: ["uc"],
	  tags: ["airtag", "mptag"],
	  rarity: ["norarity"]
    }
  },
  {
    name: "Fanfan",
    img: "fanfan.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag", "mptag"],
	  rarity: ["norarity"]
    }
  },
/* The Blue Destiny */
  {
    name: "GM Dominance",
    img: "gmdominance.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gmtag", "protag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Efreet Kai",
    img: "efreetkai.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["monoeye", "rivaltag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Blue Destiny Unit-1",
    img: "bd1.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gmtag", "gundam", "protag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Blue Destiny Unit-1 [EXAM]",
    img: "bd1exam.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gmtag", "gundam", "protag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Blue Destiny Unit-3",
    img: "bd3.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Blue Destiny Unit-2",
    img: "bd2.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gundam", "rivaltag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Blue Destiny Unit-3 [EXAM]",
    img: "bd3exam.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Blue Destiny Unit-2 [EXAM]",
    img: "bd2exam.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gundam", "rivaltag"],
	  rarity: ["ssrrarity"]
    }
  },
/* 0080 War in the Pocket */
  {
    name: "Zaku II FZ",
    img: "zakuiifz.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag", "protag", "rivaltag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Guncannon Mass Production Type",
    img: "guncannonmpt.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["cannontag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "GM Command (Space Type)",
    img: "gmcommandspace.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Gelgoog Jager",
    img: "gelgoogj.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag", "sniper"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Rick Dom II",
    img: "rickdomii.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "GM Sniper II",
    img: "gmsniperii.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag", "sniper"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Hygogg",
    img: "hygogg.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["aquatic", "monoeye", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Z'Gok E",
    img: "zgoke.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["aquatic", "monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Prototype Kampfer",
    img: "pkampfer.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gundam NT-1 'Alex'",
    img: "gundamalex.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag", "rivaltag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Kampfer",
    img: "kampfer.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Gundam NT-1 'Alex' (Chobham Armor)",
    img: "alexchobham.png",
    opts: {
      series: [ "0080" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag", "rivaltag", "fatag"],
	  rarity: ["ssrrarity"]
    }
  },
/* 0083 Stardust Memory Dev */
  {
    name: "GM Type C",
    img: "gmtypec.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Zaku II F2",
    img: "zakuiif2.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Powered GM",
    img: "gmpowered.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "GM Cannon II",
    img: "gmcannonii.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag", "cannontag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Dom Tropen",
    img: "domtropen.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "Dra-C",
    img: "drac.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["rrarity"]
    }
  },
  {
    name: "GM Custom",
    img: "gmcustom.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "GM Quel",
    img: "gmquel.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gundam GP01 'Zephyranthes'",
    img: "gp01.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gundam GP02A 'Physalis'",
    img: "gp02a.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam", "rivaltag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gundam GP03 Stamen",
    img: "gp03s.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["nrarity"]
    }
  },
  {
    name: "Gelgoog Marine",
    img: "gelgoogmarine.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Xamel",
    img: "xamel.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gerbera Tetra",
    img: "gerberatetra.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gundam GP01 Full Burnern",
    img: "gp01fb.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Gundam GP03 'Dendrobium'",
    img: "gp03d.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam", "matag", "protag"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Gundam GP04 'Gerbera'",
    img: "gp04.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Val Walo",
    img: "valwalo.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Neue Ziel",
    img: "neueziel.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["matag", "monoeye", "rival"],
	  rarity: ["ssrrarity"]
    }
  },
/* 0083 Stardust Memory Gacha */
  {
    name: "Anavel Gato's Gelgoog",
    img: "gatosgelgoog.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Neuen Bitter's Zaku II F2",
    img: "neuenszakuiif2.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["srrarity"]
    }
  },
  {
    name: "Gelgoog Marine Commander Type",
    img: "gelgoogmcommander.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["monoeye"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Gundam GP01 (Chobham Armor)",
    img: "gp01chobham.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam", "protag", "fatag"],
	  rarity: ["ssrrarity"]
    }
  },
  {
    name: "Gundam GP00 'Blossom'",
    img: "gp00.png",
    opts: {
      series: [ "0083" ],
      timeline: ["uc"],
	  tags: ["gundam"],
	  rarity: ["ssrrarity"]
    }
  }
/*  {
	name: "Master Phoenix",
	img: "18VZVKE.png",
	opts: {
	  series: ["ggen"],
	  timeline: ["ggen"]
	}
  } */
];




