import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
         ? "bg-white shadow-md py-3 text-black"
    : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        <img src="assets/logot.png" alt="" className="h-20"/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Projects", "News", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a href="#" className=" text-[20px] font-regular">
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919999156255"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Call Now
          </a>

          <button className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Advisor
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[3px] w-6 bg-black mb-1 transition ${
              menuOpen && "rotate-45 translate-y-2"
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-black mb-1 ${
              menuOpen && "opacity-0"
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-black transition ${
              menuOpen && "-rotate-45 -translate-y-2"
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white w-full absolute left-0 transition-all duration-300 ${
          menuOpen ? "top-full opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {["Home", "About", "Projects", "News", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-700 text-lg">
                {item}
              </a>
            </li>
          ))}

          <a
            href="tel:+919999156255"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full"
          >
            Call Now
          </a>

          <button className="px-5 py-2 bg-blue-500 text-white rounded-full">
            Advisor
          </button>
        </ul>
      </div>
    </nav>
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* Background Video */}
    <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source
    src="assets/istockphoto-1453963806-640_adpp_is.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-white text-4xl md:text-6xl font-bold flex flex-wrap justify-center">
          Welcome to
          <span className="text-[#4e85ff] ml-2">Future of Automotives</span>
        </h1>

        <p className="text-gray-300 mt-4 text-lg md:text-xl">
         At Rockman, we have perfected the aluminium die casting process with our decade-long manufacturing experience.
        </p>

        
      </div>
    </section>
    </>
  );
}

export default Navbar;