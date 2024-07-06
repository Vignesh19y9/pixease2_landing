import React, { useState } from "react";
import video1 from "../assets/DemoArrange.mp4";

const Arrangment = () => {
  return (
    <div className="m-20 space-y-4 p-20">
      <h2 className="text-5xl text-center mt-6 tracking-wide font-bold">
        Effortless{" "}
        <span className="bg-gradient-to-l from-green-700 to-green-400 text-transparent bg-clip-text font-black">
          Arrangement
        </span>
      </h2>
      <h2 className="text-lg  text-center tracking-wide ">
        Say goodbye to dragging and positioning! Arrange your screenshots with a
        single click.
      </h2>

      <div className="  bg-gradient-to-r from-green-400 to-green-700 rounded-3xl  flex flex-col lg:flex-row items-center mt-6 lg:mt-2">
        <div className="flex flex-1 flex-col items-center p-10">
          <Video videoSrc={video1} />
        </div>
      </div>
    </div>
  );
};

export default Arrangment;

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
