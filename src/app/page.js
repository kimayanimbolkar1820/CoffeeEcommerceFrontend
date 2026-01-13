import Hero from '@/components/Hero'
import PricingCards from '@/components/PricingCards'
import React from 'react'
import TopCategories from '@/components/TopCategories'
import ReviewCard from "@/components/ReviewCard";
import BestSellers from '@/components/BestSellers'
import Blogs from '@/components/Blogs';


const Page = () => {
  return (
    <div> 
     <Hero />
     <TopCategories/>
      <BestSellers/>
     
     <PricingCards/>
     <ReviewCard /> 
     <Blogs/>
    </div>
  )
}

export default Page;
