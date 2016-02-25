/*************** OSEBNI PODATKI ***************/
export const osebniPodatki =  {
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
    label: "Svoj osebni proračun imam pod kontrolo, tako da vsak mesec zapravim manj kot zaslužim ...",
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
    label: "Ne koristim limita na kartici",
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
        { label: "Da", value: "NE" }
      ]
    },
    value: "DA"
  },
  kreditZaNepremicnino_dodatek1: {
    label: "*** dodatek 1",
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
    label: "*** dodatek 2",
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
    label: "*** dodatek 3",
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
    label: "*** dodatek",
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
    label: "*** dodatek 1",
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
    label: "*** dodatek 2",
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
        { label: "Mesečno", value: "MESECNO" },
        { label: "Letno", value: "LETNO" }
      ]
    },
    value: "LETNO"
  },
  kreditAvto_dodatek1: {
    label: "*** dodatek 1",
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
    label: "*** dodatek 2",
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
    label: "*** dodatek 3",
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
    label: "*** dodatek",
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
    label: "*** dodatek",
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
    label: "*** dodatek",
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
    label: "*** dodatek",
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
    label: "POMEMBNO",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za opozorilo ***<br><br><i>Zaposleni, ki se bo upokojil od leta 2015 dalje, bo prejemal pokojnino v višini samo <u>50% svoje neto plače ali manj.</u> Sami moramo torej zapolniti vrzel v višini vsaj 30% neto mesečnih dohodkov.<br><smaller>Vir: Študija Dolgoročni pomen 2. pokojninskega stebra, Ekonomska fakulteta v Ljubjani, marec 2010</smaller></i>"
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
    label: "*** dodatek",
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
    label: "*** dodatek",
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
    label: "POMEMBNO",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za opozorilo ***<br><br><i>Strošek zdravljenja za moške in ženske po 65-em letu starosti je v Sloveniji v povprečju več kot 2.000€ letno in s starostjo raste.<br><smaller>Vir: Ocena Statističnega urada Republike Slovenije za projekcije AWG 2012</smaller></i>"
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
    label: "*** dodatek",
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
    label: "*** dodatek",
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
    label: "(Naslov za naslednje 3 DDL): Dodatno pokojninsko zavarovanje (2. steber)",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za naslov ***"
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
    label: "(Naslov za naslednja 2 DDL): Trenutno mesečno varčevanje za pokojnino (3. steber)",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za naslov ***"
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
    label: "(Naslov za naslednji DDL): Enkratno investiranje za pokojnino",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za naslov ***"
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
    label: "*** dodatek",
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
    label: "POMEMBNO",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za opozorilo ***<br><br><i>Povprečni mesečni strošek za študij v Sloveniji je <u>565 evrov</u>.<br>Strošek študija za enega otroka v Sloveniji je tako 33.900 EUR (5-letni študij)<br><smaller>Vir: Študentska organizacija Slovenije, Euroštudent V, 2013</smaller></i>"
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
    },
    value: "(FIXNO!) 33.900 EUR"
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
    label: "(Naslov za naslednja 2 DDL): Trenutno mesečno varčevanje za otrokovo izobraževanje",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za naslov ***"
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
    label: "(Naslov za naslednji DDL): Enkratno investiranje za otrokovo izobraževanje",
    helpText: "",
    required: true,
    type: "text",
    props: {
    },
    value: "*** Tega fielda ne sme biti, saj gre samo za naslov ***"
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

// export const zdravjeVPokoju =  {
//   naslov: {
//     label: "",
//     helpText: "",
//     required: true,
//     type: "text",
//     props: {
//     },
//     value: "*** Tega fielda ne sme biti, saj gre samo za podnaslov *** <i><u>2.000 EUR</u> letno oziroma <u>167 EUR</u> mesečno v povprečju je neposreden izdatek oziroma izdatek iz žepa za zdravje in zdravljenje v pokoju.</i>"
//   },
//   varcujeteZaZdravje: {
//     label: "Ali varčujete za zdravje in zdravljenje v pokoju?",
//     helpText: "",
//     required: true,
//     type: "radio-list",
//     props: {
//       items: [
//         { label: "Da", value: "DA" },
//         { label: "Ne", value: "NE" }
//       ]
//     },
//     value: ""
//   },
//   naslov: {
//     label: "(Naslov za naslednja 2 DDL): Trenutno mesečno varčevanje za otrokovo izobraževanje",
//     helpText: "",
//     required: true,
//     type: "text",
//     props: {
//     },
//     value: "*** Tega fielda ne sme biti, saj gre samo za naslov ***"
//   },
// };
