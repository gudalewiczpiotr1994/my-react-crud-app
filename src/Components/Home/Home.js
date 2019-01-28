import React, { Component } from 'react';
import classes from './Home.css';
import $ from 'jquery';
import usersImage from '../../Assets/users.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Home extends Component {

    state= {
        helloString : [
          { text : "Hello. My name is Peter", id:true }
        ],
      }
    
 
    render() { 
        let textString = ""
        this.state.helloString.map(res=>{
            textString = res.text;
        })

        let text = <p className={classes.Typewriter}>{textString}</p>
        let textStyle = $('.Home__Typewriter__33iS_');

        textStyle.animate({
            width: '325px'
        },2000,function(){
            $(this).animate({
                width: '0'
            },2000)
        });

        let changeText = setTimeout( () => {
            this.state.helloString.map( res => {
                if(res.id === true){
                    this.setState({helloString: [{text : "Hello. My name is Peter", id:false}]})

                }
                if(res.id === false){
                    this.setState({helloString: [{text : "Welcome to My React CRUD App", id:true}]})
                    textStyle.stop().animate({
                        width: '325px'
                    },2000,function(){
                        $(this).animate({
                            width: '0'
                        },2000)
                    });               
                 }
            });
            clearTimeout(changeText);
        },4500);

        

        let logo = "../../Assets/Users.png";
        return ( 
            <div className="text-center">
                <div className={classes.MainTheme}>
                  <h1 className={classes.Header}>My-React-CRUD-App</h1>
                  <div>
                      {text}
                  </div>             
                </div>
                <div className="container text-center">
                    <div className="row p-5">
                        <div className="col-md-6">
                            <img className={classes.userInterface} src={usersImage}></img>
                        </div>
                        <div className="col-md-6">
                            <p className={classes.Information}>
                                Welcome in my React-CRUD-App.
                            </p>
                            <p className={classes.Information}>
                                I have created this application for simply purpose. This is my first apllication where i did a lot of work for React by myself.
                            </p>

                            <p className={classes.Information}>
                               I hope i will be improving my skill all the time and explore React's possiblities every day.
                            </p>

                            
                            <p className={classes.Information}>
                               Please, check this out!
                            </p>

                            <Link className="nav-link" to="/users">
                            <button className={classes.Button}>
                                Users
                            </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;