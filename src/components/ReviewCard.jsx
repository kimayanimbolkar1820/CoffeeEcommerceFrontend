import React from "react";
import reviews from "@/data/reviews.json";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <section className="bg-gradient-to-b from-[#050505] to-[#2a1b12]">
      <div>
        <h1 className="text-4xl md:text-5xl font-cinzel text-white text-center pt-20">
          Hear From Our Coffee Crew
        </h1>
        <p className="mt-3 font-playfair text-gray-400 text-center">
          Brewing happiness, one cup and one review at a time
        </p>
      </div>

      <div className="pt-10 overflow-x-hidden scroll-smooth">
        <ul className="flex gap-10 px-20 w-max">
          {reviews.map((review, i) => (
            <li
              key={i}
              className="pb-20 pt-10 w-[360px] shrink-0"
            >
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="object-contain" />
              </div>
              <h2 className="font-playfair text-[17px] pb-2 text-white">
                {review.name}
              </h2>
              <p className="font-inter text-[15px] text-gray-300">
                {review.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReviewCard;
