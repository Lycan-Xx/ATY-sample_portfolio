import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#0A192F] to-[#020C1B] pt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-yellow-400">
              Hello, I'm Aliyu.
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-lato">
              I design stunning interiors and architectural models.
            </h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-medium rounded-lg hover:bg-yellow-400 hover:text-[#0A192F] transition-all"
              >
                View Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-medium rounded-lg hover:bg-yellow-400 hover:text-[#0A192F] transition-all"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://picsum.photos/id/91/800/800"
              alt="Aliyu Tasiu Yusuf"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;