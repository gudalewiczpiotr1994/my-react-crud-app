import React, { Component } from 'react';
import './App.css';
import classes from './Components/Footer/Footer.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from './Components/Users/Users';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <div>
              <Navbar/>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/signIn" component={SignIn} />
              <Route exact path="/signUp" component={SignUp} />
          </div>
        </Router>
        <Footer/>

      </div>
    );
  }
}

export default App;
