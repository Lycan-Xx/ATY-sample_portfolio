import { motion } from "framer-motion";
import { FaDrawPolygon, FaCube, FaRulerCombined } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Title */}
          <h2 className="text-4xl font-playfair text-center text-[#0A192F] mb-16">
            About Me
          </h2>

          {/* Content */}
          <div className="grid gap-12">
            {/* Bio */}
            <p className="text-lg text-gray-800 max-w-2xl mx-auto text-center font-lato leading-relaxed">
              I am an architecture student with a passion for interior design
              and 3D modeling. I specialize in creating beautiful, functional
              spaces using tools like Revit and ArchiCAD. With years of
              freelance experience, I bring both creativity and precision to
              every project.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <FaDrawPolygon size={40} className="text-yellow-400 mx-auto" />
                <h3 className="text-xl text-[#0A192F] mt-4 font-semibold">
                  Interior Design
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Space optimization & aesthetic solutions
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <FaCube size={40} className="text-yellow-400 mx-auto" />
                <h3 className="text-xl text-[#0A192F] mt-4 font-semibold">
                  3D Modeling
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Detailed architectural visualization
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <FaRulerCombined size={40} className="text-yellow-400 mx-auto" />
                <h3 className="text-xl text-[#0A192F] mt-4 font-semibold">
                  Precision Planning
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Technical drawings & specifications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
