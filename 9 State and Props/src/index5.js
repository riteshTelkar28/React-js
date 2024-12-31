import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

function FunctionalComponent(props){
    // console.log("props ",props);
    
    return(<>
        <h1>This is FunctionalComponent</h1>
        <h2>name : {props.data.bookTitle} </h2>
        <h2>age : {props.data.price} </h2>
    </>)
}

class ClassComponent extends React.Component{
    render(){
        // console.log("this ",this);
        
        return(<>
            <h1>this is class Component</h1>
            <h2>name : {this.props.data.bookTitle} </h2>
            <h2>age : {this.props.data.price} </h2>
        </>)
    }
}



function MyComponent(){
    const bookDetails = {
        bookTitle:"c++",
        price:"200"
    }
    return(<>
        <FunctionalComponent data={bookDetails} />
        <ClassComponent data ={bookDetails} /> 
    </>)
}

createRoot(document.getElementById("root")).render(<MyComponent/>);