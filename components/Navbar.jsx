import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => { setNav(!nav) }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-gray-300">
      {/* Logo */}
      <div className='-ml-10'>{/*  Alternative logo position  className='pt-5 -ml-10' */}
        <Image src={Logo} alt="Logo Image" height={200} width={200} />
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Hamburger icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
      </div>
      {/* Mobile menu*/}
      <ul className={nav ? `absolute top-0 left-0 w-full bg-[#0a192f] flex flex-col justify-center items-center peque:overflow-y-auto peque:pt-[200px]` : 'hidden'}>
        <li className="py-6 text-4xl">Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social icons */}
      <div className='hidden'></div>
    </div>
  )
}

export default Navbar