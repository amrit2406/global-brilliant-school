import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
// ✅ Correct way with Swiper v9 and above:
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aarti Sharma",
    role: "Parent",
    text:
      "Global Brilliant School has truly transformed my daughter's learning journey. The teachers are passionate, and the environment is nurturing. We're grateful to be part of this wonderful community!",
    rating: 5,
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80", // replace with actual path
  },
  {
    name: "Rahul Verma",
    role: "Student, Grade 8",
    text:
      "I love how we learn beyond textbooks! From science labs to coding clubs and leadership workshops, school life here is exciting and fun.",
    rating: 5,
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Neha Singh",
    role: "Faculty",
    text:
      "Being an educator at GBS is incredibly rewarding. The school culture promotes innovation, collaboration, and continuous learning.",
    rating: 5,
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Karan Joshi",
    role: "Alumni",
    text:
      "My years at GBS laid the foundation for everything I’ve achieved. The mentorship and values I gained still guide me today.",
    rating: 5,
    img: "https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80", // add or rename new image
  },
];


const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#F6FAF8] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center max-w-sm mx-auto">
    <span className="text-3xl text-[#FFC857] mb-6 inline-block" aria-hidden="true">
      <FaQuoteLeft />
    </span>
    <p className="text-gray-700 italic mb-8">{testimonial.text}</p>
    <div className="flex items-center gap-4 mt-auto">
      <img
        src={testimonial.img}
        alt={testimonial.name}
        className="w-16 h-16 object-cover rounded-full border-2 border-[#277055] shadow"
        loading="lazy"
        width={64}
        height={64}
      />
      <div className="text-left">
        <span className="font-bold text-[#277055] block text-lg">{testimonial.name}</span>
        <span className="text-gray-500 text-sm">{testimonial.role}</span>
        <div className="flex items-center mt-1" aria-label={`${testimonial.rating} stars`}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-[#FFC857] text-base" aria-hidden="true" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <section className="py-16 bg-white" id="testimonial" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#277055] mb-12 text-center">
          What Our <span className="text-[#FFC857]">Community Says</span>
        </h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          a11y={{ enabled: true }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
