import React from "react";
import { FaAward, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import img from "../../assets/3.jpeg";

const aboutStats = [
  {
    icon: <FaAward className="text-[#277055] text-2xl" />,
    label: "Years of Excellence",
    value: "25+",
  },
  {
    icon: <FaUserGraduate className="text-[#FFC857] text-2xl" />,
    label: "Happy Students",
    value: "1,500+",
  },
  {
    icon: <FaChalkboardTeacher className="text-[#277055] text-2xl" />,
    label: "Expert Faculty",
    value: "60+",
  },
];

const About = () => {
  return (
    <section className="relative bg-white py-16" id="about">
      {/* Decorative vertical accent bar */}
      <div className="absolute left-0 top-10 h-32 w-3 rounded-r-lg bg-[#FFC857] opacity-70 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 relative z-10">
        {/* About Text */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h3 className="text-[#277055] font-extrabold text-3xl md:text-4xl mb-4">
            About <span className="text-[#FFC857]">Global Brilliant School</span>
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Global Brilliant School stands as a beacon of quality education, blending modern pedagogy with traditional values. Our mission is to nurture inquisitive minds, foster creativity, and empower every student to thrive—academically, socially, and ethically. With state-of-the-art facilities and a dedicated team of educators, we ensure a holistic experience that shapes well-rounded and confident individuals ready for the future.
          </p>
          <ul className="list-disc list-inside text-[#277055] space-y-1 mb-8">
            <li>Innovative curriculum and STEM programs</li>
            <li>Supportive & inclusive community</li>
            <li>Focus on leadership and life skills</li>
            <li>World-class infrastructure</li>
          </ul>
          <a
            href="/contact"
            className="inline-block bg-[#FFC857] hover:bg-[#ffd674] text-[#277055] font-semibold px-6 py-2 rounded-md shadow transition duration-200"
          >
            Contact Us
          </a>
        </div>
        {/* About Image & Quick Stats */}
        <div className="flex-1 flex flex-col items-center relative">
          <img
            src={img}
            alt="Global Brilliant School campus"
            className="w-full max-w-xs md:max-w-sm rounded-2xl h-[350px] shadow-lg mb-8 border-4 border-[#277055] object-cover"
            loading="lazy"
          />
          <div className="w-full flex justify-center gap-4">
            {aboutStats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center bg-[#F6FAF8] px-6 py-4 rounded-lg shadow transition hover:scale-105"
              >
                {stat.icon}
                <span className="font-bold text-2xl text-[#277055] mt-2">{stat.value}</span>
                <span className="text-sm text-gray-600 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
