import "./PostView.less";

import React, { Component } from 'react';
import { Route, Link } from 'react-router';
import { connect } from 'react-redux';

import { HeaderLink } from "../elements";
import { waitFor, title } from "../decorators";

import actions from "./actions";

import R from "ramda";

@connect(state => state, actions)
export default class PostView extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  componentWillMount() {
    const { fetchPost, params: { id } } = this.props;

    fetchPost(id);
  }

  render() {
    return (
      <div className="post">
        <Post/>
      </div>
    );
  }
}

@title("post", ({ api: { post: { data } } }) => data ? data.title : null)
@waitFor(({ api: { post } }) => [ post.data ])
@connect(state => state, actions)
class Post extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { api: { post: { data } } } = this.props;

    return (
      <div>
        <p>By: {data.createdBy.username}</p>
        <div dangerouslySetInnerHTML={{ __html: data.content }}/>
      </div>
    );
  }
}
