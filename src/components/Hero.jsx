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
          {/* Rearrange the layout for responsiveness */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="md:w-1/2 md:order-2">
              {/* Hero Image on the right */}
              <img
                src="https://picsum.photos/id/91/600/400"
                alt="Aliyu Tasiu Yusuf"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:order-1">
              {/* Hero Text and Buttons on the left */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-yellow-400 mb-4">
                  Hello, I'm Aliyu.
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-lato mb-6">
                  I design stunning interiors and architectural models.
                </h2>
              </div>
              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 border-2 border-yellow-400 text-yellow-400 font-medium transition-all hover:bg-yellow-400 hover:text-[#0A192F] rounded-lg cursor-pointer"
                >
                  View Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 border-2 border-yellow-400 text-yellow-400 font-medium transition-all hover:bg-yellow-400 hover:text-[#0A192F] rounded-lg cursor-pointer"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;