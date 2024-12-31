import React from "react";
import ReactDom from 'react-dom';
import {createRoot} from 'react-dom/client';

// ReactDom.render("hello from ritesh",document.getElementById("root"));

// createRoot(document.getElementById("root")).render(<h1>Hello from ritesh</h1>)

function MyComponent(){
    return React.createElement("h1",null,"hello react") // if we do not want to use js 
    // createElement('h1',null,'message') creates an element with tag h1 and if do not have any class then write null and then the message
}

createRoot(document.getElementById("root")).render(<MyComponent/>)