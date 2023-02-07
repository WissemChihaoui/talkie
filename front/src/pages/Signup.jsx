import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios" 



import 'react-toastify/dist/ReactToastify.css';

import { registerRoute } from '../utils/APIRoutes';

function Signup () {
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const toastOptions = {
                position:"bottom-right",
                autoClose:8000,
                pauseOnHover: true,
                draggable: true,
                theme:"dark",
    }
    useEffect(()=>{
        if(localStorage.getItem('talkie-user')){
          navigate('/');
        }
      },[])
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(handleValidation()){
            
            const { password, username, email } = values;
            const {data} = await axios.post(registerRoute, {
                username,
                email,
                password,
            });
            if(data.status === false){
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem('talkie-user',JSON.stringify(data.user))
                navigate("/set-avatar");
            }
        };
    };

    const handleChange = (event) =>{
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if(password !== confirmPassword){
            toast.error("Password is not matching.",toastOptions);
            return false;
        }else if (username.length<4){
            toast.error("Username should be greater than 4 characters.",toastOptions);
            return false;
        }
        else if (password.length<8){
            toast.error("Password should be at least with 8 characters.",toastOptions);
            return false
        }
        else if (email===""){
            toast.error("E-mail is required.",toastOptions);
            return false
        }
        else{
            return true
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
                  <h5>Register</h5>
                  <p className="mt-4 mb-0 leading-normal text-sm">Create an account and be part of Talkie!</p>

                </div>
                
                <div className="flex-auto p-6">
                  <form role="form text-left" onSubmit={(event)=>handleSubmit(event)}>
                    <div className="mb-4">
                      <input onChange={(e)=> handleChange(e)} type="text" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholder="Username" name="username" aria-label="Username" aria-describedby="email-addon" />
                    </div>
                    <div className="mb-4">
                      <input onChange={(e)=> handleChange(e)} type="email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholder="Email" aria-label="Email" name="email" aria-describedby="email-addon" />
                    </div>
                    <div className="mb-4">
                      <input onChange={(e)=> handleChange(e)} type="password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholder="Password" aria-label="Password" name="password" aria-describedby="password-addon" />
                    </div>
                    <div className="mb-4">
                      <input onChange={(e)=> handleChange(e)} type="password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholder="Confirm Password" name="confirmPassword" aria-label="Confirm Password" aria-describedby="password-addon" />
                    </div>
                
                    <div className="text-center">
                      <button type="submit" className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign up</button>
                    </div>
                    <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <a href="../pages/sign-in.html" className="font-bold text-slate-700">Sign in</a></p>
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
  )
}

export default Signup