import React, { useState } from "react";

function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: "Aluminium Castings",
      location:
        "Advanced-grade complex die-cast components and finished parts for automotives.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      name: "Alloy Wheels",
      location:
        "Completely automated production of alloy wheels for two and four wheelers.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      name: "Auto Chains",
      location:
        "Two & three wheeler auto chains of superior quality and durability.",
      img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
    },
    {
      name: "Carbon Composite",
      location:
        "Complex carbon parts and assemblies simplified with a certified production process.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

  return (
    <section className="w-full bg-black py-12 md:py-16">
      
      {/* Heading */}
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-8">
        Product
      </h1>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Mobile → Horizontal Scroll */}
        <div className="flex md:hidden overflow-x-auto gap-4 pb-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] h-[400px] relative rounded-xl overflow-hidden flex-shrink-0"
            >
              <img
                src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-6 left-4 text-white">
                <h2 className="text-xl font-bold text-blue-400">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden md:flex h-[60vh] gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-700 ease-in-out 
              ${activeIndex === index ? "flex-[3]" : "flex-[1]"}`}
            >
              {/* Image */}
              <img
                src={`${item.img}?auto=format&fit=crop&w=1200&q=80`}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content */}
              <div
                className={`absolute bottom-8 left-5 right-5 text-white transition-all duration-500 
                ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-xl md:text-2xl font-bold text-blue-400">
                  {item.name}
                </h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  {item.location}
                </p>

                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm">
                  Get More Information
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;
