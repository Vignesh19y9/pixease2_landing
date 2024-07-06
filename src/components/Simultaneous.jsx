import React, { useState } from "react";
import video1 from "../assets/DemoApplyAll.mp4";
import Section from "./Section";

const Simultaneous = () => {
  return (
    <div>
      <Section
        title={
          <h2>
            <span className="bg-gradient-to-l from-blue-500 to-cyan-300 text-transparent bg-clip-text font-black">
              Simultaneous{" "}
            </span>
            Editing
          </h2>
        }
        subtitle="Edit all your screenshots with just one control"
        gradientFrom="yellow-400"
        gradientTo="yellow-700"
        videoSrc={video1}
      />
    </div>
  );
};

export default Simultaneous;
