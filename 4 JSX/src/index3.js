import React from "react";
import ReactDom from 'react-dom';
import {createRoot} from 'react-dom/client';
import displayContent1, { displayContent2, displayContent3 } from "./test";



createRoot(document.getElementById("root1")).render(displayContent1);
createRoot(document.getElementById("root2")).render(displayContent2);
createRoot(document.getElementById("root3")).render(displayContent3);
