import "./index.css";

import React, { Component } from 'react';
import { IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import R from "ramda";

@connect(state => state)
class HomeView extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    return (
      <div className="home">
      </div>
    );
  }
}

export const route = (
  <IndexRoute name="Blog" component={HomeView} />
);
