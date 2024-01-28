import LoginModel from "../modules/LoginModel.js";

const UserDetail = async(req,res)=>{
// console.log(req.body)
    try{

        const result   = await LoginModel.findOne({AuthToken:req.body.AuthToken});
        // console.log(result)
        if(result){
            res.status(200).send(result)
        }
        else{
            res.status(200).send("no found")
        }
    }catch(error){
        res.status(200).send(error.message);
    }
    
}
export default UserDetail