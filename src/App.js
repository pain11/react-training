import React, { Component } from 'react';
// import './App.css';
import './bootstrap.css';
import LoginContainer from './container/LoginContainer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
