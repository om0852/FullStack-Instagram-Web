import React,{useState} from 'react'
import { UserProfileimg } from '../../api';
import { useGlobalContext } from '../../context/exit';

function UpdateProfile() {
    const {setupdateprofilestate,setblur,Userdata,setUserdata}= useGlobalContext();
    let save;
    const [productdata,setproductdata]=useState("")
  const [botimg,setimg] = useState(null);
  const [oldimg,setoldimg]= useState(null);
  const [uploadedimg,setuploadedimg] = useState('');
  const [updatedimg,setupdatedimg] = useState(Userdata.ProfilePhoto)

    const getimg = async(e)=>{
        const file = e.target.files[0];
        if(file.size>=10488580){
            return alert("max file size is 1mb");
        }
        else{
            setimg(file);
            save=file;
            console.log(file)
            setoldimg(URL.createObjectURL(file))
            console.log(oldimg)
            signupfun()
        }
    }
    const signupfun =async ()=>{
        if(!save){
            return alert("upload img first")
        }
            else{
    
                alert("link")
                const url = await uploadimgfun(save);
            // alert(url.secure_url)
                // setuploadedimg(url.secure_url)
                setuploadedimg(url.secure_url)
               await setUserdata({...Userdata,ProfilePhoto:url.secure_url});
                UserProfileimg({Email:Userdata.Email,url:url.secure_url,UserName:Userdata.UserName})
            }
        
    }
        const uploadimgfun = async()=>{
            // signupfun();
            const productdata = new FormData();
    productdata.append('file',botimg);
    productdata.append('upload_preset','iy4q8gfi');
    try{
        // setuploadingimg(true)
        let res = await fetch("https://api.cloudinary.com/v1_1/dlk6gm0px/image/upload",{
            method:"post",
            body:productdata
        })
        const urlproductdata = await res.json();
        // setuploadingimg(false)
        console.log("done")
    return urlproductdata
    }
    catch(err){
        console.log("error occur");
     
        }
    }
  return (
    <>
      <div className='profile-update-container'>
      <div className='profile-update-section'>
        <h3 >Change Profile Photo</h3>
        <input type="file" onChange={getimg} id="profile-img"/>
        <h3>
        <label className='update-porfile-label'  for="profile-img">Update Photo</label>
        </h3>
        <h3>Remove Photo</h3>
        <h3 onClick={(e)=>{setupdateprofilestate(false); setblur(0)}}>Cancel</h3>
      </div>
      </div>
    </>
  )
}

export default UpdateProfile
