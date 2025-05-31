import React from "react";

class Child extends React.Component{
    componentWillUnmount(){
        alert("this component is going to unmount")
    }
    render(){
        return(
            <>
                <h1>Hello world</h1>
            </>
        )
    }
}

export default Child;