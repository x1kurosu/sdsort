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
  }
];

/*
------------------------------------------------------
MASSIVE SEPERATOR BECAUSE I'M FUCKING BLIND
------------------------------------------------------
*/

dataSet[dataSetVersion].characterData = [
  {
    name: "GM",
    img: "gm.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["gmtag", "mptag"]
    }
  },
  {
    name: "Core Fighter",
    img: "corefighter.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag"]
    }
  },
  {
    name: "Ball",
    img: "ball.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["mptag"]
    }
  },
  {
    name: "Zaku I",
    img: "zakui.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"]
    }
  },
  {
    name: "Zaku II",
    img: "zakuii.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["monoeye", "mptag"]
    }
  },
  {
    name: "Magella-Attack",
    img: "magellaattack.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["tanktag", "mptag"]
    }
  },
  {
    name: "Dopp",
    img: "dopp.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag", "mptag"]
    }
  },
  {
    name: "Gattle",
    img: "gattle.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["airtag", "mptag"]
    }
  },
  {
    name: "Type 61 MBT",
    img: "61mbt.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"],
	  tags: ["tanktag", "mptag"]
    }
  },
  {
    name: "GM Dominance",
    img: "gmdominance.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gmtag", "protag"]
    }
  },
  {
    name: "Efreet Kai",
    img: "efreetkai.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["monoeye", "rivaltag"]
    }
  },
  {
    name: "Blue Destiny Unit-1 Blue Destiny Unit-1 Blue Destiny Unit-1",
    img: "bd1.png",
    opts: {
      series: [ "bluedestiny" ],
      timeline: ["uc"],
	  tags: ["gmtag", "gundam", "protag"]
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



