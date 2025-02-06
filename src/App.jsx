import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreCompetencies from './components/CoreCompetencies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechnologiesPage from './components/TechnologiesPage';
import ProjectsSlider from './components/ProjectsSlider';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CoreCompetencies />
      <TechnologiesPage />
      <ProjectsSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
