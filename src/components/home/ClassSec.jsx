import React from "react";

// Icons
import { FaBookOpen, FaFlask, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const classList = [
  {
    icon: <FaBookOpen className="text-[#277055] text-3xl mb-2" />,
    title: "Std 1",
    description:
      "Lays the foundation for joyful learning through play-based education.",
  },
  {
    icon: <FaLaptopCode className="text-[#FFC857] text-3xl mb-2" />,
    title: "Std 2",
    description:
      "Focus on reading, writing, numbers, and creativity.",
  },
  {
    icon: <FaFlask className="text-[#277055] text-3xl mb-2" />,
    title: "Std 3",
    description:
      "Strengthens fundamentals and introduces structured subjects.",
  },
  {
    icon: <FaGraduationCap className="text-[#FFC857] text-3xl mb-2" />,
    title: "Std 4",
    description:
      "Encourages curiosity and independent thinking.",
  },
  {
    icon: <FaBookOpen className="text-[#277055] text-3xl mb-2" />,
    title: "Std 5",
    description:
      "Bridges early primary with middle school through conceptual learning.",
  },
  {
    icon: <FaLaptopCode className="text-[#FFC857] text-3xl mb-2" />,
    title: "Std 6",
    description:
      "Starts subject-wise learning with deeper curriculum understanding.",
  },
  {
    icon: <FaFlask className="text-[#277055] text-3xl mb-2" />,
    title: "Std 7",
    description:
      "Enhances logical reasoning and co-curricular exploration.",
  },
  {
    icon: <FaGraduationCap className="text-[#FFC857] text-3xl mb-2" />,
    title: "Std 8",
    description:
      "Prepares students for high school with academic and personal discipline.",
  },
];

const Classes = () => {
  return (
    <section className="bg-[#F6FAF8] py-16" id="classes">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#277055] mb-6 text-center">
          Our <span className="text-[#FFC857]">Classes</span>
        </h3>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto text-center">
          We offer a comprehensive academic journey from Std 1 to Std 8, designed to spark curiosity, encourage excellence, and foster holistic growth.
        </p>

        {/* Classes Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {classList.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border-t-4 transition hover:scale-105 hover:border-[#FFC857] border-[#277055]"
            >
              {icon}
              <h4 className="text-xl font-bold text-[#277055] mb-3 mt-2 text-center">{title}</h4>
              <p className="text-gray-700 text-center">{description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <a
            href="/contact"
            className="bg-[#277055] hover:bg-[#195c41] text-white font-semibold px-8 py-3 rounded-md shadow transition text-lg"
          >
            Enroll Your Child
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
