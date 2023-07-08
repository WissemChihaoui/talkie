import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
  } from "@material-tailwind/react";
  import Spline from "@splinetool/react-spline";
const CoverCardSpline = ({url}) => {
  return (
    <Card className="w-full">
    <CardHeader shadow={false} floated={false} className="h-96">
      <Spline 
        scene={url}
        className="w-full h-full object-cover"
      />
    </CardHeader>
    <CardBody>
      <div className="flex items-center justify-between mb-2">
        <Typography color="blue-gray" className="font-medium">
          Apple AirPods
        </Typography>
        <Typography color="blue-gray" className="font-medium">
          $95.00
        </Typography>
      </div>
    </CardBody>
    <CardFooter className="pt-0">
      <Button
        ripple={false}
        fullWidth={true}
        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
      >
        Make it as cover
      </Button>
    </CardFooter>
  </Card>
  )
}

export default CoverCardSpline