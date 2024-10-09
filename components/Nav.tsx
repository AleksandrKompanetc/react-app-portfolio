import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid';
import React from 'react';

const Nav = () => {
  return (
    <div className='fixed w-[100%] z-[1000] bg-gray-800'>
      <div className='flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
        <div className='font-logo text-white text-[18px]'>
          <span className='text-[30px] md:text-[40px] text-yellow-400'>WD</span>
          Warriors
        </div>
        <ul className='md:flex hidden items-center space-x-10'>
          <li>
            <a className='nav__link' href="#">Home</a>
          </li>
          <li>
            <a className='nav__link' href="#">About</a>
          </li>
          <li>
            <a className='nav__link' href="#">Services</a>
          </li>
          <li>
            <a className='nav__link' href="#">Blog</a>
          </li>
          <li>
            <a className='nav__link' href="#">Contact</a>
          </li>
        </ul>
        <Bars3CenterLeftIcon className='w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180' />
      </div>
    </div>
  )
}

export default Nav;