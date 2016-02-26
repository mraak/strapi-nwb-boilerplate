import React, { Component, PropTypes, createElement } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { propTypes } from 'react-props-decorators';
import css from 'react-css-modules';
import _ from "lodash";
import pureRender from "react-purerender";

import { waitFor } from "../decorators";
import DynamicForm from "../DynamicForm";

import actions from "./actions";
import { osebniPodatki, dohodek, izdatki, lastniskiIzdatki, zivljenjskiIzdatki, pokojnina, izdatkiVPokoju, obveznostiMedUpokojitvijo, pokojninskaRezerva, otrokovoIzobrazevanje, otrok1,
        zdravjeVPokoju, zascitaZivljenja, zascitaDelovneSposobnosti, analizaStroskov, upravljanjeMojegaPremozenja, analizaStroskovInPregledProduktov, financniStres} from "./IFVFormModel";

@waitFor(({ api: { sections } }) => [ sections.data ])
@connect(state => state, actions)
@css(require("./IFVForm.less"), { allowMultiple: true })
// @pureRender
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
        fieldsFunction: (data) => ["id", "ime", "starost", "delovnaDoba", "status", data.status == "POROCEN" && "steviloOtrok"],
        amount: function(data) {
          return "/";
        }
      },
      {
        key: "dohodek",
        title: "Dohodek",
        model: dohodek,
        data: sections.data.dohodek,
        fields: ["id", "placa", "pogodbaSKlubom", "sponzorstva", "nagrade", "dohodkiOdOddajeNepremicnin", "drugiDohodki"],
        amount: function(data) {
          return data.placa * 12 - data.pogodbaSKlubom + data.sponzorstva + data.nagrade + data.dohodkiOdOddajeNepremicnin * 12 + data.drugiDohodki;
        }
      },
      {
        key: "izdatki",
        title: "Izdatki",
        model: izdatki,
        data: sections.data.izdatki,
        fields: ["id", "kontrola", "koristimLimit", "vsiDolgoviPlacaniPravocasno", "zadolzenost", "rezerva"],
        amount: function(data) {
          return "/";
        }
      },
      {
        key: "lastniskiIzdatki",
        title: "Lastniški izdatki",
        model: lastniskiIzdatki,
        data: sections.data.lastniskiIzdatki,
        fieldsFunction: (data) => ["id", "kreditZaNepremicnino", data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek1", data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek2",
        data.kreditZaNepremicnino == "DA" && "kreditZaNepremicnino_dodatek3", "vzdrzevanjeNepremicnine", "vzdrzevanjeNepremicnine_dodatek", "najemnina",
        data.najemnina == "DA" && "najemnina_dodatek1", data.najemnina == "DA" && "najemnina_dodatek2", "kreditAvto", data.kreditAvto == "DA" && "kreditAvto_dodatek1",
        data.kreditAvto == "DA" && "kreditAvto_dodatek2", data.kreditAvto == "DA" && "kreditAvto_dodatek3", "vzdrzevanjeAvta", "vzdrzevanjeAvta_dodatek", "ostaliDolgovi"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "zivljenjskiIzdatki",
        title: "Življenjski izdatki",
        model: zivljenjskiIzdatki,
        data: sections.data.zivljenjskiIzdatki,
        fieldsFunction: (data) => ["id", "zivljenjskiIzdatki", "zivljenjskiIzdatki_dodatek", "zavarovanja", "zavarovanja_dodatek", "ostaliIzdatki", "ostaliIzdatki_dodatek"],
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
      },
      {
        key: "pokojnina",
        title: "Pokojnina",
        model: pokojnina,
        data: sections.data.pokojnina,
        fields: ["id", "stLetDoUpokojitve", "pricakovanoStLetVPokoju", "dobraPot", "pomembno", "pomembno2", "pomembno3"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "izdatkiVPokoju",
        title: "Izdatki v pokoju (v današnjih evrih)",
        model: izdatkiVPokoju,
        data: sections.data.izdatkiVPokoju,
        fieldsFunction: (data) => ["id", "nepremicninskiIzdatki", "nepremicninskiIzdatki_dodatek", "zivljenjskiIzdatki", "zivljenjskiIzdatki_dodatek",
        "pomembno", "pomembno2", "pomembno3", "potovanjaInZabava", "potovanjaInZabava_dodatek", "ostaliIzdatki", "ostaliIzdatki_dodatek"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "obveznostiMedUpokojitvijo",
        title: "Pričakovane obveznosti med upokojitvijo",
        model: obveznostiMedUpokojitvijo,
        data: sections.data.obveznostiMedUpokojitvijo,
        fields: ["id", "pricakovanaVrednostHipoteke", "pricakovaniKrediti", "dediscina"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "pokojninskaRezerva",
        title: "Privarčevana sredstva za pokojninsko rezervo",
        model: pokojninskaRezerva,
        data: sections.data.pokojninskaRezerva,
        fields: ["id", "naslov", "dodatnoZavarovanje_delodajalec", "dodatnoZavarovanje_posameznik", "dodatnoZavarovanje_trenutno", "naslov2", "trenutnoMesecnoZavarovanje_mesec",
        "trenutnoMesecnoZavarovanje_trenutno", "naslov3", "enkratnoInvestiranje"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "otrokovoIzobrazevanje",
        title: "Sklad za otrokovo izobraževanje",
        model: otrokovoIzobrazevanje,
        data: sections.data.otrokovoIzobrazevanje,
        fieldsFunction: (data) => ["id", "varcevanjeZaOtrokovoIzobrazevanje", data.varcevanjeZaOtrokovoIzobrazevanje == "DA" && "varcevanjeZaOtrokovoIzobrazevanje_dodatek", "kolikoMoramPrivarcevati",
        "pomembno", "pomembno2", "pomembno3"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "otrok1",
        title: "Otrok 1",
        model: otrok1,
        data: sections.data.otrok1,
        fields: ["id", "ime", "starost", "znesekZaStudij", "odstotekStroskov", "naslov", "mesecnoVarcevanje_mesecno", "mesecnoVarcevanje_trenutno", "naslov2", "enkratnoInvestiranje"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "zdravjeVPokoju",
        title: "Zdravje in zdravljenje v pokoju",
        model: zdravjeVPokoju,
        data: sections.data.zdravjeVPokoju,
        fieldsFunction: (data) => ["id", "naslov", "varcujeteZaZdravje", data.varcujeteZaZdravje == "DA" && "naslov2", data.varcujeteZaZdravje == "DA" &&"varcevanjeZaOtroka_mesecno",
        data.varcujeteZaZdravje == "DA" && "varcevanjeZaOtroka_trenutno", data.varcujeteZaZdravje == "DA" && "naslov3", data.varcujeteZaZdravje == "DA" && "enkratnoInvestiranje"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "zascitaZivljenja",
        title: "Zaščita življenja",
        model: zascitaZivljenja,
        data: sections.data.zascitaZivljenja,
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
        model: zascitaDelovneSposobnosti,
        data: sections.data.zascitaDelovneSposobnosti,
        fieldsFunction: (data) => ["id", "naslov", "naslov2", "delovnaDoba", "odstotekZaInvalidskoPokojnino", "invalidskaPokojnina", "lastniskiIzdatki", "zivljenjskiIzdatki", "izdatkiSkupaj", "vrednostZavarovanjInvalidnost", "vrednostZavarovanjBolezni"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "analizaStroskov",
        title: "Analiza stroškov",
        model: analizaStroskov,
        data: sections.data.analizaStroskov,
        fields: ["id", "analizaStroskov"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "upravljanjeMojegaPremozenja",
        title: "Upravljanje mojega premoženja",
        model: upravljanjeMojegaPremozenja,
        data: sections.data.upravljanjeMojegaPremozenja,
        fields: ["id", "splosnoZnanje", "pregledNalozb", "nalozbePrilagojene", "analizaStroskovNalozbInVarcevalnihProduktov", "razlikeMedOsebjem"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "analizaStroskovInPregledProduktov",
        title: "Analiza stroškov in pregled produktov",
        model: analizaStroskovInPregledProduktov,
        data: sections.data.analizaStroskovInPregledProduktov,
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
        model: financniStres,
        data: sections.data.financniStres,
        fields: ["id", "nivo", "razlog"],
        amount: function(data) {
          return 1;
        }
      }
    ];

    return (
      <div styleName="root">
        <row className="centered">
          <column cols="3">
            <fieldset className="fixed">
              <legend>Kategorije</legend>
              <section>
                <a href="#">OSEBNI PODATKI</a>
            </section>
            <section>
                <a href="#">moji DOHODKI IN IZDATKI</a>
            </section>
            <section>
                <a href="#">moja PRIHODNOST</a>
            </section>
            <section>
                <a href="#">moja TVEGANJA</a>
            </section>
            <section>
                <a href="#">moje PREMOŽENJE</a>
            </section>
            </fieldset>
          </column>

          <column cols="5">
            {forms.map(props => (
              <DynamicForm
                form={props.key}
                id={props.key}
                submit={handleSubmit(props.key)}
                {...props}/>
            ))}
          </column>

          <column cols="5">
            <fieldset>
              <legend>Izračun</legend>

              <table className="table-bordered">
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {forms.map(({ key, title, fields, amount }) => (
                    <tr>
                      <td>{title}</td>
                      <td>{amount(_.mapValues(_.pick(formData[key], fields), "value"))}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="1">Total</td>
                    <td>{forms.reduce((memo, { key, fields, amount }) => {
                      return memo + amount(_.mapValues(_.pick(formData[key], fields), "value"));
                    }, 0)}</td>
                  </tr>
                </tfoot>
              </table>
            </fieldset>
          </column>
        </row>
      </div>
    );
  }
}
