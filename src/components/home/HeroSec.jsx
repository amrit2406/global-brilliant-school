import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="relative bg-[#F6FAF8]">
      {/* Decorative Background Shape */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2/3 h-full bg-[#277055] rounded-br-[5rem] md:rounded-br-[10rem] opacity-5 absolute left-0 top-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center relative z-10">
        {/* Content Area */}
        <div className="flex-1 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#277055] mb-4 leading-tight">
            Inspiring Excellence,{" "}
            <span className="text-[#FFC857]">Empowering Minds</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            At Global Brilliant School, we shape future leaders through
            innovative learning and a nurturing environment. Join us to unlock
            your child's brightest potential!
          </p>
          <a
            href="/about"
            className="inline-flex items-center bg-[#277055] hover:bg-[#195c41] text-white text-lg font-semibold px-7 py-3 rounded-md shadow transition"
          >
            Learn More
            <FaArrowRight className="ml-3" />
          </a>
        </div>
        {/* Hero Image Area - Replace src with your school image/logo */}
        <div className="flex-1 flex justify-center">
          <img
            src={img} // Use actual image path
            alt="Students at Global Brilliant School"
            className="w-full max-w-md h-[450px] rounded-3xl shadow-xl object-cover border-4 border-[#FFC857]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
