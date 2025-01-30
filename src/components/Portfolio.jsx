import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Modern Living Room",
    category: "Interior Design",
    image: "living-room.jpg",
  },
  {
    title: "Luxury Apartment",
    category: "3D Architectural Model",
    image: "apartment.jpg",
  },
  {
    title: "Cozy Office Space",
    category: "Interior Design",
    image: "office.jpg",
  },
  {
    title: "Elegant Kitchen",
    category: "Interior Design",
    image: "kitchen.jpg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Title */}
          <h2 className="text-4xl font-playfair text-[#0A192F] text-center mb-16">
            My Projects
          </h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
