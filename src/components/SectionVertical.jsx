import React from "react";
import {
  FaChartBar,
  FaBolt,
  FaDatabase,
  FaCogs,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import { MdDeveloperMode, MdViewModule } from "react-icons/md";

export default function SectionVertical() {
  const iconsLeft = [
    <FaChartBar />,
    <MdDeveloperMode />,
    <MdViewModule />,
    <FaBolt />,
  ];
  const iconsRight = [
    <FaDatabase />,
    <FaCogs />,
    <FaCheckCircle />,
    <FaBuilding />,
  ];

  return (
    <section className="relative py-20 px-4 md:py-32 md:px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-x-4">
        
        <div className="grid grid-cols-4 md:grid-cols-1 gap-2 justify-items-center">
          {iconsLeft.map((icon, index) => (
            <div
              key={index}
              className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-white/10 bg-black/30 ${
                index === 0 ? "bg-white/10" : ""
              }`}
            >
              {React.cloneElement(icon, { className: "w-5 h-5 text-gray-400" })}
            </div>
          ))}
        </div>

        <div className="px-2 text-center">
          <p className="text-white text-base md:text-lg leading-relaxed font-medium">
            “Scout is an indispensable tool for
            <br /> our Engineering, DS and Sales teams <br /> to engage with our
            customers. We <br />
            rely on Scout daily, making it an <br /> integral part of our
            operations.”
          </p>

          <div className="mt-6">
            <img
              src="/man.jpg"
              className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
            />
          </div>
          <div className="mt-3 text-gray-400 text-sm">
            Vijay Rajj
            <br />
            CEO of Statsig
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-1 gap-2 justify-items-center">
          {iconsRight.map((icon, index) => (
            <div
              key={index}
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-white/10 bg-black/30"
            >
              {React.cloneElement(icon, { className: "w-5 h-5 text-gray-400" })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
