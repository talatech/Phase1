import Image from 'next/image'
import React from 'react'
import { inter } from '../../../public/fonts'

export default function HomeServices() {

  const serviceData = [
    {
      id: 1,
      name: 'Project-based model',
      icon: '/icons/pie-chart.png',
      description: `Freelancers are assigned based on task level, ensuring the right talent for the right job. Whether it's basic or advanced work, our experts handle it with precision.`,
    }
  ]
  return (
    <div className={`${inter.className} flex flex-col items-center py-32 gap-9 bg-gradient-to-br from-purple-500 to-violet-900`}>
      <h1 className='text-white text-7xl font-bold'>What Sets Us Apart?</h1>
      <div className='flex flex-row gap-4'>
        {serviceData.map((item, index) => (
          <div key={index} className='flex flex-col gap-7 bg-white p-10 rounded-2xl'>
            <div className='flex p-4 bg-violet-900 w-16 rounded-2xl'>
              <Image src={item.icon} width={36} height={36} alt='project-based-model' />
            </div>
            <div className='flex flex-col gap-4 w-[290px]'>
              <h2 className='text-gray-900 text-2xl font-semibold'>{item.name}</h2>
              <p className='text-gray-500 w-[290px]'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
