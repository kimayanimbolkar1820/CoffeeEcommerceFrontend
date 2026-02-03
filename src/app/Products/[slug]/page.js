"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductBySlug } from "@/redux/features/productSlice";
import Image from "next/image";
import { normalizeImages, getValidImage } from "@/utils/getValidImage";
import { Minus, Plus, ShoppingCart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { AddToCartThunk } from "@/redux/features/cartSlice";

export default function ProductPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { currentProduct, loading, error } = useSelector(
    (state) => state.product
  );

  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (slug) dispatch(fetchProductBySlug(slug));
  }, [slug, dispatch]);

  if (loading)
    return <div className="mt-40 text-center text-[#c7a17a]">Loading...</div>;

  if (error)
    return <div className="mt-40 text-center text-red-500">{error}</div>;

  if (!currentProduct?.product) return null;

  const product = currentProduct.product;
  const images = normalizeImages(product.images);

  const handleAddToCart = () => {
    dispatch(
      AddToCartThunk({
        product_id: product._id,
        quantity: qty,
      })
    );
  };

  return (
    <section className="min-h-screen bg-[#24160E] text-[#f5efe6]">
      <div className="flex flex-col lg:flex-row min-h-screen items-stretch">

         {/* Decorative beans – top left */}
          <div className="pointer-events-none absolute -top-1 md:-top-20  -left-27  md:-left-55 md:w-[35%] w-[65%] z-[10]">
            <img
              src="/images/bean13.png"
              alt=""
              className="w-full max-w-none rotate-180"
            />
          </div>

          {/* Decorative beans – bottom right */}
          <div className="pointer-events-none absolute inset-0 z-[0]">
            <img
              src="/images/beans14.png"
              alt=""
              className="absolute md:-bottom-10 lg:right-0 md:w-[35%] -bottom-50 w-[105%] right-0 max-w-none opacity-80 sepia
              hue-rotate-[18deg]
              saturate-[0.6]
              brightness-[1.25]"
            />
          </div>

        {/* ================= LEFT : IMAGE CARD (60%) ================= */}
        <div className="lg:w-[45%] relative overflow-hidden">


        


          <div
  
  className="
    bg-[#b2a28e]
    w-full
    max-w-[650px]
    aspect-[4/3] lg:aspect-auto
    lg:h-[680px]
    mx-auto lg:mx-0
    rounded-br-[58px]
    flex flex-col items-center justify-center
    pt-12 pb-3  lg:pt-16   /* 👈 more top padding only for mobile */
    shadow-[0_40px_80px_rgba(0,0,0,0.45)]
    relative
    
  "
>



{/* ================= MOBILE IMAGE SLIDER ================= */}
<div className="lg:hidden w-full">
  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
    {images.map((img, index) => (
      <div
        key={index}
        className="min-w-full snap-center flex justify-center"
      >
        <Image
          src={getValidImage(img)}
          alt={`product-${index}`}
          width={360}
          height={360}
          priority={index === 0}
          className="
            object-contain
            w-[75%]
            h-auto
            drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]
            rounded-3xl
          "
        />
      </div>
    ))}
  </div>
</div>




          {/* Decorative beans – bottom right */}
          <div className="pointer-events-none absolute inset-0 z-[0]">
            <img
              src="/images/beans14.png"
              alt=""
              className="absolute -bottom-10 lg:right-0 w-[35%] max-w-none opacity-80 sepia
              hue-rotate-[18deg]
              saturate-[0.6]
              brightness-[1.25]"
            />
          </div>

{/* ================= DESKTOP IMAGE ================= */}
<div className="hidden lg:flex flex-col items-center gap-6">
  <Image
    src={getValidImage(images[activeImage])}
    alt={product.name}
    width={500}
    height={500}
    priority
    className="
      object-contain
      w-[420px]
      h-auto
      drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]
      rounded-3xl
    "
  />

  <div className="flex flex-wrap gap-4 justify-center px-4">
    {images.map((img, index) => (
      <button
        key={index}
        onClick={() => setActiveImage(index)}
        className={`
          w-16 h-16 rounded-xl overflow-hidden
          border transition-all
          ${
            activeImage === index
              ? "border-[#c7a17a]"
              : "border-[#3a2a1a] opacity-60 hover:opacity-100"
          }
        `}
      >
        <Image
          src={getValidImage(img)}
          alt="thumbnail"
          width={64}
          height={64}
          className="object-contain p-2"
        />
      </button>
    ))}
  </div>
</div>





           
          </div>
        </div>

        {/* ================= RIGHT : PRODUCT DETAILS (40%) ================= */}
        <div className="lg:w-[50%] w-full px-6 lg:px-16 py-14 flex flex-col justify-between relative z-[10] h-auto lg:h-[520px]
 pt-8 pb-6">

          <div>
            {product.categoryLevel3 && (
              <p className="text-sm uppercase tracking-widest text-[#c7a17a] mb-6">
                {product.categoryLevel3}
              </p>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-6 font-cinzel">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-2 flex items-center gap-5">
              <p className="text-3xl font-bold text-[#c7a17a]">
                ₹{product.discountPrice || product.price}
              </p>
              {product.discountPrice && (
                <p className="line-through text-gray-500 text-lg">
                  ₹{product.price}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-300 leading-loose text-sm max-w-md">
              {product.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <Spec label="Roast Level" value={product.roastLevel} />
              <Spec label="Roast Colour" value={product.roastColour} />
              <Spec
                label="Stock"
                value={product.inStock ? "In Stock" : "Out of Stock"}
                valueClass={product.inStock ? "text-green-400" : "text-red-500"}
              />
              <Spec label="Quantity" value={product.quantity} />
            </div>

            {/* Quantity Selector */}
            <div className="mt-4">
              <div className="
                inline-flex items-center
                border border-[#3a2a1a]
                rounded-full
                overflow-hidden
              ">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-5 py-3 hover:bg-[#1a120c]"
                >
                  <Minus size={18} />
                </motion.button>

                <span className="px-6">{qty}</span>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQty((q) => q + 1)}
                  className="px-5 py-3 hover:bg-[#1a120c]"
                >
                  <Plus size={18} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 mt-3 pb-6 lg:pb-0">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="
                w-full
                bg-[#c7a17a]
                text-black
                py-4
                rounded-full
                font-bold
                flex items-center justify-center gap-3
              "
            >
              <ShoppingCart size={20} />
              Add to Cart
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="
                w-full
                border border-[#c7a17a]
                text-[#c7a17a]
                py-4
                rounded-full
                font-bold
                flex items-center justify-center gap-3
              "
            >
              <Zap size={20} />
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/* ================= SPEC CARD ================= */
function Spec({ label, value, valueClass = "text-[#c7a17a]" }) {
  return (
    <div className="border border-[#3a2a1a] p-3 rounded-lg">
      <p className="text-gray-400 text-xs">{label}</p>
      <p className={`mt-1 font-medium ${valueClass}`}>{value}</p>
    </div>
  );
}
