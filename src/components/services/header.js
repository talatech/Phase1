import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='max-w-7xl m-auto'>
      <div className=' flex flex-row items-center justify-between py-10 px-20'>
        <Image src='/thumbnail/service-header.png' width={385} height={351} alt='about-image' />
        <div className='flex flex-col gap-8 max-w-md'>
          <h2 className='text-6xl text-[#C9ADA7]'>Here with all your</h2>
          <p className='text-white font-bold text-2xl'>technological requirements</p>
        </div>
      </div>
    </div>
  )
}
