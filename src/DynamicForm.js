import 'rc-slider/assets/index.css';

import React, { Component, PropTypes, createElement } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { propTypes } from 'react-props-decorators';
import css from 'react-css-modules';
import RadioGroup from 'react-radio';
import DatePicker from 'react-date-picker';
import moment from "moment";
import Slider from 'rc-slider';
import Select from 'react-select';
import NoUISlider from 'react-nouislider';
import R from "ramda";
import pureRender from "react-purerender";
import wNumb from "wnumb";

const validate = (values, {model, fields}) => {
  const errors = {};
  fields.filter(key => !!model[key]).forEach(key => {
    if((typeof values[key] == "undefined" || values[key] == "") && model[key].required)
      errors[key] = ["required"];
  });

  return errors;
};

function formatInputValue(currency, val) {
  if(!val)
    val = 0;

  if(!currency)
    return Math.round(val);

  var num = Math.round(val).toString();

  if(num.length < 4)
    return num + " €";
  else if(num.length == 4)
    return num.substring(0, 1) + "," + num.substring(1) + " €";
  else if(num.length == 5)
    return num.substring(0, 2) + "," + num.substring(2) + " €";
  else if(num.length == 6)
    return num.substring(0, 3) + "," + num.substring(3) + " €";
  else if(num.length == 7)
    return num.substring(0, 1) + "," + num.substring(1, 4) + "," + num.substring(4) + " €";
  else if(num.length == 8)
    return num.substring(0, 2) + "," + num.substring(2, 5) + "," + num.substring(5) + " €";
}

function onSliderChange(field) {
  return function(value) {
    return field.onChange(value[0]);
  }
}

function showErrors(array) {
  if(!array)
    return "";

  if(array instanceof Array)
    return "is " + array.join(" and ");

  return "is " + array;
}

function renderElement({ type, props }, field) {
  if(type == "range")
    return createElement(Slider, {
      step: 100,
      ...props,
      value: field.value,
      onChange: field.onChange
    });

  if(type == "radio-list")
    return createElement(RadioGroup, {
      name: field.name,
      ...props,
      ...field
    });

  // if(type == "select") {
  //   return createElement(Select, {
	// 		disabled: false,
	// 		clearable: true,
  //     ...props,
  //     ...field
  //   });
  // }

  if(type == "slider") {
    return (
      <row>
      <column cols="10">
        {createElement(NoUISlider, {
          format: {
            to: function(value) {
              return value;
            },
            from: function(value) {
              return value;
            }
          },
          ...props,
          start: [field.value || 0],
          onChange: onSliderChange(field),
          onSlide: onSliderChange(field)
        })}
      </column>

      <column cols="2">
        <input type='text' disabled value={formatInputValue(props.currency, field.value)} />
      </column>
      </row>
   )
  }


  if(type == "label_heading_normal")
    return createElement("label", {className: "bold"}, field.value);

  if(type == "label_heading_italic")
    return createElement("label", {className: "bold italic"}, field.value);

  if(type == "label_subheading_normal")
    return createElement("label", {className: "negative-base-margin"}, field.value);

  if(type == "label_subheading_italic")
    return createElement("label", {className: "italic negative-base-margin"}, field.value);

  if(type == "label_subheading_italic_margin")
    return createElement("label", {className: "italic"}, field.value);

  if(type == "cite")
    return createElement("label", {className: "italic small negative-base-margin",}, field.value);

  return createElement("input", {
    type: type || "text",
    ...props,
    ...field
  });
}

@reduxForm({
  validate
}, ({ form }, { id, data, model, fields, fieldsFunction }) => {
  const keys = fieldsFunction ? fieldsFunction(_.mapValues(form[id], "value")).filter(o => typeof o == "string") : fields;

  return {
    fields: keys,
    fieldKeys: keys,
    initialValues: data || _.mapValues(model, "value")
  };
})
@connect(state => state)
@propTypes({
  fields: PropTypes.object.isRequired,
  fieldsFunction: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool
})
@css(require("./DynamicForm.less"), { allowMultiple: true })
// @pureRender
export default class DynamicForm extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.dirty && nextProps.valid && !R.equals(nextProps.values, this.props.values)) {
  //     const { handleSubmit, submit } = nextProps;
  //
  //     console.log("form change", this.props.values, nextProps.values);
  //     // this.onFormFieldChange(nextProps.values);
  //
  //     // handleSubmit(nextProps.values);
  //   }
  // }

  render() {
    const { fieldKeys, title, model, fields, handleSubmit, resetForm, submit, submitting, error } = this.props;

    return (
      <form className="forms" onSubmit={handleSubmit(submit)}>
        {error && <div className="alert alert-error">{error}</div>}

        <fieldset>
          {title && <h4 className="sectionTitle">{title}</h4>}

          {fieldKeys.filter(key => !!model[key]).map(key => {
            let element = model[key];
            let field = fields[key];

            return (
              <section key={key}>
                <label>{element.label} {field.error && <span className="error">{showErrors(field.error)}</span>}</label>
                {renderElement(element, field)}
              </section>
            );
          })}

          <p>
            <button styleName="reset" disabled={submitting} onClick={resetForm}>
              {submitting ? <i/> : <i/>} Reset
            </button>

            <button type="primary" styleName="submit" disabled={submitting}>
              {submitting ? <i/> : <i/>} Save
            </button>
          </p>
        </fieldset>
      </form>
    );
  }
}
