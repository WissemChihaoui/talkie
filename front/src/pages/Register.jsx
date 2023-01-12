import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios" 
import logo from "../logo/logo.png"


import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { registerRoute } from '../utils/APIRoutes';

function Register  () {
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
    <>
    
    <ToastContainer />
        <FormContainer>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div className='brand'>
                    <img src={logo} alt='Logo'/>
                    <h1>Talkie!</h1>
                </div>
                <input type="text" placeholder="Username" name="username" onChange={(e)=> handleChange(e)} />
                <input type="email" placeholder="E-mail" name="email" onChange={(e)=> handleChange(e)} />
                <input type="password" placeholder="Password" name="password" onChange={(e)=> handleChange(e)} />
                <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={(e)=> handleChange(e)} />
                <button type='submit'>
                    Register
                </button>
                <span>Already have an account ? <Link to="/login">Login</Link></span>
            </form>
        </FormContainer>
        
    </>
  )
}

const FormContainer = styled.div`
height:100vh;
width:auto;
display:flex;
flex-direction: column; 
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
padding-bottom:20px;
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
    
    border-radius: 2rem;
    
    input{
        background-color: transparent;
        padding: 1rem;
        border:0.1rem solid #4e0eff;
        border-radius : 0.4rem;
        color:white;
        width:100%
        font-size: 1rem;
        &:focus{
            border: 0.1rem solid #997af0;
            outline: none;
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
`;


export default Register