
import HeroSection from '../components/Herosection';
import FeatureCard from '../components/Featurecard';
import Counter from '../components/counter';
import { Container, Grid } from '@mui/material';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard title="Speed" description="Optimized with Vite" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard title="Flexibility" description="Built using MUI" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard title="Animations" description="With Framer Motion" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
