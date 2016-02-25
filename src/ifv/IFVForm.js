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
import { osebniPodatki, dohodek, izdatki, lastniskiIzdatki, zivljenjskiIzdatki, pokojnina, izdatkiVPokoju, obveznostiMedUpokojitvijo, pokojninskaRezerva, otrokovoIzobrazevanje, otrok1 } from "./IFVFormModel";

@waitFor(({ api: { sections } }) => [ sections.data ])
@connect(state => state, actions)
@css(require("./IFVForm.less"), { allowMultiple: true })
@pureRender
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
        // fields: ["id", "ime", "starost", "delovnaDoba", "status", "steviloOtrok"]
        fieldsFunction: (data) => ["id", "ime", "starost", "delovnaDoba", "status", data.status == "POROCEN" && "steviloOtrok"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "dohodek",
        title: "Dohodek",
        model: dohodek,
        data: sections.data.dohodek,
        fields: ["id", "placa", "pogodbaSKlubom", "sponzorstva", "nagrade", "dohodkiOdOddajeNepremicnin", "drugiDohodki"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "izdatki",
        title: "Izdatki",
        model: izdatki,
        data: sections.data.izdatki,
        fields: ["id", "kontrola", "koristimLimit", "vsiDolgoviPlacaniPravocasno", "zadolzenost", "rezerva"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "lastniskiIzdatki",
        title: "Lastniški izdatki",
        model: lastniskiIzdatki,
        data: sections.data.lastniskiIzdatki,
        fields: ["id", "kreditZaNepremicnino", "kreditZaNepremicnino_dodatek1", "kreditZaNepremicnino_dodatek2", "kreditZaNepremicnino_dodatek3", "vzdrzevanjeNepremicnine", "vzdrzevanjeNepremicnine_dodatek",
        "najemnina", "najemnina_dodatek1", "najemnina_dodatek2", "kreditAvto", "kreditAvto_dodatek1", "kreditAvto_dodatek2", "kreditAvto_dodatek3", "vzdrzevanjeAvta", "vzdrzevanjeAvta_dodatek", "ostaliDolgovi"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "zivljenjskiIzdatki",
        title: "Življenjski izdatki",
        model: zivljenjskiIzdatki,
        data: sections.data.zivljenjskiIzdatki,
        fields: ["id", "zivljenjskiIzdatki", "zivljenjskiIzdatki_dodatek", "zavarovanja", "zavarovanja_dodatek", "ostaliIzdatki", "ostaliIzdatki_dodatek"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "pokojnina",
        title: "Pokojnina",
        model: pokojnina,
        data: sections.data.pokojnina,
        fields: ["id", "stLetDoUpokojitve", "pricakovanoStLetVPokoju", "dobraPot", "pomembno"],
        amount: function(data) {
          return 1;
        }
      },
      {
        key: "izdatkiVPokoju",
        title: "Izdatki v pokoju",
        model: izdatkiVPokoju,
        data: sections.data.izdatkiVPokoju,
        fields: ["id", "nepremicninskiIzdatki", "nepremicninskiIzdatki_dodatek", "zivljenjskiIzdatki", "zivljenjskiIzdatki_dodatek", "pomembno", "potovanjaInZabava",
        "potovanjaInZabava_dodatek", "ostaliIzdatki", "ostaliIzdatki_dodatek"],
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
        fields: ["id", "varcevanjeZaOtrokovoIzobrazevanje", "varcevanjeZaOtrokovoIzobrazevanje_dodatek", "kolikoMoramPrivarcevati", "pomembno"],
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
      }
    ];

    return (
      <div styleName="root">
        <row className="centered">
          <column cols="3">
            <fieldset>
              <legend>Kategorije</legend>
            </fieldset>
          </column>

          <column cols="4">
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
