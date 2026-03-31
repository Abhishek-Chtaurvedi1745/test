import React, { useState } from 'react';

function Asection() {

  const [showMore, setShowMore] = useState(false);

  const shortText =
    "M Goel Hospital & Elder Care Centre is a multispeciality surgical hospital...";

  const fullText =
    "M Goel Hospital & Elder Care Centre is a multispeciality surgical hospital and senior care facility in Gurgaon, established in 1994 by Dr. Sushil Goel, M.S., FIAGES, and Postgraduate Diploma holder in Geriatric Medicine.";

  return (
    <div>
    <section className="py-0 pb-10 lg:py-20 px-0 md:px-16  mx-auto relative">
  <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 items-center relative">
    <div className="relative z-10 bg-[#2b50a6] mt-0 mb-0 md:mt-[50px]  md:-mb-[100px] rounded-tr-[0px] md:rounded-tr-[250px] opacity-90 text-white p-4 md:p-12 shadow-xl md:-mr-50">
      <h2 className="text-[25px] lg:text-[32px]  text-[#FFFFFF] font-bold mb-6 mt-16 lg:mt-0">
       Proven Manufacturing Of Diverse Products
      </h2>

     <p className='text-[20px]'>At Rockman, we have perfected the aluminium die casting process with our decade-long manufacturing experience. Today, we are one of the few in the industry capable of manufacturing through all three types of die casting processes – under one roof. With advanced facilities and procedures strictly adhering to global standards, we have successfully met critical tolerance levels and dimension requirements for our manufactured goods.</p>

    </div>
    <div className="relative">
      <img
  src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80"
  alt="Modern Property"
  className="w-full h-[400px] object-cover rounded-2xl"
/>
    </div>

  </div>
</section>

    </div>
  );
}

export default Asection;