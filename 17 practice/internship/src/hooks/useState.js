import { useState } from "react";

function App(){
    const [count,setCount]=useState(0);
    // function increment(){
    //     setCount(count+1);
    //     console.log(count)
    // }

    const increment = ()=>{
        setCount(count+1);
        console.log(count);
    }

    return(
        <>
            <p>Count : {count} </p>
            <button onClick={increment} >Increment</button>
            <button onClick={()=>setCount(count-1)} >Decrement</button>
            <button onClick={()=>setCount(count+10)} >Increment by 10</button>
            <button onClick={()=>setCount(0)} >Reset</button>
        </>
    )
}

export default App;