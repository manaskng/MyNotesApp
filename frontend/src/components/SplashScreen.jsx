// src/components/SplashScreen.jsx

import React from 'react';
import { FiEdit2 } from 'react-icons/fi';

function SplashScreen() {
  // Style object for the gradient logo text, same as the landing page
  const logoStyle = {
    background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      {/* The pulsing animation is added here */}
      <div className="flex items-center space-x-3 animate-pulse">
        <FiEdit2 className="w-10 h-10 text-blue-500" />
        <span 
          className="text-4xl font-bold" 
          style={logoStyle}
        >
          NanoNotes
        </span>
      </div>
      <p className="mt-4 text-gray-500">Organizing your thoughts...</p>
    </div>
  );
}

export default SplashScreen;