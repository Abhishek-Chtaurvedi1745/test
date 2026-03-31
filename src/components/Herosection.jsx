import React from "react";

function HeroSection() {
  return (
    <section
  className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          The Rich Legacy Behind Rockman’s Emergence Your Dream
          <span className="text-blue-400"> Home</span>
        </h1>

        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          A household name since 1956 in India, synonymous with the words Reliability and Dependability, Hero Group ranks amongst one of the most respected business houses. The group delivers outstanding products and services with well-founded commitment to serve the community and foster customer satisfaction.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition shadow-lg">
            Explore Projects
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>

      </div>

      {/* Optional Blur Glass Effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>

    </section>
  );
}

export default HeroSection;