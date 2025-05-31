import { useRef} from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

function SignIn(){
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const checkUser = (event)=>{
        event.preventDefault();
        var arr = JSON.parse(localStorage.getItem("studentData"));
        // console.log("arr ",arr)
        var result = arr.filter((obj)=>{
            return obj.email == email.current.value && obj.password == password.current.value;
        })
        // console.log("result ",result)
        if(result.length==1){
            navigate('/profile',{
                state:{
                    email:email.current.value,
                    password:password.current.value,
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
                ref={email}
            /><br/>
            <input
                type="password"
                placeholder="enter password"
                name="password"
                ref={password}
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