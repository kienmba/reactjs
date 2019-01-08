import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu.js';
import Header from './Component/header/Header.js';
import Services from './Component/services/Services.js';
import Portfolio from './Component/portfolio/Portfolio.js';
import About from './Component/about/About.js';
import Team from './Component/team/Team.js';
import Client from './Component/client/Client.js';
import Contact from './Component/contact/Contact.js';
import Footer from './Component/footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="Component">
        <TopMenu/>
        <Header/>
        <Services/>
        <Portfolio/>
        <About/>
        <Team/>
        <Client/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
