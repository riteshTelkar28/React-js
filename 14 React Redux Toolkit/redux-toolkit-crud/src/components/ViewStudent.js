import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, updateStudent } from "../store/studentSlice";
import { useNavigate } from "react-router-dom";


function ViewStudent(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleUpdate = (obj)=>{
        dispatch(updateStudent(obj));
        navigate('/updateStudent');
    }
    const students = useSelector(state=>state.student.students);
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
                                <td><button onClick={()=>{dispatch(deleteStudent(index))}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default ViewStudent;