'use client'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '@/redux/features/productSlice'
import Image from 'next/image'
import Link from 'next/link'
import { getValidImage, normalizeImages } from '@/utils/getValidImage' 

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
      {data?.products?.map((item) => {
        const images = normalizeImages(item.images); // 🔥 FIX

        return (
          <Link
            key={item.slug}
            href={`/Products/${item.slug}`}
            className="block pt-20 pb-10 ml-[50px]"
          >
            <Image
              src={getValidImage(images[0])}   // ✅ always valid
              alt={item.name}
              width={120}
              height={120}
              priority
            />

            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>₹{item.price}</p>
          </Link>
        );
      })}
    </section>
  )
}

export default Page
