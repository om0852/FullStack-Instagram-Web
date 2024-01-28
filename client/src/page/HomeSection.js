import React, { useEffect, useState } from 'react'
import './page.css'
import Main_Page from './Main_Page'
import Suggestion from '../component/Suggestion';
import { getLoginUser,UserDetail } from '../api';
import Notification from '../component/navbar component/Notification';
import { useGlobalContext } from '../context/exit';
import StorySection from '../component/navbar component/StorySection';
function HomeSection() {
  const {nleft,socket,Userdata,storyexitstate}  =useGlobalContext();
  const [loading,setloading] = useState(false);
  const [logindata,setlogindata] =useState("");
  const [notificationdata,setnotificationdata] =useState("");
  const [NotificationUserdata,setNotificationUserdata] =useState("");

  useEffect(()=>{
    async function handle(){

      const data  = await UserDetail();
      data.Notification.reverse()
      setnotificationdata(data.Notification)
    }
    handle();
   
   socket.on("getNotification",(data)=>{
        console.log(data);
        if(data){

          setnotificationdata(data.Notification);
          setNotificationUserdata(data.senderData);
        }
        else{

        }
      }  
   )
  
 },[socket])
  useEffect(()=>{
    const  handledata = async()=>{
setloading(true);
      const data = await getLoginUser();
      setlogindata(data)
      setloading(false);
    }
    handledata();
    },[])
  return (
    <>
     {storyexitstate && <StorySection/>}
    {nleft.status && <Notification notificationdata={notificationdata} NotificationUserdata={NotificationUserdata
    }/>}
     <div className='container'>
        <div className='main-container-home'>
       <Main_Page/>
      <Suggestion data={logindata}/>    
        </div>
    </div> 
    </>
  )
}

export default HomeSection
