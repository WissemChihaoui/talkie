import React, { useState, useEffect } from 'react';
import NavbarA from '../components/NavBar/NavBarA';
import { getAllPostRouter, getUsersRoute, createPostRouter } from '../utils/APIRoutes';
import axios from 'axios';
import AsideNav from '../components/AsideNav/AsideNav';
import Aside from '../components/Aside/Aside';
import Post from '../components/Post/Post';
import CreatePost from '../components/CreatePost/CreatePost';

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('talkie-user')) {
      setUserExist(true);
      getUsers();
    }
  }, []);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(getUsersRoute);
      setUsers(data.userData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(getAllPostRouter);
      setPosts(data.postData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async (newPost) => {
    try {
      const { data } = await axios.post(createPostRouter, newPost);
      setPosts((prevPosts) => [data, ...prevPosts]); // Prepend the new post to the existing posts
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='m-0 font-sans antialiased font-normal text-base leading-default  text-slate-500'>
      <NavbarA />
      <section className='pt-4 flex gap-10'>
        <AsideNav />
        <div className='w-3/5 flex justify-center px-3 gap-10 flex-wrap overflow-x-scroll h-fit max-h-[90vh]'>
          <CreatePost onCreatePost={handleCreatePost} />
          {posts.map((post) => (
            <Post topicsData={post} key={post._id} />
          ))}
        </div>
        <Aside />
      </section>
    </div>
  );
};

export default Chat;
