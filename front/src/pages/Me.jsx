import React, { useState, useEffect } from "react";
import NavbarA from "../components/NavBar/NavBarA";
import { FaUser, FaCog, FaComments, FaPen, FaEye } from "react-icons/fa";
import axios from "axios";
import Spline from "@splinetool/react-spline";
import { getUserRoute } from "../utils/APIRoutes";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import FriendsList from "../components/FriendsList/FriendsList";

const User = () => {
  const userData = JSON.parse(localStorage.getItem("talkie-user"));

  const [user, setUser] = useState(userData._id);

  let userId = userData._id;

  useEffect(() => {
    const getUserById = async () => {
      const { data } = await axios.get(`${getUserRoute}/${userId}`);

      if (data == undefined) {
        alert("Cannot Find the user");
      } else {
        setUser(data.userDataId);
      }
    };
    getUserById();
  }, []);

  return (
    <>
      <NavbarA />
      <section className="w-full px-6 mx-auto">
        <div className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl">
          <Spline scene="https://prod.spline.design/xFzIGbs7H3SQcibp/scene.splinecode" />
        </div>
        <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-auto max-w-full px-3">
              <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                <img
                  src={userData.avatarImage}
                  alt="profile"
                  className="w-full shadow-soft-sm rounded-xl h-full"
                />
              </div>
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <div className="h-full">
                <h5 className="mb-1 text-xl capitalize">{user.username}</h5>
                <p class="mb-0 font-semibold leading-normal text-sm">
                  22 - Tunisia
                </p>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
              <div className="relative right-0">
                <ul className="relative flex flex-wrap p-1 gap-8 list-none bg-transparent rounded-xl">
                  <li className="z-30 text-center">
                    <a
                      href=""
                      className="z-30 flex w-max gap-3 py-1 px-2 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-cyan-200 text-slate-700"
                    >
                      <FaUser className="text-slate-700" size={20} />
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className="z-30 text-center">
                    <a
                      href=""
                      className="z-30 flex w-max gap-3 py-1 px-2 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-white text-slate-700"
                    >
                      <FaComments className="text-slate-700" size={20} />
                      <span>Info</span>
                    </a>
                  </li>
                  <li className="z-30 text-center">
                    <a
                      href=""
                      className="z-30 flex w-max gap-3 py-1 px-2 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-white text-slate-700"
                    >
                      <FaCog className="text-slate-700" size={20} />
                      <span>Edit</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-6 mx-auto grid grid-cols-3">

     
      <Card className="mt-6 w-96">
      <CardBody>
        <div className="flex justify-between items-center">
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Your Details
            </Typography>
            <Link to={"#"}>
                <FaPen />
            </Link>
        </div>
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between items-center w-full">
                <Typography color="blue">
                    UserName
                </Typography>
                <Typography color="gray">
                {user.username}
                </Typography>
            </div>
            <div className="flex justify-between items-center w-full">
                <Typography color="blue">
                    Name
                </Typography>
                <Typography color="gray">
                {user.name}
                </Typography>
            </div>
            <div className="flex justify-between items-center w-full">
                <Typography color="blue">
                    Phone
                </Typography>
                <Typography color="gray">
                {user.phone}
                </Typography>
            </div>
            <div className="flex justify-between items-center w-full">
                <Typography color="blue">
                    Email
                </Typography>
                <Typography color="gray">
                {user.email}
                </Typography>
            </div>
            <div className="flex justify-between items-center w-full">
                <Typography color="blue">
                    Birthday
                </Typography>
                <Typography color="gray">
                {user.birthday}
                </Typography>
            </div>
            <div className="flex justify-between items-center w-full">
                <Typography color="blue">
                    Timezone
                </Typography>
                <Typography color="gray">
                {user.timezone}
                </Typography>
            </div>
        </div>
        
      </CardBody>
      
    </Card>
    <Card className="mt-6 w-96">
        <CardBody>
        <div className="flex justify-between items-center">
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Friends
            </Typography>
            <Link to={"#"}>
                <FaEye />
            </Link>
        </div>
        <FriendsList />
        </CardBody>
        
    </Card>
    </section>
    </>
  );
};

export default User;
