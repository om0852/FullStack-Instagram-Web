import mongoose from 'mongoose';
const ReelSchema = new mongoose.Schema({
    user_email:{
        type:String,
require:true
    },
    user_name:{
        type:String,
require:true
    },
    UserName:{
        type:String
    },
    ProfilePhoto:{
        type:String
    },
    caption:{
        type:String
    },
    likes:{
        type:String
    },
    comment:{
        type:[Object]
    },
    likeuser:{
        type:[String]
    },
    location:{
        type:String
    },

    url:{
        type:String,
        require:true
    },
    upload_time:{
            type:Date
        }    ,
        imagetype:{
            type:String,
            require:true
        }
})
const reelmodel = mongoose.model('reel_post',ReelSchema);

export default reelmodel