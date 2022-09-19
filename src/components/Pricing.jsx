import React from 'react';

// import data
import {pricing} from "../data"

// import component
import {PlanList} from "./index"

const Pricing = () => {

  const {icon,plans,title} =pricing
  return (
    <section className="section">
      {/* section title */}

      <div className="section-title-group mx-auto sm:flex sm:items-start">
        <img src={icon} alt="pricing icon" className="" />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      <div>
        <PlanList />
      </div>
    </section>
  );
};

export default Pricing;
