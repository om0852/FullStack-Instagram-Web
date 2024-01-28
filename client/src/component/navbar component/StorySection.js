import React, { useEffect,useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import "./navbar_component.css";
import { useGlobalContext } from "../../context/exit";

function StorySection() {
  const {setstoryexitstate,globalstorydata} = useGlobalContext();
  const [index,setindex] = useState(0);
  const [width,setwidth] = useState(0);
  const [widthindex,setwidthindex] = useState(0);
  let i = 0;
  const handlemoveforward = ()=>{
if(index==globalstorydata.PostUrl.length-1){
setstoryexitstate(false)
}
else{
  setwidthindex((prev)=>prev+1);
  i=0;
  setindex((prev)=>prev+1)
  setwidth(0);
}
}
const handlemovebackward =()=>{
  
  if(widthindex==0){
    
  }
  else{
      setwidthindex((prev)=>prev-1);
      setwidth(0)
      setindex((prev)=>prev-1)
      i=0;
      // clearInterval(interval);

    }
  }
useEffect(()=>{
  // alert("happy")
  if(index==globalstorydata.PostUrl.length){
  }
  else{
        const interval = setInterval(()=>{
      i++
      setwidth(prev=>prev+4);
      console.log(index==globalstorydata.PostUrl.length-1)
      if(i==30){
        if(index>=globalstorydata.PostUrl.length-1){
          setstoryexitstate(false)
          clearInterval(interval);
        }
        setwidthindex((prev)=>prev+1);
        setindex(((prev)=>prev+1))
        setwidth(0);
      }
      handlechecker();
      console.log(i,index,width)
    },550)
    return ()=>{
      clearInterval(interval);
    }
  }
  },[index]);
  const handlechecker = ()=>{
  }

  const handlexit = ()=>{
    setstoryexitstate(false)
  }
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <p  className="story-exit-icon" >
        <ClearIcon style={{width:"6vh",height:"6vh",color:"white"}} onClick={handlexit} />
      </p>
      <div className="story-section-container">
        <ArrowForwardIosIcon style={{position: "absolute",cursor:"pointer",
    color: "white",
    left: "70%"}} onClick={handlemoveforward}/>
    {!index==0 ?<ArrowBackIosNewIcon style={{position: "absolute",cursor:"pointer",
    color: "white",
    left: "28%"}} onClick={handlemovebackward}/>
  :""  }    <div className="story-section" style={{backgroundImage:`url(${globalstorydata.PostUrl[index].Url})`}}>
          <div className="story-line">
            {
              globalstorydata && globalstorydata.PostUrl.map((data,ind)=>{
                return(
                  <div className="story-n-line" >{widthindex>ind?<div style={{width:`100%`}}></div>:(widthindex==ind)?<div className="smooth" style={{width:`${width}%`}}></div>: <span style={{width:`${0}%`}}></span>}</div>
                )
              })
            }
            </div>

          <div className="story-user-profile">
            <div className="story-profile">
              <div className="story-profilephoto" style={{backgroundImage:`url(${globalstorydata.ProfilePhoto})`,backgroundSize:"cover"}}></div>
              <div className="story-username">{globalstorydata.UserName}</div>
              <div className="story-time">2min</div>
            </div>
            <div className="story-more-option"><MoreVertIcon style={{color:"white"}}/></div>
          </div>
          <footer className="story-footer">
            <input type="text" placeholder="enter comment"/>
            <FavoriteBorderIcon style={{width:"5vh",height:"5vh",color:"white"}}/>
            <button>send</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
