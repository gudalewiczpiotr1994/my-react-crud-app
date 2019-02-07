import React, { Component } from 'react';
import classes from './SignUp.css';
class SignUp extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 6
                },
                valid: false,
                touched: false
            }
        }
      }
    render() { 
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        const form = formElementsArray.map(formElement => (
            <input
                key={formElement.id}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.valid}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event,formElement)}/>
                ));
        return (
            <div className={classes.SignUp}>
                <div className="container">
                    <div className={classes.Form}>
                    {form}
                    <button className={"btn btn-block btn-success "}>Sign Up</button>
                </div>
                </div>
            </div>
          );
    }
}
 
export default SignUp;