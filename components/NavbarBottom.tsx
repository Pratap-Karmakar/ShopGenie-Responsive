import React from 'react'
import {GoLocation,GoHome} from 'react-icons/go'

const NavbarBottom = () => {
  return (
    <div className='w-full bg-[#99627A] h-12 hidden md:flex justify-between'>
        <div className='flex items-center ml-5 text-white font-semibold'>
            <GoLocation className='pr-1 text-xl'/>
            <span className='pr-3'>Bankura, 722101</span>
            <GoHome className='pr-1 text-xl'/>
            <span>Master Colony, Cinema Road.</span>
        </div>
        <ul className='flex items-center gap-4 mr-5 text-lg font-semibold text-white'>
            <li className='bottomNavLi'>Link</li>
            <li className='bottomNavLi'>Link</li>
            <li className='bottomNavLi'>Link</li>
            <li className='bottomNavLi'>Link</li>
            <li className='bottomNavLi'>Link</li>
            <li className='bottomNavLi'>Link</li>
            <li className='bottomNavLi'>Link</li>
            <li className='bottomNavLi'>Link</li>
        </ul>
    </div>
  )
}

export default NavbarBottom