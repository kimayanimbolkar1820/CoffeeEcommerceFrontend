//  "use client";

// import Image from "next/image";

   
// export default function AboutUs() {
//   return (
//     <section className="relative w-full bg-white py-20 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

//         {/* LEFT: Image Section */}
//         <div className="relative w-full md:w-1/2">
//           <Image
//             src="/images/about-coffee-tray.jpg" // replace with your tray image
//             alt="Coffee Tray"
//             width={600}
//             height={400}
//             className="rounded-3xl shadow-lg object-cover w-full"
//             priority
//           />
//         </div>

//         {/* RIGHT: Text Section */}
//         <div className="w-full md:w-1/2 flex flex-col gap-6">
//           <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-gray-900">
//             The Story of Coffee
//           </h2>

//           <div className="w-16 h-1 bg-yellow-500 my-2"></div> {/* small horizontal divider */}

//           <p className="text-gray-700 text-base md:text-lg">
//             CoffeeHouse is dedicated to sourcing the finest coffee beans from around the world.
//             Each cup we serve tells the story of passionate farmers, sustainable practices, and
//             a tradition that has been perfected over centuries.
//           </p>

//           {/* Two smaller cards/images */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//             <div className="relative rounded-2xl overflow-hidden h-40">
//               <Image
//                 src="/images/about-coffee1.jpg"
//                 alt="Coffee Latte"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-black/30" />
//               <p className="absolute bottom-3 left-3 text-white font-medium text-sm">
//                 Latte Art & Flavors
//               </p>
//             </div>
//             <div className="relative rounded-2xl overflow-hidden h-40">
//               <Image
//                 src="/images/about-coffee2.jpg"
//                 alt="Coffee Brew"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-black/30" />
//               <p className="absolute bottom-3 left-3 text-white font-medium text-sm">
//                 Brewed to Perfection
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

  

