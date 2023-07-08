import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
  Checkbox,
} from "@material-tailwind/react";
import { getUserRoute } from '../../utils/APIRoutes'
import axios from 'axios'
import { BiDotsHorizontalRounded } from "react-icons/bi";
function dateConverter(x) {
  const dateString = x;

  const date = new Date(dateString);
  const currentTime = new Date();

  const timeDifferenceInMs = currentTime - date;

  if (timeDifferenceInMs < 60000) {
    // Less than a minute (60000 milliseconds)
    const timeDifferenceInSeconds = Math.floor(timeDifferenceInMs / 1000);
    return `${timeDifferenceInSeconds} seconds`;
  } else if (timeDifferenceInMs < 3600000) {
    // Less than an hour (3600000 milliseconds)
    const timeDifferenceInMinutes = Math.floor(
      timeDifferenceInMs / (1000 * 60)
    );
    return `${timeDifferenceInMinutes} minutes`;
  } else if (timeDifferenceInMs < 86400000) {
    // Less than 24 hours (86400000 milliseconds)
    const timeDifferenceInHours = Math.floor(
      timeDifferenceInMs / (1000 * 60 * 60)
    );
    return `${timeDifferenceInHours} hours`;
  } else {
    const timeDifferenceInDays = Math.floor(
      timeDifferenceInMs / (1000 * 60 * 60 * 24)
    );
    return `${timeDifferenceInDays} days`;
  }
}
const Post = ({ topicsData }) => {
  const [user, setUser] = useState([])
  useEffect(()=>{
    const getUserById = async () =>{
        const {data} =await axios.get(`${getUserRoute}/${topicsData.author}`)
        
    if(data == undefined){
        alert("Cannot Find the user")
    }else{
        setUser(data.userDataId)
       
    }
    }
    getUserById();
    
},[])
  
  const [dropMenu, setDropMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setDropMenu(false);
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full  bg-white py-2 px-4 h-max "
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8 justify-between "
      >
        <div className="flex items-center gap-4">
          <Avatar size="md" src={user.avatarImage} alt={user.username} />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Link to={`/user/${user.username}`}>
              <Typography variant="h5" color="blue-gray">
                {user.username}
              </Typography>
              </Link>
            </div>
            <Typography color="blue-gray">{dateConverter(topicsData.createdAt)}</Typography>
          </div>
        </div>
        <div className="relative z-100">
          <BiDotsHorizontalRounded
            className="text-[24px] cursor-pointer"
            onClick={() => setDropMenu(true)}
          />
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0 flex flex-col gap-2">
        <Typography>&quot;{topicsData.content}&quot;</Typography>
        {topicsData.topicsImage ? (
          <div>
            <img
              src={topicsData.topicsImage}
              alt="image"
              className="w-full h-[300px] object-cover rounded-2"
            />
          </div>
        ) : (
          ""
        )}
      </CardBody>
      <CardFooter className="p-0">
        <div className="flex">
          <Checkbox
            color="red"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            }
            defaultChecked
          />
          <div className="flex items-center -space-x-4">
            <Avatar
              variant="circular"
              size="xs"
              alt="user 1"
              className="border-2 border-white hover:z-10 focus:z-10 "
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <Avatar
              variant="circular"
              size="xs"
              alt="user 2"
              className="border-2 border-white hover:z-10 focus:z-10 "
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            />
            <Avatar
              variant="circular"
              size="xs"
              alt="user 3"
              className="border-2 border-white hover:z-10 focus:z-10 "
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
            />
            <Avatar
              variant="circular"
              size="xs"
              alt="user 4"
              className="border-2 border-white hover:z-10 focus:z-10 "
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            />
            <Avatar
              variant="circular"
              size="xs"
              alt="user 5"
              className="border-2 border-white hover:z-10 focus:z-10 "
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
            />
          </div>
        </div>
      </CardFooter>
      <div
        ref={menuRef}
        className={`${
          dropMenu ? "block" : "hidden"
        } absolute dropdown-menu min-w-max text-base z-50 float-left py-2 list-none top-8 text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0  bg-white`}
      >
        <Link
          to=""
          className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
        >
          Edit
        </Link>
        <Link
          to=""
          className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
        >
          Delete
        </Link>
        <Link
          to=""
          className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
        >
          Likes
        </Link>
        <Link
          to=""
          className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
        >
          Share
        </Link>
        <Link
          to=""
          className="dropdown-item text-sm py-2 px-4 font-normal  w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-900 flex items-center"
        >
          Make it private
        </Link>
      </div>
    </Card>
  );
};

export default Post;
