import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-around">
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#courses" className="hover:text-blue-400">Courses</a></li>
            <li><a href="#videos" className="hover:text-blue-400">Videos</a></li>
            <li><a href="#placements" className="hover:text-blue-400">Placements</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2">Email: contact@learnplatform.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
