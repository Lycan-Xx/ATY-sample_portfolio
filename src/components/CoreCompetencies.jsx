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

const skills = [
  {
    icon: <FaDrawPolygon />,
    title: "Interior Architecture",
    description: "Space planning, material selection, lighting design"
  },
  {
    icon: <FaCube />,
    title: "3D Visualization",
    description: "Photorealistic rendering, VR walkthroughs, BIM modeling"
  },
  {
    icon: <FaRulerCombined />,
    title: "Technical Drafting",
    description: "Construction documents, detailing, code compliance"
  },
  {
    icon: <FaRegBuilding />,
    title: "Urban Design",
    description: "Site planning, zoning analysis, landscape integration"
  },
  {
    icon: <FaPalette />,
    title: "Color Theory",
    description: "Material finishes, psychological impact, trend analysis"
  },
  {
    icon: <FaVectorSquare />,
    title: "Parametric Design",
    description: "Algorithmic modeling, computational design, optimization"
  }
];

const SkillCard = ({ icon, title, description }) => (
  <motion.div
    className="p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-400/20 bg-[#0A192F]/90 backdrop-blur-sm"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <div className="flex items-start gap-4 mb-3">
      <div className="flex-shrink-0 p-2.5 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
        {React.cloneElement(icon, { className: "text-yellow-400 text-xl md:text-2xl" })}
      </div>
      <h4 className="text-lg md:text-xl font-semibold text-yellow-400">{title}</h4>
    </div>
    <p className="text-sm md:text-base text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const CoreCompetencies = () => (
  <section id="skills" className="min-h-screen flex items-center bg-[#0A192F] py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-center mb-8 md:mb-12 text-yellow-400">
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CoreCompetencies;