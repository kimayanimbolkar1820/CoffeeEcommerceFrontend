"use client";

import Image from "next/image";

export default function ProfileView({ user ={}, onEdit }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md max-w-xl mx-auto">
      <div className="flex items-center gap-5">

        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-amber-700">
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

        {/*Users Info */}
        <div>
          <h3 className="font-semibold text-lg text-amber-950 font-cinzel mb-2">
            Your Profile
          </h3>

          <p className="text-sm font-playfair text-amber-900 font-bold">
            Name: {user?.name || "—"}
          </p>

          <p className="text-sm font-playfair text-amber-900 font-semibold">
            {user?.phone || "—"}
          </p>

          <p className="text-sm font-playfair text-amber-900 font-semibold">
            {user?.email || "—"}
          </p>
        </div>
      </div>

      <button
        onClick={onEdit}
        className="btn-primary btn-glow mt-6"
      >
        Edit Profile
      </button>
    </div>
  );
}



// "use client";

// import Image from "next/image";

// export default function ProfileView({ onEdit }) {
//   return (
//     <div className="card">
//       <div className="flex items-center gap-4">
//         <Image
//           src="/images/PROFILE.webp"
//           alt="profile"
//           width={80}
//           height={80}
//           className="rounded-full border"
//         />
//         <button className="border px-4 py-2 rounded hover:bg-gray-100">
//           Upload Photo
//         </button>
//       </div>

//       <div className="mt-6 space-y-2 text-sm">
//         <p><b>First Name:</b> Payal</p>
//         <p><b>Last Name:</b> Nikale</p>
//         <p><b>Email:</b> payal@gmail.com</p>
//         <p><b>Mobile:</b> +91 8455884825</p>
//       </div>

//       <button
//         onClick={onEdit}
//         className="mt-6 btn-primary"
//       >
//         Edit Profile
//       </button>
//     </div>
//   );
// }
