import LoginModel from "../modules/LoginModel.js"
import StoryModel from "../modules/StoryModel.js"

const setAcceptdata = async(req,res)=>{
    try{
console.log(req.body)
        const data = await LoginModel.findOne({UserName:req.body.UserName});
        // console.log(data);
    const mydata = await LoginModel.findOne({UserName:req.body.MyUserName});
data.Notification.unshift({UserName:mydata.UserName,ProfilePhoto:mydata.ProfilePhoto,Messagetype:"requested accepted"})
data.Following.unshift({FollowedId:mydata.UserName,ProfilePhoto:mydata.ProfilePhoto,UserName:mydata.UserName});
mydata.Followed.unshift({FollowedId:data.UserName,ProfilePhoto:data.ProfilePhoto,UserName:data.UserName});
const result  = await LoginModel.updateOne({UserName:req.body.UserName},{Notification:data.Notification});
const result2  = await LoginModel.updateOne({UserName:req.body.UserName},{Following:data.Following});
const result3  = await LoginModel.updateOne({UserName:req.body.MyUserName},{Followed:mydata.Followed});
// const data11 = await LoginModel.findOne({ _id: mydata._id });
const data12 = await  StoryModel.updateOne({UserId:mydata._id},{Followed:mydata.Followed});
console.log(data12)
console.log(result);
console.log(result2);
console.log(result3);

}
catch(error){
    console.log(error.message);
    res.send(error.message);
}
}

export default setAcceptdata