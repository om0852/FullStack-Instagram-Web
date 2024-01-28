import StoryModel from "../modules/StoryModel.js";

const getStoryData = async(req,res)=>{
    try{
        console.log(req.params.username)
const data = await StoryModel.find({Followed: { $elemMatch: { $or: [{ UserName: req.params.username }]} } });
res.send(data)
    }catch(error)
    {
res.send(error.message)
    }
 

}
export default getStoryData;