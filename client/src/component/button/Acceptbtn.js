import React, { useEffect,useState } from 'react'
import { getSingleUser, setAcceptdata } from '../../api';
import { useGlobalContext } from '../../context/exit';
import NotificationFollowbtn from './Notification_Followbtn'
function Acceptbtn({data}) {

    const [AcceptState,setAcceptState] = useState(true);
    const {Userdata}= useGlobalContext();
    useEffect(()=>{
      async function handle(){
        const data1   = await getSingleUser({Email:Userdata.Email});
        for(let i =0;i<data1.Followed.length;i++){
          if(data1.Followed[i].UserName==data){
            setAcceptState(false);
            break;
          }
        }
      }
      handle();
    },[])
    const handleAccept = async()=>{
     
        setAcceptdata({UserName:data,MyUserName:Userdata.UserName});
        setAcceptState(false);
    }
  return (
    <>
    {
AcceptState?
<span>
        <button onClick={handleAccept}>Accept</button>
      <button>Cancel</button>
</span>
      :
      <>
    {/* <h2>g</h2> */}
       <NotificationFollowbtn data={data}/>
      </>

    }
    </>
  )
}

export default Acceptbtn
