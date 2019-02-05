import React, { Component } from 'react';

import User from "./User/User";
import UserDetail from "./UserDetail/UserDetail";

import classes from './Users.css';
import avatar from "../../Assets/avatar.png";
import axios from '../../axios-server';


class Users extends Component {
    state = {
        users: [],
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

    componentDidMount () {
        const users = axios.get('/users.json')
        .then( response => {
            this.setState({users: response.data});
        });
    }

    createPerson = () => {
        const user = {
            id: 1,
            name: "Rob",
            surname: "Stark",
            age: "20",
            email: "robstart@gameofthrones.com",
            avatar: avatar,
            address: {
                city: "Winterfall",
                street: "Castle"
            },
        };
        axios.post('/users.json', user)
            .then(response => console.log(response))
            .catch(error =>  console.log(error));
    }
    
    render() {
        // const usersList = this.state.users.map(person => {
        //     return <User name={person.name}/>
        // })
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

                    <button className="btn btn-block btn-success" onClick={this.createPerson}>Create</button>
                    <div className={classes.UsersContainer}>
                        <div className="py-5">
                            <div className={classes.border}></div>
                            <h2 className={classes.Header}>List of Users</h2>
                            <div className={classes.border}></div>
                        </div>
                        {/* {usersList} */}
                    </div>

                </div>

            </div>
        );
    }
}

export default Users;