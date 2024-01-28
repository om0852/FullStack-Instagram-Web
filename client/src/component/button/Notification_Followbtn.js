import React, { useState ,useEffect} from 'react'
import { getSingleUser, setNotification } from '../../api';
import { useGlobalContext } from '../../context/exit';
import Loader from '../Loader';
import {
    useParams
  } from "react-router-dom";
function NotificationFollowbtn({data}) {
    const  {Userdata,socket}=useGlobalContext();
    const [index,setindex] = useState("");
    const [followindex,setfollowindex] = useState("");
    var i ;
const [accepttext,setaccepttext] = useState(false);
const [followstate,setfollowstate] = useState(false);
const [followtext,setfollowtext] = useState("follow");
const [loading,setloading] = useState(false);
const [userid,setuserid] = useState("");
const {UserName} = useParams();   
let username=data;
useEffect(()=>{
    async function handle(){
       if(UserName){
        username=UserName;
       }
        const data1  = await getSingleUser({UserName:username });
        
        setuserid(data1);
        // console.log(data1)
    if(data1.AccountType=="private"){
        for(i=0;i<data1.Notification.length;i++){
                if(data1.Notification[i].UserName==Userdata.UserName && data1.Notification[i].Messagetype=="requested you for following"){
                    console.log("happy");
                    console.log(data1.Notification[i]);
                    setindex(i);
                    setfollowtext("requested");
                    setfollowstate(true);
                for(i=0;i<data1.Followed.length;i++){
                    console.log(i);
                    console.log(data1.Followed[i]);
                    if(data1.Followed[i].UserName==Userdata.UserName){
                        setfollowtext("unfollow");
                        setfollowindex(i);
                    }
                    
                }
                    break;
                    
                }
                else{
                    
                    setfollowtext("follow")
                    // setfollowstate(false);
                    // setindex(0);
                    console.log(" not happy happy")
                }
            }
        }
        else{
            // console.log(data.Followed)
            for(i=0;i<data1.Followed.length;i++){
                if(data1.Followed[i].UserName==Userdata.UserName ){
// console.log(data.Followed[i].UserName
setindex(i);
setfollowtext("unfollow")
setfollowindex(i)
setfollowstate(true);
break;
}
else{
                    
                    setfollowtext("follow")
                  
                }
    }
}
}
handle();
},[socket,index])
const handlefollow = async()=>{
    setloading(true);
// alert(Userdata.ProfilePhoto)
        const data1  =  await setNotification({UserName:Userdata.UserName,FollowerId:Userdata._id,FollowingId:userid._id,state:followstate,index:index,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"following",followindex:followindex})   
        setloading(false);
        if(followstate==true){
            setfollowtext("follow")

        }
        else{
         if(userid.AccountType=="private")   {
            setfollowtext("requested")
        }
        else{

            setfollowtext("unfollow")
        }
        }
        setfollowstate(!followstate)
}

  return (
      <>
   <button className='Notification-follow-btn' onClick={handlefollow} style={{color:"white"}}>
{loading ?<Loader/>:`${followtext}`}
</button>

    </>
  )
}

export default NotificationFollowbtn
