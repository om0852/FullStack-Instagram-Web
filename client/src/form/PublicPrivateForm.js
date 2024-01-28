import React from 'react'
import './form.css'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { useGlobalContext } from '../context/exit';
import { SignupApi } from '../api';
import { useNavigate } from 'react-router-dom';
function PublicPrivateForm() {
  const {AccountType,setAccountType,Birthdate,Signupdata} = useGlobalContext();
  const history = useNavigate()
  const handledata = async()=>{
    if(AccountType){
      alert(Signupdata.UserName)
      const res = await SignupApi({Email:Signupdata.Email,Password:Signupdata.Password,FullName:Signupdata.FullName,UserName:Signupdata.UserName,Birthdate:Birthdate,AccountType:AccountType,ProfilePhoto:Signupdata.ProfilePhoto});
alert(res);
history("/login")
    }
    else{
      alert("select account type");
    }
  }
  
  return (
    <div className="container-signup public-section">
    <div className="birthday-section public-section">
        <div className="signup-border">

          <h4 className='private-instrucation'>Choose who can see what you share. You can change this anytime in setting</h4>

          <div className='private-section'>
            <LockIcon style={{margin:"0 1vh"}}/>
            <div><label className='lable-private' for="private">Private</label><input onClick={(e)=>{setAccountType("private")}} id="private" name="account-type" type="radio"/>
            <p>Only accounts you approve can see your Photos and Videos</p>
            </div>
          </div>
          <div className='private-section'>
            <LockOpenIcon style={{margin:"0 1vh"}}/>
            <div><label className='lable-private' for="private">Public</label><input id="private " onClick={(e)=>{setAccountType("public")}} className='public' name="account-type" type="radio"/>
            <p>Anyone can see your photos and Videos</p>
            </div>
          </div>
          <button onClick={handledata}>Signup</button>
</div>
</div>
</div>
  )
}

export default PublicPrivateForm
