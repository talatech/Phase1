'use client'
import Link from 'next/link'
import React from 'react'
import { inter, orbitron } from '../../public/fonts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { MessageCircleMore } from 'lucide-react';

export default function Navbar() {

  const pathname = usePathname();
  const navLinks = [
    {
      id: 1,
      link: '/',
      name: 'Home Page'
    },
    {
      id: 2,
      link: '/about',
      name: 'About Us'
    },
    {
      id: 3,
      link: '/service',
      name: 'Services'
    },
    {
      id: 4,
      link: '/contact',
      name: 'Contact Us'
    }
  ]
  return (
    <div className='flex flex-row justify-between m-4 py-2 px-10 bg-transparent'>
      <div id='logo' className={`${orbitron.className} text-primary`}>talatech</div>
      <nav id='navbar' >
        <ul className='flex flex-row gap-20 text-primary tex'>
          {navLinks.map((item) => (
            <Link key={item.id} href={item.link} className={clsx(
              `${inter.className} text-primary text-3xl `,
              {
                'font-bold': pathname === item.link,
              }
            )}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div id='chat'>
        <MessageCircleMore size={40} className='text-white pr-20'/>
      </div>
    </div>
  )
}
