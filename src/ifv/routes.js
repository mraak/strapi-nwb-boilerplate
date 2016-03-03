import React from 'react';
import { Route, Redirect } from 'react-router';

import IFVView from "./IFVView";
import IFVForm from "./IFVForm";

function osebniPodatki() {
  return [
    {
      key: "osebniPodatki",
      title: "Osebni podatki",
      fieldsFunction: (data) => ["id", "ime", "starost", "delovnaDoba", "status", data.status == "POROCEN" && "steviloOtrok"],
      amount: function(data) {
        return "/";
      }
    }
  ];
}

function dohodkiInIzdatki() {
  return [
    {
      key: "dohodek",
      title: "Dohodek",
      fields: ["id", "placa", "pogodbaSKlubom", "sponzorstva", "nagrade", "dohodkiOdOddajeNepremicnin", "drugiDohodki"],
      amount: function(data) {
        return data.placa * 12 - data.pogodbaSKlubom + data.sponzorstva + data.nagrade + data.dohodkiOdOddajeNepremicnin * 12 + data.drugiDohodki;
      }
    },
    {
      key: "izdatki",
      title: "Izdatki",
      fields: ["id", "kontrola", "koristimLimit", "vsiDolgoviPlacaniPravocasno", "zadolzenost", "rezerva"],
      amount: function(data) {
        return "/";
      }
    },
    {
      key: "lastniskiIzdatki",
      title: "Lastniški izdatki",
      fieldsFunction: (data) => ["id", "kreditZaNepremicnino", data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek1",
      data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek2", data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek3", "vzdrzevanjeNepremicnine",
      "vzdrzevanjeNepremicnine_dodatek", "najemnina", data.najemnina == "DA" && "najemnina_dodatek1", data.najemnina_dodatek1 == "MESECNO" && "najemnina_dodatek2",
      data.najemnina_dodatek1 == "LETNO" && "najemnina_dodatek3", "kreditAvto", data.kreditAvto == "DA" && "kreditAvto_dodatek1", data.kreditAvto == "DA" && "kreditAvto_dodatek2",
      data.kreditAvto == "DA" && "kreditAvto_dodatek3", "vzdrzevanjeAvta", data.vzdrzevanjeAvta == "MESECNO" && "vzdrzevanjeAvta_dodatek_mesecno",
      data.vzdrzevanjeAvta == "LETNO" && "vzdrzevanjeAvta_dodatek_letno", "ostaliDolgovi"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "zivljenjskiIzdatki",
      title: "Življenjski izdatki",
      fieldsFunction: (data) => ["id", "zivljenjskiIzdatki", data.zivljenjskiIzdatki == "MESECNO" && "zivljenjskiIzdatki_dodatek_mesecno",
      data.zivljenjskiIzdatki == "LETNO" && "zivljenjskiIzdatki_dodatek_letno", "zavarovanja", data.zavarovanja == "MESECNO" && "zavarovanja_dodatek_mesecno",
      data.zavarovanja == "LETNO" && "zavarovanja_dodatek_letno", "ostaliIzdatki", data.ostaliIzdatki == "MESECNO" && "ostaliIzdatki_dodatek_mesecno",
      data.ostaliIzdatki == "LETNO" && "ostaliIzdatki_dodatek_letno"],
      amount: function(data) {
        var sum = 0;
        if(data.zivljenjskiIzdatki == "MESECNO") {
          sum += data.zivljenjskiIzdatki_dodatek * 12;
          if(data.zavarovanja == "MESECNO") {
            sum += data.zavarovanja_dodatek * 12;
            if(data.ostaliIzdatki == "MESECNO") {
              sum += data.ostaliIzdatki_dodatek * 12;
            }
            else
              sum += data.ostaliIzdatki_dodatek;
          }
          else {
            sum += data.zavarovanja_dodatek;
          }
        }
        else {
          sum += data.zivljenjskiIzdatki_dodatek;
        }
        return sum;
      }
    }
  ];
}

function prihodnost() {
  return [
    {
      key: "pokojnina",
      title: "Pokojnina",
      fields: ["id", "stLetDoUpokojitve", "pricakovanoStLetVPokoju", "dobraPot", "pomembno", "pomembno2", "pomembno3"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "izdatkiVPokoju",
      title: "Izdatki v pokoju (v današnjih evrih)",
      fieldsFunction: (data) => ["id", "nepremicninskiIzdatki", data.nepremicninskiIzdatki == "MESECNO" && "nepremicninskiIzdatki_dodatek_mesecno",
      data.nepremicninskiIzdatki == "LETNO" && "nepremicninskiIzdatki_dodatek_letno", "zivljenjskiIzdatki", data.zivljenjskiIzdatki == "MESECNO" && "zivljenjskiIzdatki_dodatek_mesecno",
      data.zivljenjskiIzdatki == "LETNO" && "zivljenjskiIzdatki_dodatek_letno", "neposredni_izdatki", "pomembno", "pomembno2", "pomembno3", "potovanjaInZabava",
      data.potovanjaInZabava == "MESECNO" && "potovanjaInZabava_dodatek_mesecno", data.potovanjaInZabava == "LETNO" && "potovanjaInZabava_dodatek_letno", "ostaliIzdatki",
      data.ostaliIzdatki == "MESECNO" && "ostaliIzdatki_dodatek_mesecno", data.ostaliIzdatki == "LETNO" && "ostaliIzdatki_dodatek_letno"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "obveznostiMedUpokojitvijo",
      title: "Pričakovane obveznosti med upokojitvijo",
      fields: ["id", "pricakovanaVrednostHipoteke", "pricakovaniKrediti", "dediscina"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "pokojninskaRezerva",
      title: "Privarčevana sredstva za pokojninsko rezervo",
      fields: ["id", "naslov", "dodatnoZavarovanje_delodajalec", "dodatnoZavarovanje_posameznik", "dodatnoZavarovanje_trenutno", "naslov2", "trenutnoMesecnoZavarovanje_mesec",
      "trenutnoMesecnoZavarovanje_trenutno", "naslov3", "enkratnoInvestiranje"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "otrokovoIzobrazevanje",
      title: "Sklad za otrokovo izobraževanje",
      fieldsFunction: (data) => ["id", "varcevanjeZaOtrokovoIzobrazevanje", data.varcevanjeZaOtrokovoIzobrazevanje == "DA" && "varcevanjeZaOtrokovoIzobrazevanje_dodatek", "kolikoMoramPrivarcevati",
      "pomembno", "pomembno2", "pomembno3"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "otrok1",
      title: "Otrok 1",
      fields: ["id", "ime", "starost", "znesekZaStudij", "odstotekStroskov", "naslov", "mesecnoVarcevanje_mesecno", "mesecnoVarcevanje_trenutno", "naslov2", "enkratnoInvestiranje"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "zdravjeVPokoju",
      title: "Zdravje in zdravljenje v pokoju",
      fieldsFunction: (data) => ["id", "naslov", "varcujeteZaZdravje", data.varcujeteZaZdravje == "DA" && "naslov2", data.varcujeteZaZdravje == "DA" &&"varcevanjeZaOtroka_mesecno",
      data.varcujeteZaZdravje == "DA" && "varcevanjeZaOtroka_trenutno", data.varcujeteZaZdravje == "DA" && "naslov3", data.varcujeteZaZdravje == "DA" && "enkratnoInvestiranje"],
      amount: function(data) {
        return 1;
      }
    }
  ];
}

function tveganja() {
  return [
    {
      key: "zascitaZivljenja",
      title: "Zaščita življenja",
      fieldsFunction: (data) => ["id", "partnerOdvisen", data.partnerOdvisen == "DA" && "partnerOdvisen_dodatek1", data.partnerOdvisen == "DA" && "partnerOdvisen_dodatek2",
      data.partnerOdvisen == "DA" && "partnerOdvisen_dodatek3", "znesekDohodkaZaPartnerja", "dodatenDohodek", "steviloOtrok", data.steviloOtrok != "" &&
      "steviloOtrok_dodatek", "procentStroskovZaPlacati", "mesecniZnesekDohodka", "glavnicaDolgov", "zavarovanjaZivljenje", "zavarovanjaKrediti"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "zascitaDelovneSposobnosti",
      title: "Zaščita delovne sposobnosti",
      fieldsFunction: (data) => ["id", "naslov", "naslov2", "delovnaDoba", "odstotekZaInvalidskoPokojnino", "invalidskaPokojnina", "lastniskiIzdatki", "zivljenjskiIzdatki", "izdatkiSkupaj", "vrednostZavarovanjInvalidnost", "vrednostZavarovanjBolezni"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "analizaStroskov",
      title: "Analiza stroškov",
      fields: ["id", "analizaStroskov"],
      amount: function(data) {
        return 1;
      }
    }
  ];
}

function premozenje() {
  return [
    {
      key: "upravljanjeMojegaPremozenja",
      title: "Upravljanje mojega premoženja",
      fields: ["id", "splosnoZnanje", "pregledNalozb", "nalozbePrilagojene", "analizaStroskovNalozbInVarcevalnihProduktov", "razlikeMedOsebjem"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "analizaStroskovInPregledProduktov",
      title: "Analiza stroškov in pregled produktov",
      fields: ["id", "naslov", "naslov222", "steviloProduktov", "tipProdukta", "tipProdukta_mesecniZnesek", "tipProdukta_trenutnaVrednost", "naslov2", "zavarovanjaNaProduktu_zivljenskoZavarovanje", "zavarovanjaNaProduktu_dodatnaZavarovanja",
      "zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje", "zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni", "zavarovanjaNaProduktu_strosekDodatnihZavarovanj", "naslov3", "steviloProduktov2",
      "tipProdukta2", "tipProdukta_mesecniZnesek2", "tipProdukta_trenutnaVrednost2", "naslov4", "zavarovanjaNaProduktu_zivljenskoZavarovanje2", "zavarovanjaNaProduktu_dodatnaZavarovanja2",
      "zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje2", "zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni2", "zavarovanjaNaProduktu_strosekDodatnihZavarovanj2", "naslov5", "naslov555", "denarnaSredstva", "vzajemniSkladi",
      "delnice", "enkratniNalozbeniProdukti", "naslov6", "zavarovanja1", "zavarovanja2", "zavarovanja3", "zavarovanja4", "zavarovanja5", "naslov7", "denarnaSredstva2", "vzajemniSkladi2", "delnice2",
      "enkratniNalozbeniProdukti2", "naslov8", "zavarovanja11", "zavarovanja22", "zavarovanja33", "zavarovanja44", "zavarovanja55"],
      amount: function(data) {
        return 1;
      }
    },
    {
      key: "financniStres",
      title: "Finančni stres",
      fields: ["id", "nivo", "razlog"],
      amount: function(data) {
        return 1;
      }
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
