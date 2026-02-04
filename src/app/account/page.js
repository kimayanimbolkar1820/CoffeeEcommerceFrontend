"use client";
"use client";

import { useEffect, useState } from "react";
import ProfileView from "@/components/account/ProfileView";
import EditProfile from "@/components/account/EditProfile";

const DEFAULT_USER = {
  name: "Payal Nikale",
  phone: "+91 4569852355",
  email: "your@email.com",
  image: "/images/profile.webp",
};

export default function AccountPage() {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(DEFAULT_USER);

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("user-profile");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // ✅ Persist on change
  useEffect(() => {
    localStorage.setItem("user-profile", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <ProfileView user={user} onEdit={() => setEdit(true)} />

      {edit && (
        <EditProfile
          user={user}
          setUser={setUser}
          onClose={() => setEdit(false)}
        />
      )}
    </>
  );
}



// "use client";

// import { useState } from "react";

// /* Sidebar Menu */
// import Sidebar from "@/components/account/Sidebar";

// /* Account Sections */
// import Profile from "@/components/account/ProfileView";
// import Orders from "./orders/page";
// import Addresses from "./address/page";
// import ChangePassword from "./change-password/page";
// import Subscriptions from "./subscriptions/page";
// import Logout from "./logout/page";
// import EditProfile from "./editProfile/page"; // lowercase folder name

// export default function AccountPage() {
//   const [active, setActive] = useState("Profile");
//   const [edit, setEdit] = useState(false);

//   const renderContent = () => {
//     switch (active) {
//       case "Orders":
//         return <Orders />;
//       case "Addresses":
//         return <Addresses />;
//       case "Change Password":
//         return <ChangePassword />;
//       case "Subscriptions":
//         return <Subscriptions />;
//       case "Logout":
//         return <Logout />;
//       default:
//         return <Profile onEdit={() => setEdit(true)} />;
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       <Sidebar active={active} setActive={setActive} />
//       <main className="flex-1 p-6 bg-[#3b2a1f] md:bg-[#f6efe9] transition-colors">
//         {renderContent()}
//       </main>
//       {edit && <EditProfile onClose={() => setEdit(false)} />}
//     </div>
//   );
// }




