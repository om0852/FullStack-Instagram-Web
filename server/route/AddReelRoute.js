import reelmodel from '../modules/reelModule.js';

const AddReelRoute =async (req,res)=>{
console.log(req.body)
try{ 

    const result = reelmodel(req.body);
    const data = await result.save();
    console.log(data)
    res.status(200).send(data);
}
catch(error){
res.status(400).send(error.message);
}
    // res.send("Welcome om")
}
export default AddReelRoute