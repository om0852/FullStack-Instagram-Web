import LoginModel from "../modules/LoginModel.js";
const jwtkey = "omsalunke"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
const LoginRoute = async(req,res)=>{
    console.log(req.body)
try{

    const user  =await LoginModel.findOne({Email:req.body.data.Email});
    if(!user){
        return res.send({message:"user not found"})
    }
    console.log(user.Password)
        const checkpass = await bcrypt.compare(req.body.data.Password,user.Password)
    const data ={
        result:{
         id:user._id   
        }
    }
    const authtoken = jwt.sign(data,jwtkey)
    console.log(checkpass)
    if (checkpass) {
        const updated = await LoginModel.updateOne({Email:req.body.data.Email},{AuthToken:authtoken})
console.log(updated)
        return res.status(200).send({ message: "login successfully",authtoken:authtoken ,Logindetail:user});
    } else {
      return res.status(200).send({ message: "invlaid password" });
    }}
catch(error){
  return  res.status(500).send({message:"Account Not Found"});
}
}
export default LoginRoute