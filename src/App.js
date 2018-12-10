import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/header/header.js';
import Body from '../src/components/body/body.js'
import Footer from '../src/components/footer/footer.js';



class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
