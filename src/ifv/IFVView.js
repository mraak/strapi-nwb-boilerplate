import "./IFVView.css";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'react-props-decorators';
import pureRender from "react-purerender";

import { authenticated } from "../decorators";

import actions from "./actions";
import IFVForm from "./IFVForm";

@authenticated()
@connect(state => state, actions)
@propTypes({
  saveSection: PropTypes.func.isRequired
})
@pureRender
export default class IFVView extends Component {
  render() {
    const { saveSection } = this.props;

    return (
      <div className="ifv">
        <IFVForm submit={saveSection} />
      </div>
    );
  }
}
