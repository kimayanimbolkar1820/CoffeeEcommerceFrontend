"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";

export default function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState([]); // EMPTY BY DEFAULT

  const increase = (id) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decrease = (id) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const buttonAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 bg-black/40 z-[998]"
        onClick={onClose}
      />

      {/* CART DRAWER */}
      <div className="fixed right-0 top-0 h-screen w-full sm:w-[420px] bg-white z-[999] shadow-2xl flex flex-col">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-xl font-semibold tracking-wide">CART</h2>
          <FiX
            className="cursor-pointer text-xl hover:rotate-90 transition"
            onClick={onClose}
          />
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence>
            {cartItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center text-gray-500"
              >
                <FiShoppingCart size={64} className="mb-4 text-gray-400 " />
                <p className="text-lg font-semibold">Your cart is empty</p>
                <p className="text-sm mt-4 text-gray-600 ">
                  📝 Note: Your cart is currently empty. You can add products to see them here
                </p>

                {/* ✅ CANCEL BUTTON */}
                <motion.button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 border rounded-lg text-gray-900 hover:bg-gray-100 transition"
                  {...buttonAnimation}
                >
                  Cancel
                </motion.button>
              </motion.div>
            ) : (
              cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 border-b py-4"
                >
                  {/* IMAGE */}
                  <Image
                    src={item.img}
                    width={80}
                    height={80}
                    alt={item.title}
                    className="rounded-lg object-cover"
                  />

                  {/* DETAILS */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.size}</p>

                    {/* QTY CONTROLS */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decrease(item.id)}
                        className="p-2 border rounded hover:bg-gray-100 transition"
                      >
                        <FiMinus />
                      </button>

                      <span className="font-medium">{item.qty}</span>

                      <button
                        onClick={() => increase(item.id)}
                        className="p-2 border rounded hover:bg-gray-100 transition"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="font-semibold text-sm">
                    ₹{item.price * item.qty}
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* ================= FOOTER ================= */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t space-y-3">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Checkout
            </button>

            {/* ✅ CANCEL BUTTON */}
            <motion.button
              onClick={onClose}
              className="w-full border py-3 rounded-lg text-gray-800 hover:bg-gray-300 transition"
              {...buttonAnimation}
            >
              Cancel
            </motion.button>
          </div>
        )}
      </div>
    </>
  );
}
