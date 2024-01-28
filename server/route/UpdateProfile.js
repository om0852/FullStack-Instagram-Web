import LoginModel from '../modules/LoginModel.js'
import reelmodel from '../modules/reelModule.js';

export const UpdateProfile = async(req,res)=>{
    try{
console.log(req.body);
const data = await LoginModel.updateOne({Email:req.body.Email},{ProfilePhoto:req.body.url});
const data3 = await reelmodel.updateMany({comment: { $elemMatch: { $or: [{ user_name: "om0852" }] } } },
    { $set: { "comment.$[elem].user_img": req.body.url } },
    { arrayFilters: [{ "elem.user_name": { $in: [req.body.UserName] } }] })
const data1 = await reelmodel.updateMany({Email:req.body.Email},{ProfilePhoto:req.body.url});
res.status(200).send("updated completed")
    }catch(error){
res.status(400).send(error.message)
    }
// if()
}