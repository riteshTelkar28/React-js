import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutStudent } from "../store/studentSlice";


function Navbar(){
    const [menuItem,setMenuItem] = useState();
    const navShow = useSelector(state => state.student.navShow)
    const dispatch =  useDispatch();

    const logout = ()=>{
        dispatch(logoutStudent());
    }
    useEffect(()=>{
        if(navShow=="Home"){
            setMenuItem(
            <div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
                <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp; | 
                <Link style={{color:"white",textDecoration:"none"}} to='/loginStudent'>Login</Link>&nbsp;&nbsp;&nbsp; | 
                <Link style={{color:"white",textDecoration:"none"}} to='/addStudent'>Add Student</Link>&nbsp;&nbsp;&nbsp; 
            </div>
        );
        }else if(navShow=="Login"){
            setMenuItem(
                <div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
                    <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp; | 
                    <Link style={{color:"white",textDecoration:"none"}} to='/viewStudent'>View Student</Link>&nbsp;&nbsp;&nbsp; | 
                    <Link style={{color:"white",textDecoration:"none"}} to='/logout' onClick={logout} >Logout</Link>&nbsp;&nbsp;&nbsp; 
                </div>
            );    
        }
    },[navShow]);
    return(
        <>
            {menuItem}
        </>
    )
}

export default Navbar;