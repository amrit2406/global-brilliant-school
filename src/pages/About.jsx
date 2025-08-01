// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaHandsHelping,
  FaLightbulb,
  FaUsers,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHome,
  FaChevronRight
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaLightbulb className="text-[#FFC857] text-3xl mb-3" />,
    title: "Innovative Curriculum",
    description:
      "Our curriculum integrates STEM, arts, and life skills that foster creativity and critical thinking.",
  },
  {
    icon: <FaHandsHelping className="text-[#277055] text-3xl mb-3" />,
    title: "Caring Community",
    description:
      "We nurture a supportive and inclusive environment where every child feels valued and encouraged.",
  },
  {
    icon: <FaBullseye className="text-[#FFC857] text-3xl mb-3" />,
    title: "Academic Excellence",
    description:
      "We maintain high academic standards and personalized learning path to ensure student success.",
  },
  {
    icon: <FaUsers className="text-[#277055] text-3xl mb-3" />,
    title: "Dedicated Faculty",
    description:
      "Our experienced educators are passionate about inspiring, mentoring, and empowering students.",
  },
];

const teamMembers = [
  {
    name: "Manojit Nayak",
    // role: "Principal",
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
    bio: "With 20+ years of leadership in education, Mrs. Mehta drives the vision and nurturing culture at GBS.",
  },
  {
    name: "Manoranjan Behera",
    // role: "Head of Academics",
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
    bio: "Expert in curriculum development, Mr. Kumar ensures academic rigor combined with creativity.",
  },
  {
    name: "Bijay Kumar Nanda",
    // role: "Activities Coordinator",
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
    bio: "Ms. Singh facilitates co-curricular and extracurricular programs that foster holistic growth.",
  },
  {
    name: "Tabasumara Begum",
    // role: "Activities Coordinator",
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
    bio: "Ms. Singh facilitates co-curricular and extracurricular programs that foster holistic growth.",
  },
  {
    name: "Akankhya Behera",
    // role: "Activities Coordinator",
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
    bio: "Ms. Singh facilitates co-curricular and extracurricular programs that foster holistic growth.",
  },
  {
    name: "Itishri Swain",
    // role: "Activities Coordinator",
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
    bio: "Ms. Singh facilitates co-curricular and extracurricular programs that foster holistic growth.",
  },
];

const About = () => {
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
              About Our School
            </h1>
            <p className="text-xl text-[#FFC857] max-w-3xl mx-auto">
              Discover our mission, values, and the dedicated team shaping young minds
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
            <span className="text-[#FFC857] font-medium">About Us</span>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="min-h-screen py-20 px-6 md:px-20">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#277055] mb-4">
            Welcome to <span className="text-[#FFC857]">Global Brilliant School</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Established in 2005, Global Brilliant School has been a cornerstone of quality education,
            nurturing young minds from Std 1 to Std 8 with a perfect blend of academic rigor and
            holistic development.
          </p>
          <div className="w-24 h-1 bg-[#FFC857] mx-auto"></div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20"
        >
          <div className="bg-[#F6FAF8] p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-[#277055] mb-6 flex items-center gap-3">
              <FaBullseye className="text-[#FFC857]" /> Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become a beacon of excellence in primary education by fostering leadership,
              creativity, and integrity in every student. We envision a learning environment
              that prepares children not just for exams, but for life.
            </p>
          </div>
          <div className="bg-[#F6FAF8] p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-[#277055] mb-6 flex items-center gap-3">
              <FaHandsHelping className="text-[#FFC857]" /> Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To provide a nurturing and challenging environment that supports academic growth,
              values-based learning, and global citizenship through innovative teaching methods,
              comprehensive curriculum, and community engagement.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#277055] mb-4">
              Why <span className="text-[#FFC857]">Choose Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing an education that goes beyond textbooks and classrooms
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5 }}
                className="bg-[#F6FAF8] p-8 rounded-2xl shadow hover:shadow-lg transition cursor-default"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-[#277055] mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#277055] mb-4">
              Meet Our <span className="text-[#FFC857]">Leadership Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate educators bring expertise, dedication, and care to every student
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {teamMembers.map(({ img, name, role, bio }) => (
              <motion.div
                key={name}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-[#FFC857]"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-[#277055]">{name}</h3>
                <p className="text-[#FFC857] font-medium mb-3">{role}</p>
                <p className="text-gray-700">{bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* School Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto mt-20 bg-[#277055] rounded-2xl p-10 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FFC857] mb-2">18+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFC857] mb-2">24</div>
              <div className="text-lg">Qualified Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFC857] mb-2">350+</div>
              <div className="text-lg">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFC857] mb-2">15+</div>
              <div className="text-lg">Co-curricular Activities</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;