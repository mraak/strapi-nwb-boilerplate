import "./PageView.less";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'react-props-decorators';
import { routeActions } from 'react-router-redux';

import { waitFor, title } from "../decorators";

import actions from "./actions";

@title("page", ({ api: { pages: { data } }, params: { route } }) => data ? data.find(item => item.route.indexOf(route) > -1).title : null)
@waitFor(({ api: { pages } }) => [ pages.data ])
@connect(state => state, actions)
@propTypes({
  api: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
})
export default class PageView extends Component {
  componentWillMount() {
    const { api: { pages: { data } }, params: { route }, fetchPage } = this.props;

    fetchPage(data.find(item => item.route.indexOf(route) > -1).id);
  }

  render() {
    return (
      <Page/>
    );
  }
}

// @title("page", ({ api: { page: { data } } }) => data ? data.title : null)
@waitFor(({ api: { page } }) => [ page.data ])
@connect(state => state)
@propTypes({
  api: PropTypes.object.isRequired
})
class Page extends Component {
  componentWillMount() {
    this.shouldRedirect(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.shouldRedirect(nextProps);
  }

  shouldRedirect({ dispatch, api: { page: { data } } }) {
    if(!data)
      dispatch(routeActions.replace("/404"));
  }

  render() {
    const { api: { page: { data } } } = this.props;

    return (
      <div className="page">
        <div dangerouslySetInnerHTML={{ __html: data.content }}/>
      </div>
    );
  }
}
