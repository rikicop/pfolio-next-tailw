import React from 'react'

const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] m-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest text-blue-600 uppercase'>Skills</p>
                <h2 className='py-4'>What Can I do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills