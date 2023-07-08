import React, { useState } from 'react';
import { Textarea, Avatar, Button } from "@material-tailwind/react";
import gallery from '../../icons/gallery.png';
import axios from 'axios';
import { createPostRouter } from '../../utils/APIRoutes';

const CreatePost = ({ onCreatePost }) => {
  const [content, setContent] = useState('');
  const userData = JSON.parse(localStorage.getItem("talkie-user"));

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    // Handle file upload if needed
  };

  const handleCreatePost = async (event) => {
    event.preventDefault();
    if (postValidation()) {
      const userId = userData._id;
      const postData = {
        userId,
        content,
      };

      try {
        const { data } = await axios.post(createPostRouter, postData);
        onCreatePost(data); // Pass the created post data to the parent component
        setContent(''); // Clear the input field
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  const postValidation = () => {
    if (content.trim() === '') {
      console.log('Error: Empty post content');
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className='bg-white w-full py-2 px-4 flex flex-col gap-2'>
      <div className='flex gap-4'>
        <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
        <Textarea variant="static" placeholder="What's Up" onChange={handleInputChange} value={content} />
      </div>
      <div className='flex justify-between'>
        <img src={gallery} className="h-8 cursor-pointer" onClick={handleClick} alt="Gallery" />
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <Button onClick={handleCreatePost}>Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
