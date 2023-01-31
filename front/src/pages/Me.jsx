import React, {useState, useEffect} from 'react'
import NavbarA from '../components/NavBar/NavBarA'
import {BiPencil, BiImageAdd} from 'react-icons/bi'
import {AiOutlineLogout} from 'react-icons/ai'
import axios from 'axios'
import { getUserRoute } from '../utils/APIRoutes'

const User = () => {
    const userData = JSON.parse(localStorage.getItem("talkie-user"));

    const [user, setUser] = useState(userData._id)
    


    
    let userId = userData._id
   
    
    useEffect(()=>{
        const getUserById = async () =>{
            const {data} =await axios.get(`${getUserRoute}/${userId}`)
            
        if(data == undefined){
            alert("Cannot Find the user")
        }else{
            setUser(data.userDataId)
           
        }
        }
        getUserById();
        
    },[])
   
  return (

    <>
        <NavbarA />
        <section className='pt-20 flex gap-10 justify-center'>  
            <div className='mx-10 flex flex-col  justify-center items-center md:flex-row bg-gray-900 p-5'>
                <img  src={user.avatarImage} alt={user.username} className="w-32 h-32 rounded-full md:rounded md:h-auto md:w-40 md:m-6"/>
                <div className='flex flex-col gap-4 items-center md:items-start'>
                    <div className='flex justify-center items-center flex-col md:flex-row'>
                    <label className="text-white text-2xl font-bold">{user.username} Chihaoui</label>
<div className='flex flex-row bg-gray-900 h-min rounded-sm p-4 m-6 gap-3 '>
                    <div className='text-white flex items-center bg-1 gap-2 px-3 text-xl py-2 rounded-sm cursor-pointer ease-in-out duration-100 hover:bg-slate-600'>
                        <BiPencil className='cursor-pointer'/>
                        <label className='hidden cursor-pointer'>Add Friend</label>
                    </div>
                    <div className='text-white flex items-center bg-1 gap-2 px-3 rounded-sm cursor-pointer ease-in-out duration-100 hover:bg-slate-600'>
                        <BiImageAdd className='cursor-pointer' />
                        <label className='hidden cursor-pointer'>Send Message</label>
                    </div>
                    <div className='text-white flex items-center bg-1 gap-2 px-3 rounded-sm cursor-pointer ease-in-out duration-100 hover:bg-slate-600'>
                        <AiOutlineLogout className='cursor-pointer' />
                        <label className='hidden cursor-pointer'>Report User</label>
                    </div>
                </div>
                    </div>
                    <label className='text-sm font-bold text-gray-500'>About Me:</label>
                    <p className='w-80 text-sm text-gray-200  text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae quis, impedit deleniti culpa, temporibus in aperiam quasi tenetur labore voluptatum doloremque magnam aliquam similique omnis tempora. Voluptatum, eos animi?</p>
                </div>
                
            </div>
        </section>
        <hr className='mx-10 '/>
        <section className='flex items-center flex-col'>
            <h1 className='text-white text-2xl m-5'>Pictures</h1>
            <div className="flex flex-wrap gap-5 flex items-center justify-center">
                <div className='border w-40  rounded '>
                    <img src={user.avatarImage} className="w-full"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default User