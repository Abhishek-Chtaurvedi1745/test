import React from 'react';
import { ShieldCheck, Factory, Leaf } from 'lucide-react'; // Optional: for extra flair

const ExcellenceSection = () => {
  const cards = [
    {
      title: "Global Best Practices",
      text: "Facilities following global best practices – TPM, Quality Circle, GreenCo, etc.",
      icon: <Factory className="w-6 h-6 text-blue-500" />
    },
    {
      title: "ACMA Accreditation",
      text: "ACMA manufacturing accreditation on robust QA system and manufacturing excellence.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Eco-Safety Focus",
      text: "Focus on environmental safety and quality control system.",
      icon: <Leaf className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Header & Intro */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              A Hallmark Of <br />
              <span className="text-blue-600">Excellent</span> <br />
              Production System
            </h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-slate-200 pl-6">
            Our infrastructure is built as per international standards, compliant 
            with global quality systems, with strict adherence to quality practices 
            established by leading regulatory bodies of quality manufacturing.
          </p>
        </div>

        {/* Right Side: Dynamic Card Layout */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Visual Accent - subtle background circle */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
          
          <div className="space-y-6">
            {cards.slice(0, 2).map((card, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-blue-50 w-fit rounded-lg">
                  {card.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform duration-300">
              <div className="mb-4 p-3 bg-white/20 w-fit rounded-lg">
                {cards[2].icon}
              </div>
              <h3 className="font-bold mb-2 text-white">{cards[2].title}</h3>
              <p className="text-blue-50 text-sm leading-relaxed">
                {cards[2].text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;