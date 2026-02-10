"use client";

import { useEffect, useState } from "react";

import ProfileView from "@/components/account/ProfileView";


export default function AccountPage() {
  const [edit, setEdit] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("user-profile");
      return saved ? JSON.parse(saved) : DEFAULT_USER;
    }
    return 
  });
  const [user, setUser] = useState(edit);

  // ✅ Persist on change
  useEffect(() => {
    localStorage.setItem("user-profile", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <ProfileView user={user} onEdit={() => setEdit(true)} />

      
    </>
  );
}


