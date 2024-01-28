import React,{useState,useEffect} from 'react'
import LoginPage from './form/LoginPage'
import Homepage from './page/Homepage'
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
import SignupPage from './form/SignupPage';
import BirthdayPage from './form/BirthdayPage';
import PublicPrivateForm from './form/PublicPrivateForm';
import Sidebar from './component/Sidebar';
import ProfileSection from './component/profile/ProfileSection';
import HomeSection from './page/HomeSection';
import Loader from './component/Loader';
import UserProfileSection from './component/profile/UserProfileSection';
import { UserDetail } from './api';
import { useGlobalContext } from './context/exit';

function Main() {
  const {setpostdata,Userdata,postdata,uploaded,createexit,updateprofilestate,blur,socket,setUserdata} = useGlobalContext();
  const [loading,setloading] = useState(false);
  // const history = useNavigate();

  useEffect(()=>{
    setloading(false);
    const handle = async()=>{
      const data  = await UserDetail();
  console.log(data)
  setUserdata({
    _id:data._id,
    Email:data.Email,
    UserName:data.UserName,
    FullName:data.FullName,
    ProfilePhoto:data.ProfilePhoto,
    Notification:data.Notification,
    Followed:data.Followed,
    Following:data.Following,
    
  })
  socket.emit("addNewUser",(data.UserName));
  }
  setloading(true)
  handle();
  },[socket])
  
  return (
    <Router>
    <Routes>
      {/* <LoginPage/> */}
      <Route exact path="/public-private" element={<PublicPrivateForm/>}/>
      <Route exact path="/birthday-signup" element={<BirthdayPage/>}/>
      <Route exact path="/signup" element={<SignupPage/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      {/* <Route path="/*" element={<UserProfileSection/>}/> */}
    {loading &&
      <Route exact path="/" element={<Homepage/>}>

          <Route path="/account/*" element={<Homepage/>}/>
          {/* <Route path="/account/prof" element={<UserProfileSection/>}/> */}
      </Route>
}

      </Routes>
    </Router>
  )
}

export default Main
