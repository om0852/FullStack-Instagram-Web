import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPi,AddStoryData } from "../api";
import instagram_name from '../img/instagram_name.png'
import "./form.css";
function LoginPage() {
const history  = useNavigate();
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const [uploadedstorydata,setuploadstorydata] = useState({
    PostUrl:"",
    UserName:"",
    UserId:"",
    ProfilePhoto:"",
  });
  const handlelogin = async(e)=>{
    e.preventDefault();
    const data  =  await LoginAPi({Email,Password})
    setuploadstorydata({
      PostUrl:"",
      UserName:data.Logindetail.UserName,
      UserId:data.Logindetail._id,
      ProfilePhoto:"",
    });
    const dat1a = await AddStoryData(uploadedstorydata);

    console.log(data)
    if(data.message=="login successfully"){
      
      localStorage.setItem("authtoken",data.authtoken)
      history("/")
      window.location.reload();
    }
    else{
      alert(data.message)
    }
  }
  return (
    <>
      <div className="container">
        <div className="login-form-container">
          <div className="login-form">
            <div className="instagram-title">

            <img className="logo" src={instagram_name} alt={""}/>
            </div>
     <form >
              <input type="text" placeholder="email"  onChange={(e)=>{setEmail(e.target.value)}} value={Email}/>
              <br></br>
              <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} value={Password} />
              <br></br>
              <button onClick={handlelogin}>Log in</button>
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
            <p>Don't have an account?  <a href="/signup">Sign up</a></p>
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

export default LoginPage;
