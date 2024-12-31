import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";


class MainComponent extends React.Component{
    // if we make constructor then the compiler thinks we can handle objects, so we have to handle the object so we have to instantiate the Component class constructor and give props to it
    constructor(props){
        super(props);
        this.state = {
            name : props.name,
            age:"23"
        }
        console.log(this);
        
    }
    render(){
        return(<>
            <h1>Name : {this.state.name}</h1>
            <h1>Age : {this.state.age} </h1>
        </>)
    }
}
createRoot(document.getElementById("root")).render(<MainComponent name="Ritesh"/>);
