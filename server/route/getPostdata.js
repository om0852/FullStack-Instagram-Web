import reelmodel from '../modules/reelModule.js';


const getPostdata =async (req,res)=>{
// console.log(req.body)
try{ 
const data = await reelmodel.find();
// console.log(data)
    res.status(200).send(data);



}
catch(error){
res.status(400).send(error.message);
}
    // res.send("Welcome om")
}
export default getPostdata