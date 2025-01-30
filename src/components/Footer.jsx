import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] py-12 border-t border-yellow-400/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-300 text-sm text-center">
            &copy; 2025 Aliyu Tasiu Yusuf. All rights reserved.
          </p>

          {/* Social Links */}
          <ul className="flex gap-6">
            <motion.li
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-2"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 transition-opacity duration-300 hover:opacity-80"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.li>

            <motion.li
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-2"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 transition-opacity duration-300 hover:opacity-80"
              >
                <FaGithub size={24} />
              </a>
            </motion.li>

            <motion.li
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-2"
            >
              <a
                href="mailto:contact@example.com"
                className="text-yellow-400 transition-opacity duration-300 hover:opacity-80"
              >
                <FaEnvelope size={24} />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
