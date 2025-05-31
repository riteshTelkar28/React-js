import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { reset } from '../store/userSlice';

function SlideBarLeft(){
    const count = useSelector(state=>state.user.count);
    const dispatch = useDispatch();
    return(
        <div id='SlideBarLeft'>
            <h2>Count {count} </h2>
            <button id='btn'  onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default SlideBarLeft;

//when you use dispatch function to dispatch an action, you are sending the information to the reducer