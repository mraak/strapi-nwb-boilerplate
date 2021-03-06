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
import * as models from "./IFVFormModel";

import $ from "jquery";
import scrollToFixed from "../scrollToFixed";

import R from "ramda";

import { createSelector } from 'reselect';

const stateSelector = createSelector(
  (state) => state.api,
  (api) => ({ api })
);

@waitFor(({ api: { sections } }) => [ sections.data ])
@connect( stateSelector, actions)
@propTypes({
  saveSection: PropTypes.func.isRequired
})
@css(require("./IFVForm.less"), { allowMultiple: true })
// @pureRender
export default class IFVForm extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { api: { sections }, route, saveSection } = this.props;
    const formData = this.props.form;
    const forms = route.forms();
    const filteredForms = forms.filter(({ amount }) => !!amount);

    function handleSubmit(key) {
      return (data) => saveSection(key, data);
    }

    return (
      <row>
        <column cols="12" className="white">
          {forms.map(props => (
            <DynamicForm
              form={props.key}
              id={props.key}
              submit={handleSubmit(props.key)}
              model={models[props.key]}
              data={sections.data[props.key]}
              {...props}/>
          ))}
        </column>

        {
          // { filteredForms.length > -1 &&
            <column styleName="fixed-column">
              <AmountTable filteredForms={filteredForms} formData={formData}/>
            </column>
          // }
        }

      </row>
    );
  }
}

class AmountTable extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  componentDidMount() {
    $(".sticky").scrollToFixed({
      marginTop: $('.header').outerHeight(true)
    });
  }
  componentWillUnmount() {
    // $(".sticky").unstick();
  }

  render() {
    const { filteredForms, formData } = this.props;

    return (
      <fieldset className="fixed white sticky">
        <h4 className="sectionTitle">Izračun</h4>

        <table className="table-bordered">
          <thead>
            <tr>
              <th>Section</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map(({ key, title, fields, fieldsFunction, amount }) => {
              const keys = fieldsFunction ? fieldsFunction(_.mapValues(formData[key], "value")).filter(o => typeof o == "string") : fields;

              return (
                <tr>
                  <td>{title}</td>
                  <td>{amount(_.mapValues(_.pick(formData[key], keys), "value")) || 0}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="1">Total</td>
              <td>{filteredForms.reduce((memo, { key, fields, fieldsFunction, amount }) => {
                const keys = fieldsFunction ? fieldsFunction(_.mapValues(formData[key], "value")).filter(o => typeof o == "string") : fields;

                return memo + amount(_.mapValues(_.pick(formData[key], keys), "value")) || 0;
              }, 0)}</td>
            </tr>
          </tfoot>
        </table>
      </fieldset>
    );
  }
}
