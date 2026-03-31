import React from "react";

const logos = [
  "assets/logo2.png",
  "assets/logo1.jpeg",
  "assets/logo2.png",
  "assets/logo1.jpeg",
  "assets/logo2.png",
  "assets/logo1.jpeg",
  "assets/logo2.png",
  "assets/logo1.jpeg",
  "assets/logo2.png",
  "assets/logo1.jpeg",
  "assets/logo2.png",
  "assets/logo1.jpeg",
  
];

const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden py-6 bg-white">
      <div className="flex w-max animate-scroll">
        {/* First Set */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="h-16 mx-8 object-contain"
          />
        ))}

        {/* Duplicate Set for Infinite Effect */}
        {logos.map((logo, index) => (
          <img
            key={`dup-${index}`}
            src={logo}
            alt="logo"
            className="h-16 mx-8 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;