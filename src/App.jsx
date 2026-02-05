import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MemeCompetition from './pages/MemeCompetition';
import './App.css'; // Importing for consistency, though currently empty

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memecomp" element={<MemeCompetition />} />
      </Routes>
    </Router>
  );
}

export default App;
