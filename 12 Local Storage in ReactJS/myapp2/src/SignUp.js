import { useRef } from 'react';
import './Style.css';

function SignUp(){
    const userName = useRef();
    const email = useRef();
    const password = useRef();
    const male = useRef();
    const female = useRef();
    const cricket = useRef();
    const football = useRef();
    const address = useRef();
    
    const addUser = (event)=>{
        event.preventDefault();
        var hobbies = "";
        hobbies += (cricket.current.checked)?"cricket":"";
        hobbies += (football.current.checked)?"football":"";

        var obj = {
            userName:userName.current.value,
            email:email.current.value,
            password:password.current.value,
            gender:(male.current.checked)?"male":"female",
            hobbies:hobbies,
            address:address.current.value
        }
        // console.log("user ", inputValues);
        const checkStorage = localStorage.getItem("studentData");
        localStorage.setItem("studentData",JSON.stringify([...(JSON.parse(checkStorage))|| [],obj]));
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
                ref={userName}
            /><br/>
            <input
                type="email"
                placeholder="enter email"
                name="email"
                ref={email}
            /><br/>
            <input
                type="password"
                placeholder="enter password"
                name="password"
                ref={password}
            /><br/>
            <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                ref={male}
            /><label for="male">Male</label>
            <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                ref={female}
            /><label for="female">female</label><br/>
            <input
                type="checkbox"
                name="hobbies"
                id="cricket"
                value="Cricket"
                ref={cricket}
            /><label for="cricket">cricket</label>
            <input
                type="checkbox"
                name="hobbies"
                id="football"
                value="Football"
                ref={football}
            /><label for="football">football</label><br/>
            <textarea
                name="address"
                placeholder="enter address"
                ref={address}
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