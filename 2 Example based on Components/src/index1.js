import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

class Header extends React.Component{
    render(){
        return(<>
            <h1>Header Component</h1>
            <p>This is header component</p>
        </>)
    }
}

class Navbar extends React.Component{
    render(){
        return(<>
            <h1>Navbar Component</h1>
            <p>This is Navbar component</p>
        </>)
    }
}

class About extends React.Component{
    render(){
        return(<>
            <h1>About Component</h1>
            <p>This is About component</p>
        </>)
    }
}

class Footer extends React.Component{
    render(){
        return(<>
            <h1>Footer Component</h1>
            <p>This is Footer component</p>
        </>)
    }
}


class MyComponent extends React.Component{
    render(){
        return(<>
            <Header/>
            <Navbar/>
            <About/>
            <Footer/>
        </>)
    }
}

createRoot(document.getElementById("root")).render(<MyComponent/>);