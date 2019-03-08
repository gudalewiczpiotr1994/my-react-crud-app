import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
class App extends Component {
  render() {
    const copy = "\u00A9"

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
