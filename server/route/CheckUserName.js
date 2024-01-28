import LoginModel from "../modules/LoginModel.js";

const CheckUserName = async(req,res)=>{
console.log(req.body)
    try{

        const result   = await LoginModel.findOne({UserName:req.body.UserName});
        // console.log(result)
        if(result){
            res.status(200).send("user name alerady exist")
        }
        else{
            res.status(200).send("no found")
        }
    }catch(error){
        res.status(200).send(error.message);
    }
    
}
export default CheckUserName