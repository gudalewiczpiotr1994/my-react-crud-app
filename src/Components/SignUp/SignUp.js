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
                value: '',
                validation: {
                    required: true,
                    isEmail: true

                },
                valid: false
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
                    minLength: 6,
                    maxLength: 14
                    
                },
                valid: false
            }
        }
      }


      checkValidity(value, rules) {
        
        let isValid = true;
        
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid
        }

        if(rules.isEmail){
            const type =   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            isValid = type.test(value) && isValid;
        }

        return isValid;
      }

      inputChangedHandler = (event , controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value,this.state.controls[controlName].validation)
            }
        };
        this.setState({controls: updatedControls});
      }

      onSubmitHandler = () => {
          let updatedState = {
              ...this.state.controls
          }
          const data = {
                email: updatedState.email.value,
                password: updatedState.password.value,
                returnSecureToken: true 
          }
          
          if(this.state.controls.password.valid === true && this.state.controls.email.valid === true ){
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCAUePJP_C-MavetbBP2JTafM7dTyyjOqs', data)
            .then(res => {
                res = data;
            })
          }

      }

    render() { 
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <div className="form-group offset-md-3 col-md-6" key={formElement.id}>
            <input className="form-control my-3"
                value={formElement.config.value}
                type={formElement.config.elementConfig.type}
                placeholder={formElement.config.elementConfig.placeholder}
                onChange={(event) => this.inputChangedHandler(event, formElement.id)}
                required/>
            </div>
                ));
                
        return (
            <div className={classes.SignUp}>

                <div className="container text-center">
                <h2>Sing Up</h2>

                    <div className={classes.Form}>
                    <form>
                        {form}
                    </form>
                </div>
                <button className={"btn " + classes.Button} onClick={this.onSubmitHandler} >Sign Up</button>

                </div>
            </div>
          );
    }
}
 
export default SignUp;