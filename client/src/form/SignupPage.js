import React from "react";
import { useGlobalContext } from "../context/exit";
import instagram_name from '../img/instagram_name.png'
import defaultprofilephoto from '../img/defaultprofilephoto.png'

import {useNavigate} from 'react-router-dom'
import "./form.css";
import { UserNameChecker } from "../api";
function SignupPage() {
  const {Signupdata,setSignupdata} = useGlobalContext();
  const history  = useNavigate();
  const handledata = async(e)=>{
   await setSignupdata({...Signupdata,[e.target.name]:e.target.value})
    await setSignupdata((prev)=>({...prev,ProfilePhoto:defaultprofilephoto}))
  }
    const handlesignup = async(e)=>{
      e.preventDefault()
     const data =await  UserNameChecker(Signupdata.UserName)
    //  alert(data)
      if(data=="user name alerady exist"){
alert(data)
      }
      else{
        history("/birthday-signup")
      }
    }
  return (
    <>
      <div className="container-login">
        <div className="login-form-container">
          <div className="login-form">
            <div className="instagram-title">

            <img className="logo" src={instagram_name} alt={""}/>
            </div>
     <form   className="signupform">
              <input type="text" name="Email" onChange={handledata} value={Signupdata.Email} placeholder="email or number" />
              <br></br>
              <input type="text" name="FullName" onChange={handledata} value={Signupdata.FullName} placeholder="Full Name" />
              <br></br>
              <input type="text" name="UserName" onChange={handledata} value={Signupdata.UserName} placeholder="UserName" />
              <br></br>
              <input type="password" name="Password" onChange={handledata} value={Signupdata.Password} placeholder="password" />
              <br></br>
              <button onClick={handlesignup}>Sign up</button>
            </form>
            <div className="login-or-menu">
              <div className="or-menu">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
              </div>
              <div className="login-facebook">
                <button className="facebook-btn">facebook</button>
              </div>
                <a href="/" className="forget-btn" >forget password</a>
            </div>
          </div>
          <div className="login-signup-form">
            <p>Don't have an account?  <a href="/login">Login</a></p>
          </div>
          <div className="login-download">
            Get the App
            <div className="download_btn">
            <button className="google-btn">google</button>
            <button className="microsoft-btn">microsoft</button>
            </div>
                
          </div>
          </div>
          <div className="lan-menu">
            <div>
              Meta
About
Blog
Jobs
Help
API
Privacy
Terms
Top Accounts
Locations
Instagram Lite
Contact Uploading & Non-Users
Meta Verified
English

          </div>
          <div>
            
English
© 2023 Instagram from Meta
        </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
