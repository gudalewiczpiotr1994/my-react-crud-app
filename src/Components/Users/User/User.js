import React, { Component } from 'react';
import classes from "./User.css";

class User extends Component {
    state = {}
    render() {
        return (
            <div className={"container px-0"}>
                <div className={"row " + classes.User}>
                    <div className="col-md-2">
                        <img className={classes.Avatar} src={this.props.avatar} alt="Empty User image" />
                    </div>
                    <div className={"col-md-10 " + classes.UsersBorder}>
                        <p className={classes.UserInfo}>{this.props.name} {this.props.surname}</p>
                        <p className={classes.UserInfo}>Age: {this.props.age}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
