import React from 'react'

import PricingCards from '@/components/PricingCards'
import Hero from '@/components/Hero'
// import FeaturedDrinks from '@/components/FeaturedDrinks'
// import Footer from '@/components/Footer'
import TopCategories from '@/components/TopCategories'
import ReviewCard from "@/components/ReviewCard";
// import BestSellers from '@/components/BestSellers'
import AboutUs from '@/components/AboutUs'

const Page = () => {
  return (
    <div> 
     <Hero />
     <TopCategories/>
      {/* <BestSellers/> */}
     
     <PricingCards/>
     {/* <ReviewCard /> */}
     <AboutUs />
     <ReviewCard /> 
     {/* <Footer />  */}
    </div>
  )
}

export default Page;
