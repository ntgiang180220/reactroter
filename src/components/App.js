import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <DieuHuongURL></DieuHuongURL>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
