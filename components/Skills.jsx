import Image from 'next/image'
import React from 'react'
import cssImg from '../public/assets/skills/css.png'
import htmlImg from '../public/assets/skills/html.png'
import githubImg from '../public/assets/skills/ghub.png'
import jsImg from '../public/assets/skills/javascript.png'
import mongodbImg from '../public/assets/skills/mongo.png'
import reactImg from '../public/assets/skills/react.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import nodeImg from '../public/assets/skills/node.png'



const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] m-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest text-blue-600 uppercase'>Skills</p>
                <h2 className='py-4'>What Can I do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={htmlImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={cssImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={githubImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={jsImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={mongodbImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MONGODB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={nodeImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NODE</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={reactImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={tailwindImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills