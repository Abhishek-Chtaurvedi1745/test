import React from "react";

function LocationSection() {
  const locations = [
    {
      name: "Skill Development",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      className: "col-span-1 row-span-1",
    },
    {
      name: "Rular Infrastructure Development",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      className: "col-span-2 row-span-1",
    },
    {
      name: "Education Development ",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      className: "col-span-2 row-span-1",
    },
    {
      name: "Envirnment Green",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      className: "col-span-1 row-span-1",
    },
    {
      name: "Skill Development",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      className: "col-span-1 row-span-1",
    },
    {
      name: "Rular Infrastructure Development",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      className: "col-span-2 row-span-1",
    }
   
    
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Inspiring People Towards Changing Society
      </h1>
      <p className="text-center font-semibold text-[20px] mb-7">We Are More Than Our Manufacturing</p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {locations.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${item.className}`}
          >
            {/* Image */}
            <img
              src={`${item.img}?auto=format&fit=crop&w=1200&q=80`}
              alt={item.name}
              className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-lg md:text-2xl font-semibold tracking-wide">
                {item.name}
              </h2>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default LocationSection;
