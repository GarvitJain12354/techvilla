"use client";
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import Typed from 'typed.js';

const Page1 = () => {
    const div = useRef(null)
    const ball = useRef(null)
    const ball1 = useRef(null)
    useEffect(() => {
      const options = {
        strings: ['LNCT OFFICIAL CODING CLUB','CODE | CREATE | CONTRIBUTE'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        
     
      };
  
      const typed = new Typed('#typed-text', options);
  
      return () => {
        typed.destroy();
      };
    }, []);
  return (
   <>
    <div ref={div} id='page1' className=" div flex-col flex items-center justify-center   h-screen  bg-black relative w-full">
    {/* <h1 className=' text-9xl '>TECHVILLA</h1> */}
    <img className='object-contain w-[60%] relative  max-md:scale-[1.5] z-50 mt-20 max-md:h-96' src="/tech.png" alt="" />
    <h2 id="typed-text" className='text-white z-40 whitespace-nowrap max-md:text-lg absolute bottom-[40%] left-1/2 -translate-x-1/2 flex items-center justify-center text-3xl font-[poppins] '></h2>
    <div className="div h-12  mt-8">
    {/* <h2 id="typed-text" className='text-white absolute bottom-[40%] left-1/2 -translate-x-1/2 flex items-center justify-center text-xl font-[poppins] '></h2> */}
    </div>
          <div ref={ball} className="blue ">
    
          </div>
          <div ref={ball1} className="violet">
            
            </div>
        </div>

   </> 
  )
}

export default Page1