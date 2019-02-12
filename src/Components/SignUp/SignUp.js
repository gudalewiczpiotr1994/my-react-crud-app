import React, { Component } from 'react';
import classes from './SignUp.css';
import axios from 'axios';
class SignUp extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: ''
            }
        }
      }

      onSubmitHandler = (email,password) => {
        this.setState({email: value});
        this.setState({password: value});
        this.setState({[name]: value});
        console.log(auth);
      }

    render() { 
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formElementsArray.map(formElement => (
            <input className="form-control my-3"
                key={formElement.id}
                type={formElement.config.elementConfig.type}
                placeholder={formElement.config.elementConfig.placeholder}
                value={formElement.config.value}
                onChange={(event) => this.onSubmitHandler(event)}
                />
                ));
        return (
            <div className={classes.SignUp}>
            {this.onSubmitHandler()}

                <div className="container text-center">
                    <div className={classes.Form}>
                    <h2>Sing Up</h2>
                    {form}
                    <button type="submit" className={"btn " + classes.Button}>Sign Up</button>
                </div>
                </div>
            </div>
          );
    }
}
 
export default SignUp;