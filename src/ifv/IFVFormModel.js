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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 130,
      step: 1
    },
    value: 40
  },
  delovnaDoba: {
    label: "Delovna doba",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 80,
      step: 1
    },
    value: 40
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 20000,
      step: 50
    },
    value: 1200
  },
  pogodbaSKlubom: {
    label: "Pogodba s klubom",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 100
    },
    value: 50000
  },
  sponzorstva: {
    label: "Sponzorstva (letno)",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 500000,
      step: 100
    },
    value: 20000
  },
  nagrade: {
    label: "Nagrade (letno)",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 500000,
      step: 100
    },
    value: 10000
  },
  dohodkiOdOddajeNepremicnin: {
    label: "Dohodki od oddaje nepremičnin (mesečno)",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000,
      step: 10
    },
    value: 500
  },
  drugiDohodki: {
    label: "Drugi dohodki",
    helpText: "Skupni mesečni znesek",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 1000000000,
      step: 10
    },
    value: 0
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
        { label: "Da", value: "NE" }
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
        { label: "Da", value: "NE" }
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
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 10
    },
    value: 420
  },
  kreditZaNepremicnino_dodatek2: {
    label: "vrednost preostale glavnice",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 100000
  },
  kreditZaNepremicnino_dodatek3: {
    label: "preostala leta odplačevanja",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 50,
      step: 1
    },
    value: 20
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
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 100000,
      step: 100
    },
    value: 3000
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
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 100
    },
    value: 500
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
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 5000,
      step: 5
    },
    value: 125
  },
  kreditAvto_dodatek2: {
    label: "vrednost preostale glavnice",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 50000,
      step: 100
    },
    value: 6000
  },
  kreditAvto_dodatek3: {
    label: "preostala leta odplačevanja",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 50,
      step: 1
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
  vzdrzevanjeAvta_dodatek: {
    label: "",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 20000,
      step: 100
    },
    value: 3500
  },
  ostaliDolgovi: {
    label: "Ostali dolgovi",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 50000,
      step: 100
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
  zivljenjskiIzdatki_dodatek: {
    label: "",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 10
    },
    value: 650
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
  zavarovanja_dodatek: {
    label: "",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 200,
      step: 5
    },
    value: 80
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
  ostaliIzdatki_dodatek: {
    label: "",
    helpText: "",
    required: false,
    type: "range",
    props: {
      min: 0,
      max: 12000,
      step: 10
    },
    value: 360
  }
};

/*************** PRIHODNOST ***************/

export const pokojnina =  {
  stLetDoUpokojitve: {
    label: "Število let do upokojitve",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 45,
      step: 1
    },
    value: 20
  },
  pricakovanoStLetVPokoju: {
    label: "Pričakovano število let v pokoju",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 45,
      step: 1
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
  nepremicninskiIzdatki_dodatek: {
    label: "",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 3000,
      step: 10
    },
    value: 150
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
  zivljenjskiIzdatki_dodatek: {
    label: "",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 3000,
      step: 10
    },
    value: 200
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
  potovanjaInZabava_dodatek: {
    label: "",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 3000,
      step: 10
    },
    value: 150
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
  ostaliIzdatki_dodatek: {
    label: "",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 3000,
      step: 10
    },
    value: 100
  }
};

