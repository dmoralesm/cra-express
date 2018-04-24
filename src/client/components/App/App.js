import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { callApi } from './helpers';

class App extends Component {
  state = {
    response: '',
  };

  componentDidMount() {
    callApi()
    .then(result => this.setState({ response: result.express }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { this.state.response }
        </p>
      </div>
    );
  }
}

export default App;
