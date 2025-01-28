import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Content>
          <Copyright>
            &copy; 2025 Aliyu Tasiu Yusuf. All rights reserved.
          </Copyright>
          
          <SocialLinks>
            <SocialItem 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} color="#FFD700" />
              </a>
            </SocialItem>
            
            <SocialItem 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub size={24} color="#FFD700" />
              </a>
            </SocialItem>
            
            <SocialItem 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <a href="mailto:contact@example.com">
                <FaEnvelope size={24} color="#FFD700" />
              </a>
            </SocialItem>
          </SocialLinks>
        </Content>
      </Container>
    </FooterSection>
  );
};

// Styled Components
const FooterSection = styled.footer`
  background: #0A192F;
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Copyright = styled.p`
  color: #F8F8F8;
  font-size: 0.9rem;
  text-align: center;
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

const SocialItem = styled(motion.li)`
  a {
    display: flex;
    padding: 0.5rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Footer;
