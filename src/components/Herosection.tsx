
import { Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My App
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Built with React + MUI + Framer Motion
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </motion.div>
    </Container>
  );
};

export default HeroSection;
