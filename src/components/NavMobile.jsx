import React from "react";

// import data
import { nav } from "../data";

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 
  -z-10 overflow-hidden transition-all h-0 `}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-white text-body-md px-2 font-semibold hover:bg-white hover:text-black"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      {/* btns */}
      <div className="-mt-44 flex justify-center gap-x-8">
        <button className="btn btn-lg text-white">Log in </button>
        <button className="btn btn-lg btn-primary">Sign in</button>
      </div>
    </nav>
  );
};

export default NavMobile;
