import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import pureRender from "react-purerender";
import css from 'react-css-modules';

import { authenticated } from "../decorators";

import IFVForm from "./IFVForm";

import R from "ramda";

@authenticated()
@connect(state => state)
@css(require("./IFVView.less"), { allowMultiple: true })
// @pureRender
export default class IFVView extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { children, routes: [ index, current ] } = this.props;

    return (
      <div styleName="root">
        <row className="centered">
          <column cols="3" styleName="fixed-column">
            <ul className="fixed white sticky">
            {_.map(current.childRoutes, ({ name, path }) => <li><Link activeClassName="selected" to={current.path + "/" + path}>{name}</Link></li>)}
            </ul>
          </column>

          <column cols="12">
            {children}
          </column>
        </row>
      </div>
    );
  }
}
