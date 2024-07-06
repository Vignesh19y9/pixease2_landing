import React, { useState } from "react";
import video1 from "../assets/DemoAutoCrop.mp4";

import Section from "./Section";

const Auto = () => {
  return (
    <div>
      <Section
        title={
          <h2>
            <span className="bg-gradient-to-l from-violet-500 to-purple-300 text-transparent bg-clip-text font-black">
              Smart{" "}
            </span>
            Border
          </h2>
        }
        subtitle="Automatic background color and trim."
        gradientFrom="yellow-400"
        gradientTo="yellow-700"
        videoSrc={video1}
      />
    </div>
  );
};

export default Auto;
