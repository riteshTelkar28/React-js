import { use, useState } from "react";
import '../style.css';
import { useDispatch } from "react-redux";
import { loginStudent } from "../store/studentSlice";
import { useNavigate } from "react-router-dom";
function Login(){
    const [student,setStudent] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var getData = (event)=>{
        const {name,value} = event.target;
        setStudent({
            ...student,
            [name]:value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(loginStudent(student));
        navigate('/viewStudent')
    }
    return(
        <>
            <center>
                <h1>Login Student</h1>
                <form onSubmit={handleSubmit}>
                <input
                        type="email"
                        placeholder="enter email"
                        name="email"
                        onChange={getData}
                    /><br/>
                    <input
                        type="password"
                        placeholder="enter password"
                        name="password"
                        onChange={getData}
                    /><br/>
                    <input
                        type="submit"
                        value="submit"
                    />
                </form>
            </center>
        </>
    )
}

export default Login;