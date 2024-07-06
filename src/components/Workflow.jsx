import React, { useState } from "react";
import video1 from "../assets/Demo1.mp4";
import Section from "./Section";

const Workflow = () => {
  return (
    <div>
      <Section
        title={
          <h2>
            <span className="bg-gradient-to-l from-green-500 to-yellow-300 text-transparent bg-clip-text font-black">
              Don't limit{" "}
            </span>
            to 1 screenshot
          </h2>
        }
        subtitle="Capture multiple screenshots, create a unified visual narrative."
        gradientFrom="yellow-400"
        gradientTo="yellow-700"
        videoSrc={video1}
      />
    </div>
  );
};

export default Workflow;
