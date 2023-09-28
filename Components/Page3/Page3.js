"use client";
import { events } from "@/db/events";
import React, { useState } from "react";
// console.log(events);
const Page3 = () => {
    const [index, setindex] = useState(0)
    const handelover = (i)=>{
           setindex(i)
    }
    var percent = index * -100 + "%";
  return (
    <>
      <div
        id="page3"
        className="page min-h-screen flex-col w-full flex gap-8 items-center justify-center text-white  bg-black"
      >
        <h1 className="text-6xl font-bold uppercase max-md:text-4xl">Upcoming Events</h1>
        <div className="w-[90%] h-fit flex items-center justify-center p-8">
          <div className="events flex flex-col items-center justify-center w-1/2  text-white">
           
           {events.map((data,idx)=>(
               <h1 onMouseOver={()=>setindex(idx)}  key={idx} className="text-4xl relative z-40 w-full text-center p-10 border-b hover:opacity-50 ease-in-out duration-500 cursor-pointer"  >{data.name}</h1>
            
           ))}
          </div>
          <div className="events flex flex-col  h-[60vh] relative z-40 overflow-hidden  w-1/2  text-white max-md:hidden">
           
           {events.map((data,idx)=>(
               <img
               style={{
                transform: `translateY(${index * -100 + "%"})`,
                transition: "transform 0.5s ease-in-out",
              }}
               key={idx} className="h-full w-full object-contain" src={`${data.img}`} alt="" />
            
           ))}
          </div>
          {/* <h1>Coming Soon</h1> */}
        </div>
      </div>
    </>
  );
};

export default Page3;
