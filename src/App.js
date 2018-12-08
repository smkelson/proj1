import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/header/header.js';
import Body from '../src/components/body/body.js'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
