import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBehance } from "react-icons/fa";

export default function Footer() {
  const pageLinks = [
    {
      name: 'Home Page',
      url: '/'
    },
    {
      name: 'About Us',
      url: '/about'
    },
    {
      name: 'Services',
      url: '/service',
    },
    {
      name: 'Contact Us',
      url: 'contact'
    },
  ]
  return (
    <div className='bg-background flex flex-row justify-between items-center pr-40 pl-11'>
      <div className='py-7'>
        <Image src='/logo.png' width={92} height={71} alt='logo'/>
      </div>
      <div className='flex flex-col items-start gap-3'>
        <ul className='flex flex-row gap-12'>
          {pageLinks.map((item, index) => (
            <Link className='text-primary' key={index} href={item.url}>{item.name}</Link>
          ))}
        </ul>
        <div className='flex flex-row gap-4 items-center'>
          <ul>
            <Link href='/'><FaBehance className='text-white'/></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
