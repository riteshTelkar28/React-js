import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

function FunctionalComponent(){
    return(<>
        <h1>This is FunctionalComponent</h1>
    </>)
}

class ClassComponent extends React.Component{
    render(){
        return(
            <h1>This is ClassComponent</h1>
        )
    }
}

function MyComponent(){
    return(<>
        <FunctionalComponent/>
        <ClassComponent/>
    </>)
}

createRoot(document.getElementById("root")).render(<MyComponent/>);