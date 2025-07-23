import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-white p-4 text-xl font-bold">E-Learning Platform</header>
        <nav className="bg-blue-100 p-4 flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/course" className="hover:underline">Course</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
