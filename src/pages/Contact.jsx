// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
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
              Contact Us
            </h1>
            <p className="text-xl text-[#FFC857] max-w-3xl mx-auto">
              Get in touch with our team for any inquiries or information
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
            <span className="text-[#FFC857] font-medium">Contact</span>
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
            We'd <span className="text-[#FFC857]">Love to Hear From You</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFC857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Whether you have questions about admissions, programs, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#F6FAF8] p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#277055] mb-6">School Information</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#FFC857] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">Pattamundai</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-[#FFC857] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 7205837919</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="text-[#FFC857] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">globalbrillantschool@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-[#FFC857] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">School Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM to 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#F6FAF8] p-8 rounded-xl shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message! We'll get back to you soon.");
            }}
          >
            <h3 className="text-2xl font-semibold text-[#277055] mb-6">Send Us a Message</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC857] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC857] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC857] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC857] focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#277055] text-white px-6 py-3 rounded-lg hover:bg-[#1e5845] transition font-medium w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-xl overflow-hidden shadow-lg"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.1281454550576!2d86.53848367506824!3d20.582823780957224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bc19881996a2f%3A0x62312ba89e950c46!2sGlobal%20brilliant%20school!5e0!3m2!1sen!2sin!4v1753964436854!5m2!1sen!2sin" width="100%" height="450" ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;