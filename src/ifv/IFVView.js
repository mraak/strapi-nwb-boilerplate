import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import pureRender from "react-purerender";
import css from 'react-css-modules';
import Sticky from 'react-sticky';

import { authenticated } from "../decorators";

import IFVForm from "./IFVForm";

@authenticated()
@connect(state => state)
@css(require("./IFVView.less"), { allowMultiple: true })
// @pureRender
export default class IFVView extends Component {
  render() {
    const { children, routes: [ index, current ] } = this.props;

    return (
      <div styleName="root">
        <row className="centered">
          <column cols="3" styleName="fixed-column">
            {/* TODO: Use ul */}
            <fieldset className="fixed white">
            {_.map(current.childRoutes, ({ name, path }) => <section><Link activeClassName="selected" to={current.path + "/" + path}>{name}</Link></section>)}
            </fieldset>
          </column>

          <column cols="12">
            {children}
          </column>
        </row>
      </div>
    );
  }
}
