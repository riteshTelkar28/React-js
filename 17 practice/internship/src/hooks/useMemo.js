import React, { useMemo, useState } from "react";

function App(){
    const [counter,setCounter] = useState(0);
    const [number,setNumber] = useState(0);
    const squaredValue = useMemo(()=>squareNum(number),[number]);

    const onChangeHandler = (e)=>{
        console.log("onchange called ")
        setNumber(e.target.value);
    }

    const countHandler = ()=>{
        console.log("onclick called")
        setCounter(counter+1);
    }
    return(
        <>
            <h1>Welcome to square calculator</h1>
            <input
            type="text"
            placeholder="enter value"
            value={number}
            onChange={onChangeHandler}
            />
            <p>Squared Value {squaredValue}</p>
            <p>Counter : {counter} </p>
            <button onClick={countHandler} > increase </button>

        </>
    )
}

function squareNum(number){
    console.log("in squaring the number ")
    return Math.pow(number,2);
}

export default App;