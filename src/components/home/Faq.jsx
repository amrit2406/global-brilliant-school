import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqItems = [
  {
    question: "What are the admission criteria?",
    answer:
      "Admissions are open to all students who meet the age requirement and provide the necessary documents such as previous school records and identification. We also conduct an entrance assessment and interview to understand each child's needs.",
  },
  {
    question: "What curriculum does Global Brilliant School follow?",
    answer:
      "Our school follows the national curriculum enhanced with STEM, arts, and leadership programs designed to foster holistic development and 21st-century skills.",
  },
  {
    question: "Are there extracurricular activities available?",
    answer:
      "Yes! We offer various extracurricular activities including sports, music, drama, coding clubs, community service, and more to support talents and interests beyond academics.",
  },
  {
    question: "What safety measures are in place for students?",
    answer:
      "We prioritize student safety with secure campus access, trained staff, CCTV surveillance, regular drills, and comprehensive health protocols.",
  },
  {
    question: "How can I contact the school administration?",
    answer:
      "You can contact us via phone at +91 12345 67890, email at info@gbschool.edu, or visit our campus at 123 School Ln, New Delhi. Alternatively, use the contact form on our website.",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="border border-gray-300 rounded-xl mb-4 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className="w-full flex items-center justify-between px-6 py-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#277055] focus:ring-offset-2"
      >
        <span className="text-lg font-semibold text-[#277055] text-left">{question}</span>
        <span
          className={`text-[#FFC857] transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          {isOpen ? <FaMinus size={18} /> : <FaPlus size={18} />}
        </span>
      </button>

      <div
        id={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-6 overflow-hidden transition-max-height duration-500 ease-in-out text-gray-700"
      >
        <p className="pb-6">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#277055] mb-10 text-center">
          Frequently Asked <span className="text-[#FFC857]">Questions</span>
        </h3>
        <div>
          {faqItems.map((item, idx) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => toggleFAQ(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
