
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Responsive Dashboard
        </Typography>

        <Grid container spacing={3}>
          {[1, 2, 3].map((i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Card {i}</Typography>
                    <Typography>Mobile-first responsive layout.</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="contained">Explore More</Button>
          </motion.div>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
