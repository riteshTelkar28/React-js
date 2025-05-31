import { useState } from 'react';
import './Style.css';

function SignUp(){
    const [inputValues,setInputValues] = useState({});
    const [user,setUserdata] = useState([]);
    const data = (event)=>{
        const {name,value} = event.target;
        setInputValues({...inputValues,[name]:value});
    };


    const addUser = (event)=>{
        event.preventDefault();
        var hobbies = "";
        hobbies += (document.getElementById("cricket").checked)?"cricket":"";
        hobbies += (document.getElementById("football").checked)?"football":"";

        inputValues.hobbies = hobbies;
        // console.log("user ", inputValues);
        const checkStorage = localStorage.getItem("studentData");
        localStorage.setItem("studentData",JSON.stringify([...(JSON.parse(checkStorage))|| [],inputValues]));
        setInputValues({});
        event.target.reset();
    };
    return(<>
        <center>
        <h1>Sign Up form</h1>
        <form action onSubmit={addUser}>
            <input
                type="text"
                placeholder="enter name"
                name="name"
                onChange={data}
            /><br/>
            <input
                type="email"
                placeholder="enter email"
                name="email"
                onChange={data}
            /><br/>
            <input
                type="password"
                placeholder="enter password"
                name="password"
                onChange={data}
            /><br/>
            <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onClick={data}
            /><label for="male">Male</label>
            <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onClick={data}
            /><label for="female">female</label><br/>
            <input
                type="checkbox"
                name="hobbies"
                id="cricket"
            /><label for="cricket">cricket</label>
            <input
                type="checkbox"
                name="hobbies"
                id="football"
            /><label for="football">football</label><br/>
            <textarea
                name="address"
                placeholder="enter address"
                onChange={data}
            /><br/>
            <input
                type="submit"
                value="Submit"
            /><br/>
            <input
                type="reset"
                value="Reset"
            />

        </form>
        </center>
    </>)
}

export default SignUp;