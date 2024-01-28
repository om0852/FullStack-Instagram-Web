import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
// console.log(USERNAME);
// console.log(PASSWORD)
const connection = async()=>{
    try{
await mongoose.connect(`mongodb://127.0.0.1:27017/instagram`)
console.log("databse connected")
    }catch(error){
console.log(error.message)
    }
}

export default connection