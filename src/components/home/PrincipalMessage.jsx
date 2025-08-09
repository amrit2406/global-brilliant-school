// src/components/PrincipalMessage.jsx
import React from "react";
import pr from "../../assets/dr.jpg";

const principal = {
  name: "Dr. D. Dash",
  title: "Principal, Global Brilliant School",
  img: pr,
  message: `Today the role of a school is not only to pursue academic excellence but also to motivate and empower its students to become lifelong learners and productive members of an ever-changing global society. 
At Global Brilliant School, we provide an atmosphere to our students for holistic development by providing a student‑centric teaching environment. 
The school is striving with value‑based scholastic and co‑scholastic activities. 
Students are impassioned to achieve academic excellence and uphold high ideals to combat testing times and towering challenges. 
The support from Parents and Management members strengthens our efforts in moulding the future of children. 
"To seek the light one must first acknowledge the darkness within." – Lord Jagannath Swami.
`,
};

const PrincipalMessage = () => (
  <section
    className="py-16 bg-gradient-to-br from-[#F6FAF8] to-white"
    id="principal-message"
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      {/* Principal Image */}
      <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
        <img
          src={principal.img}
          alt={`Principal ${principal.name}`}
          className="rounded-3xl shadow-lg border-4 border-[#FFC857] object-cover w-76 h-90 md:w-76 md:h-90 transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Principal Message */}
      <div className="flex-1 bg-white rounded-3xl shadow-lg px-8 py-10 relative">
        {/* Decorative quote icon */}
        <span className="absolute -top-5 -left-5 text-5xl text-[#FFC857] opacity-20">
          “
        </span>
        <h3 className="text-3xl font-extrabold text-[#277055] mb-6 border-b-4 border-[#FFC857] inline-block pb-2">
          Principal's Message
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line">
          {principal.message}
        </p>
        <div>
          <span className="block font-bold text-[#277055] text-lg">
            {principal.name}
          </span>
          <span className="block text-[#FFC857] mt-1">{principal.title}</span>
        </div>
      </div>
    </div>
  </section>
);

export default PrincipalMessage;
