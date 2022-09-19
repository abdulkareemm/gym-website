import React from 'react';

// import data
import {pricing} from "../data"

// import component
import {PlanList} from "./index"

const Pricing = () => {

  const {icon,plans,title} =pricing
  return (
    <section className="section" >
      {/* section title */}

      <div className="section-title-group max-h-[540px] mx-auto px-4 lg:px-0 " data-aos="fade-up" data-aos-offset="200" data-aos-delay="200">
        <img src={icon} alt="pricing icon" />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      <div>
        <PlanList plans={plans}/>
      </div>
    </section>
  );
};

export default Pricing;
