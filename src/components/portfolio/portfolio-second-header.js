import Image from 'next/image'
import React from 'react'

export default function PortfolioSecondHeader() {
  return (
    <div className='flex items-center justify-center py-20 px-10'>
      <Image src='/thumbnail/portfolio-thumbnail-big.png' width={500} height={600} className='w-1/2'/>
    </div>
  )
}
