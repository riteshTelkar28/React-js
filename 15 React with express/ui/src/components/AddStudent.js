import { useState } from "react";
import '../style.css';
import { useDispatch } from "react-redux";
import { addStudent } from "../store/studentSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { requestedUrl } from "../utils";


function AddStudent(){
    const [student,setStudent] = useState({});
    const navigate = useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setStudent({
            ...student,
            [name]:value
        })
    }
    const handleSubmit = async(event)=>{
        try {
            event.preventDefault();
            const result = await axios.post(requestedUrl+'/addStudent',student);
            if(result.status==201){
                navigate('/loginStudent');            
            }
        } catch (error) {
            console.log("error in adding student ui");
        }
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