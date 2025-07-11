
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
