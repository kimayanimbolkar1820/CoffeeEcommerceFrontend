"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { showCartProductsThunk , updateCartThunk ,deleteCartThunk } from "@/redux/features/cartSlice";

export default function Cart({ onClose }) {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector(
    (state) => state.cart
  );

  const cartItems = products?.cart || [ ]

  useEffect(() => {
    dispatch(showCartProductsThunk());
  }, [dispatch]);

  const handlePlusButton =(item)=>{
      dispatch(updateCartThunk({
        cart_item_id : item.cart_item_id ,
        quantity : item.quantity + 1
      }))
  }

  const handleMinusButton =(item)=>{
      dispatch(updateCartThunk({
        cart_item_id : item.cart_item_id ,
        quantity : item.quantity - 1
      }))
  }

  const handleRemoveButton = (item)=>{
    dispatch(deleteCartThunk({
      cart_item_id : item.cart_item_id
    }))
  }

  return (
    <>
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/40 z-[998]" onClick={onClose} />

      {/* CART DRAWER */}
      <div className="fixed right-0 top-0 h-screen w-full sm:w-[420px] bg-black z-[999] shadow-2xl flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-[25px] font-medium tracking-wide text-white font-cinzel ">CART</h2>
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
                <FiShoppingCart size={64} className="mb-4 text-gray-400" />
                <p className="text-lg font-semibold">Your cart is empty</p>
                <p className="text-sm mt-4 text-gray-600">
                  Add products to see them here
                </p>

                <motion.button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </motion.button>
              </motion.div>
            ) : (
              cartItems.map((item) => (
                <motion.div
                  key={item.cart_item_id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="flex gap-4 border-b py-6"
                >
                  {/* IMAGE */}
                  <Image
                    src={(item.images)?.[0] || "/placeholder.png"}
                    width={80}
                    height={80}
                    alt={item.name}
                    className="rounded-lg object-cover"
                  />

                  {/* DETAILS */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <h3 className="font-playfair pt-4 pb-2">Stock : {item.in_stock}</h3>

                    <div className="flex items-center gap-3 mt-3">
                      <button className=" cursor-pointer p-2 border rounded hover:bg-gray-100" onClick={()=>handleMinusButton(item)}>
                        <FiMinus />
                      </button>

                      <span className="font-medium">{item.quantity}</span>

                      <button className=" cursor-pointer p-2 border rounded hover:bg-gray-100" onClick={()=>handlePlusButton(item)}>
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                  {/* PRICE */}
                  <div className="font-semibold text-sm">
                    ₹{item.price * item.quantity}
                  </div>
                  <div className="pt-25  "> 
                     <button onClick={()=>handleRemoveButton(item)} className="cursor-pointer">
                      <MdDelete className="size-7 hover:text-red-500"/>
                     </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
