import React, { Component } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.scss';

import Router from './Router';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header/>
          <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
