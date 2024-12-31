import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

const style1 = {fontSize : "50px"};
const style2 = {color :"red"};
const data = <div style={style1}>
    <p style={style2}>
        This is an example of css with react
    </p>
</div>


createRoot(document.getElementById("root")).render(data);