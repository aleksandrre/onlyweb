import React from "react";

const SubscribeSection = () => {
  return (
    <div className="flex flex-col py-14 gap-5 bg-blue-600 justify-center items-center text-center md:flex-row md:px-16 md:justify-between  ">
      <div className="md:text-start space-y-4">
        <h2 className="text-white">Stay in the loop</h2>
        <p className="text-white">
          Join our newsletter to get top news before anyone else.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Your best email..."
          className="w-[299px] h-[40px] p-4 bg-blue-700  text-white   "
        />
        <div className="flex justify-center items-center text-blue-700 bg-white w-[299px] h-[40px] md:w-[180px]">
          Subscribe
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
