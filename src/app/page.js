import Hero from '@/components/Hero'


import React from 'react'
import TopCategories from '@/components/TopCategories'
import BestSellers from '@/components/BestSellers'
import PricingCards from '@/components/PricingCards'
import ReviewCard from '@/components/ReviewCards'




const Page = () => {
  return (
    <div> 
     <Hero />
     <TopCategories/>

       <BestSellers/>
       {/* <AboutUs/> */}
     {/* <BlogPage/> */}

     
    

     
     <PricingCards/>
     <ReviewCard /> 
     {/* <Blogs/> */}

    </div>
  )
}

export default Page;
