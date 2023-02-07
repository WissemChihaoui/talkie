import React, { useState } from "react";
import logo from "../../logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const NavbarA = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("talkie-user"));
    const [menu, setMenu] = useState(false);
    const [navMenu, setNavMenu] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleNavMenu = () => {
        setNavMenu(!navMenu);
    };

    const toggleMenu = () => {
        setMenu(!menu);
    };
    return (
        
            <nav className="relative bg-gray-300 flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl ">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Talkie" className="w-10 h-12" />
                    <label className="mb-0 font-bold capitalize">Talkie!</label>
                </a>
                <div className="flex flex-row items-center gap-5 ">
                    <ul className="hidden lg:flex flex-row items-center text-slate-500 font-semibold gap-4">
                        <li className="cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2">
                           <a href="/">Members</a>
                        </li>
                        <li className="cursor-pointer hover:text-slate-700 duration-100 ease-in-out mx-2">
                            <a href="/groups">Chat Groups</a> 
                        </li>
                        <li className="cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2">
                            <a href="/messages">Messages</a>
                        </li>
                        <li className="cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2">
                            <a href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                    <div className="relative hidden lg:block">
                        <img
                            src={userData.avatarImage}
                            alt="profile"
                            className="w-10 h-10 rounded-full cursor-pointer"
                            onClick={() => toggleMenu()}
                        />
                        <div
                            className={
                                menu == false
                                    ? "hidden"
                                    : "relative flex items-center pr-2"
                            }
                        >
                            <ul dropdown-menu class="text-sm lg:shadow-soft-3xl duration-250 min-w-44  absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500  transition-all   lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                  
                  <li class="relative mb-2">
                    <a href="/me" class="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" >
                      <div class="flex py-1">
                        <div class="flex flex-col justify-center">
                          <h6 class="mb-1 font-normal leading-normal text-sm">Profile</h6>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="relative mb-2">
                    <a  href="/notification" class="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" >
                      <div class="flex py-1">
                        <div class="flex flex-col justify-center">
                          <h6 class="mb-1 font-normal leading-normal text-sm">Notifications</h6>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="relative mb-2">
                    <a  href="/settings" class="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" >
                      <div class="flex py-1">
                        <div class="flex flex-col justify-center">
                          <h6 class="mb-1 font-normal leading-normal text-sm">Settings</h6>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="relative mb-2">
                    <a  onClick={() => handleLogout()} class="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" >
                      <div class="flex py-1">
                        <div class="flex flex-col justify-center">
                          <h6 class="mb-1 font-normal leading-normal text-sm">Logout</h6>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                        </div>
                    </div>
                </div>
                <div className="relative lg:hidden">
                    <div
                        className="block  text-white text-2xl cursor-pointer"
                        onClick={() => handleNavMenu()}
                    >
                        <FaBars />
                    </div>
                    <div
                        className={
                            navMenu == false
                                ? "hidden"
                                : "block bg-gray-800 absolute dropdown-menu min-w-max  bg text-base z-50 float-left py-2 list-none top-8 text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0"
                        }
                    >
                        <a
                            href="/me"
                            className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Profile
                        </a>
                        <a href="/notification" className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Notifications
                        </a>
                        <a href="/settings" className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Settings
                        </a>
                        <a href="/" className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Members
                        </a>
                        <a href="/groups" className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Chat Groups
                        </a>
                        <a href="/messages" className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Messages
                        </a>
                        <a href="/contact-us" className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Contact us
                        </a>
                        <a href="/"className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center">
                            Members
                        </a>
                        <a
                            className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center cursor-pointer"
                            onClick={() => handleLogout()}
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
        
    );
};

export default NavbarA;
