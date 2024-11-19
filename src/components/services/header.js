import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-hero-pattern '>
      <div className='lg:max-w-7xl lg:m-auto flex flex-col lg:flex-row lg:items-center items-center text-center lg:justify-between py-10 px-5 lg:px-20'>
        <Image src='/thumbnail/service-header.png' width={385} height={351} alt='about-image' className='md:w-1/3 w-fit'/>
        <div className='flex flex-col gap-3 lg:gap-8 lg:max-w-md'>
          <h2 className='lg:text-6xl text-2xl text-white'>Here with all your</h2>
          <p className='text-white font-bold text-2xl lg:text-6xl'>technological requirements</p>
        </div>
      </div>
    </div>
  )
}
