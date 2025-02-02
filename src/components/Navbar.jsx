import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to section handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of your fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A192F]/95 backdrop-blur-md shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto flex justify-between items-center p-4 max-w-6xl"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="text-yellow-400 text-xl font-bold cursor-pointer hover:text-white transition duration-300"
        >
          Aliyu Tasiu Yusuf
        </a>

        {/* Hamburger Menu */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Nav Menu */}
        <ul
          className={`md:flex items-center gap-8 text-white font-medium transition-all duration-300 
          ${
            isOpen
              ? 'fixed top-16 right-0 w-3/4 h-screen bg-[#0A192F] flex flex-col justify-center items-center'
              : 'hidden md:flex'
          }`}
        >
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <li key={item} className="my-4 md:my-0">
              <Link
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeSection === item
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

export default Navbar;
