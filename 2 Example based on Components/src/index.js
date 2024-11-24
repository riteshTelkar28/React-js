import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
import './style.css';
function TextComponent(){
    return(<input type="text" placeholder="enter text"/>)
}
function MyComponent() {
        return(<>
            <TextComponent/><br/>
            <TextComponent/><br/>
            <TextComponent/><br/>
            <TextComponent/><br/>
        </>)
}


createRoot(document.getElementById("root")).render(<MyComponent/>);