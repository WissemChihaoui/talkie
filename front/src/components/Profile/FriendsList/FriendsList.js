import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";
const FriendsList = () => {
    const userData = JSON.parse(localStorage.getItem("talkie-user"));
    const img = userData.avatarImage
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Avatar src={img} alt="avatar" variant="square" />
          <div>
            <Typography variant="h6">Candice Wu</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar src={img} alt="avatar" variant="square" />
          <div>
            <Typography variant="h6">Candice Wu</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar src={img} alt="avatar" variant="square" />
          <div>
            <Typography variant="h6">Candice Wu</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsList;
