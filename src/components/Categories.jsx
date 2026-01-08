import React from 'react'
import Image from 'next/image'


const Categories = () => {
    const categaries =[
        {
            name : "Coffee",
            image :"/images/coffee.webp"
        },
        {
            name : "Machines",
            image :"/images/machine.webp"
        },
        {
            name : "Accessories",
            image :"/images/Accessories.webp"
        }  
    ]
  return (
    <div className=''>
        <h1 className='md:text-4xl text-3xl font-cinzel text-center font-bold pt-10 italic '>Top Categories</h1>
        <p className='font-playfair text-center text-[16px] md:text-[18px] pt-2'>Find your perfect brew, one category at a time.</p>
      <div>
          <ul className='flex gap-10'>
            {
                categaries.map((item , i)=>(
                    <li key={i}>
                        <Image src={item.image} alt={item.name} height={100} width={100}/>
                    </li>
                ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Categories