import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDrawPolygon, FaCube, FaRulerCombined } from 'react-icons/fa';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Title>About Me</Title>
          <ContentWrapper>
            <Bio>
              I am an architecture student with a passion for interior design and 3D modeling. 
              I specialize in creating beautiful, functional spaces using tools like Revit and ArchiCAD. 
              With years of freelance experience, I bring both creativity and precision to every project.
            </Bio>
            
            <SkillsGrid>
              <SkillCard>
                <FaDrawPolygon size={40} color="#FFD700" />
                <SkillTitle>Interior Design</SkillTitle>
                <SkillText>Space optimization & aesthetic solutions</SkillText>
              </SkillCard>
              
              <SkillCard>
                <FaCube size={40} color="#FFD700" />
                <SkillTitle>3D Modeling</SkillTitle>
                <SkillText>Detailed architectural visualization</SkillText>
              </SkillCard>
              
              <SkillCard>
                <FaRulerCombined size={40} color="#FFD700" />
                <SkillTitle>Precision Planning</SkillTitle>
                <SkillText>Technical drawings & specifications</SkillText>
              </SkillCard>
            </SkillsGrid>
          </ContentWrapper>
        </motion.div>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 8rem 0;
  background: #F8F8F8;
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

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Lato', sans-serif;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #0A192F;
  margin: 1rem 0;
`;

const SkillText = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

export default About;