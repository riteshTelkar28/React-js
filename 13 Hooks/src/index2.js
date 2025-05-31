import React, { useReducer } from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
var initialState = {
    counter1:0,
    counter2:0
};
var reducer = (state,action)=>{
    switch(action.type){
        case 'increment1':
            return {...state,counter1:state.counter1 + action.value};
        case 'decrement1':
            if(state.counter1<=0){
                return {...state,counter1:action.value};
            }else{
                return {...state,counter1:state.counter1 - action.value};
            }
        case 'reset1':
            return {...state,counter1:action.value};
        case 'increment2':
            return {...state,counter2:state.counter2 + action.value};
        case 'decrement2':
            if(state.counter2<=0){
                return {...state,counter2:action.value};
            }else{
                return {...state,counter2:state.counter2 - action.value};
            }
        case 'reset2':
            return {...state,counter2:action.value};
        default :
            return {
                counter1:0,
                counter2:0
            };
    }
}


function MyComponent(){
    const [state,dispatch] = useReducer(reducer,initialState);
    return(
    <>
        <h2>This is an example of react-reducer hook</h2>
        <h2>Counter 1 : {state.counter1} </h2>
        <button onClick={()=>{dispatch({type:'increment1',value:1})}}>Increment</button><br/>
        <button onClick={()=>{dispatch({type:'decrement1',value:1})}}>Decrement</button><br/>
        <button onClick={()=>{dispatch({type:'reset1',value:0})}}>Reset</button><br/>
        <h2>Counter 2 : {state.counter2} </h2>
        <button onClick={()=>{dispatch({type:'increment2',value:10})}}>Increment</button><br/>
        <button onClick={()=>{dispatch({type:'decrement2',value:10})}}>Decrement</button><br/>
        <button onClick={()=>{dispatch({type:'reset2',value:0})}}>Reset</button><br/>

    </>
    )
}

createRoot(document.getElementById("root")).render(<MyComponent/>)
