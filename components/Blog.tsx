import React from 'react'
import BlogCard from './Helper/BlogCard'

const Blog = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
      <div className='text-center'>
        <p className='heading__mini'>My Blog</p>
        <h1 className='heading__primary'>
          My Latest <span className='text-yellow-300'>Blog</span> and news
        </h1>
      </div>
      <div className='w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      items-center gap-[2rem]'>
        <div
          data-aos='zoom-in'
          data-aos-anchor-placement='top-bottom'
        >
          <BlogCard 
            title='Fullstack Developer Roadmap'
            comment='4'
            date='24 January 2024'
            image='/images/comp4.jpg' 
          />
        </div>
        <div
          data-aos='zoom-in'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='200'
        >
          <BlogCard 
            title='Starting With React JS'
            comment='8'
            date='26 January 2024'
            image='/images/comp6.jpg' 
          />
        </div>
        <div
          data-aos='zoom-in'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='400'
        >
          <BlogCard 
            title='Time Management In Tech Job'
            comment='4'
            date='29 January 2024'
            image='/images/comp5.jpg' 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog