import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function App() {
  return (
    <footer className=" text-white dark:bg-neutral-910 p-10">
      <div className="flex justify-end space-x-5 mb-5">
        <div className="logo">
          <SocialIcon
            url="https://x.com/pixease_app"
            bgColor="black"
            fgColor="white"
            style={{ width: 30, height: 30 }} // Adjust size as needed
          />
        </div>
        <div className="logo">
          <SocialIcon
            url="https://www.linkedin.com/company/96591070"
            bgColor="black"
            fgColor="white"
            style={{ width: 30, height: 30 }} // Adjust size as needed
          />
        </div>
      </div>

      {/* Copyright, Privacy Policy, Terms of Use, and Email */}
      <div className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex space-x-2">
          <p className="text-neutral-500">&copy; 2024 pixease</p>
        </div>
        {/* Center */}
        <div className="flex space-x-2">
          <Link to="/privacy">Privacy Policy</Link>
          <p>|</p>
          <Link to="/terms"> Terms of Service</Link>
        </div>
        {/* Right side */}
        <a href="mailto:robzapps1@gmail.com" className="text-neutral-500">
          robzapps1@gmail.com
        </a>
      </div>
    </footer>
  );
}
