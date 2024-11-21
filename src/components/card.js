import Image from 'next/image'
import React from 'react'
import { inter } from '../../public/fonts'

export default function Card({index, item}) {
  return (
    <div key={index} className='flex flex-col rounded-2xl overflow-hidden w-96 h-full'>
      <Image src={item.imageUrl} className='w-full' width={370} height={200} alt={item.name} />
      <div className={`flex flex-col items-center justify-center p-8 gap-7 ${item.background}`}>
        <p className={`${inter.className} ${item?.nameClassName} text-2xl  text-center`}>{item.name}</p>
        {item?.subtitle && <p className={`${item.className} ${inter.className} text-center`}>{item?.subtitle}</p>}
        {item?.button && <p className={`${item.className} rounded-full flex px-7 py-3 border `}>{item.button}</p>}
      </div>
    </div>
  )
}
