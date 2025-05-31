
import React, { useCallback, useState } from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

function MyComponent(){
    const [firstNum,setFirstNum] =  useState();
    const [secondNum,setSecondNum] = useState();
    const [result,setResult] = useState();

    const res = useCallback(()=>{
        setResult(addition(firstNum,secondNum));
    },[firstNum,secondNum]);

    function addition(firstNum,secondNum){
        return  parseInt(firstNum) + parseInt(secondNum);
    }
    return(
    <>
        <center>
            <h2>This is an example of react | useCallback() hook</h2>
            <input
                type="text"
                placeholder="enter first number"
                onChange={(event)=>{setFirstNum(event.target.value)}}
            /><br/>
            <input
                type="text"
                placeholder="enter second number"
                onChange={(event)=>{setSecondNum(event.target.value)}}
            /><br/>
            <input
                type="submit"
                value="add"
                onClick={res}
            /><br/>
        <h1>Result : {result} </h1>

        </center>

    </>
    )
}

createRoot(document.getElementById("root")).render(<MyComponent/>)