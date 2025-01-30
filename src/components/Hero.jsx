import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#0A192F] to-[#020C1B] pt-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Image */}
          <div className="flex justify-center mb-6">
            <img
              src="https://picsum.photos/id/91/800/600"
              alt="Aliyu Tasiu Yusuf"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-4xl font-playfair text-yellow-400 mb-4">
            Hello, I'm Aliyu.
          </h1>
          <h2 className="text-2xl md:text-xl text-gray-300 font-lato mb-6">
            I design stunning interiors and architectural models.
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-medium transition-all hover:bg-yellow-400 hover:text-[#0A192F] rounded-lg cursor-pointer"
          >
            View Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-medium transition-all hover:bg-yellow-400 hover:text-[#0A192F] rounded-lg cursor-pointer"
          >
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;