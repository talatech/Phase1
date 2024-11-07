import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HomeHeader() {
  return (
    <div className='flex flex-col items-center pt-10 text-white gap-2  min-h-[calc(100vh-70px)]'>
      <h1 className='text-3xl'>Welcome to Talatech</h1>
      <p>Ready to Elevate Your Business with expert Freelance Solutions? Look No Further!</p>
      <p>In dolor laborum sunt veniam sint ea. Aliquip laboris eiusmod id cupidatat irure. Ipsum voluptate labore nulla eu minim sint deserunt velit nulla excepteur dolor aute ullamco. Nulla anim consequat cillum voluptate id aute officia. Excepteur velit qui velit laboris esse non. Ex consequat labore proident culpa ex incididunt. Ullamco ad irure amet duis tempor est minim pariatur pariatur.</p>
      <div className='flex flex-row items-center gap-3'>
        <Link className='text-3xl' href='/about'>About Us</Link>
        <MoveUpRight size={30}/>
      </div>
    </div>
  
  )
}
