import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema({
    UserName:{
        type:String
    },
    PostUrl:{
        type:[Object]
    },
    UserId:{
        type:String
    },
    ProfilePhoto:{
        type:String
    },
    Followed:{
        type:[Object]
    }
})

const StoryModel = mongoose.model('storydetail',StorySchema);
export default StoryModel;