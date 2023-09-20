import React from 'react'

const Page4 = () => {
  return (
   <>
   <div id='page4' className=".page min-h-screen w-full relative flex gap-8 p-4 flex-col items-center justify-between text-white bg-black pb-10">
   <div  className="blue">
    
    </div>
    <div  className="violet">
      
      </div>
      <h1 className='relative z-40 text-7xl font-bold'>Our Team</h1>
     
      <div className="card  h-fit relative z-40  gap-2 items-center justify-center flex flex-col  p-4 border-b">
        <img className='h-48 w-48 rounded-xl' src={"/rai.png"} alt="" />
        <h1 className='text-xl'>Dr. Ashok Kumar Rai</h1>
        <h3>Director Administration</h3>
        <h3>Patron</h3>
       </div>
      <div className="flex items-center justify-center gap-10 relative z-40 flex-wrap">
      <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
      <img className='h-48 w-48 rounded-xl object-cover' src={"/aditya.png"} alt="" />
        
        <h1 className='text-xl'>Prof. Aditya Patel </h1>
        <h3>Assistant Professor</h3>
        <h3>Club Coordinator</h3>

       </div>
       <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 w-48 rounded-lg' src={"/Maam.png"} alt="" />
        <h1 className='text-xl'>Dr. Nidhi Singh</h1>
        <h3>Professor</h3>
        <h3>Club Co-cordinator</h3>
       </div>
      </div>
      <div className="flex flex-wrap  w-full items-center justify-center gap-8 ">
      <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 w-48 rounded-lg' src={"/aryan.png"} alt="" />
        <h1 className='text-xl'>Aryan Singh Parihar</h1>
        <h3>President</h3>
       </div>
       <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 w-48 rounded-lg' src={"/aathar.png"} alt="" />
        <h1 className='text-xl'>Athar Khan</h1>
        <h3>secretary</h3>
       </div>
       <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 object-contain rounded-xl' src={"/Garvit.png"} alt="" />
        <h1 className='text-xl'>Garvit Jain</h1>
        <h3>Web Developer</h3>
       </div>
       <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 w-48 rounded-lg object-cover' src={"/akshat.png"} alt="" />
        <h1 className='text-xl'>Akshat Gupta</h1>
        <h3>Marketing &  PR</h3>
       </div>
      </div>
      <div className="flex flex-wrap relative z-40 w-full items-center justify-center gap-8 ">
      <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 w-52 object-cover rounded-lg' src={"/Merrena.png"} alt="" />
        <h1 className='text-xl'>Mereena R Thomas</h1>
        <h3>Graphic Designer</h3>
       </div>
      <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 w-48 rounded-lg' src={"/mansi.png"} alt="" />
        <h1 className='text-xl'>Tanya Talreja</h1>
        <h3>Finance</h3>
       </div>
       <div className="card  h-fit p-3  gap-2 items-center justify-center flex flex-col border-b">
        <img className='h-48 w-48 rounded-lg' src={"/astha.png"} alt="" />
        <h1 className='text-xl'>Harshita Sharma</h1>
        <h3>Content Manager</h3>
        <h3></h3>
       </div>
    
      </div>
   </div>
   </>
  )
}

export default Page4