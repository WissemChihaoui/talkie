import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserRoute } from "../../../utils/APIRoutes";
import NavbarA from '../../../components/NavBar/NavBarA'
import ProfileHeader from "../../../components/Profile/ProfileHeader/ProfileHeader";
import Post from "../../../components/Post/Post";
const Topics = (dataUser) => {
  const user = dataUser.dataUser
  console.log(user)
  const topics = {
    username : user.username,
    avatar : user.avatarImage,
    topicsContent : "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    topicsTitle : "Short Title",
    peopleReact : {},
  }
  return (
    <div className="grid grid-cols-4 gap-2">
       <Post topicsData={topics}/>
       
    </div>
  )
}

export default Topics