import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ExperienceAcceleratorNotebook from './ExperienceAcceleratorNotebook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience-accelerator-notebook" element={<ExperienceAcceleratorNotebook />} />
      </Routes>
    </Router>
  );
}

export default App;
