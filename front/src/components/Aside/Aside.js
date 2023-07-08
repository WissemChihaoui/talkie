import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
const Aside = () => {
  return (
    <div className="bg-white py-4 px-6 rounded-6 w-1/5">
      <div className="flex flex-col gap-6 h-full w-full justify-between">
        <ul className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <label>Friends</label>
            <Link to={"/friends"}>see all</Link>
          </div>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
        </ul>
        
        <ul className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <label>Users</label>
            <Link to={"/users"}>see all</Link>
          </div>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="avatar" size="sm" />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="bg-[#6a7cf6] flex flex-col p-4 text-white rounded-sm">
            <Link to={'/about-us'} className="underline">
                About Us
            </Link>
            <Link to={'/about-us'} className="underline">
                Contact Us
            </Link>
            <a href={'https://wissemchihaoui.netlify.app'} className="underline">
                Wise Code
            </a>
            <p>All right reserved 2023  </p>
        </div>
      </div>
    </div>
  );
};

export default Aside;
