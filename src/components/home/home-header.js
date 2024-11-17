import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HomeHeader() {
  return (
    <div className='flex justify-center pt-20'>
      <div className='flex flex-col items-center text-white gap-2  min-h-[calc(100vh-160px)] max-w-[1350px]'>
        <h1 className='text-5xl text-wrap text-center'>Welcome to Talatech - Your Trusted Partner in Digital Growth</h1>
        <div className='flex flex-col gap-3 items-center'>
          <p className='text-2xl'>Ready to Elevate Your Business with expert Freelance Solutions? Look No Further!</p>
          <p className='text-base text-white text-center'>At Talatech Freelance Collective, we specialize in delivering high-quality, project-based services in web development, digital marketing, video editing, SEO, and cybersecurity. Whether you’re a small business or a large enterprise, we’ve got the talent and expertise to drive your growth.</p>
          <div className='flex flex-row items-center gap-3'>
            <Link className='text-4xl' href='/about'>About Us</Link>
            <MoveUpRight size={32} />
          </div>
        </div>
      </div>
    </div>

  )
}
