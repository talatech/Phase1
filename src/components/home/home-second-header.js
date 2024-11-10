import React from 'react'
import { inter } from '../../../public/fonts'

export default function SecondHeader() {
  return (
    <div className={`flex flex-row items-center justify-center bg-gradient-to-r from-violet-900 to-violet-500 text-white`}>
      <div className='flex flex-row p-12 items-center'>
        <div className='flex flex-col items-start justify-center w-[832px] gap-3'>
          <h2 className={`${inter.className} text-5xl font-bold w-[744px]`}>Why Clients Trust Talatech Freelance Collective:</h2>
          <p className='text-3xl max-w-3xl'>We&apos;ve helped countless businesses across various industries achieve measurable results&#8218; such as&#x3a;</p>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='bg-white p-8 rounded-2xl w-fit'>
            <p className={`${inter.className} text-2xl text-black w-80 font-semibold text-center`}>A 40% increase in organic search traffic through SEO and content strategies.</p>
          </div>
          <div className='bg-white p-8 rounded-2xl w-fit'>
            <p className={`${inter.className} text-2xl text-black w-80 font-semibold text-center`}>Professional video projects with engagement rates soaring over 60%.</p>
          </div>
          <div className='bg-white p-8 rounded-2xl w-fit'>
            <p className={`${inter.className} text-2xl text-background w-80 font-semibold text-center`}>Web applications with zero downtime due to our expert cloud infrastructure setups.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
