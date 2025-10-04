import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/login">Login</Link> | <Link to="/cadastro">Cadastro</Link>
        </nav>
        <hr />
        
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;