// src/components/ForgotPassword.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiMail, FiArrowLeft } from "react-icons/fi";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // For success message
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const { data } = await axios.post(`${API_URL}/api/users/forgot-password`, { email });
      setMessage(data.message);
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Forgot Password</h2>
        <p className="text-center text-gray-500 mb-8">Enter your email to get a reset link.</p>

        {error && <p className="text-red-500 text-center mb-4 bg-red-100 p-3 rounded-lg">{error}</p>}
        {message && <p className="text-green-600 text-center mb-4 bg-green-100 p-3 rounded-lg">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              required placeholder="Your Email Address"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            Send Reset Link
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

export default ForgotPassword;