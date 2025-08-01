// src/pages/Classes.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight, FaBookOpen, FaUsers, FaFlask, FaChartLine, FaGraduationCap } from "react-icons/fa";

const classList = [
  { 
    std: "Std 1", 
    desc: "Lays the foundation for joyful learning through play-based education.",
    icon: <FaBookOpen className="text-[#FFC857] text-3xl" />
  },
  { 
    std: "Std 2", 
    desc: "Focus on reading, writing, numbers, and creativity.",
    icon: <FaUsers className="text-[#FFC857] text-3xl" />
  },
  { 
    std: "Std 3", 
    desc: "Strengthens fundamentals and introduces structured subjects.",
    icon: <FaFlask className="text-[#FFC857] text-3xl" />
  },
  { 
    std: "Std 4", 
    desc: "Encourages curiosity and independent thinking.",
    icon: <FaChartLine className="text-[#FFC857] text-3xl" />
  },
  { 
    std: "Std 5", 
    desc: "Bridges early primary with middle school through conceptual learning.",
    icon: <FaGraduationCap className="text-[#FFC857] text-3xl" />
  },
  { 
    std: "Std 6", 
    desc: "Starts subject-wise learning with deeper curriculum understanding.",
    icon: <FaBookOpen className="text-[#FFC857] text-3xl" />
  },
  { 
    std: "Std 7", 
    desc: "Enhances logical reasoning and co-curricular exploration.",
    icon: <FaUsers className="text-[#FFC857] text-3xl" />
  },
  { 
    std: "Std 8", 
    desc: "Prepares students for high school with academic and personal discipline.",
    icon: <FaGraduationCap className="text-[#FFC857] text-3xl" />
  },
];

const Classes = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-[#277055] py-24 px-6 md:px-20">
        <div className="absolute inset-0 bg-[url('/img/about-banner-pattern.svg')] bg-cover opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Classes
            </h1>
            <p className="text-xl text-[#FFC857] max-w-3xl mx-auto">
              Comprehensive education from Std 1 to Std 8 designed to nurture young minds
            </p>
          </motion.div>
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center mt-8 text-white"
          >
            <a href="/" className="flex items-center hover:text-[#FFC857] transition">
              <FaHome className="mr-2" />
              Home
            </a>
            <FaChevronRight className="mx-2 text-sm" />
            <span className="text-[#FFC857] font-medium">Classes</span>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#277055] mb-4">
            Our <span className="text-[#FFC857]">Academic Programs</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFC857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            At Global Brilliant School, we offer a progressive learning journey from Std 1 through Std 8.
            Each grade level builds upon the previous one, ensuring a seamless transition and continuous
            academic growth for every student.
          </p>
        </motion.div>

        {/* Class Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {classList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#F6FAF8] rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#277055] text-center mb-3">{item.std}</h3>
              <p className="text-gray-700 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Curriculum Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden border border-[#277055]/10"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#277055] p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Comprehensive Curriculum</h3>
              <p className="mb-6">
                Our curriculum is designed to meet international standards while incorporating
                local values and context. We balance academic rigor with creative expression.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-[#FFC857] rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-[#277055]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>STEM-focused learning with hands-on activities</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFC857] rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-[#277055]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Language development with reading and writing programs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFC857] rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-[#277055]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Arts, music, and physical education integration</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl font-bold text-[#277055] mb-4">Learning Approach</h3>
              <p className="text-gray-700 mb-6">
                We employ diverse teaching methodologies to cater to different learning styles:
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#277055] mb-2">Project-Based</h4>
                  <p className="text-gray-600 text-sm">Hands-on collaborative projects</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#277055] mb-2">Inquiry-Based</h4>
                  <p className="text-gray-600 text-sm">Student-led exploration</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#277055] mb-2">Differentiated</h4>
                  <p className="text-gray-600 text-sm">Personalized instruction</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#277055] mb-2">Technology-Enhanced</h4>
                  <p className="text-gray-600 text-sm">Digital learning tools</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Classes;