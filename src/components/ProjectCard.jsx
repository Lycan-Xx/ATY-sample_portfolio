import { motion } from "framer-motion";

const ProjectCard = ({ title, category, media, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative w-full pt-[100%]">
        <img
          src={media.find(m => m.type === 'image').url}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-[#0A192F]/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <h3 className="text-[#FFD700] text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white text-sm">{category}</p>
          <div className="flex mt-2">
            <span className="text-white text-xs mr-2">
              {media.filter(m => m.type === 'image').length} Images
            </span>
            <span className="text-white text-xs">
              {media.filter(m => m.type === 'video').length} Video
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
