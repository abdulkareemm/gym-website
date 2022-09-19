import React from 'react';

// import data
import {workouts} from "../data"



// import component
import {WorkoutSlider} from "./index"

const Workouts = () => {

  const {icon,title} = workouts
  return (
    <section className="section">
      {/* section title */}
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-dely="200"
      >
        <img src={icon} alt="icon" />
        <h2 className="h2 section-title ">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* slider */}
      <div data-aos="fade-down" data-aos-dely="400">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
