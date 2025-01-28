import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectCard = ({ title, category, image, index }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <ImageWrapper>
        <img src={`/images/${image}`} alt={title} />
        <Overlay>
          <h3>{title}</h3>
          <p>{category}</p>
        </Overlay>
      </ImageWrapper>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  padding: 1rem;

  &:hover {
    opacity: 1;
  }

  h3 {
    color: #FFD700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #fff;
    font-size: 0.9rem;
  }
`;

export default ProjectCard;