"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Profile", href: "/account/profile" },
  { name: "Orders", href: "/account/orders" },
  { name: "Manage address", href: "/account/address" },
  { name: "Change Password", href: "/account/change-password" },
  { name: "Subscriptions", href: "/account/subscriptions" },
  { name: "Logout", href: "/account/logout", isLogout: true },
];

export default function ProfileWithMenu({ user = {}, onEdit }) {
  const pathname = usePathname();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-6">

      {/* ONE SINGLE CONTAINER */}
      <div className="bg-[#b48f70] rounded-2xl shadow-md 
        max-w-3xl mx-auto p-5 sm:p-7 lg:p-10 mt-20">

        {/* PROFILE */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 lg:p-10">

          <div className="flex flex-col sm:flex-row 
            items-center sm:items-start gap-6 sm:gap-8">

            {/* Profile Image */}
            <div className="relative 
              w-24 h-24 sm:w-28 sm:h-28 
              rounded-full overflow-hidden 
              border-2 border-amber-700 shrink-0">
              <Image
                src={
                  user?.image && user.image.length > 0
                    ? user.image
                    : "/images/profile.webp"
                }
                alt="profile"
                fill
                className="object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center sm:text-left">
              <h3 className="font-cinzel 
                text-xl sm:text-2xl 
                text-amber-950 mb-2">
                Your Profile
              </h3>

              <p className="text-sm sm:text-base 
                font-playfair text-amber-900 font-bold">
                Name: {user?.name || "—"}
              </p>

              <p className="text-sm sm:text-base 
                font-playfair text-amber-900">
                {user?.phone || "—"}
              </p>

              <p className="text-sm sm:text-base 
                font-playfair text-amber-900">
                {user?.email || "—"}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="btn-primary btn-glow
              mt-6 w-full sm:w-auto
              px-6 py-3 rounded-full">
            Edit Profile
          </button>
        </div>

        <hr className="mt-10 border-2 "></hr>

        {/* MENU */}
        <div className="mt-6 space-y-2">
          {links.map((item) => {
            const active = pathname === item.href && !item.isLogout;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-all font-playfair font-bold
                  ${
                    item.isLogout
                      ? "text-red-700 hover:bg-[#523e2e]"
                      : active
                      ? "bg-[#1d150f] text-white shadow-lg scale-[1.02]"
                      : "text-[#211a14] hover:bg-[#523e2e]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
