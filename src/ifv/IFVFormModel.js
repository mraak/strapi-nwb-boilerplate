/*************** OSEBNI PODATKI ***************/
export const osebniPodatki =  {
  // ddl: {
  //   label: "DDL",
  //   name: "places",
  //   type: "radio-list",
  //   options: [
  //     { value: 'australian-capital-territory', label: 'Australian Capital Territory' },
  //   	{ value: 'new-south-wales', label: 'New South Wales' },
  //   	{ value: 'victoria', label: 'Victoria' },
  //   	{ value: 'queensland', label: 'Queensland' },
  //   	{ value: 'western-australia', label: 'Western Australia' },
  //   	{ value: 'south-australia', label: 'South Australia' },
  //   	{ value: 'tasmania', label: 'Tasmania' },
  //   	{ value: 'northern-territory', label: 'Northern Territory'  }
  //   ],
  //   value: "new-south-wales"
  // },
  ime: {
    label: "Ime",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  starost: {
    label: "Starost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [130]
      },
      pips: {
    		mode: 'values',
    		values: [0, 25, 50, 80, 100, 130],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    }
  },
  delovnaDoba: {
    label: "Delovna doba",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [80]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10, 30, 50, 70, 80],
    		density: 6,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    }
  },
  status: {
    label: "Status",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "poročen", value: "POROCEN" },
        { label: "v vezi", value: "VVEZI" },
        { label: "samski/samska", value: "SAMSKI" }
      ]
    },
    value: ""
  },
  steviloOtrok: {
    label: "Število otrok",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  }
};

/*************** DOHODKI IN IZDATKI ***************/

export const dohodek =  {
  placa: {
    label: "Plača (mesečno)",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [2000, 100],
      	'max': [20000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 1000, 2000, 10000, 15000, 20000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    }
  },
  pogodbaSKlubom: {
    label: "Pogodba s klubom",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [20000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 20000, 100000, 150000, 200000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    }
  },
  sponzorstva: {
    label: "Sponzorstva (letno)",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [10000, 1000],
      	'max': [100000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 5000, 10000, 50000, 75000, 100000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    }
  },
  nagrade: {
    label: "Nagrade (letno)",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [10000, 1000],
      	'max': [50000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 5000, 10000, 25000, 40000, 50000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    }
  },
  dohodkiOdOddajeNepremicnin: {
    label: "Dohodki od oddaje nepremičnin (mesečno)",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
      	'max': [5000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 500, 1000, 2500, 4000, 5000],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    }
  },
  drugiDohodki: {
    label: "Drugi dohodki",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 10000
  }
};

export const izdatki =  {
  kontrola: {
    label: "Svoj osebni proračun imam pod kontrolo, tako da vsak mesec zapravim manj kot zaslužim.",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: "DA"
  },
  koristimLimit: {
    label: "Ne koristim limita na kartici.",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: "DA"
  },
  vsiDolgoviPlacaniPravocasno: {
    label: "Vse dolgove plačam vedno pravočasno.",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Skoraj zmeraj", value: "SKORAJZMERAJ" },
        { label: "Večinoma", value: "VECINOMA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: ""
  },
  zadolzenost: {
    label: "Nisem preveč zadolžen/na. Sem zadovoljen/na z višino dolga, ki ga imam.",
    helpText: "(kredit za nepremičnino)",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" },
        { label: "Nimam nobenega kredita", value: "NIMAMKREDITA" }
      ]
    },
    value: ""
  },
  rezerva: {
    label: "Pomislite na varnostno rezervo oziroma na prihranke za \"v sili\", ki so namenjeni pokrivanju nepričakovanih izdatkov ali za plačilo vseh računov v primeru, če izgubite službo. Koliko mesecev bi lahko preživeli iz teh prihrankov?",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "1 mesec ali še manj", value: "1" },
        { label: "2 meseca", value: "2" },
        { label: "3 mesece", value: "3" },
        { label: "4 mesece", value: "4" },
        { label: "5 mesece", value: "5" },
        { label: "6 mesecev ali več", value: "6" }
      ]
    },
    value: ""
  }
};

