import StoryModel from "../modules/StoryModel.js";

const getSingleStoryData = async(req,res)=>{
    try{
        console.log(req.params.Email)
const data = await StoryModel.findOne({UserName:req.params.Email})
        res.send(data);
    }catch(error)
    {

    }
 

}
export default getSingleStoryData;