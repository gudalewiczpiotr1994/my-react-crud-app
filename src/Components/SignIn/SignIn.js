import React, { Component } from 'react';
import classes from './SignIn.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class SignIn extends Component {
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
        },
        validationText: '',
        isLogged: false,
    }

    checkValidity(value, rules) {

        let isValid = true;

        if (rules.required) {
            if (isValid = value.trim() !== '' && isValid) { this.setState({ validationText: "" }) }
            else { this.setState({ validationText: "Please insert your information" }) }
        }
        if (rules.minLength) {
            if (isValid = value.length >= rules.minLength && isValid) { this.setState({ validationText: "" }) }
            else { this.setState({ validationText: "Password should contain 6-14 characters" }) }
        }
        if (rules.maxLength) {
            if (isValid = value.length <= rules.maxLength && isValid) { this.setState({ validationText: "" }) }
            else { this.setState({ validationText: "Password should contain 6-14 characters" }) }
        }
        if (rules.isEmail) {
            const type = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (isValid === type.test(value) && isValid) { this.setState({ validationText: "" }) }
            else { this.setState({ validationText: "Please check your email format." }) }
        }


        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation)
            }
        };
        this.setState({ controls: updatedControls });
    }

    onSubmitHandler = () => {
        let updatedState = {
            ...this.state.controls
        }

        const data = {
            email: updatedState.email.value,
            password: updatedState.password.value,
            returnSecureToken: true,
        }
        if (this.state.controls.password.value === '' || this.state.controls.email.value === '') {
            this.setState({ validationText: "Please fill an empty areas" })
        }

        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCAUePJP_C-MavetbBP2JTafM7dTyyjOqs';
        if (this.state.controls.password.valid === true && this.state.controls.email.valid === true) {
            axios.post(url, data)
                .then(res => {
                    sessionStorage.setItem('isLogged', true);
                    this.setState({isLogged : true})
                    this.props.history.push(this.state.isLogged)
                    this.props.history.push("/users");
                })
                .catch(error => {
                    if (error.status === 400) {
                        this.setState({ validationText: "Did you use correct data? Please try again." })
                    }
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
                    required />
            </div>
        ));

        return (
            <div className={classes.SignIn}>
                <div className="container text-center">
                    <h1>Log In</h1>
                    <div className={classes.Form}>
                        <form>
                            {form}
                        </form>
                        <button className={"btn " + classes.Button} onClick={this.onSubmitHandler} >Sign In</button>
                        <p className={classes.Validation}>{this.state.validationText}</p>
                    </div>
                    <p className={classes.AccNotification}>
                        Does not have account? Please click
                    <Link className={classes.Link} to="/signUp">here</Link>
                    </p>
                </div>

            </div>
        );
    }
}

export default SignIn;