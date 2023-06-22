import React from "react";

import { FaEye } from "react-icons/fa";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import FriendsList from "../../../components/Profile/FriendsList/FriendsList";
import Details from "../../../components/Profile/Details/Details";
import ImagesCarousel from "../../../components/Profile/ImagesCarousel/ImagesCarousel";

const Info = (dataUser) => {
  const user = dataUser.dataUser
  return (
    <div className="grid grid-cols-3">
      <Details userData={user} />
      <Card className="mt-6 w-96">
        <CardBody>
          <div className="flex justify-between items-center">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Friends
            </Typography>
            <Link to={"#"}>
              <FaEye />
            </Link>
          </div>
          <FriendsList />
        </CardBody>
      </Card>
      <ImagesCarousel userId={user._id} />
    </div>
  );
};

export default Info;
