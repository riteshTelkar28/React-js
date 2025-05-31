import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { useState } from 'react';
import { decrement, increment, reset, setTagTitle } from '../store/userSlice';

function SlideBarRight(){
    const[tagTitle,setTitle] = useState();
    const dispatch = useDispatch();
    return(
        <div id='SlideBarRight'>
            <input 
            type='text' 
            style={{height:"30px", width:"300px", margin:"10px"}}
            placeholder='enter tag title' 
            onChange={(event)=>{setTitle(event.target.value)}}
            />
            <input
            type='submit'
            id='btn'
            onClick={()=>{dispatch(setTagTitle(tagTitle))}}
            />
            <br/>
            <button onClick={()=>{dispatch(increment())}}>increment</button> <br/>
            <button onClick={()=>{dispatch(decrement())}}>decrement</button> <br/>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
            
        </div>
    )
}

export default SlideBarRight;