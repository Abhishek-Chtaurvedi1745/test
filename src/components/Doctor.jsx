import React from "react";

const DoctorSection = () => {
  return (
    <section className="py-16 lg:py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[.7fr_1.3fr] gap-8 lg:gap-42 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-[25px] lg:text-[32px] text-[#247BBE] font-bold mb-1">
            
          </h2>
          <p className="text-[#3E3E3E] text-[18px] lg:text-[20px] font-bold leading-relaxed">
            Dedicated expert committed to your health. Compassionate care you can rely on.
          </p>
        </div>

        {/* Right Content / Doctor Card */}
        <div className="grid sm:grid-cols-1 gap-6">
          <div className="bg-[#E8F6FF] shadow-md p-5 md:p-2 flex flex-col md:flex-row items-center gap-0 hover:shadow-lg transition">
            
            {/* Doctor Image */}
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
              alt="Dr. Sushil Goel"
              className="w-66 h-66 ml-0 md:-ml-[150px] rounded-full object-cover flex-shrink-0"
            />

            {/* Doctor Info */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-[22px] font-bold text-[#247BBE] mb-1">
                People - Our strength of Piller
              </h3>
              <p className="text-[#3E3E3E] text-[18px] font-bold">
                General and Laparoscopic Surgeon
              </p>
              <p className="text-[16px] text-[#3E3E3E] leading-relaxed mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quos consequuntur maiores cumque est explicabo quo eum debitis, molestias rem totam. Ipsa est sapiente soluta! Ducimus nobis amet ut? Tempore?
              </p>
            </div>

          </div>
        </div>
        
        <div className="">
          <h2 className="text-[25px] lg:text-[32px] text-[#247BBE] font-bold mb-1">
            
          </h2>
          <p className="text-[#3E3E3E] text-[18px] lg:text-[20px] font-bold leading-relaxed">
            Dedicated expert committed to your health. Compassionate care you can rely on.
          </p>
        </div>

        {/* Right Content / Doctor Card */}
        <div className="grid sm:grid-cols-1 gap-6">
          <div className="bg-[#E8F6FF] shadow-md p-5 md:p-2 flex flex-col md:flex-row items-center gap-0 hover:shadow-lg transition">
            
            {/* Doctor Image */}
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="w-66 h-66 ml-0 md:-ml-[150px] rounded-full object-cover flex-shrink-0"
            />

            {/* Doctor Info */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-[22px] font-bold text-[#247BBE] mb-1">
                Rockman Leadership
              </h3>
              <p className="text-[#3E3E3E] text-[18px] font-bold">
                General and Laparoscopic Surgeon
              </p>
              <p className="text-[16px] text-[#3E3E3E] leading-relaxed mt-2">
                Founder of M Goel Hospital, Dr. Sushil Goel has over 30 years of
                experience in major and minor surgical procedures and is known
                for his dedication, compassion and commitment to patient care.
              </p>
            </div>

          </div>
        </div>
        



      </div>
    </section>
  );
};

export default DoctorSection;