
import React, { useState ,useEffect} from 'react'
import { useGlobalContext } from '../context/exit';
import { getpostdata, setLikeCount } from '../api';
import PostSection from './navbar component/PostSection';
import CommentSection from './navbar component/CommentSection';

function ReelSection() {
  const [commentupdatedata,setcommentupdatedata] = useState({
    state:0,
    like:0,
    id:11,
  });
  const{postdata,setpostdata,uploaded,commentstate}  = useGlobalContext();

  return(
    <>
    {commentstate && <CommentSection setcommentupdatedata={setcommentupdatedata}/>}
    {postdata && postdata.map(function (data,index){
// {console.log(data)}
return(
        <div className='reel-container'>
  <PostSection key={index} data={data} commentupdatedata={commentupdatedata}/>
</div> 
)    
    })
}

    </>
)
}

export default ReelSection
