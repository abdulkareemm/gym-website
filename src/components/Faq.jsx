import React from "react";

import { faq } from "../data";

import {Accordion} from "./index"

import {} from "react-icons"
const Faq = () => {

  const {accordions,icon,title} = faq
  return <section className="section pt-[480px] lg:pt-[280px]">
  <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6" data-aos="fade-up"
    data-aos-offset = "300"
    data-aos-delay="200">
    <div className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0 ">
      <img src={icon} alt="" className="lg:hidden"/>
      <h2 className="h2 section-title lg:mt-[100px]">{title} <span className="text-peimary-200">.</span></h2>
    </div>
    <div className="flex flex-col gap-y-4 px-4 "
    data-aos="fade-up"
    data-aos-offset = "300"
    data-aos-delay="200">
      {accordions.map((accordion,index)=>{
        return <Accordion accordion={accordion} key={index}/ >

      })}
    </div>
  </div>
  </section>;
};

export default Faq;
