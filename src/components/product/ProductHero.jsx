import React from "react"
import Image from "next/image"

const ProductHero = ({ title, subtitle, image }) => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-90"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-cinzel text-white font-bold mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white/90 font-playfair max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default ProductHero
