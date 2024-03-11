import React from 'react';


// import data
import { nav } from '../data';

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="w-full h-full flex flex-row justify-center items-center gap-x-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-white text-body-sm px-2 py-0.5 rounded-md  hover:bg-white hover:text-black"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
