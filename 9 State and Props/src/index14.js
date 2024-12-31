// to make the fields compact
import React, { useState } from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

function MainComponent() {
    var [userObj,setObj] = useState({});
    var [userDetails,setUserDetails] = useState({}); //if we directly make changes in userdetails obj then the component will rerender and set details in object and print so we have to set it in different object and use that object

    var submitData = ()=>{
        // setUserDetails(userDetails);
        // Object.values(userDetails) give us a array of values
        Object.values(userDetails).length ? userDetails.message = "data submitted" : userDetails.message = "enter data"

        setObj(userDetails);
    }
  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        name="userName"
        onChange={(event) => {
          userDetails = {...userDetails,[event.target.name]:event.target.value}
          setUserDetails(userDetails)
        }}
      />
      <br />
      <input
        type="email"
        placeholder="enter email"
        name="email"
        onChange={(event) => {
          userDetails = {...userDetails,[event.target.name]:event.target.value}
          setUserDetails(userDetails)
        }}
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        name="password"
        onChange={(event) => {
            userDetails = {...userDetails,[event.target.name]:event.target.value}
            setUserDetails(userDetails)
        }}
      />
      <br />
      <input
        type="submit"
        value="submit"
        onClick={submitData}
      />
      <br/>
      {userObj.message?userObj.message:''}<br/>
      {userObj.userName?userObj.userName:''}<br/>
       {userObj.email?userObj.email:''}<br/>
       {userObj.password?userObj.password:''} 
    </>
  );
}
createRoot(document.getElementById("root")).render(<MainComponent />);
