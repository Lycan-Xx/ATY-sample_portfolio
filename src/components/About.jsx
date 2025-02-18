import React from "react";
import { motion } from "framer-motion";
import background from "../assets/background-1.jpg";

const About = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/75 to-[#020C1B]/75" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-playfair text-center mb-8 md:mb-12 text-yellow-400"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* About Text */}
        <motion.div
          className="h-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="bg-[#0A192F]/80 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-yellow-400/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-base md:text-lg lg:text-xl font-lato leading-relaxed text-gray-300 space-y-4">
              <span className="block">
                I am a dedicated architecture student with over 5 years of
                professional experience, specializing in creating spaces that
                harmonize functionality with aesthetic appeal through modern
                design principles and sustainable practices.
              </span>
              <span className="block">
                Proficient in Revit, AutoCAD, and 3ds Max, I transform
                conceptual ideas into detailed technical plans and
                photorealistic visualizations.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="bg-[#0A192F]/80 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-yellow-400/30 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl md:text-2xl font-playfair mb-4 md:mb-6 text-yellow-400">
            Personal Information
          </h3>
          <ul className="text-base md:text-lg font-lato space-y-3 md:space-y-4 text-gray-300">
            {[
              ["Name:", "Aliyu Tasiu Yusuf"],
              ["Age:", "24"],
              ["Education:", "Architecture Student, Modibbo Adama University"],
              ["Location:", "Yola, Nigeria"]
            ].map(([label, value], index) => (
              <li key={index} className="flex flex-col md:flex-row md:items-start gap-1 md:gap-3">
                <span className="font-medium text-yellow-400 min-w-[140px]">{label}</span>
                <span className="flex-1">{value}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;