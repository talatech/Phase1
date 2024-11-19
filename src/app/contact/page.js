import ContactUs from '@/components/contact/contact'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='lg:max-w-7xl m-auto'>
        <div className='bg-[#25253E] flex flex-col lg:flex-row items-center justify-between py-10 px-5 lg:px-20'>
          <Image src='/thumbnail/about-tb-1.png' width={385} height={351} alt='about-image' />
          <div className='flex flex-col gap-8 max-w-md'>
            <h2 className='lg:text-6xl text-3xl font-bold text-[#C9ADA7]'>Reach out to us</h2>
            <p className='text-white text-2xl lg:text-4xl'>submit your information in the form below and start the journey</p>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  )
}
