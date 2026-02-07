"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddressPage({ onBack }) {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [editId, setEditId] = useState(null);

  // Detect mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    permenantaddress: "",
    state: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
    form.address &&
    form.permenantaddress &&
    form.state &&
    form.city &&
    form.zip;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    if (editId) {
      setAddresses(
        addresses.map((a) =>
          a.id === editId ? { ...form, id: editId } : a
        )
      );
      setEditId(null);
    } else {
      setAddresses([...addresses, { ...form, id: Date.now() }]);
    }

    setShowForm(false);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      permenantaddress: "",
      state: "",
      city: "",
      zip: "",
    });
  };

  const handleBackClick = () => {
    if (isMobile && onBack) {
      onBack(); // 📱 back to ProfileView
      return;
    }
    setShowForm(false);
    setEditId(null);
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-[#d7bf9a] p-4">
      <div className="max-w-8xl w-full relative">
        <div className="bg-[#2a1c12] p-4 rounded-lg shadow-lg sticky top-4 relative min-h-[400px]">

          {/* BACK BUTTON */}
          {(showForm || isMobile) && (
            <motion.div
              className="absolute top-4 left-4 z-20"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.button
                onClick={handleBackClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[20px] btn-glow font-bold"
              >
                ⟵
              </motion.button>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {!showForm && (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="text-2xl text-[rgb(228,185,154)] font-cinzel mb-10 mt-10 text-center underline">
                  My Address
                </h1>

                {addresses.length === 0 ? (
                  <p className="text-gray-500 text-center mt-40">
                    No addresses added.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {addresses.map((a) => (
                      <div key={a.id} className="border p-4 rounded">
                        <p className="font-medium capitalize">
                          {a.firstName} {a.lastName}
                        </p>
                        <p className="text-sm capitalize">
                          {a.address}, {a.city}, {a.state} - {a.zip}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowForm(true)}
                    className="border border-amber-400 px-6 py-2 rounded-full bg-amber-800 btn-glow"
                  >
                    Add new address
                  </button>
                </div>
              </motion.div>
            )}

            {/* ADDRESS FORM */}
            {showForm && (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                className="space-y-4 mt-10"
              >
                <input className="input capitalize-text" name="firstName" placeholder="First Name" onChange={handleChange} value={form.firstName} />
                <input className="input capitalize-text" name="lastName" placeholder="Last Name" onChange={handleChange} value={form.lastName} />
                <input className="input" name="email" placeholder="Email" onChange={handleChange} value={form.email} />
                <input className="input" name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} />
                <input className="input capitalize-text" name="address" placeholder="Address" onChange={handleChange} value={form.address} />
                <input className="input capitalize-text" name="permenantaddress" placeholder="Permanent Address" onChange={handleChange} value={form.permenantaddress} />
                <input className="input capitalize-text" name="state" placeholder="State" onChange={handleChange} value={form.state} />
                <input className="input capitalize-text" name="city" placeholder="City" onChange={handleChange} value={form.city} />
                <input className="input" name="zip" placeholder="Zip Code" onChange={handleChange} value={form.zip} />

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="px-6 py-3 rounded-3xl bg-[#b2160e] text-white btn-glow"
                  >
                    {editId ? "Update Address" : "Save Address"}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ ONLY CSS CHANGE */}
      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
        }
        .capitalize-text {
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
}
