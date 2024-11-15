import React from 'react'
import { inter } from '/public/fonts.js'
import Image from 'next/image'
import Card from '../card'

export default function Clients() {

  const clientsData = [
    {
      name: 'Revamped their e-commerce platform, resulting in a 30% increase in sales.',
      imageUrl: '/thumbnail/tesla.png',
      button: 'ABC Corp'
    },
    {
      name: 'Delivered an MVP that attracted their first round of investors in less than 3 months.',
      imageUrl: '/thumbnail/vw.png',
      button: 'XYZ startup'
    },
    {
      name: 'Provided video editing services that increased their YouTube subscribers by 50%.',
      imageUrl: '/thumbnail/slack.png',
      button: 'Digital Media'
    }
  ]
  return (
    <div className='flex flex-col gap-4 items-center p-11 pb-24 bg-gradient-to-b from-slate-700 to-indigo-300'>
      <h1 className={`${inter.className} text-white text-7xl font-bold `}>Notable Clients</h1>
      <div className='flex flex-row gap-20'>
        {clientsData.map((item, index) => (
          <Card key={index} index={index} item={item}></Card>
        ))}
      </div>
    </div>
  )
}
