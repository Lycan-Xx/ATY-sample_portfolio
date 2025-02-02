// TechnologiesPage.jsx
import { motion } from "framer-motion";
import revitLogo from "../assets/revit.png";
import archicadLogo from "../assets/archiCAD.jpg";
import autocadLogo from "../assets/AutoCAD.png";
import sketchupLogo from "../assets/sketchup.svg";

const tools = [
  { name: "Revit", logo: revitLogo, className: "revit-logo" },
  { name: "Archicad", logo: archicadLogo, className: "archicad-logo" },
  { name: "Autocad", logo: autocadLogo, className: "autocad-logo" },
  { name: "Sketchup", logo: sketchupLogo, className: "sketchup-logo" }
];

const TechnologiesPage = () => (
  <section className="py-32 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-playfair text-[#0A192F] text-center mb-16">
          Technologies I Use
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="w-full h-40 mb-4 flex items-center justify-center">
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="max-h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F]">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TechnologiesPage;


