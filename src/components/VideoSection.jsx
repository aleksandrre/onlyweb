import React, { useState } from "react";
import video from "../assets/videos/video.mp4";
import HeroImage from "../assets/images/hero-image-01.jpg";
const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  console.log(playing);
  return (
    <div className="text-white flex flex-col justify-center items-center text-center gap-5 pt-24    ">
      <h1 className="">Landing template for startups</h1>
      <p className="xl:w-[800px] ">
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
      <div className=" flex flex-col  justify-center items-center  gap-5 md:flex-row">
        <button className="p-3  w-[300px] md:w-[150px] bg-blue-600">
          Start free trial
        </button>
        <button className="p-3    w-[300px] md:w-[150px] bg-gray-700">
          Learn more
        </button>
      </div>
      <div className="w-full  lg:w-[950px] h-full  flex justify-center  relative py-12">
        <img
          src={HeroImage}
          alt=""
          className={`absolute ${playing ? "hidden" : ""}`}
        />
        <video
          controls
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
