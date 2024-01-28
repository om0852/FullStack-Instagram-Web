import React, { useState ,useEffect} from 'react'
import { setNotification } from '../../api';
import { useGlobalContext } from '../../context/exit';
import Loader from '../Loader';

function Followbtn({data}) {
    const  {Userdata}=useGlobalContext();
    const [index,setindex] = useState("");
    var i ;
const [followstate,setfollowstate] = useState(false);
const [followtext,setfollowtext] = useState("follow");
const [loading,setloading] = useState(false);
const [followindex,setfollowindex] = useState("");

useEffect(()=>{
    if(data.AccountType=="private"){
        for(i=0;i<data.Notification.length;i++){
            if(data.Notification[i].UserName==Userdata.UserName && data.Notification[i].Messagetype=="requested you for following"){
                    console.log(data.Notification)
                    setfollowtext("requested")
                    setindex(i);
                    setfollowstate(true);
                }
            }
                    for(i=0;i<data.Followed.length;i++){
                        if(data.Followed[i].UserName==Userdata.UserName){
                            // alert("unfolleo")
                            setfollowtext("unfollow");
                            setfollowtext("unfollow");
                            setfollowindex(i);
                        }
                        
                    }
        }
        else{
            if(!data.Followed==[]){
                for(i=0;i<data.Followed.length;i++){
                    if(data.Followed[i].UserName==Userdata.UserName ){
                        setfollowtext("unfollow")
                        setindex(i);
                        setfollowindex(i);
                        setfollowstate(true);
                        break;
                    }
                else{

                    
                    setfollowtext("follow")
                    // setfollowstate(false);
                    // setindex(0);
                }
            }
    }
}
},[index])
const handlefollow = async()=>{
    setloading(true);
// alert(Userdata.ProfilePhoto)
        const data1  =  await setNotification({UserName:Userdata.UserName,FollowerId:Userdata._id,FollowingId:data._id,state:followstate,index:index,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"following",followindex})   
        setloading(false);
        if(followstate==true){
            setfollowtext("follow")

        }
        else{
         if(data.AccountType=="private")   {
            setfollowtext("requested")
        }
        else{

            setfollowtext("unfollow")
        }
        }
        setfollowstate(!followstate)
}

  return (
    <div onClick={handlefollow} style={{color:"white",background:"red"}}>

      {loading ?<Loader/>:`${followtext}`}
    </div>
  )
}

export default Followbtn
