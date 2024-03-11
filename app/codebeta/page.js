"use client";
import Nav from "@/Components/Nav/Nav";
import React, { useEffect, useState } from "react";

import Confetti from "react-confetti";
const page = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
  
      updateDimensions(); 
      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }, []);
  return (
    <>
      <Nav />
      <div
        id="page1"
        className=" div flex-col flex items-center justify-center h-screen  bg-black relative w-full overflow-hidden"
      >
        <div className="blue max-md:z-0"></div>
        <div className="violet max-md:z-0"></div>

        {dimensions.width > 0 && dimensions.height > 0 && (
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            recycle={false}
            numberOfPieces={500}
            
          />
        )}
        {/* <video src="/codebeta.mp4" className="w-full h-full relative " autoPlay loop muted></video> */}
        <img src="/poster.png" className="h-full object-contain w-full"  alt="" />
      </div>
    </>
  );
};

export default page;
