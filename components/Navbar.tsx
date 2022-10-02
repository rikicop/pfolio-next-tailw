import Image from 'next/image'
import React from 'react'
//import {FaBars, FaTimes} from 'react-icons'
import Logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-gray-300">
      <div className='pt-5'>
        <Image src={Logo} alt="Logo Image" height={200} width={200}/>
      </div>
    </div>
  )
}

export default Navbar