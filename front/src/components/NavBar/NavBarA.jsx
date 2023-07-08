import React, { useState, useRef, useEffect } from "react";
import logo from "../../logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  IconButton,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
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

 
  return (
    <nav className="relative bg-white flex flex-wrap items-center justify-between px-2 py-2 mx-6 my-2 transition-all shadow-none duration-250 ease-soft-in rounded-2xl ">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Talkie" className="w-10 h-12" />
        <label className="mb-0 font-bold capitalize">Talkie!</label>
      </Link>
      <div className="flex flex-row items-center gap-5 ">
        <Popover placement="bottom-end">
          <PopoverHandler>
            <IconButton variant="text" color="blue-gray">
              <BellIcon className="h-4 w-4" />
            </IconButton>
          </PopoverHandler>
          <PopoverContent>
            
            <div className="flex flex-col gap-2 max-w-[200px]">
              <span>This is a very beautiful popover, show some love.</span>
              <span>This is a very beautiful popover, show some love.</span>
              <span>This is a very beautiful popover, show some love.</span>
            </div>

          </PopoverContent>
        </Popover>
        <Link to={"/me"} className="cursor-pointer hidden lg:block">
          <span className="cursor-pointer hover:text-slate-700  duration-100 ease-in-out mx-2">
            {userData.username}
          </span>
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
