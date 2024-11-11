import React from 'react'
import { inter } from '../../../public/fonts'

export default function HomeOffering() {
  return (
    <div className={`${inter.className} text-white flex flex-col items-center py-10  gap-10 bg-slate-400`}>
      <h2 className='text-7xl font-bold'>{`Let's Make It Happen—Now!`}</h2>
      <p className='text-3xl w-[1180px] text-center'><span className='bg-gradient-to-r from-violet-900 to-slate-900 text-transparent bg-clip-text font-semibold'>For a limited time</span>{`, we're offering free consultations to new clients. Our team will provide you with a personalized growth plan to elevate your business and meet your goals. Don't miss out—reach out today to supercharge your business growth and get expert project-based services delivered on time, every time.`}</p>
    </div>
  )
}
