"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Addresses() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address submitted");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 relative">
        {/* Header */}
        {!showForm && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold">
              Saved Addresses
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              No addresses added.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="mt-5 px-6 py-2.5 bg-green-600 text-white rounded-full
              hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Add New Address
            </button>
          </>
        )}

        {/* Address Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.35 }}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base sm:text-lg font-semibold">
                  Add New Address
                </h3>

                {/* Back Arrow */}
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="input" placeholder="First Name *" required />
                  <input className="input" placeholder="Last Name *" required />
                </div>

                {/* Company */}
                <input
                  className="input"
                  placeholder="Company Name (Optional)"
                />

                {/* Country */}
                <select className="input" required>
                  <option value="">Select Country *</option>
                  <option>India</option>
                  <option>USA</option>
                </select>

                {/* Street */}
                <input
                  className="input"
                  placeholder="Street Address *"
                  required
                />

                {/* City & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="input" required>
                    <option value="">Select City *</option>
                  </select>
                  <select className="input" required>
                    <option value="">Select State *</option>
                  </select>
                </div>

                {/* Zip & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="input" placeholder="Zip Code *" required />
                  <input
                    className="input"
                    placeholder="Phone *"
                    type="tel"
                    required
                  />
                </div>

                {/* Email */}
                <input
                  className="input"
                  placeholder="Email *"
                  type="email"
                  required
                />

                {/* Submit */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3 bg-green-700
                    text-black rounded-full hover:bg-green-800
                    transition shadow-md"
                  >
                    Submit Address
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Reusable Input Style */}
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 9999px;
          border: 1px solid #e5e7eb;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .input:focus {
          border-color: #16a34a;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.25);
        }
      `}</style>
    </div>
  );
}