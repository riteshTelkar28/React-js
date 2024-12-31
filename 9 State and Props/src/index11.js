
import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";


class MainComponent extends React.Component{
    state={
        age:0,
        name:"noname"
    }

    render(){
        return(<>
            <h1>Age : {this.state.age} <br/> Name : {this.state.name} </h1>
            <input
                type="text"
                placeholder="enter name"
                onChange={
                    (event)=>{
                        this.setState({
                            name : event.target.value
                        })
                    }
                }
            />
            <br/>
            <input
                type="text"
                placeholder="enter age"
                onChange={
                    (event)=>{
                        this.setState({
                            age : event.target.value
                        })
                    }
                }
            />
        </>)
    }
}
createRoot(document.getElementById("root")).render(<MainComponent/>);
