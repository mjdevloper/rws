import React, { Component } from 'react';
import '../public/css/style.css';
import Header from './Layout/Header.js';
import Footer from './Layout/Footer.js';
import HomePage from './Pages/Home.js';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Header />

        <HomePage />
      
        <p className="App-intro">
          
        </p>

        <Footer />
      </div>
    );
  }
}

export default App;
