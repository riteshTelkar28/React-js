
import React, { useState } from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

function MainComponent() {
    const [userName,setUserName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [userDetails,setUserDetails] = useState({});

    var submitData = ()=>{
        const userObj = {userName,email,password};
        setUserDetails(userObj);
    }
  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        onChange={(event) => {
          setUserName(event.target.value)
        }}
      />
      <br />
      <input
        type="email"
        placeholder="enter email"
        onChange={(event) => {
            setEmail(event.target.value)
        }}
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        onChange={(event) => {
            setPassword(event.target.value)
        }}
      />
      <br />
      <input
        type="submit"
        value="submit"
        onClick={submitData}
      />
       {userDetails.userName?userDetails.userName:''}<br/>
       {userDetails.email?userDetails.email:''}<br/>
       {userDetails.password?userDetails.password:''} 
    </>
  );
}
createRoot(document.getElementById("root")).render(<MainComponent />);
