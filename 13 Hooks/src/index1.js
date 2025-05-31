import React, { useReducer } from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
var initialState = 0;
var reducer = (state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            if(state<=0){
                return initialState;
            }else{
                return state-1;
            }
        case 'reset':
            return initialState;
        default :
            return initialState;
    }
}


function MyComponent(){
    const [count,dispatch] = useReducer(reducer,initialState);
    return(
    <>
        <h2>This is an example of react-reducer hook</h2>
        <h2>Count : {count} </h2>
        <button onClick={()=>{dispatch('increment')}}>Increment</button><br/>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button><br/>
        <button onClick={()=>{dispatch('reset')}}>Reset</button><br/>
        
    </>
    )
}

createRoot(document.getElementById("root")).render(<MyComponent/>)