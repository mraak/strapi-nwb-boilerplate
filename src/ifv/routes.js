import React from 'react';
import { Route, Redirect } from 'react-router';

import IFVView from "./IFVView";
import IFVForm from "./IFVForm";

function osebniPodatki() {
  return [
    {
      key: "osebniPodatki",
      title: "Osebni podatki",
      fieldsFunction: (data) => ["id",
        "ime",
        "starost",
        "delovnaDoba",
        "status",
        data.status == "POROCEN" && "steviloOtrok"]
    }
  ];
}

function dohodkiInIzdatki() {
  return [
    {
      key: "dohodek",
      title: "Dohodek",
      fields: ["id",
        "placa",
        "pogodbaSKlubom",
        "sponzorstva",
        "nagrade",
        "dohodkiOdOddajeNepremicnin",
        "drugiDohodki"],
      amount: function({ placa = 0, pogodbaSKlubom = 0, sponzorstva = 0, nagrade = 0, dohodkiOdOddajeNepremicnin = 0, drugiDohodki = 0 }) {
        return Math.round(placa * 12 + pogodbaSKlubom + sponzorstva + nagrade + dohodkiOdOddajeNepremicnin * 12 + drugiDohodki);
      }
    },
    {
      key: "izdatki",
      title: "Izdatki",
      fields: ["id",
        "kontrola",
        "koristimLimit",
        "vsiDolgoviPlacaniPravocasno",
        "zadolzenost",
        "rezerva"]
    },
    {
      key: "lastniskiIzdatki",
      title: "Lastniški izdatki",
      fieldsFunction: (data) => ["id",
        "kreditZaNepremicnino",
          data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek1",
          data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek2",
          data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek3",
        "vzdrzevanjeNepremicnine",
          data.vzdrzevanjeNepremicnine == "MESECNO" && "vzdrzevanjeNepremicnine_dodatek_mesecno",
          data.vzdrzevanjeNepremicnine == "LETNO" && "vzdrzevanjeNepremicnine_dodatek_letno",
        "najemnina",
          data.najemnina == "DA" && "najemnina_dodatek1",
            data.najemnina_dodatek1 == "MESECNO" && "najemnina_dodatek_mesecno",
            data.najemnina_dodatek1 == "LETNO" && "najemnina_dodatek_letno",
        "kreditAvto",
          data.kreditAvto == "DA" && "kreditAvto_dodatek1",
          data.kreditAvto == "DA" && "kreditAvto_dodatek2",
          data.kreditAvto == "DA" && "kreditAvto_dodatek3",
        "vzdrzevanjeAvta",
          data.vzdrzevanjeAvta == "MESECNO" && "vzdrzevanjeAvta_dodatek_mesecno",
          data.vzdrzevanjeAvta == "LETNO" && "vzdrzevanjeAvta_dodatek_letno",
        "ostaliDolgovi"],
      amount: function({ kreditZaNepremicnino_dodatek1 = 0, kreditZaNepremicnino_dodatek2 = 0,
                        vzdrzevanjeNepremicnine_dodatek_mesecno = 0, vzdrzevanjeNepremicnine_dodatek_letno = 0,
                        najemnina_dodatek_mesecno = 0, najemnina_dodatek_letno = 0,
                        kreditAvto_dodatek1 = 0, kreditAvto_dodatek2 = 0, kreditAvto_dodatek3 = 0,
                        vzdrzevanjeAvta_dodatek_mesecno = 0, vzdrzevanjeAvta_dodatek_letno = 0,
                        ostaliDolgovi = 0 }) {
        return Math.round(kreditZaNepremicnino_dodatek1 * 12 + kreditZaNepremicnino_dodatek2 +
                vzdrzevanjeNepremicnine_dodatek_mesecno * 12 + vzdrzevanjeNepremicnine_dodatek_letno +
                najemnina_dodatek_mesecno * 12 + najemnina_dodatek_letno +
                kreditAvto_dodatek1 + kreditAvto_dodatek2 +
                vzdrzevanjeAvta_dodatek_mesecno * 12 + vzdrzevanjeAvta_dodatek_letno +
                ostaliDolgovi);
      }
    },
    {
      key: "zivljenjskiIzdatki",
      title: "Življenjski izdatki",
      fieldsFunction: (data) => ["id",
        "zivljenjskiIzdatki",
          data.zivljenjskiIzdatki == "MESECNO" && "zivljenjskiIzdatki_dodatek_mesecno",
          data.zivljenjskiIzdatki == "LETNO" && "zivljenjskiIzdatki_dodatek_letno",
        "zavarovanja",
          data.zavarovanja == "MESECNO" && "zavarovanja_dodatek_mesecno",
          data.zavarovanja == "LETNO" && "zavarovanja_dodatek_letno",
        "ostaliIzdatki",
          data.ostaliIzdatki == "MESECNO" && "ostaliIzdatki_dodatek_mesecno",
          data.ostaliIzdatki == "LETNO" && "ostaliIzdatki_dodatek_letno"],
      amount: function({ zivljenjskiIzdatki_dodatek_mesecno = 0, zivljenjskiIzdatki_dodatek_letno = 0,
                        zavarovanja_dodatek_mesecno = 0, zavarovanja_dodatek_letno = 0,
                        ostaliIzdatki_dodatek_mesecno = 0, ostaliIzdatki_dodatek_letno = 0 }) {
        return Math.round(zivljenjskiIzdatki_dodatek_mesecno * 12 + zivljenjskiIzdatki_dodatek_letno +
                          zavarovanja_dodatek_mesecno * 12 + zavarovanja_dodatek_letno +
                          ostaliIzdatki_dodatek_mesecno * 12 + ostaliIzdatki_dodatek_letno);
      }
    }
  ];
}

