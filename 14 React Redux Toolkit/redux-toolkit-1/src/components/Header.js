import { useSelector } from 'react-redux';
import '../style.css';

function Header(){
    const obj = useSelector(state=>state.user)
    // console.log("obj ",obj)
    return(
        <div id='Header'>
            <h4>{obj.counterTitle}</h4>
            <h4>{obj.tagTitle}</h4>
            <h4>{obj.count}</h4>
        </div>
    )
}

export default Header;