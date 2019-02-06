import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import Users from '../Users/Users';
import  classes from './Navbar.css';
import SignIn from '../SignIn/SignIn';
class Navbar extends Component {

    render() { 
        return ( 
        <Router>
         <div>
            <nav className={"navbar navbar-expand-lg navbar-light bg-light " + classes.NavbarFont} >
                <Link className={"navbar-brand " + classes.NavbarFont} to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signIn">Sign In</Link>
                    </li>
                </ul>
            </div>
            </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signIn" component={SignIn} />
        </div>
     
        </Router>
       
        );
    }
}
 
export default Navbar;