import React, { Component } from 'react';
import classes from "./Button.css";
class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button type="submit" class={"btn " + classes.Button}>{this.props.children}</button>
            );
    }
}

 
export default Button;