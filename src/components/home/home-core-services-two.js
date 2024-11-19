import Image from 'next/image'
import React from 'react'

export default function HomeCoreServices() {
  const servicesList = [
    {
      heading: 'Full Stack Web Development',
      subtitle: 'From static sites to responsive platforms, our development integrates performance and UX insights for a seamless user experience.'
    },
    {
      heading: 'SEO & Content Optimization',
      subtitle: 'Based on technical SEO audits, improve your rankings and content effectiveness.'
    },
    {
      heading: 'Digital Marketing',
      subtitle: 'Expand your reach through social media, email marketing, and targeted campaigns.'
    },
    {
      heading: 'Video Editing',
      subtitle: 'Basic editing for content marketing videos that enhance brand engagement.'
    },
    {
      heading: 'Graphic Design',
      subtitle: 'Create a cohesive visual identity with logo design and foundational branding elements'
    },
    {
      heading: 'Content Writing',
      subtitle: 'SEO-friendly website copy and blog posts to drive traffic and engagement.'
    },
  ]
  return (
    <div className='w-full bg-purple-500 text-white hidden lg:flex flex-col gap-10 text-center p-12 m-auto'>
        <h2 className='text-5xl font-bold'>Core Services - Boost Your Digital Presence</h2>
      <div className='flex flex-row gap-5 items-center justify-center'>
        <div className='flex flex-col gap-5 text-start w-1/2 max-w-xl'>
          <p className='text-3xl font-bold'>Following an audit, our core services help you implement growth-driven solutions:</p>
          <ul className='flex flex-col text-start'>
            {servicesList.map((item,index) => (
              <li key={index} className="text-2xl"><span className='font-bold'><span className='text-3xl'>&#9679;</span>&nbsp;{item.heading}:</span>&nbsp;{item.subtitle}</li>
            ))}
          </ul>
        </div>
        <div>
          <Image src='/thumbnail/core-services-thumbnail.png' width={400} height={600} alt='core services thumbnail' />
        </div>
      </div>
    </div>
  )
}
