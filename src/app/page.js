import Hero from '@/components/Hero'
import PricingCards from '@/components/PricingCards'

import React from 'react'
import TopCategories from '@/components/TopCategories'

import Footer from '@/components/Footer'


const Page = () => {
  return (
    <div> 
     <Hero />
     <TopCategories/>
       {/* <BestSellers/> */}
       {/* <AboutUs/> */}
     {/* <BlogPage/> */}

     
     <PricingCards/>
  
     <Footer /> 
    </div>
  )
}

export default Page;
