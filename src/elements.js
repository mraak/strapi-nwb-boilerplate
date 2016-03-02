import "./elements.less";

import React, { Component, PropTypes, createElement } from 'react';
import { Link, IndexLink } from 'react-router';
import { propTypes, contextTypes } from 'react-props-decorators';
import pureRender from "react-purerender";

@propTypes({
  name: PropTypes.string.isRequired,
  // path: PropTypes.string.isRequired
})
@contextTypes({
  router: PropTypes.object.isRequired
})
// @pureRender
export class HeaderLink extends Component {
  render() {
    const { name, path, query, index, listClassName, className, onClick } = this.props;
    const { router } = this.context;

    const handleClick = (e) => {
      if(!path)
        e.preventDefault();

      if(onClick)
        return onClick();
    };

    var element = index ? IndexLink : Link;

    return (
      <li className={listClassName}>{!!path && router.isActive(path, true)
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
  render() {
    const {title} = this.props;

    return (
      <div className="heading">
        <h1>{title}</h1>
      </div>
    );
  }
}