function prihodnost() {
  return [
    {
      key: "pokojnina",
      title: "Pokojnina",
      fields: ["id", "stLetDoUpokojitve", "pricakovanoStLetVPokoju", "dobraPot", "pomembno", "pomembno2", "pomembno3"]
    },
    {
      key: "izdatkiVPokoju",
      title: "Izdatki v pokoju (v današnjih evrih)",
      fieldsFunction: (data) => ["id",
        "nepremicninskiIzdatki",
          data.nepremicninskiIzdatki == "MESECNO" && "nepremicninskiIzdatki_dodatek_mesecno",
          data.nepremicninskiIzdatki == "LETNO" && "nepremicninskiIzdatki_dodatek_letno",
        "zivljenjskiIzdatki",
          data.zivljenjskiIzdatki == "MESECNO" && "zivljenjskiIzdatki_dodatek_mesecno",
          data.zivljenjskiIzdatki == "LETNO" && "zivljenjskiIzdatki_dodatek_letno",
        "neposredni_izdatki",
        "pomembno",
        "pomembno2",
        "pomembno3",
        "potovanjaInZabava",
          data.potovanjaInZabava == "MESECNO" && "potovanjaInZabava_dodatek_mesecno",
          data.potovanjaInZabava == "LETNO" && "potovanjaInZabava_dodatek_letno",
        "ostaliIzdatki",
          data.ostaliIzdatki == "MESECNO" && "ostaliIzdatki_dodatek_mesecno",
          data.ostaliIzdatki == "LETNO" && "ostaliIzdatki_dodatek_letno"],
      amount: function({ nepremicninskiIzdatki_dodatek_mesecno = 0, nepremicninskiIzdatki_dodatek_letno = 0,
                          zivljenjskiIzdatki_dodatek_mesecno = 0, zivljenjskiIzdatki_dodatek_letno = 0,
                          neposredni_izdatki = 0,
                          potovanjaInZabava_dodatek_mesecno = 0, potovanjaInZabava_dodatek_letno = 0,
                          ostaliIzdatki_dodatek_mesecno = 0, ostaliIzdatki_dodatek_letno = 0 }) {
        return Math.round(nepremicninskiIzdatki_dodatek_mesecno * 12 + nepremicninskiIzdatki_dodatek_letno +
                          zivljenjskiIzdatki_dodatek_mesecno * 12 + zivljenjskiIzdatki_dodatek_letno +
                          neposredni_izdatki +
                          potovanjaInZabava_dodatek_mesecno * 12 + potovanjaInZabava_dodatek_letno +
                          ostaliIzdatki_dodatek_mesecno * 12 + ostaliIzdatki_dodatek_letno);
      }
    },
    {
      key: "obveznostiMedUpokojitvijo",
      title: "Pričakovane obveznosti med upokojitvijo",
      fields: ["id",
        "pricakovanaVrednostHipoteke",
        "pricakovaniKrediti",
        "dediscina"],
      amount: function({ pricakovanaVrednostHipoteke = 0, pricakovaniKrediti = 0, dediscina = 0 }) {
        return Math.round(pricakovanaVrednostHipoteke + pricakovaniKrediti + dediscina);
      }
    },
    {
      key: "pokojninskaRezerva",
      title: "Privarčevana sredstva za pokojninsko rezervo",
      fields: ["id",
        "naslov",
        "dodatnoZavarovanje_delodajalec", "dodatnoZavarovanje_posameznik", "dodatnoZavarovanje_trenutno",
        "naslov2",
        "trenutnoMesecnoZavarovanje_mesec", "trenutnoMesecnoZavarovanje_trenutno",
        "naslov3",
        "enkratnoInvestiranje"],
      amount: function({ dodatnoZavarovanje_delodajalec = 0, dodatnoZavarovanje_posameznik = 0, dodatnoZavarovanje_trenutno = 0,
                          trenutnoMesecnoZavarovanje_mesec = 0, trenutnoMesecnoZavarovanje_trenutno = 0,
                          enkratnoInvestiranje = 0 }) {
        return Math.round(dodatnoZavarovanje_delodajalec + dodatnoZavarovanje_posameznik + dodatnoZavarovanje_trenutno +
                          trenutnoMesecnoZavarovanje_mesec + trenutnoMesecnoZavarovanje_trenutno +
                          enkratnoInvestiranje);
      }
    },
    {
      key: "otrokovoIzobrazevanje",
      title: "Sklad za otrokovo izobraževanje",
      fieldsFunction: (data) => ["id",
        "varcevanjeZaOtrokovoIzobrazevanje",
          data.varcevanjeZaOtrokovoIzobrazevanje == "DA" && "varcevanjeZaOtrokovoIzobrazevanje_dodatek",
          "kolikoMoramPrivarcevati",
          "pomembno",
          "pomembno2",
          "pomembno3"]
    },
    {
      key: "otrok1",
      title: "Otrok 1",
      fields: ["id",
        "ime",
        "starost",
        "znesekZaStudij",
        "odstotekStroskov",
        "naslov",
        "mesecnoVarcevanje_mesecno",
        "mesecnoVarcevanje_trenutno",
        "naslov2",
        "enkratnoInvestiranje"],
      amount: function({ znesekZaStudij = 0, mesecnoVarcevanje_mesecno = 0, mesecnoVarcevanje_trenutno = 0, enkratnoInvestiranje = 0 }) {
        var numStr = znesekZaStudij.toString();
        var tmp_before = parseInt(numStr.substring(0, numStr.indexOf(".")));
        var tmp_after = parseInt(numStr.substring(numStr.indexOf(".") + 1, numStr.indexOf(" ")));

        return Math.round(tmp_before * 1000 + tmp_after + mesecnoVarcevanje_mesecno * 12 + mesecnoVarcevanje_trenutno + enkratnoInvestiranje);
      }
    },
    {
      key: "zdravjeVPokoju",
      title: "Zdravje in zdravljenje v pokoju",
      fieldsFunction: (data) => ["id",
        "naslov",
        "varcujeteZaZdravje",
          data.varcujeteZaZdravje == "DA" && "naslov2",
          data.varcujeteZaZdravje == "DA" &&"varcevanjeZaOtroka_mesecno",
          data.varcujeteZaZdravje == "DA" && "varcevanjeZaOtroka_trenutno",
          data.varcujeteZaZdravje == "DA" && "naslov3",
          data.varcujeteZaZdravje == "DA" && "enkratnoInvestiranje"],
      amount: function({ varcevanjeZaOtroka_mesecno = 0, varcevanjeZaOtroka_trenutno = 0, enkratnoInvestiranje = 0 }) {
        return Math.round(varcevanjeZaOtroka_mesecno * 12 + varcevanjeZaOtroka_trenutno + enkratnoInvestiranje);
      }
    }
  ];
}

