import LoginModel from '../modules/LoginModel.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
// import Birthdate from '../modules/Birthday.js';
import BirthdayModel from '../modules/Birthday.js';
const SignupRoute = async(req,res)=>{
    try{
        console.log(req.body)
        const {Email,Password,Birthdate,UserName,FullName,AccountType,ProfilePhoto} = req.body.data
        const salt= await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(Password,salt)      
console.log(req.body.data)
        const user = await LoginModel.findOne({Email:Email});
        console.log(user)
        if(user){
res.status(200).send("account already exist")
        }
        else{
 let date=new Date()
            const result = LoginModel({Email,Password:secpass,CreatedDate:date,UserName,FullName,AccountType,ProfilePhoto})
            const result2 = BirthdayModel({Email,Birthdate});
        const data  = await result.save();
        await result2.save()
        console.log(data);
        res.status(200).send("Account created successfully");
    }
    }
    catch(error){
        console.log(error.message)
        res.status(500).send(error.message)
    }

}

export default SignupRoute;