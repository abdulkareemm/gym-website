import React from 'react';

import {community}from "../data"
// import swiper react component
import {Swiper,SwiperSlide} from 'swiper/react'

// import swiper style 
import "swiper/css"
import "swiper/css/navigation"
import "../workoutSlider.css"

// import require modules
import {Navigation} from "swiper"

const CommunitySlider = () => {
  const {testimonials} = community
  return <Swiper slidesPerView={3}
  spaceBetween={32}
  centeredSlides={'auto'}
  grabCursor={true}
  modules={[Navigation]}
  loop={true}
  >
  {testimonials.map((slider,index)=>{
    const {image,message,name} = slider
    return (
      <SwiperSlide key={index}>
        <div className="relative">
          <div>
            <img src={image} alt="" />
          </div>
          <div className='absolute bottom-[30px] text-white p-[20px] text-center'>
            <div className='mb-8 italic text-lg font-light'>{message}</div>
            <div className="flex items-center justify-center gap-x-[3px]">
              <span className="text-[30px] text-primary-200 font-bold">~</span>
              <div className="text-[20px] font-bold">
                {name}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  })}
  </Swiper>;
};

export default CommunitySlider;
