import React, { useEffect, useRef,useState } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom';
import { getpostdata, UserDetail } from '../api'
import AddReels from '../component/navbar component/AddReels';
import ProfileSection from '../component/profile/ProfileSection';
import UpdateProfile from '../component/profile/UpdateProfile';
import Sidebar from '../component/Sidebar'
import { useGlobalContext } from '../context/exit'
import HomeSection from './HomeSection';
import Loader from '../component/Loader';
import './page.css'
import AddStory from '../component/navbar component/AddStory';
import UserProfileSection from '../component/profile/UserProfileSection';
import MessageContainer from '../component/MessageSection/MessageContainer';


function Homepage() {
  const {setpostdata,addStorystate,postdata,uploaded,createexit,updateprofilestate,blur,socket,setUserdata} = useGlobalContext();
  const history = useNavigate();
  if(!localStorage.getItem("authtoken")){
    history("/login")
        }
  useEffect(() => {
    const datafun =async()=>{
      const data =await getpostdata();
      socket.emit("setData",{data:data,socketId:socket.id});
      console.log("data")
      socket.on("getData",(data)=>{
        console.log("data")
        console.log(data.data)
        setpostdata(data.data);
      });
    } 
    datafun();
  },[])
const [state,setstate] = useState(true)
window.onload = async function () {
 await setTimeout(()=>{

    setstate(false)
  },[2000])
}
  return (
    <>
        
          {createexit && <AddReels/>}
{addStorystate && <AddStory/>}
    {updateprofilestate && <UpdateProfile/>}
    <div className='sidebar' style={{filter: `blur(${blur}px)`}}>
      <Sidebar/>
     
        </div>
    <Routes>
        
          <Route path="/" element={<HomeSection/>}/>
          <Route path="/account/profile" element={<ProfileSection/>}/>
          <Route path="/account/Message" element={<MessageContainer/>}/>

          <Route path="/account/:UserName" element={<UserProfileSection/>}/>
    </Routes>
      
    </>
  )
}

export default Homepage
