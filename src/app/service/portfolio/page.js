import FreelancePage from '@/components/portfolio/freelance-page'
import PortfolioHeader from '@/components/portfolio/portfolio'
import PortfolioContact from '@/components/portfolio/portfolio-contact'
import PortfolioSecondHeader from '@/components/portfolio/portfolio-second-header'
import WebDevelopment from '@/components/portfolio/web-development'
import React from 'react'

export default function Portfolio() {
  return (
    <div className='bg-[#D9D9D9]'>
      <WebDevelopment/>
      <FreelancePage/>
      <PortfolioHeader/>
      <PortfolioSecondHeader/>
      <PortfolioContact/>
    </div>
  )
}
