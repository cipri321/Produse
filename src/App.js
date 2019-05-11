import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark" style={ navStyle }>
          <Navbar className="navbar navbar-dark bg-dark"/>
        </nav>
      </div>
    );
  }
}

const navStyle = {
  color: '#fff'
}

export default App;
