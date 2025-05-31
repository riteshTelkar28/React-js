import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Navbar(){
    const [menuItem,setMenuItem] = useState();
    useEffect(()=>{
        let timer = setInterval(()=>{
            var value = localStorage.getItem("navshow");
            if(value==="null"){
                setMenuItem(<div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
                <Link style={{color:"white"}} to='/'>Home</Link> &nbsp;&nbsp; |  &nbsp;&nbsp;
                <Link style={{color:"white"}} to='/login'>Login</Link>&nbsp;&nbsp; |  &nbsp;&nbsp;
                <Link style={{color:"white"}} to='/registration'>Registration</Link>
                </div>)
            }else if(value==="login"){
                setMenuItem(<div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
                    <Link style={{color:"white"}} to='/'>Home</Link>&nbsp;&nbsp; |  &nbsp;&nbsp;
                    <Link style={{color:"white"}} to='/registration'>Registration</Link>
                    </div>)
            }else if(value==="registration"){
                setMenuItem(<div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
                    <Link style={{color:"white"}} to='/'>Home</Link>&nbsp;&nbsp; |  &nbsp;&nbsp;
                    <Link style={{color:"white"}} to='/login'>Login</Link>
                    </div>)
            }
        });
        return ()=>{clearInterval(timer)}
    },[])
    return(<>
        {menuItem}
    </>)
}

export default Navbar;