// src/components/ResetPassword.jsx

import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FiLock, FiArrowLeft } from "react-icons/fi";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseURL = import.meta.env.VITE_API_URL;
      await axios.post(`${baseURL}/api/users/reset-password/${id}/${token}`, { password });
      alert("Password has been reset successfully! Please log in.");
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid or expired link.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Set a New Password</h2>
        <p className="text-center text-gray-500 mb-8">Please enter your new password below.</p>
        
        {error && <p className="text-red-500 text-center mb-4 bg-red-100 p-3 rounded-lg">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FiLock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              required placeholder="New Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            Reset Password
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="flex items-center justify-center text-sm font-medium text-gray-600 hover:text-blue-600">
            <FiArrowLeft className="mr-2" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;