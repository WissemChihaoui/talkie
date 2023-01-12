import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { setAvatarRoute } from "../utils/APIRoutes";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function SetAvatar() {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState("");
  const toastOptions = {
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover: true,
    draggable: true,
    theme:"dark",
};

  useEffect(() => {
    async function checkAvatar (){
        if(!localStorage.getItem("talkie-user")){
            navigate("/login");
        }else{
            const user = await JSON.parse(localStorage.getItem("talkie-user"));
            if(user.isAvatarImageSet){
                navigate("/")
            }
        }
    }
        
     checkAvatar();   
    
    
  },[]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
          
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  console.log(fileDataURL)

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(fileDataURL==""){
        toast.error("You have to choose a picture", toastOptions);
    }else{
        const userLS = await JSON.parse(localStorage.getItem("talkie-user"));
        const {data} = await axios.post(`${setAvatarRoute}/${userLS._id}`,{
            image: fileDataURL,
        });
    
        
            userLS.isAvatarImageSet = true;
            userLS.avatarImage = fileDataURL;
            localStorage.setItem("talkie-user",JSON.stringify(userLS));
            navigate('/')
        
    }
    
  }

  return (
    <>
      <ToastContainer />
      <Container>
        <form>
          <div className="brand">
            
            <h1>Pick your profile picture</h1>
            </div>
            <input
              type={"file"}
              accept="img/png, image/jpeg, image/jpg"
              onChange={imageHandler}
              className="custom-file-input"
            />
            {fileDataURL ? (
              <div className="img-preview-wrapper">
                {<img src={fileDataURL} alt="preview" />}
              </div>
            ) : null}
          
          <button type="submit" onClick={(event)=>handleSubmit(event)}>Submit</button>
        </form>
      </Container>
    </>
  );
}
const Container = styled.div`
height:100vh;
width:auto;
display:flex;
flex-direction: column; 
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
color:white;

.brand{
    display:flex;
    
    gap:1rem;
    flex-direction : column;
    align-items:center;
    justify-content: center;
    img{
        width:125px;
    }
    h1{
        color:white;
        text-transform:uppercase;
    }
    }
    form{
        display:flex;
        flex-direction:column;
        gap:2rem;
        align-items:center;
        
        border-radius: 2rem;
        

        input[type="file" i] {
            visibilty:hidden;
            text-overflow:none;
        }
        .custom-file-input::-webkit-file-upload-button {
            visibility: hidden;
          }
          .custom-file-input::before {
            content: 'Select Image';
            display: flex;
            justify-content:center;
            background: linear-gradient(top, #f9f9f9, #e3e3e3);
            border: 1px solid #999;
            border-radius: 3px;
            padding: 5px 8px;
            outline: none;
            white-space: nowrap;
            -webkit-user-select: none;
            cursor: pointer;
            
            font-weight: 700;
            font-size: 10pt;
          }
          .custom-file-input:active::before {
            background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
          }

        .img-preview-wrapper{
            img{
                width:250px;
                border-radius:12px;
            }
        }
        button{
            background-color : #997af0;
            color: white;
            padding : 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff;
            }
        }
        span{
            color:white;
            text-transform: uppercase;
            text-align:center;
            a{
                color: #4e0eff;
                text-transform: none;
                font-weight: bold;
                text-decoration:none;
                font-size:20px;
            }
        }
    }
    }
.avatars{
    display:flex;
    gap:1rem;
    flex-direction:column;
    align-items:center;
    .defaultOption{
        display:flex;
        justify-items:center;
        gap:1rem;
    }
    .setPic{
        margin-top:3rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:1rem;

        label{
            text-transform:uppercase;
            font-weight:bold;
        }
       
        
    }
    button{
        background-color : #997af0;
        color: white;
        padding : 1rem 2rem;
        margin-top:5px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover{
            background-color: #4e0eff;
        }
    }
}
`;
export default SetAvatar;
