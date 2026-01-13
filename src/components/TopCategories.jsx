import Image from "next/image";

export default function TopCategories() {
  return (
    <section
  className="relative w-full py-28 px-6 h-full overflow-hidden
  bg-[linear-gradient(135deg,#050505_0%,#0b0b0b_42%,#24140d_68%,#2e1a12_100%)]
"
>


       <div className="pointer-events-none absolute inset-0 z-[5]">
  <img
    src="/images/beans3.png"
    alt=""
    className="
      absolute
      -top-4
      -left-24
      w-[30%]
      max-w-none
      rotate-[180deg]
    "
  />
</div>
<div className="pointer-events-none absolute inset-0 z-[5]">
  <img
    src="/images/beans3.png"
    alt=""
    className="
      absolute
      -bottom-6
      -right-24
      w-[30%]
      max-w-none
      rotate-[0deg]
    "
  />
</div>

      <div className="relative -mt-6 z-20 max-w-7xl mx-auto">


        {/* Heading */}
        <div className="text-center  mb-14">
          <h2 className="text-4xl md:text-5xl font-cinzel text-white">
            Top Categories
          </h2>
          <p className="mt-3 font-playfair text-gray-400">
            Discover our curated collection
          </p>
        </div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#f5e6cf]/5 blur-[140px]" />


        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">

          {/* LEFT BIG CARD */}
          <div className="relative lg:row-span-2 rounded-3xl overflow-hidden group">
            <Image
              src="/images/review2.webp"
              alt="Premium Coffee"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/32" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-serif text-white">
                Premium Coffee
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Single origin & artisan blends
              </p>
              <button className="mt-4 px-5 py-2 rounded-full bg-[#f5e6cf] text-black text-sm font-medium hover:bg-white transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* RIGHT TOP */}
          <div className="relative rounded-3xl overflow-hidden group h-[220px]">
            <Image
              src="/images/machine.webp"
              alt="Machines"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-5 left-5">
              <h3 className="text-xl font-serif text-white">Machines</h3>
              <p className="text-gray-300 text-sm">Professional equipment</p>
              <span className="text-sm text-[#f5e6cf] mt-2 inline-block">
                Explore →
              </span>
            </div>
          </div>

          {/* RIGHT BOTTOM */}
          <div className="relative rounded-3xl overflow-hidden group h-[220px]">
            <Image
              src="/images/Accessories.webp"
              alt="Accessories"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-5 left-5">
              <h3 className="text-xl font-serif text-white">Accessories</h3>
              <p className="text-gray-300 text-sm">Elevate your ritual</p>
              <span className="text-sm text-[#f5e6cf] mt-2 inline-block">
                Explore →
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

          {[
            { title: "Brewing Tools", img: "/images/review3.webp" },
            { title: "Grinders", img: "/images/review5.webp" },
            { title: "Pods", img: "/images/review6.webp" },
            { title: "Subscriptions", img: "/images/cartoon-BG.jpg" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group h-[180px]"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-serif text-white">
                  {item.title}
                </h4>
                <span className="text-sm text-[#f5e6cf]">
                  Shop →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
