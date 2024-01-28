import axios from 'axios'; 
const url = "http://localhost:8000";
export const addPost = async(data)=>{
    try{
        const result = await axios.post(`${url}/add/reel_post`,data)
        // console.log(result)     
    }
    catch(error){
        console.log(error.message)
    }
}
export const setLikeCount = async(data)=>{
    try{
        const result = await axios.post(`${url}/set/likes`,data)
        // console.log(result)     
    }
    catch(error){
        console.log(error.message)
    }
}
export const getpostdata = async()=>{
    try{
        const result = await axios.get(`${url}/get/reel_post`)
        // console.log(result.data)
        return result.data.reverse();     
    }
    catch(error){
        console.log(error.message)
    }
}
export const getpostuserdata = async(data)=>{
    try{
        const result = await axios.post(`${url}/get/postuserdata`,data)
        // console.log(result.data)
        return result.data.reverse();     
    }
    catch(error){
        console.log(error.message)
    }
}
export const addcomment = async(data)=>{
    try{
        const result = await axios.post(`${url}/add/comment`,data)
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const getsinglepostdata = async(id)=>{
    try{
        const result = await axios.post(`${url}/get/comment_post`,{id:id})
        // console.log(result.data)
        return result.data     

    }
    catch(error){
        console.log(error.message)
    }
}

export const SignupApi = async(data)=>{
    try{
        const result = await axios.post(`${url}/account/signup`,{data})
        // console.log(data)
        // console.log(result.data)
        return result.data     

    }
    catch(error){
        console.log(error.message)
    }
}
export const LoginAPi = async(data)=>{
    try{
        const result = await axios.post(`${url}/account/login`,{data})
        // console.log(result.data)
        return result.data     

    }
    catch(error){
        console.log(error.message)
    }
}
export const UserNameChecker = async(data)=>{
    try{
        // alert("api")
        const result = await axios.post(`${url}/checker/username`,{UserName:data})
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const UserDetail = async()=>{
    try{
    
        const result = await axios.post(`${url}/checker/userdetail`,{AuthToken:localStorage.getItem("authtoken")})
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const UserProfileimg = async(data)=>{
    // console.log(data)
    try{
    
        const result = await axios.post(`${url}/account/update/userprofileimg`,data)
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const getLoginUser = async()=>{
    // console.log(data)
    try{
    
        const result = await axios.get(`${url}/account/alluser`)
        console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const setNotification = async(data)=>{
    // console.log(data)ost
    try{
    
        const result = await axios.post(`${url}/account/addFollower`,data)
        console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const addNotification = async(data)=>{
    // console.log(data)
    try{
    
        const result = await axios.post(`${url}/account/addNotification`,data)
        console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const getSingleUser = async(data)=>{
    // console.log(data)
    try{
    
        const result = await axios.post(`${url}/get/SingleUser`,data)
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const setAcceptdata = async(data)=>{
    // console.log(data)
    try{
    
        const result = await axios.post(`${url}/set/Acceptdata`,data)
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const AddStoryData = async(data)=>{
    // console.log(data)
    try{
    
        const result = await axios.post(`${url}/add/StoryData`,data)
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const getStoryData = async(data)=>{
    try{
        // alert(data)
        const result = await axios.get(`${url}/get/StoryData${data}`)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}
export const getSingleStoryData = async(data)=>{
    // console.log(data)
    try{
    
        const result = await axios.get(`${url}/get/SingleStoryData${data}`)
        // console.log(result.data)
        return result.data     
    }
    catch(error){
        console.log(error.message)
    }
}