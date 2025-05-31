import { Link } from "react-router-dom";

function HeaderComponent(){
    return(<div style={{backgroundColor:"black",padding:"10px"}}>
        <Link style={{color:"white"}} to='/'>Home</Link> &nbsp;&nbsp; | &nbsp; &nbsp;
        <Link style={{color:"white"}} to='/about'>About</Link> &nbsp;&nbsp; | &nbsp; &nbsp;
        <Link style={{color:"white"}} to='/contact'>Contact</Link> &nbsp;&nbsp; | &nbsp; &nbsp;
    </div>);
}

export default HeaderComponent;