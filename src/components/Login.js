import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <button onClick={this.props.login}>Login</button>
      </div>
    );
  }
}

export default Login;