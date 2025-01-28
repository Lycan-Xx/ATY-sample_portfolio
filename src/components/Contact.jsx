import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert('Message successfully sent!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send the message, please try again.');
    });
  };

  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title>Get in Touch</Title>
          <Form ref={form} onSubmit={handleSubmit}>
            <InputGroup>
              <Input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
              <Input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </InputGroup>
            <TextArea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              required 
            />
            <SubmitButton type="submit">
              Send Message <FaPaperPlane />
            </SubmitButton>
          </Form>
        </motion.div>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 8rem 0;
  background: #0A192F;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #FFD700;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #FFD700;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;

  &::placeholder {
    color: rgba(255,255,255,0.7);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #FFD700;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  resize: vertical;

  &::placeholder {
    color: rgba(255,255,255,0.7);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: #FFD700;
  color: #0A192F;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  margin: 0 auto;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

export default Contact;