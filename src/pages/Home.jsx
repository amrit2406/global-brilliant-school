// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/HeroSec";
import About from "../components/home/AboutSec";
import Classes from "../components/home/ClassSec";
import WhyChooseUs from "../components/home/Why";
import Banner from "../components/home/Banner";
import Testimonial from "../components/home/Testi";
import FAQ from "../components/home/Faq";
import PrincipalMessage from "../components/home/PrincipalMessage";

// Reusable fade-in animation
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Classes Preview */}
      <Classes />

      {/* Principal Msg */}
      <PrincipalMessage />
      
      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Banner Section */}
      <Banner />

      {/* FAQ Section */}
      <FAQ />

      {/* Testimonials */}
      <Testimonial />
    </div>
  );
};

export default Home;
