import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

function FunctionalComponent(props){
    // console.log("props ",props);
    
    return(<>
        <h1>This is FunctionalComponent</h1>
        <h2>name : {props.data.name} </h2>
        <h2>age : {props.data.age} </h2>
    </>)
}

class ClassComponent extends React.Component{
    render(){
        // console.log("this ",this);
        
        return(<>
            <h1>this is class Component</h1>
            <h2>name : {this.props.data.name} </h2>
            <h2>age : {this.props.data.age} </h2>
        </>)
    }
}

var obj = {
    name:"ritesh ",
    age:"45"
}

function MyComponent(){
    return(<>
        <FunctionalComponent data={obj} />
        <ClassComponent data ={obj} />
        
    </>)
}

createRoot(document.getElementById("root")).render(<MyComponent/>);