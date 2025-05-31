import { useEffect, useState } from "react";

function App(){
    const [count,setCount]=useState(0);
    // function increment(){
    //     setCount(count+1);
    //     console.log(count)
    // }

    useEffect(()=>{console.log("count changed")},[count])

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        setCount(count-1);
    }

    const incrementBy10 = ()=>{
        setCount(count+10);
    }

    const reset = ()=>{
        setCount(0);
    }

    return(
        <>
            <p>Count : {count} </p>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={incrementBy10} >Increment by 10</button>
            <button onClick={reset} >Reset</button>
        </>
    )
}

export default App;