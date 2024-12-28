import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import VideosPage from './components/VideosPage';
import PlacementsPage from './components/PlacementsPage';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';   // Add this import
import SignupPage from './components/SignupPage'; // Add this import

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/login" element={<LoginPage />} />  {/* Add route for Login */}
          <Route path="/signup" element={<SignupPage />} /> {/* Add route for Signup */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


