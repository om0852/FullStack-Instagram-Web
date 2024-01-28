import reelmodel from '../modules/reelModule.js'
const setLikecount = async(req,res)=>{
    try{
        console.log("setlike section")
        console.log(req.body)
        let flag=0;
            const result  = await reelmodel.findOne({_id:req.body.id})
            
            if(result){
                for(let i=0;(i<result.likeuser.length);i++){
                    if(result.likeuser[i]==req.body.user_email){
                        delete result.likeuser[i];
                        const arr =result.likeuser.filter(el=>el)
                        const result1 = await reelmodel.updateOne({_id:req.body.id},{likeuser:arr})
                        flag=1;
                        // console.log(flag)
                    }
                }
                // console.log(flag)
                if(flag==0){
    
                    result.likeuser.push(req.body.user_email)
                        const result1 = await reelmodel.updateOne({_id:req.body.id},{likeuser:result.likeuser})
    
                }
                const updateresult =await reelmodel.updateOne({_id:req.body.id},{likes:req.body.like}) 
                // console.log(updateresult)
                res.status(200).send(updateresult);
            }

    }catch(error){
        console.log(error.message)
res.status(500).send(error.message);
    }
}

export default setLikecount