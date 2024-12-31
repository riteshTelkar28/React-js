import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

function FunctionalComponent(props){
    // console.log("props ",props);
    // console.log("type of props.name ",typeof props.name);
    
    return(<>
        <h1>This is FunctionalComponent</h1>
        <h2>name = {props.name}</h2>
        <h2>typeof age = {props.age} </h2>
    </>)
}

class ClassComponent extends React.Component{
    render(){
        // console.log("this ",this)
        return(<>
            <h1>this is class Component</h1>
            <h2>name = {this.props.name}</h2>
            <h2>typeof age = {this.props.age}</h2>
        </>)
    }
}

FunctionalComponent.defaultProps = {
    age:"0"
}

ClassComponent.defaultProps = {
    age:"0"
}

function MyComponent(){
    return(<>
        <FunctionalComponent name="ritesh Telkar" />
        <FunctionalComponent name="ritesh Telkar" age="23" />

        <ClassComponent name="varun" />
        <ClassComponent name="varun" age={45} />
        
    </>)
}

createRoot(document.getElementById("root")).render(<MyComponent/>);