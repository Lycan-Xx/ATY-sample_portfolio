import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Modern Living Room",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=1" },
      { type: "image", url: "https://picsum.photos/600/400?random=2" },
      { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
    ],
    description: "A contemporary living space design focusing on minimalism and functional beauty."
  },
  {
    title: "Chic Office Space",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=3" },
      { type: "image", url: "https://picsum.photos/600/400?random=4" },
      { type: "video", url: "https://www.youtube.com/embed/Zgi9g1ksQHc" }
    ],
    description: "An elegant office design that promotes productivity and comfort."
  },
  {
    title: "Rustic Cabin",
    category: "Architecture",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=5" },
      { type: "image", url: "https://picsum.photos/600/400?random=6" },
      { type: "video", url: "https://www.youtube.com/embed/jNQX23Dw-o4" }
    ],
    description: "A cozy cabin design that blends rustic charm with modern amenities."
  },
  {
    title: "Sleek Kitchen",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=7" },
      { type: "image", url: "https://picsum.photos/600/400?random=8" },
      { type: "video", url: "https://www.youtube.com/embed/5b8k47K6GCo" }
    ],
    description: "A modern kitchen design that combines functionality with sleek style."
  },
  {
    title: "Minimalist Bathroom",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=9" },
      { type: "image", url: "https://picsum.photos/600/400?random=10" },
      { type: "video", url: "https://www.youtube.com/embed/3-_L7M7sQ2Q" }
    ],
    description: "A minimalist bathroom design that emphasizes clean lines and simplicity."
  },
  {
    title: "Industrial Loft",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=11" },
      { type: "image", url: "https://picsum.photos/600/400?random=12" },
      { type: "video", url: "https://www.youtube.com/embed/7e90gBu4pas" }
    ],
    description: "An industrial loft design that combines raw materials with modern comforts."
  },
  {
    title: "Scandinavian Living Room",
    category: "Interior Design",
    media: [
      { type: "image", url: "https://picsum.photos/600/400?random=13" },
      { type: "image", url: "https://picsum.photos/600/400?random=14" },
      { type: "video", url: "https://www.youtube.com/embed/5eoRHbJ1bK4" }
    ],
    description: "A Scandinavian-style living room design that emphasizes natural light and cozy textures."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    setCurrentMediaIndex(0);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-32 bg-[#020c1b] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-playfair text-[#FFD700] text-center mb-16">
            Featured Projects
          </h2>

          {/* Mobile View - Horizontal Scroll */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-8 scrollbar-hide">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="w-[85vw] flex-shrink-0 snap-center"
              >
                <ProjectCard 
                  {...project} 
                  onClick={() => setSelectedProject(project)}
                  className="border-2 border-[#FFD700] shadow-2xl"
                />
              </div>
            ))}
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onClick={() => setSelectedProject(project)}
                className="border-2 border-[#FFD700] shadow-xl hover:shadow-2xl"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 p-4 md:p-8 flex items-center justify-center">
          <div className="bg-white max-w-6xl w-full rounded-lg overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-[#0A192F]">
              <h3 className="text-2xl font-playfair text-[#FFD700]">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentMediaIndex(0);
                }}
                className="text-white hover:text-[#FFD700] text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Media Display */}
            <div className="relative h-96 flex items-center justify-center bg-gray-200">
              {selectedProject.media[currentMediaIndex].type === "image" ? (
                <img
                  src={selectedProject.media[currentMediaIndex].url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <iframe
                  title="video"
                  src={selectedProject.media[currentMediaIndex].url}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              )}

              {/* Navigation Arrows */}
              {currentMediaIndex > 0 && (
                <button
                  onClick={() => setCurrentMediaIndex(currentMediaIndex - 1)}
                  className="absolute left-4 bg-[#0A192F] text-[#FFD700] rounded-full p-2 hover:bg-opacity-90"
                >
                  &#8249;
                </button>
              )}
              {currentMediaIndex < selectedProject.media.length - 1 && (
                <button
                  onClick={() => setCurrentMediaIndex(currentMediaIndex + 1)}
                  className="absolute right-4 bg-[#0A192F] text-[#FFD700] rounded-full p-2 hover:bg-opacity-90"
                >
                  &#8250;
                </button>
              )}
            </div>

            {/* Description Section */}
            <div className="p-6 bg-[#0A192F]">
              <p className="text-[#FFD700] text-lg">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;