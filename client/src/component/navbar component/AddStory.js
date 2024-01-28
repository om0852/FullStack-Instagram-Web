import React, { useState } from "react";
import "./navbar_component.css";
import cloud_upload from "../../img/cloud-upload.webp";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ClearIcon from "@mui/icons-material/Clear";
import { useGlobalContext } from "../../context/exit";
import { AddStoryData } from "../../api";
import Loader from "../Loader";
function AddStory() {
  const [defaultimg,setdefaultimg]= useState(cloud_upload);

  const [botimg, setimg] = useState(null);
  let ii;
  const [oldimg, setoldimg] = useState(null);
  const [uploadingimg, setuploadingimg] = useState("");
  const [uploadedimg, setuploadedimg] = useState("");
  const [loading, setloading] = useState("");
  const [uploadedstorydata, setuploadstorydata] = useState({
    PostUrl: "",
    UserName: "",
    UserId: "",
    ProfilePhoto: "",
  });
  const { setaddStorystate, Userdata } = useGlobalContext();

  const getimg = (e) => {
    const file = e.target.files[0];
    if (file.size >= 10488580) {
      return alert("max file size is 1mb");
    } else {
      setimg(file);
      ii = file;
      console.log(ii);
      console.log(file);
      setoldimg(URL.createObjectURL(file));
      console.log(oldimg);
      signupfun();
    }
  };
  const signupfun = async () => {
    setloading(true);
    const url = await uploadimgfun(botimg);
   
    setuploadedimg(url.secure_url);
    setloading(false);
    setuploadstorydata({
      PostUrl: url.secure_url,
      UserName: Userdata.UserName,
      UserId: Userdata._id,
      ProfilePhoto: Userdata.ProfilePhoto,
    });
  };
  const uploadimgfun = async () => {
    const productdata = new FormData();
    console.log(botimg);
    productdata.append("file", ii);
    productdata.append("upload_preset", "iy4q8gfi");
    try {
      setuploadingimg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dlk6gm0px/image/upload",
        {
          method: "post",
          body: productdata,
        }
      );
      const urlproductdata = await res.json();
      console.log(urlproductdata);
      setuploadingimg(false);
      return urlproductdata;
    } catch (err) {
      console.log("error occur");
    }
  };
  const handlestorydata = async (e) => {
    e.preventDefault();
    if(uploadedstorydata.PostUrl){

      const data = await AddStoryData(uploadedstorydata);
      setaddStorystate(false);
    }
    else{
      alert("select image first")
    }
  };

  return (
    <div className="add-reel-container">
      <p
        className="exit-icon"
        style={{ color: "white" }}
        onClick={(e) => {
          setaddStorystate(false);
        }}
      >
        <ClearIcon />
      </p>
      <div className="addpost-main">
        <div className="reel-detail-container">
          <div
            className="add-reel-section"
            style={{ backgroundImage: `url(${oldimg || defaultimg})` }}
          >
            {loading && <Loader width1={20} height1={20} style={{ zIndex: 10000 }} />}
            <input
              // onClick={handlesenddata}
              type="file"
              onChange={getimg}
              accept="image/*, video/*"
              id="file"
              className="upload-reel-post-btn"
            />
            <label className="add-reel-label" for="file">
              <AddAPhotoIcon /> Choose Post Or Reel
            </label>
          </div>
        </div>
        <div className="story-share-btn">
      {uploadedstorydata.PostUrl &&  <button onClick={handlestorydata}>share</button>}
        </div>
      </div>
    </div>
  );
}

export default AddStory;
