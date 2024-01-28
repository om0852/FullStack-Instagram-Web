
import React, { useState,useEffect } from "react";
import "./navbar_component.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import SendIcon from '@mui/icons-material/Send';import ClearIcon from "@mui/icons-material/Clear";
import { useGlobalContext } from "../../context/exit";
import { addcomment, addNotification, getSingleUser, setLikeCount } from "../../api";
function CommentSection({setcommentupdatedata}) {
  let postuserdata;
    const [likes,setlikes] = useState("");
    const [comment,setcomment] = useState("");
    const [likestate,setlikestate] = useState(false);
    const {uploaded,setuploaded,setcommentstate,commentdata,socket,Userdata}=useGlobalContext();
    useEffect(()=>{

      if(commentdata.likeuser){
        for(let i=0; i< commentdata.likeuser.length;i++){
          if(commentdata.likeuser[i]===Userdata.Email){
            setlikestate(true);
            break;
          }
        }
      }
      else{
        console.log("omsalunke")
        setlikestate(false);
    }
    
    setlikes(parseInt(commentdata.likes))
    async function handle(){
      const postuser = await getSingleUser({Email:commentdata.user_email})
      postuserdata=postuser;  
    }
    handle();
  },[])
  const handlelikebtn =async()=>{
         if(likestate===true){      
        
         setLikeCount({like:likes-1,id: commentdata._id,user_email:Userdata.Email})
        setlikes(likes-1);
        setlikestate(false);
      }
      else{
       setLikeCount({like:likes+1,id: commentdata._id,user_email:Userdata.Email})
        setlikes(likes+1);
        setlikestate(true);
    }
    const postuser = await getSingleUser({Email:commentdata.user_email})
    postuserdata=postuser;  
postuserdata.Notification.push({FollowerId:Userdata._id,PostUrl:commentdata.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"liked your post"})
    addNotification({id:postuserdata._id,Notification:{FollowerId:Userdata._id,PostUrl:commentdata.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"liked your post"}})
    // socket.emit("sendNotification",{
    //   senderName:Userdata.UserName,
    //   receiverName:commentdata.UserName,
    //   ProfilePhoto:Userdata.ProfilePhoto,
    //   PostUrl:commentdata.url,
    //   Messagetype:" liked your post"
    // })
    
    setuploaded(!uploaded)
  }
  const handlecomment=async(e)=>{

    if(!comment){
      alert("enter comment")
          }
          else{
    
      const postuser = await getSingleUser({Email:commentdata.user_email})
      postuserdata=postuser;         
        postuserdata.Notification.push({FollowerId:Userdata._id,PostUrl:commentdata.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"comment on your post"+" "+comment})
            addNotification({id:postuserdata._id,Notification:{FollowerId:Userdata._id,PostUrl:commentdata.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"comment on your post"+" "+comment}})
          
    const index = await addNotification({id:postuserdata._id,Notification:{FollowerId:Userdata._id,PostUrl:commentdata.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"liked your post",date:new Date()}})
let arr;
console.log(postuserdata.Notification)
    if(index.data=="add notification"){

      postuserdata.Notification.unshift({FollowerId:Userdata._id,PostUrl:commentdata.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"liked your post",date:new Date()})
      arr=postuserdata.Notification;
    }
    else{
      delete postuserdata.Notification[index.data]
       arr =postuserdata.Notification.filter(el=>el)
      }
      console.log(postuserdata.Notification)
    socket.emit("sendNotification",{
      senderName:Userdata.UserName,
      receiverName:commentdata.user_email
      ,
      Notification:arr,
      Userdata:Userdata

    })

            commentdata.comment.push({comment:comment,user_name:Userdata.UserName,user_img:Userdata.ProfilePhoto})
            console.log(commentdata.comment)
            addcomment({id:commentdata._id,comment:commentdata.comment})
            setcomment("");
          }
          }
  return (
    <>
         <div className="add-comment-container">
      <p
        className="comment-exit-icon"
        style={{ color: "white" }}
        onClick={async(e) => {
          // alert(likestate)
          setcommentupdatedata({
           state:likestate,
           like:likes,
           id:commentdata._id
          })
          // alert(hat to edit")
          setuploaded(!uploaded);
          setcommentstate(false);
        }}
      >
        <ClearIcon />
      </p>
      <div className="comment-addpost-main">
   <div className="post-detail" style={{backgroundImage:`url(${commentdata.url})`}}></div>
   <div className="comment-detail">
    <div className="user-profile" ></div>
    <div className="user-comment">
         { commentdata.comment.map((data)=>{
          // {console.log(data)}

          return(
            <div className="user-profile m2">
            <div className="user-profile-img" style={{backgroundImage:`url(${data.user_img})`}}></div><span style={{color:"white"}}>{data.user_name}</span><div className="comment-message" >  {data.comment} </div>
        </div>
          )
          })}
    </div>
    <div className="post-info">
    <div className='reel-likes' >{ likestate?<span onClick={handlelikebtn}><FavoriteBorderIcon style={{backgroundColor:"red"}}/></span>:<span onClick={handlelikebtn} ><FavoriteBorderIcon/></span>}<span><MessageIcon/></span><span><SendIcon/></span></div>
    <div className='reel-like-count'>{likes} likes</div>
    <div className='reel-time'>0 min</div>
    <div className='reel-comment-section'><input onChange={(e)=>{setcomment(e.target.value)}} value={comment} type="text" placeholder="enter your comment"/><button onClick={handlecomment}>send</button></div>
    </div>
   </div>
        </div>
      </div> 
    </>
  )
}

export default CommentSection
