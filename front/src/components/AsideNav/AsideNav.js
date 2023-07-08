import React from 'react'
import { Link } from 'react-router-dom'
import { FiUsers, FiSettings, FiLogOut } from 'react-icons/fi'
import { BsChatSquare } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineWechat, AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
const AsideNav = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
      };
  return (
    <div className='bg-white py-4 px-6 rounded-6 w-1/5 h-[90vh]'>
        <div className='flex flex-col justify-between h-full'>
            <ul className='flex flex-col text-slate-500 font-semibold gap-6 text-[18px] w-max'>
                <li>
                    <Link to="/" className='flex items-center gap-4 cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2 '>
                        <AiOutlineHome />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/users" className='flex items-center gap-4 cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2 '>
                        <FiUsers />
                        Members
                    </Link>
                </li>
                <li>
                    <Link to="/groups" className='flex items-center gap-4 cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2 '>
                        <AiOutlineWechat />
                        Chat Groups
                    </Link>
                </li>
                <li>
                    <Link to="/chat" className='flex items-center gap-4 cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2 '>
                        <BsChatSquare />
                        Messages
                    </Link>
                </li>
                <li>
                    <Link to="/match" className='flex items-center gap-4 cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2 '>
                        <AiOutlineHeart />
                        Match
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-col gap-4'>
            <li>
                    <Link to="/settings" className='flex items-center gap-4 cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2 '>
                        <FiSettings />
                        Settings
                    </Link>
                </li>
                <li className='bg-red-600 p-2 rounded-[24px] text-white cursor-pointer hover:bg-red-500 'onClick={() => handleLogout()}>
                    <Link   className='flex items-center gap-4    duration-100 ease-in-out mx-2 '>
                        <FiLogOut />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AsideNav