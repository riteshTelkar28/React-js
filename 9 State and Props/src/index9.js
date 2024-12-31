
import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";


class MainComponent extends React.Component{
    state={
        age:0,
        name:"noname"
    }

    changeAge=()=>{
        this.setState({
            age:50
        })
    }

    changeName=()=>{
        this.setState({
            name:"Ritesh"
        })
    }

    render(){
        return(<>
            <h1>Age : {this.state.age} <br/> Name : {this.state.name} </h1>
            <input type="submit" value="change age" onClick={this.changeAge} />
            <input type="submit" value="change name" onClick={this.changeName} />
        </>)
    }
}
createRoot(document.getElementById("root")).render(<MainComponent/>);