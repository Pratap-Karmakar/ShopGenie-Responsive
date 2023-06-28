import React from 'react'

const TopFooter = () => {
  return (
    <div className='w-full bg-[#E7CBCB] border-t-2 border-black'>
        <div className='py-4 flex flex-col gap-2 md:gap-4 justify-center items-center'>
            <p className='font-medium'>We will love to hear what you think!</p>
            <button className='w-36 h-9 border-[1px] text-white rounded-lg border-gray-700 bg-[#99627A] hover:scale-105 transition-all duration-300'>Give Feedback</button>
        </div>
    </div>
  )
}

export default TopFooter