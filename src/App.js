import './App.css';
import React, { Component } from 'react';
import Header from './template/Header';
import Footer from './template/Footer';
import Home from './screens/home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
