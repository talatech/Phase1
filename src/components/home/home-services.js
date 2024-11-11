import Image from 'next/image'
import React from 'react'

export default function HomeServices() {
  return (
    <div className='flex flex-col items-center py-32 bg-gradient-to-br from-purple-500 to-violet-900'>
      <h1 className='text-white'>What Sets Us Apart?</h1>
      <div>
        <div>
          <div className='flex p-4'>

          <Image src='/icons/pie-chart.png' width={36} height={36} alt='project-based-model' />
          </div>
          <div className='flex'>
            <h2>Project-based model</h2>
            <p>Freelancers are assigned based on task level, ensuring the right talent for the right job. Whether it’s basic or advanced work, our experts handle it with precision.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
