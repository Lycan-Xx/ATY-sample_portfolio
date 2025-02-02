import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useRef, useState } from "react";
import revitLogo from '../assets/revit.png';
import archicadLogo from '../assets/archi.jpg';
import autocadLogo from '../assets/AutoCAD.png';
import sketchupLogo from '../assets/sketchup.svg';

const projects = [
  {
    title: "Modern Living Room",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=1" }
    ],
    description: "A contemporary living space design focusing on minimalism and functional beauty."
  },
  {
    title: "Chic Office Space",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=2" }
    ],
    description: "An elegant office design that promotes productivity and comfort."
  }
];

const tools = [
  { name: "Revit", logo: revitLogo },
  { name: "Archicad", logo: archicadLogo },
  { name: "Autocad", logo: autocadLogo },
  { name: "Sketchup", logo: sketchupLogo }
];

const ToolsRow = () => (
  <div className="mb-12">
    <h3 className="text-2xl font-playfair text-[#0A192F] text-center mb-4">
      My Tools
    </h3>
    <div className="flex justify-center space-x-6">
      {tools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center" style={{ margin: "1rem" }}>
          <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center shadow-md" style={{ padding: "0.5rem" }}>
            <img src={tool.logo} alt={tool.name} className="w-24 h-24 object-contain" />
          </div>
          <span className="mt-2 text-sm text-[#0A192F] font-semibold">{tool.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-4xl font-playfair text-[#0A192F] text-center mb-16">My Projects</h2>
          <ToolsRow />
          <div className="flex overflow-x-auto space-x-4 pb-8 scrollbar-hide">
            {projects.map((project, index) => (
              <div key={index} className="w-[350px] flex-shrink-0">
                <ProjectCard {...project} onClick={() => setSelectedProject(project)} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 p-8 flex items-center justify-center">
          <div className="bg-white max-w-6xl w-full rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-[#0A192F]">
              <h3 className="text-2xl font-playfair text-[#FFD700]">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-white hover:text-[#FFD700] text-2xl">&times;</button>
            </div>
            <div className="relative h-96">
              {selectedProject.media[0].type === 'image' ? (
                <img src={selectedProject.media[0].url} alt="" className="w-full h-full object-cover" />
              ) : (
                <video controls className="w-full h-full object-cover">
                  <source src={selectedProject.media[0].url} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="p-6 bg-[#F8F8F8]">
              <p className="text-[#0A192F]">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
