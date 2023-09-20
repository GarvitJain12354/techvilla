import React from 'react'

const About = () => {
  return (
    <div  className="page w-full flex flex-col items-center text-white justify-center h-screen bg-black">
       <h1 className='text-7xl max-md:text-3xl max-md:w-1/2 max-md:text-center'>OUR MISSION & VISION</h1>
<div className="flex items-center justify-center max-md:flex-col">
  <div className="W-1/2 flex px-14 flex-col items-center justify-center max-md:w-full max-md:px-4">
  <h3 className='text-xl max-md:text-lg max-md:text-center max-md:mt-4'>

We strive to empower students with a rich experience of coding and hone their skills to help them skyrocket themselves through this tech-realm of today. We Aim to nurture creativity, innovation through a lifelong love for coding.

       </h3>
    <h3 className='text-xl max-md:text-lg max-md:text-center max-md:mt-4'>Our Vision is to empower students with the power of coding and learning in public, that can unlock a world of infinite possibilities, and to alleviate the tech leaders of tommorow.</h3>
  </div>

  <img className='h-full w-1/2 object-contain max-md:w-full' src={"/mission.png"} alt="" />
</div>
    </div>
  )
}

export default About