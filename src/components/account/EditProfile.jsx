"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Loader2 } from "lucide-react";

export default function EditProfile({ user, setUser, onClose }) {
  const snapshot = useRef(user); // ✅ SAFE snapshot

  const [form, setForm] = useState({
    name: user.name || "",
    phone: user.phone || "",
    email: user.email || "",
  });

  const [preview, setPreview] = useState(user.image);
  const [loading, setLoading] = useState(false);

  // STOP BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    if (loading) return; // ✅ prevent double click
    setLoading(true);

    setTimeout(() => {
      setUser((prev) => ({
        ...prev,
        ...form,
        image: preview,
      }));

      setLoading(false);
      onClose();
    }, 800);
  };

  const handleCancel = () => {
    setUser(snapshot.current); // ✅ restore previous data
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-[#37291d] w-full max-w-lg rounded-2xl p-5 sm:p-7 relative"
      >
        {/* CLOSE */}
        <button
          onClick={handleCancel}
          className="absolute right-4 top-4 rounded-full p-1 text-white hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-white text-[20px] underline underline-offset-3 decoration-0 font-bold text-center font-cinzel mb-5">
          Edit Profile
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={preview} // ✅ trigger animation whenever image changes
              className="relative w-28 h-28 rounded-full overflow-hidden border border-amber-600"
              initial={{ scale: 0, rotate: -15, opacity: 0.90 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 15, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 45 }}
            >
              <Image
                src={preview || "/images/profile.webp"}
                fill
                alt="profile"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* UPLOAD */}
        {/* <div className="flex justify-center mb-5"> */}
        <motion.button
            onClick={handleSave}
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-pointer btn-glow bg-[#937052] px-4 py-2 mb-4 rounded-4xl text-white 
            block w-max mx-auto sm:mx-0 sm:ml-10 md:ml-20 lg:ml-40"
            >
            Upload Photo
            <input hidden type="file" onChange={handleImage} />
          {/* </label> */}
          </motion.button>
        {/* </div> */}

        {/* INPUTS */}
        <div className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="Name"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="input"
            placeholder="Phone"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input"
            placeholder="Email"
          />
        </div>

        {/* SAVE */}
        <div className="flex justify-center mt-5">
          <motion.button
            onClick={handleSave}
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="btn-glow px-6 py-3  cursor-pointer rounded-full text-white bg-amber-900 disabled:opacity-60"
          >
            {loading && (
              <Loader2 className="inline mr-2 h-4 w-4 animate-spin" />
            )}
            Save Changes
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
