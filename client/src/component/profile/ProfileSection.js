import React,{useState,useEffect} from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { useGlobalContext } from '../../context/exit'
import './profile.css'
import { getSingleUser,getpostuserdata ,UserDetail} from '../../api';
function ProfileSection() {

  const {Userdata,setupdateprofilestate,setblur,blur,setUserdata} = useGlobalContext();
  const [postdata,setpostdata] = useState("");
  const [Profileuserdata,setProfileuserdata]=useState("");

  
  useEffect(()=>{
  
    async function handle(){
      const data  = await UserDetail();

      const data1 = await  getSingleUser({UserName:data.UserName});
      setProfileuserdata(data1)
    }
    handle();
    },[])
 


useEffect(()=>{
  const handle = async()=>{
    const data  = await UserDetail();

    const data1  =  await getpostuserdata({UserName:data.UserName});
      setpostdata(data1);
  }
  handle()
},[])

  return (
    <div className='profile-container' style={{filter: `blur(${blur}px)`}}>
      <div className = 'profile-section'>
<div className='profile-details'>
<div className='user-profile-detail'>
<div className="profile-section-img"><div style={{backgroundImage:`url(${Profileuserdata.ProfilePhoto})`,backgroundSize:"cover"}} onClick={(e)=>{setupdateprofilestate(true); setblur(1)}}></div></div>
<div className="profile-section-user-detail">
<div className="user-detail">
  <h2>{Profileuserdata.UserName}</h2>
  <div className="profile-control-btn">
    <button className='edit-btn'>Edit Profile</button>
    <button className='edit-btn tool-btn'>Add Tools</button>
    <SettingsIcon style={{color:"White",margin:"0vh 0"}}/>
  </div>
</div>
<div className='followers-details'>
  <h3><span>{postdata && postdata.length}</span>post</h3>
  <h3><span>{Profileuserdata && Profileuserdata.Followed.length}</span>follower</h3>
  <h3><span>{Profileuserdata && Profileuserdata.Following.length}</span>Following</h3>
</div>
<h5>{Profileuserdata.UserName}</h5>
<div className='bio-section'>bio</div>
</div>
</div>
{/* <div className='highlight-section'>
  <div className='highlight'></div>
</div> */}
</div>
<div className='post-section-container'>
<h2>post</h2>
</div>
<div className="post-section">
  
  {postdata && postdata.map((data,index)=>{
    console.log(data)
return(
  <div key={index} className='post' style={{backgroundImage:`url(${data.url})`}} ></div>

  )
})}
</div>

<div className='profile-info'>Meta
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

English
© 2023 Instagram from Meta</div>
      </div>
    </div>
  )
}

export default ProfileSection
