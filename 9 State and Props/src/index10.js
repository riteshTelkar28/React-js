
import React, { useState } from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

// hook is a special function this is use to handle states in functional component
function MainComponent(){
    const [name,setName] = useState("noname");
    const [age,setAge] = useState(0);

    var changeAge = ()=>{
        setAge(20);
    }

    var changeName = ()=>{
        setName("ritesh");
    }

    return(<>
        <h1>Name : {name} <br/> Age : {age} </h1>
        <input
            type="submit" value="change age" onClick={changeAge}
        />
        <input
            type="submit" value="change Name" onClick={changeName}
        />
    </>)

}
createRoot(document.getElementById("root")).render(<MainComponent/>);