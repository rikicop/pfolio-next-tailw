import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-blue-600'>About Me</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'> I am a Web Developer</p>
                    <p className='py-2 text-gray-600'>
                        JavaScript and Python Programmer.
                        I have two years of experience in web development.
                        I have experience in JavaScript, React web Development and backend programming.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta cumque deleniti natus rerum praesentium veritatis numquam consequatur. Iste accusamus odio deserunt culpa cum praesentium sit ducimus, dolore error vitae. Tempore?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis neque quod assumenda eius voluptate illum, nam quidem obcaecati quaerat laudantium veniam eligendi quo fuga corrupti saepe libero optio doloribus quae!
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                        Check out some of my work
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src='https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='about' />
                </div>
            </div>
        </div>
    )
}

export default About