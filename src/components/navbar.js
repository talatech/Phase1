'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { inter, orbitron } from '../../public/fonts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { MessageCircleMore, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
    console.log('pathname', pathname)
  const navLinks = [
    { id: 1, link: '/', name: 'Home Page' },
    { id: 2, link: '/about', name: 'About Us' },
    { id: 3, link: '/service', name: 'Services' },
    { id: 4, link: '/contact', name: 'Contact Us' },
  ];

  return (
    <div className="flex flex-row justify-between items-center m-4 lg:py-2 px-10 bg-transparent">
      <div className='lg:hidden block'></div>
      <div id="logo" className={`${orbitron.className} text-primary text-2xl`}>
        <Link href='/'><Image src='/logos/logo-x.png' width={172} height={36} alt='logo' /></Link>
      </div>

      {/* Desktop Navbar */}
      <nav id="navbar-desktop" className="hidden lg:flex flex-row gap-5 lg:gap-20 text-primary">
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={clsx(
              `${inter.className} text-primary text-xl xl:text-3xl`,
              { 
                'font-bold': 
                  pathname === item.link || 
                  (item.link !== '/' && pathname.split('/')[1] === item.link.split('/')[1])
              }
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <div className="relative lg:hidden">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary focus:outline-none relative z-40"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        <nav
          id="navbar-mobile"
          className={clsx(
            "fixed top-16 left-0 w-full h-full bg-white text-black shadow-lg p-5 transition-all duration-300 z-50",
            { "opacity-100 translate-y-0": isOpen, "opacity-0 -translate-y-full pointer-events-none": !isOpen }
          )}
        >
          <ul className="flex flex-col items-center gap-5 mt-10">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={clsx(
                  `${inter.className} text-black text-xl`,
                  { 'font-bold': pathname === item.link }
                )}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* Chat Icon */}
      <div className="chat hidden lg:block">
        <MessageCircleMore size={40} className="text-primary" />
      </div>
    </div>
  );
}
