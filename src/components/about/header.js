import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-hero-pattern '>
      <div className='max-w-7xl m-auto flex flex-col lg:flex-row items-center justify-between py-10 px-5 lg:px-20'>
        <Image src='/thumbnail/about-tb-1.png' width={385} height={351} alt='about-image' />
        <div className='flex flex-col gap-8 max-w-md'>
          <h2 className='text-6xl font-bold text-white'>Who we are</h2>
          <p className='text-white text-3xl'>At TalaTech, we specialize in Website Performance Audits, Full Stack Web Development, SEO, and Design. Whether you need quick assessments or comprehensive solutions, our team helps businesses overcome challenges, seize opportunities, and drive measurable growth.</p>
        </div>
      </div>
    </div>
  )
}
