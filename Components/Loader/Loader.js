"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const img = useRef(null);
  const page = useRef(null);

  useEffect(() => {
    gsap.from(img.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });

    setTimeout(() => {
      var tl = gsap.timeline();
      tl.to(page.current, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          // Hide the loader after the animation is complete
          page.current.style.display = "none";
        },
      });
      tl.from("#page1 img,#page1 h2",{
        opacity:0,y:20
      },)
    }, 2000);
  }, []);

  return (
    <div ref={page} className="h-screen w-full bg-black fixed top-0 left-0 z-[99999] flex items-center justify-center">
      <div className="blue"></div>
      <div className="violet"></div>
      <img ref={img} src={"logo.png"} alt="" />
    </div>
  );
}

export default Loader;
