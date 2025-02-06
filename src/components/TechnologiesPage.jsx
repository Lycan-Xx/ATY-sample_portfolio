import { motion } from "framer-motion";
import revitLogo from "../assets/revit.png";
import archicadLogo from "../assets/archiCAD.jpg";
import autocadLogo from "../assets/AutoCAD.png";
import sketchupLogo from "../assets/sketchup.svg";
import { useEffect, useRef } from "react";

const tools = [
  { name: "Revit", logo: revitLogo, className: "revit-logo" },
  { name: "Archicad", logo: archicadLogo, className: "archicad-logo" },
  { name: "Autocad", logo: autocadLogo, className: "autocad-logo" },
  { name: "Sketchup", logo: sketchupLogo, className: "sketchup-logo" }
];

const TechnologiesPage = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone the cards and append them to create a seamless loop
    const cards = Array.from(carousel.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });

    // Start the animation
    carousel.style.animation = "scroll 20s linear infinite";

    // Pause animation on hover
    carousel.addEventListener("mouseenter", () => {
      carousel.style.animationPlayState = "paused";
    });

    carousel.addEventListener("mouseleave", () => {
      carousel.style.animationPlayState = "running";
    });
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Glassy Background */}
      <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-playfair text-gray-800 text-center mb-16">
            Technologies I Use
          </h2>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-8 w-max"
            >
              {tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-72"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all border border-white/10">
                    <div className="w-full h-40 mb-4 flex items-center justify-center">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="max-h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesPage;