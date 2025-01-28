import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const projects = [
  { 
    title: 'Modern Living Room',
    category: 'Interior Design',
    image: 'living-room.jpg'
  },
  {
    title: 'Luxury Apartment',
    category: '3D Architectural Model',
    image: 'apartment.jpg'
  },
  {
    title: 'Cozy Office Space',
    category: 'Interior Design',
    image: 'office.jpg'
  },
  {
    title: 'Elegant Kitchen',
    category: 'Interior Design',
    image: 'kitchen.jpg'
  }
];

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title>My Projects</Title>
          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </ProjectGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 8rem 0;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #0A192F;
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Playfair Display', serif;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

export default Portfolio;