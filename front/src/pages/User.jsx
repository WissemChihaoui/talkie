import React, {useState, useEffect} from 'react'
import NavbarA from '../components/NavBar/NavBarA'
import {BsFillPersonPlusFill, BsFillChatFill} from 'react-icons/bs'
import {MdReport} from 'react-icons/md'
import axios from 'axios'
import { getUserRoute } from '../utils/APIRoutes'

const User = () => {
    const userData = JSON.parse(localStorage.getItem("talkie-user"));
    const queryString = window.location.search;
    const [user, setUser] = useState([])
    
    const urlParams =new URLSearchParams(queryString)
    const userName = urlParams.get('name')
    
    useEffect(()=>{
        const {data} = axios.get(`${getUserRoute}/${userName}`)
        if(data){
            setUser(data.userData)
            console.log(User)
        }
    })
   
  return (

    <>
        <NavbarA />
        <section className='pt-20 flex gap-10 justify-center'>  
            <div className='mx-10 flex flex-row gap-20 '>
                <img  src={userData.avatarImage} alt={userData.username} className="w-40 rounded-sm"/>
                <div className='flex flex-col gap-4'>
                    <lable className="text-white text-2xl font-bold">{userData.username}</lable>
                    <label className='text-2xl font-bold text-gray-500'>About Me:</label>
                    <p className='w-80 text-gray-200 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae quis, impedit deleniti culpa, temporibus in aperiam quasi tenetur labore voluptatum doloremque magnam aliquam similique omnis tempora. Voluptatum, eos animi?</p>
                </div>
                <div className='flex flex-col bg-slate-500 h-min rounded-sm p-4 gap-3 '>
                    <div className='text-white flex items-center bg-slate-800 gap-2 px-3 rounded-sm cursor-pointer ease-in-out duration-100 hover:bg-slate-600'>
                        <BsFillPersonPlusFill className='cursor-pointer'/>
                        <label className='cursor-pointer'>Add Friend</label>
                    </div>
                    <div className='text-white flex items-center bg-slate-800 gap-2 px-3 rounded-sm cursor-pointer ease-in-out duration-100 hover:bg-slate-600'>
                        <BsFillChatFill className='cursor-pointer' />
                        <label className='cursor-pointer'>Send Message</label>
                    </div>
                    <div className='text-white flex items-center bg-slate-800 gap-2 px-3 rounded-sm cursor-pointer ease-in-out duration-100 hover:bg-slate-600'>
                        <MdReport className='cursor-pointer' />
                        <label className='cursor-pointer'>Report User</label>
                    </div>
                </div>
            </div>
        </section>
        <hr className='m-10'/>
    </>
  )
}

export default User