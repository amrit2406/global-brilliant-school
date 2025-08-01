import React from "react";
import { FaLightbulb, FaUserFriends, FaMedal, FaGlobeAsia } from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb className="text-[#FFC857] text-3xl mb-2" />,
    title: "Innovative Learning",
    desc: "Project-based curriculum and interactive tools promote curiosity, problem solving, and lifelong passion for learning.",
  },
  {
    icon: <FaUserFriends className="text-[#277055] text-3xl mb-2" />,
    title: "Nurturing Environment",
    desc: "Supportive teachers and safe spaces ensure every child feels valued, respected, and confident to shine.",
  },
  {
    icon: <FaMedal className="text-[#FFC857] text-3xl mb-2" />,
    title: "Personal Excellence",
    desc: "Focus on holistic development – academic, sporting, artistic, and social achievements for every individual.",
  },
  {
    icon: <FaGlobeAsia className="text-[#277055] text-3xl mb-2" />,
    title: "Global Perspective",
    desc: "21st-century skills, multilingual exposure, and cultural engagement prepare students to lead in a fast-changing world.",
  },
];

const WhyChooseUs = () => (
  <section className="py-16 bg-white" id="why-us">
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-3xl md:text-4xl font-extrabold text-[#277055] mb-4 text-center">
        Why <span className="text-[#FFC857]">Choose Us</span>
      </h3>
      <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto text-center">
        Discover what makes Global Brilliant School a trusted choice for parents and a beloved home for students.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="flex flex-col items-center bg-[#F6FAF8] rounded-2xl shadow-lg p-8 border-t-4 border-[#277055] hover:border-[#FFC857] transition hover:scale-105"
          >
            {f.icon}
            <h4 className="text-xl font-bold text-[#277055] mb-2 text-center">{f.title}</h4>
            <p className="text-gray-700 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
