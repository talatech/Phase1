import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { manrope } from '../../../public/fonts'

export default function HomeHeader() {
  return (
    <div className='flex justify-center py-20 lg:py-72 bg-hero-pattern bg-no-repeat bg-cover  px-10 sm:px-32 text-center m-0'>
      <div className='flex flex-col justify-center text-white gap-3 lg:gap-10  max-w-[1350px]'>
        <h1 className='text-5xl text-wrap text-center font-bold'>Welcome to Talatech</h1>
        <div className='flex flex-col gap-4 lg:gap-3 items-center'>
          <p className='text-xl'>Ready to Elevate Your Business with expert Freelance Solutions? Look No Further!</p>
          <p className={`${manrope.className} text-white text-center`}>At TalaTech, we specialize in <span className='font-bold'>Website Performance Audits, Full Stack Web Development, Digital Marketing, and SEO.</span> From quick assessments to comprehensive solutions, our team is here to drive your growth through expert audits and project-based services.</p>
          <div className='flex flex-row items-center gap-3 text-black bg-primary rounded-md py-2 px-5 justify-center max-w-fit mt-10'>
            <Link className='text-2xl' href='/about'>Get a Free Mini Audit</Link>
            <MoveUpRight size={32} />
          </div>
        </div>
      </div>
    </div>

  )
}
