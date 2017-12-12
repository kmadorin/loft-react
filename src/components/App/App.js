import React, { Component } from 'react';

import './App.css';
import '../Order/Order.css';

import Budget from '../Budget/';
import Farm from '../Farm/';
import Market from '../Market/';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget />
      </div>
    )
  }
}

export default App;
