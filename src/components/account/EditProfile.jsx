"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Loader2 } from "lucide-react";

export default function EditProfile({ user = {}, setUser, onClose }) {
  const [form, setForm] = useState({
    name: user.name || "",
    phone: user.phone || "",
    email: user.email || "",
  });

  const [preview, setPreview] = useState(user.image);
  const [loading, setLoading] = useState(false);
  const [snapshot] = useState(user);

  // ✅ STOP BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    setLoading(true);

    setTimeout(() => {
      setUser((prev) => ({
        ...prev,
        ...form,
        image: preview,
      }));
      setLoading(false);
      onClose();
    }, 1000);
  };

  const handleCancel = () => {
    setUser(snapshot);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-[999]
      flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type:"spring", stiffness: 200 }}
        className="bg-[#37291d] w-full max-w-lg
        rounded-2xl p-5 sm:p-7 relative"
      >
        <button
  onClick={handleCancel}
  aria-label="Close"
  className="absolute right-4 top-4 rounded-full p-1 text-white 
             hover:bg-white/20 
             focus:outline-none focus:ring-2 focus:ring-white/60
             transition"
>
  <X className="h-5 w-5" />
</button>


        <h2 className="text-white text-xl font-bold text-center mb-6">
          Edit Profile
        </h2>

        {/* <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full
          overflow-hidden border border-amber-600">
            <Image
              src={preview || "/images/profile.webp"}
              fill
              alt="profile"
              className="object-cover"
            />
          </div>
        </div> */}
        
        <div className="flex justify-center mb-6">
         <motion.div
             whileHover={{ scale: 1.15 }}
             className="relative w-38 h-38 rounded-full overflow-hidden border-1 border-amber-600"
           >
            <Image
               src={preview || "/images/profile.webp"}
               fill
               className="object-cover"
               alt="profile"
             />
           </motion.div>
         </div>

        <div className="flex justify-center">
          <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.75 }}
         className="block text-center cursor-pointer btn-glow py-1 bg-[#2c1e12] w-40 rounded-lg mb-6 text-white font-playfair font-semibold">
          Upload Photo
          <input hidden type="file" accept="image/*" onChange={handleImage}/>
        </motion.button >
        </div>

        <div className="space-y-3 font-inter text-amber-700">
          <input name="name" value={form.name}
            onChange={handleChange}
            className="input" placeholder="Name"/>

          <input name="phone" value={form.phone}
            onChange={handleChange}
            className="input" placeholder="Phone"/>

          <input name="email" value={form.email}
            onChange={handleChange}
            className="input" placeholder="Email"/>
        </div>
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="relative mt-9 flex justify-center btn-glow
          px-6 py-3 rounded-full text-white font-playfair font-semibold 
          border border-amber-950 bg-amber-900 w-60 overflow-hidden"
        >
          {loading && <Loader2 className="animate-spin inline mr-2" size={18}/>}
          Save Changes

          <motion.span
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0
            bg-gradient-to-r from-transparent
            via-amber-400/30 to-transparent"
          />
        </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

