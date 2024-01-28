import LoginModel from '../modules/LoginModel.js'

const getLoginUser = async(req,res)=>{
    try{

        const data  = await LoginModel.find();
        // console.log(data)
        res.status(200).send(data)
    }
    catch(error){
        res.status.send(error.message);
    }
}
export default getLoginUser;