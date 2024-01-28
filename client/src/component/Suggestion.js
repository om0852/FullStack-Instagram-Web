import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/exit';
import './component.css'
import AddStory from './navbar component/AddStory';
import SuggestionUser from './SuggestionUser'
function Suggestion({data}) {
 
  const {Userdata,setaddStorystate}=useGlobalContext();
  const handleaddstory = ()=>{
setaddStorystate(true);
  }
  // alert(Userdata.UserName)
  return (
    <div className='suggesion-container'>
      <div className='suggestion-section'>
<div className='user-profile'>
    <div onClick={handleaddstory} className='profile-icon x2' style={{backgroundImage:`url(${Userdata.ProfilePhoto})`}}></div>
    <p style={{color:"white"}}>{Userdata.UserName}</p>
</div>
<div className='user-suggestion'>
  <h3>suggestion for you</h3>
  <SuggestionUser data={data} sx={{color:"white"}}/>
</div>
      </div>
    </div>
  )
}

export default Suggestion
