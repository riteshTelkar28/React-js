
import React, { useEffect, useState } from "react";
import ReactDom from 'react-dom'
import { createRoot } from "react-dom/client";

function App(){
    const [userData,setUserData] = useState([]);

    const getDetails = async()=>{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // console.log(response)
        let data = await response.json();
        // console.log(data)
        setUserData(data);
    }

    useEffect(()=>{
        getDetails();
    },[]);

    return(<>
        <center><h1>It is an example of fetch api using useEffect hook using async and await</h1></center>
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