import React, { useState } from "react";
import video1 from "../assets/DemoAnnotation.mp4";
import Section from "./Section";

const Annotation = () => {
  return (
    <div>
      <Section
        title={
          <h2>
            <span className="bg-gradient-to-l from-red-500 to-orange-300 text-transparent bg-clip-text font-black">
              Highlight{" "}
            </span>
            and Explain
          </h2>
        }
        subtitle="Easily point out key details with simple annotations."
        gradientFrom="yellow-400"
        gradientTo="yellow-700"
        videoSrc={video1}
      />
    </div>
  );
};
export default Annotation;
