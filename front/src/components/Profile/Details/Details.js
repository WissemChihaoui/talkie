import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import { FaPen } from "react-icons/fa";
const Details = (userData) => {
    const user = userData.userData;
  return (
    <Card className="mt-6 w-96">
          <CardBody>
            <div className="flex justify-between items-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Your Details
              </Typography>
              <Link to={"#"}>
                <FaPen />
              </Link>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">UserName</Typography>
                <Typography color="gray">{user.username}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Name</Typography>
                <Typography color="gray">{user.name}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Phone</Typography>
                <Typography color="gray">{user.phone}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Email</Typography>
                <Typography color="gray">{user.email}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Birthday</Typography>
                <Typography color="gray">{user.birthday}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Timezone</Typography>
                <Typography color="gray">{user.timezone}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Country</Typography>
                <Typography color="gray">{user.country}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Gender</Typography>
                <Typography color="gray">{user.gender}</Typography>
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography color="blue">Verify</Typography>
                <Typography color="gray">{user.verify}</Typography>
              </div>
            </div>
          </CardBody>
        </Card>
  )
}

export default Details