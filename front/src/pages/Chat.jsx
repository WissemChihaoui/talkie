import React, { useState, useEffect } from 'react'
import NavbarA from '../components/NavBar/NavBarA'
import UsersCard from '../components/UsersCard/UsersCard';
import { getUsersRoute } from '../utils/APIRoutes';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import AsideNav from '../components/AsideNav/AsideNav';
import Aside from '../components/Aside/Aside';
import Post from '../components/Post/Post';
import CreatePost from '../components/CreatePost/CreatePost';
const Chat = () => {
  const [users, setUsers] = useState([]);
  const [userExist, setUserExist] = useState(false)
  const navigate = useNavigate();

  if(localStorage.getItem('talkie-user')==null){
    window.location.href = '/login'
  }
  
  useEffect(() => {
    if (localStorage.getItem('talkie-user')) {
      setUserExist(true)
      const getUsers = async () => {
        const { data } = await axios.get(getUsersRoute);
        if (data) {
          setUsers(data.userData)
        }
      }
      getUsers();
    };
  }, [])

  
  
  const topics = {
    username : "someone famous",
    avatar : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    topicsContent : "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    topicsTitle : "Short Title",
    topicsImage : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    peopleReact : {},
  }
      return (
      <div className='m-0 font-sans antialiased font-normal text-base leading-default  text-slate-500'>
        <NavbarA />
        <section className='pt-4 flex gap-10'>
          <AsideNav />
          <div className='w-3/5 flex justify-center px-3 gap-10 flex-wrap overflow-x-scroll h-fit max-h-[90vh]'>
          <CreatePost />
          <Post topicsData={topics}/>
          <Post topicsData={topics}/>
          <Post topicsData={topics}/>
          <Post topicsData={topics}/>
          <Post topicsData={topics}/>
          </div>
          <Aside />
        </section>
      </div>
    )
  }

export default Chat