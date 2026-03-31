import React from "react";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#247BBE] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-[22px] font-semibold mb-4">About Us</h3>
          <p className="text-[15px] leading-relaxed text-white/90">
            We are committed to providing compassionate healthcare services
            with advanced medical expertise. Our experienced team ensures
            personalized treatment and patient comfort at every step.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[22px] font-semibold mb-4">Services</h3>
          <ul className="space-y-3">
            {[
              "Elder Care Centre",
              "General Surgery",
              "Urology & Stone Removal",
              "Dermatology & Skin Care",
              "Day-Care Procedures"
            ].map((service, index) => (
              <li key={index} className="flex items-center gap-3 text-white/90 hover:text-white">
                <ArrowRight size={16} />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-[22px] font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-4 text-white/90">

            <li className="flex items-start gap-3">
              <MapPin size={18} />
              <a href="https://www.google.com/maps/place/M+Goel+Hospital" target="_blank">
                Sector 10, Gurgaon, Haryana
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} />
              <div className="flex flex-col">
                <a href="tel:+919810163704">+91 98101 63704</a>
                <a href="tel:+9101244253704">+91 0124 4253704</a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} />
              <a href="mailto:drsushilgoel@gmail.com">
                drsushilgoel@gmail.com
              </a>
            </li>

          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-[22px] font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">

            <a href="https://www.instagram.com/m.goelhospital/" className="bg-white text-[#247BBE] p-3 rounded-full hover:scale-110 transition">
              <FaInstagram size={18} />
            </a>

            <a href="#" className="bg-white text-[#247BBE] p-3 rounded-full hover:scale-110 transition">
              <FaLinkedin size={18} />
            </a>

            <a href="#" className="bg-white text-[#247BBE] p-3 rounded-full hover:scale-110 transition">
              <FaTwitter size={18} />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} M Goel Hospital. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;