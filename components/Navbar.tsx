import Image from 'next/image'
import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-gray-300">
      {/* Logo */}
      <div className='-ml-10'>{/*  Alternative logo position  className='pt-5 -ml-10' */}
        <Image src={Logo} alt="Logo Image" height={200} width={200}/>
      </div>
      {/* Menu */}
        <ul  className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul> 
      {/* Hamburger icon */}
      <div className='md:hidden'>
        <FaBars/>
      </div>
      {/* Mobile menu*/}     
      <ul className='absolute'>
         <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
      </ul> 
      {/* Social icons */}
       <div className='hidden'></div> 
    </div>
  )
}

export default Navbar