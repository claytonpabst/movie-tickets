import React, { Component } from 'react';
import Login from './Login'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Login login={this.props.login}/>
      </div>
    );
  }
}

export default Header;