export const lastniskiIzdatki =  {
  kreditZaNepremicnino: {
    label: "Kredit za nepremičnino",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: "DA"
  },
  kreditZaNepremicnino_dodatek1: {
    label: "mesečni obrok",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
     	  '40%': [1000, 50],
     	  'max': [10000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 500, 1000, 5000, 7500, 10000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 500
  },
  kreditZaNepremicnino_dodatek2: {
    label: "vrednost preostale glavnice",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [50000, 1000],
      	'max': [500000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 20000, 40000, 100000, 250000, 500000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 10000
  },
  kreditZaNepremicnino_dodatek3: {
    label: "preostala leta odplačevanja",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [30]
      },
      pips: {
    		mode: 'values',
    		values: [0, 5, 10, 15, 20, 25, 30],
    		density: 3.5,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    }
  },
  vzdrzevanjeNepremicnine: {
    label: "Vzdrževanje nepremičnine",
    helpText: "(stanovanjski sklad, zavarovanje, popravila ...)",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Mesečno", value: "MESECNO" },
        { label: "Letno", value: "LETNO" }
      ]
    },
    value: "LETNO"
  },
  vzdrzevanjeNepremicnine_dodatek: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [10000, 1000],
      	'max': [50000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 5000, 10000, 25000, 40000, 50000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    }
  },
  najemnina: {
    label: "Najemnina za bivanje",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: "DA"
  },
  najemnina_dodatek1: {
    label: "",
    helpText: "",
    required: false,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  najemnina_dodatek2: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [2000, 100],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 1000, 2000, 5000, 8000, 10000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1000
  },
  najemnina_dodatek3: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [20000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 20000, 100000, 150000, 200000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 10000
  },
  kreditAvto: {
    label: "Kredit/Leasing za avto",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: "DA"
  },
  kreditAvto_dodatek1: {
    label: "mesečni obrok",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
      	'max': [2000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 200, 400, 1000, 1500, 2000],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1000
  },
  kreditAvto_dodatek2: {
    label: "vrednost preostale glavnice",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [3000, 100],
      	'max': [20000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 1500, 3000, 10000, 16000, 20000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1500
  },
  kreditAvto_dodatek3: {
    label: "preostala leta odplačevanja",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [30]
      },
      pips: {
    		mode: 'values',
    		values: [0, 5, 10, 15, 20, 30],
    		density: 3.5,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 4
  },
  vzdrzevanjeAvta: {
    label: "Vzdrževanje avtomobila",
    helpText: "(gorivo, popravila, registracija, zavarovanje ...)",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Mesečno", value: "MESECNO" },
        { label: "Letno", value: "LETNO" }
      ]
    },
    value: "LETNO"
  },
  vzdrzevanjeAvta_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [100, 5],
     	  'max': [1000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 50, 100, 500, 750, 1000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 350
  },
  vzdrzevanjeAvta_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
     	  '40%': [1000, 50],
     	  'max': [10000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 500, 1000, 5000, 7500, 10000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 3500
  },
  ostaliDolgovi: {
    label: "Ostali dolgovi",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [2000, 100],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 1000, 2000, 5000, 8000, 10000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1500
  }
};

export const zivljenjskiIzdatki =  {
  zivljenjskiIzdatki: {
    label: "Življenjski izdatki",
    helpText: "(bivanje, hrana, pijača, oblačila, obutev, restavracije)",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  zivljenjskiIzdatki_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [100, 5],
     	  'max': [1000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 50, 100, 500, 750, 1000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 650
  },
  zivljenjskiIzdatki_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
     	  '40%': [1000, 50],
     	  'max': [10000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 500, 1000, 5000, 7500, 10000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 6500
  },
  zavarovanja: {
    label: "Zavarovanja",
    helpText: "(invalidnost, težje bolezni, življenjsko)",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  zavarovanja_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [100, 5],
     	  'max': [1000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 50, 100, 500, 750, 1000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 80
  },
  zavarovanja_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
     	  '40%': [1000, 50],
     	  'max': [10000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 500, 1000, 5000, 7500, 10000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 800
  },
  ostaliIzdatki: {
    label: "Ostali izdatki",
    helpText: "(osebni izdatki, prosti čas, telefon, zabava, potovanja)",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  ostaliIzdatki_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [120, 5],
     	  'max': [1200]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 70, 120, 550, 800, 1200],
     		density: 3.5,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 360
  },
  ostaliIzdatki_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
     	  '40%': [1200, 50],
     	  'max': [12000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 700, 1200, 5500, 8000, 12000],
     		density: 3.5,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 3600
  }
};

/*************** PRIHODNOST ***************/

