
import React, { useState } from "react";
import ReactDom from "react-dom";

function Display(props){    
    return(<>
      <table border="1" cellPadding="10" cellSpacing={0} align="center" >
        <thead>
          <tr>
            <th>S.no</th>
            <th>Username</th>
            <th>email</th>
            <th>password</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {
            props.list.map((obj,index)=>{
              return(
              <tr>
                <td>{index+1}</td>
                <td> {obj.userName} </td>
                <td> {obj.email} </td>
                <td> {obj.password} </td>
                <td> {obj.address} </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </>)
}

export default Display;