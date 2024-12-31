
import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";


class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counterTitle : "Counter",
            count : 0
        }
    }

    increment(){
        // console.log("increment");
        this.setState({
            count:this.state.count + 1
        })
    }

    decrement = ()=>{
        // console.log("decrement");
        this.setState({
            count : this.state.count == 0 ? 0 : this.state.count-1
        })
    }

    reset = ()=>{
        // console.log("reset");
        this.setState({
            count : 0
        })
    }
    render(){
        return(<>
            <h1>{this.state.counterTitle} : {this.state.count} </h1>
            {/* <button onClick={this.increment}>Increment</button> this will wont work */} 
            <button onClick={()=>{this.increment()}}>Increment</button>
            <button onClick={()=>{this.decrement()}}>Decrement</button>
            <button onClick={()=>{this.reset()}}>Reset</button>
        </>)
    }
}
createRoot(document.getElementById("root")).render(<MainComponent/>);


