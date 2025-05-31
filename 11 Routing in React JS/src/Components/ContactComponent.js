import { Outlet,Link } from "react-router-dom";

function ContactComponent(){
    return(<>
    <div style={{backgroundColor:"green",padding:"10px"}}>
        <Link to='/contact/contactComponent1' style={{color:"black"}}>Contact Component 1</Link> &nbsp;&nbsp; | &nbsp;&nbsp; 
        <Link to='/contact/contactComponent2' style={{color:"black"}}>Contact Component 2</Link>
    </div>
    <Outlet/>

    </>)
}

export default ContactComponent;