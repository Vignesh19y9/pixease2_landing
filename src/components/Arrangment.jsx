import React, { useState } from "react";
import video1 from "../assets/DemoArrange.mp4";
import Section from "./Section";

const Arrangment = () => {
  return (
    <div>
      <Section
        title={
          <h2>
            <span className="bg-gradient-to-l from-pink-500 to-pink-300 text-transparent bg-clip-text font-black">
              Effortless{" "}
            </span>
            Layout
          </h2>
        }
        subtitle="No more dragging and positioning! Arrange your screenshots with 1 click."
        gradientFrom="pink-400"
        gradientTo="red-700"
        videoSrc={video1}
      />
    </div>
  );
};

export default Arrangment;
