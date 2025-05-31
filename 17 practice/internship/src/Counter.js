import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor called ")
        this.state = {
            count:0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>({
            count:prevState.count+1
        }));
    }

    render(){
        console.log("mounting phase, render called")
        return(<div>
            <p>Count : {this.state.count}</p>
            <button onClick={this.handleClick}>Increment</button>
        </div>
        );
    }
}

export default Counter;