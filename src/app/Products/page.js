'use client'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '@/redux/features/productSlice'
import Image from 'next/image'
import Link from 'next/link'
import { getValidImage } from '@/utils/getValidImage' 

const Page = () => {
  const { data, loading, error } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  

  return (
    <section className="mt-20">
      {data.products?.map((item) => (
        <Link
          key={item.slug}
          href={`/Products/${item.slug}`}
          className="block pt-20 pb-10 ml-[50px]"
        >
          <Image
            src={getValidImage(item.images)}
            alt={item.name}
            width={100}
            height={100}
          />
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </Link>
      ))}
    </section>
  )
}

export default Page
