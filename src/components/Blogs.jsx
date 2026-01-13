import React from "react";
import Image from "next/image";
import blogs from "@/data/blog.json";

const Blogs = () => {
  const featured = blogs[0];
  const rightBlogs = blogs.slice(1, 3);
  const bottomBlogs = blogs.slice(3);

  return (
    <section className="min-h-screen bg-black px-6 md:px-12 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-cinzel text-white">
          Coffee Chronicles
        </h1>
        <p className="text-gray-400 mt-3">
          Stories, guides, and insights from the world of coffee
        </p>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Blog */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[420px]">
          <Image
            src={featured.coverImage}
            alt={featured.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute bottom-0 p-6">
            <span className="bg-amber-500 text-black text-xs px-3 py-1 rounded-full">
              Featured
            </span>

            <h2 className="text-3xl font-bold text-white mt-4">
              {featured.title}
            </h2>

            <p className="text-gray-300 mt-2 max-w-xl">
              {featured.excerpt}
            </p>

            <div className="flex gap-3 text-sm text-gray-400 mt-4">
              <span>{featured.author}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </div>

        {/* Right Side Blogs */}
        <div className="grid gap-6">
          {rightBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#0f0f0f] rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <div className="relative h-44">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4">
                <span className="text-xs text-amber-400 uppercase">
                  {blog.category}
                </span>

                <h3 className="text-white font-semibold mt-1 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>{blog.readTime}</span>
                  <span>{blog.publishedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {bottomBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#0f0f0f] rounded-xl overflow-hidden hover:scale-[1.02] transition"
          >
            <div className="relative h-48">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-4">
              <span className="text-xs text-amber-400 uppercase">
                {blog.category}
              </span>

              <h3 className="text-white font-semibold mt-1 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                {blog.excerpt}
              </p>

              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <span>{blog.readTime}</span>
                <span>{blog.publishedDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
