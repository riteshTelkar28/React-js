import axios from "axios";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import { requestedUrlUser } from "../utils";
import { useNavigate } from "react-router-dom";

function RegistrationComponent(){
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    const userData = (event)=>{
        const {name,value} = event.target;
        var diet ="";
        diet += (document.getElementById("vegetarian").checked)?"vegetarian":"";
        diet += (document.getElementById("nonVegetarian").checked)?"non-vegetarian":"";

        user.diet = diet;
        setUser({...user,[name]:value});
        // console.log("user ",user);
    }

    const submitData = async(event)=>{
        try {
            event.preventDefault();
            const result = await axios.post(requestedUrlUser+'/register',user);
            console.log("result ",result);
            if(result.data.status){
                navigate('/user/login',{state:{message:"email sent please verify"}})
            }else{
                console.log("error in add student in ui ");
            }
    
        } catch (error) {
            console.log("error in submit data",error);
        }
    }
    return(
<>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                <div class="card-header bg-primary text-white text-center">
                    <h3>User Registration</h3>
                </div>
                <div class="card-body">
                    <form action="/user/register" onSubmit={submitData} method="POST">
                        <div class="mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" id="name" name="name" class="form-control" onChange={userData} required/>
                            
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" id="email" name="email" class="form-control" onChange={userData} required/>
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" id="password" name="password" class="form-control" onChange={userData} required/>
                        </div>

                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" class="form-control" onChange={userData} required/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Dietary Preference</label>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" id="vegetarian" name="diet" value="Vegetarian" required/>
                            <label class="form-check-label" for="vegetarian">Vegetarian</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" id="nonVegetarian" name="diet" value="Non-Vegetarian" required/>
                            <label class="form-check-label" for="nonVegetarian">Non-Vegetarian</label>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" id="age" name="age" class="form-control" onChange={userData} required/>
                        </div>

                        <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <textarea id="address" name="address" class="form-control" rows="3" onChange={userData} required></textarea>
                        </div>

                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
 </>
    )
}

export default RegistrationComponent;