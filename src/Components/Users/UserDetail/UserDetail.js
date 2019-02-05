import React, { Component } from 'react';
import classes from './UserDetail.css';
class UserDetail extends Component {
    state = {}
    render() {
        return (
            <div className={"container text-center"}>
                <div className={classes.UserDetail}>
                    <h2 className={classes.Header}>User Detail</h2>
                    <div className={"row mt-4"}>
                        <div className="col-lg-8">
                            <div className="my-3 col-12">
                                <p className={"col-6" + " " + classes.Notification}>Name: </p>
                                <p className={"col-6" + " " + classes.UserInfo}>{this.props.name}</p>
                            </div>
                            <div className="my-3 col-12">
                                <p className={"col-6" + " " + classes.Notification}>Surname: </p>
                                <p className={"col-6" + " " + classes.UserInfo}>{this.props.surname}</p>
                            </div>
                            <div className="my-3 col-12">
                                <p className={"col-6" + " " + classes.Notification}>Age: </p>
                                <p className={"col-6" + " " + classes.UserInfo}>{this.props.age}</p>
                            </div>
                            <div className="my-3 col-12">
                                <p className={"col-6" + " " + classes.Notification}>City: </p>
                                <p className={"col-6" + " " + classes.UserInfo}>{this.props.city}</p>
                            </div>
                            <div className="my-3 col-12">
                                <p className={"col-6" + " " + classes.Notification}>Street: </p>
                                <p className={"col-6" + " " + classes.UserInfo}>{this.props.street}</p>
                            </div>
                            <button className={classes.Button + " " + "btn btn-block"}>EDIT</button>
                        </div>
                        <div className="col-lg-4">
                            <img className={classes.Avatar} src={this.props.avatar}></img>
                            <button className={classes.Button + " " + "btn btn-block"}>EDIT</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetail;

