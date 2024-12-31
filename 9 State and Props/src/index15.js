
import React, { useState } from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import jsondata from './jsondata.json';
function MainComponent() {
    return(<>
      <table border="1" cellPadding="10" cellSpacing={0}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            jsondata.map((obj,index)=>{
              return(
              <tr>
                <td>{index+1}</td>
                <td> {obj.userId} </td>
                <td> {obj.id} </td>
                <td> {obj.title} </td>
                <td> {obj.body} </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </>)
}
createRoot(document.getElementById("root")).render(<MainComponent />);
