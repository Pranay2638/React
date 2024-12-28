import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">LearnPlatform</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/courses" className="hover:text-blue-400">Courses</Link></li>
          <li><Link to="/videos" className="hover:text-blue-400">Videos</Link></li>
          <li><Link to="/placements" className="hover:text-blue-400">Placements</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

