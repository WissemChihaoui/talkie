import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserRoute } from "../../../utils/APIRoutes";
import NavbarA from '../../../components/NavBar/NavBarA'
import ProfileHeader from "../../../components/Profile/ProfileHeader/ProfileHeader";
import Post from "../../../components/Post/Post";
const Topics = (dataUser) => {
  const user = dataUser.dataUser
  
  const topics = {
    username : user.username,
    avatar : user.avatarImage,
    topicsContent : "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    topicsTitle : "Short Title",
    peopleReact : {},
  }
  const topics2 = {
    username : user.username,
    avatar : user.avatarImage,
    topicsContent : "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    topicsTitle : "Short Title",
    topicsImage : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    peopleReact : {},
  }
  return (
    <div className="grid grid-cols-4 gap-2">
       <Post topicsData={topics}/>
       <Post topicsData={topics2}/>
       <Post topicsData={topics}/>
       <Post topicsData={topics2}/>
       <Post topicsData={topics}/>
       <Post topicsData={topics2}/>
       <Post topicsData={topics}/>
       <Post topicsData={topics2}/>
       <Post topicsData={topics}/>
       <Post topicsData={topics2}/>
       
    </div>
  )
}

export default Topics