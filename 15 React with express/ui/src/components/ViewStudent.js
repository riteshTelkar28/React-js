import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, updateStudent } from "../store/studentSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { requestedUrl } from "../utils";


function ViewStudent(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [students,setStudent] = useState([]);
    useEffect(()=>{
        async function fetchStudent(){
            try{
                const students = await axios.get(requestedUrl+'/viewStudent');
                console.log("student ",students);
                setStudent(students.data.studentList);
            }catch(error){
                console.log("error in viewstudent ",error)
            }
        }
        fetchStudent();
    },[])
    const handleUpdate = (obj)=>{
        dispatch(updateStudent(obj));
        navigate('/updateStudent');
    }
    const deleteStudent = async(email)=>{
        try {
            // console.log("in ui delete student ")
            const res = await axios.post(requestedUrl+'/deleteStudent',{email:email});
            console.log("res ",res);
            if(res.status == 201){
                window.location.reload();
                navigate('/viewStudent');
            }
        } catch (error) {
            console.log("error in delete  student ",error);
        }

        // const res = await axios(requestedUrl+'/deleteStudent',{email:email});

        
    }
    // const students = useSelector(state=>state.student.students);
    return(
        <>
            <table border='1' cellSpacing='0' cellPadding='10' >
                <tr>
                    <th>S.NO</th>
                    <th>Username</th>  
                    <th>Email</th>
                    <th>Address</th>
                    <th colSpan='2' >Action</th>
                </tr>
                {
                    students.map((stud,index)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{stud.username}</td>
                                <td>{stud.email}</td>
                                <td>{stud.address}</td>
                                <td><button onClick={()=>{handleUpdate(stud,index)}} >Update</button></td>
                                <td><button onClick={()=>{(deleteStudent(stud.email))}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default ViewStudent;