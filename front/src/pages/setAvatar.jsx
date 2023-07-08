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
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    async function checkAvatar() {
      if (!localStorage.getItem("talkie-user")) {
        navigate("/login");
      } else {
        const user = await JSON.parse(localStorage.getItem("talkie-user"));
        if (user.isAvatarImageSet) {
          navigate("/");
        }
      }
    }

    checkAvatar();
  }, []);

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
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fileDataURL == "") {
      toast.error("You have to choose a picture", toastOptions);
    } else {
      const userLS = await JSON.parse(localStorage.getItem("talkie-user"));
      const { data } = await axios.post(`${setAvatarRoute}/${userLS._id}`, {
        image: fileDataURL,
      });

      userLS.isAvatarImageSet = true;
      userLS.avatarImage = fileDataURL;
      localStorage.setItem("talkie-user", JSON.stringify(userLS));
      navigate("/");
    }
  };

  return (
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <ToastContainer />
    <section className="mb-10">
    <div className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl">
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
          <div className="container z-10">
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                <h1 className="mt-12 mb-2 text-white">Talkie!</h1>
                <p className="text-white">Connect all the world and meet new cultures and share yours.</p>
              </div>
            </div>
          </div>
        </div>
    <div className="container">
      <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
        <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
          <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
              <h5>Set Profile Pic</h5>
              <p className="mt-4 mb-0 leading-normal text-sm">
                Set a profile picture to make yourself more knowen
              </p>
            </div>
            
            <div className="flex-auto px-6">
            <form>
            <div className="mb-4">
              <input
                type={"file"}
                accept="img/png, image/jpeg, image/jpg"
                onChange={imageHandler}
                className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
              />
              </div>
              <div className="mb-4">
              {fileDataURL ? (
                <div className="img-preview-wrapper">
                  {<img src={fileDataURL} alt="preview" className="w-full shadow-soft-sm rounded-xl"/>}
                </div>
              ) : null}
                </div>
              <button type="submit" onClick={(event) => handleSubmit(event)} className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">
                Submit
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <footer className="py-12">
      <div className="container">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Members </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> About Us </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Sign UP </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Contact US </a>
            
          </div>
          
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
            <p className="mb-0 text-slate-400">
              Copyright ©2023 Wise Code.
            </p>
          </div>
        </div>
      </div>
    </footer> 
    </main>
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
