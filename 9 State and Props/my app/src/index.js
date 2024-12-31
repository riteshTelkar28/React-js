import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
import Form from "./form";

function Main(){
    return(<>
        <Form/>
    </>)
}

createRoot(document.getElementById("root")).render(<Main/>);