import LoginModel from "../modules/LoginModel.js";

const addNotification =async (req,res)=>{
    // console.log("req.body");
    const {Notification} = req.body;
    // console.log(req.body);
    try{
        let flag = 0;
        if(req.body){
            const data = await LoginModel.findOne({_id:req.body.id},{Notification: { $elemMatch: { $or: [{ UserName:req.body.Notification.UserName ,Messagetype:req.body.Notification.Messagetype,PostUrl:req.body.Notification.PostUrl}]} } })
            if(data){
                const data3 = await LoginModel.findOne({_id:req.body.id});
                if(Notification.Messagetype=="liked your post"){
                    // console.log(data3.Notification.length)

                    for(let i=0;i<data3.Notification.length;i++){
                        // cons/ole.log(data3.Notification[i].UserName  === Notification.UserName && data3.Notification[i].Messagetype  == Notification.Messagetype && data3.Notification[i].PostUrl  == Notification.PostUrl)
                        if(data3.Notification[i].UserName  === Notification.UserName && data3.Notification[i].Messagetype  == Notification.Messagetype && data3.Notification[i].PostUrl  == Notification.PostUrl){
                            delete data3.Notification[i];
                            const arr =data3.Notification.filter(el=>el)
                            const data4  = await LoginModel.updateOne({_id:req.body.id},{Notification:arr})
                            // console.log(data4);
                            flag=1;
                            return res.status(200).send({data:i});
                        }
                    }       
                }
                if(flag==0){
                    // console.log(flag)
                    data3.Notification.push(Notification)
                    const data  = await LoginModel.updateOne({_id:req.body.id},{Notification:data3.Notification})
                    // console.log
                    res.status(200).send({data:"add notification"})

                }
            }
            else{

                
}
}
}catch(error){
    console.log(error.message)
        res.status(400).send("error")
    }

}
export default addNotification