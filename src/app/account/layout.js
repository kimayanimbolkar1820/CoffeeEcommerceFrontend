"use client";

// import Sidebar from "@/components/account/Sidebar";


export default function AccountLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#27180e] md:bg-[#291a0d]">
      {/* <Sidebar /> */}
      <main className="flex-1 p-5 mb-p-2">{children}</main>
    </div>
  );
}
