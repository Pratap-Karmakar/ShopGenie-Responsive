import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#99627A] text-white pt-4 pb-6'>
      <div className='mx-auto'>
        <ul className='w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-200'>
          <li className='hover:text-white duration-200 cursor-pointer'>All Departments</li>
        </ul>
        <p className='font-medium text-zinc-300 text-center mt-4'>© 2023 ShopGenie.com All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer