import React from 'react'

const Page2 = () => {
  return (
    <div id='page2' className="page min-h-screen flex-col gap-0 flex items-center justify-center max-md:justify-around w-full bg-black text-white">
      <h1 className='text-7xl uppercase font-bold mt-4 max-md:text-5xl'>ABOUT US</h1>
      <div className="flex items-center max-md:flex-col justify-center">
      <h2 className='w-1/2 text-xl px-16 max-md:px-6 text-center  max-md:w-full max-md:text-lg'> TechVilla, LNCT's Coding Club, is a dynamic haven for tech-enthusiasts. Our mission is to cultivate coding excellence and innovation among students. We offer skill development, project collaboration, and networking opportunities in a supportive environment. With workshops, hackathons, and a thriving community, we empower members to push the boundaries of technology. Join us at TechVilla, where we code, create, and contribute together.</h2>
        <img className='w-1/2 h-full max-md:h-[100vw] max-md:w-full' src={"/about.png"} alt="" />
      </div>
       
        
    </div>
  )
}

export default Page2