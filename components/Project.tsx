import React from 'react'
import ProjectCard from './Helper/ProjectCard'

const Project = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='text-center'>
        <p className='heading__mini'>Recent Works</p>
        <h1 className='heading__primary'>My Best <span className='text-yellow-300'>Projects</span></h1>
      </div>
      <ProjectCard 
        title='E-commerce Website'
        tech1='React'
        tech2='Next JS'
        tech3='Tailwind'
        tech4='TypeScript'
        image='/images/pro.jpg' 
      />
      <ProjectCard 
        title='Portfolio Website'
        tech1='React'
        tech2='Next JS'
        tech3='Tailwind'
        tech4='TypeScript'
        image='/images/pro1.jpg' 
      />
      <ProjectCard 
        title='Fullstack Food delivery Webapp'
        tech1='React'
        tech2='Next JS'
        tech3='Node JS'
        tech4='MongoDB'
        image='/images/pro2.jpg' 
      />
      <ProjectCard 
        title='Travel Website'
        tech1='React'
        tech2='Next JS'
        tech3='Node JS'
        tech4='MongoDB'
        image='/images/pro4.jpg' 
      />
    </div>
  )
}

export default Project