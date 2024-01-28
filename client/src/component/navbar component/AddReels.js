import React, { useState } from "react";
import "./navbar_component.css";
import cloud_upload from "../../img/cloud-upload.webp";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ClearIcon from "@mui/icons-material/Clear";
import { useGlobalContext } from "../../context/exit";
import { addPost } from "../../api";
import Loader from "../Loader";
function AddReels() {

  const [botimg,setimg] = useState(null);
  let ii;
  const [oldimg,setoldimg]= useState(null);
  const [defaultimg,setdefaultimg]= useState(cloud_upload);
  // const [oldimg, setoldimg] = useState("");
  const [uploadingimg,setuploadingimg] = useState('');
  const [uploadedimg,setuploadedimg] = useState('');
  const [imagetype, setimagetype] = useState("");
  const [loading,setloading] = useState("")
  const { setcreateexit,uploaded,setuploaded,postdata,setpostdata,Userdata} = useGlobalContext();
  const [data, setdata] = useState({
    user_email:Userdata.UserName,
    caption: "",
    location: "",
    url: "",
    likes: 0,
    timeline: new Date(),
    imagetype:"",
    ProfilePhoto:""
  });
  
  const handlesetdata = (e) => {
// console.log(uploadedimg)

    setdata({
      ...data,
      imagetype:imagetype,
      UserName:Userdata.UserName,
      url: uploadedimg,
      likeuser:[],
      user_email:Userdata.Email,
      timeline: new Date(),
      [e.target.name]: e.target.value,
      ProfilePhoto:Userdata.ProfilePhoto
    });
  };
  const handlesenddata = () => {
    addPost(data);
    setuploaded(!uploaded)
    console.log(uploaded)
    setcreateexit(false);
    window.location.reload();
  };
  const getimg = (e)=>{
    const file = e.target.files[0];
    if(file.size>=10488580){
        return alert("max file size is 1mb");
    }
    else{
        setimg(file);
        ii=file;
        console.log(ii);
        console.log(file)
        setoldimg(URL.createObjectURL(file))
        console.log(oldimg)
        signupfun()
    }
}
const signupfun =async ()=>{
          setloading(true);
            const url = await uploadimgfun(botimg);
            console.log("link")
            console.log(url.secure_url)
            setuploadedimg(url.secure_url)
            setloading(false);
    
}
    const uploadimgfun = async()=>{
        // signupfun();
const productdata = new FormData();
console.log(botimg)
productdata.append('file',ii);
productdata.append('upload_preset','iy4q8gfi');
try{
    setuploadingimg(true)
    let res = await fetch("https://api.cloudinary.com/v1_1/dlk6gm0px/image/upload",{
        method:"post",
        body:productdata
    })
    const urlproductdata = await res.json();
    console.log(urlproductdata)
    setuploadingimg(false)
return urlproductdata
}
catch(err){
    console.log("error occur");
 
    }
}
  return (
    <div className="add-reel-container">
      <p
        className="exit-icon"
        style={{ color: "white" }}
        onClick={(e) => {
          setcreateexit(false);
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
            <input
            // onClick={handlesenddata}
            type="file"
            onChange={getimg}
            
            accept="image/*, video/*"
            id="file"
            className="upload-reel-post-btn"
            />
          {loading && <Loader width1={20} height1={20} style={{zIndex:10000}}/>}
            <label className="add-reel-label" for="file">
              <AddAPhotoIcon /> Choose Post Or Reel
            </label>
          </div>
          { uploadedimg&&
            <div className="reel-detail">
              <div className="user-profile">
                <div className="user-profile-img" style={{backgroundImage:`url(${Userdata.ProfilePhoto})`}}></div> <p className="user-profile-username">{Userdata.UserName}</p>
                <button onClick={handlesenddata} type="submit"> share</button>
              </div>
              <textarea
                onChange={handlesetdata}
                name="caption"
                value={data.caption}
                className="input-caption"
                placeholder="enter caption"
              ></textarea>
              <input
                onChange={handlesetdata}
                name="location"
                value={data.location}
                type="text"
                className="input-location"
                placeholder="enter loaction"
              ></input>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default AddReels;
