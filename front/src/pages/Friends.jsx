import {
  Checkbox,
  Input,
  Select,
  Option,
  Radio,
  Button,
} from "@material-tailwind/react";
import React from "react";
import AsideNav from "../components/AsideNav/AsideNav";
import NavbarA from "../components/NavBar/NavBarA";
import UsersCard from "../components/UsersCard/UsersCard";
import { countries } from "../libs/countries";
const Friends = () => {
  const user = {
    name: "Wissem",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  };
  return (
    <div className="m-0 font-sans antialiased font-normal text-base leading-default  text-slate-500">
      <NavbarA />
      <section className="pt-4 flex gap-10 h-[93vh] ">
        <AsideNav />
        <div className="w-4/5 flex justify-center px-3  mr-3 gap-10 flex-wrap ">
          <div className="bg-white w-full py-2 px-4 rounded-3 flex gap-4 flex-col">
            <h4>Filter Friends</h4>
            <div className="flex gap-2 w-full max-w-full">
                <div className="w-1/4">
                <Input variant="static" label="Search by name" />
                </div>

              <div className="w-1/4">

              
              <Select variant="static" label="Search by Country">
                {countries.map((name) => (
                  <Option
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                  >
                    {name}
                  </Option>
                ))}
              </Select>
              </div>
              <div className="flex gap-2">
                <Checkbox id="male" name="gender" label="Male" />
                <Checkbox id="female" name="gender" label="Female" />
              </div>
              <div className="flex gap-2 w-1/4">
                <Select variant="static" label="Min Age">
                  <Option value="1">12</Option>
                  <Option value="1">12</Option>
                  <Option value="1">12</Option>
                </Select>
                <Select variant="static" label="Min Age">
                  <Option value="1">12</Option>
                  <Option value="1">12</Option>
                  <Option value="1">12</Option>
                </Select>
              </div>
            </div>
            <Button>Search</Button>
          </div>
          <div className="grid grid-cols-5 gap-3 mb-3 justify-between w-full h-[69vh] overflow-x-scroll">
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
            <UsersCard props={user} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Friends;
