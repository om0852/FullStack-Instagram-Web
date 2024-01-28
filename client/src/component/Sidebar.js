import React, { useEffect ,useState} from 'react'
import './component.css'
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import instagram_name from '../img/instagram_name.png'
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import reelicon from '../img/reelIcon.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExploreIcon from '@mui/icons-material/Explore';
import { useGlobalContext } from '../context/exit';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const history = useNavigate();
const[ notification,setnotification] = useState([]);
  const {setcreateexit,createexit,Userdata,socket,setnleft}  = useGlobalContext();
  useEffect(()=>{
    socket.on("getNotification",data=>{
setnotification(prev=>[...prev,data.Notification])
    })
    console.log(notification)
  },[socket]);
  return (
    <>
    <div className='sidebar-conatiner'>
      <div className='instagram-title'>
        <img className='instagram-logo' src={instagram_name} alt=""/>
      </div>
      <ul className='instagram-option-menu'>
        <li onClick={(e)=>{history("/")}}><span><HomeIcon sx={{ fontSize:"4vh" }}/></span>Home</li>
        <li><span><SearchIcon sx={{ fontSize:"4vh" }}/></span>Search</li>
        <li><span><ExploreIcon sx={{ fontSize:"4vh" }}/></span>explore</li>
        <li><span><img className='icon' src={reelicon}/></span>reels</li>
        <li><span><MessageIcon onClick={(e)=>{history("/account/Message")}} sx={{ fontSize:"4vh" }}/></span>messages</li>
        <li><span><FavoriteBorderIcon sx={{ fontSize:"4vh" }} onClick={(e)=>setnleft({status:true,value:14})}/></span>notification</li>
        <li onClick={(e)=>{setcreateexit(true)}}><span><AddCircleOutlineIcon sx={{ fontSize:"4vh" }}/></span>create</li>
        <li><div onClick={(e)=>{history(`/account/profile`)}} style={{backgroundImage:`url(${Userdata.ProfilePhoto})`,backgroundSize:"cover"}} className='profile-icon'></div>profile</li>
        <li className='more-option'><span><MoreVertIcon sx={{ fontSize:"4vh" }}/></span>More</li>
      </ul>
    </div>
    </>
  )
}

export default Sidebar



