import React from 'react'
import { inter } from '/public/fonts.js'
import Image from 'next/image'
import Card from '../card'

export default function Clients() {

  const clientsData = [
    {
      name: 'Startup Digital Launch Bundle',
      imageUrl: '/thumbnail/web-development.png',
      subtitle: 'Website development, SEO, and essential branding',
      className: 'font-bold text-2xl'
    },
    {
      name: 'Growth Bundle',
      imageUrl: '/thumbnail/seo.png',
      subtitle: 'Content audit, SEO, and CRO for established businesses.',
      className: 'font-bold text-2xl'
    },
    {
      name: 'Basic Security & Infrastructure Bundle',
      imageUrl: '/thumbnail/security.png',
      subtitle: 'Security assessment and basic AWS setup',
      className: 'font-bold text-2xl'
    }
  ]
  const addOnList = [
    'Additional content creation (per page or blog post)',
    'Social media content (monthly)',
    'Targeted video editing for short, promotional videos'      
  ]
  return (
    <div className='lg:flex hidden flex-col lg:gap-24 gap-10 items-center p-11 pb-24 bg-gradient-to-l from-gray-900 to-blue-800'>
      <h1 className={`${inter.className} text-white text-7xl font-bold `}>Bundles</h1>
      <div className='flex flex-col flex-wrap justify-center lg:flex-row gap-20 '>
        {clientsData.map((item, index) => (
          <Card key={index} index={index} item={item}></Card>
        ))}
      </div>
      <div className='text-white items-start w-full max-w-7xl'>
        <p className='text-5xl font-bold'>Add-Ons:</p> 
        <ul className='my-4'>
          {addOnList.map( (item, index) => (
            <li key={index} className='text-3xl text-black bg-white shadow-md py-4 px-8 my-4 rounded-md'><span className='text-3xl text-red-600 pr-2'>&#9670;</span>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
