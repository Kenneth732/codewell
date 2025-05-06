import Navbar from './components/Navbar';
import Hero from './components/Hero';
import 'animate.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'animate.css/animate.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;