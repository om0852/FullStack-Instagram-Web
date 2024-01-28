import mongoose from 'mongoose';
const BirthdaySchema = new mongoose.Schema({
Email:{
    type:String,
    require:true,
    unqiue:true
},
Birthdate:{
type:String,
}
})

const BirthdayModel = mongoose.model('BirthdayDetail',BirthdaySchema);

export default BirthdayModel