"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Profile", href: "/account" },
  { name: "Orders", href: "/account/orders" },
  { name: "Addresses", href: "/account/address" },
  { name: "Change Password", href: "/account/change-password" },
  { name: "Subscriptions", href: "/account/subscriptions" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const MenuItems = () => (
    <div className="space-y-2">
      {links.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-all
              ${active
                ? "bg-[#6f4e37] text-white shadow-lg scale-[1.02]"
                : "hover:bg-[#e7d8cc] text-[#3b2a1f]"}`}
          >
            {item.name}
          </Link>
        );
      })}

      <Link
        href="/account/logout"
        className="block px-4 py-3 rounded-lg text-red-500 hover:bg-red-100"
      >
        Logout
      </Link>
    </div>
  );

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden sticky top-0 z-40 bg-[#6f4e37] px-4 py-3 flex items-center gap-3">
        <button onClick={() => setOpen(true)} className="text-white">
          <Menu size={22} />
        </button>
        <span className="text-white font-medium">My Account</span>
      </div>

      {/* DESKTOP */}
      <aside className="hidden md:block w-64 p-6">
        <div className="bg-[#f1e5db] rounded-2xl p-5 sticky top-20">
          <p className="mb-4 font-semibold text-[#3b2a1f]">
            HI, PAYAL
          </p>
          <MenuItems />
        </div>
      </aside>

      {/* MOBILE SLIDE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 left-0 w-72 h-full bg-[#f6efe9] p-6 z-50"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <button onClick={() => setOpen(false)} className="mb-6">
                <X />
              </button>
              <MenuItems />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const links = [
//   { name: "Profile", href: "/account" },
//   { name: "My orders", href: "/account/orders" },
//   { name: "Manage addresses", href: "/account/address" },
//   { name: "Change password", href: "/account/change-password" },
//   { name: "Subscriptions", href: "/account/subscriptions" },
// ];

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const MenuItems = () => (
//     <div className="space-y-3">
//       {links.map((item) => {
//         const isActive = pathname === item.href;

//         return (
//           <Link
//             key={item.href}
//             href={item.href}
//             onClick={() => setOpen(false)}
//             className={`block px-4 py-3 rounded-lg transition-all
//               ${
//                 isActive
//                   ? "bg-[#b57e4f] text-[#fff3e6]"
//                   : "bg-[#6f4e37] text-[#fff3e6] hover:bg-[#a67c52]"
//               }`}
//           >
//             {item.name}
//           </Link>
//         );
//       })}

//       {/* LOGOUT */}
//       <Link
//         href="/account/logout"
//         onClick={() => setOpen(false)}
//         className="block px-4 py-3 rounded-lg text-red-300 hover:text-red-400"
//       >
//         Logout
//       </Link>
//     </div>
//   );

//   return (
//     <>
//       {/* ✅ STICKY MOBILE HEADER */}
//       <div className="md:hidden sticky top-0 z-30 bg-[#3b2a1f] px-4 py-3 shadow-lg">
//         <button
//           onClick={() => setOpen(true)}
//           className="flex items-center gap-2 text-[#fff3e6]"
//         >
//           <Menu size={22} />
//           <span className="font-medium">Account Menu</span>
//         </button>
//       </div>

//       {/* ✅ DESKTOP SIDEBAR */}
//       <aside className="hidden md:block w-64">
//         <div className="bg-[#6f4e37] rounded-xl p-5 sticky top-20 shadow-md">
//           <MenuItems />
//         </div>
//       </aside>

//       {/* ✅ MOBILE DRAWER */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-black/40 z-40"
//             />

//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", stiffness: 260, damping: 25 }}
//               className="fixed top-0 left-0 w-72 h-full bg-[#6f4e37] p-5 z-50"
//             >
//               <button
//                 onClick={() => setOpen(false)}
//                 className="mb-6 text-[#fff3e6]"
//               >
//                 <X size={22} />
//               </button>

//               <MenuItems />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


