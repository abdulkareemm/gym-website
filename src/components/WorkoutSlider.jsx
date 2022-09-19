import React from 'react';

// import data
import {workouts} from "../data"

// import swiper react component
import {Swiper,SwiperSlide} from 'swiper/react'

// import swiper style 
import "swiper/css"
import "swiper/css/navigation"
import "../workoutSlider.css"

// import require modules
import {Navigation} from "swiper"


const WorkoutSlider = () => {
 
  const {programs} = workouts
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}

      className="workoutSlider"
    >
      {programs.map((program, index) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            key={index}
            className={`${
              index % 2 === 0
                ? "max-w-[340px] max-h-[340px]"
                : "max-w-[300px] max-h-[300px] mt-[20px]"
            } relative cursor-pointer`}
          >
            <img
              src={image}
              alt="image slider"
              className="w-full h-full object-cover "
            />
            <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]">
              <div className="font-primary font-semibold text-sm text-neutral-500">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
