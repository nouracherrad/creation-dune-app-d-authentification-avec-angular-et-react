import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/Auth'; // Assurez-vous que le chemin est correct
import Dashboard from './pages/Dashboard'; // Autres composants

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige vers /login */}
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Autres routes */}
      </Routes>
    </Router>
  );
}

export default App;
