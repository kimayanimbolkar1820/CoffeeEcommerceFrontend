import Hero from '@/components/Hero'
import PricingCards from '@/components/PricingCards'

import React from 'react'

import Categories from '@/components/Categories'
import FeaturedDrinks from '@/components/FeaturedDrinks'
import Footer from '@/components/Footer'
// import ReviewCard from "@/components/ReviewCard";


const Page = () => {
  return (
    <div> 
     <Hero />
     <Categories/>
     <FeaturedDrinks/>
     <PricingCards/>
     {/* <ReviewCard /> */}
     <Footer /> 
    </div>
  )
}

export default Page;
