import React, { Component } from 'react';
import classes from './SignIn.css';
class SignIn extends Component {
    state = {  }
    render() { 
        return (
            <div className={classes.SignIn}>
                <div className="container text-center">
                    <h1>Log In</h1>
                    <div className={classes.Form}>
                    <div className="form-group offset-md-3 col-md-6">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group offset-md-3 col-md-6">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className={"btn " + classes.Button}>Sign In</button>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default SignIn;