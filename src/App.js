import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import ProductList from './Components/Pages/ProductList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav className="navbar navbar-dark bg-dark" style={ navStyle }>
            <Navbar/>
          </nav>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/items" component={ ProductList }/>
        </Router>
      </div>
    );
  }
}

const navStyle = {
  color: '#fff'
}

export default App;
