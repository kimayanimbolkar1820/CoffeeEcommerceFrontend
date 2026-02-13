"use client";

import React, { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/product/ProductCards";
import { getValidImage, normalizeImages } from "@/utils/getValidImage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/productSlice";
import { fetchPlansThunk } from "@/redux/features/subscriptionSlice";
import clsx from "clsx";
import SubscriptionHero from "@/components/subscribePage/SubscriptionHero";

export default function SubscribePage() {

  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const { loading } = useSelector((state) => state.product);
  const allProducts = useSelector(
    (state) => state.product.data.products || []
  );

  const { plans, loading: plansLoading, error: plansError } = useSelector(
    (state) => state.subscription
  );

  // ---------------- FETCH PRODUCTS ON LOAD ----------------
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ---------------- FETCH PLANS WHEN PRODUCT SELECTED ----------------
  useEffect(() => {
    if (selectedProduct?.id) {
      dispatch(fetchPlansThunk(selectedProduct.id));
    }
  }, [selectedProduct, dispatch]);

  // ---------------- FILTER SUBSCRIBABLE PRODUCTS ----------------
  const subscribableProducts = allProducts.filter(
    (product) => Number(product.is_subscribable) === 1
  );

  // ---------------- HORIZONTAL SCROLL ----------------
  const scrollRef = useRef(null);
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

  const [isDesktop, setIsDesktop] = useState(true);

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

      {/* ---------------- HEADER SECTION ---------------- */}
      <div className="max-w-8xl mx-auto mb-16 mt-10 text-center">

        <h1 className="text-4xl md:text-5xl font-cinzel mb-10 text-white">
          Completely Customise your Subscription, in just a few clicks
        </h1>

      </div>

      {/* ---------------- PRODUCTS SECTION ---------------- */}
      <section className="bg-[#24160E] pt-10 pb-20">

        <div className="max-w-[1600px] mx-auto px-10 py-12">

          <h2 className="text-2xl font-cinzel text-white text-center mb-10">
            Choose Products for Subscription
          </h2>

          {loading ? (
            <p className="text-center text-white/60">Loading products…</p>
          ) : (
            <>
              <div
                className="w-full overflow-x-hidden"
                style={isDesktop ? { width: VIEWPORT_WIDTH } : {}}
              >
                <div
                  ref={scrollRef}
                  className="flex gap-6 scroll-smooth overflow-x-hidden"
                >
                  {subscribableProducts.map((product) => {
                    const images = normalizeImages(product.images);
                    const imageSrc =
                      getValidImage(images?.[0]) ||
                      "/images/product-placeholder.png";

                    return (
                      <div
                        key={product.id}
                        style={{ width: CARD_WIDTH }}
                        className={clsx(
                          "shrink-0 cursor-pointer transition",
                          selectedProduct?.id === product.id &&
                            "ring-2 ring-white rounded-xl"
                        )}
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

              <div className="flex justify-center gap-6 mt-10">
                <button
                  onClick={() => scroll("left")}
                  className="w-12 h-12 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
                >
                  ←
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="w-12 h-12 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
                >
                  →
                </button>
              </div>
            </>
          )}

        </div>

      </section>

      {/* ---------------- PLANS SECTION ---------------- */}
      <section className="bg-[#1b140c] py-20 px-6 md:px-16">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-cinzel text-white mb-12">
            Choose Your Subscription Plan
          </h2>

          {!selectedProduct ? (
            <p className="text-white/60">
              Select a product to see available plans.
            </p>
          ) : plansLoading ? (
            <p className="text-white/60">Loading plans...</p>
          ) : plansError ? (
            <p className="text-red-400">{plansError}</p>
          ) : plans.length === 0 ? (
            <p className="text-white/60">
              No subscription plans available for this product.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-[#2a1d13] text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {plan.weight_grams}g
                  </h3>

                  <p className="text-lg mb-2">
                    {plan.delivery_count} Deliveries
                  </p>

                  <p className="text-sm text-white/60 mb-2">
                    Every {plan.frequency_count}{" "}
                    {plan.frequency.toLowerCase()}
                  </p>

                  <p className="text-green-400 font-semibold mb-6">
                    {plan.discount_percent}% OFF
                  </p>

                  <button
                    className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition"
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

      </section>

    </section>
  );
}
