import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-2 z-50 mx-auto w-[95%] max-w-7xl"
    >
      <motion.nav
        className={`bg-[#0A192F]/90 backdrop-blur-md rounded-xl border border-yellow-400/20 flex items-center justify-between p-3 transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        {/* Brand Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            scroll.scrollToTop();
          }}
          className="text-yellow-400 text-lg md:text-xl font-bold cursor-pointer hover:text-white transition duration-300"
        >
          Aliyu Tasiu Yusuf
        </motion.a>

        {/* Hamburger Menu for Mobile */}
        <motion.div
          className="md:hidden text-yellow-400 cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4 text-base">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`relative z-10 px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0A192F]/95 backdrop-blur-md rounded-xl mt-2 border border-yellow-400/20"
          >
            <ul className="flex flex-col gap-1 p-2">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;