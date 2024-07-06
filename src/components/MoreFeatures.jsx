import React, { useState } from "react";

const MoreFeatures = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-tight font-bold">
        More Features{" "}
        <span className="bg-gradient-to-l from-red-500 to-pink-300 text-transparent bg-clip-text font-black">
          Coming soon{" "}
        </span>
      </h2>
      <div className=" flex justify-center p-5">
        <div>
          {" "}
          <h2 className="text-lg  text-center tracking-wide ">
            3D tilt effects
          </h2>
          <h2 className="text-lg  text-center tracking-wide ">
            Dynamic Shadows
          </h2>
          <h2 className="text-lg  text-center tracking-wide ">
            {" "}
            Automatic Text Detection{" "}
          </h2>
          <h2 className="text-lg  text-center tracking-wide py-3 ">
            much more...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
