import React, { useState,useRef, useEffect } from "react";
import "./style.css";
import Display from "./Display";


function Form() {
  var userName = useRef();
  var email = useRef();
  var password = useRef();
  var address = useRef();
  var [student, setStudent] = useState([]);
  const [indexValue,setIndex] = useState(-1);

  useEffect(()=>{
    fetch("http://localhost:3000/profile").then((response)=> response.json()).then((data)=>{setStudent(data)});
  },[])

  var handleSubmit = (event) => {
    event.preventDefault(); //prevent reload
    if(indexValue==-1){
      console.log("new value addition")
      var obj = {
        userName:userName.current.value,
        email:email.current.value,
        password:password.current.value,
        address:address.current.value
      };
      setStudent([...student,obj]);
      fetch("http://localhost:3000/profile",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(obj)
      })
    }else{
      console.log("updation of value");
      var obj = {
        userName:userName.current.value,
        email:email.current.value,
        password:password.current.value,
        address:address.current.value
      };
      student.splice(indexValue,1); //delete one object from the particular index
      student.splice(indexValue,0,obj); // now add the new object to it
      setStudent([...student]); // just make the clone , if we add the object then it will create a new dom element
      setIndex(-1);
    }
    event.target.reset(); // remove data and make fields empty
  }

  var updateData = (index)=>{
    // console.log("update button clicked ",index);
    userName.current.value = student[index].userName;
    email.current.value = student[index].email;
    password.current.value = student[index].password;
    address.current.value = student[index].address; 
    setIndex(index);
  }

  var deleteData = (index)=>{
    // console.log("delete button clicked ",index);
    var stud = [...student]; // make a clone of student
    stud.splice(index,1); // remove the index value object
    setStudent([...stud]); // make clone of stud and set it to student 
  }
  return (
    <>
      <center>
        <h2>This is an example of adding user and showing list</h2>
      </center>
      <div id="leftdiv">
        <center>
          <h2 style={{ color: "white" }}>Add Student</h2>
        </center>
        <center>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter username"
              ref={userName} //The ref attribute links each input field to its corresponding useRef object.
            />
            <br />
            <input
              type="email"
              placeholder="enter email"
              ref={email}
            />
            <br />
            <input
              type="password"
              placeholder="enter password"
              ref={password}
            />
            <br />
            <input
              type="text"
              placeholder="enter address"
              ref={address}
            />
            <br />
            <input type="submit" value="submit" />
          </form>
        </center>
      </div>
      <div id="rightdiv">
        <center>
          <h2>Student list</h2>
          {console.log("after deletion ",student)}
        </center>
        <Display list={student} update={updateData} delete={deleteData} />
      </div>
    </>
  );
}

export default Form;
