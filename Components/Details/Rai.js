import React from 'react'

const Rai = () => {
  return (
   <div className="min-h-screen w-full bg-black relative overflow-hidden justify-center items-center">
    <div className="blue"></div>
    <div className="violet"></div>
    <div className="flex w-full relative z-40 mt-40 px-16 text-white">
        <div className="img h-60 w-60 shrink-0">
            <img className='rounded-xl' src={"/RaiSir.png"} alt="" />
        </div>
        <div className="flex flex-col px-16 py-4 gap-4">
            <h1 className='text-5xl font-semibold'>Dr. Ashok Kumar Rai</h1>
            <h3 className='text-3xl'>Director Administrator LNCT Group of Colleges</h3>
            <p className='text-xl'>
                
Dr. Ashok Kumar Rai, currently holding the position of Director of Administration at LNCT Bhopal, is a seasoned professional in the field of Management with an extensive 24-year career. His academic journey led him to earn a Ph.D. in Management, where he delved into the intricacies of the tourism industry, particularly focusing on the state of Madhya Pradesh. Dr. Rai's research work is characterized by its goal to identify and address the challenges plaguing the tourism sector, emphasizing practical solutions tailored to the unique context of Madhya Pradesh. This commitment to problem-solving is exemplified by his publication of three research papers that have contributed valuable insights to the field.
Moreover, Dr. Rai's innovative prowess extends to the realm of technology, where he holds a patent for an Automatic Appliances Controller, demonstrating his multifaceted skills and interests. His significant work experience and dedication to both academia and administration underscore his standing as a respected figure in the Management field. Dr. Ashok Kumar Rai's contributions continue to leave a lasting impact, bridging the gap between research and practical solutions, and furthering the development of the tourism industry in Madhya Pradesh and beyond.

            </p>
        </div>
    </div>
   </div>
  )
}

export default Rai