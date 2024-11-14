import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='max-w-7xl m-auto'>
      <div className='bg-[#25253E] flex flex-row items-center justify-between py-10 px-20'>
        <Image src='/thumbnail/about-tb-1.png' width={385} height={351} alt='about-image' />
        <div className='flex flex-col gap-8 max-w-md'>
          <h2 className='text-6xl font-bold text-[#C9ADA7]'>Who we are</h2>
          <p className='text-white text-2xl'>Lorem ipsum Ull Cillum tempor adipisicing labore consequat commodo ex nisi. Nulla pariatur nulla fugiat nulla officia dolor laboris.</p>
        </div>
      </div>
    </div>
  )
}
