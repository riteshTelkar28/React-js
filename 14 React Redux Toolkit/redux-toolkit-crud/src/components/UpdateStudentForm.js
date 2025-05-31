import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../store/studentSlice";
import { useNavigate } from "react-router-dom";
function UpdateStudentForm(){
    const [student,setStudent] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const studentData = useSelector(state => state.student.selectedStudent);
    useEffect(()=>{
        setStudent(studentData);
    },[studentData])
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
        navigate('/viewStudent');
    }
    return(
        <>
            <center>
                <h1>Update Student Form</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        name="username"
                        defaultValue={studentData.username}
                        onChange={getData}
                    /> <br/>
                    <input
                        type="email"
                        defaultValue={studentData.email}
                        name="email"
                        onChange={getData}

                    /><br/>
                    <input
                        type="password"
                        defaultValue={studentData.password}
                        name="password"
                        onChange={getData}

                    /><br/>
                    <input
                        type="text"
                        defaultValue={studentData.address}
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

export default UpdateStudentForm;