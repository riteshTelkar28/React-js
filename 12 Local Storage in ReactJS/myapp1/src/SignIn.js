import { useState } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

function SignIn(){
    const navigate = useNavigate();
    const [inputValues,setInputValues] = useState({});
    const data = (event)=>{
        const {name,value} = event.target;
        setInputValues({...inputValues,[name]:value});
    };


    const checkUser = (event)=>{
        event.preventDefault();
        var arr = JSON.parse(localStorage.getItem("studentData"));
        // console.log("arr ",arr)
        var result = arr.filter((obj)=>{
            return obj.email == inputValues.email && obj.password == inputValues.password;
        })
        // console.log("result ",result)
        if(result.length==1){
            navigate('/profile',{
                state:{
                    email:inputValues.email,
                    password:inputValues.password,
                    status:true
                }
            });
        }else{
            navigate('/profile',{
                state:{
                    status:false
                }})    
        }

        event.target.reset();
    };
    return(<>
        <center>
        <h1>Sign In form</h1>
        <form action onSubmit={checkUser}>

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
                type="submit"
                value="Login"
            /><br/>
            <input
                type="reset"
                value="Reset"
            />

        </form>
        </center>
    </>)
}

export default SignIn;