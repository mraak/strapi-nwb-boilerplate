import "./elements.less";

import React, { Component, PropTypes, createElement } from 'react';
import { Link, IndexLink } from 'react-router';
import { propTypes, contextTypes } from 'react-props-decorators';
import pureRender from "react-purerender";
import R from "ramda";

@propTypes({
  name: PropTypes.string.isRequired,
  // path: PropTypes.string.isRequired
})
@contextTypes({
  router: PropTypes.object.isRequired
})
// @pureRender
export class HeaderLink extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const { name, path, query, index, root, listClassName, className, onClick } = this.props;
    const { router } = this.context;

    const handleClick = (e) => {
      if(!path)
        e.preventDefault();

      if(onClick)
        return onClick();
    };

    var element = index ? IndexLink : Link;

    return (
      <li className={listClassName}>{!!path && router.isActive(path, typeof root == "undefined" ? true : root)
        ? name
        : createElement(element, {
            className,
            to: { pathname: path || "/", query: query || {} },
            onClick: handleClick
          }, name)}</li>
    );
  }
};

@propTypes({
  title: PropTypes.string.isRequired
})
// @pureRender
export class Heading extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {
    const {title} = this.props;

    return (
      <div className="heading">
        <h1>{title}</h1>
      </div>
    );
  }
}
