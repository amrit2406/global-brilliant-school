// src/pages/Gallery.jsx
import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
// import img4 from "../assets/hero.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";

const galleryImages = [
  img1,
  img2,
  img3,
//   img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const Gallery = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-[#277055] py-24 px-6 md:px-20">
        <div className="absolute inset-0 bg-[url('/img/about-banner-pattern.svg')] bg-cover opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              School Gallery
            </h1>
            <p className="text-xl text-[#FFC857] max-w-3xl mx-auto">
              Moments from our school life
            </p>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center mt-8 text-white">
            <a href="/" className="flex items-center hover:text-[#FFC857] transition">
              <FaHome className="mr-2" />
              Home
            </a>
            <FaChevronRight className="mx-2 text-sm" />
            <span className="text-[#FFC857] font-medium">Gallery</span>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={`School activity ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;