function tveganja() {
  return [
    {
      key: "zascitaZivljenja",
      title: "Zaščita življenja",
      fieldsFunction: (data) => ["id",
        "partnerOdvisen",
          data.partnerOdvisen == "DA" && "partnerOdvisen_dodatek1",
          data.partnerOdvisen == "DA" && "partnerOdvisen_dodatek2",
          data.partnerOdvisen == "DA" && "partnerOdvisen_dodatek3",
        "znesekDohodkaZaPartnerja",
        "dodatenDohodek",
        "steviloOtrok",
          data.steviloOtrok != "" && "steviloOtrok_dodatek",
        "procentStroskovZaPlacati",
        "mesecniZnesekDohodka",
        "glavnicaDolgov",
        "zavarovanjaZivljenje",
        "zavarovanjaKrediti"],
      amount: function({ partnerOdvisen_dodatek1 = 0, znesekDohodkaZaPartnerja = 0, mesecniZnesekDohodka = 0, zavarovanjaZivljenje = 0, zavarovanjaKrediti = 0 }) {
        return Math.round(partnerOdvisen_dodatek1 * 12 + znesekDohodkaZaPartnerja * 12 + mesecniZnesekDohodka * 12 + zavarovanjaZivljenje + zavarovanjaKrediti);
      }
    },
    {
      key: "zascitaDelovneSposobnosti",
      title: "Zaščita delovne sposobnosti",
      fieldsFunction: (data) => ["id",
        "naslov",
        "naslov2",
        "delovnaDoba",
        "odstotekZaInvalidskoPokojnino",
        "invalidskaPokojnina",
        "lastniskiIzdatki",
        "zivljenjskiIzdatki",
        "izdatkiSkupaj",
        "vrednostZavarovanjInvalidnost",
        "vrednostZavarovanjBolezni"],
      amount: function({ delovnaDoba = 0,
                          odstotekZaInvalidskoPokojnino = 0,
                          invalidskaPokojnina = 0,
                          lastniskiIzdatki = 0,
                          zivljenjskiIzdatki = 0,
                          izdatkiSkupaj = 0,
                          vrednostZavarovanjInvalidnost = 0,
                          vrednostZavarovanjBolezni = 0 }) {
        return Math.round(
          delovnaDoba
        );
      }
    },
    {
      key: "analizaStroskov",
      title: "Analiza stroškov",
      fields: ["id", "analizaStroskov"]
    }
  ];
}

