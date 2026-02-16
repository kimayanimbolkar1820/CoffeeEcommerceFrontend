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

  /* ================= FETCH ADDRESS ================= */
  useEffect(() => {
    dispatch(showShippingAddressThunk());
  }, [dispatch]);

  /* ================= FETCH CHECKOUT ================= */
  useEffect(() => {
    if (id) {
      dispatch(showCheakoutThunk(id));
    }
  }, [id, dispatch]);

  /* ================= SYNC ADDRESS ================= */
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

  const handleEditbuttton = () => setEdit((prev) => !prev);

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
      } else {
        console.log("Checkout URL missing");
      }
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#2a1816] px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 lg:grid lg:grid-cols-3">
        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2 space-y-6">

          {/* SHIPPING ADDRESS */}
          <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">
                Shipping Address
              </h2>
              <button
                onClick={handleEditbuttton}
                className="text-sm text-[#7b4a3e] hover:underline"
              >
                Change
              </button>
            </div>

            <div className="rounded-lg border bg-white p-4 text-sm">
              {edit ? (
                <form onSubmit={handleSubmitButton} className="space-y-3 text-black">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={fdata.full_name}
                    onChange={(e) =>
                      setFdata({ ...fdata, full_name: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    value={fdata.phone}
                    onChange={(e) =>
                      setFdata({ ...fdata, phone: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Address Line 1"
                    value={fdata.address_line1}
                    onChange={(e) =>
                      setFdata({ ...fdata, address_line1: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  />

                  <input
                    type="text"
                    placeholder="Address Line 2"
                    value={fdata.address_line2}
                    onChange={(e) =>
                      setFdata({ ...fdata, address_line2: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  />

                  <input
                    required
                    type="text"
                    placeholder="City"
                    value={fdata.city}
                    onChange={(e) =>
                      setFdata({ ...fdata, city: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  />

                  <input
                    required
                    type="text"
                    placeholder="State"
                    value={fdata.state}
                    onChange={(e) =>
                      setFdata({ ...fdata, state: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  />

                  <input
                    required
                    type="text"
                    placeholder="PIN"
                    value={fdata.postal_code}
                    onChange={(e) =>
                      setFdata({ ...fdata, postal_code: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    {loading ? "Updating..." : "Update"}
                  </button>
                </form>
              ) : (
                <>
                  <p className="font-medium">{defaultAddress?.full_name}</p>
                  <p>
                    {defaultAddress?.address_line1},{" "}
                    {defaultAddress?.address_line2}
                  </p>
                  <p>
                    {defaultAddress?.city} -{" "}
                    {defaultAddress?.postal_code}
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
              Payment Methods
            </h2>

            <div className="flex gap-3">
              {["COD", "PHONEPE"].map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setMethod({ ...method, paymentMethod: type })
                  }
                  className={`px-4 py-2 border rounded text-sm ${
                    method.paymentMethod === type
                      ? "bg-black text-white"
                      : "text-black"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="rounded-xl bg-[#f5efe6] p-6 shadow-sm lg:sticky lg:top-6">
          <h2 className="text-lg font-semibold text-black mb-4">
            Order Summary
          </h2>

          {cheakoutProducts?.items?.map((product, index) => {
            const images = normalizeImages(product.product_image);
            const mainImage = images[0];

            return (
              <div
                key={index}
                className="mb-4 flex gap-4 border-b pb-4"
              >
                <Image
                  src={getValidImage(mainImage)}
                  alt={product.product_name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />

                <div className="flex-1 text-black">
                  <p className="font-medium">
                    {product.product_name}
                  </p>
                  <p className="text-sm">
                    Qty: {product.quantity}
                  </p>
                  <p className="font-semibold">
                    ₹ {product.price}
                  </p>
                </div>
              </div>
            );
          })}

          {/* BILLING */}
          <div className="space-y-2 text-sm text-black">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {cheakoutProducts?.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹ {cheakoutProducts?.total_gst}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>₹ {cheakoutProducts?.discount}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>₹ {cheakoutProducts?.final_amount}</span>
            </div>
          </div>

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
