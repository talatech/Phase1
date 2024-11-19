import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBehance, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaReddit, FaRedditAlien } from "react-icons/fa";

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

  const socialIcons = [
    {
      name: <FaBehance className='text-primary'/>,
      url: '/'
    },
    {
      name: <FaLinkedinIn className='text-primary'/>,
      url: '/'
    },
    {
      name: <FaGithub className='text-primary'/>,
      url: '/'
    },
    {
      name: <FaRedditAlien className='text-primary'/>,
      url: '/'
    },
    {
      name: <FaInstagramSquare className='text-primary'/>,
      url: '/'
    }
  ]
  return (
    <div className='bg-secondary flex flex-col items-center lg:flex-row lg:justify-between py-10 lg:pr-40 lg:pl-11'>
      <div className=''>
        <Image src='/logos/logo-y.png' width={66} height={73} alt='logo' />
      </div>
      <div className='flex flex-col items-center lg:items-start gap-3'>
        <ul className='flex flex-row gap-3 lg:gap-12'>
          {pageLinks.map((item, index) => (
            <Link className='text-primary' key={index} href={item.url}>{item.name}</Link>
          ))}
        </ul>
        <div >
          <ul className='flex flex-row gap-4'>
            {socialIcons.map((item, index) => (
              <Link className='text-xl' key={index} href={item.url}>{item.name}</Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
