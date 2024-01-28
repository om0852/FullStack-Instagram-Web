import {Server} from 'socket.io'
const io = new Server(9000,{
    cors:{
        origin:"http://localhost:3000"
    }
})

let productdata;
let singlepostdata;
let socketId;
let users = [];



const addNewUser = (UserName,socketId)=>{
!users.some(users=>users.UserName === UserName ) && users.push({UserName,socketId})
console.log(users);
}
const removeUser = (socketId)=>{
    users = users.filter((users)=>users.socketId !== socketId);
    }    

    const getUser  = (UserName)=>{
        return users.find(users=>users.UserName === UserName)
    }
io.on("connection",(socket)=>{


socket.on("setData",({data})=>{
    productdata=data;
// console.log(data);
io.emit("getData",{data:data})
})
socket.on("addNewUser",(newUser)=>{
addNewUser(newUser,socket.id);

})

socket.on("sendNotification",({senderName,receiverName,Notification,Userdata})=>{
    try{
        console.log("Notification")
        console.log(Notification)
    const id  = getUser(receiverName)
    console.log(id)
        io.to(id.socketId).emit("getNotification",{
            senderData:Userdata,
            Notification:Notification,
        })
    }
    catch(error){
        console.log("user is offile")
    }

})

socket.on("setSinglePostData",(data)=>{
    singlepostdata= data;
    // console.log(singlepostdata);
    io.emit("getSinglePostData",{data:data});
})
socket.on("disconnect",()=>{
    removeUser(socket.id);
});
});