import React from 'react'
import { inter } from '../../../public/fonts'
import Card from '../card'

export default function Teams() {

  const teamsData = [
    {
      name: 'John Doe',
      imageUrl: '/thumbnail/team-2.png',
      button: 'Designation',
      subtitle: 'Lorem sit laboris icia ea nulla culpa. Mollit sunt reprehenderit occaecat aute commodo aute.',
      className: 'text-gray-500'
    },
    {
      name: 'John Doe',
      imageUrl: '/thumbnail/team-1.png',
      button: 'Designation',
      subtitle: 'Lorem sit laboris icia ea nulla culpa. Mollit sunt reprehenderit occaecat aute commodo aute.',
      className: 'text-gray-500'
    },
    {
      name: 'John Doe',
      imageUrl: '/thumbnail/team-3.png',
      button: 'Designation',
      subtitle: 'Lorem sit laboris icia ea nulla culpa. Mollit sunt reprehenderit occaecat aute commodo aute.',
      className: 'inter.className text-gray-500'
    }
  ]

  return (
    <div className='flex flex-col items-center gap-10 py-20 bg-[#929ACF]'>
      <h2 className={`${inter.className} text-white text-6xl font-bold`}>Meet the team</h2>
      <div className='flex flex-row gap-20'>
        {teamsData.map((item, index) => (
          <Card key={index} index={index} item={item}></Card>
        ))}
      </div>
    </div>
  )
}
