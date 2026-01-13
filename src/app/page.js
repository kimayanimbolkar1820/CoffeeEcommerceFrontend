import Hero from '@/components/Hero'
import PricingCards from '@/components/PricingCards'
import React from 'react'
import TopCategories from '@/components/TopCategories'
import ReviewCard from "@/components/ReviewCard";
import BestSellers from '@/components/BestSellers'


const Page = () => {
  return (
    <div> 
     <Hero />
     <TopCategories/>
      {/* <BestSellers/> */}
     
     <PricingCards/>
     <ReviewCard /> 
    </div>
  )
}

export default Page;
