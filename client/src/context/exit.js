import React,{useContext,useEffect, useState,useRef} from 'react';
import {io} from 'socket.io-client'
const socket =io('ws://localhost:9000');

const  AppContext  = React.createContext();
const AppProvider = ({children})=>{
    // let socket;
    const [commentdata,setcommentdata] = useState("");
    const [blur,setblur] = useState(0);
    const [createexit,setcreateexit] = useState(false);
    const [postdata,setpostdata] = useState("");
    const [likecount,setlikecount] = useState("");
    const [uploaded,setuploaded] = useState(false);
    const [commentstate,setcommentstate]=useState(false)
    const [storyexitstate,setstoryexitstate]=useState(false)
    const [globalstorydata,setglobalstorydata]=useState("")
   
    const [updateprofilestate,setupdateprofilestate]=useState(false)
    const [nleft,setnleft]=useState({
        status:false,
        value:0
    })
    const [Signupdata,setSignupdata] = useState({
        Email:"",
        Password:"",
        UserName:"",
        FullName:"",
        ProfilePhoto:""
    })
const [Birthdate,setBirthdate] = useState("")
const [AccountType,setAccountType] = useState("")
const [addStorystate,setaddStorystate] = useState(false);
const [Userdata,setUserdata] = useState({
    _id:"",
    Email:"",
    FullName:"",
    UserName:"",
    ProfilePhoto:"",
    Notification:"",
    Followed:"",
    Following:"",
})


        return <AppContext.Provider value={{setstoryexitstate,storyexitstate,setglobalstorydata,globalstorydata,addStorystate,setaddStorystate,setnleft,nleft,setcreateexit,createexit,postdata,setpostdata,setuploaded,uploaded,commentstate,setcommentstate,commentdata,setcommentdata,socket,Birthdate,setBirthdate,setAccountType,AccountType,Signupdata,setSignupdata,setUserdata,Userdata,setblur,blur,setupdateprofilestate,updateprofilestate}}>{children}</AppContext.Provider>
    };
const useGlobalContext  = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext};