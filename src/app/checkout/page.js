"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  showShippingAddressThunk,
  updateShippingAddressThunk,
} from "@/redux/features/shippingSlice";
import { showCheakoutThunk } from "@/redux/features/cheakoutSlice";
import { useSearchParams } from "next/navigation";
import { getValidImage, normalizeImages } from "@/utils/getValidImage";
import { createPaymentThunk } from "@/redux/features/paymentSlice";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  const { address, loading } = useSelector((state) => state.shipping);
  const cheakoutProducts = useSelector(
    (state) => state.cheakout.cheakoutProducts
  );

  const [edit, setEdit] = useState(false);

  const [method, setMethod] = useState({
    paymentMethod: "PHONEPE",
  });

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

  const defaultAddress = address?.data?.[0];

  useEffect(() => {
    dispatch(showShippingAddressThunk());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(showCheakoutThunk(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (defaultAddress) {
      setFdata({
        full_name: defaultAddress.full_name || "",
        phone: defaultAddress.phone || "",
        address_type: defaultAddress.address_type?.toUpperCase() || "HOME",
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

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (!defaultAddress?.id) return;

    const data = {
      id: defaultAddress.id,
      ...fdata,
      address_type: fdata.address_type.toLowerCase(),
      is_default: fdata.is_default ? 1 : 0,
    };

    await dispatch(updateShippingAddressThunk(data));
    setEdit(false);
    dispatch(showShippingAddressThunk());
  };

  const handleCheakoutButton = async () => {
    if (!cheakoutProducts?.checkout_session_id) return;

    const payload = {
      checkout_session_id: cheakoutProducts.checkout_session_id,
      paymentMethod: method.paymentMethod,
    };

    try {
      const response = await dispatch(
        createPaymentThunk(payload)
      ).unwrap();

      if (response?.checkoutUrl) {
        window.location.href = response.checkoutUrl;
      }
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#2a1816] px-4 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

        {/* LEFT COLUMN */}
        <div className="md:col-span-2 space-y-6">

          {/* SHIPPING ADDRESS */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">
                Shipping Address
              </h2>
              <button
                onClick={() => setEdit(!edit)}
                className="text-sm text-[#7b4a3e] hover:underline"
              >
                Change
              </button>
            </div>

            <div className="rounded-lg border bg-white p-4 text-sm text-black">
              {edit ? (
                <form onSubmit={handleSubmitButton} className="space-y-3">
                  <input
                    required
                    type="text"
                    value={fdata.full_name}
                    onChange={(e) =>
                      setFdata({ ...fdata, full_name: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Full Name"
                  />

                  <input
                    required
                    type="tel"
                    value={fdata.phone}
                    onChange={(e) =>
                      setFdata({ ...fdata, phone: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Phone"
                  />

                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    {loading ? "Updating..." : "Update"}
                  </button>
                </form>
              ) : (
                <>
                  <p className="font-medium">{defaultAddress?.full_name}</p>
                  <p>{defaultAddress?.address_line1}</p>
                  <p>
                    {defaultAddress?.city} - {defaultAddress?.postal_code}
                  </p>
                  <p>{defaultAddress?.state}</p>
                  <p>Phone: {defaultAddress?.phone}</p>
                </>
              )}
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black mb-3">
              Payment Method
            </h2>

            <select
              value={method.paymentMethod}
              onChange={(e) =>
                setMethod({ paymentMethod: e.target.value })
              }
              className="w-full border px-3 py-2 rounded text-black"
            >
              <option value="PHONEPE">PhonePe</option>
              <option value="RAZORPAY">Razorpay</option>
            </select>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="sticky top-6 rounded-xl bg-[#f5efe6] p-6 shadow-sm h-fit">
          <h2 className="mb-4 text-lg font-semibold text-[#3b2a26]">
            Order Summary
          </h2>

          {cheakoutProducts?.items?.map((product) => {
            const images = normalizeImages(product.product_image);
            const mainImage = images[0];

            return (
              <div
                key={product.id}
                className="mb-4 flex gap-4 border-b pb-4"
              >
                <Image
                  src={getValidImage(mainImage)}
                  alt={product.product_name}
                  width={100}
                  height={80}
                  className="object-cover"
                />

                <div>
                  <p className="font-semibold text-black">
                    {product.product_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Qty: {product.quantity}
                  </p>
                  <p className="text-black">
                    ₹ {product.price}
                  </p>
                </div>
              </div>
            );
          })}

          <button
            onClick={handleCheakoutButton}
            className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
          >
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
}
