import LoginModel from "../modules/LoginModel.js";

const getSingleUser = async(req,res)=>{
console.log(req.body)
    try{
        let result;
if(req.body.Email)
{
     result   = await LoginModel.findOne({Email:req.body.Email});
    }
    else{
    result   = await LoginModel.findOne({UserName:req.body.UserName});

}


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
export default getSingleUser