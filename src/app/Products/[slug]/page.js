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
  const images = normalizeImages(product.images || []);

  const handleAddToCart = () => {
    dispatch(
      AddToCartThunk({
        product_id:  product.id,
        quantity: qty,
      })
    );
  };

  return (
    <section className="min-h-screen bg-[#24160E] text-[#f5efe6] overflow-x-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* ================= LEFT : IMAGE ================= */}
        <div className="lg:w-[45%] relative flex justify-center items-center py-10">

          {/* Decorative beans */}
          <div className="pointer-events-none absolute -top-20 -left-32 w-[35%] z-10 hidden lg:block">
            <img src="/images/bean13.png" alt="" className="rotate-180" />
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 w-[35%] z-0 hidden lg:block">
            <img
              src="/images/beans14.png"
              alt=""
              className="opacity-80 sepia hue-rotate-[18deg] saturate-[0.6] brightness-[1.25]"
            />
          </div>

          {/* Desktop Image */}
          <div
            className="
              hidden lg:flex
              bg-[#b2a28e]
              w-full max-w-[650px]
              h-[680px]
              rounded-br-[58px]
              flex-col gap-6 items-center justify-center
              shadow-[0_40px_80px_rgba(0,0,0,0.45)]
              relative z-10
            "
          >
            {images[activeImage] && (
              <Image
                src={getValidImage(images[activeImage])}
                alt={product.name}
                width={420}
                height={420}
                className="object-contain scale-110 drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
                priority
              />
            )}

            {/* Thumbnails */}
            <div className="flex gap-4 mt-6">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-16 rounded-xl border overflow-hidden
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

          {/* Mobile Gallery */}
          <div className="lg:hidden w-full px-4">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="min-w-full snap-center flex justify-center items-center
                  bg-[#1a120c] rounded-2xl p-6 border border-[#3a2a1a]/40"
                >
                  <Image
                    src={getValidImage(img)}
                    alt={`product-${index}`}
                    width={320}
                    height={320}
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT : DETAILS ================= */}
        <div className="lg:w-[55%] w-full px-6 lg:px-16 py-10 flex flex-col justify-between z-10">

          <div>
            {product.categoryLevel3 && (
              <p className="text-sm uppercase tracking-widest text-[#c7a17a] mb-4">
                {product.categoryLevel3}
              </p>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold font-cinzel">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <p className="text-3xl font-bold text-[#c7a17a]">
                ₹{product.discountPrice || product.price}
              </p>
              {product.discountPrice && (
                <p className="line-through text-gray-500 text-lg">
                  ₹{product.price}
                </p>
              )}
            </div>

            <p className="mt-4 text-gray-300 text-sm max-w-md leading-loose">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <Spec label="Roast Level" value={product.roastLevel} />
              <Spec label="Roast Colour" value={product.roastColour} />
              <Spec
                label="Stock"
                value={product.inStock === 1 ? "In Stock" : "Out of Stock"}
                valueClass={product.inStock ? "text-green-400" : "text-red-500"}
              />
              <Spec label="Quantity" value={product.quantity} />
            </div>

            {/* Quantity */}
            <div className="mt-6 inline-flex items-center border border-[#3a2a1a] rounded-full overflow-hidden">
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

          {/* Actions */}
          <div className="flex flex-col gap-4 mt-8">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className=" cursor-pointer w-full bg-[#c7a17a] text-black py-4 rounded-full font-bold flex items-center justify-center gap-3"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className=" cursor-pointer w-full border border-[#c7a17a] text-[#c7a17a] py-4 rounded-full font-bold flex items-center justify-center gap-3"
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

function Spec({ label, value, valueClass = "text-[#c7a17a]" }) {
  return (
    <div className="border border-[#3a2a1a] p-3 rounded-lg">
      <p className="text-gray-400 text-xs">{label}</p>
      <p className={`mt-1 font-medium ${valueClass}`}>{value}</p>
    </div>
  );
}
