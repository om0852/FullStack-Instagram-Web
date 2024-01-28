import reelmodel from '../modules/reelModule.js';


const getPostuserdata =async (req,res)=>{
console.log(req.body.Email)
try{ 
    if(req.body.Email){
        const data = await reelmodel.find({user_email:req.body.Email});
        res.status(200).send(data);
    }
    else{
        const data = await reelmodel.find({user_email:req.body.UserName});
        res.status(200).send(data);

    }



}
catch(error){
res.status(400).send(error.message);
}
    // res.send("Welcome om")
}
export default getPostuserdata