export const pokojnina =  {
  stLetDoUpokojitve: {
    label: "Število let do upokojitve",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [45]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10, 15, 20, 30, 45],
    		density: 2.25,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 20
  },
  pricakovanoStLetVPokoju: {
    label: "Pričakovano število let v pokoju",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [45]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10, 15, 20, 30, 45],
    		density: 2.25,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 25
  },
  dobraPot: {
    label: "Vem, da sem na dobri poti, da ustrezno zapolnim izpad dohodka po upokojitvi v vrednosti vsaj 80%-ov svojega trenutnega dohodka.",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da, uporabil sem pokojninski kalkulator in vem da sem na pravi poti.", value: "DA" },
        { label: "Nimam pojma.", value: "NEVEM" },
        { label: "Ne, vem da nisem na pravi poti.", value: "NE" }
      ]
    },
    value: ""
  },
  pomembno: {
    type: "label_heading_italic",
    value: "POMEMBNO"
  },
  pomembno2: {
    type: "label_subheading_italic",
    value: "Zaposleni, ki se bo upokojil od leta 2015 dalje, bo prejemal pokojnino v višini samo 50% svoje neto plače ali manj. Sami moramo torej zapolniti vrzel v višini vsaj 30% neto mesečnih dohodkov."
  },
  pomembno3: {
    type: "cite",
    value: "Vir: Študija Dolgoročni pomen 2. pokojninskega stebra, Ekonomska fakulteta v Ljubjani, marec 2010"
  }
};

export const izdatkiVPokoju =  {
  nepremicninskiIzdatki: {
    label: "Izdatki povezani z nepremičnino",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  nepremicninskiIzdatki_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
        '40%': [100, 10],
      	'max': [1000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 50, 100, 500, 750, 1000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 150
  },
  nepremicninskiIzdatki_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [1000, 100],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 500, 1000, 5000, 7500, 10000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1500
  },
  zivljenjskiIzdatki: {
    label: "Življenjski izdatki v pokoju",
    helpText: "(bivanje, hrana, pijača, oblačila, obutev, restavracije)",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  zivljenjskiIzdatki_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
        '40%': [100, 10],
      	'max': [1500]
      },
      pips: {
    		mode: 'values',
    		values: [0, 100, 300, 750, 1000, 1500],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 200
  },
  zivljenjskiIzdatki_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [1000, 100],
      	'max': [15000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 500, 2000, 7500, 10000, 15000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 2000
  },
  neposredni_izdatki: {
    label: "Izdatki iz žepa ali neposredni izdatki za zdravje in zdravljenje v pokoju",
    helpText: "(stroški, ki jih zdravstveno zavarovanje ne krije)",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [200, 10],
     	  'max': [2000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 100, 200, 1000, 1500, 2000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 167
  },
  pomembno: {
    type: "label_heading_italic",
    value: "POMEMBNO"
  },
  pomembno2: {
    type: "label_subheading_italic",
    value: "Strošek zdravljenja za moške in ženske po 65-em letu starosti je v Sloveniji v povprečju več kot 2.000€ letno in s starostjo raste."
  },
  pomembno3: {
    type: "cite",
    value: "Vir: Ocena Statističnega urada Republike Slovenije za projekcije AWG 2012"
  },
  potovanjaInZabava: {
    label: "Potovanja in zabava v pokoju",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  potovanjaInZabava_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [200, 10],
     	  'max': [2000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 100, 200, 1000, 1500, 2000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 150
  },
  potovanjaInZabava_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
     	  '40%': [2000, 100],
     	  'max': [20000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 1000, 2000, 10000, 15000, 20000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 1500
  },
  ostaliIzdatki: {
    label: "Ostali izdatki v pokoju",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "mesečno", value: "MESECNO" },
        { label: "letno", value: "LETNO" }
      ]
    },
    value: "MESECNO"
  },
  ostaliIzdatki_dodatek_mesecno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
        '40%': [100, 10],
      	'max': [1500]
      },
      pips: {
    		mode: 'values',
    		values: [0, 50, 200, 750, 1000, 1500],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 100
  },
  ostaliIzdatki_dodatek_letno: {
    label: "",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [1000, 100],
      	'max': [15000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 500, 2000, 7500, 10000, 15000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1000
  }
};

