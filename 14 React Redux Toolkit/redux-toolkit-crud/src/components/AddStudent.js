import { useState } from "react";
import '../style.css';
import { useDispatch } from "react-redux";
import { addStudent } from "../store/studentSlice";
import { useNavigate } from "react-router-dom";


function AddStudent(){
    const [student,setStudent] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setStudent({
            ...student,
            [name]:value
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addStudent(student));
        navigate('/loginStudent')
    }
    return(
        <>
            <center>
                <h1>Add Student Form</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="enter username"
                        name="username"
                        onChange={getData}
                    /> <br/>
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
                        type="text"
                        placeholder="enter address"
                        name="address"
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

export default AddStudent;