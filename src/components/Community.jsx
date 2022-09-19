import React from 'react';

import {community} from "../data"

import {CommunitySlider}from "./index"
const Community = () => {
  const {icon,title} = community
  return (
    <section className="section relative">
      <div className="container mx-auto">
        <div className="flex">
          {/* section title */}

          <div
            className="section-title-group max-w-[240px] mx-auto px-4 lg:px-0 lg:ml-0 "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <img src={icon} alt="pricing icon" />
            <h2 className="h2 section-title">
              {title}
              <span className="text-primary-200">.</span>
            </h2>
          </div>
          <div
            className="absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="500"
          >
            <CommunitySlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
