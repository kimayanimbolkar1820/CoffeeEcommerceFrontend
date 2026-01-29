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

  const handleAddToCart = ()=>{
     dispatch(AddToCartThunk({
      product_id : product._id,
      quantity :qty
     }))
  }

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

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-[#f5efe6] pt-28 pb-24 px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* ================= LEFT : GALLERY ================= */}
        <div className="flex flex-col gap-6">

          {/* Desktop Gallery */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="relative bg-gradient-to-br from-[#1a120c] to-[#0b0b0b]
              rounded-3xl p-8 flex items-center justify-center min-h-[520px]
              border border-[#3a2a1a]/40 shadow-[0_0_60px_rgba(60,40,20,0.35)]"
            >
              <Image
                src={getValidImage(images[activeImage])}
                alt={product.name}
                width={520}
                height={520}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border transition-all
                    ${
                      activeImage === index
                        ? "border-[#c7a17a] shadow-[0_0_12px_rgba(199,161,122,0.5)]"
                        : "border-[#3a2a1a] opacity-60 hover:opacity-100"
                    }`}
                >
                  <Image
                    src={getValidImage(img)}
                    alt="thumb"
                    width={80}
                    height={80}
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Gallery */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="min-w-full snap-center flex justify-center items-center
                    bg-gradient-to-br from-[#1a120c] to-[#0b0b0b]
                    rounded-2xl p-6 border border-[#3a2a1a]/40"
                >
                  <Image
                    src={getValidImage(img)}
                    alt={`product-${index}`}
                    width={360}
                    height={360}
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT : DETAILS ================= */}
        <div className="flex flex-col justify-between">

          <div>
            {product.categoryLevel3 && (
              <p className="text-sm uppercase tracking-widest text-[#c7a17a] mb-2">
                {product.categoryLevel3}
              </p>
            )}

            <h1 className="text-3xl md:text-4xl font-semibold">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <p className="text-3xl font-bold text-[#c7a17a]">
                ₹{product.discountPrice || product.price}
              </p>

              {product.discountPrice && (
                <p className="line-through text-gray-500 text-lg">
                  ₹{product.price}
                </p>
              )}
            </div>

            <p className="mt-6 text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-5 mt-6 text-sm">
              <div className="bg-[#120d09] p-3 rounded-lg border border-[#3a2a1a]/40">
                <span className="text-gray-300">Roast Level</span>
                <p className="text-[#c7a17a]">{product.roastLevel}</p>
              </div>

              <div className="bg-[#120d09] p-3 rounded-lg border border-[#3a2a1a]/40">
                <span className="text-gray-300">Roast Colour</span>
                <p className="text-[#c7a17a]">{product.roastColour}</p>
              </div>

              <div className="bg-[#120d09] p-3 rounded-lg border border-[#3a2a1a]/40">
                <span className="text-gray-300">Stock</span>
                <p className={product.inStock ? "text-green-400" : "text-red-500"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              <div className="bg-[#120d09] p-3 rounded-lg border border-[#3a2a1a]/40">
                <span className="text-gray-300">Quantity</span>
                <p className="text-[#c7a17a]">{product.quantity}</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-5 mt-8">
              <div className="flex items-center border border-[#3a2a1a] rounded-3xl overflow-hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:bg-[#1a120c]"
                >
                  <Minus size={18} />
                </motion.button>

                <span className="px-6 text-lg">{qty}</span>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 hover:bg-[#1a120c]"
                >
                  <Plus size={18} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-3
                bg-[#c7a17a] text-black py-4 rounded-3xl font-bold"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-3
                border border-[#c7a17a] text-[#c7a17a] py-4 rounded-3xl font-bold"
            >
              <Zap size={20} />
              Buy Now
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
