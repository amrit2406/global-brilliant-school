import React from "react";
import { FaBullhorn } from "react-icons/fa";

const Banner = () => (
  <div className="w-full bg-[#FFC857] text-[#277055] shadow-lg py-4 px-4 flex items-center justify-center">
    <div className="flex items-center max-w-7xl mx-auto w-full gap-4">
      <span className="text-2xl md:text-3xl">
        <FaBullhorn />
      </span>
      <div className="flex-1">
        <span className="font-bold text-lg md:text-xl tracking-wide">
          Admissions Open for 2025-26!
        </span>
        <span className="block text-base md:inline ml-3">
          Secure a bright future for your child at <span className="font-semibold">Global Brilliant School</span>. Limited seats available.
        </span>
      </div>
      <a
        href="/contact"
        className="hidden md:inline-block bg-[#277055] hover:bg-[#195c41] text-white font-semibold px-6 py-2 rounded-md shadow transition ml-6"
      >
        Apply Now
      </a>
    </div>
  </div>
);

export default Banner;
