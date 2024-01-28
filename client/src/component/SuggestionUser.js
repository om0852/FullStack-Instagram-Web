import React from 'react'
import { useGlobalContext } from '../context/exit';
import Followbtn from './button/Followbtn';
import './component.css';
import { useNavigate } from 'react-router-dom';

function SuggestionUser({data}) {
  const {Userdata}=useGlobalContext();
  const history   = useNavigate();
  const handleProfileuserdata =(data1)=>{
   
    history(`/account/${data1.UserName}`)
}
    return (
    <>
      {data &&data.filter((data)=>{
        if(data._id==Userdata._id){
return false;
        }
        else{
          return true
        }
}) .map((data,index)=>{
return(
  <div  key={index}className='suggestion-user'>
    <div onClick={(e)=>handleProfileuserdata(data)}  className="suggestion-user-section1" style={{display: "flex",
    width: "100%",
    alignItems: "center"
    }}>
  <div className='suggestion-user-profile' style={{backgroundImage:`url(${data.ProfilePhoto})`}}></div>
  <p>{data.UserName}</p>
    </div>
<Followbtn data={data}/>
  </div>
  )
})
}
</>
  )
}

export default SuggestionUser
