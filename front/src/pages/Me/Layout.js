import React, { useState, useEffect } from "react";
import NavbarA from "../../components/NavBar/NavBarA";

import axios from "axios";

import { getUserRoute } from "../../utils/APIRoutes";

import { useParams } from "react-router-dom";

import Topics from "./Topics/Topics";
import Info from "./Info/Info";
import Edit from "./Edit/Edit";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";

const Me = () => {
  const { link } = useParams();
  const componentMap = {
    topics: Topics,
    edit: Edit,
  };
  const Component = componentMap[link] || Info;
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
  console.log(user);
  return (
    <>
      <NavbarA />
      <ProfileHeader userData={user} />
      <section className="w-full px-12 py-6 mx-auto"><Component dataUser={user}/></section>
      
    </>
  );
};

export default Me;
