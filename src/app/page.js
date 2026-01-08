import Hero from '@/components/Hero'
import PricingCards from '@/components/PricingCards'
// import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedDrinks from '@/components/FeaturedDrinks'

const Page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <PricingCards/>
    </div>
     <Hero/>
     <Categories/>
     <FeaturedDrinks/>
      </div>
  )
}

export default Page;
