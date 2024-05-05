import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';

function App() {
  AOS.init();
  
  return (
    <HomePage />
  );
}

export default App;
