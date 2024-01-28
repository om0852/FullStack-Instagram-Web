import React, { useEffect ,useState} from 'react';
import ClearIcon from "@mui/icons-material/Clear";

import { useGlobalContext } from '../../context/exit'
import './navbar_component.css'
import NotificationFollowbtn from '../button/Notification_Followbtn';
import Acceptbtn from '../button/Acceptbtn';
function Notification({notificationdata,NotificationUserdata}) {
  console.log(notificationdata)
  const {socket,setnleft,nleft,Userdata} = useGlobalContext();
  return (
    <>
    <div className='notification-container ' style={{left:`${nleft.value}%`}}>
    <p
        className="comment-exit-icon"
        style={{ color: "white" }}
        onClick={(e) => {
          setnleft({status:false,value:0})
        }}
      >
        <ClearIcon />
      </p>
<h2>Notifications</h2>
    <div className='notification-section'>
     {notificationdata && notificationdata.map((data1)=>{
      console.log(data1)
      if(data1.Messagetype=="started following you" || data1.Messagetype=="requested accepted"){
            return(
<div className="user-profile m2">            <div className="user-profile-img" style={{backgroundImage:`url(${data1.ProfilePhoto})`}}></div><span style={{color:"white"}}>{data1.UserName}</span><div className="comment-message" > {data1.Messagetype} </div>
            <NotificationFollowbtn data={data1.UserName} />     
        </div>
        )
      }
      else if(data1.Messagetype=="requested you for following"){
        return(
          <>
          <div className="user-profile m2">

                <div className="user-profile-img" style={{backgroundImage:`url(${data1.ProfilePhoto})`}}></div><span style={{color:"white"}}>{data1.UserName}</span><div className="comment-message" > {data1.Messagetype} </div>
                <Acceptbtn data={data1.UserName}/>
                </div>
          </>
                )
            }
            else{

              return(
                <div className="user-profile m2">
            <div className="user-profile-img" style={{backgroundImage:`url(${data1.ProfilePhoto})`}}></div><span style={{color:"white"}}>{data1.UserName}</span><div className="comment-message" > {data1.Messagetype} </div>
              <div style={{backgroundImage:`url(${data1.PostUrl})`,backgroundSize:"cover"}} className='notification-post'></div>
            
        </div>                                
        )
      }
     })}
    </div>
    </div>

      
    </>
  )
}

export default Notification
