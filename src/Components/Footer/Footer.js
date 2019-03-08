import React, { Component } from 'react';
import classes from './Footer.css';
class Footer extends Component {
    state = {  }
    render() { 
        const copy = "\u00A9"

        return (
            <footer className={classes.Footer}>
                <p className={classes.Text}>
                    {copy} Piotr Gudalewicz
                </p>
            </footer>
          );
    }
}
 
export default Footer;