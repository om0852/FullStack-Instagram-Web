import React from 'react'
import StoryBar from '../component/StoryBar'
import Suggestion from '../component/Suggestion'
import './page.css'
import ReelPage from './ReelPage'
function Main_Page() {
  console.log("data1")
  return (
    <>
    <div className='reel-main-container'>
    {/* <StoryBar/> */}
    <div className='reel-main-section'>
      <ReelPage/>
    </div>
    </div>
    </>
  )
}

export default Main_Page
