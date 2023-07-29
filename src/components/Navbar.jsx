import React from "react";
import favicon from "../assets/images/favicon.ico";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-center  ">
        <Link to="/">
          <img src={favicon} className="w-10 h-10" />
        </Link>
        <div className="md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose color="white" size={25} />
          ) : (
            <FaBars color="white" size={25} />
          )}
        </div>

        <div className="flex gap-5 max-md:hidden  ">
          <Link to="/signin">
            <button className="  h-9 bg-transparent text-violet-600   font-bold p-2 hover:text-white  ">
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-950">
              Sign up
            </button>
          </Link>
        </div>
      </div>
      {nav ? (
        <div className=" bg-slate-800  flex flex-col  justify-center p-3  md:hidden  ">
          <Link to="signin">
            <div className="text-violet-600 w-full flex justify-center p-2 font-bold">
              Sign in
            </div>
          </Link>
          <Link to="signup">
            <div className="bg-blue-600 text-white font-bold w-full flex justify-center p-2  ">
              Sign up
            </div>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
