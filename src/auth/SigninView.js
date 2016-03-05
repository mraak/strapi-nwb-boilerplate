import "./SigninView.css";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'react-props-decorators';

import { authenticated } from "../decorators";

import actions from "./actions";
import SigninForm from "./SigninForm";

import R from "ramda";

@authenticated(false)
@connect(state => state, actions)
@propTypes({
  signin: PropTypes.func.isRequired
})
export default class SigninView extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { signin } = this.props;

    return (
      <div className="signin">
        <SigninForm submit={signin} submitting={false}/>
      </div>
    );
  }
}
