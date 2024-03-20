import React from 'react';


import {footer} from "../data"

const Footer = ({ visitors }) => {
  const { copyrightText, logo } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[175px] px-[20px]">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* logo */}
        <a>
          <img src={logo} alt="" />
        </a>
        {/* text copyright */}
        <div className='flex gap-2'>
          <p className="text-neutral-300 text-sm">{copyrightText}</p>
          <p className="text-neutral-300 text-sm">visitors : {visitors}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
