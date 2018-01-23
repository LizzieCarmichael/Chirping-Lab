import React, { Component } from 'react';
import Chirps from './components/Chirps';
import Forms from './components/Forms';
// import Lists from './components/Lists';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <div className="App ">
        <header className="App-header bg-primary">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title text-success">Chirp Chirp!</h1>
        </header>
        <p className="App-intro">
        </p>
        <div>
          
          <br></br>
          <Forms />
          <br></br> <br></br>
          {/* <Chirps /> */}
          <br></br>  <br></br>
        </div>
      </div>
    );
  }
}

export default App;
