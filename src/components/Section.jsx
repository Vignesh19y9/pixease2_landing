import React from "react";
{
  /* <div className="  bg-gradient-to-r from-orange-400 to-orange-700 rounded-3xl  flex flex-col lg:flex-row items-center mt-6 lg:mt-2"> */
}

const Section = ({ title, subtitle, gradientFrom, gradientTo, videoSrc }) => {
  const gradientStyle = {
    background: "linear-gradient(to right, ${gradientFrom}, ${gradientTo})",
  };

  return (
    <div style={{ gradientStyle }}>
      <div className="m-10 xl:m-40 lg:m-32 md:m-20 ">
        <div className="text-center space-y-4 m-10">
          <h2 className="text-4xl tracking-tight font-bold">{title}</h2>
          <h2 className="text-gray-400 text-lg tracking-wide">{subtitle}</h2>
        </div>
        <div>
          <div className="flex flex-1 flex-col items-center">
            <Video videoSrc={videoSrc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

const Video = ({ videoSrc }) => {
  return (
    <div className="flex  justify-center">
      <video
        autoPlay
        loop
        muted
        className="rounded-xl shadow-2xl border border-gray-700"
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
