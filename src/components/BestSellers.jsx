// import React from 'react'
// import Image from "next/image";

// /* ---------------- DATA ---------------- */
//  const data = {
//    Coffee: [
//     { name: "Audentes", price: "₹500", img: "/images/coffee1.png" },
//     { name: "Suavitatis", price: "₹550", img: "/images/coffee2.png" },
//     { name: "Videntur", price: "₹600", img: "/images/coffee3.png" },
//     { name: "Fortis", price: "₹650", img: "/images/coffee4.png" },
//   ],
//   Machines: [
//     { name: "Espresso Pro", price: "₹24,999", img: "/images/machine1.png" },
//     { name: "Brew Master", price: "₹18,500", img: "/images/machine2.png" },
//     { name: "Classic Brewer", price: "₹15,000", img: "/images/machine3.png" },
//     { name: "Barista Max", price: "₹29,999", img: "/images/machine4.png" },
//   ],
//   Accessories: [
//     { name: "Grinder", price: "₹3,200", img: "/images/accessory1.png" },
//     { name: "Pour Over Kit", price: "₹2,100", img: "/images/accessory2.png" },
//     { name: "Tamper", price: "₹900", img: "/images/accessory3.png" },
//     { name: "Milk Pitcher", price: "₹1,200", img: "/images/accessory4.png" },
//   ],
// };

// const BestSellers = () => {
//   return (
//    <section
//   className="relative w-full py-28 px-6 h-full overflow-hidden
//   bg-[#F3E0C8]
// "
// >

    
//        <div className="pointer-events-none absolute inset-0 z-[10]">
//   <img
//     src="/images/beans3.png"
//     alt=""
//     className="
//       absolute
//       -top-4
//       -left-24
//       w-[30%]
//       max-w-none
//       rotate-[180deg]
//     "
//   />
// </div>
// <div className="pointer-events-none absolute inset-0 z-[10]">
//   <img
//     src="/images/beans3.png"
//     alt=""
//     className="
//       absolute
//       -bottom-6
//       -right-24
//       w-[30%]
//       max-w-none
//       rotate-[0deg]
//     "
//   />
// </div>

// <div className="relative z-20 max-w-7xl mx-auto">
        
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="relative inline-block text-4xl md:text-5xl font-cinzel text-black pb-4">
//             BEST SELLERS
//             <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-40 h-[3px] bg-black" />
//           </h2>

//           <p className="mt-3 font-playfair font-bold text-black/60 text-md">
//             Discover our curated collection
//           </p>
//         </div>

//         {/* Rows */}
//          <div className="space-y-16">
//            <CategoryRow title="COFFEE" items={data.Coffee} />
//          <CategoryRow title="MACHINES" items={data.Machines} />
//          <CategoryRow title="ACCESSORIES" items={data.Accessories} />
//         </div>

//        </div>
//      </section>
//   );
// };

// /* ---------------- CATEGORY ROW ---------------- */
// function CategoryRow({ title, items }) {
//   return (
//     <div>
//       {/* Row Header */}
//       <div className="flex items-end justify-between mb-3">
//         <h3 className="text-2xl font-playfair text-black font-semibold">
//           {title}
//         </h3>

//         <span className="text-m font-cinzel text-black cursor-pointer hover:underline">
//           View all →
//          </span>
//        </div>
//      <div className="w-16 h-[2px] bg-black mb-10" />

//      {/* Cards */}
//      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {items.map((item, i) => (
//           <div
//             key={i}
//             className="group bg-white rounded-2xl p-6 transition-all duration-500 hover:bg-black"
//           >
//             {/* Image */}
//             <div className="relative w-full h-44 mb-6">
//               <Image
//                 src={item.img}
//                 alt={item.name}
//                 fill
//                 className="object-contain transition-transform duration-500 group-hover:-translate-y-2"
//               />
//             </div>

//             {/* Info */}
//            <h4 className="text-lg font-playfair text-black group-hover:text-[#F3E0C8]">
//               {item.name}
//              </h4>

//            <p className="text-sm text-gray-600 group-hover:text-gray-300 mt-1">
//              Best seller
//            </p>

//             <div className="mt-6 flex items-center justify-between">
//              <span className="font-medium text-black group-hover:text-[#F3E0C8]">
//                  {item.price}
//               </span>

//               <button className="px-4 py-2 rounded-full bg-black text-[#F3E0C8] group-hover:bg-[#F3E0C8] group-hover:text-black transition">
//                 Add
//               </button>
//             </div>
//          </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default BestSellers
