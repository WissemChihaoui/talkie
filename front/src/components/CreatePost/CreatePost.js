import React from 'react'
import { Textarea, Avatar, Button } from "@material-tailwind/react";
import gallery from '../../icons/gallery.png'
const CreatePost = (props) => {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };
      const handleChange = event => {
        const fileUploaded = event.target.files[0];
        
        console.log(fileUploaded)
      };
  return (
    <div className='bg-white w-full py-2 px-4 flex flex-col gap-2'>
        <div className='flex gap-4'>
            <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
            <Textarea variant="static"  placeholder="What's Up" />
        </div>
        <div className='flex justify-between'>
            <img src={gallery} className="h-8 cursor-pointer" onClick={handleClick}/>
            <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
            <Button>Post</Button>
        </div>
    </div>
  )
}

export default CreatePost