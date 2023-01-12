import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios" 
import logo from "../logo/logo.png"

import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { loginRoute } from '../utils/APIRoutes';

function Login  () {
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
    <>
    
    <ToastContainer />
        <FormContainer>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div className='brand'>
                    <img src={logo} alt='Logo'/>
                    <h1>Talkie!</h1>
                </div>
                <input type="text" placeholder="Username" name="username" onChange={(e)=> handleChange(e)} min="3"/>
                <input type="password" placeholder="Password" name="password" onChange={(e)=> handleChange(e)} />
                <button type='submit'>
                    Login
                </button>
                <span>Don't have an account ? <Link to="/register">Register</Link></span>
            </form>
        </FormContainer>
        
    </>
  )
}

const FormContainer = styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction: column; 
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
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


export default Login