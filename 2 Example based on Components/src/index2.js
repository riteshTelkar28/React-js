import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

function Header(){
        return(<>
            <h1>Header Component</h1>
            <p>This is header component</p>
        </>)
}


function Navbar(){
        return(<>
            <h1>Navbar Component</h1>
            <p>This is Navbar component</p>
        </>)
    }

function About() {
        return(<>
            <h1>About Component</h1>
            <p>This is About component</p>
        </>)
    }


function Footer() {
        return(<>
            <h1>Footer Component</h1>
            <p>This is Footer component</p>
        </>)
    }

function MyComponent() {
        return(<>
            <Header/>
            <Navbar/>
            <About/>
            <Footer/>
        </>)
    }


createRoot(document.getElementById("root")).render(<MyComponent/>);