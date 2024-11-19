import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { inter } from '../../../public/fonts'

export default function HomeFooterHeader() {
  return (
    <div  className={`${inter.className} flex flex-col-reverse gap-10 lg:flex-row lg:justify-between px-20 py-16 bg-gradient-to-l lg:from-gray-900 lg:to-blue-800 from-purple-500 to-violet-900`}>
      <div className='flex justify-center'>
        <Image className='w-full lg:w-1/2 ' src='/contact-home-logo.png' width={494} height={330} alt='contact-logo'/>
      </div>
      <div className='flex flex-col gap-8'>
        <h2 className='text-5xl font-bold text-white'>Your One Stop Solution</h2>
        <p className='text-2xl text-stone-200'>to all your Web needs from Development to</p>
        <Link className='flex flex-row text-3xl bg-primary rounded-md py-2 px-5 justify-center max-w-fit' href='/about'>About Us&nbsp;<MoveUpRight size={33}/></Link>
      </div>
    </div>
  )
}
