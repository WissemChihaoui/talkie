import { Carousel } from "@material-tailwind/react";
 
const ImagesCarousel= (userId) =>{  
    const id = userId;
    const userData = JSON.parse(localStorage.getItem("talkie-user"));
  return (
    <Carousel className="rounded-xl h-[420px]">
      <img
        src={userData.avatarImage}
        alt="image 1"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
export default ImagesCarousel;