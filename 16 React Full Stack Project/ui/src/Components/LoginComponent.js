import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function LoginComponent(){
    var location = useLocation();
    var message = "";
    // console.log("location ",location)
    if(location.state==null){
      message = "";
    }else{
      message = location.state.message;
    }
    return(<>
        <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card shadow">
              <div class="card-header bg-dark text-white text-center">
                <h3>User Login</h3>
                <p>{message}</p>
              </div>
              <div class="card-body">
                <div class="text-danger d-flex justify-content-center"></div>
                <form action="/user/login" method="POST">
                  <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" id="email" name="email" class="form-control" required/>
                  </div>
    
                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" name="password" class="form-control" required/>
                  </div>
    
                  <div class="d-grid">
                    <button type="submit" class="btn btn-dark">Login</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center">
                <small>Don't have an account? <Link to="/user/register">Register</Link></small>
                <small><a href="/user/forgotPassword" class="btn btn-danger">Forgot Password</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default LoginComponent;