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
        
            <nav className="fixed flex flex-row w-full p-1 justify-around items-center bg-1">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Talkie" className="w-10 h-12" />
                    <label className="text-white font-bold text-2xl">Talkie!</label>
                </a>
                <div className="flex flex-row items-center gap-5 ">
                    <ul className="hidden md:flex flex-row items-center text-gray-300 gap-4">
                        <li className="cursor-pointer hover:text-gray-100 duration-100 ease-in-out">
                           <a href="/">Members</a>
                        </li>
                        <li className="cursor-pointer hover:text-gray-100 duration-100 ease-in-out">
                            <a href="/groups">Chat Groups</a> 
                        </li>
                        <li className="cursor-pointer hover:text-gray-100 duration-100 ease-in-out">
                            <a href="/messages">Messages</a>
                        </li>
                        <li className="cursor-pointer hover:text-gray-100 duration-100 ease-in-out">
                            <a href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                    <div className="relative hidden md:block">
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
                                    : "block absolute dropdown-menu min-w-max  bg text-base z-50 float-left py-2 list-none top-8 text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0 bg-gray-800"
                            }
                        >
                            <a
                                href="/me"
                                className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
                            >
                                Profile
                            </a>
                            <a
                                href="/notification"
                                className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
                            >
                                Notifications
                            </a>
                            <a
                                href="/settings"
                                className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
                            >
                                Settings
                            </a>
                            <a
                                onClick={() => handleLogout()}
                                className="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative md:hidden">
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
