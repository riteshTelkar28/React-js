import React, { useState } from "react";
import "./style.css";
import Display from "./Display";


function Form() {
  var [userName, setUserName] = useState();
  var [email, setEmail] = useState();
  var [password, setPassword] = useState();
  var [address, setAddress] = useState();
  var [student, setStudent] = useState([]);

  var handleSubmit = (event) => {
    event.preventDefault(); //prevent reload
    var obj = {userName,email,password,address};
    setStudent([...student,obj]);
    // console.log(student);
    event.target.reset(); // remove data and empty fields
  };
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
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <br />
            <input
              type="email"
              placeholder="enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <br />
            <input
              type="password"
              placeholder="enter password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <br />
            <input
              type="text"
              placeholder="enter address"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <br />
            <input type="submit" value="submit" />
          </form>
        </center>
      </div>
      <div id="rightdiv">
        <center>
          <h2>Student list</h2>
        </center>
        <Display list={student} />
      </div>
    </>
  );
}

export default Form;
