import React from "react";
import { BsCheck2 } from "react-icons/bs";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
const Projects = () => {
  const data = [img1, img2, img3];
  let classname1 = "flex-row";
  return (
    <div className="text-white flex flex-col justify-center items-center text-center gap-5 pt-24    ">
      <div className="rounded-3xl  bg-emerald-200 p-2 px-5 text-green-600 font-bold    ">
        Reach goals that matter
      </div>
      <h1 className="xl:w-[800px]">One product, unlimited solutions</h1>
      <p className="xl:w-[850px]  ">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit laborum — semper quis lectus nulla.
      </p>

      <div className="pt-10 space-y-10  ">
        {data.map((item, index) => {
          if (index === 1) {
            classname1 = "flex-row-reverse";
          } else {
            classname1 = "flex-row";
          }
          return (
            <div
              className={`flex flex-col gap-10  md:${classname1}  items-center md:justify-between `}
            >
              <div className="flex flex-col  items-start gap-3 flex-1">
                <h3 className="text-blue-700 ">More speed. Less spend</h3>
                <h2 className="text-start">Keep projects on schedule</h2>
                <p className="text-start max-w-2xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex gap-2 items-center  ">
                  <BsCheck2 color="green" size="25px" />
                  <h4>Duis aute irure dolor in reprehenderit</h4>
                </div>
                <div className="flex gap-2 items-center  ">
                  <BsCheck2 color="green" size="25px" />
                  <h4>Excepteur sint occaecat</h4>
                </div>
                <div className="flex gap-2 items-center  ">
                  <BsCheck2 color="green" size="25px" />
                  <h4>Amet consectetur adipiscing elit</h4>
                </div>
              </div>
              <div className="flex-1 ">
                <img src={item} alt="" className="md:max-w-[500px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
