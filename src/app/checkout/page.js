'use client'

import React from 'react'
import Image from 'next/image'

export default function CheckoutPage() {
  const product = {
    name: 'Premium Arabica Coffee Beans',
    image: '/images/feature9-removebg-preview.png',
    price: 1200,
    qty: 1,
  }

  const address = {
    name: 'Kimaya',
    phone: '9876543210',
    line1: '123, MG Road',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
  }

  const subtotal = product.price * product.qty
  const gst = Math.round(subtotal * 0.18)
  const shipping = 50
  const total = subtotal + gst + shipping

  return (
    <div className="min-h-screen bg-[#2a1816] px-4 py-30">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

        {/* LEFT COLUMN */}
        <div className="md:col-span-2 space-y-6 w-3xl ">

          {/* SHIPPING ADDRESS */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#3b2a26]">
                Shipping Address
              </h2>
              <button className="text-sm text-[#7b4a3e] hover:underline">
                Change
              </button>
            </div>

            <div className="rounded-lg border border-[#e3d6c6] bg-white p-4 text-sm">
              <p className="font-medium">{address.name}</p>
              <p className="text-black">
                {address.line1}, {address.city}, {address.state} – {address.pincode}
              </p>
              <p className="text-gray-800">Phone: {address.phone}</p>
            </div>
          </div>

          {/* DELIVERY DETAILS */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-black">
              Delivery Details
            </h2>
            <p className="text-sm text-black">
              Estimated delivery in <span className="font-medium">3–5 business days</span>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Orders placed before 6 PM ship the same day.
            </p>
          </div>

          {/* COUPON */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-[#120d0b]">
              Apply Coupon
            </h2>
            <div className="flex gap-2 text-black">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#2e1914]"
              />
              <button className="rounded-md bg-[#3b2a26] px-4 py-2 text-sm text-white hover:bg-[#2a1d1a]">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="sticky top-6  rounded-xl bg-[#f5efe6] p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-[#3b2a26]">
            Order Summary
          </h2>

          {/* PRODUCT */}
          <div className="mb-4 flex gap-4 border-b border-[#e3d6c6] pb-4">
            <Image
              src={product.image}
              alt={product.name}
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="flex-1 text-black">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">Qty: {product.qty}</p>
              <p className="font-semibold">₹{product.price}</p>
            </div>
          </div>

          {/* BILLING */}
          <div className="space-y-2 text-sm text-black">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{gst}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between border-t border-[#e3d6c6] pt-2 font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}