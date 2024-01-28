// db.coll.find({"tags" : { $in : ['etc1']  } } );
// db.col1.find({"tags":{$all :["etc1"]}})
import LoginModel from "../modules/LoginModel.js";
import StoryModel from "../modules/StoryModel.js";
const AddStory = async(req,res)=>{
console.log(req.body);

try{
    const { PostUrl, UserName, UserId, ProfilePhoto }  =req.body
    const userdata  = await StoryModel.findOne({UserId:UserId});
    const userdata1  = await LoginModel.findOne({_id:UserId});
   
    if(userdata){
        console.log("if");
        userdata.PostUrl.push({Url:PostUrl,StoryView:[],StoryLike:[],StoryComment:[]})
        const data = await  StoryModel.updateOne({UserId:UserId},{UserName,PostUrl:userdata.PostUrl,UserId,ProfilePhoto,Followed:userdata1.Followed});
        console.log(data)
    }
    else{
        console.log("else");
        let arr = [{Url:PostUrl,StoryLike:[],StoryView:[],StoryComment:[]}]
        const data =  StoryModel({UserName,PostUrl:arr,UserId:UserId,ProfilePhoto,Followed:userdata1.Followed});
        const rdata = await data.save();

    }
    
    // console.log(rdata);
    res.status(200).send("Story Save Successfully");
}
catch(error){
    console.log(error.message)
    res.status(400).send(error.message)
}
}

export default AddStory;
