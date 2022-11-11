import React, { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../public/assets/logo.png";
import Image from 'next/image'

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md fixed w-full top-0 left-0 z-[100]">
    <div className="md:flex bg-gray-900 text-white justify-between py-2 md:px-2">
    <div className='ml-2 pt-1'>
      <Image src={Logo} alt="Logo Image" height={45} width={45} />
    </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-[0.9rem] top-4 cursor-pointer md:hidden"
        >
        <span className="text-4xl text-cyan-600">
          {open ? <FaTimes /> : <FaBars />}
        </span> 
          
        </div>
        {/*  overflow-scroll max-h-[85vh] <- Permite Scroll en Landscape*/}
        {/* 'raw': '(max-height: 1234px),(min-width:920px)' */}
        <ul
          className={`overflow-scroll pr-1 short:pt-[180px] short:pb-[200px]  max-h-[85vh] flex flex-col justify-center items-center md:overflow-hidden md:flex-row md:items-center md:pb-0 pb-8 absolute md:static bg-gray-900 text-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? "top-[4.5rem] " : "top-[-450px]"
            } `}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-3">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
