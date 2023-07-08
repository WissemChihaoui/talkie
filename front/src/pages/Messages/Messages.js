import React from "react";
import NavbarA from "../../components/NavBar/NavBarA";
import AsideNav from "../../components/AsideNav/AsideNav";
import { Avatar, Typography, Input, Button } from "@material-tailwind/react";

const Messages = () => {
  const [message, setMessage] = React.useState("");
  const onChange = ({ target }) => setMessage(target.value);
  return (
    <div className="m-0 font-sans antialiased font-normal text-base leading-default  text-slate-500 h-screen">
      <NavbarA />
      <section className="pt-4 flex  gap-10">
        <AsideNav />
        <div className="w-4/5 flex justify-center px-3 gap-1 flex-grow">
          <div className="w-1/3 bg-white flex flex-col gap-2 px-2 py-3">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="avatar"
                variant="square"
              />
              <div>
                <Typography variant="h6">Candice Wu</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="avatar"
                variant="square"
              />
              <div>
                <Typography variant="h6">Candice Wu</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="avatar"
                variant="square"
              />
              <div>
                <Typography variant="h6">Candice Wu</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="avatar"
                variant="square"
              />
              <div>
                <Typography variant="h6">Candice Wu</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="avatar"
                variant="square"
              />
              <div>
                <Typography variant="h6">Candice Wu</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="avatar"
                variant="square"
              />
              <div>
                <Typography variant="h6">Candice Wu</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
          </div>
          <div className="bg-white w-2/3 flex flex-col">
            <div className="flex-grow">Chat</div>
            <div className="relative flex w-full ">
              <Input
                type="text"
                color="blue"
                placeholder="Send Message"
                value={message}
                onChange={onChange}
                className="pr-20 w-full"
                containerProps={{
                  className: "w-full",
                }}
              />
              <Button
                size="sm"
                color={message ? "blue" : "blue-gray"}
                disabled={!message}
                className="!absolute right-1 top-1 rounded"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Messages;
