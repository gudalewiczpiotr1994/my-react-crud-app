import React, { Component } from 'react';
import classes from './Home.css';
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

        let changeText = setTimeout( () => {
            this.state.helloString.map( res => {
                if(res.id=== true){
                    this.setState({helloString: [{text : "Welcome to My React CRUD App", id:false}]})
                    textString = res.text;
                }
                if(res.id==false){
                    this.setState({helloString: [{text : "Hello. My name is Peter", id:true}]})
                }
            });
          },4000);
        

        return ( 
            <div className={classes.MainTheme}>
            <div className="container text-center">
              <h1 className={classes.Header}>My-React-CRUD-App</h1>
              <div>
                <p className={classes.Typewriter}>{textString}</p>
              </div>                
            </div>
        </div>
         );
    }
}
 
export default Home;