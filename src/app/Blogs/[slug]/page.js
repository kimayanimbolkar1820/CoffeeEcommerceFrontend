'use client'
import React from 'react'
import blogs from '@/data/blog.json'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const Page = () => {
  const { slug } = useParams()
  const blog = blogs.find((item) => item.slug === slug)

  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#090604] text-white">
        <h1>Blog not found</h1>
      </section>
    )
  }

  return (
    <section className="bg-[#090604] text-[#eadfce]">
      {/* Full Hero */}
      <div className="relative h-screen w-full">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <span className="inline-block mb-6 px-5 py-1 text-sm tracking-widest uppercase border border-[#c9a27d] text-[#c9a27d]">
              {blog.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#f6ead7]">
              {blog.title}
            </h1>

            <div className="flex justify-center gap-6 mt-8 text-sm text-[#d2b48c]">
              <span>{blog.author}</span>
              <span>{blog.publishedDate}</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-5 md:px-0 py-24">
        <article className="text-lg leading-[1.9] tracking-wide text-[#e8dbc7] space-y-8">
          <p>{blog.content}</p>
        </article>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center my-16">
          <span className="w-16 h-px bg-[#3b2a1d]" />
        </div>

        {/* Author Signature */}
        <div className="text-center">
          <p className="text-[#f6ead7] font-medium">{blog.author}</p>
          <p className="text-sm text-[#bfa07a] mt-2">
            Writing about craft, coffee & culture
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1 text-sm tracking-wide border border-[#3b2a1d] text-[#c9a27d]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
