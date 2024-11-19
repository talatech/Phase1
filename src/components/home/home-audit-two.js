import Image from 'next/image'
import React from 'react'
import { inter } from '../../../public/fonts'

export default function HomeAudit() {
  const servicesList = [
    {
      heading: 'Website Performance & UX Audits: Identify factors affecting user experience and loading speed.',
    },
    {
      heading: 'Technical SEO & Content Optimization: Get a roadmap to boost search engine visibility.',
    },
    {
      heading: 'Website Security & Compliance: Ensure compliance and safeguard your digital assets.',
    },
    {
      heading: 'Conversion Rate Optimization (CRO): Uncover ways to turn more visitors into customers.',
    },
    {
      heading: 'Mobile Usability and Responsive Design: Optimize your site for mobile and other devices.',
    },
    {
      heading: 'Website Analytics & Tracking: Track essential metrics to monitor and grow your online presence.',
    },
  ]
  return (
    <div className='w-full bg-gradient-to-l hidden from-gray-900 to-blue-800 text-white lg:flex flex-col gap-10 text-center p-12 m-auto'>
      <h2 className='text-5xl font-bold'>Why Start with a TalaTech Audit?</h2>
      <div className='flex flex-row-reverse gap-5 items-center justify-center'>
        <div className='flex flex-col gap-5 text-start w-1/2 max-w-xl'>
          <p className='text-3xl font-bold'>Our Audits reveal key opportunities for your business. With a free mini audit, we highlight improvement areas, enabling you to make data-driven decisions.</p>
          <div className={`${inter.className}`}>
            <span className='text-2xl font-bold'>Our Audits:</span>
            <ul className='flex flex-col text-start'>
              {servicesList.map((item, index) => (
                <li key={index} className="marker:text-4xl text-2xl leading-7"><span className='text-3xl'>&#9679;</span>&nbsp;{item.heading}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Image src='/thumbnail/audit-thumbnail.png' width={400} height={600} alt='core services thumbnail' />
        </div>
      </div>
    </div>
  )
}