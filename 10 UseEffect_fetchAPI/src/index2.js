import React, { useEffect, useState } from "react";
import ReactDom from 'react-dom'
import { createRoot } from "react-dom/client";

function App(){
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCounter((counter)=>counter+1);
        },1000)
    },[])

    return(<>
        <h2>Counter : {counter} </h2>
    </>)
}

createRoot(document.getElementById("root")).render(<App/>);
