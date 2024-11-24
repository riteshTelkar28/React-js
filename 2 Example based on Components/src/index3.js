import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";

function MyComponent() {
        return(<>
            <Header/>
            <Navbar/>
            <About/>
            <Footer/>
        </>)
}


createRoot(document.getElementById("root")).render(<MyComponent/>);