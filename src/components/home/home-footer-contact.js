import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { inter } from '../../../public/fonts'

export default function HomeFooterHeader() {
  return (
    <div  className={`${inter.className} flex flex-row justify-between px-20 py-16 bg-gradient-to-b from-purple-500 to-violet-900 text-white`}>
      <div>
        <Image className='w-full' src='/contact-home-logo.png' width={494} height={330} alt='contact-logo'/>
      </div>
      <div className='flex flex-col gap-8'>
        <h2 className='text-5xl font-bold'>Your One Stop Solution</h2>
        <p className='text-2xl text-stone-200'>to all your Web needs from Development to</p>
        <Link className='flex flex-row text-3xl' href='/contact'>Contact Us&nbsp;<MoveUpRight size={33}/></Link>
      </div>
    </div>
  )
}