export const obveznostiMedUpokojitvijo =  {
  pricakovanaVrednostHipoteke: {
    label: "Pričakovana vrednost hipoteke ob upokojitvi",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [50000, 1000],
      	'max': [500000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 20000, 40000, 100000, 250000, 500000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 0
  },
  pricakovaniKrediti: {
    label: "Pričakovani krediti ob upokojitvi",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [200, 10],
     	  'max': [2000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 100, 200, 1000, 1500, 2000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 0
  },
  dediscina: {
    label: "Dediščina, ki jo želite zapustiti",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  }
};

export const pokojninskaRezerva =  {
  naslov: {
    type: "label_heading_normal",
    value: "Dodatno pokojninsko zavarovanje (2. steber)"
  },
  dodatnoZavarovanje_delodajalec: {
    label: "Znesek, ki ga plačuje delodajalec",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [160]
      },
      pips: {
    		mode: 'values',
    		values: [0, 40, 75, 100, 120, 160],
    		density: 5,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 40
  },
  dodatnoZavarovanje_posameznik: {
    label: "Znesek, ki ga plačujete sami",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [300]
      },
      pips: {
    		mode: 'values',
    		values: [0, 40, 75, 150, 250, 300],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 40
  },
  dodatnoZavarovanje_trenutno: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [10000, 1000],
      	'max': [100000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 4000, 8000, 20000, 50000, 100000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 8000
  },
  naslov2: {
    type: "label_heading_normal",
    value: "Trenutno mesečno varčevanje za pokojnino (3. steber)"
  },
  trenutnoMesecnoZavarovanje_mesec: {
    label: "Mesečni znesek",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
        '40%': [500, 100],
      	'max': [5000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 200, 400, 1000, 2500, 5000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 150
  },
  trenutnoMesecnoZavarovanje_trenutno: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '40%': [40000, 1000],
      	'max': [400000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 15000, 30000, 100000, 250000, 400000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 19000
  },
  naslov3: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za pokojnino"
  },
  enkratnoInvestiranje: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 25000
  }
};

export const otrokovoIzobrazevanje =  {
  varcevanjeZaOtrokovoIzobrazevanje: {
    label: "Varčujete oz. načrtujete varčevanje za otrokovo izobraževanje?",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: "DA"
  },
  varcevanjeZaOtrokovoIzobrazevanje_dodatek: {
    label: "Število otrok, ki gredo študirat",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [10]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2, 4, 6, 8, 10],
    		density: 9,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 2
  },
  kolikoMoramPrivarcevati: {
    label: "Vem, koliko moram privarčevati za stroške študija otroka in sem na dobri poti, da dosežem ta cilj.",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: ""
  },
  pomembno: {
    type: "label_heading_italic",
    value: "POMEMBNO"
  },
  pomembno2: {
    type: "label_subheading_italic",
    value: "Povprečni mesečni strošek za študij v Sloveniji je 565 evrov. Strošek študija za enega otroka v Sloveniji je tako 33.900 EUR (5-letni študij)."
  },
  pomembno3: {
    type: "cite",
    value: "Vir: Študentska organizacija Slovenije, Euroštudent V, 2013"
  }
};

export const otrok1 =  {
  ime: {
    label: "Ime otroka",
    helpText: "",
    required: false,
    type: "text",
    props: {
    },
    value: ""
  },
  starost: {
    label: "Starost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [15]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2, 4, 8, 12, 15],
    		density: 6,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 5
  },
  znesekZaStudij: {
    label: "Znesek, potreben za študij v Sloveniji",
    helpText: "",
    required: false,
    type: "text",
    props: {
      disabled: true
    },
    value: "33.900 EUR"
  },
  odstotekStroskov: {
    label: "% od vseh stroškov, ki jih nameravate plačati za študij otroka (%)",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [100]
      },
      pips: {
    		mode: 'values',
    		values: [0, 20, 40, 60, 80, 100],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 75
  },
  naslov: {
    type: "label_heading_normal",
    value: "Trenutno mesečno varčevanje za otrokovo izobraževanje"
  },
  mesecnoVarcevanje_mesecno: {
    label: "Mesečni znesek",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [200, 10],
     	  'max': [2000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 100, 200, 1000, 1500, 2000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 50
  },
  mesecnoVarcevanje_trenutno: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '20%': [10000, 1000],
      	'max': [300000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 75000, 150000, 250000, 300000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 3400
  },
  naslov2: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za otrokovo izobraževanje"
  },
  enkratnoInvestiranje: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '20%': [10000, 1000],
      	'max': [300000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 75000, 150000, 250000, 300000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 2900
  }
};

