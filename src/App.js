import React, { Component } from 'react';
import './App.css';

import array from './components/Output'



class App extends Component {
  render() {
    return (
      <div className="App">
        {array.map(x => <li>{x}</li>)}
      </div>
    );
  }
}

export default App;
