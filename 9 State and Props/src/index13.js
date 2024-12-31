
import React, { useState } from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

class MainComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:"",
      email:"",
      password:"",
      userDetails:""
    }
  }

  submitData = ()=>{
    var userObj = {
      userName:this.state.userName,
      email:this.state.email,
      password:this.state.password
    }
    this.setState({userDetails:userObj});
  }

  render(){
    return (
    <>
      <input
        type="text"
        placeholder="enter name"
        onChange={(event) => {
          this.setState({userName:event.target.value})
        }}
      />
      <br />
      <input
        type="email"
        placeholder="enter email"
        onChange={(event) => {
          this.setState({email:event.target.value})       
        }}
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        onChange={(event) => {
          this.setState({password:event.target.value})
        }}
      />
      <br />
      <input
        type="submit"
        value="submit"
        onClick={this.submitData}
      />
      <br/>
       {this.state.userDetails.userName?this.state.userDetails.userName:''}<br/>
       {this.state.userDetails.email?this.state.userDetails.email:''}<br/>
       {this.state.userDetails.password?this.state.userDetails.password:''} 
    </>
  );
  }
}

createRoot(document.getElementById("root")).render(<MainComponent />);
