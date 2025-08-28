import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // ✅ backend URL from env
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/users/login`, {
        email,
        password,
      });
      localStorage.setItem('token', data.token);
      setUser(data);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Server error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-500 ease-in-out animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-wide">
          Welcome Back
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          <Link
            className="text-cyan-500 hover:text-cyan-950"
            to="/forgot-password"
          >
            Forgot Password
          </Link>
          <br />
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-indigo-600 hover:underline hover:text-indigo-800 transition"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
