import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classes from './Navbar.css';
class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogged : sessionStorage.getItem('isLogged') ? true : false ,
        }
    }

    logOut = () => {
        sessionStorage.removeItem('isLogged');
        this.setState({isLogged : false});
    }

    render() {

        return (
                <div>
                    <nav className={"navbar navbar-expand-lg navbar-light bg-light " + classes.NavbarFont} >
                        <Link className={"navbar-brand " + classes.NavbarFont} to="/">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link px-4" to="/users">Users</Link>
                                </li>
                                <li className="nav-item">
                                    {this.state.isLogged ?
                                    <Link onClick={this.logOut} className="nav-link px-4" to="/">Log Out</Link>
                                    :<Link className="nav-link px-4" to="/signIn">Sign In</Link>
                                }
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        );
    }
}

export default Navbar;