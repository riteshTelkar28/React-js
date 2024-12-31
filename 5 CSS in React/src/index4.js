
import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

const style = {
    style1 :{
        fontSize : "50px"
    },
    style2:{
        color :"green"
    }
}

const data = <div style={style.style1}>
    <p style={style.style2}>
        This is an example of css with react
    </p>
</div>


createRoot(document.getElementById("root")).render(data);