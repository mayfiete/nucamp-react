
import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

// this file is a module because there is an export 
export default App;