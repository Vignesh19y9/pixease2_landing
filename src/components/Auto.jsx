import React, { useState } from "react";
import video1 from "../assets/DemoAutoCrop.mp4";
const Auto = () => {
  return (
    <div className="m-20 space-y-4 p-20">
      <h2 className="text-5xl text-center mt-6 tracking-wide font-bold">
        Automatic{" "}
        <span className="bg-gradient-to-l from-blue-700 to-blue-400 text-transparent bg-clip-text font-black">
          Border{" "}
        </span>
        Adjustment
      </h2>
      <div>
        <h2 className="text-lg  text-center tracking-wide ">
          Easily cut out the excess blank areas from your screenshots.
        </h2>
        <h2 className="text-lg  text-center tracking-wide ">
          Expand your borders with the screenshots background color.
        </h2>
      </div>

      <div className="  bg-gradient-to-r from-blue-400 to-blue-700 rounded-3xl  flex flex-col lg:flex-row items-center mt-6 lg:mt-2">
        <div className="flex flex-1 flex-col items-center p-10">
          <Video videoSrc={video1} />
        </div>
      </div>
    </div>
  );
};

export default Auto;

const Video = ({ videoSrc }) => {
  return (
    <div className="flex mt-10 justify-center">
      <video
        autoPlay
        loop
        muted
        className="rounded-3xl w-11/12 shadow-2xl border border-gray-700"
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
