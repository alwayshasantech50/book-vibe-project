import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 p-6 md:p-10 shadow-lg">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              📚 Discover Your Next favorite book
            </span>

            <h2 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl lg:text-6xl">
              Book to freshen up {" "}
              <span className="text-green-700">
                your bookshelf
              </span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read to make your bookshelf even better.
            </p>

            <button className="btn btn-success rounded-full px-7 text-white shadow-md transition hover:scale-105">
              Explore Books →
            </button>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={bannerImg}
              alt="Books on a bookshelf"
              className="h-auto w-full object-cover transition duration-500 hover:scale-105"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;