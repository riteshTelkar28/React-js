import React from "react";
import ReactDom from 'react-dom';
import {createRoot} from 'react-dom/client';
import component1, { component2, component3 } from "./test2";


createRoot(document.getElementById("root1")).render(component1());
createRoot(document.getElementById("root2")).render(component2());
createRoot(document.getElementById("root3")).render(component3());
