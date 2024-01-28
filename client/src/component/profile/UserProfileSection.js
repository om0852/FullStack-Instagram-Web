import React, { useState,useEffect } from 'react'
import NotificationFollowbtn from '../button/Notification_Followbtn';
import { useGlobalContext } from '../../context/exit'
import './profile.css'
import MoreVert from '@mui/icons-material/MoreVert';
import {
  useParams
} from "react-router-dom";
import { getpostuserdata,getSingleStoryData ,getSingleUser} from '../../api';
function UserProfileSection() {
  const {setglobalstorydata,setstoryexitstate,Userdata} = useGlobalContext();
  const {UserName} = useParams();   
  const [storydata,setstorydata] = useState([]);  
  const {blur} = useGlobalContext();
  const [postdata,setpostdata] = useState("");
  const [Profileuserdata,setProfileuserdata]=useState("")
  useEffect(()=>{
    async function handle(){
      const data = await  getSingleUser({UserName});
      setProfileuserdata(data)
    }
    handle();
    },[])
  const handlestorydata = async()=>{
    const data  = await getSingleStoryData(UserName);
    if(data){
     console.log(data)
     setglobalstorydata(data);
     setstoryexitstate(true)
   }
  //  (data);
  }
  useEffect(()=>{
handlestorydata();
  },[])
useEffect(()=>{
  const handle = async()=>{
    const data1  =  await getpostuserdata({UserName:UserName});
      setpostdata(data1);
  }
  handle()
},[])

  return (
   <div className='profile-container' style={{filter: `blur(${blur}px)`}}>
      <div className = 'profile-section'>
<div className='profile-details'>
<div className='user-profile-detail'>
<div className="profile-section-img"><div onClick={handlestorydata} style={{backgroundImage:`url(${Profileuserdata.ProfilePhoto})`,backgroundSize:"cover"}} ></div></div>
<div className="profile-section-user-detail">
<div className="user-detail">

  <h2>{Profileuserdata.UserName}</h2>
  <div className="profile-control-btn">
<NotificationFollowbtn data={Profileuserdata.UserName}/>
<MoreVert/>
  </div>
</div>
<div className='followers-details'>
  <h3><span>{1}</span>post</h3>
 {Profileuserdata && <h3><span>{Profileuserdata.Followed.length}</span>follower</h3>}
  {Profileuserdata && <h3><span>{Profileuserdata.Following.length}</span>Following</h3>}
</div>
<h5>{Profileuserdata.UserName}</h5>
<div className='bio-section'>bio</div>
</div>
</div>
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

export default UserProfileSection
