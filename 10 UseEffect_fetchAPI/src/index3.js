
import React, { useEffect, useState } from "react";
import ReactDom from 'react-dom'
import { createRoot } from "react-dom/client";

function App(){
    const [userData,setUserData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((data)=>{setUserData(data)})
    },[]);

    return(<>
        <table border="1" cellPadding="10" cellSpacing="0" >
            <thead>
                <th>S.no</th>
                <th>user id</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </thead>
            <tbody>
                {userData.map((obj,index)=>{
                    return(
                        <tr>
                            <td> {index+1} </td>
                            <td> {obj.userId} </td>
                            <td> {obj.id} </td>
                            <td> {obj.title} </td>
                            <td> {obj.body} </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}

createRoot(document.getElementById("root")).render(<App/>);