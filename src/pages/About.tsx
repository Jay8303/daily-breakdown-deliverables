
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: 20 }}
    >
      <h1>About Page</h1>
      <p>This is a simple About page.</p>
    </motion.div>
  );
};

export default About;
