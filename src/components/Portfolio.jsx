import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import revitLogo from "../assets/revit.png";
import archicadLogo from "../assets/archiCAD.jpg";
import autocadLogo from "../assets/AutoCAD.png";
import sketchupLogo from "../assets/sketchup.svg";

// Sample projects array
const projects = [
  {
    title: "Modern Living Room",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=1" },
      { type: "image", url: "https://picsum.photos/600/400?random=2" },
      { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
    ],
    description:
      "A contemporary living space design focusing on minimalism and functional beauty."
  },
  {
    title: "Chic Office Space",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=3" },
      { type: "image", url: "https://picsum.photos/600/400?random=4" },
      { type: "video", url: "https://www.youtube.com/embed/Zgi9g1ksQHc" }
    ],
    description:
      "An elegant office design that promotes productivity and comfort."
  },
  {
    title: "Rustic Cabin",
    category: "Architecture",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=5" },
      { type: "image", url: "https://picsum.photos/600/400?random=6" },
      { type: "video", url: "https://www.youtube.com/embed/jNQX23Dw-o4" }
    ],
    description:
      "A cozy cabin design that blends rustic charm with modern amenities."
  },
  {
    title: "Sleek Kitchen",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=7" },
      { type: "image", url: "https://picsum.photos/600/400?random=8" },
      { type: "video", url: "https://www.youtube.com/embed/5b8k47K6GCo" }
    ],
    description:
      "A modern kitchen design that combines functionality with sleek style."
  },
  {
    title: "Minimalist Bathroom",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=9" },
      { type: "image", url: "https://picsum.photos/600/400?random=10" },
      { type: "video", url: "https://www.youtube.com/embed/3-_L7M7sQ2Q" }
    ],
    description:
      "A minimalist bathroom design that emphasizes clean lines and simplicity."
  },
  {
    title: "Industrial Loft",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=11" },
      { type: "image", url: "https://picsum.photos/600/400?random=12" },
      { type: "video", url: "https://www.youtube.com/embed/7e90gBu4pas" }
    ],
    description:
      "An industrial loft design that combines raw materials with modern comforts."
  },
  {
    title: "Scandinavian Living Room",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=13" },
      { type: "image", url: "https://picsum.photos/600/400?random=14" },
      { type: "video", url: "https://www.youtube.com/embed/5eoRHbJ1bK4" }
    ],
    description:
      "A Scandinavian-style living room design that emphasizes natural light and cozy textures."
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
      Technologies I Use
    </h3>
    <div className="flex justify-center space-x-6">
      {tools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-48 h-24 rounded-2xl bg-gray-100 flex items-center justify-center shadow-md p-2">
            <img src={tool.logo} alt={tool.name} className="w-32 h-20 object-contain" />
          </div>
          <span className="mt-2 text-sm text-[#0A192F] font-semibold">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  // Use index instead of project object for navigation between projects
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  // For media slider in modal
  const [mediaIndex, setMediaIndex] = useState(0);

  const selectedProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  const handleProjectChange = (newIndex) => {
    if (newIndex < 0) newIndex = projects.length - 1;
    else if (newIndex >= projects.length) newIndex = 0;
    setSelectedProjectIndex(newIndex);
    setMediaIndex(0);
  };

  const handleMediaChange = (direction) => {
    if (!selectedProject) return;
    let newMediaIndex = mediaIndex;
    if (direction === "prev") {
      newMediaIndex = mediaIndex - 1;
      if (newMediaIndex < 0) newMediaIndex = selectedProject.media.length - 1;
    } else {
      newMediaIndex = mediaIndex + 1;
      if (newMediaIndex >= selectedProject.media.length) newMediaIndex = 0;
    }
    setMediaIndex(newMediaIndex);
  };

  return (
    <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-playfair text-[#0A192F] text-center mb-16">
            My Projects
          </h2>
          <ToolsRow />
          {/* Horizontal project list (still in place, but not emphasized) */}
          <div className="flex overflow-x-auto space-x-4 pb-8 scrollbar-hide">
            {projects.map((project, index) => (
              <div key={index} className="w-[350px] flex-shrink-0">
                <ProjectCard
                  {...project}
                  onClick={() => {
                    setSelectedProjectIndex(index);
                    setMediaIndex(0);
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Modal for selected project */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 p-8 flex flex-col items-center justify-center">
          <div className="bg-white max-w-6xl w-full rounded-lg overflow-hidden">
            {/* Modal Header with project navigation */}
            <div className="flex justify-between items-center p-4 bg-[#0A192F]">
              <button
                onClick={() => handleProjectChange(selectedProjectIndex - 1)}
                className="text-white hover:text-[#FFD700] text-2xl px-4"
              >
                &larr;
              </button>
              <h3 className="text-2xl font-playfair text-[#FFD700]">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => handleProjectChange(selectedProjectIndex + 1)}
                className="text-white hover:text-[#FFD700] text-2xl px-4"
              >
                &rarr;
              </button>
            </div>
            {/* Media slider inside modal */}
            <div className="relative h-96 flex items-center justify-center bg-gray-200">
              {selectedProject.media[mediaIndex].type === "image" ? (
                <img
                  src={selectedProject.media[mediaIndex].url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <iframe
                  src={selectedProject.media[mediaIndex].url}
                  title={selectedProject.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {/* Media navigation buttons */}
              <button
                onClick={() => handleMediaChange("prev")}
                className="absolute left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                &larr;
              </button>
              <button
                onClick={() => handleMediaChange("next")}
                className="absolute right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>
            {/* Description section with enhanced typography and background */}
            <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200">
              <p className="text-[#0A192F] text-lg font-serif leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
            {/* Close Modal Button */}
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setSelectedProjectIndex(null)}
                className="text-white hover:text-[#FFD700] text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
