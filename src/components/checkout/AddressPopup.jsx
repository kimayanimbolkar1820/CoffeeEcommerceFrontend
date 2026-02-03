"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function AddressPopup({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    address_type: "HOME",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "India",
    is_default: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-black/80 text-white shadow-2xl border border-white/10 my-8">

        {/* Background image */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-black/30">
          <Image
            src="/images/formimage.png"
            alt=""
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </div>

        <div className="relative z-10 p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-cinzel text-2xl">Coffee & Joy</h1>
            <button onClick={onClose} className="text-white/70 hover:text-white">
              <X />
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">

            {/* Left Column */}
            <div className="space-y-4">
              <Field
                label="Full Name"
                name="full_name"
                placeholder="Enter your full name"
                onChange={handleChange}
              />
              <Field
                label="Phone Number"
                name="phone"
                placeholder="Enter your phone number"
                onChange={handleChange}
              />
              <Field
                label="Address Line 1"
                name="address_line1"
                placeholder="House no, street, area"
                onChange={handleChange}
              />
              <Field
                label="Address Line 2 (Optional)"
                name="address_line2"
                placeholder="Apartment, landmark"
                onChange={handleChange}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <Field
                label="City"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
              <Field
                label="State"
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
              <Field
                label="Postal Code"
                name="postal_code"
                placeholder="PIN code"
                onChange={handleChange}
              />
              <div>
                <Label>Country</Label>
                <input
                  disabled
                  value="India"
                  className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 text-white/60"
                />
              </div>
            </div>

            {/* Bottom row */}
            <div className="col-span-2 mt-6 space-y-4">

              {/* Address Type */}
              <div>
                <Label>Save address as</Label>
                <div className="flex gap-3 mt-2">
                  {["HOME", "WORK", "OTHER"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, address_type: type })
                      }
                      className={`py-3 px-6 rounded-xl border text-sm transition ${
                        form.address_type === type
                          ? "bg-white text-black"
                          : "border-white/30 text-white/70 hover:border-white/60"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Save Default */}
              <label className="flex items-start gap-3 text-sm text-white/80">
                <input
                  type="checkbox"
                  name="is_default"
                  checked={form.is_default}
                  onChange={handleChange}
                  className="mt-1"
                />
                Save this address for faster checkout next time
              </label>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-white/90"
                >
                  Continue
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small reusable bits ---------- */

function Label({ children }) {
  return (
    <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
      {children}
    </p>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        required
        className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30
                   text-white placeholder-white/40 focus:border-white outline-none"
      />
    </div>
  );
}
