import React from 'react'
import { inter } from '/public/fonts.js'
import Image from 'next/image'

export default function Clients() {

  const clientsData = [
    {
      name: 'Revamped their e-commerce platform, resulting in a 30% increase in sales.',
      imageUrl: '/tesla.png',
      button: 'ABC Corp'
    },
    {
      name: 'Delivered an MVP that attracted their first round of investors in less than 3 months.',
      imageUrl: '/vw.png',
      button: 'XYZ startup'
    },
    {
      name: 'Provided video editing services that increased their YouTube subscribers by 50%.',
      imageUrl: '/slack.png',
      button: 'Digital Media'
    }
  ]
  return (
    <div className='flex flex-col gap-4 items-center p-11 pb-24 bg-gradient-to-b from-slate-700 to-indigo-300'>
      <h1 className={`${inter.className} text-white text-7xl font-bold `}>Notable Clients</h1>
      <div className='flex flex-row gap-20'>
        {clientsData.map((item, index) => (
          <div key={index} className='flex flex-col rounded-2xl overflow-hidden w-96'>
            <Image src={item.imageUrl} className='w-full' width={370} height={200} alt={item.button}/>
            <div className='flex flex-col items-center justify-center p-8 gap-7 bg-white'>
              <p className={`${inter.className} text-2xl text-center font-semibold`}>{item.name}</p>
              <p className='rounded-full flex px-7 py-3 border font-semibold'>{item.button}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