export const zdravjeVPokoju =  {
  naslov: {
    type: "label_subheading_italic_margin",
    value: "2.000 EUR letno oziroma 167 EUR mesečno v povprečju je neposreden izdatek oziroma izdatek iz žepa za zdravje in zdravljenje v pokoju."
  },
  varcujeteZaZdravje: {
    label: "Ali varčujete za zdravje in zdravljenje v pokoju?",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: ""
  },
  naslov2: {
    type: "label_heading_normal",
    value: "Trenutno mesečno varčevanje za zdravje v pokoju"
  },
  varcevanjeZaOtroka_mesecno: {
    label: "Mesečni znesek",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  'max': [200]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 20, 50, 100, 150, 200],
     		density: 5,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 50
  },
  varcevanjeZaOtroka_trenutno: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [5000, 1000],
      	'max': [50000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 10000, 25000, 50000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1000
  },
  naslov3: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za zdravje v pokoju"
  },
  enkratnoInvestiranje: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [5000, 1000],
      	'max': [50000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 10000, 25000, 50000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 2500
  },
};

/*************** TVEGANJA ***************/

export const zascitaZivljenja =  {
  partnerOdvisen: {
    label: "Je partner/ka odvisna od vaših dohodkov?",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" }
      ]
    },
    value: "DA"
  },
  partnerOdvisen_dodatek1: {
    label: "Partnerjev mesečni dohodek",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [2000, 100],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 1000, 2000, 4000, 7500, 10000],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 1200
  },
  partnerOdvisen_dodatek2: {
    label: "Starost partnerja",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [18, 1],
      	'max': [99]
      },
      pips: {
    		mode: 'values',
    		values: [18, 30, 45, 65, 80, 99],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 40
  },
  partnerOdvisen_dodatek3: {
    label: "Leta do upokojitve partnerja",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [45]
      },
      pips: {
    		mode: 'values',
    		values: [0, 5, 12, 25, 35, 45],
    		density: 2.25,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 25
  },
  znesekDohodkaZaPartnerja: {
    label: "Mesečni znesek dohodka za partnerja za namen vzdrževanja družine",
    helpText: "(v primeru izpada vašega dohodka)",
    required: true,
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [200, 10],
     	  'max': [2000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 100, 200, 1000, 1500, 2000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 400
  },
  dodatenDohodek: {
    label: "Koliko let je potreben dodaten dohodek za partnerja za namen vzdrževanja družine?",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [1, 1],
      	'max': [25]
      },
      pips: {
    		mode: 'values',
    		values: [1, 5, 10, 15, 20, 25],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 14
  },
  steviloOtrok: {
    label: "Število otrok, odvisnih od vaših dohodkov?",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  steviloOtrok_dodatek: {
    label: "Starost otroka",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [15]
      },
      pips: {
    		mode: 'values',
    		values: [0, 3, 6, 9, 12, 15],
    		density: 6,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 5
  },
  procentStroskovZaPlacati: {
    label: "% od celotnih stroškov, ki jih nameravate plačati - zavarovati za študij otroka (%)",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [100]
      },
      pips: {
    		mode: 'values',
    		values: [0, 20, 40, 60, 80, 100],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 75
  },
  mesecniZnesekDohodka: {
    label: "Mesečni znesek dohodka za partnerja za namen vzdrževanja družine",
    helpText: "(v primeru izpada vašega dohodka)",
    required: true,
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
     	  '40%': [200, 10],
     	  'max': [2000]
      },
      pips: {
     	  mode: 'values',
     		values: [0, 100, 200, 1000, 1500, 2000],
     		density: 4,
     		stepped: true
     	},
      tooltips: false,
      currency: true
    },
    value: 400
  },
  glavnicaDolgov: {
    label: "Glavnica vseh dolgov",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '20%': [10000, 1000],
      	'max': [300000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 75000, 150000, 250000, 300000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 10000
  },
  zavarovanjaZivljenje: {
    label: "Trenutna vrednost vseh že sklenjenih zavarovanj za zaščito življenja",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '20%': [10000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 100000, 150000, 200000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanjaKrediti: {
    label: "Trenutna vrednost vseh že sklenjenih zavarovanj za zaščito kreditov",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '20%': [10000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 100000, 150000, 200000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 100000
  }
};

export const zascitaDelovneSposobnosti =  {
  naslov: {
    type: "label_heading_normal",
    value: "Zaščita v primeru invalidnosti in težjih bolezni"
  },
  naslov2: {
    type: "label_subheading_italic",
    value: "Invalidska pokojnina se odmeri od pokojninske osnove, izračunane na enak način, kot za odmero starostne pokojnine (http://www.zpiz.si/)."
  },
  delovnaDoba: {
    label: "Delovna doba",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [80]
      },
      pips: {
    		mode: 'values',
    		values: [0, 20, 40, 60, 80],
    		density: 5,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 40
  },
  odstotekZaInvalidskoPokojnino: {
    label: "Višina odstotka za odmero invalidske pokojnine",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  invalidskaPokojnina: {
    label: "Invalidska pokojnina, ki bi jo prejeli danes",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  lastniskiIzdatki: {
    label: "Izdatki povezani z lastništvom",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  zivljenjskiIzdatki: {
    label: "Življenjski izdatki",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  izdatkiSkupaj: {
    label: "Izdatki skupaj",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  vrednostZavarovanjInvalidnost: {
    label: "Trenutna vrednost vseh že sklenjenih zavarovanj za zaščito invalidnosti",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '10%': [10000, 1000],
        '50%': [100000, 10000],
        'max': [2000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 1000000, 2000000],
        density: 2,
        stepped: true
      },
      tooltips: false,
      currency: true
    }
  },
  vrednostZavarovanjBolezni: {
    label: "Trenutna vrednost vseh že sklenjenih zavarovanj za zaščito težjih bolezni",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 100],
        '20%': [10000, 1000],
      	'max': [300000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 75000, 150000, 250000, 300000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 100000
  },
};

export const analizaStroskov =  {
  analizaStroskov: {
    label: "Ste kdaj naredili analizo stroškov vseh zavarovanj, ki jih plačujete?",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Ne, sploh se ne zavedam, kako visoki so stroški vseh sklenjenih zavarovanj.", value: "1" },
        { label: "Ne, nisem naredil analize, vendar se zavedam, da s sklenitvijo pridejo tudi stroški.", value: "2" },
        { label: "Da, naložbe sem izbral preudarno. Imam najcenejše zavarovalne produkte na trgu.", value: "3" },
        { label: "Nimam sklenjenega nobenega zavarovanja.", value: "4" }
      ]
    },
    value: ""
  }
};

/*************** PREMOŽENJE ***************/

export const upravljanjeMojegaPremozenja =  {
  splosnoZnanje: {
    label: "Splošno znanje o naložbah, varčevanju in borznih trgih",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Ne vem veliko o vlaganju na finančne trge", value: "1" },
        { label: "Sem seznanjen z osnovnimi finančnimi pojmi, vendar ne vem, kako jih uporabiti v svojem življenju.", value: "2" },
        { label: "Osvojil sem osnove investiranja in varčevanja, imam kar nekaj izkušenj, vendar bi rad dobil drugo mnenje, da se prepričam ali sem na pravi poti.", value: "3" },
        { label: "Sam aktivno upravljam svoje naložbe. Prepričan sem, da sam sprejemam najboljše finančne odločitve za svoje finančne cilje.", value: "4" }
      ]
    },
    value: ""
  },
  pregledNalozb: {
    label: "Kako pogosto pregledate svoje naložbe=",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Naložb ne spremljam.", value: "1" },
        { label: "Naložbe spremljam enkrat letno.", value: "2" },
        { label: "Naložbe spremljam vsake tri mesece.", value: "3" },
        { label: "Naložbe pregledam vsaj enkrat mesečno.", value: "4" },
        { label: "Trenutno nimam nobenih naložb.", value: "5" }
      ]
    },
    value: ""
  },
  nalozbePrilagojene: {
    label: "Prepričan sem, da so moje naložbe prilagojene trenutnim trendom na trgu, mojemu tveganju in mojim ciljem.",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Da", value: "DA" },
        { label: "Ne", value: "NE" },
        { label: "Ne vem", value: "NEVEM" },
        { label: "Trenutno nimam nobenih naložb.", value: "NIC" }
      ]
    },
    value: ""
  },
  analizaStroskovNalozbInVarcevalnihProduktov: {
    label: "Ste kdaj naredili analizo stroškov vseh naložb in varčevalnih produktov?",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Ne, sploh se ne zavedam, kako visoki so stroški naložb in varčevanj.", value: "1" },
        { label: "Ne, nisem naredil analize, vendar se zavedam, da s sklenitvijo pridejo tudi stroški.", value: "2" },
        { label: "Da, naložbe sem izbral preudarno. Imam najcenejše naložbe in varčevanja na trgu.", value: "3" },
        { label: "Trenutno nimam nobenih naložb.", value: "4" }
      ]
    },
    value: ""
  },
  razlikeMedOsebjem: {
    label: "Ali veste kakšna je razlika med osebnim finančnim svetovalcem, zavarovalnim agentom, osebnim bančnikom in upravljalcem premoženja?",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Ne", value: "NE" },
        { label: "Da", value: "DA" },
        { label: "Zame ni razlike med njimi", value: "NIC" }
      ]
    },
    value: ""
  }
};

