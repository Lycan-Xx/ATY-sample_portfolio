import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Section id="home">
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Greeting>Hello, I'm Aliyu.</Greeting>
          <Subtitle>I design stunning interiors and architectural models.</Subtitle>
        </motion.div>

        <ButtonGroup>
          <Button
            to="portfolio"
            smooth={true}
            duration={500}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            View Portfolio
          </Button>
          <Button
            to="contact"
            smooth={true}
            duration={500}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hire Me
          </Button>
        </ButtonGroup>
      </Content>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #0A192F 0%, #020C1B 100%);
  padding-top: 80px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Greeting = styled.h1`
  font-size: 4rem;
  color: #FFD700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #F8F8F8;
  margin-bottom: 2rem;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #FFD700;
  color: #FFD700;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    background: #FFD700;
    color: #0A192F;
  }
`;

export default Hero;
