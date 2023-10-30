import React from 'react'

function PageHeader({ subHeader, Header, description }) {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <p className='font-light text-gray-600 font-poppins text-center tracking-[1.6px] leading-[20px]'>{subHeader}</p>
      <h1 className='text-6xl text-[#5e4134]  font-bold font-poppins'>{Header}</h1>
      <p className='w-5/6 sm:4/6 md:w-3/6 lg:w-3/6 text-center text-[0.9rem] leading-[24px] text-[#8f8f8f]'>{description}</p>
      <hr className=' h-[2px] bg-slate-500 w-[100px] mt-6' />
    </div>
  )
}

export default PageHeader