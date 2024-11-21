import Image from 'next/image'
import React from 'react'
import { istokWeb, manrope } from '../../../public/fonts'

export default function FreelancePage() {

  return (
    <div className='w-full hidden lg:flex flex-col gap-10 text-center p-12 m-auto'>
      <h2 className='text-5xl font-bold'>Why Start with a TalaTech Audit?</h2>
      <div className='flex flex-row-reverse  items-center justify-between px-0 md:px-10 2xl:px-60'>
        <div className='flex flex-col gap-5 text-start w-1/2 max-w-xl'>
          <p className={`${istokWeb.className} text-5xl font-bold leading-snug`}>Why Choose Talatech Freelance Collective?</p>
          <p className={`${manrope.className} text-2xl leading-10`}>We don&apos;t just complete projects-we partner with you for long-term success, providing seamless integration with your existing operations and ensuring your unique needs are met. Our collective of experienced freelancers works efficiently, so you get top-tier results every time.</p>
        </div>
        <div>
          <Image src='/thumbnail/freelance-development.png' width={400} height={600} alt='core services thumbnail' />
        </div>
      </div>
    </div>
  )
}