import React from 'react'
import Spline from "@splinetool/react-spline";
import { FaUser, FaCog, FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ProfileHeader = (userData) => {
  const link = window.location.pathname;
    const user = userData.userData;
    return(
        <section className="w-full px-6 mx-auto">
        <div className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl">
        <Spline scene="https://prod.spline.design/xFzIGbs7H3SQcibp/scene.splinecode" />
        </div>
        <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-auto max-w-full px-3">
              <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                <img
                  src={user.avatarImage}
                  alt="profile"
                  className="w-full shadow-soft-sm rounded-xl h-full"
                />
              </div>
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <div className="h-full">  
                <h5 className="mb-1 text-xl capitalize">{user.username}</h5>
                <p class="mb-0 font-semibold leading-normal text-sm">
                  22 - Tunisia
                </p>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
              <div className="relative right-0">
                <ul className="relative flex flex-wrap p-1 gap-8 list-none bg-transparent rounded-xl">
                  <li className="z-30 text-center">
                    <Link
                      to={"/me"}
                      className={`z-30 flex w-max gap-3 py-1 px-2 mb-0 transition-all border-0 rounded-lg ease-soft-in-out  text-slate-700 ${link === '/me' ? 'bg-cyan-200' : 'bg-white'}`}
                    >
                      <FaUser className="text-slate-700" size={20} />
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className="z-30 text-center">
                    <Link
                      to={"/me/topics"}
                      className={`z-30 flex w-max gap-3 py-1 px-2 mb-0 transition-all border-0 rounded-lg ease-soft-in-out  text-slate-700 ${link === '/me/topics' ? 'bg-cyan-200' : 'bg-white'}`}
                    >
                      <FaComments className="text-slate-700" size={20} />
                      <span>Topics</span>
                    </Link>
                  </li>
                  <li className="z-30 text-center">
                    <Link
                      to={"/me/edit"}
                      className={`z-30 flex w-max gap-3 py-1 px-2 mb-0 transition-all border-0 rounded-lg ease-soft-in-out  text-slate-700 ${link === '/me/edit' ? 'bg-cyan-200' : 'bg-white'}`}
                    >
                      <FaCog className="text-slate-700" size={20} />
                      <span>Edit</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default ProfileHeader;