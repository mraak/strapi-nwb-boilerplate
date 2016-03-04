import "./SignupView.css";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'react-props-decorators';

import { authenticated } from "../decorators";

import actions from "./actions";
import SignupForm from "./SignupForm";

import R from "ramda";

@authenticated(false)
@connect(state => state, actions)
@propTypes({
  signup: PropTypes.func.isRequired
})
export default class SignupView extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { signup } = this.props;

    return (
      <div className="signup">
        <SignupForm submit={signup} submitting={false}/>
      </div>
    );
  }
}
