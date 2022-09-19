import React from "react";

// import data
import { about } from "../data";

// import icon
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  const { icon, link, subtitle1, subtitle2, title } = about;
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* title */}
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-dely="100"
        >
          <img src={icon} alt="icon" />
          <h2 className="h2 section-title ">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* subTitle1 */}
        <p
          className="md:text-body-md mb-12"
          data-aos="fade-up"
          data-aos-dely="200"
        >
          {subtitle1}
        </p>
        {/* subTitle1 */}
        <p
          className="md:text-body-md mb-8"
          data-aos="fade-up"
          data-aos-dely="300"
        >
          {subtitle2}
        </p>
        <div>
          <a
            href=""
            className="link flex items-center gap-x-2 hover:gap-x-4 transition-all"
            data-aos="fade-down"
            data-aos-dely="500"
          >
            {link}
            <IoIosArrowDroprightCircle className="text-xl text-primary-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
