
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/Animatedroutes';
import Navbar from './components/Navbar';
import Counter from './components/counter'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Counter />
    </Router>
  );
};

export default App;
