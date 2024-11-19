import Image from 'next/image'
import React from 'react'
import { inter } from '../../../public/fonts'

export default function HomeFeaturesFour() {

  const serviceData = [
    {
      name: 'Project-based model',
      icon: '/icons/pie-chart.png',
      description: `From mini audits to full-service strategies, our approach is tailored to each client’s unique needs.`,
    },
    {
      name: 'Competitive payment structure',
      icon: '/icons/tailwind.png',
      description: `Each service is crafted to meet your goals, supporting long-term growth.`,
    },
    {
      name: 'Client-first approach',
      icon: '/icons/grid-alt.png',
      description: `Our phased service offerings prioritize what you need now and prepare you for future success.`,
    },
  ]
  return (
    <div className={`${inter.className} hidden lg:flex flex-col items-center py-24 gap-12 bg-gradient-to-br from-purple-500 to-violet-900`}>
      <h1 className='text-white text-2xl sm:text-5xl md:text-7xl font-bold'>What Sets Us Apart?</h1>
      <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-4 '>
        {serviceData.map((item, index) => (
          <div key={index} className='flex flex-col gap-7 bg-white p-10 rounded-2xl pb-24 '>
            <div className='flex items-center p-4 bg-violet-900 w-16 rounded-2xl h-16'>
              <Image src={item.icon} width={36} height={36} alt={item.name} />
            </div>
            <div className='flex flex-col gap-4 w-[290px]'>
              <h2 className='text-gray-900 text-2xl font-semibold'>{item.name}</h2>
              <p className='text-gray-500 w-[290px]'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className='text-4xl font-bold text-white'>Ready to Get Started? &nbsp;<span className='text-black'>Contact Us for a Free Mini Audit!</span></p>

    </div>
  )
}
