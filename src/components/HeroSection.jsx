import video1 from "../assets/Overall.mp4";
import DownloadButton from "./DownloadButton";

const HeroSection = () => {
  return (
    <div className=" py-10">
      {/* bg-gradient-to-r from-gray-500 to-gray-900 */}
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col space-y-10">
          <Heading />
          <p className="text-2xl text-center max-w-4xl tracking-wide font-light">
            Quick, Easy, and Beautiful
          </p>
          <DownloadButton />
        </div>
        <Video videoSrc={video1} />
      </div>
    </div>
  );
};

export default HeroSection;

const Heading = () => {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-tight font-bold">
      <span
        className="bg-gradient-to-r text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(to bottom,#fff9, #fff, #fff9)",
        }}
      >
        Capture
      </span>
      <span
        className="bg-gradient-to-r text-transparent bg-clip-text font-extrabold tracking-light"
        style={{
          backgroundImage: "linear-gradient(to bottom,#ffff, #560DF8)",
        }}
      >
        {" "}
        Beautiful{" "}
      </span>
      Screenshots
      <div>
        <span className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold ">
          {" "}
          Effortlessly.
        </span>
      </div>
    </h1>
  );
};

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
