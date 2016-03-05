import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from "./actions";

@connect(state => state, actions)
export default class AdminView extends Component {
  componentWillMount() {

  }

  render() {
    console.log(this.props)
    return (
      <HelloMessage name="John" />
    );
  }
}

export default class HelloMessage extends Component{
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default class SideBar extends Component{
  render() {
    
    return(
      <div>
        Sidebar
        <ul>

        </ul>
      </div>
    );
  }
}


export default class MainScreen extends Component{
  render(){
    return(
      <div>
        Main Screen
      </div>
    );
  }

}
