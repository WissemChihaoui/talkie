import React, { useState, useEffect } from 'react'
import NavbarA from '../components/NavBar/NavBarA'
import UsersCard from '../components/UsersCard/UsersCard';
import { getUsersRoute } from '../utils/APIRoutes';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
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

      return (
      <div className='m-0 font-sans antialiased font-normal text-base leading-default  text-slate-500'>
        <NavbarA />
        <section className='pt-20 flex justify-center gap-10 flex-wrap'>
          {
            users.map((user) => (
              <UsersCard key={user.username} image={user.avatarImage} name={user.username} id={user._id} />

            ))
          }
        </section>
      </div>
    )
  }

export default Chat