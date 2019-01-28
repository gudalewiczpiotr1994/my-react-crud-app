import React, { Component } from 'react';
import './App.css';
import classes from './Components/Footer/Footer.css';
import Navbar from './Components/Navbar/Navbar'
class App extends Component {
  render() {
    const copy = "\u00A9"

    return (
      <div className="App">
            <Navbar/>
            <footer className={classes.Footer}>
                <p className={classes.Text}>
                    {copy} Piotr Gudalewicz
                </p>
            </footer>
      </div>
    );
  }
}

export default App;
