import reelmodel from '../modules/reelModule.js'
const AddComment =async(req,res)=>{
    console.log(req.body)
    try{
const result = await reelmodel.updateOne({_id:req.body.id},{comment:req.body.comment})
res.status(200).send(result);
    }catch(error){
        res.status(500).send("no network")
    }
}
export default AddComment;