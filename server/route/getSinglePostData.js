import reelmodel from '../modules/reelModule.js';


const getSinglePostData =async (req,res)=>{
try{ 
    console.log(req.body)
const data = await reelmodel.findOne({_id:req.body.id});
console.log(data)
    res.status(200).send(data);
}
catch(error){
res.status(400).send(error.message);
}

}
export default getSinglePostData