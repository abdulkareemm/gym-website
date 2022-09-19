import React, { useState } from "react";

// import icons
import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(1);
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="600"
    >
      {plans.map((plan, ind) => {
        const { name, price, list, dely } = plan;
        return (
          <div
            key={ind}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]"
          >
            <div
              className={`${
                ind === index
                  ? "bg-neutral-500 text-white md:scale-110"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition-all duration-100`}
              onClick={() => setIndex(ind)}
            >
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">
                <div>
                  <div
                    className={`${
                      ind === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } h-[26px] font-primary text-sm font-semibold  mx-auto w-min px-[14px] flex items-center justify-center mb-8`}
                  >
                    {name}
                  </div>
                  <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                    <div className="leading-none">
                      <span className="tracking-[0.1px]">{price}</span>
                      <span className="text-sm font-medium">$</span>
                    </div>
                    <span>/month</span>
                  </div>
                </div>
                <div>
                  <ul className="flex flex-col gap-y-4 mb-8">
                    {list.map((item, ind) => {
                      const { name } = item;
                      return (
                        <li className="flex items-center gap-x-[10px]">
                          <BsCheckCircleFill />
                          <div>{name}</div>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`${
                      ind === index
                        ? "text-neutral-500 bg-white"
                        : "border border-neutral-500"
                    } btn btn-lg rounded-[1px] lg:max-auto`}
                  >
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
