import React,{useState} from "react";
import { Link } from "react-router-dom"
import {validate, regSchema} from "../../utils"
import { useUserDispatch, register} from "../../contexts"
import "./index.css"

export function Signup() {
    const userDispatch = useUserDispatch()
    const [username,setUsername] = useState("");
    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        setUsername(fullname)
        console.log("hello")
        const user = {username,password,email,fullname,confirmPassword};
        //validate(regSchema,user,setError);
          register(userDispatch,user,setError);
    return false;
    }
  return (
    
      <div className="signup">
          <div className="signupWrap">
        <div className="signup_image"></div>
        <div className="signupForm">
          <input type="radio" name="form" className="radio" id="user" checked readOnly />
          <input type="radio" name="form" className="radio" id="admin" readOnly />
          <nav className="labelholder left signup_nav">
            <label id="lbluser" htmlFor="user">
              user signup
            </label>
            <label id="lbladmin" htmlFor="admin">
              admin signup
            </label>
          </nav>
          <main className="signup_main">
            <form id="userForm" className="signup_form">
              <h3>User Signup</h3>
            {!!error && <div className="error">{error}</div>}
              <p>
                already have an account? <Link to="/login">login here </Link>
              </p>
              <div className="signup_form_control">
                <label htmlFor="fullname">fullname</label>
                <div className="signup_form_icon">
                  <span>
                    <i className="fa fa-user"></i>
                  </span>
                  <input type="text" 
                  placeholder="fullname" 
                  value={fullname}
                   onChange={(e)=>setFullname(e.target.value)}/>
                </div>
              </div>
              <div className="signup_form_control">
                <label htmlFor="email">Email</label>
                <div className="signup_form_icon">
                  <span>
                    <i className="fa fa-envelope"></i>
                  </span>
                  <input type="email" 
                   value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="enter your email" />
                </div>
              </div>

              <div className="signup_form_control">
                <label htmlFor="password">password</label>
                <div className="signup_form_icon">
                  <span>
                    <i className="fa fa-key"></i>
                  </span>
                  <input type="password" 
                  placeholder="password" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="signup_form_control">
                <label htmlFor="confirmation">confirm password</label>
                <div className="signup_form_icon">
                  <span>
                    <i className="fa fa-key"></i>
                  </span>
                  <input type="password" 
                  placeholder="confirm password" 
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
             
              <button  type="submit" className="btn" onClick={handleSubmit}>sign up</button>
              <div>
                <input type="checkbox" />
                <span>i have read and agreed to the terms and conditions</span>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
