import ContactUs from '@/components/contact/contact'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='max-w-7xl m-auto'>
        <div className='bg-[#25253E] flex flex-row items-center justify-between py-10 px-20'>
          <Image src='/thumbnail/about-tb-1.png' width={385} height={351} alt='about-image' />
          <div className='flex flex-col gap-8 max-w-md'>
            <h2 className='text-6xl font-bold text-[#C9ADA7]'>Reach out to us</h2>
            <p className='text-white text-4xl'>submit your information in the form below and start the journey</p>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  )
}
