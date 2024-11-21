import Image from 'next/image'
import React from 'react'

export default function WebDevelopment() {
  return (
    <div className='bg-hero-pattern '>
      <div className='max-w-7xl m-auto flex flex-col lg:flex-row items-center justify-between py-10 px-5 lg:px-20'>
        <Image src='/thumbnail/monitor.png' width={385} height={351} alt='about-image' />
        <div className='flex flex-col gap-8 max-w-md'>
          <h2 className='text-6xl font-bold text-white'>Web Development</h2>
          <p className='text-white text-3xl'>we create the road to your successful business</p>
        </div>
      </div>
    </div>
  )
}
