import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword({ setUser }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`/api/users/reset-password/${id}/${token}`, { password });
    // Clear any stored tokens or user state if needed
    localStorage.removeItem('token');
    setUser(null);
    // Redirect to login page
    navigate('/login');
  } catch (error) {
    setError(error.response?.data?.message || 'Server error');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Reset Password</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="New Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
