"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Gallery = () => {
  return (
<div className="page w-full flex flex-col items-center justify-center bg-black gap-5 z-30 relative max-md:h-fit" id='gallery'>
<h1 className='text-7xl uppercase font-bold mt-4 max-md:text-3xl max-md:w-1/2 max-md:text-center max-md:translate-y-6'>OUR GLIMPES</h1>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img src="/GroupPhoto.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="/OrientationTeam.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/orientation2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Solidity1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Solidity2.png" alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
</div>
  )
}

export default Gallery