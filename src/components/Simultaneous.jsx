import React, { useState } from "react";
import video1 from "../assets/DemoApplyAll.mp4";

const Simultaneous = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-wide font-bold">
        Simultaneous{" "}
        <span className="bg-gradient-to-l from-pink-500 to-pink-500 text-transparent bg-clip-text font-light">
          Editing
        </span>
      </h2>
      <h2 className="text-lg  text-center tracking-wide ">
        Edit all your screenshots with just one control.
      </h2>

      <div className="  bg-[#1a1a1a] rounded-3xl  flex flex-col lg:flex-row items-center mt-6 lg:mt-2 py-5">
        <div className="flex flex-1 flex-col items-center">
          <Video videoSrc={video1} />
        </div>
      </div>
    </div>
  );
};

export default Simultaneous;

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
