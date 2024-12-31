
import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
import './style.css';

const data = <div id="demoOne">
    <p className="demoTwo">
        This is an example of css with react
    </p>
</div>


createRoot(document.getElementById("root")).render(data);