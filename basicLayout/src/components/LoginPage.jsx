import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline'; // Import Spline

const LoginPage = () => {
  return (
    <div className="relative h-screen">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0">
      <Spline scene="https://prod.spline.design/kgENI2olV8cTeK3m/scene.splinecode" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

