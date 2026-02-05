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
  const [edit, setEdit] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("user-profile");
      return saved ? JSON.parse(saved) : DEFAULT_USER;
    }
    return DEFAULT_USER;
  });
  const [user, setUser] = useState(edit);

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


