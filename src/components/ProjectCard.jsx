import { motion } from "framer-motion";

const ProjectCard = ({ title, category, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-lg shadow-lg overflow-hidden group"
    >
      {/* Image Wrapper */}
      <div className="relative w-full pt-[100%]">
        <img
          src={`/images/${image}`}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A192F]/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
          <h3 className="text-yellow-400 text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white text-sm">{category}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
