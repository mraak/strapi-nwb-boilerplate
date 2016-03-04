import "./index.less";

import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import classnames from "classnames";
import { propTypes, contextTypes } from 'react-props-decorators';

import { HeaderLink } from "../../elements";
import AuthLink from "../../auth/headerLink";
import ProfileLink from "../../profile/headerLink";
import tcon from "../../tcon";

import R from "ramda";

const links = [
  require("../../posts").headerLink
];

@connect(state => state, require("./actions"))
@propTypes({
  api: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  classes: PropTypes.object
})
@contextTypes({
  router: PropTypes.object.isRequired
})
export default class Header extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  componentDidMount() {
    tcon.add(".tcon");
  }

  componentWillUnmount() {
    tcon.remove(".tcon");
  }

  render() {
    var { api: { user: { loggedIn }, pages: { data } }, header: { opened }, breadcrumbs: [ brand, ...routes ], classes, children, toggleOpen, dispatch } = this.props;
    const { router } = this.context;
    const breadcrumbs = [
      <HeaderLink listClassName="hide-for-small" className="brand" index {...brand}/>,
      ...routes.map((route, i) => <HeaderLink listClassName={i < routes.length - 1 ? "hide-for-small" : ""} {...route}/>)
    ];

    classes = Object.assign(classes || {}, {
      header: true
    });

    var menuClasses = {
      right: true,
      "hide-for-small": true,
      open: opened
    };

    return (
      <div className={classnames(classes)}>
        <ul className="breadcrumb breadcrumb-path">
          {breadcrumbs}
        </ul>

        <a className="tcon tcon-menu--xcross right show-for-small" aria-label="toggle menu" onClick={toggleOpen}>
          <span className="tcon-menu__lines" aria-hidden="true"></span>
          <span className="tcon-visuallyhidden">toggle menu</span>
        </a>

        <ul className={classnames(menuClasses)}>
          <li>Hello <ProfileLink/></li>
          {data && data.map(({ title, route }) => <HeaderLink name={title} path={route}/>)}
          {links}
          <AuthLink/>
        </ul>
      </div>
    );
  }
}
