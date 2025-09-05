// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FiMail, FiLock } from "react-icons/fi";

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/users/login`, { email, password });
      localStorage.setItem('token', data.token);
      setUser(data);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-8">Log in to continue to NanoNotes</p>
        
        {error && <p className="text-red-500 text-center mb-4 bg-red-100 p-3 rounded-lg">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              required placeholder="Email"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              required placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link className="font-medium text-blue-600 hover:underline" to="/forgot-password">
            Forgot Password?
          </Link>
          <p className="mt-2 text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;