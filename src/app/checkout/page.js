"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { showShippingAddressThunk, updateShippingAddressThunk } from "@/redux/features/shippingSlice";
import { useSearchParams } from "next/navigation";
import { fetchProductBySlug } from "@/redux/features/productSlice";
import { getValidImage ,normalizeImages } from "@/utils/getValidImage";


export default function CheckoutPage() {
  const [edit, setEdit] = useState(false);
  const searchParams = useSearchParams()
  const slug = searchParams.get("slug")
  const qty = Number(searchParams.get("qty") || 1)

  const product = useSelector((state) => state.product.currentProduct)
  

  console.log("this is the product id : ",product?.name)

  const [fdata, setFdata] = useState({
    full_name: "",
    phone: "",
    address_type: "HOME",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "India",
    is_default: false,
  });

  console.log(`this is the product slug  ${slug} and quantity ${qty} `)

  const dispatch = useDispatch();
  const { address, loading } = useSelector((state) => state.shipping);



  useEffect(() => {
    dispatch(showShippingAddressThunk());
  }, [dispatch]);

  const defaultAddress = address?.data?.[0];

  // Sync fdata with defaultAddress
  useEffect(() => {
    if (defaultAddress) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFdata({
        full_name: defaultAddress.full_name || "",
        phone: defaultAddress.phone || "",
        address_type: defaultAddress.address_type || "HOME",
        address_line1: defaultAddress.address_line1 || "",
        address_line2: defaultAddress.address_line2 || "",
        city: defaultAddress.city || "",
        state: defaultAddress.state || "",
        postal_code: defaultAddress.postal_code || "",
        country: defaultAddress.country || "India",
        is_default: defaultAddress.is_default === 1,
      });
    }
  }, [defaultAddress]);

  const handleEditbuttton = () => setEdit((prev) => !prev);

  const handleSubmitButton =  (e) => {
    e.preventDefault();
    if (!defaultAddress?.id) return;

    const data = {
      id: defaultAddress.id,
      ...fdata,
      address_type: fdata.address_type.toLowerCase(),
      is_default: fdata.is_default ? 1 : 0,
    };

    dispatch(updateShippingAddressThunk(data)).then(()=>{
      setEdit(false)
      dispatch(showShippingAddressThunk())
    })
    
  };

  useEffect(()=>{
     if (slug) {
    dispatch(fetchProductBySlug(slug))
  }
  },[slug , dispatch])

  const images = normalizeImages(product?.images)
  const mainImage = images[0]

  return (
   <div className="min-h-screen overflow-hidden bg-[#2a1816] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-30">

      <div className="mx-auto max-w-6xl flex flex-col gap-6 lg:grid lg:grid-cols-3">

        {/* LEFT COLUMN */}
      <div className="
  order-2 
  lg:order-1 
  lg:col-span-2 
  space-y-6
">

          {/* SHIPPING ADDRESS */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#3b2a26]">Shipping Address</h2>
              <button
                onClick={handleEditbuttton}
                className="cursor-pointer text-sm text-[#7b4a3e] hover:underline"
              >
                Change
              </button>
            </div>

            <div className="rounded-lg border border-[#e3d6c6] bg-white p-4 text-sm">
              {edit ? (
                <form onSubmit={handleSubmitButton} className="space-y-3 text-sm text-black">
                  {/* Row 1 */}
                 <div className="flex flex-col sm:flex-row gap-3">

                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-medium">Full Name</label>
                      <input
                        required
                        type="text"
                        value={fdata.full_name}
                        onChange={(e) => setFdata({ ...fdata, full_name: e.target.value })}
                        className="w-full rounded-md border border-gray-400 px-3 py-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                      />
                    </div>
                 <div className="w-full sm:w-40">

                      <label className="mb-1 block text-xs font-medium">Phone</label>
                      <input
                        required
                        type="tel"
                        value={fdata.phone}
                        onChange={(e) => setFdata({ ...fdata, phone: e.target.value })}
                        className="w-full rounded-md border border-gray-400 px-3 py-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                 <div className="flex flex-col sm:flex-row gap-3">

                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-medium">Address Line 1</label>
                      <input
                        required
                        type="text"
                        value={fdata.address_line1}
                        onChange={(e) => setFdata({ ...fdata, address_line1: e.target.value })}
                        className="w-full rounded-md border border-gray-400 px-3 py-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-medium">Address Line 2</label>
                      <input
                        type="text"
                        value={fdata.address_line2}
                        onChange={(e) => setFdata({ ...fdata, address_line2: e.target.value })}
                        className="w-full rounded-md border border-gray-400 px-3 py-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                 <div className="flex flex-col sm:flex-row gap-3">

                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-medium">City</label>
                      <input
                        required
                        type="text"
                        value={fdata.city}
                        onChange={(e) => setFdata({ ...fdata, city: e.target.value })}
                        className="w-full rounded-md border border-gray-400 px-3 py-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-medium">State</label>
                      <input
                        required
                        type="text"
                        value={fdata.state}
                        onChange={(e) => setFdata({ ...fdata, state: e.target.value })}
                        className="w-full rounded-md border border-gray-400 px-3 py-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                      />
                    </div>
                   <div className="w-full sm:w-28">

                      <label className="mb-1 block text-xs font-medium">PIN</label>
                      <input
                        required
                        type="text"
                        value={fdata.postal_code}
                        onChange={(e) => setFdata({ ...fdata, postal_code: e.target.value })}
                        className="w-full rounded-md border border-gray-400 px-3 py-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="flex gap-3 items-end">
                    <div className="flex-1">
                      <label className="mb-1 block text-xs font-medium">Country</label>
                      <input
                        disabled
                        value="India"
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-black"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium">Address Type</label>
                      <div className="flex flex-wrap gap-2">

                        {["HOME", "OFFICE", "OTHER"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFdata({ ...fdata, address_type: type })}
                            className={`rounded-md px-3 py-2 text-xs border ${
                              fdata.address_type === type
                                ? "border-black bg-black text-white"
                                : "border-gray-400"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleEditbuttton}
                      className="text-sm text-gray-600 hover:underline"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-md bg-black px-5 py-2 text-sm text-white hover:opacity-90"
                    >
                      {loading ? "Updating..." : "Update"}
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <p className="font-medium text-black">{defaultAddress?.full_name}</p>
                  <p className="text-black">
                    {defaultAddress?.address_line1}, {defaultAddress?.address_line2}, {defaultAddress?.city} – {defaultAddress?.postal_code}
                  </p>
                  <p className="text-black">
                    {defaultAddress?.state} , {defaultAddress?.country}
                  </p>
                  <p className="text-gray-800">Phone: {defaultAddress?.phone}</p>
                </>
              )}
            </div>
          </div>

          {/* DELIVERY DETAILS */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-black">Delivery Details</h2>
            <p className="text-sm text-black">
              Estimated delivery in <span className="font-medium">3–5 business days</span>
            </p>
            <p className="mt-1 text-sm text-gray-600">Orders placed before 6 PM ship the same day.</p>
          </div>

          {/* COUPON */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-[#120d0b]">Apply Coupon</h2>
           <div className="flex flex-col sm:flex-row gap-2 text-black">

              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#2e1914]"
              />
              <button className="cursor-pointer rounded-md bg-[#3b2a26] px-4 py-2 text-sm text-white hover:bg-[#2a1d1a]">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
       <div className="
  order-1 
  lg:order-2 
  lg:col-span-1 
  rounded-xl 
  bg-[#f5efe6] 
  p-5 
  sm:p-6 
  shadow-sm 
  lg:sticky lg:top-6
">

          <h2 className="mb-4 text-lg font-semibold text-[#3b2a26]">Order Summary</h2>
          <div className="mb-4 flex gap-4 border-b border-[#e3d6c6] pb-4">
          <Image
  src={getValidImage(mainImage)}
  alt={product?.name}
  width={80}
  height={80}
  className="rounded-md w-16 h-16 sm:w-20 sm:h-20 object-cover"
/>

            <div className="flex-1 text-black">
              <p className="font-medium text-black">{product?.name} </p>
              <p className="text-sm text-gray-500">Qty: </p>
              <p className="font-semibold">₹ </p>
            </div>
          </div>

          {/* BILLING */}
          <div className="space-y-2 text-sm text-black">
            <div className="flex justify-between"><span>Subtotal</span><span>₹</span></div>
            <div className="flex justify-between"><span>GST (18%)</span><span>₹</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>₹</span></div>
            <div className="flex justify-between border-t border-[#e3d6c6] pt-2 font-semibold"><span>Total</span><span>₹</span></div>
          </div>

          <button className="cursor-pointer mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
