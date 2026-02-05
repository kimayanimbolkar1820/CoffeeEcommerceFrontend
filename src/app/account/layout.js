"use client";

// import Sidebar from "@/components/account/Sidebar";


export default function AccountLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#27180e] md:bg-[#291a0d]">
      {/* <Sidebar /> */}
      <main className="flex-1 p-5 md:p-6">{children}</main>
    </div>
  );
}



// import Sidebar from "@/components/Sidebar";

// export default function AccountLayout({ children }) {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <main className="flex-1 p-6 bg-[#3b2a1f] md:bg-[#f6efe9]">
//         {children}
//       </main>
//     </div>
//   );
// }
