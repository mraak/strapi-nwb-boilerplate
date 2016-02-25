import React, { Component, PropTypes, createElement } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { propTypes } from 'react-props-decorators';
import css from 'react-css-modules';
import _ from "lodash";

import { waitFor } from "../decorators";
import DynamicForm from "../DynamicForm";

import actions from "./actions";
import { osebniPodatki, dohodek, izdatki, lastniskiIzdatki, zivljenjskiIzdatki, pokojnina, izdatkiVPokoju, obveznostiMedUpokojitvijo, pokojninskaRezerva, otrokovoIzobrazevanje, otrok1,
        zdravjeVPokoju, zascitaZivljenja, zascitaDelovneSposobnosti, analizaStroskov, upravljanjeMojegaPremozenja, analizaStroskovInPregledProduktov, financniStres} from "./IFVFormModel";

@waitFor(({ api: { sections } }) => [ sections.data ])
@connect(state => state, actions)
@css(require("./IFVForm.less"), { allowMultiple: true })
export default class IFVForm extends Component {
  render() {
    const { api: { sections }, submit } = this.props;
    const formData = this.props.form;

    function handleSubmit(key) {
      return (data) => submit(key, data);
    }

    const forms = [
      {
        key: "osebniPodatki",
        title: "Osebni podatki",
        model: osebniPodatki,
        data: sections.data.osebniPodatki,
        fields: ["id", "ime", "starost", "delovnaDoba", "status", "steviloOtrok"]
      },
      {
        key: "dohodek",
        title: "Dohodek",
        model: dohodek,
        data: sections.data.dohodek,
        fields: ["id", "placa", "pogodbaSKlubom", "sponzorstva", "nagrade", "dohodkiOdOddajeNepremicnin", "drugiDohodki"]
      },
      {
        key: "izdatki",
        title: "Izdatki",
        model: izdatki,
        data: sections.data.izdatki,
        fields: ["id", "kontrola", "koristimLimit", "vsiDolgoviPlacaniPravocasno", "zadolzenost", "rezerva"]
      },
      {
        key: "lastniskiIzdatki",
        title: "Lastniški izdatki",
        model: lastniskiIzdatki,
        data: sections.data.lastniskiIzdatki,
        fields: ["id", "kreditZaNepremicnino", "kreditZaNepremicnino_dodatek1", "kreditZaNepremicnino_dodatek2", "kreditZaNepremicnino_dodatek3", "vzdrzevanjeNepremicnine", "vzdrzevanjeNepremicnine_dodatek",
        "najemnina", "najemnina_dodatek1", "najemnina_dodatek2", "kreditAvto", "kreditAvto_dodatek1", "kreditAvto_dodatek2", "kreditAvto_dodatek3", "vzdrzevanjeAvta", "vzdrzevanjeAvta_dodatek", "ostaliDolgovi"]
      },
      {
        key: "zivljenjskiIzdatki",
        title: "Življenjski izdatki",
        model: zivljenjskiIzdatki,
        data: sections.data.zivljenjskiIzdatki,
        fields: ["id", "zivljenjskiIzdatki", "zivljenjskiIzdatki_dodatek", "zavarovanja", "zavarovanja_dodatek", "ostaliIzdatki", "ostaliIzdatki_dodatek"]
      },
      {
        key: "pokojnina",
        title: "Pokojnina",
        model: pokojnina,
        data: sections.data.pokojnina,
        fields: ["id", "stLetDoUpokojitve", "pricakovanoStLetVPokoju", "dobraPot", "pomembno"]
      },
      {
        key: "izdatkiVPokoju",
        title: "Izdatki v pokoju",
        model: izdatkiVPokoju,
        data: sections.data.izdatkiVPokoju,
        fields: ["id", "nepremicninskiIzdatki", "nepremicninskiIzdatki_dodatek", "zivljenjskiIzdatki", "zivljenjskiIzdatki_dodatek", "pomembno", "potovanjaInZabava",
        "potovanjaInZabava_dodatek", "ostaliIzdatki", "ostaliIzdatki_dodatek"]
      },
      {
        key: "obveznostiMedUpokojitvijo",
        title: "Pričakovane obveznosti med upokojitvijo",
        model: obveznostiMedUpokojitvijo,
        data: sections.data.obveznostiMedUpokojitvijo,
        fields: ["id", "pricakovanaVrednostHipoteke", "pricakovaniKrediti", "dediscina"]
      },
      {
        key: "pokojninskaRezerva",
        title: "Privarčevana sredstva za pokojninsko rezervo",
        model: pokojninskaRezerva,
        data: sections.data.pokojninskaRezerva,
        fields: ["id", "naslov", "dodatnoZavarovanje_delodajalec", "dodatnoZavarovanje_posameznik", "dodatnoZavarovanje_trenutno", "naslov2", "trenutnoMesecnoZavarovanje_mesec",
        "trenutnoMesecnoZavarovanje_trenutno", "naslov3", "enkratnoInvestiranje"]
      },
      {
        key: "otrokovoIzobrazevanje",
        title: "Sklad za otrokovo izobraževanje",
        model: otrokovoIzobrazevanje,
        data: sections.data.otrokovoIzobrazevanje,
        fields: ["id", "varcevanjeZaOtrokovoIzobrazevanje", "varcevanjeZaOtrokovoIzobrazevanje_dodatek", "kolikoMoramPrivarcevati", "pomembno"]
      },
      {
        key: "otrok1",
        title: "Otrok 1",
        model: otrok1,
        data: sections.data.otrok1,
        fields: ["id", "ime", "starost", "znesekZaStudij", "odstotekStroskov", "naslov", "mesecnoVarcevanje_mesecno", "mesecnoVarcevanje_trenutno", "naslov2", "enkratnoInvestiranje"]
      },
      {
        key: "zdravjeVPokoju",
        title: "Zdravje in zdravljenje v pokoju",
        model: zdravjeVPokoju,
        data: sections.data.zdravjeVPokoju,
        fields: ["id", "naslov", "varcujeteZaZdravje", "naslov2", "varcevanjeZaOtroka_mesecno", "varcevanjeZaOtroka_trenutno", "naslov3", "enkratnoInvestiranje"]
      },
      {
        key: "zascitaZivljenja",
        title: "Zaščita življenja",
        model: zascitaZivljenja,
        data: sections.data.zascitaZivljenja,
        fields: ["id", "partnerOdvisen", "partnerOdvisen_dodatek1", "partnerOdvisen_dodatek2", "partnerOdvisen_dodatek3", "znesekDohodkaZaPartnerja", "dodatenDohodek", "steviloOtrok",
        "steviloOtrok_dodatek", "procentStroskovZaPlacati", "mesecniZnesekDohodka", "glavnicaDolgov", "zavarovanjaZivljenje", "zavarovanjaKrediti"]
      },
      {
        key: "zascitaDelovneSposobnosti",
        title: "Zaščita delovne sposobnosti",
        model: zascitaDelovneSposobnosti,
        data: sections.data.zascitaDelovneSposobnosti,
        fields: ["id", "naslov", "delovnaDoba", "odstotekZaInvalidskoPokojnino", "invalidskaPokojnina", "lastniskiIzdatki", "zivljenjskiIzdatki", "izdatkiSkupaj", "vrednostZavarovanjInvalidnost", "vrednostZavarovanjBolezni"]
      },
      {
        key: "analizaStroskov",
        title: "Analiza stroškov",
        model: analizaStroskov,
        data: sections.data.analizaStroskov,
        fields: ["id", "analizaStroskov"]
      },
      {
        key: "upravljanjeMojegaPremozenja",
        title: "Upravljanje mojega premoženja",
        model: upravljanjeMojegaPremozenja,
        data: sections.data.upravljanjeMojegaPremozenja,
        fields: ["id", "splosnoZnanje", "pregledNalozb", "nalozbePrilagojene", "analizaStroskovNalozbInVarcevalnihProduktov", "razlikeMedOsebjem"]
      },
      {
        key: "analizaStroskovInPregledProduktov",
        title: "Analiza stroškov in pregled produktov",
        model: analizaStroskovInPregledProduktov,
        data: sections.data.analizaStroskovInPregledProduktov,
        fields: ["id", "naslov", "steviloProduktov", "tipProdukta", "tipProdukta_mesecniZnesek", "tipProdukta_trenutnaVrednost", "naslov2", "zavarovanjaNaProduktu_zivljenskoZavarovanje", "zavarovanjaNaProduktu_dodatnaZavarovanja",
        "zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje", "zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni", "zavarovanjaNaProduktu_strosekDodatnihZavarovanj", "naslov3", "steviloProduktov2",
        "tipProdukta2", "tipProdukta_mesecniZnesek2", "tipProdukta_trenutnaVrednost2", "naslov4", "zavarovanjaNaProduktu_zivljenskoZavarovanje2", "zavarovanjaNaProduktu_dodatnaZavarovanja2",
        "zavarovanjaNaProduktu_dodatnoNezgodnoZavarovanje2", "zavarovanjaNaProduktu_dodatnoZavarovanjeHujsihBolezni2", "zavarovanjaNaProduktu_strosekDodatnihZavarovanj2", "naslov5", "denarnaSredstva", "vzajemniSkladi",
        "delnice", "enkratniNalozbeniProdukti", "naslov6", "zavarovanja1", "zavarovanja2", "zavarovanja3", "zavarovanja4", "zavarovanja5", "naslov7", "denarnaSredstva2", "vzajemniSkladi2", "delnice2",
        "enkratniNalozbeniProdukti2", "naslov8", "zavarovanja11", "zavarovanja22", "zavarovanja33", "zavarovanja44", "zavarovanja55"]
      },
      {
        key: "financniStres",
        title: "Finančni stres",
        model: financniStres,
        data: sections.data.financniStres,
        fields: ["id", "nivo", "razlog"]
      }
    ];

    return (
      <div styleName="root">
        <row className="centered">
          <column cols="7">
            {forms.map(props => (
              <DynamicForm
                form={props.key}
                submit={handleSubmit(props.key)}
                {...props}/>
            ))}
          </column>
        </row>
      </div>
    );
  }
}
