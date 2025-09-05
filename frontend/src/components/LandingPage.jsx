// src/components/LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiUserPlus, FiGithub, FiZap, FiLock, FiCloud, FiEdit2 } from "react-icons/fi";

function LandingPage() {
  const Feature = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">{icon}</div>
        <h3 className="ml-4 text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{children}</p>
    </div>
  );

  // Style object for the gradient logo text
  const logoStyle = {
    background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className="bg-slate-100">
      {/* Header/Navbar */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <FiEdit2 className="w-7 h-7 text-blue-600" />
          <span 
            className="text-2xl font-bold" 
            style={logoStyle} // Applying the inline style here
          >
            NanoNotes
          </span>
        </Link>
        {/* Nav Buttons */}
        <div className="flex items-center space-x-2">
          <Link to="/login" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">
            Login
          </Link>
          <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-transform hover:scale-105">
            Sign Up
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
          <div className="w-full">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              Capture Ideas, Instantly.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              NanoNotes is your minimalist, secure, and lightning-fast solution for capturing thoughts, ideas, and reminders.
            </p>
            <div className="flex justify-center">
              <Link to="/register" className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105">
                <FiUserPlus className="mr-2" />
                Get Started for Free
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose NanoNotes?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon={<FiZap size={24} />} title="Fast & Lightweight">
              No clutter, no distractions. Just a clean, fast interface to get your thoughts down quickly.
            </Feature>
            <Feature icon={<FiLock size={24} />} title="Secure & Private">
              Your notes are your own. With secure JWT authentication, your data is protected and private.
            </Feature>
            <Feature icon={<FiCloud size={24} />} title="Access Anywhere">
              With a responsive design, access and manage your notes on your desktop, tablet, or phone.
            </Feature>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white mt-20">
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} NanoNotes. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="mr-4">Created by Manas Raj</p>
            <a href="https://github.com/manaskng/MyNotesApp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FiGithub size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;