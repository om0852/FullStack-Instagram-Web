import mongoose from 'mongoose';
const LoginSchema = new mongoose.Schema({
Email:{
    type:String,
    require:true,
    unqiue:true
},
Password:{
type:String,
require:"true",
},
FullName:{
    type:String,
},
UserName:{
    type:String,
    require:true
},
AccountType:{
    type:String
},
CreatedDate:{
    type:Date
},
AuthToken:{
    type:String
},
Followed:{
    type:[Object]
},
Following:{
    type:[Object]
},
Notification:{
    type:[Object]
},
ProfilePhoto:{
    type:String
},
RequestedFollower:{
    type:[Object]
}

})

const LoginModel = mongoose.model('LoginDetail',LoginSchema);

export default LoginModel