export const analizaStroskovInPregledProduktov =  {
  naslov: {
    type: "label_heading_normal",
    value: "VARČEVANJA"
  },
  naslov222: {
    type: "label_heading_normal",
    value: "Trenutno mesečno varčevanje za pokojnino (3. steber)"
  },
  steviloProduktov: {
    label: "Število produktov",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "" // max 15
  },
  tipProdukta: {
    label: "Tip produkta",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Klasično življenjsko zavarovanje", value: "1" },
        { label: "Naložbeno življenjsko zavarovanje", value: "2" },
        { label: "Investicijsko zavarovanje", value: "3" },
        { label: "Prostovoljno pokojninsko zavarovanje", value: "4" },
        { label: "Varčevanje v vzajemnih skladih", value: "5" },
        { label: "Varčevanje na banki", value: "6" }
      ]
    },
    value: ""
  },
  tipProdukta_mesecniZnesek: {
    label: "Mesečni znesek",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 6000, 8000, 10000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 5000
  },
  tipProdukta_trenutnaVrednost: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 6000, 8000, 10000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 5000
  },
  naslov2: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanjaNaProduktu_zivljenskoZavarovanje: {
    label: "Življenjsko zavarovanje",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnaZavarovanja: {
    type: "label_subheading_normal",
    value: "Dodatna zavarovanja"
  },
  zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje: {
    label: "Dodatno nezgodno zavarovanje",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni: {
    label: "Dodatno zavarovanje hujših bolezni",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanjaNaProduktu_strosekDodatnihZavarovanj: {
    label: "Strošek dodatnih zavarovanj",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  naslov3: {
    type: "label_heading_normal",
    value: "Trenutno mesečno varčevanje za otrokovo izobraževanje"
  },
  steviloProduktov2: {
    label: "Število produktov",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: ""
  },
  tipProdukta2: {
    label: "Tip produkta",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Klasično življenjsko zavarovanje", value: "1" },
        { label: "Naložbeno življenjsko zavarovanje", value: "2" },
        { label: "Investicijsko zavarovanje", value: "3" },
        { label: "Prostovoljno pokojninsko zavarovanje", value: "4" },
        { label: "Varčevanje v vzajemnih skladih", value: "5" },
        { label: "Varčevanje na banki", value: "6" }
      ]
    },
    value: ""
  },
  tipProdukta_mesecniZnesek2: {
    label: "Mesečni znesek",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 6000, 8000, 10000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 5000
  },
  tipProdukta_trenutnaVrednost2: {
    label: "Trenutna vrednost",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
      	'max': [10000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 6000, 8000, 10000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: false
    },
    value: 5000
  },
  naslov4: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanjaNaProduktu_zivljenskoZavarovanje2: {
    label: "Življenjsko zavarovanje",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnaZavarovanja2: {
    type: "label_subheading_normal",
    value: "Dodatna zavarovanja"
  },
  zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje2: {
    label: "Dodatno nezgodno zavarovanje",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni2: {
    label: "Dodatno zavarovanje hujših bolezni",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanjaNaProduktu_strosekDodatnihZavarovanj2: {
    label: "Strošek dodatnih zavarovanj",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        'max': [1000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 250000, 650000, 1000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  naslov5: {
    type: "label_heading_normal",
    value: "INVESTIRANJE"
  },
  naslov555: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za pokojnino"
  },
  denarnaSredstva: {
    label: "Denarna sredstva",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        '90%': [1000000, 100000],
        'max': [2000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 200000, 750000, 2000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  vzajemniSkladi: {
    label: "Vzajemni skladi",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        '90%': [1000000, 100000],
        'max': [2000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 200000, 750000, 2000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  delnice: {
    label: "Delnice in ostali instrumenti",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [5000, 100],
        '35%': [50000, 1000],
        '65%': [250000, 10000],
        '90%': [1000000, 100000],
        'max': [2000000]
      },
      pips: {
        mode: 'values',
        values: [0, 10000, 50000, 200000, 750000, 2000000],
        density: 3,
        stepped: true
      },
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  enkratniNalozbeniProdukti: {
    label: "Enkratni naložbeni produkti",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '40%': [5000, 1000],
      	'max': [50000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 10000, 25000, 50000],
    		density: 4,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 25000
  },
  naslov6: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanja1: {
    label: "Življenjsko zavarovanja",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '20%': [3000, 100],
        '50%': [7000, 1000],
      	'max': [100000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 10000, 50000, 100000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanja2: {
    type: "label_subheading_normal",
    value: "Dodatna zavarovanja"
  },
  zavarovanja3: {
    label: "Dodatno nezgodno zavarovanje",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [150000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 150000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 75000
  },
  zavarovanja4: {
    label: "Dodatno zavarovanje hujših bolezni",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [150000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 150000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 75000
  },
  zavarovanja5: {
    label: "Strošek dodatnih zavarovanj",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [50]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10, 20, 30, 40, 50],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 25
  },
  naslov7: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za otrokovo izobraževanje"
  },
  denarnaSredstva2: {
    label: "Denarna sredstva",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 200000],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 100000
  },
  vzajemniSkladi2: {
    label: "Vzajemni skladi",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 200000],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 100000
  },
  delnice2: {
    label: "Delnice in ostali instrumenti",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 200000],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 100000
  },
  enkratniNalozbeniProdukti2: {
    label: "Enkratni naložbeni produkti",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [200000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 200000],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 100000
  },
  naslov8: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanja11: {
    label: "Življenjsko zavarovanja",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '20%': [3000, 100],
        '50%': [7000, 1000],
      	'max': [100000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 2000, 4000, 10000, 50000, 100000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 50000
  },
  zavarovanja22: {
    type: "label_subheading_normal",
    value: "Dodatna zavarovanja"
  },
  zavarovanja33: {
    label: "Dodatno nezgodno zavarovanje",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [150000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 150000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 75000
  },
  zavarovanja44: {
    label: "Dodatno zavarovanje hujših bolezni",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 10],
        '10%': [10000, 100],
        '70%': [100000, 1000],
      	'max': [150000]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10000, 50000, 75000, 100000, 150000],
    		density: 3,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 75000
  },
  zavarovanja55: {
    label: "Strošek dodatnih zavarovanj",
    type: "slider",
    required: true,
    props: {
      range: {
        'min': [0, 1],
      	'max': [50]
      },
      pips: {
    		mode: 'values',
    		values: [0, 10, 20, 30, 40, 50],
    		density: 2,
    		stepped: true
    	},
      tooltips: false,
      currency: true
    },
    value: 25
  }
};

export const financniStres =  {
  nivo: {
    label: "Prosim ovrednotite svoj nivo finančnega stresa",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Nimam finančnega stresa", value: "1" },
        { label: "Sem malce pod finančnim stresom", value: "2" },
        { label: "Moj finančni stres je visok", value: "3" },
        { label: "Moj finančni stres je neobvladljiv", value: "4" }
      ]
    },
    value: ""
  },
  razlog: {
    label: "Kaj je glavni razlog vašega finančnega stresa? (v kolikor je prisoten)",
    helpText: "",
    required: true,
    type: "radio-list",
    props: {
      items: [
        { label: "Nimam finančnega stresa", value: "1" },
        { label: "Imam občutek, da moja finančna situacija ni pod kontrolo", value: "2" },
        { label: "Mislim, da v prihodnosti ne bom dosegel/la svojih finančnih ciljev", value: "3" },
        { label: "Želim strokovno in kredibilno finančno svetovanje, vendar ne vem komu lahko zaupam", value: "4" },
        { label: "Skrbijo me geopolitična dogajanja in posledično dogajanja na finančnih trgih. Ne vem, kako bo to vplivalo na mojo \"finančno\" prihodnost", value: "5" }
      ]
    },
    value: ""
  }
};
