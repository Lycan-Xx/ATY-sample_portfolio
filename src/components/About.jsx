import React from "react";
import { motion } from "framer-motion";
import { 
  FaDrawPolygon, 
  FaCube, 
  FaRulerCombined, 
  FaRegBuilding, 
  FaPalette, 
  FaVectorSquare 
} from "react-icons/fa";

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center bg-gray-100"
  >
    <div className="max-w-4xl mx-auto px-6">
      {/* Section Title with entrance animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-playfair text-center text-[#0A192F] mb-8"
      >
        About Me
      </motion.h2>
      {/* About Text */}
      <motion.div
        className="space-y-6 mb-12"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-800 font-lato leading-relaxed">
          I am a dedicated architecture student with over 5 years of professional
          experience. I believe in creating spaces that harmonize functionality with
          aesthetic appeal, combining modern design principles with sustainable
          practices.
        </p>
        <p className="text-xl text-gray-800 font-lato leading-relaxed">
          Proficient in tools like Revit, AutoCAD, and 3ds Max, I specialize in
          transforming conceptual ideas into detailed technical plans and
          photorealistic visualizations.
        </p>
      </motion.div>
      {/* Personal Info with Image */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:space-x-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Personal Information List */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-2xl font-playfair text-[#0A192F] mb-4">
            Personal Information
          </h3>
          <ul className="text-xl text-gray-700 font-lato space-y-2">
            <li>
              <span className="font-semibold">Name:</span> Aliyu Tasiu Yusuf
            </li>
            <li>
              <span className="font-semibold">Age:</span> 24
            </li>
            <li>
              <span className="font-semibold">Educational Status:</span> Architecture
              Student, Modibbo Adama University
            </li>
            <li>
              <span className="font-semibold">Location:</span> Yola, Nigeria
            </li>
          </ul>
        </div>
        {/* Professional Architect Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/architect.jpg"
            alt="Professional Architect"
            className="w-64 h-auto rounded-md shadow-lg object-cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    initial={{ opacity: 0, scale: 0.8, x: 50 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="flex items-center justify-center bg-yellow-400 rounded-full p-3">
        {React.cloneElement(icon, { className: "text-gray-900 text-2xl" })}
      </div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
    <p className="text-gray-300 text-sm">{description}</p>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="min-h-screen flex items-center bg-gray-900">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-playfair text-center text-white mb-8">
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            icon={<FaDrawPolygon />}
            title="Interior Architecture"
            description="Space planning, material selection, lighting design"
          />
          <SkillCard
            icon={<FaCube />}
            title="3D Visualization"
            description="Photorealistic rendering, VR walkthroughs, BIM modeling"
          />
          <SkillCard
            icon={<FaRulerCombined />}
            title="Technical Drafting"
            description="Construction documents, detailing, code compliance"
          />
          <SkillCard
            icon={<FaRegBuilding />}
            title="Urban Design"
            description="Site planning, zoning analysis, landscape integration"
          />
          <SkillCard
            icon={<FaPalette />}
            title="Color Theory"
            description="Material finishes, psychological impact, trend analysis"
          />
          <SkillCard
            icon={<FaVectorSquare />}
            title="Parametric Design"
            description="Algorithmic modeling, computational design, optimization"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => {
  return (
    <div>
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default About;
