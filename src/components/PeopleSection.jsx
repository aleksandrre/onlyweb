import React from "react";
import face1 from "../assets/images/testimonial-01.jpg";
import face2 from "../assets/images/testimonial-02.jpg";

import face3 from "../assets/images/testimonial-03.jpg";

const PeopleSection = () => {
  const data = [face1, face2, face3];
  return (
    <div className="text-white flex flex-col justify-center items-center text-center gap-5  py-14  ">
      <h1 className="">Don't take our word for it</h1>
      <p className=" ">
        Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
        quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        {data.map((items) => (
          <div className="flex flex-col gap-7 p-8 items-start text-start bg-slate-700 transition-all duration-500  hover:scale-90 ">
            <img src={items} alt="" width="55px" className="rounded-full " />
            <p>
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <div className="flex gap-7   ">
              <h3>Anastasia Dan </h3>
              <h3 className="text-blue-600   ">UX Board</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;
