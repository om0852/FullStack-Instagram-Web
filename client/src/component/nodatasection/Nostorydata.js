import React from 'react'
import Checkimg from '../../img/illo-confirm-refresh-light.png'
function Nostorydata() {
  return (
    <div style={{textAlign:"center",height:"20vh",width:"100%",alignItem:"center",justifyContent:"center",color:"white"}}>
    <div style={{width:"100%",height:"12vh",display:"flex",alignItem:"center",justifyContent:"center"}}><img style={{width:"10vh" ,height:"10vh"}} src={Checkimg}/></div>
      <p style={{fontSize:"4vh"}}>You're all caught up</p>
<p>You've seen all new posts from the past 6 days.</p>
    </div>
  )
}

export default Nostorydata
