import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import MovieOverviews from './components/MovieOverviews.js'



class App extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false
    }
  }

  login = () => {
    this.setState({authenticated:true})
  }

  render() {
    console.log(this)
    return (
      <div className="App">
        <Header login={this.login}/>
        {this.state.authenticated && 
          <MovieOverviews />
        }
      </div>
    );
  }
}

export default App;
