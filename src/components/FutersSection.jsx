import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineKey } from "react-icons/ai";

const FutersSection = () => {
  const data = [
    <AiOutlineLike size={30} />,
    <AiOutlineMessage size={30} />,
    <AiFillSafetyCertificate size={30} />,
    <AiFillHome size={30} />,
    <AiOutlineGlobal size={30} />,
    <AiOutlineKey size={30} />,
  ];
  return (
    <div className="text-white flex flex-col justify-center items-center text-center gap-5 pt-24    ">
      <h1 className="xl:w-[800px]">
        The majority our customers do not understand their workflows.
      </h1>
      <p className="xl:w-[900px]  ">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-y-14 py-10 gap-x-7 ">
        {data.map((item) => (
          <div className="flex flex-col justify-center items-center gap-2 transition-all py-3 duration-500 rounded-md  hover:scale-110    hover:bg-zinc-700    ">
            <div className="w-16  h-16 bg-blue-600 flex justify-center items-center rounded-full  ">
              {item}
            </div>
            <h2>Instant Features</h2>
            <p className="text-center ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutersSection;
