import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import Navbar from "../components/Navbar";
const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="text-white flex flex-col py-24   gap-7 justify-center items-center text-center ">
        <h2 className="max-w-3xl   text-4xl md:text-5xl  ">
          Welcome back. We exist to make entrepreneurship easier.
        </h2>
        <div className="w-[370px] flex  items-center bg-red-600 p-3 rounded-md md:mt-11 cursor-pointer ">
          <AiOutlineGoogle size={20} className="flex-start" />
          <div></div>
          <h3 className="flex-1 ">Sign in with Google</h3>
        </div>
        <h3 className="text-zinc-400 font-serif text-sm    ">
          Or, sign in with your email
        </h3>
        <div className="w-[370px] flex flex-col justify-start  gap-1">
          <h4 className="text-start">Email</h4>
          <input
            type="text"
            placeholder="Your Gmail"
            className=" bg-transparent border-red-50 border-[0.2px] border-zinc-600 h-11 p-2    "
          />
        </div>
        <div className="w-[370px] flex flex-col justify-start  gap-1">
          <h4 className="text-start">Password</h4>
          <input
            placeholder="Password (at least 10 characters)"
            type="text"
            className=" bg-transparent border-red-50 border-[0.2px] border-zinc-600 h-11 p-2    "
          />
        </div>
        <div className="w-[370px] flex justify-between  items-center">
          <div className="flex gap-2">
            <input type="checkbox" />
            <h4 className="text-zinc-400">Keep me signed in</h4>
          </div>
          <h4 className="text-indigo-500  cursor-pointer">Forgot Password?</h4>
        </div>
        <div className="w-[370px] p-3 bg-blue-600 rounded-sm cursor-pointer">
          Sign in
        </div>
        <h4>
          Don’t you have an account?{" "}
          <a href="signup" className="text-indigo-500 ml-1">
            Sign up
          </a>
        </h4>
      </div>
    </>
  );
};

export default SignIn;
