import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="text-white flex flex-col py-24   gap-5 justify-center items-center text-center ">
        <h2 className="max-w-3xl   text-4xl md:text-5xl  ">
          Welcome. We exist to make entrepreneurship easier.
        </h2>

        <div className="w-[370px] flex  items-center bg-red-600 p-3 rounded-md md:mt-11 cursor-pointer ">
          <AiOutlineGoogle size={20} className="flex-start" />
          <div></div>
          <h3 className="flex-1">Sign in with Google</h3>
        </div>
        <h3 className="text-zinc-400 font-serif text-sm    ">
          Or, register with your email
        </h3>
        <div className="w-[370px] flex flex-col justify-start  gap-1">
          <h4 className="text-start flex gap-1">
            Full Name <FaStarOfLife size={7} className="text-red-600 mt-2 " />
          </h4>
          <input
            type="text"
            placeholder="First and last name"
            className=" bg-transparent border-red-50 border-[0.2px] border-zinc-600 h-11 p-2    "
          />
        </div>
        <div className="w-[370px] flex flex-col justify-start  gap-1">
          <h4 className="text-start flex gap-1">
            Company Name
            <FaStarOfLife size={7} className="text-red-600 mt-2 " />
          </h4>
          <input
            type="text"
            placeholder="Your company or app name"
            className=" bg-transparent border-red-50 border-[0.2px] border-zinc-600 h-11 p-2    "
          />
        </div>
        <div className="w-[370px] flex flex-col justify-start  gap-1">
          <h4 className="text-start flex gap-1">
            {" "}
            Work Email <FaStarOfLife size={7} className="text-red-600 mt-2 " />
          </h4>
          <input
            type="text"
            placeholder="Your Gmail"
            className=" bg-transparent border-red-50 border-[0.2px] border-zinc-600 h-11 p-2    "
          />
        </div>
        <div className="w-[370px] flex flex-col justify-start  gap-1">
          <h4 className="text-start flex gap-1">
            Password <FaStarOfLife size={7} className="text-red-600 mt-2 " />
          </h4>
          <input
            placeholder="Password (at least 10 characters)"
            type="text"
            className=" bg-transparent border-red-50 border-[0.2px] border-zinc-600 h-11 p-2    "
          />
        </div>
        <p className="w-[370px] text-sm ">
          I agree to be contacted by Open PRO about this offer as per the Open
          PRO{" "}
          <a href="/" className="text-gray-400 pl-2 ">
            Privacy Policy
          </a>
        </p>
        {/* <div className="w-[370px] flex justify-between  items-center">
          <div className="flex gap-2">
            <input type="checkbox" />
            <h4 className="text-zinc-600">Keep me signed in</h4>
          </div>
          <h4 className="text-indigo-500  ">Forgot Password?</h4>
        </div> */}
        <div className="w-[370px] p-3 bg-blue-600 rounded-sm cursor-pointer">
          Sign in
        </div>
        <h4>
          Already using Open PRO?
          <a href="/signin" className="text-indigo-500 ml-1">
            Sign in
          </a>
        </h4>
      </div>
    </>
  );
};

export default SignUp;
