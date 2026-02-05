"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statesCities = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Delhi: ["New Delhi"],
  Karnataka: ["Bangalore", "Mysore"],
};

export default function AddressPage() {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    phone: "",
  });

  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.address &&
    form.state &&
    form.city &&
    form.zip &&
    form.phone;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setAddresses([...addresses, { ...form, id: Date.now() }]);
    setShowForm(false);
    setForm({
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      zip: "",
      phone: "",
    });
  };

  return (
    <div className="max-w-4xl mt-18">
      <AnimatePresence mode="wait">
        {!showForm && (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold font-cinzel mb-6">My Address</h1>

              <button
                onClick={() => setShowForm(true)}
                className="border px-4 py-2 rounded-full font-playfair hover:bg-black hover:text-white transition"
              >
                Add New Address
              </button>
            </div>

            {addresses.length === 0 && (
              <p className="text-gray-500 fpnt-inter">No addresses added.</p>
            )}

            <div className="space-y-4">
              {addresses.map((a) => (
                <div key={a.id} className="border p-4 rounded">
                  <p className="font-medium">
                    {a.firstName} {a.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {a.address}, {a.city}, {a.state} - {a.zip}
                  </p>
                  <p className="text-sm">{a.phone}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {showForm && (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            className="space-y-4"
          >
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="mb-5 font-bold btn-glow"
            >
              ← 
            </button>

            <input className="input" name="firstName" placeholder="First Name" onChange={handleChange} />
            <input className="input" name="lastName" placeholder="Last Name" onChange={handleChange} />
            <input className="input" name="address" placeholder="Address" onChange={handleChange} />

            <select className="input " name="state" onChange={handleChange}>
              <option value="">Select State</option>
              {Object.keys(statesCities).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <select className="input" name="city" onChange={handleChange}>
              <option value="">Select City</option>
              {statesCities[form.state]?.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <input className="input" name="zip" placeholder="Zip Code" onChange={handleChange} />
            <input className="input" name="phone" placeholder="Phone" onChange={handleChange} />

            <button
              disabled={!isFormValid}
              className={`px-6 py-3 rounded-3xl btn-glow font-playfair font-bold ${
                isFormValid ? "bg-black text-amber-950" : "bg-[#806036] "
              }`}
            >
              Save Address
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
        }
      `}</style>
    </div>
  );
}
