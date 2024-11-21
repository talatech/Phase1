import React from 'react'
import { inter } from '/public/fonts.js'
import Image from 'next/image'
import Card from '../card'

export default function PortfolioHeader() {

  const clientsData = [
    {
      name: 'Portfolio Title',
      imageUrl: '/thumbnail/portfolio-bundle-one.png',
      subtitle: 'Clickable link for the portfolio here',
      className: 'text-2xl',
      background: 'bg-[#E1A9FF]',
      nameClassName: 'font-bold'
    },
    {
      name: 'Portfolio Title',
      imageUrl: '/thumbnail/portfolio-bundle-two.png',
      subtitle: 'Clickable link for the portfolio here',
      className: 'text-2xl',
      background: 'bg-[#E1A9FF]',
      nameClassName: 'font-bold'
    },
    {
      name: 'Portfolio Title',
      imageUrl: '/thumbnail/portfolio-bundle-three.png',
      subtitle: 'Clickable link for the portfolio here',
      className: 'text-2xl',
      background: 'bg-[#E1A9FF]',
      nameClassName: 'font-bold'
    }
  ]
  return (
    <div className='lg:flex hidden flex-col lg:gap-24 gap-10 items-center p-11 pb-24 bg-secondary'>
      <h1 className={`${inter.className} text-white text-7xl font-bold `}>Portfolio</h1>
      <div className='flex flex-col flex-wrap justify-center lg:flex-row gap-20 '>
        {clientsData.map((item, index) => (
          <Card key={index} index={index} item={item}></Card>
        ))}
      </div>
    </div>
  )
}
