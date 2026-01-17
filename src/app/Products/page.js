'use client'
import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { fetchProducts } from '@/redux/features/productSlice'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
    const {data , loading , error} = useSelector((state)=> state.product)
    const dispatch = useDispatch()

 
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error : {error}</p>


const getValidImage = (images) => {
  try {
    if (typeof images === 'string') {
      const parsed = JSON.parse(images)
      if (Array.isArray(parsed) && typeof parsed[0] === 'string') {
        return parsed[0]
      }
    }

    if (Array.isArray(images) && typeof images[0] === 'string') {
      return images[0]
    }
  } catch (e) {}

  return '/images/placeholder.png'
}


  return (
    <section className='mt-20'>
       {
        data.products?.map((item ,i)=>(
            <Link href={`/products/${item.slug}`} key={i}>
                <div className='pt-20  items-center ml-50 pb-10 '>
                <Image src={getValidImage(item.images)} alt={item.name} height={100} width={100}/>
                <p>{item.name} </p>
                <p>{item.description }</p>
                <p> ${item.price}</p>
                </div>
            </Link>
        ))
       }
    </section>
  )
}

export default page