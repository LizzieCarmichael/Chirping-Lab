import React, { Component } from 'react';
import Chirps from './components/Chirps';
import Forms from './components/Forms';
// import Lists from './components/Lists';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-success ">Chirp Chirp!</h1>
        </nav>
        <p className="App-intro">
        
        </p>
        <div>
          
          <br></br>
          <Forms />
          <br></br> <br></br>
    
          <br></br>  <br></br>
        </div>
      </div>
    );
  }
}

export default App;
