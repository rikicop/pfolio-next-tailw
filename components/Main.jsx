import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center short:mt-[140px] md:mt-5 msm:mt-20'>
                <div>
                    <p className='uppercase text-dm tracking-widest text-gray-600'>
                        Welcome to my portfolio
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-blue-600'>Ricardo</span>
                    </h1>
                    <h1 className='py-2 text-gray-600'>
                        A React Web Developer
                    </h1>
                    <p className='py-4 text-gray-500 max-w-[70%] m-auto'>
                        I'm a fron-end developer with a passion for creating great and functional websites.
                        Currently, I'm focused on responsive web applications using React and Next.js I also have experience
                        in back-end development using Node.js and Express.js
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main