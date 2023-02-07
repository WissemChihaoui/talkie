import React, {useState, useEffect} from 'react'
import Spline from '@splinetool/react-spline';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios" 
import logo from "../logo/logo.png"

import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

import { loginRoute } from '../utils/APIRoutes';
const Signin = () => {
  const navigate = useNavigate();
    const [values, setValues] = useState({
        username:"",
        
        password:"",
        
    });
    const toastOptions = {
                position:"bottom-right",
                autoClose:8000,
                pauseOnHover: true,
                draggable: true,
                theme:"dark",
    };

    useEffect(()=>{
      if(localStorage.getItem('talkie-user')){
        navigate('/');
      }
    },[])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(handleValidation()){
            
            const { password, username } = values;
            const {data} = await axios.post(loginRoute, {
                username,
                
                password,
            });
            if(data.status === false){
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem('talkie-user',JSON.stringify(data.user))
                navigate("/");
            }
            
        };
    };

    const handleChange = (event) =>{
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if(password === ""){
            toast.error("Username and Password are required",toastOptions);
            return false;
        }else if (username.length === ""){
            toast.error("Username and Password are required",toastOptions);
            return false;
        }
        
        else{
            return true
        }
    };

  return (
    <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
     <ToastContainer />
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
          <div className="container z-10">
            <div className="flex flex-wrap mt-0 -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                <div className="relative flex flex-col min-w-0  break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                    <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Welcome back</h3>
                    <p className="mb-0">Enter your email and password to sign in</p>
                  </div>
                  <div className="flex-auto p-6">
                    <form role="form" onSubmit={(event)=>handleSubmit(event)}>
                      <label className="mb-2 ml-1 font-bold text-xs text-slate-700">UserName</label>
                      <div className="mb-4">
                        <input type="text" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Username" name="username" onChange={(e)=> handleChange(e)} min="3" aria-describedby="email-addon" />
                      </div>
                      <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Password</label>
                      <div className="mb-4">
                        <input type="password"  placeholder="Password" name="password" onChange={(e)=> handleChange(e)} className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                      </div>
                      <div className="min-h-6 mb-0.5 block">
                        <Link className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700" htmlFor="rememberMe">Forgot Password or Username?</Link>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">Sign in</button>
                      </div>
                    </form>
                  </div>
                  <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                    <p className="mx-auto mb-6 leading-normal text-sm">
                      Don't have an account?
                      <a className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text"> <Link to="/register">Register</Link></a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                  <div className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10">
                  <Spline scene="https://prod.spline.design/xFzIGbs7H3SQcibp/scene.splinecode" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main> 
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
    </div>
  )
}

export default Signin