export const obveznostiMedUpokojitvijo =  {
  pricakovanaVrednostHipoteke: {
    label: "Pričakovana vrednost hipoteke ob upokojitvi",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 500000,
      step: 1000
    },
    value: 0
  },
  pricakovaniKrediti: {
    label: "Pričakovani krediti ob upokojitvi",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000,
      step: 10
    },
    value: 0
  },
  dediscina: {
    label: "Dediščina, ki jo želite zapustiti",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 160,
      step: 1
    },
    value: 40
  },
  dodatnoZavarovanje_posameznik: {
    label: "Znesek, ki ga plačujete sami",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 300,
      step: 1
    },
    value: 40
  },
  dodatnoZavarovanje_trenutno: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100000,
      step: 100
    },
    value: 8000
  },
  naslov2: {
    type: "label_heading_normal",
    value: "Trenutno mesečno varčevanje za pokojnino (3. steber)"
  },
  trenutnoMesecnoZavarovanje_mesec: {
    label: "Mesečni znesek",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 5000,
      step: 10
    },
    value: 150
  },
  trenutnoMesecnoZavarovanje_trenutno: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 400000,
      step: 100
    },
    value: 19000
  },
  naslov3: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za pokojnino"
  },
  enkratnoInvestiranje: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 10,
      step: 1
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 20,
      step: 1
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100,
      step: 1
    },
    value: 75
  },
  naslov: {
    type: "label_heading_normal",
    value: "Trenutno mesečno varčevanje za otrokovo izobraževanje"
  },
  mesecnoVarcevanje_mesecno: {
    label: "Mesečni znesek",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000,
      step: 10
    },
    value: 50
  },
  mesecnoVarcevanje_trenutno: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 300000,
      step: 100
    },
    value: 3400
  },
  naslov2: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za otrokovo izobraževanje"
  },
  enkratnoInvestiranje: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 300000,
      step: 100
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 200,
      step: 1
    },
    value: 50
  },
  varcevanjeZaOtroka_trenutno: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 50000,
      step: 100
    },
    value: 1000
  },
  naslov3: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za zdravje v pokoju"
  },
  enkratnoInvestiranje: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 50000,
      step: 100
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 100
    },
    value: 1200
  },
  partnerOdvisen_dodatek2: {
    label: "Starost partnerja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 18,
      max: 99,
      step: 1
    },
    value: 40
  },
  partnerOdvisen_dodatek3: {
    label: "Leta do upokojitve partnerja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 45,
      step: 1
    },
    value: 25
  },
  znesekDohodkaZaPartnerja: {
    label: "Mesečni znesek dohodka za partnerja za namen vzdrževanja družine",
    helpText: "(v primeru izpada vašega dohodka)",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000,
      step: 10
    },
    value: 400
  },
  dodatenDohodek: {
    label: "Koliko let je potreben dodaten dohodek za partnerja za namen vzdrževanja družine?",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 1,
      max: 25,
      step: 1
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 20,
      step: 1
    },
    value: 5
  },
  procentStroskovZaPlacati: {
    label: "% od celotnih stroškov, ki jih nameravate plačati - zavarovati za študij otroka (%)",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100,
      step: 1
    },
    value: 75
  },
  mesecniZnesekDohodka: {
    label: "Mesečni znesek dohodka za namen vzdrževanja družine",
    helpText: "(v primeru izpada vašega dohodka)",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 100
    },
    value: 700
  },
  glavnicaDolgov: {
    label: "Glavnica vseh dolgov",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100000,
      step: 100
    },
    value: 2000
  },
  zavarovanjaZivljenje: {
    label: "Trenutna vrednost vseh že sklenjenih zavarovanj za zaščito življenja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 200000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaKrediti: {
    label: "Trenutna vrednost vseh že sklenjenih zavarovanj za zaščito kreditov",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 200000,
      step: 1000
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 80,
      step: 1
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000000,
      step: 1000
    },
    value: 250000
  },
  vrednostZavarovanjBolezni: {
    label: "Trenutna vrednost vseh že sklenjenih zavarovanj za zaščito težjih bolezni",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 300000,
      step: 1000
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 10
    },
    value: 5000
  },
  tipProdukta_trenutnaVrednost: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 10
    },
    value: 5000
  },
  naslov2: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanjaNaProduktu_zivljenskoZavarovanje: {
    label: "Življenjsko zavarovanje",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnaZavarovanja: {
    label: "Dodatna zavarovanja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje: {
    label: "Dodatno nezgodno zavarovanje",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni: {
    label: "Dodatno zavarovanje hujših bolezni",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_strosekDodatnihZavarovanj: {
    label: "Strošek dodatnih zavarovanj",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 10
    },
    value: 5000
  },
  tipProdukta_trenutnaVrednost2: {
    label: "Trenutna vrednost",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 10000,
      step: 10
    },
    value: 5000
  },
  naslov4: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanjaNaProduktu_zivljenskoZavarovanje2: {
    label: "Življenjsko zavarovanje",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnaZavarovanja2: {
    label: "Dodatna zavarovanja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje2: {
    label: "Dodatno nezgodno zavarovanje",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni2: {
    label: "Dodatno zavarovanje hujših bolezni",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
    },
    value: 50000
  },
  zavarovanjaNaProduktu_strosekDodatnihZavarovanj2: {
    label: "Strošek dodatnih zavarovanj",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 1000000,
      step: 1000
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
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000000,
      step: 1000
    },
    value: 200000
  },
  vzajemniSkladi: {
    label: "Vzajemni skladi",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000000,
      step: 1000
    },
    value: 200000
  },
  delnice: {
    label: "Delnice in ostali instrumenti",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000000,
      step: 1000
    },
    value: 200000
  },
  enkratniNalozbeniProdukti: {
    label: "Enkratni naložbeni produkti",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 50000,
      step: 100
    },
    value: 10000
  },
  naslov6: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanja1: {
    label: "Življenjsko zavarovanja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100000,
      step: 1000
    },
    value: 50000
  },
  zavarovanja2: {
    label: "Dodatna zavarovanja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100000,
      step: 1000
    },
    value: 50000
  },
  zavarovanja3: {
    label: "Dodatno nezgodno zavarovanje",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 150000,
      step: 1000
    },
    value: 75000
  },
  zavarovanja4: {
    label: "Dodatno zavarovanje hujših bolezni",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 150000,
      step: 1000
    },
    value: 75000
  },
  zavarovanja5: {
    label: "Strošek dodatnih zavarovanj",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 50,
      step: 1
    },
    value: 25
  },
  naslov7: {
    type: "label_heading_normal",
    value: "Enkratno investiranje za otrokovo izobraževanje"
  },
  denarnaSredstva2: {
    label: "Denarna sredstva",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000000,
      step: 1000
    },
    value: 200000
  },
  vzajemniSkladi2: {
    label: "Vzajemni skladi",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000000,
      step: 1000
    },
    value: 200000
  },
  delnice2: {
    label: "Delnice in ostali instrumenti",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 2000000,
      step: 1000
    },
    value: 200000
  },
  enkratniNalozbeniProdukti2: {
    label: "Enkratni naložbeni produkti",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 50000,
      step: 100
    },
    value: 10000
  },
  naslov8: {
    type: "label_subheading_normal",
    value: "Zavarovanja na produktu"
  },
  zavarovanja11: {
    label: "Življenjsko zavarovanja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100000,
      step: 1000
    },
    value: 50000
  },
  zavarovanja22: {
    label: "Dodatna zavarovanja",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 100000,
      step: 1000
    },
    value: 50000
  },
  zavarovanja33: {
    label: "Dodatno nezgodno zavarovanje",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 150000,
      step: 1000
    },
    value: 75000
  },
  zavarovanja44: {
    label: "Dodatno zavarovanje hujših bolezni",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 150000,
      step: 1000
    },
    value: 75000
  },
  zavarovanja55: {
    label: "Strošek dodatnih zavarovanj",
    helpText: "",
    required: true,
    type: "range",
    props: {
      min: 0,
      max: 50,
      step: 1
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
