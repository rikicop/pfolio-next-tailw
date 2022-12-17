import React from 'react'
import ProjectItem from '../components/ProjectItem'
import insectImg from '../public/assets/projects/insects.png'
import cartImg from '../public/assets/projects/cart.png'
import restaurantImg from '../public/assets/projects/restaurant.png'
import blogImg from '../public/assets/projects/blog.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-blue-600'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='Pest Control' backgroundImg={insectImg} projectUrl='/property' />
                    <ProjectItem title='Car Parts' backgroundImg={cartImg} projectUrl='/property' />
                    <ProjectItem title='Restaurant' backgroundImg={restaurantImg} projectUrl='/property' />
                    <ProjectItem title='Blog App' backgroundImg={blogImg} projectUrl='/property' />

                </div>
            </div>
        </div>
    )
}

export default Projects