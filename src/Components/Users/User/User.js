import React, { Component } from 'react';
import classes from "./User.css";
import avatar from "../../../Assets/avatar.png";

class User extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className={"row" + " " + classes.User}>
                    <div className="col-md-3">
                        <img src={this.props.avatar} alt="Empty User image"/>
                    </div>
                    <div className={"col-md-9"} styles={{"border-left" : "2px solid #ccc"}}>
                        <p className={classes.UserInfo}>{this.props.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
