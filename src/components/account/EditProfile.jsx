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
  const [snapshot] = useState(user); // ❌ revert support

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
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
    }, 1200);
  };

  const handleCancel = () => {
    setUser(snapshot); 
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-[#37291d] w-full max-w-md rounded-2xl p-6 relative"
      >
        <button
          onClick={handleCancel}
          className="absolute right-4 top-4 text-white"
        >
          <X />
        </button>

        <h2 className="text-white font-cinzel text-xl text-center mb-6 font-bold">
          Edit Profile
        </h2>

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

        <label className="block text-center cursor-pointer btn-glow py-1 rounded-lg mb-6 text-white font-playfair font-semibold">
          Upload Photo
          <input type="file" hidden accept="image/*" onChange={handleImage} />
        </label>

        {/* FORM */}
        <div className="space-y-3 font-inter text-amber-900">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="Full Name"
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

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handleSave}
            disabled={loading}
            className="btn-primary btn-glow flex items-center gap-"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            Save Changes
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";

// export default function EditProfile({ user, setUser, onClose }) {
//   const [form, setForm] = useState({
//     name: user.name,
//     phone: user.phone,
//     email: user.email,
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const url = URL.createObjectURL(file);
//     setUser((prev) => ({ ...prev, image: url }));
//   };

//   const handleSave = () => {
//     setUser((prev) => ({
//       ...prev,
//       ...form,
//     }));

//     onClose(); // close modal
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <motion.div
//         initial={{ scale: 0.95, y: 20 }}
//         animate={{ scale: 1, y: 0 }}
//         className="bg-[#37291d] w-full max-w-md rounded-2xl p-6 relative"
//       >
//         <button onClick={onClose} className="absolute right-4 top-4 text-white">
//           <X />
//         </button>

//         <h2 className="text-white text-xl mb-4 text-center">
//           Edit Profile
//         </h2>

//         {/* Image */}
//         <div className="flex justify-center mb-6">
//           <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-amber-700">
//             <Image
//               src={user.image || "/images/profile.webp"}
//               fill
//               className="object-cover"
//               alt="profile"
//             />
//           </div>
//         </div>

//         <label className="block text-center cursor-pointer btn-glow py-2 rounded-lg mb-5 text-white">
//           Upload Photo
//           <input type="file" hidden accept="image/*" onChange={handleImage} />
//         </label>

//         {/* Inputs */}
//         <div className="space-y-3">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="input"
//             placeholder="Full Name"
//           />
//           <input
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             className="input"
//             placeholder="Phone"
//           />
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="input"
//             placeholder="Email"
//           />
//         </div>

//         <div className="flex justify-end gap-4 mt-6">
//           <button onClick={handleSave} className="btn-primary btn-glow">
//             Save Changes
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

