import React from "react";
import { motion } from "framer-motion";
import background from "../assets/background-1.jpg"; // Fix import statement

const About = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center relative"
    style={{
      backgroundImage: `url(${background})`, // Use template literal with imported background
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    {/* Reduced blur and opacity further */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/50 to-[#020C1B]/50 backdrop-blur-[1px]"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-playfair text-center mb-12 text-yellow-400"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column - About Text */}
        <motion.div
          className="h-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#0A192F]/50 p-8 rounded-lg backdrop-blur-[1px] h-full border border-yellow-400">
            <p className="text-xl font-lato leading-relaxed text-gray-300">
              I am a dedicated architecture student with over 5 years of professional
              experience. I believe in creating spaces that harmonize functionality with
              aesthetic appeal, combining modern design principles with sustainable
              practices.
            </p>
            <p className="text-xl font-lato leading-relaxed text-gray-300 mt-4">
              Proficient in tools like Revit, AutoCAD, and 3ds Max, I specialize in
              transforming conceptual ideas into detailed technical plans and
              photorealistic visualizations.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Personal Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0A192F]/50 p-8 rounded-lg backdrop-blur-[1px] h-full border border-yellow-400"
        >
          <h3 className="text-2xl font-playfair mb-6 text-yellow-400">
            Personal Information
          </h3>
          <ul className="text-xl font-lato space-y-4 text-gray-300">
            <li className="flex items-center space-x-2">
              <span className="font-semibold text-yellow-400">Name:</span>
              <span>Aliyu Tasiu Yusuf</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-semibold text-yellow-400">Age:</span>
              <span>24</span>
            </li>
            <li className="flex flex-col space-y-1">
              <span className="font-semibold text-yellow-400">Educational Status:</span>
              <span>Architecture Student, Modibbo Adama University</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-semibold text-yellow-400">Location:</span>
              <span>Yola, Nigeria</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
