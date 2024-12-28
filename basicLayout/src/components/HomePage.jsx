import React from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartLearning = () => {
    navigate('/login'); // Redirect to login page on button click
  };

  return (
    <div id="home" className="relative text-white text-center h-screen">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
      <Spline scene="https://prod.spline.design/kgENI2olV8cTeK3m/scene.splinecode" />
      </div>
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-bold">Empower Your Engineering Journey!</h1>
        <p className="mt-4 text-lg">Learn with the best resources for engineering students.</p>
        <button
          className="mt-8 bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-gray-200 transition-all"
          onClick={handleStartLearning} // Add onClick to trigger navigation
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}

export default HomePage;


