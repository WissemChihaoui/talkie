import React, { useState, useRef, useEffect } from "react";
import logo from "../../logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const NavbarA = () => {

  const userData = JSON.parse(localStorage.getItem("talkie-user"));
  const [menu, setMenu] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="relative bg-white flex flex-wrap items-center justify-between px-2 py-2 mx-6 my-2 transition-all shadow-none duration-250 ease-soft-in rounded-2xl ">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Talkie" className="w-10 h-12" />
        <label className="mb-0 font-bold capitalize">Talkie!</label>
      </Link>
      <div className="flex flex-row items-center gap-5 ">
        
        <Link to={'/me'} className="cursor-pointer hidden lg:block">
          <span className="cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2">{userData.username}</span>
          <img
            src={userData.avatarImage}
            alt="profile"
            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
           
          />
          
        </Link>
      </div>
     
    </nav>
  );
};

export default NavbarA;
