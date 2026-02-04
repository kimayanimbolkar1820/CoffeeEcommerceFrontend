import Hero from '@/components/Hero'
import React from 'react'
import TopCategories from '@/components/TopCategories'
import BestSellers from '@/components/BestSellers'
import PricingCards from '@/components/PricingCards'
import Blogs from '@/components/Blogs'
import AboutUs from '@/components/AboutUs'
import ReviewCard from '@/components/ReviewCard'
import Sidebar from '@/components/account/Sidebar'

const Page = () => {
  return (
    <div> 
     <Sidebar />
     <Hero />
     <TopCategories/>
     <BestSellers/>
     <AboutUs/>
     <Blogs/>
     <ReviewCard /> 
     <PricingCards/>
    </div>
  )
}

export default Page;
