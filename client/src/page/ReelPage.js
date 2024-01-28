import React from 'react'
import ReelSection from '../component/ReelSection'
import StoryBar from '../component/StoryBar'
import './page.css'
function ReelPage() {
  return (
    <div className='reelpage-container'>
      <StoryBar/>
      <ReelSection/>
      {/* <ReelSection/> */}
    </div>
  )
}

export default ReelPage
