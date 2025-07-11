
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: '#1976d2' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">My App</Typography>
        <div>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
