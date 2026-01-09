"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "Coffee Beans",
    desc: "The coffee is amazingly smooth and light. It's definitely not what I'm used to, which I like.",
    image: "/images/review1.webp",
  },
  {
    id: 2,
    title: "Coffee Powder",
    desc: "The coffee is amazingly smooth and light. It's definitely not what I'm used to, which I like.",
    image: "/images/review2.webp",
  },
  {
    id: 3,
    title: "Coffee Machine",
    desc: "The coffee is amazingly smooth and light. It's definitely not what I'm used to, which I like.",
    image: "/images/review3.webp",
  },
  {
    id: 4,
    title: "Coffee Machine",
    desc: "The coffee is amazingly smooth and light. It's definitely not what I'm used to, which I like.",
    image: "/images/review4.webp",
  },
  {
    id: 5,
    title: "Roasted Coffee",
    desc: "The coffee is amazingly smooth and light. It's definitely not what I'm used to, which I like.",
    image: "/images/review5.webp",
  },
  {
    id: 6,
    title: "Pods",
    desc: "The coffee is amazingly smooth and light. It's definitely not what I'm used to, which I like.",
    image: "/images/review6.webp",
  },
];

export default function ReviewSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((item) => (
          <ReviewCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ item }) {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(null);

  return (
    <div className="rounded-2xl bg-[#1b1b1b] text-white shadow-lg overflow-hidden
      hover:scale-[1.02] transition-all duration-300">

      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">{item.desc}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              className={`cursor-pointer transition ${
                (hover ?? rating) >= star
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-600"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-400">
            ({rating}.0)
          </span>
        </div>

        {/* Button */}
        <button
          className="mt-4 w-full rounded-full border border-[#c9a27d]
          py-2 text-sm font-medium text-[#c9a27d]
          hover:bg-[#c9a27d] hover:text-black transition"
        >
          More
        </button>
      </div>
    </div>
  );
}
