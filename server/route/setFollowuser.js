import LoginModel from "../modules/LoginModel.js";
import StoryModel from "../modules/StoryModel.js";

const setFollowuser = async (req, res) => {
  try {
    console.log(req.body);
    const {
      state,
      UserName,
      followindex,
      FollowerId,
      FollowingId,
      index,
      ProfilePhoto,
      Messagetype,
    } = req.body;
    console.log(index);
    console.log(followindex);
    const data = await LoginModel.findOne({ _id: FollowingId });
    const data1 = await LoginModel.findOne({ _id: FollowerId });
    const data3 = await LoginModel.find(
      { _id: data._id },
      { comment: { $elemMatch: { $or: [{ UserName: UserName }] } } }
    );
    if (data.AccountType == "private") {
      console.log("provate");
      if (state == true) {
        for (let i = 0; i < data1.Following.length; i++) {
          // console.log(data1.Following.UserName == data.UserName);
          if (data1.Following[i].UserName == data.UserName) {
            console.log("delete")
            delete data1.Following[i];
            const arrdata1 = data1.Following.filter((el) => el);
            const resultdata1 = await LoginModel.updateOne(
              { _id: data1.id },
              { Following: arrdata1 }
            );
            console.log(resultdata1)
          }
        }
        delete data.Notification[index];
        const arr = data.Notification.filter((el) => el);
        delete data.Followed[followindex];
        const arr1 = data.Followed.filter((el) => el);
        const result1 = await LoginModel.updateOne(
          { _id: data._id },
          { Followed: arr1 }
        );
        const result = await LoginModel.updateOne(
          { _id: data._id },
          { Notification: arr }
        );
        // console.log(result)
        const data11 = await LoginModel.findOne({ _id: FollowingId });
        console.log(data11)
        const data12 = await  StoryModel.updateOne({UserId:data11._id},{Followed:data11.Followed});
       
        console.log(data12)
        return res.status(200).send("unfollow");
      } else {
        data.Notification.push({
          FollowerId,
          UserName,
          ProfilePhoto,
          Messagetype: "requested you for following",
        });
        const result = await LoginModel.updateOne(
          { _id: data._id },
          { Notification: data.Notification }
        );
        // console.log(result)\
 

        console.log(data12)
        return res.status(200).send("follow");
      }
    } else {
        console.log("public")

      if (state == true) {
        delete data.Followed[followindex];
        const arr = data.Followed.filter((el) => el);
        const result1 = await LoginModel.updateOne(
          { _id: data._id },
          { Followed: arr }
        );
        delete data.Notification[index];
        for (let i = 0; i < data1.Following.length; i++) {
          if (data1.Following[i].UserName == data.UserName) {
            console.log("match")
            delete data1.Following[i];
            const arrdata1 = data1.Following.filter((el) => el);
            const resultdata1 = await LoginModel.updateOne(
              { _id: data1.id },
              { Following: arrdata1 }
            );
            break;
          } 
        }
        const arr1 = data.Notification.filter((el) => el);
        const result = await LoginModel.updateOne(
          { _id: data._id },
          { Notification: arr1 }
        );
        // console.log(result)
        const data11 = await LoginModel.findOne({ _id: FollowingId });
        const data12 = await  StoryModel.updateOne({UserId:data11._id},{Followed:data11.Followed});
       
        console.log(data12)
        return res.status(200).send("unfollow");
      } else {
    
            console.log("udate")
            data1.Following.push({ FollowerId:data._id, UserName:data.UserName, ProfilePhoto:data.ProfilePhoto });

            const resultdata1 = await LoginModel.updateOne(
              { _id: data1.id },
              { Following: data1.Following }
            );
            // console.log(resultdata1)
          
        data.Notification.push({
          FollowerId,
          UserName,
          ProfilePhoto,
          Messagetype: "started following you",
        });
        const result1 = await LoginModel.updateOne(
          { _id: data._id },
          { Notification: data.Notification }
        );
        data.Followed.push({ FollowerId, UserName, ProfilePhoto });
        const result = await LoginModel.updateOne(
          { _id: data._id },
          { Followed: data.Followed }
        );
        // console.log(result)
        const data11 = await LoginModel.findOne({ _id: FollowingId });
       
        const data12 = await  StoryModel.updateOne({UserId:data11._id},{Followed:data11.Followed});
        console.log(data12)

        return res.status(200).send("follow");
      }

    }
  }
   catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default setFollowuser;
