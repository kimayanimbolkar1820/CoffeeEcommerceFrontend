import Hero from '@/components/Hero'
import PricingCards from '@/components/PricingCards'

import React from 'react'

import Categories from '@/components/Categories'
import FeaturedDrinks from '@/components/FeaturedDrinks'

const Page = () => {
  return (
    <div>
     
      <Hero />
    
   
     <Categories/>
     <FeaturedDrinks/>
     <PricingCards/>
      </div>
  )
}

export default Page;
