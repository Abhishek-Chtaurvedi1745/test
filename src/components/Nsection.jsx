import React from "react";

const PremiumSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Accrediations By Globally Recognised Institutions </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Our proven manufacturing from die-casting to carbon composites have been recognised with multiple certifications, with quality products enriching the global market.
          </p>

          {/* Features */}
          
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-green text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105">
              Explore Projects
            </button>

            <button className="px-6 py-3 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative">
          {/* Background Shape */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-200 rounded-3xl blur-2xl opacity-40"></div>

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=80"
            alt="property"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
            <p className="text-sm text-gray-600">Starting Price</p>
            <h4 className="text-lg font-bold text-gray-800">₹45 Lakhs</h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumSection;