import React, { useState,useEffect } from 'react'
import { getStoryData,UserDetail } from '../api';
import { useGlobalContext } from '../context/exit';
import Nostorydata from './nodatasection/Nostorydata';

function StoryBar() {
  const {setglobalstorydata,setstoryexitstate,Userdata} = useGlobalContext();
  const [storydata,setstorydata] = useState([]);
  const [storystate,setstorystate] = useState(false);
  const handlestorydata = async()=>{
    const data1  = await UserDetail();
    const data  = await getStoryData(data1.UserName);
    
if(!data.length==0){
  setstorystate(true);
}
else{
  setstorystate(false)
}
   setstorydata(data);

  }
  useEffect(()=>{
handlestorydata();
  },[])
  return (
    <div className='story-container'>
      <div  className='story-bar'>
        {/* {alert(storystate)} */}
      { storystate ?
storydata.map((data)=>{
return(
        <div className='story-loader'>
        <div className='story' onClick={(e)=>{setglobalstorydata(data);setstoryexitstate(true)}} style={{backgroundImage:`url(${data.ProfilePhoto})`,backgroundSize:"cover"}}>

        </div>
        </div>
    )
  })
  :<Nostorydata/>
}
</div>
      </div>
  )
}

export default StoryBar
