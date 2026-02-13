"use client";

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clsx } from "clsx";

import ProductCard from "@/components/product/ProductCards";
import SubscriptionHero from "@/components/subscribePage/SubscriptionHero";

import { fetchProducts } from "@/redux/features/productSlice";
import { getValidImage, normalizeImages } from "@/utils/getValidImage";
import { useMemo } from "react";

export default function SubscribePage() {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // Fetch products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Redux state
  const { loading, error } = useSelector((state) => state.product);
const allProducts = useSelector(
  (state) => state.product.data.products || []
);



const subscribableProducts = useMemo(() => {
  return allProducts.filter(
    (product) => product.is_subscribable === true
  );
}, [allProducts]);

  // Scroll settings
  const CARD_WIDTH = 260;
  const GAP = 24;

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = CARD_WIDTH + GAP;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Responsive check
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const VIEWPORT_WIDTH = isDesktop
    ? CARD_WIDTH * 5 + GAP * 4
    : "100%";

  return (
    <section className="relative min-h-screen px-6 md:px-16 py-16 bg-[#231b0f]">
      
      <SubscriptionHero />

      {/* Heading Section */}
      <div className="max-w-8xl mx-auto mb-16 mt-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-cinzel mb-10">
          Completely Customise your Subscription, in just a few clicks
        </h1>

        {/* Customisation Steps */}
        <div className="md:w-7xl w-full overflow-hidden bg-[#eedecb] rounded-2xl py-10">
          <div className="flex lg:grid grid-cols-5 gap-8 place-items-center overflow-x-auto lg:overflow-visible scrollbar-hide">
            {[
              { label: "NUMBER", icon: "images/icon4.png" },
              { label: "PACK SIZE", icon: "images/icon1.png" },
              { label: "COFFEES", icon: "images/icon2.png" },
              { label: "GRIND SIZE", icon: "images/icon5.png" },
              { label: "FREQUENCY", icon: "images/icon3.png" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 shrink-0 min-w-[120px]"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-20 h-20 object-contain"
                />
                <p className="text-xs tracking-widest font-semibold text-[#231b0f]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="bg-[#24160E] pt-10 pb-20">
        <div className="max-w-[1600px] px-10 -mt-26 py-12">

          <h2 className="text-2xl font-cinzel text-white text-center mb-10">
            Choose Products for Subscription
          </h2>

          {loading ? (
            <p className="text-center text-white/60">
              Loading products…
            </p>
          ) : (
            <>
              {/* Viewport */}
              <div
                className="w-full overflow-x-hidden"
                style={isDesktop ? { width: VIEWPORT_WIDTH } : {}}
              >
                <div
                  ref={scrollRef}
                  className="flex gap-6 scroll-smooth scrollbar-hide overflow-x-hidden"
                >
                  {subscribableProducts.map((product) => {
                    const images = normalizeImages(product.images);
                    const imageSrc =
                      getValidImage(images?.[0]) ||
                      "/images/product-placeholder.png";

                    return (
                      <div
                        key={product._id}
                        className={clsx(
                          "shrink-0 cursor-pointer transition"
                        )}
                        style={{ width: CARD_WIDTH }}
                        onClick={() => setSelectedProduct(product)}
                      >
                        <ProductCard
                          product={{
                            ...product,
                            imageSrc,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scroll Controls */}
              <div className="flex justify-center gap-6 mt-10">
                <button
                  onClick={() => scroll("left")}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  ←
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  →
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </section>
  );
}
