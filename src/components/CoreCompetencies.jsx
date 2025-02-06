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

const primaryColor = "#0A192F";
const secondaryColor = "#FFD700";

// Skill Card Component
const SkillCard = ({ icon, title, description }) => (
  <motion.div
    className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border"
    style={{ backgroundColor: primaryColor, borderColor: secondaryColor, color: "white" }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="flex items-center justify-center rounded-full p-3" style={{ backgroundColor: secondaryColor }}>
        {React.cloneElement(icon, { className: "text-black text-2xl" })}
      </div>
      <h4 className="text-lg font-semibold" style={{ color: secondaryColor }}>{title}</h4>
    </div>
    <p className="text-sm">{description}</p>
  </motion.div>
);

const CoreCompetencies = () => (
  <section id="skills" className="min-h-screen flex items-center" style={{ backgroundColor: primaryColor }}>
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-playfair text-center mb-8" style={{ color: secondaryColor }}>
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default CoreCompetencies;