"use client";

import { useState } from "react";
import Profile from "@/components/account/Profile";
import EditProfile from "@/components/account/EditProfile";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Payal Nikale",
    phone: "9876543210",
    email: "payal@email.com",
    image: "/images/profile.webp",
  });

  const [isEditing, setIsEditing] = useState(false);


  const handleEditButton = ()=>{
    setIsEditing((prev)=>!prev)
  }

  return (
    <>
      <Profile
        user={user}
        
      />

      {isEditing && (
        <EditProfile
          user={user}
         // setUser={setUser}   // ✅ VERY IMPORTANT
          onClose={handleEditButton}
        />
      )}
    </>
  );
}
