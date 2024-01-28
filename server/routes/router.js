import express from 'express';
import reelmodel from '../modules/reelModule.js';
import LoginModel from '../modules/LoginModel.js';

import setLikecount from '../route/setlikes.js'
import AddReelRoute from '../route/AddReelRoute.js'
import AddComment from '../route/AddComment.js'
import getPostdata from '../route/getPostdata.js';
import getPostuserdata from '../route/getPostuserdata.js';
import getSinglePostData from '../route/getSinglePostData.js';
import SignupRoute from '../route/SignupRoute.js';
import LoginRoute from '../route/LoginRoute.js';
import CheckUserName from '../route/CheckUserName.js';
import UserDetail from '../route/UserDetail.js';
import { UpdateProfile } from '../route/UpdateProfile.js';
import getLoginUser from '../route/getLoginUser.js';
import setFollowuser from '../route/setFollowuser.js';
import addNotification from '../route/addNotification.js';
import getSingleUser from '../route/getSingleUser.js';
import setAcceptdata from '../route/setAcceptdata.js';
import AddStory from '../route/AddStory.js';
import getStoryData from '../route/getStoryData.js';
import getSingleStoryData from '../route/getSingleStoryData.js';
const router = express.Router();
router.post('/add/reel_post',AddReelRoute);
router.post('/set/likes',setLikecount);
router.get('/get/reel_post',getPostdata);
router.post('/get/postuserdata',getPostuserdata);
router.post('/add/comment',AddComment);
router.post('/get/comment_post',getSinglePostData);
router.post('/account/signup',SignupRoute);
router.post('/account/login',LoginRoute);
router.post('/checker/username',CheckUserName);
router.post('/checker/userdetail',UserDetail);
router.post('/account/update/userprofileimg',UpdateProfile);
router.get('/account/alluser',getLoginUser);
router.post('/account/addFollower',setFollowuser);
router.post('/account/addNotification',addNotification);
router.post('/get/SingleUser',getSingleUser);
router.post('/add/StoryData',AddStory);
router.post('/set/Acceptdata',setAcceptdata);
router.get('/get/StoryData:username',getStoryData);
router.get('/get/SingleStoryData:Email',getSingleStoryData);
router.get('/get',async(req,res)=>{
    const data3 = await LoginModel.find({Notification: { $elemMatch: { $or: [{ UserName: "omss" ,Messagetype:"requested accepted"}]} } })
res.send(data3)
});

export default router 