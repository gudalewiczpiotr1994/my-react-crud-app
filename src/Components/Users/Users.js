import React, { Component } from 'react';

import User from "./User/User";
import UserDetail from "./UserDetail/UserDetail";

import classes from './Users.css';
import avatar from "../../Assets/avatar.png";


class Users extends Component {
    state = {
        users: [
            {
                name: "",
                surname: "",
                email: "",
                avatar: "",
                address: {
                    city: "",
                    street: ""
                },
                phone: ""
            },
        ],
        userDetail: {
            name: "Rob",
            surname: "Stark",
            age: "20",
            email: "robstart@gameofthrones.com",
            avatar: avatar,
            address: {
                city: "Winterfall",
                street: "Castle"
            },
        }
    };
    render() {
        return (
            <div className="container">
                <div className={classes.Users}>
                    <UserDetail
                        name={this.state.userDetail.name}
                        surname={this.state.userDetail.surname}
                        age={this.state.userDetail.age}
                        city={this.state.userDetail.address.city}
                        street={this.state.userDetail.address.street}
                        avatar={this.state.userDetail.avatar} />
                    <User 
                        name="example"
                        surname="example2"
                        age="21"
                        avatar={avatar}/>
                </div>

            </div>
        );
    }
}

export default Users;