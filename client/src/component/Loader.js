import React from 'react'
import './component.css'
function Loader({width1,height1}) {
  return (
    <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",backgroundColor:"transparent",justifyContent:"center",position:"absolute"}}>
      <div class="loader" style={{width:`${width1}vh`,height:`${height1}vh`}}></div>

    </div>
  )
}

export default Loader