function premozenje() {
  return [
    {
      key: "upravljanjeMojegaPremozenja",
      title: "Upravljanje mojega premoženja",
      fields: ["id",
        "splosnoZnanje",
        "pregledNalozb",
        "nalozbePrilagojene",
        "analizaStroskovNalozbInVarcevalnihProduktov",
        "razlikeMedOsebjem"]
    },
    {
      key: "analizaStroskovInPregledProduktov",
      title: "Analiza stroškov in pregled produktov",
      fields: ["id",
        "naslov",
        "naslov222",
        "steviloProduktov",
        "tipProdukta",
        "tipProdukta_mesecniZnesek",
        "tipProdukta_trenutnaVrednost",
        "naslov2",
        "zavarovanjaNaProduktu_zivljenskoZavarovanje",
        "zavarovanjaNaProduktu_dodatnaZavarovanja",
        "zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje",
        "zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni",
        "zavarovanjaNaProduktu_strosekDodatnihZavarovanj",
        "naslov3",
        "steviloProduktov2",
        "tipProdukta2",
        "tipProdukta_mesecniZnesek2",
        "tipProdukta_trenutnaVrednost2",
        "naslov4",
        "zavarovanjaNaProduktu_zivljenskoZavarovanje2",
        "zavarovanjaNaProduktu_dodatnaZavarovanja2",
        "zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje2",
        "zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni2",
        "zavarovanjaNaProduktu_strosekDodatnihZavarovanj2",
        "naslov5",
        "naslov555",
        "denarnaSredstva",
        "vzajemniSkladi",
        "delnice",
        "enkratniNalozbeniProdukti",
        "naslov6",
        "zavarovanja1",
        "zavarovanja2",
        "zavarovanja3",
        "zavarovanja4",
        "zavarovanja5",
        "naslov7",
        "denarnaSredstva2",
        "vzajemniSkladi2",
        "delnice2",
        "enkratniNalozbeniProdukti2",
        "naslov8",
        "zavarovanja11",
        "zavarovanja22",
        "zavarovanja33",
        "zavarovanja44",
        "zavarovanja55"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "financniStres",
      title: "Finančni stres",
      fields: ["id",
      "nivo",
      "razlog"]
    }
  ];
}

export default [
  <Redirect from="/ifv" to="/ifv/osebni-podatki"/>,
  <Route name="Indeks finančne varnosti" path="/ifv" component={IFVView}>
    <Route name="OSEBNI PODATKI" path="osebni-podatki" component={IFVForm} forms={osebniPodatki}/>
    <Route name="moji DOHODKI IN IZDATKI" path="dohodki-in-izdatki" component={IFVForm} forms={dohodkiInIzdatki}/>
    <Route name="moja PRIHODNOST" path="prihodnost" component={IFVForm} forms={prihodnost}/>
    <Route name="moja TVEGANJA" path="tveganja" component={IFVForm} forms={tveganja}/>
    <Route name="moje PREMOŽENJE" path="premozenje" component={IFVForm} forms={premozenje}/>
  </Route>
];
