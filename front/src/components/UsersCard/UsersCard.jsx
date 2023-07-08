import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { FaUser } from 'react-icons/fa';
import { BsFillChatLeftFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const UsersCard = ({props}) => {
    const link=`/user/${props.name}`
  return (
    
    <Card className="w-60">
      <CardHeader floated={false} className="h-40">
        <img src={props.image} alt="profile-picture" className='w-full h-full'/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          Tunisia, 23
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Link to={link}>
        <Button color='blue' className='flex items-center gap-2' >
          <FaUser />
          
        </Button>
        </Link>
        
        <Button color='green' className='flex items-center gap-2'>
          <BsFillChatLeftFill />
         
        </Button>
      </CardFooter>
    </Card>
  )
}

export default UsersCard