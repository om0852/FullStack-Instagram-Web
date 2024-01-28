import React,{useState,useEffect} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import SendIcon from '@mui/icons-material/Send';
import MoreVert from '@mui/icons-material/MoreVert'
import { setLikeCount,addcomment, getsinglepostdata, getpostdata, addNotification, getLoginUser, getSingleUser } from '../../api';
import { useGlobalContext } from '../../context/exit';
import './navbar_component.css'
function PostSection({data,commentupdatedata}) {
  console.log(data)
    const [likes,setlikes] = useState("");
    let postuserdata
    const [comment,setcomment] = useState("");
    const [loading,setloding] = useState(true);
    const [likestate,setlikestate] = useState(false);
    const {uploaded,setuploaded,Userdata,setcommentstate,setpostdata,setcommentdata,socket,setfun,fun}=useGlobalContext();
    useEffect(()=>{
      // async function handle(){

      //   const postuser = await getSingleUser({Email:data.user_email})
      //   postuserdata=postuser
      //   socket.emit("sendNotification",{
      //     senderName:Userdata.UserName,
      //     receiverName:data.UserName,
      //     Notification:postuserdata.Notification
      //   })
      // }
      // handle()
        if(data.likeuser && !likes){
            for(let i=0; i<  data.likeuser.length;i++){
        if(data.likeuser[i]===(Userdata.Email)){
            setlikestate(true);
            break;
        }
           }
    }
    else{
      setlikestate(false);
    }
    
   setlikes(data.likeuser.length)
    // setlikes(parseInt( data.likes))
  },[])
useEffect(()=>{
  if(commentupdatedata.id===data._id){
    setlikes(commentupdatedata.like)
    setlikestate(commentupdatedata.state)
  }
},[commentupdatedata.like,uploaded])
  const handlelikebtn =async()=>{
    const postuser = await getSingleUser({Email:data.user_email})
    postuserdata=postuser
    const index = await addNotification({id:postuserdata._id,Notification:{FollowerId:Userdata._id,PostUrl:data.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"liked your post",date:new Date()}})
let arr;
console.log(postuserdata.Notification)
    if(index.data=="add notification"){

      postuserdata.Notification.unshift({FollowerId:Userdata._id,PostUrl:data.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"liked your post",date:new Date()})
      arr=postuserdata.Notification;
    }
    else{
      delete postuserdata.Notification[index.data]
       arr =postuserdata.Notification.filter(el=>el)
      }
      console.log(postuserdata.Notification)
    socket.emit("sendNotification",{
      senderName:Userdata.UserName,
      receiverName:data.UserName,
      Notification:arr,
      Userdata:Userdata

    })

    
      if(likestate===true){      
         await setLikeCount({like:likes-1,id: data._id,user_email:Userdata.Email})
        setlikes(likes-1);
        setlikestate(false);
            }
      else{
        await setLikeCount({like:likes+1,id: data._id,user_email:Userdata.Email})
        setlikes(likes+1);
        setlikestate(true);
    }
    // alert("om")
    
    socket.emit("setSinglePostData",{data:data})
  }
// useEffect(()=>{


// },[])

  const handlecomment=async(e)=>{
    const postuser = await getSingleUser({Email:data.user_email})
    // alert(data.user_email)
    if(!comment){
alert("enter comment")
    }
   
    const data1 = await getsinglepostdata(data._id);
  console.log(data)
    // alert(data1.comment)
      data1.comment.unshift({comment:comment,user_name:Userdata.UserName,user_img:Userdata.ProfilePhoto})
      addcomment({id:  data1._id,comment:data1.comment})
    setcomment("")
    postuserdata =postuser;
    alert(data.url)
        postuserdata.Notification.push({FollowerId:Userdata._id,PostUrl:data.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"comment on your post"+" "+comment,date:new Date()})
         await   addNotification({id:postuserdata._id,Notification:{FollowerId:Userdata._id,PostUrl:data.url,UserName:Userdata.UserName,ProfilePhoto:Userdata.ProfilePhoto,Messagetype:"comment on your post "+" "+comment,date:new Date()}})
            socket.emit("sendNotification",{
              senderName:Userdata.UserName,
              receiverName:data.UserName,
              Notification:postuserdata.Notification.reverse(),
              Userdata:Userdata
            })
  }

  const handlecommentstate = async(e)=>{
        const data1 = await getsinglepostdata(data._id);
        setcommentdata(data1)
        setcommentstate(true);
  }
  return (
    <>
    { loading ?
      <div className='reel-section'>
<div className='reel-header'>
<div className='reel-profile-img' style={{backgroundImage:`url(${data.ProfilePhoto})`}}></div>
<h5 className='userid'>{data.UserName}</h5>
<p className='upload-time'> {data.timeline}</p>
<div className='reel-more'>
<MoreVert/>
</div>
</div>
<div className='reel-video' onDoubleClick={handlelikebtn} style={{backgroundImage:`url(${  data.url})`}}></div>{console.log(likestate)}
<div className='reel-likes' >{likestate ?<span><FavoriteBorderIcon onClick={handlelikebtn} style={{backgroundColor:"red"}}/></span>:<span onClick={handlelikebtn}><FavoriteBorderIcon/></span>}<span><MessageIcon/></span><span><SendIcon/></span></div>
<div className='reel-like-count'>{likes}</div>
<div className='reel-view-caption'>{  data.caption}</div>
<div className='reel-comment-section'><input onChange={(e)=>{setcomment(e.target.value)}} name="comment" value={comment} type="text" placeholder="enter your comment"/><button onClick={handlecomment}>send</button></div>
<div className='reel-view-comment'><p onClick={handlecommentstate}>view all comment</p></div>
</div> : <h1>loading</h1>
}
    </>
  )
}

export default PostSection
